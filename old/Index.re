

open React;

open React.DOM;

type jsObject = Js.Unsafe.any;

let module Counter = React.CreateComponent {
  include React.Defaults {
      type props = string;
      type state = {counter: int};
  };
  /* type props = string; */
  /* type underlyingJsProps = Js.t Js.js_string;
  let props_to_js props => Js.string props;
  let props_from_js js_props => Js.to_string js_props; */
  /* type state = {counter: int}; */
  /* type underlyingJsState = jsObject;
  let state_to_js {counter} => Js.Unsafe.obj [|("counter", Js.Unsafe.inject counter)|];
  let state_from_js js_state => {
    let count = Js.Unsafe.get js_state "counter";
    {counter: count}
  }; */
  let getInitialState () => {counter: 1};
  let componentWillMount () => {()};
  let handleClick {counter} evt => {counter: counter + 1};
  let render props state updater => Div.make [
    Component (Button.make children::[Text "Increment!"] onClick::(updater handleClick)),
    Text ("State: " ^ string_of_int state.counter)
    /* Text ("Props: " ^ props) */
  ];

};

let title title => H3.make [Text title];

let counter = Counter.make "Those are some string props";

let app = Div.make [Component (title "Counter example"), Component counter];

let root_node = Dom_html.getElementById "app";

ReactDOM.render component::app node::root_node;
