import { createAction } from "@reduxjs/toolkit";
import { UserState } from "../../models/user";
import { CategoryState } from "../../models/category";

export const saveUser = createAction<UserState>("register/saveUser");

export const saveCategory = createAction<CategoryState>(
    "register/saveCategory"
);
