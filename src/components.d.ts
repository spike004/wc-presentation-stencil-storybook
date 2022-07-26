/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BaseButton {
        "bgColor": string;
        "bgHighlight": string;
        "buttonLink": string;
        "buttonTag": string;
        "icon": string;
        "iconPosition": 'right';
        "text": string;
        "title": string;
    }
    interface BossCard {
    }
    interface BossModal {
        "closeBtn": HTMLElement;
        "isOpen": boolean;
        "launchBtn": any;
        "modal": HTMLElement;
        "triggerId": string | null;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SvgComponent {
        /**
          * The icon type
         */
        "icon": string;
    }
    interface SwapiComponent {
    }
}
declare global {
    interface HTMLBaseButtonElement extends Components.BaseButton, HTMLStencilElement {
    }
    var HTMLBaseButtonElement: {
        prototype: HTMLBaseButtonElement;
        new (): HTMLBaseButtonElement;
    };
    interface HTMLBossCardElement extends Components.BossCard, HTMLStencilElement {
    }
    var HTMLBossCardElement: {
        prototype: HTMLBossCardElement;
        new (): HTMLBossCardElement;
    };
    interface HTMLBossModalElement extends Components.BossModal, HTMLStencilElement {
    }
    var HTMLBossModalElement: {
        prototype: HTMLBossModalElement;
        new (): HTMLBossModalElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSvgComponentElement extends Components.SvgComponent, HTMLStencilElement {
    }
    var HTMLSvgComponentElement: {
        prototype: HTMLSvgComponentElement;
        new (): HTMLSvgComponentElement;
    };
    interface HTMLSwapiComponentElement extends Components.SwapiComponent, HTMLStencilElement {
    }
    var HTMLSwapiComponentElement: {
        prototype: HTMLSwapiComponentElement;
        new (): HTMLSwapiComponentElement;
    };
    interface HTMLElementTagNameMap {
        "base-button": HTMLBaseButtonElement;
        "boss-card": HTMLBossCardElement;
        "boss-modal": HTMLBossModalElement;
        "my-component": HTMLMyComponentElement;
        "svg-component": HTMLSvgComponentElement;
        "swapi-component": HTMLSwapiComponentElement;
    }
}
declare namespace LocalJSX {
    interface BaseButton {
        "bgColor"?: string;
        "bgHighlight"?: string;
        "buttonLink"?: string;
        "buttonTag"?: string;
        "icon"?: string;
        "iconPosition"?: 'right';
        "text"?: string;
        "title"?: string;
    }
    interface BossCard {
    }
    interface BossModal {
        "closeBtn"?: HTMLElement;
        "isOpen"?: boolean;
        "launchBtn"?: any;
        "modal"?: HTMLElement;
        "triggerId"?: string | null;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SvgComponent {
        /**
          * The icon type
         */
        "icon"?: string;
    }
    interface SwapiComponent {
    }
    interface IntrinsicElements {
        "base-button": BaseButton;
        "boss-card": BossCard;
        "boss-modal": BossModal;
        "my-component": MyComponent;
        "svg-component": SvgComponent;
        "swapi-component": SwapiComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "base-button": LocalJSX.BaseButton & JSXBase.HTMLAttributes<HTMLBaseButtonElement>;
            "boss-card": LocalJSX.BossCard & JSXBase.HTMLAttributes<HTMLBossCardElement>;
            "boss-modal": LocalJSX.BossModal & JSXBase.HTMLAttributes<HTMLBossModalElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "svg-component": LocalJSX.SvgComponent & JSXBase.HTMLAttributes<HTMLSvgComponentElement>;
            "swapi-component": LocalJSX.SwapiComponent & JSXBase.HTMLAttributes<HTMLSwapiComponentElement>;
        }
    }
}
