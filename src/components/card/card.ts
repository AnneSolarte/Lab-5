import styles from "./styles.css"

export enum CardProps {
    "name" = "name",
    "birth_year" = "birth_year",
    "gender" = "gender",
    "height" = "height",

}

class Card extends HTMLElement {
    name?: string;
    birth_year?: string;
    gender?: string;
    height?: string;

    static get observedAttributes() {
        const attrs: Record<CardProps, null> = {
            birth_year: null,
            name: null,
            gender: null,
            height: null,
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
                    <img class="img" src="/img/Card.png">
                    <div class="infoSection">
                        <h1>Name: ${this.name}</h1>
                        <p class="text">Height: ${this.height}</p>
                        <p class="text">Gender: ${this.gender}</p>
                        <p class="text">Birth Year: ${this.birth_year}</p>
                    </div>
                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;
