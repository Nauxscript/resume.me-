export type TDefineArgs = Parameters<typeof customElements.define>

export type TCustomTags = {
  tag: string
  ctor: CustomElementConstructor 
}