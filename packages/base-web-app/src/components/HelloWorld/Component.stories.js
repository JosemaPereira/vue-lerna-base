import HelloWorldComponent from './Component.vue'

export default {
  component: HelloWorldComponent,
  title: 'Hello World',
}

const Template = () => ({
  components: { HelloWorldComponent },
  template: '<helloWorldComponent/>',
});
export const Default = Template.bind({});
Default.args = {};

