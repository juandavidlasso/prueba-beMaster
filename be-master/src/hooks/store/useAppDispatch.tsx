import { IADispatch } from "../../models/store/core";
import { useDispatch } from "react-redux";

const useAppDispatch = () => useDispatch<IADispatch>();

export default useAppDispatch;
