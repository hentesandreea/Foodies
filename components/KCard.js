import {Text, View, Image} from "react-native";
import KSpacer from "./KSpacer";

const KCard = ({title, ingredients, color, time, image}) => {
    return (
        <View style={{backgroundColor: color, borderRadius: 10, flexWrap: 'wrap', width: '90%',shadowOpacity:0.2}}>
            <Image source={{uri: image}}
                   style={{width: '100%', height: 170, borderRadius: 10}}/>
            <KSpacer h={10}/>
            <View style={{  padding: 15}}>
                <Text style={{fontSize: 18, fontWeight: 600, alignSelf: 'flex-start'}}>{title}</Text>
                 <KSpacer h={5}/>  
                <Text style={{fontSize: 16, fontWeight: 500, alignSelf: 'flex-start'}}>{time}</Text>
                <KSpacer h={5}/>
                <Text style={{fontSize: 16, fontWeight: 500, alignSelf: 'flex-start'}}>{ingredients}</Text>
            </View>

        </View>
    )
}
export default KCard;
