import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ResultShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.name}>{result.name} </Text>
      <Text style={styles.phone}>{result.phone} </Text>
      <View style={styles.icon}>
      {result.is_closed ? (
        <FontAwesome name="close" size={30} color="black" />
      ) : (
        <MaterialIcons name="delivery-dining" size={30} color="black" />
      )}
      </View>

      {result.image_url ? (
        <Image style={styles.image} source={{ uri: result.image_url }} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    margin: 10,
    borderRadius: 10,
  },
  name: {
    alignSelf: "center",
    fontSize: 25,
    marginVertical: 10
  },
  phone: {
    alignSelf: "center",
    fontSize: 20
  },
  icon:{
    alignSelf: 'center'
  }
});
