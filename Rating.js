import React, {useState} from 'react';
import { SafeAreaView, TouchableOpacity, View, Image} from "react-native";

export default function Rating () {
    const [defaultRating, setdefaultRating] = useState(2)
    const [maxRating] = useState([1,2,3,4])

    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'

    const CustomRatingBar = () => {
     return (
      <View style={{ flexDirection: 'row',
                         marginTop: 20,
            }}>
                {
            maxRating.map((item) => {
                return (
                <TouchableOpacity
                 key={item}
                onPress={() => setdefaultRating(item)}
                 >
                <Image style = {{width: 40,
                height: 40,
                resizeMode: 'cover'}}
                source={
                item <= defaultRating ? 
                {uri: starImgFilled}
                : {uri: starImgCorner}
                            }
                    />
              </TouchableOpacity>
                 )
          })
            }
            </View>
        )
    }
    return (
        <SafeAreaView style={{flex: 1,
               padding: 30,
              justifyContent: 'center'}}>
            <CustomRatingBar/>
        </SafeAreaView>
    );
};