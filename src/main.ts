import "./style.css";
import "./style/prism.css";
import "uno.css";
import { html as test } from './md/test.md'
import { factory } from "./utils/markdownHelper";
import { hijackDefine, notRegisterElementWarning } from './utils/index';

hijackDefine()

notRegisterElementWarning()

factory({
  name: 'first-md-com',
  innerHtml: test,
  containerClassName: 'test'
}).use()
