import React, { Component } from 'react';
import { View, Text, StyleSheet, TOuchableOpacity, Image } from 'react-native';


class App extends Component {

	render() {
		return (
			<View style={styles.container}>

				<Text style={styles.titulo}>Cronômetro</Text>
				<Image source={require('./src/images/crono.png')} style={styles.crono}/>
				<Text style={styles.tempo}>0.0</Text>

			</View>
		);
	} 
}


const styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'orange',
		justifyContent: 'center',
	},
	titulo: {
		fontSize: 50,
		fontWeight: 600,

	},
	crono: {
		width: 450,
		height: 450,
	},
	tempo: {
		marginTop: -290,
		fontSize: 60,
	},

});

export default App;