import React from 'react';
import { View, ScrollView, Text, Image, FlatList } from 'react-native';


const App = () => {
	return (

    	<View style={{justifyContent: 'center', alignItems: 'center'}}>

				<ScrollView>
					
				<Text style={{ fontSize: 25, color: 'blue', marginTop: 40, textAlign: 'center' }}>
					Olá, meu chapa!
				</Text>

				<Image source={{uri: 'https://i.redd.it/l8chp2r5qe6a1.jpg' }} style={{width: 300, height: 300}}/>

				<FlatList data={[{key: 'Arroz'}, {key: 'Feijão'}, {key: 'Carne'}]} renderItem={({item}) => <Text>{item.key}</Text>}/>

				<Image 
					source={{ uri: 'https://static.wikia.nocookie.net/gtawiki/images/b/bd/BigSmoke-GTASA.jpg/revision/latest?cb=20230629061252' }} 
					style={{ width: 300, height: 300, marginTop: 100 }}
				/>

			</ScrollView>

    	</View>

	)
}

export default App;