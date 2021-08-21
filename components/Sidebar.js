import React from 'react';
import styled from 'styled-components';
import {Avatar, IconButton, Button} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollection} from 'react-firebase-hooks/firestore';
import Chat from './Chat';

import {auth, db} from '../firebase';

const Sidebar = () => {
	const [user] = useAuthState(auth);
	const userChatRef = db.collection('chats').where('users', 'array-contains', user.email);
	const [chatsSnapshot] = useCollection(userChatRef);

	const createNewChat = () => {
		const input = prompt('Please enter email address to start chat');

		if (!input) {
			return null;
		}

		if (EmailValidator.validate(input) && input !== user.email && !chatAlreadyExists(input)) {
			db.collection('chats').add({
				users: [user.email, input],
			});
		}
	};

	const chatAlreadyExists = reciptentEmail => {
		console.log('THe new one', reciptentEmail);
		return !!chatsSnapshot?.docs.find(chat => chat.data().users.find(user => user === reciptentEmail)?.length > 0);
	};

	return (
		<Container>
			<Header>
				<UserAvatar onClick={() => auth.signOut()} />
				<IconsContainer>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</IconsContainer>
			</Header>
			<Search>
				<SearchIcon />
				<SearchInput placeholder='Search in chats' />
			</Search>
			<SidebarButton onClick={createNewChat}>{'START A NEW CHAT'}</SidebarButton>
			{chatsSnapshot?.docs.map(chat => {
				return <Chat key={chat.id} id={chat.id} users={chat.data().users} />;
			})}
		</Container>
	);
};

export default Sidebar;

const Container = styled.div`
	flex: 0.45;
	border-right: 1px solid whitesmoke;
	height: 100vh;
	min-width: 320px;
	max-width: 350px;
	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}

	--ms-overflow-style: none;
	scrollbar-width: none;
`;

const Header = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 1;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	height: 80px;
	border-bottom: 1px solid whitesmoke;
`;

const Search = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
`;

const SidebarButton = styled(Button)`
	width: 100%;
	&&& {
		border-top: 1px solid whitesmoke;
		border-bottom: 1px solid whitesmoke;
	}
	font-weight: 800;
`;

const UserAvatar = styled(Avatar)`
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`;

const IconsContainer = styled.div``;

const SearchInput = styled.input`
	outline-width: 0;
	border: none;
	padding: 10px;
	flex: 1;
`;
