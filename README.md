# React.re

Typed React bindings for Reason. 🏂

## Is it possible?
Yes, maybe. Reason can be compiled to javascript with js_of_ocaml. So that's a win. That being said, Bucklescript is probably a better idea.
We can't compile Reason with Bucklescript yet. Js_of_ocaml it is!

## Api sketch

I found an api sketch for Ocaml bindings written by React's godfather, @Jordwalke, in the depths of [githubs gist](https://gist.github.com/jordwalke/67819c91df1552009b22b22)

```Ocaml
open ReactDOM

(* Component Properties *)
type props = {count: int}

(* Hey, state can be any type! *)
type state = string

(* Initializer *)
let getInitialState props = "neverBeenClicked"

(* Signal handlers - these simply return the next state. *)
let componentWillReceiveProps props (prevProps, prevState) = prevState
let handleClick {props; state; updater} evt = "hasBeenClicked"

(* Render: props and state as arguments, just like we've always wanted *)
let render {props; state; updater} = [
  Div.make
    ~styleString: "Omit to rely on defaults #thanksOCaml - no really, thanks OCaml"
    ~className: ("P:" ^ props.prefix ^ " S:" ^ state)
    ~onClick: (updater handleClick)
    ~children: []
]
```

## Deep reflection & over-analysing

 * All Signal handlers return state. This is actually pretty practual, I think.
 * the `this` value in a component, is a record which contains props, state and an updater. Make sense, we've always thought of it that way.
 * I've got no idea what that updater does. It probably takes a function, that returns a state, and updates that state when returned. From what I understand it's like `setState` but takes a function that returns state...
 * Render returns a list?  
 * Dom components take named/default args. This is an awesome, very powerful idea!
 * Makes sense that every component is a module with it's own types of props & state.

## Result so far

```
open React;
open React.DOM;
type jsObject = Js.Unsafe.any;

let module Counter = React.CreateComponent {
  type props = string;
  /* conversion of props from & to js */
  type underlyingJsProps = Js.t Js.js_string;
  let props_to_js props => Js.string props;
  let props_from_js js_props => Js.to_string js_props;

  type state = {counter: int};

   /* conversion of state from & to js */
  type underlyingJsState = jsObject;
  let state_to_js {counter} => Js.Unsafe.obj [|("counter", Js.Unsafe.inject counter)|];
  let state_from_js js_state => {
    let count = Js.Unsafe.get js_state "counter";
    {counter: count}
  };

  let getInitialState () => {counter: 1};
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
```

## Blood, sweat & tears.
* React children are a string or React element. I represented it with a variant:    `type children = | Text string | Component element`. No idea if we could circumvent this.
* My `render` takes 3 args (props, state, updater). In the api sketch it's a record. Honestly I've got no idea how to make a record out of it. `props` & `state` are different types for different modules. I think I would need to define an extra type (with that record) for every module... Feels redundant.
* What if a component has no props??? The `CreateComponent` functor takes a module containing both `type props` & `type state`. Should I define an extra functor `CreateComponentWithoutProps`? Seems like a bad idea. Or maybe I should make type props & state an option?
* The biggest hurdle is the conversion of `props` & `state` to and from javascript. This is a lot of boilerplate. Under the hood the props get written to `reason$props`. Even with Bucklescript, if we have to do this for every props out there... Ideas are *very* welcome.
* Inline styles: I think I'm going to have to write a typed css wrapper 🤗.

## Development
```
 (make sure you have reason installed + js_of_ocaml)
 git clone
 npm install
 webpack-dev-serv --serve-content resources/
 node watch
```

## Other
CommonML should be replaced asap with Jengaboot.
