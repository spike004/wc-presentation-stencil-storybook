import { Component, Prop, h, Element } from '@stencil/core';


@Component({
  tag: 'base-button',
  styleUrl: 'ButtonBase.scss',
  shadow: true
})

export class ButtonBase {
 @Element() el: HTMLElement 
@Prop() text: string;
@Prop() icon: string;
@Prop() iconPosition: 'right';
@Prop() buttonTag: string;
@Prop() buttonLink: string;
@Prop() title: string;
@Prop() bgColor: string;
@Prop() bgHighlight: string;


render() {
  let buttonContent = [this.text]
 console.log(this.el.style.setProperty('--button-background-color', this.bgColor || 'black'))

 console.log( this.el.style.setProperty('--button-background-highlight', this.bgHighlight || '#fff'))
 
  if(this.icon){
    if(this.iconPosition === 'right'){
      buttonContent = [ this.text,<svg-component icon ={this.icon}></svg-component>]
    }else if(this.iconPosition === 'left'){
      buttonContent = [ <svg-component icon ={this.icon}></svg-component>, this.text ]
    }else{
      return
    }
  }
  let btn
    if(this.buttonTag === 'a'){
      btn = <a href={this.buttonLink} title={this.title}>{buttonContent}</a>
    }else{
      btn= <button title={this.title}>{buttonContent}</button>;

    }
    return btn
  }
}
// // Need a primary, secondary, tertiary button AND styles (use sass @mixen setButton(){@if $type == primary{}} etc etc)

// // Don’t forget to implement host-context
// const buttonTemplate = document.createElement('template') as HTMLTemplateElement;

//     <button class='button'>

   
//     </button>
// `;

// class BaseButton extends HTMLElement {
//      static get observedAttributes() {
//     return ['data-icon', 'base-button', 'data-text'];
//   }
//   constructor() {
//     super();
//     this.attachShadow({ mode: 'open' });
//     const thisShadowRoot = this.shadowRoot as ShadowRoot;
//     thisShadowRoot.appendChild(buttonTemplate.content.cloneNode(true));
//     const btn = thisShadowRoot.querySelector('.button') as HTMLElement;
//     const icon = document.createElement('svg-icon') as HTMLElement;
//     icon.setAttribute('data-icon', this.dataset.icon ? this.dataset.icon : '');
//     const buttonHeight = this.dataset.height as string;
//     btn.innerText = this.dataset.text as string;
//     btn.appendChild(icon)
  
//     // const styleTag = thisShadowRoot.styleSheets[0];
//     // const hostRules = styleTag.cssRules[0] as CSSRule;
//     // console.log(hostRules.style.setProperty('--button-height', buttonHeight));
//     // this.style.setProperty(‘--button-height’, buttonHeight);
//     // this.getStyles(buttonData.height as string)
//     // const icon = this.shadowRoot!.querySelector(“social-icon”) as HTMLElement;
//     // const shadowButton = this.shadowRoot!.querySelector(‘button’) as HTMLButtonElement;
//     // shadowButton!.dataset.icon =`#${this.dataset.icon}`
//     // console.log(icon)
//     // icon!.dataset.icon = `#${this.dataset.icon}`;
//   }
//   connectedCallback(){

//   }
//   attributeChangedCallback(name: string, oldValue: string, newValue:string) {
//     this.updateIcon(name, oldValue, newValue);
//   }
//   getStyles(buttonHeight: string){
//   console.log(buttonHeight)
//   }
//   updateIcon(name: string, oldValue: string, newValue:string){

//       const elIcon = this ? this.shadowRoot?.querySelector('svg-icon') as HTMLElement : null;

//       if(name == 'data-icon' && newValue != oldValue){
//           elIcon?.setAttribute('data-icon', `${this.getAttribute('data-icon')}`)
//       }
//       if(name =='data-text' && newValue != oldValue){
// console.log('text changed, swap it and the svg')
// const childNodes = this.shadowRoot?.querySelector('.button')?.childNodes;

// childNodes?.forEach(node => {
   
//     if(node.nodeType === 3){
//         oldValue != newValue ? node.nodeValue = newValue : ''
       
//     }
// } )
//       }
//   }
// }
// window.customElements.define('base-button', BaseButton);

// class PrimaryButton extends BaseButton{
  
// }
// window.customElements.define('primary-button', PrimaryButton)