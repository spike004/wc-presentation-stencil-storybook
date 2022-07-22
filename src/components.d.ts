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
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "svg-component": LocalJSX.SvgComponent & JSXBase.HTMLAttributes<HTMLSvgComponentElement>;
            "swapi-component": LocalJSX.SwapiComponent & JSXBase.HTMLAttributes<HTMLSwapiComponentElement>;
        }
    }
}