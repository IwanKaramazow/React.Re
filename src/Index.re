
open Lwt;

open Cohttp;

open Cohttp_lwt_unix;

open React;

type counterProps = {initialCount: int};

let module Counter = CreateComponent {
  include Stateless {type props = counterProps;};
  let render {props: {initialCount}} => DOM.Div.make [
    Text.make ("Initial count (from props): " ^ string_of_int initialCount)
  ];
};

type titleProps = string;

let module Title = CreateComponent {
  include Stateless {type props = titleProps;};
  let render {props} => DOM.H3.make [Text.make ("Title: " ^ props)];
};

let app = DOM.Div.make [
  Title.make "Native server side rendering!" [],
  Counter.make {initialCount: 0} [],
  DOM.Div.make [Text.make "Another div"]
];

let html = React.render app;

let server = {
  let callback _conn req body => Server.respond_string status::`OK body::html ();
  Server.create mode::(`TCP (`Port 8000)) (Server.make callback::callback ())
};

let () = ignore (Lwt_main.run server);
