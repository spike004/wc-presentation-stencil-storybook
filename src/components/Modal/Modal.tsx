import {Component, Prop, h, Element} from '@stencil/core';

@Component({
    tag: 'boss-modal',
    styleUrl: 'Modal.scss',
    shadow: true
})

export class Modal{
    @Element() el : HTMLElement;
   @Prop() isOpen: boolean;
   @Prop() modal: HTMLElement;
   @Prop() closeBtn: HTMLElement;
   @Prop() launchBtn: any;
   @Prop() triggerId: string | null;

   
   toggle(event:any){
       const ht = document.querySelector('html')
    const b = document.querySelector('body') as HTMLBodyElement;
    this.closeBtn = this.el.shadowRoot.getElementById('close-btn');
    this.closeBtn.addEventListener("click", (e)=>this.toggle(e));
    if(this.el.getAttribute('opened')){
        
    }
    this.el.toggleAttribute('opened');

 if(this.el.getAttribute('opened') !=null){
     const openEvent = new Event('openmodal');
//  b.style.overflow = 'hidden'
b.classList.add('noscroll')
ht.classList.add('noscroll')
 this.el.dispatchEvent(openEvent)
        console.log('dispatching openmodal event', openEvent)
 }
 else{  
    b.classList.remove('noscroll')
    ht.classList.remove('noscroll')
 const closeEvent = new Event('closemodal');
 this.el.dispatchEvent(closeEvent)
 console.log('dispatching closemodal event', closeEvent)
 }
 //  const b = document.querySelector('body') as HTMLBodyElement;
 // b.style.overflow = 'hidden'
} 
attributeChangedCallback(name: string, oldValue: string, newValue: string){
 if(this.el.hasAttribute('opened')){
     this.isOpen = true
    //  this.el.shadowRoot!.appendChild(overlayTemplate.content.cloneNode(true));
     this.el.shadowRoot!.querySelector('.overlay')!.addEventListener("click", (e)=>this.toggle(e));
 }else{
     this.isOpen = false
     this.el.shadowRoot!.querySelector('.overlay')!.remove();
 }
}
static get observedAttributes(){
 return['opened']
}
connectedCallback(){
  
    this.launchBtn = document.getElementById(this.triggerId)
 this.launchBtn.addEventListener("click", (e:any)=>this.toggle(e));

 

 // this.modal.addEventListener("click", (e:any)=>e.preventDefault());
 // let container = this.querySelector('[slot="container"]')
 // console.log(container)
 // this.modal.style.pointerEvents = 'none'
 // this.closeBtn.addEventListener()



}
disconnectedCallback(){

this.closeBtn.removeEventListener("click", this.toggle.bind(this));
}
    render(){
        return   [<button id="close-btn" tabindex={0} class="modal-close" aria-label="close-modal">
            {/* <svg   width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="bg" d="M49.2285 25C49.2285 11.6211 38.3789 0.771484 25 0.771484C11.6211 0.771484 0.771484 11.6211 0.771484 25C0.771484 38.3789 11.6211 49.2285 25 49.2285C38.3789 49.2285 49.2285 38.3789 49.2285 25Z" fill="#E04F5F"/>
        <path class="x" d="M27.832 25L34.9121 16.7773C35.6836 15.8789 35.5859 14.5312 34.6875 13.75C33.7891 12.9785 32.4414 13.0762 31.6699 13.9746L25 21.7187L18.3398 13.9844C17.5684 13.0859 16.2109 12.9883 15.3125 13.7598C14.4141 14.5312 14.3164 15.8887 15.0879 16.7871L22.168 25L15.0879 33.2227C14.3164 34.1211 14.4141 35.4687 15.3125 36.25C15.7129 36.6016 16.2109 36.7676 16.709 36.7676C17.3145 36.7676 17.9102 36.5137 18.3301 36.0254L24.9902 28.291L31.6504 36.0254C32.0703 36.5137 32.6758 36.7676 33.2715 36.7676C33.7695 36.7676 34.2676 36.6016 34.668 36.25C35.5664 35.4785 35.6641 34.1211 34.8926 33.2227L27.832 25Z" fill="white"/>
        </svg> */}
        <svg-component icon="close"></svg-component>
        </button>,
          <div id="modal">
          <slot name="container"></slot>
        </div>, 
        <svg-component icon="backdrop" onClick={this.toggle.bind(this)}class="overlay"></svg-component>]
    }
}