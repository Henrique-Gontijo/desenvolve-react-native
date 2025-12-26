import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numero: 0,
			botao: 'Iniciar',
			ultimo: null
		};
		this.tempo = null;
		this.iniciar = this.iniciar.bind(this);
		this.recomecar = this.recomecar.bind(this);
		
		if (this.tempo !== null) {
			clearInterval(this.tempo);
			this.tempo = null;
			this.setState({botao: 'Iniciar'});
		} else {
			this.setInterval(() => {
				this.setState({numero: this.state.numero + 0.1})
			}, 100);
		}
	}

	

	render() {
		return (
			<View style={styles.container}>

				<Text style={styles.titulo}>Cronômetro</Text>
				<Image source={require('./src/images/crono.png')} style={styles.crono}/>
				<Text style={styles.tempo}>0.0</Text>

				<View style={styles.areaBotao}>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.botaoTexto}>Iniciar</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.botaoTexto}>Recomeçar</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	} 
}


const styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'orange',
		justifyContent: 'center'
	},
	titulo: {
		fontSize: 50,
		fontWeight: 600,

	},
	crono: {
		width: 400,
		height: 400,
		marginTop: 20,
	},
	tempo: {
		marginTop: -248,
		fontSize: 40
	},
	botaoTexto: {
		fontSize: 24,
		fontWeight: 500,
	},
	btn: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 8,
		backgroundColor: 'white',
		borderRadius: 11

	},
	areaBotao: {
		flexDirection: 'row',
		marginTop: 220
	}

});

export default App;