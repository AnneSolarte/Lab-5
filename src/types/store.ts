import { War } from "./data"
export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    people: War[]
}

export enum StarActions {
    "GET" = "GET",
}

export interface GetStarAction {
    action: StarActions.GET,
    payload: War[]
}

export type Actions = GetStarAction;