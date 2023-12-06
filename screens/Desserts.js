import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import KSpacer from "../components/KSpacer";
import KCard from "../components/KCard";

const deCard = [{
    title:'Gingerbread (4 pers)',
    time:'Time: 1h',
    ingredients:' Ingredients: 225g plain flour, salt, 2tbs bicarbonate, ground ginger, 75g butter, 100g soft brown sugar, 100g golden syrup. ',
    color:'#FFF851FF',
    image:'https://www.allrecipes.com/thmb/hRwRpwDL_BHXRaiGPtQMpaP8tO4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/230238-gingerbread-men-cookies-ddmfs-4x3-1-d291bf57fa9244d98238eac7df53f13d.jpg',
},
    {
        title: 'Pudding (3 pers)',
        time:'Time: 20min',
        ingredients: 'Ingredients: 2 cups of milk, 2 large eggs yolks, 2 tbs vanilla, 1/ 3 cup of sugar, 1/8 tbs salt.',
        color: '#FFF851FF',
        image:'data:image/jpeg;base64,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',

    },
]

function Desserts() {
    const navigator = useNavigation()
    return (
        <View style={{flex:1,backgroundColor:'#F2EE9D'}}>
            <ScrollView contentContainerStyle={{flexGrow:1,alignItems:'center'}}>
                <KSpacer h={40}/>
                <View style={{flexDirection:'row', justifyContent:'space-evenly',width:'100%'}}>
                    <TouchableOpacity onPress={() => navigator.navigate('MainScreen')}
                                      style={{alignItems:'center'}}>
                        <Text style={{fontSize:20, fontWeight:400}}>{'<'} Back</Text>
                    </TouchableOpacity>

                    <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center'}}>Desserts recommendations</Text>
                </View>

                <KSpacer h ={10}/>
                {
                    deCard.map(card =>
                        <>
                            <KCard title={card.title} color={card.color} time={card.time} ingredients={card.ingredients} image={card.image}/>
                            <KSpacer h={16}/>
                        </>
                    )
                }

            </ScrollView>
        </View>

    );
}

export default Desserts;