
export function createDOM(node) { // DOM을 만들어주는 함수
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);

  Object.entries(node.props)
    .forEach(([name, value]) => element.setAttribute(name, value))

  node.children // 재귀
    .map(createDOM)
    .forEach(element.appendChild.bind(element))
  return element;
}

export function createElement(tag, props, ...children) {
  return {
    tag, props, children
  }
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
} // 바깥쪽에서 내부구조에 관심을 두지 않게! 