import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, UseDispatch } from "./appStore";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<UseDispatch>()