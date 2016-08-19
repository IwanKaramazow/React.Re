// GENERATED CODE BY BUCKLESCRIPT VERSION 0.9.3 , PLEASE EDIT WITH CARE
'use strict';

var Block    = require("bs-platform/lib/js/block");
var Curry    = require("bs-platform/lib/js/curry");
var $$String = require("bs-platform/lib/js/string");
var List     = require("bs-platform/lib/js/list");

function make(t) {
  return /* OpaqueElement */[/* record */[
            /* form : TextNode */Block.__(2, [t]),
            /* children : [] */0
          ]];
}

var Text = /* module */[/* make */make];

function CreateDOMComponent(D) {
  var tag = D[/* tag */0];
  var make = function (styleString, children) {
    var element = /* DOMElement */Block.__(0, [/* record */[
          /* tag */tag,
          /* style */styleString
        ]]);
    return /* OpaqueElement */[/* record */[
              /* form */element,
              /* children */children
            ]];
  };
  return /* module */[
          /* tag */tag,
          /* make */make
        ];
}

function Stateless() {
  var getInitialState = function () {
    return /* () */0;
  };
  var componentWillMount = function () {
    return /* () */0;
  };
  return /* module */[
          /* getInitialState */getInitialState,
          /* componentWillMount */componentWillMount
        ];
}

function Stateful() {
  var componentWillMount = function (param) {
    return param[/* state */1];
  };
  return /* module */[/* componentWillMount */componentWillMount];
}

function CreateComponent(Component) {
  var getInitialState = Component[0];
  var componentWillMount = Component[1];
  var render = Component[2];
  var createInstanceFromElement = function (param) {
    var initProps = param[/* initProps */0];
    return /* OpaqueInstance */[/* record */[
              /* props */initProps,
              /* state */Curry._1(param[/* getInitialState */1], initProps)
            ]];
  };
  var make = function (children, props) {
    var description = /* record */[
      /* initProps */props,
      /* getInitialState */getInitialState,
      /* componentWillMount */componentWillMount,
      /* render */render,
      /* createInstanceFromElement */createInstanceFromElement
    ];
    var element = /* ReactElement */Block.__(1, [description]);
    if (children) {
      return /* OpaqueElement */[/* record */[
                /* form */element,
                /* children */children[0]
              ]];
    }
    else {
      return /* OpaqueElement */[/* record */[
                /* form */element,
                /* children : [] */0
              ]];
    }
  };
  return /* module */[
          /* getInitialState */getInitialState,
          /* componentWillMount */componentWillMount,
          /* render */render,
          /* createInstanceFromElement */createInstanceFromElement,
          /* make */make
        ];
}

var tag = "h3";

function make$1(styleString, children) {
  var element = /* DOMElement */Block.__(0, [/* record */[
        /* tag */tag,
        /* style */styleString
      ]]);
  return /* OpaqueElement */[/* record */[
            /* form */element,
            /* children */children
          ]];
}

var H3 = /* module */[
  /* tag */tag,
  /* make */make$1
];

var tag$1 = "div";

function make$2(styleString, children) {
  var element = /* DOMElement */Block.__(0, [/* record */[
        /* tag */tag$1,
        /* style */styleString
      ]]);
  return /* OpaqueElement */[/* record */[
            /* form */element,
            /* children */children
          ]];
}

var Div = /* module */[
  /* tag */tag$1,
  /* make */make$2
];

var tag$2 = "button";

function make$3(styleString, children) {
  var element = /* DOMElement */Block.__(0, [/* record */[
        /* tag */tag$2,
        /* style */styleString
      ]]);
  return /* OpaqueElement */[/* record */[
            /* form */element,
            /* children */children
          ]];
}

var Button = /* module */[
  /* tag */tag$2,
  /* make */make$3
];

var DOM = /* module */[
  /* H3 */H3,
  /* Div */Div,
  /* Button */Button
];

function render(tree) {
  var render$prime = function (_node) {
    while(true) {
      var node = _node;
      var unpackedElement = node[0];
      var form = unpackedElement[/* form */0];
      switch (form.tag | 0) {
        case 0 : 
            var match = form[0];
            var style = match[/* style */1];
            var tag = match[/* tag */0];
            var renderedChildren = $$String.concat("", List.map(render$prime, unpackedElement[/* children */1]));
            if (style) {
              return $$String.concat("", /* :: */[
                          "<",
                          /* :: */[
                            tag,
                            /* :: */[
                              ' style="',
                              /* :: */[
                                style[0],
                                /* :: */[
                                  '">',
                                  /* :: */[
                                    renderedChildren,
                                    /* :: */[
                                      "</",
                                      /* :: */[
                                        tag,
                                        /* :: */[
                                          ">",
                                          /* [] */0
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]);
            }
            else {
              return $$String.concat("", /* :: */[
                          "<",
                          /* :: */[
                            tag,
                            /* :: */[
                              ">",
                              /* :: */[
                                renderedChildren,
                                /* :: */[
                                  "</",
                                  /* :: */[
                                    tag,
                                    /* :: */[
                                      ">",
                                      /* [] */0
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]);
            }
        case 1 : 
            var description = form[0];
            var instance_000 = /* props */description[/* initProps */0];
            var instance_001 = /* state */Curry._1(description[/* getInitialState */1], description[/* initProps */0]);
            var instance = /* record */[
              instance_000,
              instance_001
            ];
            var instance_000$1 = /* props */description[/* initProps */0];
            var instance_001$1 = /* state */Curry._1(description[/* componentWillMount */2], instance);
            var instance$1 = /* record */[
              instance_000$1,
              instance_001$1
            ];
            _node = Curry._1(description[/* render */3], instance$1);
            continue ;
            case 2 : 
            return form[0];
        
      }
    };
  };
  return render$prime(tree);
}

exports.Text               = Text;
exports.CreateDOMComponent = CreateDOMComponent;
exports.Stateless          = Stateless;
exports.Stateful           = Stateful;
exports.CreateComponent    = CreateComponent;
exports.DOM                = DOM;
exports.render             = render;
/* No side effect */
