import React from 'react'


//  import 'react-circular-progressbar/dist/styles.css';

import { View, Text, Button } from 'react-native'

const Product = ({ navigation }) => {

    const { name } = navigation.state.params


    const percentage = 66;

    return (
        <View>
            {/* <CircularProgressbar  />; */}

            {/* <Progress.Circle size={30} indeterminate={true} /> */}
            <Text>Product  {name}</Text>
            <Button
                onPress={() => { navigation.navigate('About', { name: name }) }}
                title='Click me' />
            {/* <AnimatedCircularProgress
                size={120}
                width={15}
                fill={100}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                /> */}

        </View>
    )
}

export default Product
