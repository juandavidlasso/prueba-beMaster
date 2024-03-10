type CategoryTypes =
    | "TERROR"
    | "DRAMA"
    | "SUSPENSO"
    | "COMEDIA"
    | "THRILLER"
    | "ACCIÓN"
    | "ANIMADA"
    | "AVENTURA";

export interface CategoryState {
    id: number;
    title: string;
    time: number;
    director: string;
    sinopsis: string;
    category: CategoryTypes[];
    image: string;
    actors: string[];
    trailer: string;
}
