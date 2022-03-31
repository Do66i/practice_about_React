
function createDOM(node) { // DOM을 만들어주는 함수
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);


  node.children // 재귀
    .map(createDOM)
    .forEach(element.appendChild.bind(element))
  return element;
}


const vdom = { // 가상돔 !
  tag: 'p',
  props: {},
  children: [
    {
      tag: 'h1',
      props: {},
      children: ["React 만들기"],
    },
    {
      tag: 'ul',
      props: {},
      children: [
        {
          tag: 'li',
          props: {},
          children: ["첫 번째 아이템"]
        },
        {
          tag: 'li',
          props: {},
          children: ["두 번째 아이템"]
        },
        {
          tag: 'li',
          props: {},
          children: ["세 번째 아이템"]
        },

      ]
    }
  ],
};

document.querySelector('#root')
  .appendChild(createDOM(vdom)) 