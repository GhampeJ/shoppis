import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductDTO } from "../types/Products";

interface Props {
    product: ProductDTO;
}

const ItemCard = ({ product }: Props) => {
    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Details", product)} style={styles.container}>
            <View style={styles.row}>
                <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={{ uri: product.thumbnail }}
                />
                <View>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>$ {product.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
    margin: 12,
    borderRadius: 10,
    shadowOpacity: 10,
    shadowColor:'#252525',
    shadowOffset:{
      height: 0,
      width:0,
    }
    },

    row:{
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        
    },
    title: {
        marginTop: 15,
        color: '#252525',
        display: 'flex',
        textAlign: 'center',
        fontWeight: '900',
    },
    description: {
        color:'#252525',
        padding: 10,
        fontWeight: '500',
    },
    price: {
        textAlign:'center',
        paddingBottom:15,
        fontWeight: '600',
        color: '#4CAF50',
    },
});
