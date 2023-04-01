import styles from "./styles.css"

export enum CardProps {
    "name" = "name",
    "birth_year" = "birth_year",

}

class Card extends HTMLElement {
    name?: string;
    birth_year?: string;

    static get observedAttributes() {
        const attrs: Record<CardProps, null> = {
            birth_year: null,
            name: null,
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: CardProps,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                this.shadowRoot.innerHTML += `
                <section class="cardSection">
                    <h1 class="name">Name: ${this.name}</h1>
                    <p class="birthYear">Birth Year: ${this.birth_year}</p>
                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;
