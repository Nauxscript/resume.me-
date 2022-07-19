import './style.css'
import './style/prism.css'
import 'uno.css'
import { html as test } from './md/test.md'

//自定义元素的类继承自HTMLELement
class MarkdownComponent extends HTMLElement {
  constructor() {
  super();
  // this表示当前的实例自定义元素
  console.log(this)
  const container = document.createElement('div');
  container.classList.add('container');
  container.innerHTML = test;

  // 添加到当前的自定义元素
  this.appendChild(container);
  }
}

// 使用customElements.define()方法,将页面中的自定义组件和类关联起来
window.customElements.define('md-com', MarkdownComponent)
