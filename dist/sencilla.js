var $ = (function () {
  'use strict';

  var stack = [];
  var helper = document.createElement('i');
  var index = (function (str, content, attach, ref) {
    if (stack.length === 0) stack.push(document.body);
    var m = str.match(/^([^\s#]*)(?:#(\S+))?(.*)$/) || [];
    var m1 = (m[1] || '').split('.');
    var dom = document.createElement(m1[0] || 'div');
    helper.innerHTML = "<i ".concat(m[3], ">");
    var child = helper.children[0];
    child.getAttributeNames().forEach(function (name) {
      dom.setAttribute(name, child.getAttribute(name));
    });
    if (m[2]) dom.setAttribute('id', m[2]);
    m1.slice(1).forEach(function (c) {
      return dom.classList.add(c);
    });

    if (typeof content === 'string') {
      dom.innerText = content;
    } else if (typeof content === 'function') {
      stack.unshift(dom);
      content(dom);
      stack.shift();
    }

    (attach || stack[0])[ref ? 'insertBefore' : 'appendChild'](dom, ref);
    return dom;
  });

  return index;

}());
