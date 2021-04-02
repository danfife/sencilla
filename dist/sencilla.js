var $ = (function () {
  'use strict';

  var stack = [];
  var helper = document.createElement('i');
  function index () {
    var args = Array.from(arguments);
    if (stack.length === 0) stack.push(document.body);
    var m = args.shift().match(/^([^\s#]*)(?:#(\S+))?(.*)$/) || [];
    var m1 = (m[1] || '').split('.');
    helper.innerHTML = "<".concat(m1[0] || 'div', " ").concat(m[3], ">");
    var dom = helper.children[0].cloneNode();
    if (m[2]) dom.id = m[2];
    m1.slice(1).forEach(function (c) {
      return dom.classList.add(c);
    });

    if (typeof args[0] === 'string') {
      dom.innerText = args.shift();
    } else if (typeof args[0] === 'function') {
      stack.unshift(dom);
      args.shift()(dom);
      stack.shift();
    }

    (args[0] || stack[0])[args[1] ? 'insertBefore' : 'appendChild'](dom, args[1]);
    return dom;
  }

  return index;

}());
