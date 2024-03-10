import { CategoryState } from "../../category";
import { UserState } from "../../user";

export interface RegisterState {
    user: UserState;
    category: CategoryState;
}
