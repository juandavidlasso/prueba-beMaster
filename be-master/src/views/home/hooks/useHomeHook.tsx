import { useNavigate } from "react-router-dom";
import useAppDispatch from "../../../hooks/store/useAppDispatch";
import { saveCategory } from "../../../stateManagement/register";
import { CategoryState } from "../../../models/category";

export const useHomeHook = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const submitCategory = (category: CategoryState) => {
        dispatch(saveCategory(category));
        navigate("/content-category");
    };

    return {
        submitCategory,
    };
};
