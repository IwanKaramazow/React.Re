
let react_dom = Js.Unsafe.js_expr {|
    require("react-dom")
  |};

let render component::el node::node =>
  Js.Unsafe.meth_call react_dom "render" [|Js.Unsafe.inject el, Js.Unsafe.inject node|];
