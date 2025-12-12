import React from 'react';
 import { View, ScrollView, Text, Image, FlatList, TextInput, Button } from 'react-native';


const App = () => {
	return (

    	<View style={{justifyContent: 'center', alignItems: 'center'}}>

				<ScrollView>
					
				<Text style={{ fontSize: 25, color: 'blue', marginTop: 40, textAlign: 'center', marginBottom: 32}}>
					Olá, meu chapa!
				</Text>

				<Image source={{uri: 'https://i.redd.it/l8chp2r5qe6a1.jpg' }} style={{width: 300, height: 300}}/>

				<FlatList 
					data={[{key: 'Arroz'}, {key: 'Feijão'}, {key: 'Carne'}]} 
					renderItem={({item}) => <Text>{item.key}</Text>} style={{marginTop: 32, fontSize: 20}}
				/>

				<TextInput 
					placeholder="Digite o seu nome" placeholderTextColor={"darkblue"}
					style={{
						height: 40, borderColor: '#1E1EFA', borderWidth: 2, marginTop: 32, 
						borderRadius: 8, backgroundColor: '#1E64FA', color: 'white'
					}}
				/>

				<View style={{marginTop: 32}}>
					<Button title="Cadastrar" 
						onPress={() => alert("Cadastro realizado com sucesso!\n\nSó falta descobrir no que raios você se cadastrou :)")}
					/>
				</View>

			</ScrollView>

    	</View>

	)
}

export default App;