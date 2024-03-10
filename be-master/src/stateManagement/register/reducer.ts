import { createReducer } from "@reduxjs/toolkit";
import { saveCategory, saveUser } from "./actions";
import { RegisterState } from "../../models/store/registerSlice";

export const registerInitialState: RegisterState = {
    user: {
        email: "",
        password: "",
        isActive: false,
    },
    category: {
        id: 0,
        title: "",
        time: 0,
        director: "",
        sinopsis: "",
        category: [],
        image: "",
        actors: [],
        trailer: "",
    },
};

const appRegisterReducer = createReducer(registerInitialState, (builder) => {
    builder
        .addCase(saveUser, (state, action) => {
            state.user = action.payload;
        })
        .addCase(saveCategory, (state, action) => {
            state.category = action.payload;
        });
});

export default appRegisterReducer;
