import Card, {CardProps} from "../components/card/card";
import { addObserver, appState, dispatch } from '../store/index';
import { getPeople } from '../store/actions';

class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    async connectedCallback() {
        const action = await getPeople();
        dispatch(action)
    }

    render() {

        appState.people.forEach((data: any) => {
            const StarCard = this.ownerDocument.createElement("my-card") as Card;
            StarCard.setAttribute(CardProps.name, data.name);
            StarCard.setAttribute(CardProps.birth_year, data.birth_year);
            StarCard.setAttribute(CardProps.gender, data.gender);
            StarCard.setAttribute(CardProps.height, data.height);
            this.shadowRoot?.appendChild(StarCard);
        });

    }
}

customElements.define('app-dashboard', Dashboard)
