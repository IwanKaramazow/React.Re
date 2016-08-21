/* EXPERIMENT thin wrapper around createClass, not the ML way of life */
let module React = {
  type reactElement;
  /* external add : int -> int -> int = "add" [@@bs.val] [@@bs.module "x"] */
  type reactClass;
  external createClass : 'classSpec => reactClass = "createClass" [@@bs.val] [@@bs.module "react"];
  external createElement : 'form => 'props => 'children => reactElement = "createElement" [@@bs.val] [@@bs.module
                                                                    "react"
                                                                    ];
};

let module ReactDOM = {
  type domNode;
  external render : React.reactElement => domNode => unit = "render" [@@bs.val] [@@bs.module
                                                                    "react-dom"
                                                                    ];
  external getElementById : string => domNode = "document.getElementById" [@@bs.val];
};

type counterState = {count: int};

let app = React.createClass (
{
  method getInitialState () => {count: 100};
  method handleClick _ => {
    let {count} = React.getMlState this;
    let nextState =  {count: count + 1};
    React.setMlState nextState;
  };
  method componentDidMount () => Js.log this;
  method render () =>
    React.createElement
      "div"
      [%bs.obj {}]
      [|React.createElement "button" [%bs.obj {onClick: this##handleClick}] "Click me!"|]
}
[@bs]
);

let root = React.createElement app Js.Null.empty Js.Null.empty;

ReactDOM.render root (ReactDOM.getElementById "app");
