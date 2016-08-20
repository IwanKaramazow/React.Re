// GENERATED CODE BY BUCKLESCRIPT VERSION 0.9.3 , PLEASE EDIT WITH CARE
'use strict';

var $dot$slashpolyfill$dotjs = require("./polyfill.js");
var Pervasives               = require("bs-platform/lib/js/pervasives");
var Block                    = require("bs-platform/lib/js/block");
var Curry                    = require("bs-platform/lib/js/curry");
var React                    = require("react");
var $$Array                  = require("bs-platform/lib/js/array");
var ReactDom                 = require("react-dom");
var List                     = require("bs-platform/lib/js/list");

function make(t) {
  return /* OpaqueElement */[/* record */[
            /* form : TextNode */Block.__(2, [t]),
            /* children : [] */0
          ]];
}

var Text = /* module */[/* make */make];

function CreateDOMComponent(D) {
  var tag = D[/* tag */0];
  var make = function (props, children) {
    var props$1 = props ? /* Props */[props[0]] : /* Nothing */0;
    var element = /* DOMElement */Block.__(0, [/* record */[
          /* tag */tag,
          /* props */props$1
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

function componentWillMount() {
  return /* () */0;
}

function componentDidMount() {
  return /* () */0;
}

function componentWillReceiveProps(_, _$1) {
  return /* () */0;
}

function shouldComponentUpdate(_, _$1, _$2) {
  return /* true */1;
}

function componentWillUpdate(_, _$1, _$2) {
  return /* () */0;
}

function componentDidUpdate(_, _$1, _$2) {
  return /* () */0;
}

function componentWillUnmount() {
  return /* () */0;
}

var DefaultLifeCycle = /* module */[
  /* componentWillMount */componentWillMount,
  /* componentDidMount */componentDidMount,
  /* componentWillReceiveProps */componentWillReceiveProps,
  /* shouldComponentUpdate */shouldComponentUpdate,
  /* componentWillUpdate */componentWillUpdate,
  /* componentDidUpdate */componentDidUpdate,
  /* componentWillUnmount */componentWillUnmount
];

function Stateless() {
  var getInitialState = function () {
    return /* () */0;
  };
  var getCallbacks = function () {
    return /* () */0;
  };
  return /* module */[
          /* componentWillMount */componentWillMount,
          /* componentDidMount */componentDidMount,
          /* componentWillReceiveProps */componentWillReceiveProps,
          /* shouldComponentUpdate */shouldComponentUpdate,
          /* componentWillUpdate */componentWillUpdate,
          /* componentDidUpdate */componentDidUpdate,
          /* componentWillUnmount */componentWillUnmount,
          /* getInitialState */getInitialState,
          /* getCallbacks */getCallbacks
        ];
}

function Stateful() {
  return /* module */[
          /* componentWillMount */componentWillMount,
          /* componentDidMount */componentDidMount,
          /* componentWillReceiveProps */componentWillReceiveProps,
          /* shouldComponentUpdate */shouldComponentUpdate,
          /* componentWillUpdate */componentWillUpdate,
          /* componentDidUpdate */componentDidUpdate,
          /* componentWillUnmount */componentWillUnmount
        ];
}

function CreateComponent(Component) {
  var getInitialState = Component[0];
  var getCallbacks = Component[1];
  var componentWillMount = Component[2];
  var componentDidMount = Component[3];
  var componentWillReceiveProps = Component[4];
  var shouldComponentUpdate = Component[5];
  var componentWillUpdate = Component[6];
  var componentDidUpdate = Component[7];
  var componentWillUnmount = Component[8];
  var render = Component[9];
  var createInstanceFromJs = function (props, state, setState, callbacks) {
    return /* record */[
            /* props */props,
            /* state */state,
            /* setState */setState,
            /* callbacks */callbacks
          ];
  };
  var createPropsFromJs = function (props) {
    return props;
  };
  var createStateFromJs = function (state) {
    return state;
  };
  var createCallbacksFromJs = function (cb) {
    return cb;
  };
  var make = function (children, props) {
    var description = /* record */[
      /* initProps */props,
      /* getInitialState */getInitialState,
      /* getCallbacks */getCallbacks,
      /* componentWillMount */componentWillMount,
      /* componentDidMount */componentDidMount,
      /* componentWillReceiveProps */componentWillReceiveProps,
      /* shouldComponentUpdate */shouldComponentUpdate,
      /* componentWillUpdate */componentWillUpdate,
      /* componentDidUpdate */componentDidUpdate,
      /* componentWillUnmount */componentWillUnmount,
      /* render */render,
      /* createInstanceFromJs */createInstanceFromJs,
      /* createStateFromJs */createStateFromJs,
      /* createPropsFromJs */createPropsFromJs,
      /* createCallbacksFromJs */createCallbacksFromJs
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
          /* getCallbacks */getCallbacks,
          /* componentWillMount */componentWillMount,
          /* componentDidMount */componentDidMount,
          /* componentWillReceiveProps */componentWillReceiveProps,
          /* shouldComponentUpdate */shouldComponentUpdate,
          /* componentWillUpdate */componentWillUpdate,
          /* componentDidUpdate */componentDidUpdate,
          /* componentWillUnmount */componentWillUnmount,
          /* make */make
        ];
}

function Stateful$prime(Component) {
  var getInitialState = Component[0];
  var getCallbacks = Component[1];
  var componentWillMount = Component[2];
  var componentDidMount = Component[3];
  var componentWillReceiveProps = Component[4];
  var shouldComponentUpdate = Component[5];
  var componentWillUpdate = Component[6];
  var componentDidUpdate = Component[7];
  var componentWillUnmount = Component[8];
  var render = Component[9];
  var createInstanceFromJs = function (props, state, setState, callbacks) {
    return /* record */[
            /* props */props,
            /* state */state,
            /* setState */setState,
            /* callbacks */callbacks
          ];
  };
  var createPropsFromJs = function (props) {
    return props;
  };
  var createStateFromJs = function (state) {
    return state;
  };
  var createCallbacksFromJs = function (cb) {
    return cb;
  };
  var make = function (children, props) {
    var description = /* record */[
      /* initProps */props,
      /* getInitialState */getInitialState,
      /* getCallbacks */getCallbacks,
      /* componentWillMount */componentWillMount,
      /* componentDidMount */componentDidMount,
      /* componentWillReceiveProps */componentWillReceiveProps,
      /* shouldComponentUpdate */shouldComponentUpdate,
      /* componentWillUpdate */componentWillUpdate,
      /* componentDidUpdate */componentDidUpdate,
      /* componentWillUnmount */componentWillUnmount,
      /* render */render,
      /* createInstanceFromJs */createInstanceFromJs,
      /* createStateFromJs */createStateFromJs,
      /* createPropsFromJs */createPropsFromJs,
      /* createCallbacksFromJs */createCallbacksFromJs
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
          /* getCallbacks */getCallbacks,
          /* componentWillMount */componentWillMount,
          /* componentDidMount */componentDidMount,
          /* componentWillReceiveProps */componentWillReceiveProps,
          /* shouldComponentUpdate */shouldComponentUpdate,
          /* componentWillUpdate */componentWillUpdate,
          /* componentDidUpdate */componentDidUpdate,
          /* componentWillUnmount */componentWillUnmount,
          /* make */make
        ];
}

var tag = "h3";

function make$1(props, children) {
  var props$1 = props ? /* Props */[props[0]] : /* Nothing */0;
  var element = /* DOMElement */Block.__(0, [/* record */[
        /* tag */tag,
        /* props */props$1
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

function make$2(props, children) {
  var props$1 = props ? /* Props */[props[0]] : /* Nothing */0;
  var element = /* DOMElement */Block.__(0, [/* record */[
        /* tag */tag$1,
        /* props */props$1
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

function make$3(props, children) {
  var props$1 = props ? /* Props */[props[0]] : /* Nothing */0;
  var element = /* DOMElement */Block.__(0, [/* record */[
        /* tag */tag$2,
        /* props */props$1
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

var tag$3 = "ul";

function make$4(props, children) {
  var props$1 = props ? /* Props */[props[0]] : /* Nothing */0;
  var element = /* DOMElement */Block.__(0, [/* record */[
        /* tag */tag$3,
        /* props */props$1
      ]]);
  return /* OpaqueElement */[/* record */[
            /* form */element,
            /* children */children
          ]];
}

var Ul = /* module */[
  /* tag */tag$3,
  /* make */make$4
];

var tag$4 = "li";

function make$5(props, children) {
  var props$1 = props ? /* Props */[props[0]] : /* Nothing */0;
  var element = /* DOMElement */Block.__(0, [/* record */[
        /* tag */tag$4,
        /* props */props$1
      ]]);
  return /* OpaqueElement */[/* record */[
            /* form */element,
            /* children */children
          ]];
}

var Li = /* module */[
  /* tag */tag$4,
  /* make */make$5
];

var DOM = /* module */[
  /* H3 */H3,
  /* Div */Div,
  /* Button */Button,
  /* Ul */Ul,
  /* Li */Li
];

var React$1 = /* module */[
  /* Text */Text,
  /* CreateDOMComponent */CreateDOMComponent,
  /* DefaultLifeCycle */DefaultLifeCycle,
  /* Stateless */Stateless,
  /* Stateful */Stateful,
  /* CreateComponent */CreateComponent,
  /* Stateful' */Stateful$prime,
  /* DOM */DOM
];

function make$6(day, month, year) {
  return /* record */[
          /* day */day,
          /* month */month,
          /* year */year
        ];
}

function pprint(param) {
  return Pervasives.string_of_int(param[/* day */0]) + ("/" + (Pervasives.string_of_int(param[/* month */1]) + ("/" + Pervasives.string_of_int(param[/* year */2]))));
}

var Birthday = /* module */[
  /* make */make$6,
  /* pprint */pprint
];

var userList_000 = /* record */[
  /* id */0,
  /* name */"Kate",
  /* birthday : record */[
    /* day */24,
    /* month */10,
    /* year */1988
  ]
];

var userList_001 = /* :: */[
  /* record */[
    /* id */1,
    /* name */"David",
    /* birthday : record */[
      /* day */17,
      /* month */12,
      /* year */1988
    ]
  ],
  /* [] */0
];

var userList = /* :: */[
  userList_000,
  userList_001
];

function getInitialState() {
  return /* () */0;
}

function getCallbacks() {
  return /* () */0;
}

function render(param) {
  var props = param[/* props */0];
  var message;
  if (props) {
    var match = props[0];
    message = "id: " + (Pervasives.string_of_int(match[/* id */0]) + (", Name: " + (match[/* name */1] + (", Birthday: " + pprint(match[/* birthday */2])))));
  }
  else {
    message = "No user selected";
  }
  return make$2(/* None */0, /* :: */[
              make$2(/* None */0, /* :: */[
                    /* OpaqueElement */[/* record */[
                        /* form : TextNode */Block.__(2, ["selected user:"]),
                        /* children : [] */0
                      ]],
                    /* [] */0
                  ]),
              /* :: */[
                make$2(/* None */0, /* :: */[
                      make(message),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]);
}

function createInstanceFromJs(props, state, setState, callbacks) {
  return /* record */[
          /* props */props,
          /* state */state,
          /* setState */setState,
          /* callbacks */callbacks
        ];
}

function createPropsFromJs(props) {
  return props;
}

function createStateFromJs(state) {
  return state;
}

function createCallbacksFromJs(cb) {
  return cb;
}

function make$7(children, props) {
  var description = /* record */[
    /* initProps */props,
    /* getInitialState */getInitialState,
    /* getCallbacks */getCallbacks,
    /* componentWillMount */componentWillMount,
    /* componentDidMount */componentDidMount,
    /* componentWillReceiveProps */componentWillReceiveProps,
    /* shouldComponentUpdate */shouldComponentUpdate,
    /* componentWillUpdate */componentWillUpdate,
    /* componentDidUpdate */componentDidUpdate,
    /* componentWillUnmount */componentWillUnmount,
    /* render */render,
    /* createInstanceFromJs */createInstanceFromJs,
    /* createStateFromJs */createStateFromJs,
    /* createPropsFromJs */createPropsFromJs,
    /* createCallbacksFromJs */createCallbacksFromJs
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
}

var UserDetail = /* module */[
  /* getInitialState */getInitialState,
  /* getCallbacks */getCallbacks,
  /* componentWillMount */componentWillMount,
  /* componentDidMount */componentDidMount,
  /* componentWillReceiveProps */componentWillReceiveProps,
  /* shouldComponentUpdate */shouldComponentUpdate,
  /* componentWillUpdate */componentWillUpdate,
  /* componentDidUpdate */componentDidUpdate,
  /* componentWillUnmount */componentWillUnmount,
  /* make */make$7
];

function getInitialState$1() {
  return /* () */0;
}

function getCallbacks$1() {
  return /* () */0;
}

function render$1(param) {
  var match = param[/* props */0];
  var onUserClick = match[/* onUserClick */1];
  var user = match[/* user */0];
  console.log("rerender");
  console.log(user);
  return make$5(/* Some */[{
                onClick: function () {
                  return Curry._1(onUserClick, user);
                }
              }], /* :: */[
              make("Name: " + user[/* name */1]),
              /* [] */0
            ]);
}

function createInstanceFromJs$1(props, state, setState, callbacks) {
  return /* record */[
          /* props */props,
          /* state */state,
          /* setState */setState,
          /* callbacks */callbacks
        ];
}

function createPropsFromJs$1(props) {
  return props;
}

function createStateFromJs$1(state) {
  return state;
}

function createCallbacksFromJs$1(cb) {
  return cb;
}

function make$8(children, props) {
  var description = /* record */[
    /* initProps */props,
    /* getInitialState */getInitialState$1,
    /* getCallbacks */getCallbacks$1,
    /* componentWillMount */componentWillMount,
    /* componentDidMount */componentDidMount,
    /* componentWillReceiveProps */componentWillReceiveProps,
    /* shouldComponentUpdate */shouldComponentUpdate,
    /* componentWillUpdate */componentWillUpdate,
    /* componentDidUpdate */componentDidUpdate,
    /* componentWillUnmount */componentWillUnmount,
    /* render */render$1,
    /* createInstanceFromJs */createInstanceFromJs$1,
    /* createStateFromJs */createStateFromJs$1,
    /* createPropsFromJs */createPropsFromJs$1,
    /* createCallbacksFromJs */createCallbacksFromJs$1
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
}

var UserItem = /* module */[
  /* getInitialState */getInitialState$1,
  /* getCallbacks */getCallbacks$1,
  /* componentWillMount */componentWillMount,
  /* componentDidMount */componentDidMount,
  /* componentWillReceiveProps */componentWillReceiveProps,
  /* shouldComponentUpdate */shouldComponentUpdate,
  /* componentWillUpdate */componentWillUpdate,
  /* componentDidUpdate */componentDidUpdate,
  /* componentWillUnmount */componentWillUnmount,
  /* make */make$8
];

function getCallbacks$2() {
  return /* record */[
          /* selectUser */function (param, user) {
            return Curry._1(param[/* setState */2], /* record */[/* selectedUser : Some */[user]]);
          },
          /* deselect */function (param, _) {
            return Curry._1(param[/* setState */2], /* record */[/* selectedUser : None */0]);
          }
        ];
}

function getInitialState$2() {
  return /* record */[/* selectedUser : None */0];
}

function render$2(instance) {
  var match = instance[/* callbacks */3];
  var deselect = match[/* deselect */1];
  var selectUser = match[/* selectUser */0];
  return make$2(/* None */0, /* :: */[
              make$1(/* None */0, /* :: */[
                    /* OpaqueElement */[/* record */[
                        /* form : TextNode */Block.__(2, ["User Panel:"]),
                        /* children : [] */0
                      ]],
                    /* [] */0
                  ]),
              /* :: */[
                make$4(/* None */0, List.map(function (user) {
                          return make$8(/* None */0, /* record */[
                                      /* user */user,
                                      /* onUserClick */function (user) {
                                        return Curry._2(selectUser, instance, user);
                                      }
                                    ]);
                        }, instance[/* props */0])),
                /* :: */[
                  make$7(/* None */0, instance[/* state */1][/* selectedUser */0]),
                  /* :: */[
                    make$3(/* Some */[{
                            onClick: function () {
                              return Curry._2(deselect, instance, /* () */0);
                            }
                          }], /* :: */[
                          /* OpaqueElement */[/* record */[
                              /* form : TextNode */Block.__(2, ["Deselect user"]),
                              /* children : [] */0
                            ]],
                          /* [] */0
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

function createInstanceFromJs$2(props, state, setState, callbacks) {
  return /* record */[
          /* props */props,
          /* state */state,
          /* setState */setState,
          /* callbacks */callbacks
        ];
}

function createPropsFromJs$2(props) {
  return props;
}

function createStateFromJs$2(state) {
  return state;
}

function createCallbacksFromJs$2(cb) {
  return cb;
}

function make$9(children, props) {
  var description = /* record */[
    /* initProps */props,
    /* getInitialState */getInitialState$2,
    /* getCallbacks */getCallbacks$2,
    /* componentWillMount */componentWillMount,
    /* componentDidMount */componentDidMount,
    /* componentWillReceiveProps */componentWillReceiveProps,
    /* shouldComponentUpdate */shouldComponentUpdate,
    /* componentWillUpdate */componentWillUpdate,
    /* componentDidUpdate */componentDidUpdate,
    /* componentWillUnmount */componentWillUnmount,
    /* render */render$2,
    /* createInstanceFromJs */createInstanceFromJs$2,
    /* createStateFromJs */createStateFromJs$2,
    /* createPropsFromJs */createPropsFromJs$2,
    /* createCallbacksFromJs */createCallbacksFromJs$2
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
}

var UserPanel = /* module */[
  /* getInitialState */getInitialState$2,
  /* getCallbacks */getCallbacks$2,
  /* componentWillMount */componentWillMount,
  /* componentDidMount */componentDidMount,
  /* componentWillReceiveProps */componentWillReceiveProps,
  /* shouldComponentUpdate */shouldComponentUpdate,
  /* componentWillUpdate */componentWillUpdate,
  /* componentDidUpdate */componentDidUpdate,
  /* componentWillUnmount */componentWillUnmount,
  /* make */make$9
];

function getInitialState$3() {
  return /* () */0;
}

function getCallbacks$3() {
  return /* () */0;
}

function render$3(param) {
  return make$1(/* None */0, /* :: */[
              make("Title: " + param[/* props */0]),
              /* [] */0
            ]);
}

function createInstanceFromJs$3(props, state, setState, callbacks) {
  return /* record */[
          /* props */props,
          /* state */state,
          /* setState */setState,
          /* callbacks */callbacks
        ];
}

function createPropsFromJs$3(props) {
  return props;
}

function createStateFromJs$3(state) {
  return state;
}

function createCallbacksFromJs$3(cb) {
  return cb;
}

function make$10(children, props) {
  var description = /* record */[
    /* initProps */props,
    /* getInitialState */getInitialState$3,
    /* getCallbacks */getCallbacks$3,
    /* componentWillMount */componentWillMount,
    /* componentDidMount */componentDidMount,
    /* componentWillReceiveProps */componentWillReceiveProps,
    /* shouldComponentUpdate */shouldComponentUpdate,
    /* componentWillUpdate */componentWillUpdate,
    /* componentDidUpdate */componentDidUpdate,
    /* componentWillUnmount */componentWillUnmount,
    /* render */render$3,
    /* createInstanceFromJs */createInstanceFromJs$3,
    /* createStateFromJs */createStateFromJs$3,
    /* createPropsFromJs */createPropsFromJs$3,
    /* createCallbacksFromJs */createCallbacksFromJs$3
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
}

var Title = /* module */[
  /* getInitialState */getInitialState$3,
  /* getCallbacks */getCallbacks$3,
  /* componentWillMount */componentWillMount,
  /* componentDidMount */componentDidMount,
  /* componentWillReceiveProps */componentWillReceiveProps,
  /* shouldComponentUpdate */shouldComponentUpdate,
  /* componentWillUpdate */componentWillUpdate,
  /* componentDidUpdate */componentDidUpdate,
  /* componentWillUnmount */componentWillUnmount,
  /* make */make$10
];

function buildJsTree(tree) {
  var build = function (node) {
    var unpackedElement = node[0];
    var form = unpackedElement[/* form */0];
    switch (form.tag | 0) {
      case 0 : 
          var match = form[0];
          var props = match[/* props */1];
          var tag = match[/* tag */0];
          var jsChildren = $$Array.of_list(List.map(build, unpackedElement[/* children */1]));
          if (props) {
            return $dot$slashpolyfill$dotjs.createElement(tag, props[0], jsChildren);
          }
          else {
            return $dot$slashpolyfill$dotjs.createElement(tag, null, jsChildren);
          }
      case 1 : 
          var description = form[0];
          var description_to_reactClass = function (description) {
            var makeInstance = function (reactJsThis) {
              var props = reactJsThis.props.reasonmlProps;
              var jsState = reactJsThis.state;
              var mlState = jsState.reasonmlState;
              var mlSetState = jsState.reasonmlSetState;
              var mlCallbacks = jsState.reasonmlCallbacks;
              return Curry._4(description[/* createInstanceFromJs */11], props, mlState, mlSetState, mlCallbacks);
            };
            return React.createClass({
                        getInitialState: function () {
                          var $$this = this ;
                          var st = Curry._1(description[/* getInitialState */1], description[/* initProps */0]);
                          var cbs = Curry._1(description[/* getCallbacks */2], /* () */0);
                          return {
                                  reasonmlState: st,
                                  reasonmlSetState: function (s) {
                                    return $$this.setState({
                                                reasonmlState: s
                                              });
                                  },
                                  reasonmlCallbacks: cbs
                                };
                        },
                        componentWillMount: function () {
                          var $$this = this ;
                          return Curry._1(description[/* componentWillMount */3], makeInstance($$this));
                        },
                        componentDidMount: function () {
                          var $$this = this ;
                          return Curry._1(description[/* componentDidMount */4], makeInstance($$this));
                        },
                        componentWillReceiveProps: function (nextProps) {
                          var $$this = this ;
                          var nextProps$1 = Curry._1(description[/* createPropsFromJs */13], nextProps);
                          return Curry._2(description[/* componentWillReceiveProps */5], nextProps$1, makeInstance($$this));
                        },
                        shouldComponentUpdate: function (nextProps, nextState) {
                          var $$this = this ;
                          var nextProps$1 = Curry._1(description[/* createPropsFromJs */13], nextProps);
                          var nextState$1 = Curry._1(description[/* createStateFromJs */12], nextState);
                          return Curry._3(description[/* shouldComponentUpdate */6], nextProps$1, nextState$1, makeInstance($$this));
                        },
                        componentWillUpdate: function (nextProps, nextState) {
                          var $$this = this ;
                          var nextProps$1 = Curry._1(description[/* createPropsFromJs */13], nextProps);
                          var nextState$1 = Curry._1(description[/* createStateFromJs */12], nextState);
                          return Curry._3(description[/* componentWillUpdate */7], nextProps$1, nextState$1, makeInstance($$this));
                        },
                        componentDidUpdate: function (prevProps, prevState) {
                          var $$this = this ;
                          var prevProps$1 = Curry._1(description[/* createPropsFromJs */13], prevProps);
                          var prevState$1 = Curry._1(description[/* createStateFromJs */12], prevState);
                          return Curry._3(description[/* componentDidUpdate */8], prevProps$1, prevState$1, makeInstance($$this));
                        },
                        componentWillUnmount: function () {
                          var $$this = this ;
                          return Curry._1(description[/* componentWillUnmount */9], makeInstance($$this));
                        },
                        render: function () {
                          var $$this = this ;
                          return build(Curry._1(description[/* render */10], makeInstance($$this)));
                        }
                      });
          };
          var jsProps = {
            reasonmlProps: description[/* initProps */0]
          };
          var reactClass = description_to_reactClass(description);
          return $dot$slashpolyfill$dotjs.createElement(reactClass, jsProps, null);
      case 2 : 
          return $dot$slashpolyfill$dotjs.createElement("span", null, form[0]);
      
    }
  };
  return build(tree);
}

function render$4(component, node) {
  ReactDom.render(buildJsTree(component), node);
  return /* () */0;
}

var ReactDOM = /* module */[
  /* buildJsTree */buildJsTree,
  /* render */render$4
];

var app = make$2(/* None */0, /* :: */[
      make$9(/* None */0, userList),
      /* [] */0
    ]);

var rootNode = document.getElementById("app");

ReactDom.render(buildJsTree(app), rootNode);

exports.React      = React$1;
exports.Birthday   = Birthday;
exports.userList   = userList;
exports.UserDetail = UserDetail;
exports.UserItem   = UserItem;
exports.UserPanel  = UserPanel;
exports.Title      = Title;
exports.ReactDOM   = ReactDOM;
exports.app        = app;
exports.rootNode   = rootNode;
/* app Not a pure module */
