import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal ,Image } from "react-native";

const Goalinput = (props) => {


  
  const handelinput = (containt) => {
    props.setgoalsdata(containt);
  };

  const addgoal = () => {
    props.setData((data) => {
      return [...data, { text: props.goalsdata, id: Math.random() }];
    });
    props.setgoalsdata("");
    props.finish(false)
  };

  return (
    <Modal  visible={props.visible} animationType="slide">
      <View style={styles.inputcontainer}>
        <Image style={styles.image} source={require('../assets/images/test.png')}/>
        <View style ={styles.input} >

        <TextInput
          value={props.goalsdata}
          onChangeText={(e) => {
            handelinput(e);
          }}
          style={styles.textinput}
          placeholder="Your course goal ..."
        />
        </View>
      <View style = {styles.button} >
      <Button
          onPress={() => {
            addgoal();
          }}
          title="Add goal"
         
        />

        <Button onPress={()=>{props.close()}} color="#f31282"  title="Close" />

      </View>
     
      </View>
    </Modal>
  );
};

export default Goalinput;

const styles = StyleSheet.create({
  inputcontainer: {
   paddingTop : 50 ,
    textAlign: "center",
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
    backgroundColor :"#311b6b"
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
   textAlign : "center",
   padding : 10
  },
  input : {
 marginHorizontal :50,
 width : "90%",
 
  },
  button : {
  flexDirection : "row",
  marginLeft : 113,
  marginTop : 10
  },

  image :{
    width : 100, 
    height : 100, 
    marginHorizontal :135,
    marginBottom : 40
  }
});
