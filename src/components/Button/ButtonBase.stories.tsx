export default {

    title: 'components/Base-button',
    argTypes: {
      icon: {
        control: {type: 'select'},
        options:['facebook', 'linkedin','menu', 'refresh', 'up-arrow', 'down-arrow', 'right-arrow', 'left-arrow', 'account', 'checkbox', 'checkedbox', 'info','location', 'location-marker', 'print', 'share', 'close', 'download', 'add', 'live-chat', 'radio-off', 'radio-on', 'logout', 'payment', 'overview', 'star', 'checkmark', 'email', 'cellphone', 'phone','edit', 'cart', 'swap', 'save', 'alert', 'desktop', 'wifi', 'shipping', 'unlock', 'affirm', 'warranty', 'package', 'gift', 'savings', 'register','registered', 'exchange', 'service', 'play', 'play2', 'list', 'globe', 'ads', 'backdrop', 'x']
    },
    iconPosition: {
      control:{type: 'select'},
    options:['left', 'right']},
    buttonTag: {
      control: {type: 'select'},
      options: ['a', 'button']
    },
    bgColor: { control: 'color' },
    bgHighlight: { control: 'color' }
    }
};
const Template = (args) => `<base-button text="${args.text}" icon="${args.icon}" icon-position=${args.iconPosition} button-tag=${args.buttonTag} bg-color=${args.bgColor} bg-highlight=${args.bgHighlight}> </base-button>`;
export const ButtonBase = Template.bind({});
ButtonBase.args = {
  text: 'Click Here',
};
