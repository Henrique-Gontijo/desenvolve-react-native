import React from 'react';
import { View, Text, Image } from 'react-native';


const App = () => {
	return (

    	<View style={{justifyContent: 'center', alignItems: 'center'}}>

			<Text style={{fontSize: 25, color: 'blue', marginTop: 40, textAlign: 'center'}}>
				Olá mundo!
			</Text>

			<Image source={{uri: 'https://i.redd.it/l8chp2r5qe6a1.jpg'}} style={{width: 300, height: 300}}/>

			<Image source={{uri: 'https://static.wikia.nocookie.net/gtawiki/images/b/bd/BigSmoke-GTASA.jpg/revision/latest?cb=20230629061252'}} style={{width: 300, height: 300, marginTop: 100}}/>

    	</View>

	)
}

export default App;