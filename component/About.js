import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image'

import {
    Button,
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const About = ({ navigation }) => {

    const { name } = navigation.state.params

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchCats();
    }, [])


    const fetchCats = () => {
        // this.setState({ refreshing: true });
        fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
            .then(res => res.json())
            .then(resJson => {
                setData(resJson);
            }).catch(e => console.log(e));
    }



    const onItemclick = () => {
        alert('hjhjh')
    }



    return (
        <View>
            
          


            <SafeAreaView>

                <FlatList
                    numColumns={2}
                    data={data}

                    renderItem={itemData =>

                        <TouchableOpacity style={styles.container}
                            onPress={onItemclick}>
                            <Text>id {itemData.item.id} </Text>
                            <FastImage style={styles.image} source={{ uri: itemData.item.url }} />
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id.toString()}



                />
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 190,
        width: 190,
        margin: 10,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 6,
    },
    image: {
        height: '100%',
        borderRadius: 4,
    },
});


export default About
