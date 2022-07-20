import { TDefineArgs } from "./utils.type";

// Get all custom elements
export const getCustomElements = () =>
  Array.from(document.querySelectorAll("*"))
    .map((element) => element.nodeName.toLowerCase())
    .filter(customElements.get.bind(customElements));


export const getRegisteredElements = () => {
  return window.customTags
}
    

export const hijackDefine = () => {
  const original = window.customElements.define;
  window.customTags = [] 
  window.customElements.define = function (...args: TDefineArgs) {
    window.customTags.push({ tag: args[0], ctor: args[1] });
    original.apply(customElements, args);
  };

}

