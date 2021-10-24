import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${(props) => `url("/imagens/${props.imagem}")`};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const ItemTexto = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

export const ContainerBotoes = styled.div``;

export const Botoes = styled.div`
	display: flex;
	margin-bottom: 30px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const BotaoEsquerda = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`;

export const BotaoDireita = styled(BotaoEsquerda)`
	background: white;
	opacity: 0.65;
	color: black;
`;

export const SetaBaixo = styled.img`
	height: 40px;
	overflow-x: hidden;

	animation: movimentarSeta infinite 1.5s;
`;
