import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
	componentWillMount(){
		firebase.initializeApp({
    apiKey: "AIzaSyDtKFqL6I0vZNM0kVUA8zO0LV_P1Y7Tc5g",
    authDomain: "authentication123-78bae.firebaseapp.com",
    databaseURL: "https://authentication123-78bae.firebaseio.com",
    projectId: "authentication123-78bae",
    storageBucket: "authentication123-78bae.appspot.com",
    messagingSenderId: "511407383730"
  });
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;