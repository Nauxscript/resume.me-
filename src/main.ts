import "./style.css";
import "./style/prism.css";
import "uno.css";
import { html as test } from './md/test.md'
import { factory } from "./utils/markdownHelper";
import { getCustomElements, hijackDefine, getRegisteredElements } from './utils/index';

hijackDefine()

factory({
  name: 'first-md-com',
  innerHtml: test,
  containerClassName: 'test'
}).use()

console.log(getCustomElements())
console.log(getRegisteredElements())