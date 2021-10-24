import React from "react";

import { Container } from "./InicioElementos";

import Secao from "../secao/Secao";

function Inicio() {
	return (
		<Container>
			<Secao
				titulo="Model S"
				descricao="Order Online for Touchless Delivery"
				imagem="model-s.jpg"
				textoBotaoEsquerda="Custom order"
				textoBotaoDireita="Existing inventory"
			/>
			<Secao
				titulo="Model Y"
				descricao="Order Online for Touchless Delivery"
				imagem="model-y.jpg"
				textoBotaoEsquerda="Custom order"
				textoBotaoDireita="Existing inventory"
			/>
			<Secao
				titulo="Model 3"
				descricao="Order Online for Touchless Delivery"
				imagem="model-3.jpg"
				textoBotaoEsquerda="Custom order"
				textoBotaoDireita="Existing inventory"
			/>
			<Secao
				titulo="Model X"
				descricao="Order Online for Touchless Delivery"
				imagem="model-x.jpg"
				textoBotaoEsquerda="Custom order"
				textoBotaoDireita="Existing inventory"
			/>
			<Secao
				titulo="Lowest Cost Solar Panels in America"
				descricao="Money-back guarantee"
				imagem="solar-panel.jpg"
				textoBotaoEsquerda="Order now"
				textoBotaoDireita="Learn more"
			/>
			<Secao
				titulo="Solar for New Roofs"
				descricao="Solar Roof Costs Less Than a New Roof"
				imagem="solar-roof.jpg"
				textoBotaoEsquerda="Order now"
				textoBotaoDireita="Learn more"
			/>
			<Secao
				titulo="Accessories"
				descricao=""
				imagem="accessories.jpg"
				textoBotaoEsquerda="Shop now"
			/>
		</Container>
	);
}

export default Inicio;
