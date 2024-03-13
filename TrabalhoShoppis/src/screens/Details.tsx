import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { ProductDTO } from "../types/Products";
import { MaterialIcons } from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";


const Details = ({ route }: any) => {
    const product: ProductDTO = route.params
    const { addProduct } = useContext(CartContext)
    console.log(product)
    return (
        <View style={styles.cardContainer}>
            <Image
                resizeMode="cover"
                style={styles.image}
                source={{ uri: product.images[0] }}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>$ {product.price}</Text>
                <Text style={styles.priceTitle}>Adicionar ao carrinho</Text>
                <TouchableOpacity onPress={() => addProduct(product) } style={styles.addCart}>
                    <MaterialIcons name="add" size={40} color="#4169E1" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Details;

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
        marginTop:10,
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 60
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
    priceTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10
    },
    description: {
        color:'#252525',
        padding: 10,
        fontWeight: '500',
    },
    price: {
        fontSize:15,
        textAlign:'center',
        paddingBottom:15,
        fontWeight: '600',
        color: '#4CAF50',
    },
    addCart: {
        alignSelf: "center"
    }
});
