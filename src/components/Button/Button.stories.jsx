import { Button } from './Button';

export default {
  title: 'Atom/Button',
  component: Button,
};

const Template = (args) => <Button {...args}/>

export const Default = {
  args: {
    text: 'Button',
    disabled: false,
  }
}



