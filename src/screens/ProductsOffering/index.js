import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Add} from 'iconsax-react-native';
import {BlogList} from '../../../data';
import { ItemProductsOffering } from '../../components';
import { fontType, colors } from '../../theme';
const ProductsOffering = () => {
return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.title}>Products Offering</Text>
        <Add color={colors.black()} variant="Linear" size={30} />
    </View>
<ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal:27, gap:10, paddingVertical:15}}>
        {BlogList.map((item, index) => (
        <ItemProductsOffering item={item} key={index} />
        ))}
        </View>
    </ScrollView>
    </View>
);
};
export default ProductsOffering;
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.darkModeBlue(),
},
header: {
    paddingHorizontal: 27,
    gap: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
},
title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    letterSpacing: -0.3,
},
});