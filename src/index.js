import VdButton from './components/test-button/index';
import VdSlidePanel from './components/VdSlidePanel/index';
import VdScrollNumber from './components/VdScrollNumber/index';

const components = [
  VdButton,
  VdSlidePanel,
  VdScrollNumber
];

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
};
/*支持标签引入*/
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  VdButton,
  VdSlidePanel
}
