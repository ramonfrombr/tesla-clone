import styled from "styled-components";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const Container = styled.div`
	min-height: 60px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	z-index: 1;
`;

export const Modelos = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
		flex-wrap: nowrap;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 10px;
	}
`;

export const IconeMenu = styled(MenuIcon)`
	cursor: pointer;
`;

export const BotaoContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const IconeFecharMenu = styled(CloseIcon)`
	cursor: pointer;
`;

export const MenuLateral = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background: white;
	width: 300px;
	z-index: 10;
	list-style: none;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform: ${(props) =>
		props.menuAberto ? "translateX(0)" : "translateX(100%)"};

	transition: transform 0.2s;

	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);

		a {
			font-weight: 600;
		}
	}
`;
