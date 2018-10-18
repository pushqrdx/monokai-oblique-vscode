import {
	CustomElement,
	Event,
	ExtendedHTMLElement,
	Property
} from '.';

@CustomElement('my-component')
class MyComponent extends ExtendedHTMLElement {
    // observed properties can be assigned through attributes.
    @Property({ observed: true })
    prize: number = 0;

    @Property() hearts: string[] = ['❤️', '💛', '💚', '💙', '💜', '🖤'];

    // custom event, you can subscribe to that.
    @Event() hijack: Event;
}