const stack = [document.body];
const helper = document.createElement('i');
export default (str, content, attach, ref) => {
  const m = (str.match(/^([^\s#]*)(?:#(\S+))?(.*)$/) || []);
  const m1 = (m[1] || '').split('.');
  const dom = document.createElement(m1[0] || 'div');
  helper.innerHTML = `<i ${m[3]}>`;
  const child = helper.children[0];
  child.getAttributeNames().forEach(name => {
    dom.setAttribute(name, child.getAttribute(name));
  });
  if (m[2]) dom.setAttribute('id', m[2]);
  m1.slice(1).forEach(c => dom.classList.add(c));
  if (typeof content === 'string') {
    dom.innerText = content;
  } else if (typeof content === 'function') {
    stack.unshift(dom);
    content(dom);
    stack.shift();
  }
  (attach || stack[0])[ref ? 'insertBefore' : 'appendChild'](dom, ref);
  return dom;
};
