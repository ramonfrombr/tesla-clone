import { configureStore } from "@reduxjs/toolkit";
import carroReducer from "../features/carro/CarroSlice";

export const store = configureStore({
	reducer: {
		carro: carroReducer,
	},
});
