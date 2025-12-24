import React, { Component } from 'react';
import { View, Text, StyleSheet, TOuchableOpacity, Image } from 'react-native';


class App extends Component {

	render() {
		return (
			<View style={styles.container}>

				<Text style={styles.titulo}>Cronômetro</Text>
				<Image source={require('./src/images/cj.jpg')} style={styles.crono}/>
				<Text style={styles.tempo}>0.0</Text>

			</View>
		);
	} 
}


const styles = StyleSheet.create({

	container: {

	},
	titulo: {

	},
	crono: {

	},
	tempo: {

	},

});

export default App;