
type reactInstance 'props 'state = {props: 'props, state: 'state};

/* opaqueReactInstance => Gadt wrapped descriptor, helpfull when returning GADTs that hide their heterogeneous types */
type opaqueReactInstance = | OpaqueInstance of (reactInstance 'p 's) :opaqueReactInstance;

type element 'props 'state = {form: form 'props 'state, children: list opaqueElement}
and opaqueElement = | OpaqueElement of (element 'props 'state) :opaqueElement
and elementDescription 'props 'state = {
  initProps: 'props,
  getInitialState: 'props => 'state,
  componentWillMount: reactInstance 'props 'state => 'state,
  render: reactInstance 'props 'state => opaqueElement,
  createInstanceFromElement: elementDescription 'props 'state => opaqueReactInstance
}
and form 'props 'state =
  | DOMElement of string | ReactElement of (elementDescription 'props 'state) | TextNode of string;

/* let unpack: opaqueElement => element = fun opaque => sw */
/*type opaqueElement is a GADT wrapped descriptor, helpfull when returning GADTs that hide their heterogeneous types */
let module Text = {
  let make: type a. string => opaqueElement =
    fun t => OpaqueElement {form: TextNode t, children: []};
};

module type DOMComponent = {let tag: string; let make: list opaqueElement => opaqueElement;};

let module CreateDOMComponent (D: {let tag: string;}) :DOMComponent => {
  let tag = D.tag;
  let make children => {
    let element = DOMElement tag;
    OpaqueElement {form: element, children}
  };
};

let module Stateless (M: {type props;}) => {
  type props = M.props;
  type state = unit;
  let getInitialState: props => state = fun p => ();
  let componentWillMount: reactInstance props state => state = fun this => ();
};

/* let module Stateful (M: {type props; type state;}) => { */
/*   include M; */
/*   let getInitialState: props => state = fun p => (); */
/*   let componentWillMount: reactInstance props state => state = fun this => (); */
/* }; */
module type ComponentSpec = {
  type props;
  type state;
  let getInitialState: props => state;
  let componentWillMount: reactInstance props state => state;
  let render: reactInstance props state => opaqueElement;
};

module type Component = {
  type props;
  type state;
  let getInitialState: props => state;
  let componentWillMount: reactInstance props state => state;
  let render: reactInstance props state => opaqueElement;
  let createInstanceFromElement: elementDescription props state => opaqueReactInstance;
  let make: props => list opaqueElement => opaqueElement;
};

let module CreateComponent
           (Component: ComponentSpec)
           :(Component with type props = Component.props) => {
  include Component;
  let createInstanceFromElement: elementDescription props state => opaqueReactInstance =
    fun {initProps, getInitialState} =>
      OpaqueInstance {props: initProps, state: getInitialState initProps};
  let make props children => {
    let description: elementDescription props state = {
      initProps: props,
      getInitialState,
      componentWillMount,
      render,
      createInstanceFromElement
    };
    let element = ReactElement description;
    OpaqueElement {form: element, children}
  };
};

let module DOM = {
  let module H3 = CreateDOMComponent {
    let tag = "h3";
  };
  let module Div = CreateDOMComponent {
    let tag = "div";
  };
};

let render: opaqueElement => string =
  fun tree => {
    let rec render' node =>
      switch node {
      | OpaqueElement unpackedElement =>
        let {form, children} = unpackedElement;
        switch form {
        | DOMElement tag =>
          let renderedChildren = String.concat "" (List.map (fun s => render' s) children);
          String.concat "" ["<", tag, ">", renderedChildren, "</", tag, ">"]
        | TextNode text => text
        | ReactElement description =>
          let instance = {
            props: description.initProps,
            state: description.getInitialState description.initProps
          };
          let instance = {
            props: description.initProps,
            state: description.componentWillMount instance
          };
          let node = description.render instance;
          render' node
        }
      };
    render' tree
  };
