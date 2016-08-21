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

function bindCallbacks(cbs, makeUpdater) {
  var res;
  if (cbs !== 0)
    res = cbs.map(function(cb) {
          return makeUpdater(cb);
    });
  else res = cbs;

  return res;
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
