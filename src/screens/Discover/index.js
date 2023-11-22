import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import {BlogList} from '../../../data';
import {ItemSmall} from '../../components';
import {SearchNormal1} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';

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
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 160);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 160],
    outputRange: [0, -160],
    extrapolate: 'clamp',
  });
  const recentBlog = BlogList.slice(5);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.black(0.5)} variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
        </View>
      </View>
      <Animated.View
        style={[recent.container, {transform: [{translateY: recentY}]}]}>
        <Text style={recent.text}>Recent Search</Text>
        <FlatListRecent />
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 142}}>
        <View style={styles.listCard}>
          {recentBlog.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};
export default Discover;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 27,
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
  container:{
    position: 'absolute',
    backgroundColor: colors.darkModeBlue(),
    zIndex: 999,
    top: 52,
    left: 0,
    right: 0,
    elevation: 1000,
  },
});
