import React from 'react';
import { View, Text, Image } from 'react-native';


const App = () => {
	return (

    	<View>

			<Text style={{fontSize: 25, color: 'blue', marginTop: 40, textAlign: 'center'}}>
				Olá mundo!
			</Text>

			<Image source={{uri: 'https://i.redd.it/l8chp2r5qe6a1.jpg'}} style={{width: 100, height: 100}}/>

    	</View>

	)
}

export default App;