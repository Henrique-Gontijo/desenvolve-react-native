import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { doc, getDoc, addDoc, onSnapshot, query, collection, 
	orderBy, limit} from 'firebase/firestore';
import { db } from './src/firebaseConnection.js';


export default function App() {

	const [usuario, setUsuario] = useState({
		nome: 'Carregando...',
		email: 'Carregando...',
		telefone: 'Carregando'
	});
	
	const [novoNome, setNovoNome] = useState('');
	const [novoEmail, setNovoEmail] = useState('');
	const [novoTelefone, setNovoTelefone] = useState('');

	useState('')

	useEffect(() => {
		const q = query(collection(db, 'usuario'),
			orderBy('nome', 'desc'), limit(1)
		);

		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			if (!querySnapshot.empty) {
				setUsuario(querySnapshot.docs[0].data());
			} else {
				console.log('Nenhum usuário encontrado!');
			}
		});
		return () => unsubscribe();
	}, []);

	// Adicionar usuário
	async function handleRegister() {
		if (novoNome === '' || novoEmail === '' || novoTelefone === '') {
			alert('Preencha todos os Campos');
			return;
		}

		try {
			await addDoc(collection(db, 'usuario'), {
				nome: novoNome,
				email: novoEmail,
				telefone: novoTelefone
			});

			console.log('Usuário registrado com sucesso!');

			//Limpar os campos após cadastro
			setNovoNome('');
			setNovoEmail('');
			setNovoTelefone('');
		} catch (error) {
			console.error(
				'"Puts, deu zebra!"\n\n Ocorreu algum erro ao registrar o novo usuário, veja: \n\n', error
			);
		}
	}

	return (

		<View style={styles.container}> 
			<Text style={{fontSize: 24}}>Último cadastro: </Text>

			<Text style={{fontSize: 24}}>Nome: {usuario.nome}</Text>
			<Text style={{fontSize: 24}}>E-mail: {usuario.email}</Text>
			<Text style={{fontSize: 24}}>Telefone: {usuario.telefone}</Text>
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