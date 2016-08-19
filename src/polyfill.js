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

module.exports = {
  buildEventHandlers: buildEventHandlers,
  createElement: createElement,
  mergeProps: mergeProps
};
