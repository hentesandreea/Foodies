import{View, Text, TouchableOpacity,Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import KSpacer from "./components/KSpacer";


function MainScreen(){
    const navigator = useNavigation()
    return(
        <View style={{backgroundColor:'#F2EE9D', flex:1, alignItems:'center'}}>
            <KSpacer h ={50}/>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/3726/3726221.png'}}
                   style={{ width:'40%',height:'24%'}}/>
            <KSpacer h={40}/>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Choose your Christmasy dish </Text>
            <KSpacer h={20}/>
            <View style={{backgroundColor:'#F25959', borderRadius:20, width:'90%',height:'50%',flexDirection:'row', gap: 22,alignItems:'center',justifyContent:'center',padding:10}}>
                <TouchableOpacity onPress={()=> navigator.navigate('Meals')}
                                  style={{padding:10,alignItems:'center',justifyContent:'center',borderRadius:20, height:'60%',backgroundColor:'#80E86F',width:'40%'}}>
                    <Image source ={{uri:'https://i.pinimg.com/originals/6c/33/af/6c33afe04bf6a4f509bbc2568637c676.png'}}
                           style={{height:'20%',width:'40%'}}/>
                    <KSpacer h={10}/>
                    <Text style={{fontSize:20,fontWeight:600}}>Meals</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigator.navigate('Desserts')}
                                  style={{alignItems:'center',justifyContent:'center',borderRadius:20, height:'60%',backgroundColor:'#FFF851',width:'40%'}}>
                    <Image source ={{uri:'https://static.thenounproject.com/png/2406033-200.png'}}
                           style={{height:'24%',width:'40%'}}/>
                    <KSpacer h={10}/>
                    <Text style={{fontSize:20,fontWeight:600}}>Desserts</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default MainScreen;