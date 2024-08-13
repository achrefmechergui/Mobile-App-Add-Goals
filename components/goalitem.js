import React, { useState } from 'react';
import {StyleSheet , Text ,View ,Pressable} from 'react-native'

const Goalitem = (props) => {


  


    const deletegoal = (id)=>{
     const result =   props.data.filter((ele)=>
          ele.id  !== id
        )
        props.setData(result)
        
       }  

    return (
        <Pressable onPress={()=>{deletegoal(props.id)}}>
             <View style={styles.goalscontainer}   >
              <Text style={styles.textgoals} >{props.dataitem.item.text   }</Text>
            </View>

        </Pressable>
     
    );
}

export default Goalitem;



const styles = StyleSheet.create({
    textgoals : {
        fontSize : 20,
        textAlign : 'center',
        color :'white'
      
      },
      goalscontainer :{
      borderWidth : 2,
      padding : 10 ,
      marginBottom : 20,
      borderRadius : 8,
      backgroundColor : '#5e0acc',
      marginRight : 10
      
      }
})
