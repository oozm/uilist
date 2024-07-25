import { ref } from 'vue';
interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  group: string;
  github: string;
  star: number;
  site: string;
}

export const groupItems = ref<GroupItem[]>([
  {
    title: 'Element',
    icon: 'logos:element',
    color: '#1989fa',
    desc: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。',
    group: '美团',
    site: 'https://element.eleme.cn',
    github: 'https://github.com/ElemeFE/element',
    star: 123,
  },
  {
    title: 'Element Plus',
    icon: 'ep:element-plus',
    color: '#409eff',
    desc: '基于 Vue 3，面向设计师和开发者的组件库。',
    group: '美团',
    site: 'https://element-plus.org',
    github: 'https://github.com/element-plus/element-plus',
    star: 0,
  },
  {
    title: 'Ant Design of Vue',
    icon: 'devicon:antdesign',
    color: '#1677ff',
    desc: '这里是 Ant Design 的 Vue2.0 实现，开发和服务于企业级后台产品。',
    group: '神秘组织',
    site: 'https://2x.antdv.com',
    github: 'https://github.com/vueComponent/ant-design-vue',
    star: 456,
  },
  {
    title: 'Ant Design of Vue',
    icon: 'devicon:antdesign',
    color: '#1677ff',
    desc: '这里是 Ant Design 的 Vue3 实现，开发和服务于企业级后台产品。',
    group: '神秘组织',
    site: 'https://www.antdv.com',
    github: 'https://github.com/vueComponent/ant-design-vue',
    star: 456,
  },
  {
    title: 'View UI',
    icon: 'hugeicons:smile',
    color: '#e18525',
    desc: 'View UI®，即原先的 iView，是一套基于 Vue.js 2 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。',
    group: '神秘组织',
    site: 'https://v4.iviewui.com/',
    github: 'https://github.com/view-design/ViewUI',
    star: 0,
  },
  {
    title: 'View UI Plus',
    icon: 'hugeicons:smile',
    color: '#e18525',
    desc: 'View UI Plus 是 View Design 设计体系中基于 Vue.js 3 的一套 UI 组件库，主要用于企业级中后台系统。',
    group: '神秘组织',
    site: 'https://www.iviewui.com/',
    github: 'https://github.com/view-design/ViewUIPlus',
    star: 0,
  },
  {
    title: 'Angular',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: '热情和欲望可以突破一切难关。',
    group: 'UI',
    site: 'www.github.com',
    github: 'https://github.com/zhaojs-cn/zhaojs-admin',
    star: 0,
  },
  {
    title: 'React',
    icon: 'bx:bxl-react',
    color: '#00d8ff',
    desc: '健康的身体是实现目标的基石。',
    group: '技术牛',
    site: 'www.github.com',
    github: 'https://github.com/zhaojs-cn/zhaojs-admin',
    star: 0,
  },
  {
    title: 'Js',
    icon: 'ion:logo-javascript',
    color: '#EBD94E',
    desc: '路是走出来的，而不是空想出来的。',
    group: '架构组',
    site: 'www.github.com',
    github: 'https://github.com/zhaojs-cn/zhaojs-admin',
    star: 0,
  },
]);
