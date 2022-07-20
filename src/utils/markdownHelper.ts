export interface IMarkdownComponentOption {
  name: string;
  innerHtml: string;
  container?: HTMLElement;
  containerClassName?: string;
}

export const factory = (option: IMarkdownComponentOption) => {
  //自定义元素的类继承自HTMLELement
  class MarkdownComponent extends HTMLElement {
    name: string;
    container: HTMLElement;
    containerClassName?: string;

    constructor() {
      super();
      // this表示当前的实例自定义元素
      console.log(this);

      this.name = option.name;
      this.className = option.name;

      // 自定义容器或默认容器渲染
      if (option.container) {
        this.container = option.container;
      } else {
        this.container = document.createElement("div");
      }

      option.containerClassName &&
        this.container.classList.add(option.containerClassName);
      this.container.innerHTML = option.innerHtml;

      // 添加到当前的自定义元素
      this.appendChild(this.container);
    }
  }

  const use = () => {
    // 使用customElements.define()方法,将页面中的自定义组件和类关联起来
    window.customElements.define(option.name, MarkdownComponent);
  };

  return {
    use,
  };
};


