import { Component, h, Element } from '@stencil/core';

@Component({
    tag: 'boss-card',
    styleUrl: 'Card.scss',
    shadow: true
})

export class Card{
    @Element() el: HTMLElement;

   componentDidRender(){
   
        // console.log(this.el.clientWidth)
        if(this.el.clientWidth >=580){
          
            this.el.style.setProperty('--content-wrapper-padding', '15px 0')
        }else{

        }

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                // console.log(entries)
              if(entry.contentBoxSize) {
                // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                console.log(this.el.shadowRoot.querySelector('.card-content-wrapper').clientHeight )
                if(this.el.shadowRoot.querySelector('.card-content-wrapper').clientHeight > this.el.shadowRoot.querySelector('.media-wrapper img').clientHeight){
                    console.log('content no longer fits')
                    this.el.querySelector('h1').style.fontSize = `${Math.max(1.5, contentBoxSize.inlineSize / 300)}rem`;
                    (this.el.querySelector('[slot=card-body]')as HTMLElement).style.fontSize = `${Math.max(1, contentBoxSize.inlineSize / 1000)}rem`;
                }
                if(contentBoxSize.inlineSize >= 580){
                      this.el.style.setProperty('--content-wrapper-padding', '15px 0');
                    
                }else{
                    this.el.style.setProperty('--content-wrapper-padding', '0');
                    // this.el.querySelector('h1').style.fontSize = `${Math.max(1.5, contentBoxSize.inlineSize / 200)}rem`;
                    (this.el.querySelector('[slot=card-body]')as HTMLElement).style.fontSize = `${Math.max(.95, contentBoxSize.inlineSize / 600)}rem`;
                }
               
              }
            }
          
          });
          
          resizeObserver.observe(this.el);
    }
    
    render(){
    
        return <div class="grid-auto-col">
            <div class="media-wrapper">
                <img src="https://source.unsplash.com/random/300x300"/>
            </div>
            <div class="card-content-wrapper">
                <slot name="card-preheading"></slot>
                <slot name="card-heading"></slot>
                <slot name="card-subheading"></slot>
                <slot name="card-body"></slot>
                <slot name="card-footer"></slot>
                <slot name="button-container"></slot>
            </div>
        </div>
    }
}