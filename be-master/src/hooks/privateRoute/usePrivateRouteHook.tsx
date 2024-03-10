import { Navigate } from "react-router-dom";
import { IRootState } from "../../models/store/core";
import useAppSelector from "../store/useAppSelector";

export const usePrivateRouteHook = () => {
    const { user } = useAppSelector(
        (state: IRootState) => state.registerReducer
    );

    const PrivateRoute = ({ children }: { children: JSX.Element }) =>
        user.isActive ? children : <Navigate to='/login' />;

    return {
        PrivateRoute,
    };
};
