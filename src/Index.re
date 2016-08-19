open Lwt;

open Cohttp;

open Cohttp_lwt_unix;

open React;

let module ReactDOMServerNative = {
  let renderToString = React.render;
};

type counterProps = {initialCount: int};

type counterState = {count: int};

let module Counter = CreateComponent {
  include Stateful {
    type props = counterProps;
    type state = counterState;
  };
  let getInitialState {initialCount} => {count: initialCount};
  let componentWillMount {state: {count}} => {count: count + 5};
  let render {props: {initialCount}, state: {count}} => DOM.Div.make [
    DOM.Div.make [Text.make ("Initial count (from props): " ^ string_of_int initialCount)],
    DOM.Div.make [Text.make ("Current count (from state): " ^ string_of_int count)]
  ];
};

type titleProps = string;

let module Title = CreateComponent {
  include Stateless {
    type props = titleProps;
  };
  let titleStyle = "border: 1px solid black; padding: 10px; width: 290px;";
  let render {props} => DOM.H3.make styleString::titleStyle [Text.make ("Title: " ^ props)];
};

let app = DOM.Div.make [
  Title.make "Native server side rendering!",
  Counter.make {initialCount: 0},
  DOM.Div.make styleString::"margin-top: 20px;" [Text.make "Another div"]
];

let html = ReactDOMServerNative.renderToString app;

let page =
  "<!doctype html>\n<html>\n  <head>\n    <title>Reason React</title>\n  </head>\n  <body>\n    <div id=\"app\">" ^
    html ^ "</div>\n    <script src=\"./bundle.js\"></script>\n  </body>\n</html>";

let server = {
  let callback _conn req body => {
    let uri = req |> Request.uri |> Uri.to_string;
    if (uri == "//localhost:8000/") {
      Server.respond_string status::`OK body::page ()
    } else if (
      uri == "//localhost:8000/bundle.js"
    ) {
      Server.respond_file fname::"./resources/bundle.js" ()
    } else {
      Server.respond_string status::`OK body::page ()
    }
  };
  Server.create mode::(`TCP (`Port 8000)) (Server.make callback::callback ())
};

let () = ignore (Lwt_main.run server);

/* server compiled to bytecode/native */
let ff = (1, 2 [@bs.val]);
