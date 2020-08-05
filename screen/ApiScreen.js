// // import React, { useEffect, useState } from 'react';
// // import {
// //   View,
// //   StyleSheet,
// //   Text,
// //   SafeAreaView,
// //   Image,
// //   ScrollView,
// //   Button,
// //   ActivityIndicator,
// //   FlatList,
// //   TouchableOpacity
// // } from 'react-native';

// // const ApiScreen = (props) => {


// // const [isLoading, setLoading] = useState(true);
// // const [data, setData] = useState([]);

// //  useEffect(() => {
// //    fetch('https://jsonplaceholder.typicode.com/users')
// //      .then((response) => response.json())
// //      .then((json) => setData(json))
// //      .catch((error) => console.error(error))
// //      .finally(() => setLoading(false));
// //  }, []);










// // return(
// //     <ScrollView>
// //       <View>
  
// //         <SafeAreaView>
// //     <View style={styles.apiViewArea}>
// //     <View style={{ flex: 1, padding: 24 }}>
// // {isLoading ? <ActivityIndicator/> : (
// // <FlatList
// // data={data}
// // keyExtractor={({ id }, index) => id}
// // renderItem={({ item }) => (
// //   <View style={styles.apiContainer}>
// //   <Text style={styles.apiText}>{item.name}</Text>
// //   <Text style={styles.apiText}>{item.username}</Text>
// //   <Text style={styles.apiText}>{item.email}</Text></View>
// // )}
// // />
// // )}
// // </View>


// //  </View>
// //  </SafeAreaView>
// //  </View>
// //  </ScrollView>
// // );

// // };

// // const styles = StyleSheet.create({
    
// //     innerText: {
// //       fontSize: 50,
// //     },
// //     apiViewArea: {
// //       marginTop: 15,
// //     },
// //     apiContainer: {
// //       backgroundColor: '#dcd8d8',
// //       marginTop: 30,
// //       justifyContent: 'center',
// //       textAlign: 'justify',
// //     },
// //     apiText: {
// //       lineHeight: 25,
// //     },
// // });

// // export default ApiScreen;




// // import React from 'react';
// // import {View, StyleSheet, Text} from 'react-native';

// // export default class ApiScreen extends React.Component{
// //     async componentDidMount() {
// //         try {
// //             await fetch('http://clients.aksinteractive.com/a4a-new/member-apis/Users/profileUpdate', {method: 'post', mode: 'no-cors', headers:{
// //                 'Accept' : 'application/json',
// //                 "Content-Type" : "application/json"
// //             },
// //             body : JSON.stringify({
// //                 firstName: 'raghav',
// //             })
// //            })
// //            .then((response) => response.json())
// //            .then((responseData) => {
// //              this._onValueChange(STORAGE_KEY, responseData.id_token),
// //              AlertIOS.alert(
// //                "Signup Success!",
// //                "Click the button to get a Chuck Norris quote!"
// //              )
// //            })
// //            .done();
// //         }
// //     }
// //     render(){
// //         return(
// //             <View></View>
// //         );
// //     }
// // }




// import React from 'react';
// import axios from 'axios';
// import {View, StyleSheet, Text} from 'react-native';
// export default class PersonList extends React.Component {
//   state = {
//     name: '',
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name
//     };

//     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
//       <View></View>
//     )
//   }
// }




//To Make HTTP API call in React Native using Axios https://aboutreact.com
import React, { useState } from 'react';
//import React in our code.
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
//import all the components we are going to use.
import axios from 'axios';

const ApiScreen = () => {

//       const postDataUsingSimplePostCall = () => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts', {
//         firstName: 'Yatin',
//         userId: 12,
//       })
//       .then(function(response) {
//         // handle success
//         alert(JSON.stringify(response.data));
//       })
//       .catch(function(error) {
//         // handle error
//         alert(error.message);
//       });
//   };
const [data, setData] = useState([]);
const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      ).then(res => {setData(response)})
      //alert(JSON.stringify("data"));
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };

  
  return (
    <View style={styles.MainContainer}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        Example of Axios Networking in React Native
      </Text>
      {/*Running GET Request*/}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity> */}

       <TouchableOpacity
        style={styles.button}
        onPress={getDataUsingAsyncAwaitGetCall}>
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity>

     {/* <TouchableOpacity
        style={styles.button}
        onPress={postDataUsingSimplePostCall}>
        <Text>Post Data Using POST</Text>
      </TouchableOpacity>

       {/*<TouchableOpacity
        style={styles.button}
        onPress={multipleRequestsInSingleCall}>
        <Text>Multiple Concurrent Requests In Single Call</Text>
      </TouchableOpacity> */}

      <Text style={{ textAlign: 'center', marginTop: 18 }}>
        www.aboutreact.com
      </Text>
       <FlatList
 data={data}
 keyExtractor={({ id }, index) => id}
 renderItem={({ item }) => (
   <View style={styles.apiContainer}>
   <Text style={styles.apiText}>{item.name}</Text>
   <Text style={styles.apiText}>{item.username}</Text>
   <Text style={styles.apiText}>{item.email}</Text></View>
 )}
 />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default ApiScreen;