export default {
    // this creates a ‘Components’ folder and a ‘Svg-component’ subfolder
    title: 'components/Svg-Component',
    argTypes:{
        icon: {
            control: {type: 'select'},
            options:['facebook', 'linkedin','menu', 'refresh', 'up-arrow', 'down-arrow', 'right-arrow', 'left-arrow', 'account', 'checkbox', 'checkedbox', 'info','location', 'location-marker', 'print', 'share', 'close', 'download', 'add', 'live-chat', 'radio-off', 'radio-on', 'logout', 'payment', 'overview', 'star', 'checkmark', 'email', 'cellphone', 'phone','edit', 'cart', 'swap', 'save', 'alert', 'desktop', 'wifi', 'shipping', 'unlock', 'affirm', 'warranty', 'package', 'gift', 'savings', 'register','registered', 'exchange', 'service', 'play', 'play2', 'list', 'globe', 'ads', 'backdrop', 'x']
        }
    }
};
const Template = (args) => `<svg-component icon="${args.icon}" ></svg-component>`;
export const SvgComponent = Template.bind({});
SvgComponent.args = {
  icon: 'arrow-right-icon',
};