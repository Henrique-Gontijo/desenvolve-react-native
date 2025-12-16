import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			nome: 'Carlos'
		};
		this.entrar = this.entrar.bind(this);
	}

	entrar(){
		this.setState({
			nome: 'Leandro'
		});
	}

	render() {

		return (

			<View style={{marginTop: 30}}> 

				<Button title="Entrar" onPress={this.entrar}/>

				<Text style={{ fontSize:  30, color: 'blue', textAlign: 'center' }}>{this.state.nome}</Text>

			</View>

		);
	}
}

export default App;