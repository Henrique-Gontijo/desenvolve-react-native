import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { doc, getDoc, onSnapshot, query, collection } from 'firebase/firestore';
import { db } from './src/firebaseConnection.js';


export default function App() {

	const [nome, setNome] = useState({
		nome: 'Carregando...',
		email: 'Carregando...',
		telefone: 'Carregando'
	});
	
	const [novoNome, setNovoNome] = useState('');
	const [novoEmail, setNovoEmail] = useState('');
	const [novoTelefone, setNovoTelefone] = useState('');

	useState('')

	useEffect(() => {
		const q = query(collection(db, 'usuario'));

		async function getDados () {
			onSnapshot(doc(db, 'usuario', '1'), (doc) => {
				setNome(doc.data()?.nome);
			});
		}

		getDados();
		
	}, []);

	return (

		<View style={styles.container}> 

		<Text style={{fontSize: 24}}>Usuário: {nome}!</Text>

		</View>

	);
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}

});