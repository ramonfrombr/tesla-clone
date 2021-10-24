import React, { useState } from "react";

import {
	Container,
	Modelos,
	Menu,
	IconeMenu,
	BotaoContainer,
	IconeFecharMenu,
	MenuLateral,
} from "./NavbarElementos";

import { selecionarCarros } from "../../features/carro/CarroSlice";

import { useSelector } from "react-redux";

function Navbar() {
	const [menuAberto, definirMenuAberto] = useState(false);

	const carros = useSelector(selecionarCarros);

	console.log(carros);

	const botaoClicado = () => {
		definirMenuAberto(!menuAberto);
	};

	return (
		<Container>
			<a href="#">
				<img src="/imagens/logo.svg" alt="" />
			</a>
			<Modelos>
				{carros &&
					carros.map((carro, index) => (
						<a key={index} href="#">
							{carro}
						</a>
					))}
			</Modelos>

			<Menu>
				<a href="#">Shop</a>
				<a href="#">Tesla Account</a>
				<IconeMenu onClick={botaoClicado} />
			</Menu>
			<MenuLateral menuAberto={menuAberto}>
				<BotaoContainer>
					<IconeFecharMenu onClick={botaoClicado} />
				</BotaoContainer>

				{carros &&
					carros.map((carro, index) => (
						<li key={index}>
							<a href="#">{carro}</a>
						</li>
					))}

				<li>
					<a href="#">Existing Inventory</a>
				</li>
				<li>
					<a href="#">Used Inventory</a>
				</li>
				<li>
					<a href="#">Trade-in</a>
				</li>
				<li>
					<a href="#">Cybertruck</a>
				</li>
				<li>
					<a href="#">Roadster</a>
				</li>
				<li>
					<a href="#">Semi</a>
				</li>
				<li>
					<a href="#">Charging</a>
				</li>
			</MenuLateral>
		</Container>
	);
}

export default Navbar;
