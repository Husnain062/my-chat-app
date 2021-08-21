import styled from 'styled-components';
import Head from 'next/head';
import {Button} from '@material-ui/core';
import {auth, provider} from '../firebase';

const Login = () => {
	const signIn = () => {
		auth.signInWithPopup(provider).catch(alert);
	};
	return (
		<Container>
			<Head>
				<title>Login</title>
			</Head>
			<LoginContainer>
				<Logo src='https://tochat.be/whatsapp-icon-white.png' />
				<Button onClick={signIn} variant='outlined'>
					SIGN IN WITH GOOGLE
				</Button>
			</LoginContainer>
		</Container>
	);
};

export default Login;

const Container = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	background-color: whitesmoke;
`;

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 100px;
	background-color: white;
	align-items: center;
	border-radius: 5px;
	box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
	height: 200px;
	width: 200px;
	margin-bottom: 50px;
`;
