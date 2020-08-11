

import React, {useEffect, useState} from 'react';
import { SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar, } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';




const Item = ({title}) => (
  
  <View style={styles.item}>
  <View style={styles.TextArea}>
    <Text style={styles.nametitle}>{title.tradeOwnerName}</Text>
    <Text style={styles.nametitle}>{title.orderNumber}</Text>
    <Text style={styles.nametitle}>{ <FlatList
          data={title.skuDetails}
         // keyExtractor={({ orderId }, index) => orderId}
          renderItem={({ item }) => (
            <Text>{item.skuType}</Text>
          )}
        />}</Text>
    </View>
  </View>
);


const FlatlistFormat = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    RNFetchBlob.fetch(
      'POST',
      'http://test.vnmobilloyaltyclub.com/VN-0.1/APIs/fetchAllTradeownerPlacedOrders.php',
      {
        // Authorization : "Bearer access-token",
        // otherHeader : "foo",
        //'Content-Type': 'multipart/form-data',
      },
      [
        
        {name: 'sess-token', data: '$2y$10$25gfJJGTdYK0TbUffrwOce8Va9a2LChC0mb4yOAtRXVI0Aw2Z0lyy'},
        {name: 'endDate', data: ''},
        {name: 'startDate', data: ''},
        {name: 'userId', data: '5684'},
        {name: 'currentDate', data: '2020-08-10'},
       
      ],
    )
    .then((response) => response.json())
    .then((json) => setData(json.allOrders))
      .catch((err) => {
        console.error('error uploading images: ', err.message);
      });
  }, 
  []);;




  const renderItem = ({item}) => <Item title={item} />;
 
return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.orderId}
      />
    </SafeAreaView>
);

};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#d0d4d8',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  TextArea: {
    marginLeft: "20%",
    justifyContent: 'center',
    textAlign: "left"
  },
  nametitle: {
    fontSize: 20,
    
  },
  idtitle: {
    fontSize: 15,
  }
});


export default FlatlistFormat;