function buildEventHandlers(handlers) {
  return handlers.reduce(function(acc, handler) {
    acc[handler[0]] = handler[1];
    return acc;
  }, {});
}

var React = require('react');

function createElement(type, props, children) {
  var args = [type, props].concat(children);
  return React.createElement.apply(null, args);
}

function mergeProps(className, style, eventHandlers) {
  return Object.assign(className, style, eventHandlers);
}

function bindCallbacks(cbs, reactJsThis) {
  console.log('incoming callbacks');
  console.log(cbs);
  if (cbs !== 0)
    return cbs.map(function(cb) {
      var f = function(arg) {
        console.log('incoming arg', arg);
        console.log(reactJsThis);
        var props = reactJsThis.props.reasonmlProps;
        var jsState = reactJsThis.state;
        var mlState = jsState.reasonmlState;
        var mlSetState = jsState.reasonmlSetState;
        var mlCallbacks = jsState.reasonmlCallbacks;
        var res =cb([props, jsState, mlState, mlSetState, mlCallbacks], arg);
        console.log('res', res);
        res;
      };
      return f;
  });
        else cbs;
}

function initState(jsThis, state, setState, callbacks, makeInstance){
  jsThis.setState({reasonmlState: state, reasonmlSetState: setState, reasonmlCallbacks: bindCallbacks(callbacks, jsThis, makeInstance)});
}


module.exports = {
  buildEventHandlers: buildEventHandlers,
  createElement: createElement,
  mergeProps: mergeProps,
  bindCallbacks: bindCallbacks,
  initState: initState
};
