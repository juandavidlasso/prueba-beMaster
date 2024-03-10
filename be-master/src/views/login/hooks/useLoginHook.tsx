import * as yup from "yup";
import { UserState } from "../../../models/user";
import useAppDispatch from "../../../hooks/store/useAppDispatch";
import { saveUser } from "../../../stateManagement/register";
import { useNavigate } from "react-router-dom";

export const useLoginHook = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const validateSchema = yup.object({
        email: yup
            .string()
            .required("El email es requerido")
            .email("El email no tiene el formato correcto"),
        password: yup.string().required("El password es requerido"),
    });

    const submitUser = async (values: UserState) => {
        dispatch(
            saveUser({
                email: values.email,
                password: values.password,
                isActive: true,
            })
        );
        navigate("/home");
    };

    return {
        validateSchema,
        submitUser,
    };
};
