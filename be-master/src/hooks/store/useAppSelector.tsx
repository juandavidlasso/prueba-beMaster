import { IRootState } from "../../models/store/core";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useAppSelector;
