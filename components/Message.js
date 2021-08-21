import styled from 'styled-components';
import moment from 'moment';

const Message = ({user, message, loginUser}) => {
	const TypeOfMessage = user === loginUser.email ? Sender : Reciver;
	return (
		<Container>
			<TypeOfMessage>
				{message.message}
				<Timestamp>{message.timestamp ? moment(message.timestamp).format('LT') : '...'}</Timestamp>
			</TypeOfMessage>
		</Container>
	);
};

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
	width: fit-content;
	padding: 15px;
	border-radius: 8px;
	margin: 10px;
	min-width: 60px;
	padding-bottom: 26px;
	position: relative;
	text-align: right;
`;

const Reciver = styled(MessageElement)`
	background-color: whitesmoke;
	text-align: left;
`;

const Sender = styled(MessageElement)`
	background-color: #dcf8c6;
	margin-left: auto;
`;

const Timestamp = styled.span`
	color: gray;
	padding: 10px;
	font-size: 9px;
	position: absolute;
	bottom: 0;
	text-align: right;
	right: 0;
`;
