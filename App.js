import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeEmergencias from './src/pages/HomeEmergencias';
import Registrarse from './src/pages/Registrarse';

export default function App() {
  const [logado,setLogado]=useState(false)
  const [pageLogin,setPageLogin]=useState(false)
  const [pageCadastro,setpageCadastro]=useState(false)
  const [userEmail, setUserEmail]=useState('')
  const [userPassWord, setUserPassWord]=useState('')
  const [errorEmail,seterrorEmail]=useState(false)
  const [errorPasseord,seterrorPasseord]=useState(false)

  //Cria navegação
  const Stack = createNativeStackNavigator();

  //Pagina de login
  function Login({ navigation }) {
    return (
      <View style={styles.containerMain}>
          <StatusBar animated='animated' style="auto" translucent='false'/>
          <View style={[styles.flexRow,{marginBottom:75}]}>
            <Image source={require("./src/assets/Logo400x400.png")} style={styles.logoMain} alt='Logo do Corpo de bombeiros Militar de Mato Grosso' />
            <Text style={styles.textMain}>
              Emergências
            </Text>
            <Text style={styles.textMain}>
              193
            </Text>
          </View>
          <Text style={[styles.textBase,{marginBottom:32}]}>
            Efetue seu Login
          </Text>
          <View style={styles.flexRow}>
            <TouchableOpacity onPress={()=>{}} style={styles.buttonSemiRounded}>
              <View style={styles.containerIcon}>
                <Image source={require('./src/assets/iconFacebook.png')}  style={styles.icon}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} style={styles.buttonSemiRounded}>
              <View style={styles.containerIcon}>
                <Image source={require('./src/assets/iconGoogle.png')}  style={styles.icon}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.with80}>
            <View style={[styles.containerTextTopInput]}>
              <Text style={styles.textTopInput}>
                E-mail:
              </Text>
            </View>
            <TextInput
            style={[styles.input,styles.withFull]}
              onChangeText={setUserEmail}
              value={userEmail}
              placeholder="Inseira seu e-mail"
              keyboardType="e
              mail-address"
            />
            <Text style={[{display:errorEmail?'flex':'none'},styles.textTopInput]}>
              E-mail deve ser no formato: exemplo@gmail.com
            </Text>
            <View style={styles.containerTextTopInput}>
              <Text style={styles.textTopInput}>
                Senha:
              </Text>
            </View>
            <TextInput
            style={[styles.input,styles.withFull]}
              onChangeText={setUserPassWord}
              value={userPassWord}
              placeholder="Inseira seu e-mail"
              keyboardType="e
              mail-address"
            />
            <Text style={[{display:errorPasseord?'flex':'none'},styles.textTopInput]}>
              Senha deve ao menos ter 8 digitos, uma letra maiúscula, uma minúscula e um caractere especial
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Emergências')}} style={[styles.buttonSemiRounded,styles.backgroundRed, styles.withFull,styles.marginTop20]}>
              <Text style={styles.textoButtonWith}>
                Acessar
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate('Registrar-se')}}>
            <Text style={[styles.textTopInput,styles.marginTop20]}>
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>
          <Text style={[styles.textTopInput,styles.marginTop]}>
            ou
          </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Registrar-se',{
            TesteDeParametros:1,
            TesteDeParametrosText:'texto',
            
          })}}>
            <Text style={[styles.textRed,styles.marginTop]}>
              Registrar-se
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} style={styles.buttonCall}>
            <Image 
              source={require('./src/assets/call.png')} 
              style={styles.iconSmall}
            />
            <Text style={[styles.textRed,styles.textBold]}>193</Text>
          </TouchableOpacity>
        </View>
      
    );
  }

  

  return (
    //Inicialização padrão para usar nagevação no aplicativo
    //Cria as páginas dentro Stack.Navigator
    //Cada Screen é uma página
    //initialTouteName é a propriedade que define a página inicial
    //Se deixar vazio sem a propriedade, renderiza o primeiro Screen
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Login'
          screenOptions={styles.styleTitlePagesColorRedBgWhite} //Estilo para todas as páginas
          >
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={styles.styleTitlePagesColorRedBgWhite} //define estilo para pagina atual
        />
        <Stack.Screen 
          name="Emergências" 
          component={HomeEmergencias} 
          options={{headerBackVisible:false}}//Esconde no botão de voltar
          />
        <Stack.Screen 
          name="Registrar-se" 
          component={Registrarse} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const styles = StyleSheet.create({
  styleTitlePagesColorRedBgWhite:{
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#ff0000',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  },
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
  flexRow:{
    width:'100%',
    height:80,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoMain:{
    width:60,
    objectFit: "contain"
  },
  textMain:{
    fontSize:36,
    fontWeight: 'bold',
    color:'#ff0000'
  },
  backgroundRed:{
    backgroundColor:'#ff0000'
  },
  marginTop20:{
    marginTop:20
  },
  textBase:{
    fontSize:26,
    color:'#64748b',
    fontWeight:'bold',
  },
  buttonSemiRounded:{
    width:10,
    height:50,
    borderRadius:'50%',
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 0
    },
    shadowOpacity:0.3,
    shadowRadius:5
  },
  containerTextTopInput:{
    marginLeft:10, 
    padding:5, 
    transform: [{ translateY: 13 }],
    backgroundColor:'#fff', 
    zIndex:999, 
    width:60, 
    alignItems:'center',
    color: '#94a3b8',
  },
 textTopInput:{
  color:'#64748b'
 },
 textBold:{
  fontWeight:'bold'
 },
 textRed:{
  color: '#ff0000'
 },
 withFull:{
  width:'100%'
 },
 with80:{
  width:'80%'
 },
  input:{
    borderWidth:1,
    borderColor:'#94a3b8',
    borderRadius:4,
    padding:10,
  },
  textoButtonWith:{
    fontSize:16,
    fontWeight:'bold',
    color:'#fff'
  },
  buttonCall:{
    backgroundColor: '#fff',
    borderWidth:1,
    marginTop:50,
    padding:5,
    borderRadius:'50%',
    alignItems:'center',
    justifyContent:'center',
    width:120
  },
  containerIcon:{
    padding:10,
    backgroundColor:'#fff',
    borderRadius:'100%',
    width:80,
    alignItems:'center',
    justifyContent:'center'
  },
  icon:{
    width:40,
    height:40,
  },
  iconSmall:{
    width:25,
    height:25
  }
});
