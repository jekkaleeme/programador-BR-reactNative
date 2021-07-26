import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
 } from 'react-native';

 export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      height:0,
      weight:0,
      numericResult:0,
      result:""}

    this.calculate = this.calculate.bind(this)
  }

  calculate () {
   let imc = this.state.weight / (this.state.height * this.state.height)
   let s = this.state
   s.numericResult = imc
   if (s.numericResult < 16) {
     s.result ='Muito abaixo do peso'
   }
    else if (s.numericResult < 17) {
     s.result ='Moderadamente abaixo do peso'
    }
    else if (s.numericResult < 18.5) {
     s.result ='Abaixo do peso'
    }
    else if (s.numericResult < 25) {
     s.result ='Saudavel'
    }
    else if (s.numericResult < 30) {
     s.result ='Sobrepeso'
    }
    else if (s.numericResult < 35) {
     s.result ='Obesidade Grau 1°'
    }
    else if (s.numericResult < 40) {
      s.result ='Obesidade Grau 2°'
    }
    else {
      s.result ='Obesidade Grau 3°'
    }
   this.setState(s)
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Calculadora IMC
          </Text>
        </View>

        <View style={styles.information}>
          <TextInput 
            autoCapitalize="none" 
            placeholder="Altura" 
            keyboardType="numeric" 
            style={styles.input} 
            onChangeText={(height)=>{this.setState({height})}}
          />
          <TextInput 
            autoCapitalize="none" 
            placeholder="Massa"  
            keyboardType="numeric" 
            style={styles.input} 
            onChangeText={(weight)=>{this.setState({weight})}}
          />
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={this.calculate}
        >
            <Text 
            style={styles.buttonTitle}
            >
              Calcular
            </Text>
          </TouchableOpacity>

        <Text 
          style={styles.result}
        >
          {this.state.numericResult.toFixed(2)}
        </Text>
        <Text 
          style={[styles.result,
            {fontSize:24,
              color: '#FF0000'
            }]}
        >
          {this.state.result}
        </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    color: '#9ACD32',
    fontWeight: 'bold',
    fontSize: 48,
    alignSelf: 'center',
    paddingTop: 100
  },
  information:{
    flexDirection:'row',
  },
  input:{
    height: 120,
    textAlign: 'center',
    width: '50%',
    fontSize: 48,
    marginTop: 40,
  },
  button:{
   backgroundColor: '#9ACD32',
  },
  buttonTitle:{
    textAlign: 'center',
    padding: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color:'#008000',
  },
  result:{
    alignSelf:'center',
    color:'#D3D3D3',
    fontSize: 48,
    fontWeight: 'bold',
    padding: 10,
  },
});
