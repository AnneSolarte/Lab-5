import traer_api from "../services/data"
import { GetStarAction, StarActions } from "../types/store"

export const getPeople = async (): Promise<GetStarAction> => {
    const star = await traer_api();
    return {
        action: StarActions.GET,
        payload: star
    }
}