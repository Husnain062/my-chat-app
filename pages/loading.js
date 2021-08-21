import {Circle} from 'better-react-spinkit';

const Loading = () => {
	return (
		<center style={{display: 'grid', placeItems: 'center', height: '100vh'}}>
			<div>
				<img height={200} alt='' src='https://tochat.be/whatsapp-icon-white.png' style={{marginBottom: 10}}></img>
				<Circle color='#3CBC28' size={60} />
			</div>
		</center>
	);
};

export default Loading;
