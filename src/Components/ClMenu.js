import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';

const ClMenu = () => {
  return (
    <View
    style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:"#009571",
        borderRadius:20,
    }}
    >
    <TouchableOpacity>
    <MaterialCommunityIcons name="frequently-asked-questions" size={34} color="white" />
    </TouchableOpacity>
    <TouchableOpacity>
    <MaterialIcons name="person-search" size={34} color="white" />
    </TouchableOpacity>
    <TouchableOpacity>
    <FontAwesome5 name="user-circle" size={34} color="white" />
    </TouchableOpacity>
    <TouchableOpacity>
    <AntDesign name="logout" size={34} color="white" />
    </TouchableOpacity>
    </View>
  )
}


export default ClMenu;