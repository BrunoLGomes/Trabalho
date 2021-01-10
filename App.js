import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, SafeAreaView, Animated, Modal, TextComponent, ViewComponent, } from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatableBtn = Animatable.createAnimatableComponent(TouchableOpacity)
export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [modal, setModal] = useState(false);

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc <= 18.4) {
      (`Abaixo do peso!
Seu IMC é de: ` + imc.toFixed(2));
    } else if (imc >= 18.5 && imc < 24.9) {
      (`Peso Normal!
Seu IMC é de: ` + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 29.9) {
      (`Sobrepeso!
Seu IMC é de: ` + imc.toFixed(2));
    } else if (imc >= 29.9 && imc < 34.9) {
      (`Obesidade Grau 1!
Seu IMC é de: ` + imc.toFixed(2));
    } else if (imc >= 34.9 && imc < 39.9) {
      (`Obesidade Grau 2!
Seu IMC é de: ` + imc.toFixed(2));
    } else if (imc >= 40) {
      (`Obesidade Grau 3 ou Mórbida!
Seu IMC é de: ` + imc.toFixed(2));
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content'></StatusBar>
      <Animatable.View
        style={styles.container}
        animation='bounceIn'
        duration={2000}
        useNativeDriver
      >
        <Animatable.Text
          style={styles.title}
          animation='flash'
          duration={1000}
          iterationCount='infinite'
        >Calcule Seu IMC</Animatable.Text>

        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={(peso) => setPeso(peso)}
          placeholder="Peso (Kg)"
          keyboardType={'numeric'}
        />

        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
          placeholder="Altura (Cm)"
          keyboardType={'numeric'}
        />

        <AnimatableBtn
          style={styles.button}
          useNativeDriver
          animation='pulse'
          iterationCount='infinite'
          onPress={handleSubmit}
          onPressOut={() => setModal(true)}>
          <Text style={styles.buttonText}>Calcular</Text>
        </AnimatableBtn>
      </Animatable.View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}>
        <SafeAreaView style={styles.containerModal}>
          <Text style={styles.modalText}> teste modal 123</Text>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
    color: '#FFF'
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 1,
      height: 3
    }
  },
  buttonText: {
    color: '#FFF',
    fontSize: 25,
  },
  containerModal: {
    flex: 1,
    marginTop: 280,
    marginBottom: 280,
    margin: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
  },
  modalText: {
    fontSize: 20,
  }
});
