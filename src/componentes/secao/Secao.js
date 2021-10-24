import React from "react";

import {
	Container,
	ItemTexto,
	ContainerBotoes,
	Botoes,
	BotaoEsquerda,
	BotaoDireita,
	SetaBaixo,
} from "./SecaoElementos";

import Fade from "react-reveal/Fade";

const Secao = ({
	titulo,
	descricao,
	imagem,
	textoBotaoEsquerda,
	textoBotaoDireita,
}) => {
	return (
		<Container imagem={imagem}>
			<Fade bottom>
				<ItemTexto>
					<h1>{titulo}</h1>
					<p>{descricao}</p>
				</ItemTexto>
			</Fade>

			<ContainerBotoes>
				<Fade bottom>
					<Botoes>
						<BotaoEsquerda>{textoBotaoEsquerda}</BotaoEsquerda>

						{textoBotaoDireita && (
							<BotaoDireita>{textoBotaoDireita}</BotaoDireita>
						)}
					</Botoes>
				</Fade>

				<SetaBaixo src="/imagens/down-arrow.svg" />
			</ContainerBotoes>
		</Container>
	);
};

export default Secao;
