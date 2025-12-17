import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from './src/firebaseConnection.js';


export default function Fire() {

	return (

		<View style={styles.container}> 

		<Text style={{fontSize: 24}}>Firebase</Text>

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