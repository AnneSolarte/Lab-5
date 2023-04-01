import "./components/export"
import "./screens/dashboard"
import styles from "./components/card/styles.css"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)