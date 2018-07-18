import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';


export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true }
  }


    // fetch staff list json---------------------------------------------------
    componentDidMount(){
      return fetch('https://intranet2.paulding.k12.ga.us/Guardessa/locations.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.staff,
          }, function(){
          });
        })
        .catch((error) =>{
          console.error(error);
        });
    }

  // componentDidMount(){
  //   return fetch('https://intranet2.paulding.k12.ga.us/Guardessa/staff.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson.staff,
  //       }, function(){
  //       });
  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title},  {item.BGColor}, {item.TXColor}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>

      //  <View style={{flex: 1, padding: 10}}>
      //  <FlatList  
      //     style={styles.ghostNames}
      //     data={this.state.dataSource}
      //     //renderItem={({item}) => <Text style={styles.item}> {item.firstName},  {item.lastName}, {item.phone}</Text>}        
      //     renderItem={({item}) => <Button style={{fontWeight: 'bold', color: 'pink'}} title={item.phone} onPress={this._onPressButton} />}
      //     keyExtractor={(item, index) => index.toString()}
      //   />
      // </View>


    );
  }
}



