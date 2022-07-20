import { TDefineArgs } from "./utils.type";

// Get all custom elements
export const getCustomElements = () =>
  Array.from(document.querySelectorAll("*"))
    .map((element) => element.nodeName.toLowerCase())
    .filter(customElements.get.bind(customElements));

export const getRegisteredElements = () => {
  return window.customTags;
};

export const notRegisterElementWarning = () => {
  const targetNode = document.getElementById("app");
  if (!targetNode) return
  // 观察器的配置（需要观察什么变动）
  const config = { childList: true, subtree: true };
  // 创建一个观察器实例并监听`targetNode`元素的变动
  const observer = new MutationObserver(() => {
    console.log('app dom tree change!')
    console.log(getCustomElements())
    console.log(window.customTags)
    // const tags = window.customTags.map(item => item.tag)
    // const notUsedComs = getCustomElements().filter(item => {
    //   return !tags.includes(item)
    // })
    // notUsedComs.map(item => {
    //   console.error(`Component ${item} is not register!`)
    // })
  });
  observer.observe(targetNode, config)
  return observer
};

export const hijackDefine = () => {
  const original = window.customElements.define;
  window.customTags = [];
  window.customElements.define = function (...args: TDefineArgs) {
    window.customTags.push({ tag: args[0], ctor: args[1] });
    original.apply(customElements, args);
  };
};
