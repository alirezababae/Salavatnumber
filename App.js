
import React  from 'react';
import {StyleSheet, Text, View,Button,Alert} from 'react-native';
/*
/red
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/


export default class App extends React.Component{
constructor(props){
super(props)
this.plaus = this.plaus.bind(this);
this.maines = this.maines.bind(this);
this.refres = this.refres.bind(this);
this.state={
count:0

}

}






plaus(){

this.setState((prevState) =>{

return{
count:prevState.count+1

}

})

}


maines(){


this.setState((prevState) => {
return{
count:prevState.count-1

}


})

}

refres(){


  this.setState((prevState) => {
    return{
    count:prevState.count=0
    
    }
    
    
    })
    

}

about(){
Alert.alert('developer app wite alireza babaei bower boy React native')


}


render(){

return(

<View >

<Button
 
onPress={this.plaus}
title="صلوات"
/>


<Button
 
onPress={this.maines}
title="کم کردن"
/>


<Button
 
onPress={this.refres}
title="بازگردانی"
/>


<Text style={cs.text}>
تعداد صلوات:
{this.state.count}
  </Text>


<Button
 
onPress={this.about}
title="about developer"
/>



  </View>

);


}


}

const cs = StyleSheet.create({

text:{
fontSize:23,
marginTop: 30,
color:'firebrick',
}
});
