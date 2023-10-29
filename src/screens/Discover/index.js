import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {BlogList} from '../../../data';
import {ItemSmall} from '../../components'; 
import {SearchNormal1} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';

const data = [
{id: 1, label: 'pakaian lari'},
{id: 2, label: 'sepatu lari'},
{id: 3, label: 'kacamata pelari'},
{id: 4, label: 'tips and trik'},
{id: 5, label: 'Gaya Hidup'},
{id: 6, label: 'Food'},
];

const ItemRecent = ({item}) => {
return (
    <View style={recent.button}>
    <Text style={recent.label}>{item.label}</Text>
    </View>
);
};
const FlatListRecent = () => {
const renderItem = ({item}) => {
    return <ItemRecent item={item} />;
};
return (
    <FlatList
    data={data}
    keyExtractor={item => item.id}
    renderItem={item => renderItem({...item})}
    ItemSeparatorComponent={() => <View style={{width: 10}} />}
    contentContainerStyle={{paddingHorizontal: 27, paddingVertical: 10}}
    horizontal
    showsHorizontalScrollIndicator={false}
    />
);
};
const Discover = () => {
const recentBlog = BlogList.slice(5);
return (
    <View style={styles.container}>
    <View style={styles.header}>
        <View style={styles.bar}>
        <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
        <Text style={styles.placeholder}>Search</Text>
        </View>
    </View>
    <View>
        <Text style={recent.text}>Recent Search</Text>
        <FlatListRecent />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listCard}>
        {recentBlog.map((item, index) => (
            <ItemSmall item={item} key={index} />
        ))}
        </View>
    </ScrollView>
    </View>
);
};
export default Discover;
const styles = StyleSheet.create({
listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
},
container: {
    flex: 1,
    backgroundColor: colors.darkModeBlue(),
},
header: {
    paddingHorizontal: 27,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
},
bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.black(0.05),
    borderRadius: 25,
    flex: 1,
},
placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(0.5),
    lineHeight: 18,
},
});
const recent = StyleSheet.create({
button: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor: colors.black(0.15),
    borderWidth: 5,
    backgroundColor: colors.black(0.03),
},
label: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.white(0.65),
},
text: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
    paddingVertical: 5,
    paddingHorizontal: 27,
},
});
