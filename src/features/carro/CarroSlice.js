import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	carros: ["Model S", "Model Y", "Model 3", "Model X"],
};

const carroSlice = createSlice({
	name: "carro",
	initialState,
	reducers: {},
});

export const selecionarCarros = (state) => state.carro.carros;

export default carroSlice.reducer;
