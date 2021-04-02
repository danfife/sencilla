const stack = [];
const helper = document.createElement('i');
export default function() {
  const args = Array.from(arguments);
  if (stack.length === 0) stack.push(document.body);
  const m = (args.shift().match(/^([^\s#]*)(?:#(\S+))?(.*)$/) || []);
  const m1 = (m[1] || '').split('.');
  helper.innerHTML = `<${m1[0] || 'div'} ${m[3]}>`;
  const dom = helper.children[0].cloneNode();
  if (m[2]) dom.id = m[2];
  m1.slice(1).forEach(c => dom.classList.add(c));
  if (typeof args[0] === 'string') {
    dom.innerText = args.shift();
  } else if (typeof args[0] === 'function') {
    stack.unshift(dom);
    args.shift()(dom);
    stack.shift();
  }
  (args[0] || stack[0])[args[1] ? 'insertBefore' : 'appendChild'](dom, args[1]);
  return dom;
};
