import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ICartItem } from "../types/Products";
import { MaterialIcons } from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";


interface Props {
    item: ICartItem;
}

const CartCard = ({ item }: Props) => {
    const { removeProduct } = useContext(CartContext);
    
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.quantity}>x{item.quantity}</Text>
            <Image
                resizeMode="stretch"
                style={styles.image}
                source={{ uri: item.product.thumbnail }}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.product.title}</Text>
                <Text style={styles.description}>{item.product.description}</Text>
                <Text style={styles.price}>$ {item.product.price}</Text>
                <TouchableOpacity onPress={() => removeProduct(item.product.id) } style={styles.removeBtn}>
                    <MaterialIcons name="delete" size={40} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartCard;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 3,
        margin:12,
        alignItems: "center",
        padding: 12,
        flex: 1,
        shadowOpacity: 10,
        shadowColor:'#252525',
        shadowOffset:{
            height: 0,
            width:0,
        },
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 12,
    },
    title: {
        marginTop: 15,
        color: '#252525',
        display: 'flex',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 15,
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
    quantity: {
        alignSelf: "flex-end",
        paddingBottom: 10,
    },
    removeBtn: {
        marginTop: 20,
        alignSelf: "center"
    }
});

