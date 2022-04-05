export class Component {
  constructor(props) {
    this.props = props;
  }
}


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

function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
}
export function createElement(tag, props, ...children) {
  props = props || {}

  if (typeof tag === 'function') {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children))
    } else {
      if (children.length > 0) {
      } else {
        return tag(props);
      }

    }
  } else {
    return { tag, props, children }
  }
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
} // 바깥쪽에서 내부구조에 관심을 두지 않게! 