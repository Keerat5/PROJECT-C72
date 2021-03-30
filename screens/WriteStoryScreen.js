
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView , ToastAndroid, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component{

    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            storyText:''
        }
    }

    submitStory=()=>{
        this.setState=({
            title:'',
            author:'',
            storyText:''
        })
        db.collection("story").add({
            title:this.setState.title,
            author:this.setState.author,
            storyText:this.setState.storyText
        })
    }
    
    render(){
        return(

            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fed8b1'}}>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Story Hub</Text>
                </View>

                <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Story Title"/>
                </View>
                
                <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Author"/>
                </View>

                <View style={styles.inputView}>
                <TextInput 
                    style={styles.storyText}
                    placeholder="Write Your Story"
                    multiline='true'/>
                </View>

                <TouchableOpacity 
                    style={styles.submitButton}
                    onPress={this.submitStory}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textContainer:{
      width:1000,
      backgroundColor: 'pink',
      marginBottom:100,
    },
    text:{
      color: 'black',
      padding: 30,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
      },
      inputView:{
        flexDirection: 'row',
        margin: 20
      },
      inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
      },
      submitButton:{
          backgroundColor:'pink',
          width:150,
          height:50
      },
      submitButtonText:{
          padding:10,
          textAlign:'center',
          fontSize:20,
          fontWeight:'bold',
          color:'white'
      },
      storyText:{
        width: 200,
        height: 100,
        borderWidth: 1.5,
        fontSize: 20,

      }
  });