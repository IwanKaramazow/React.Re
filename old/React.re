
type component = Js.Unsafe.any;

type children = | Text of string | Component of component;

let react = Js.Unsafe.js_expr {|
    require("react")
  |};

let module DOM = {
  let dom = Js.Unsafe.get react "DOM";
  type react_children = array Js.Unsafe.any;
  type tag = string;
  type props = array Js.Unsafe.any;

  let createDomElement: tag => props => react_children => 'a =
    fun name props children =>
      Js.Unsafe.fun_call (Js.Unsafe.get dom (Js.string name)) (Array.append props children);
  module type DomTag = {let tag: tag;};
  /* Functor to generate React.DOM.* */
  let module CreateDomComponent (D: DomTag) => {
    let make: onClick::(unit => unit)? => children::list children => component =
      fun onClick::onClick=? children::children => {
        let react_children = Array.of_list (
          List.map
            (
              fun x =>
                switch x {
                | Text t => Js.Unsafe.inject (Js.string t)
                | Component c => Js.Unsafe.inject c
                }
            )
            children
        );
        let props =
          switch onClick {
          | None => [|Js.Unsafe.inject Js.null|]
          | Some fn => [|
              Js.Unsafe.obj [|("onClick", Js.Unsafe.inject (Js.wrap_meth_callback fn))|]
            |]
          };
        createDomElement D.tag props react_children
      };
  };
  let module Div = CreateDomComponent {
    let tag = "div";
  };
  let module H3 = CreateDomComponent {
    let tag = "h3";
  };
  let module Button = CreateDomComponent {
    let tag = "button";
  };
};

let createElement tag props children =>
  Js.Unsafe.meth_call
    react
    "createElement"
    [|Js.Unsafe.inject (Js.string tag), Js.Unsafe.inject props, Js.Unsafe.inject children|];

let create_class renderer getInitialStater => {
  let comp_opts = Js.Unsafe.obj [|
    ("render", Js.Unsafe.inject (Js.wrap_meth_callback renderer)),
    ("getInitialState", Js.Unsafe.inject (Js.wrap_callback getInitialStater))
  |];
  Js.Unsafe.meth_call react "createClass" [|comp_opts|]
};

let make_component comp opts => {
  let opt = Js.Unsafe.inject (Js.Unsafe.obj opts);
  Js.Unsafe.meth_call react "createElement" [|comp, opt|]
};

module type Stateful = {
  type state;
  type props;
};

let module Defaults(C: Stateful) => {
  type state = C.state;
  type props = C.props;
  let componentWillMount () => {()};
  let componentDidMount () => {()};
  let componentWillReceiveProps () => {()};
  let shouldComponentUpdate () => {()};
  let componentWillUpdate () => {()};
  let componentDidUpdate () => {()};
  let componentWillUnmount () => {()};
};

module type Component = {
  type props;
  type underlyingJsProps;
  let props_to_js: props => underlyingJsProps;
  let props_from_js: underlyingJsProps => props;
  type state;
  type underlyingJsState;
  let state_to_js: state => underlyingJsState;
  let state_from_js: underlyingJsState => state;
  let render: props => state => ((state => 'a => state) => unit => unit) => component;
  let getInitialState: unit => state;
  let componentWillMount: unit => unit;
  let componentDidMount: unit => unit;
  let componentWillReceiveProps: unit => unit;
  let shouldComponentUpdate: unit => unit;
  let componentWillUpdate: unit => unit;
  let componentDidUpdate: unit => unit;
  let componentWillUnmount: unit => unit;
};

let make_element c => Js.Unsafe.meth_call react "createElement" [|Js.Unsafe.inject c|];

module type ReactClass = {type state; type props; let make: props => component;};

let module CreateComponent (C: Component) :(ReactClass with type props = C.props) => {
  type state = C.state;
  type props = C.props;
  let render_callback this => {
    let react_props = Js.Unsafe.get this "props";
    let js_reason_props = Js.Unsafe.get react_props "reason$props";
    let reason_props = C.props_from_js js_reason_props;
    let react_state = Js.Unsafe.get this "state";
    let js_reason_state = Js.Unsafe.get react_state "reason$state";
    let reason_state = C.state_from_js js_reason_state;
    let updater f => {
      /* let st = Js.Unsafe.obj [|("counter", Js.Unsafe.inject (Js.string "maax"))|]; */
      let react_state = Js.Unsafe.get this "state";
      let js_reason_state = Js.Unsafe.get react_state "reason$state";
      let reason_state = C.state_from_js js_reason_state;
      let g x => {
        /* Js.Unsafe.meth_call this "setState" [|st|]; */
        /* let react_props = Js.Unsafe.get this "state";
           let js_reason_props = Js.Unsafe.get react_props "reason$state";
           let count = Js.Unsafe.get js_reason_props "counter"; */
        let res = f reason_state x;
        let newCounter = Js.Unsafe.inject (C.state_to_js res); /*Js.Unsafe.obj [|("counter", Js.Unsafe.inject 50)|];*/
        let st = Js.Unsafe.obj [|("reason$state", newCounter)|];
        /* let window = Js.Unsafe.js_expr "window";
           Js.Unsafe.set window "mama" this; */
        Js.Unsafe.meth_call this "setState" [|st|]
        /* print_endline  (Js.Unsafe.fun_call stringify [|Js.Unsafe.js_expr "{counter: 20}"|]); */
      };
      g
    };
    C.render reason_props reason_state updater
  };
  let getInitialState_callback this => Js.Unsafe.obj [|
    ("reason$state", Js.Unsafe.inject (C.state_to_js (C.getInitialState ())))
  |];
  let react_class = create_class render_callback getInitialState_callback;
  let make props =>
    make_component react_class [|("reason$props", Js.Unsafe.inject (C.props_to_js props))|];
};
