import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {Notification, Receipt21, Clock, Message} from 'iconsax-react-native';
import {fontType, colors} from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>StoreRun</Text>
        <Notification color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.blue()}}>
              Popular
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Latest</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Product</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Food</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Health</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Lifestyle</Text>
          </View>
        </ScrollView>
      </View>
      <ListBlog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkModeBlue(),
  },
  header: {
    paddingHorizontal: 27,
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
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
});
const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 35}}
              source={{
                uri: 'https://media.istockphoto.com/id/1350560575/id/foto/sepasang-sepatu-lari-biru-dengan-latar-belakang-putih-terisolasi.jpg?s=612x612&w=0&k=20&c=SLCTqAZS-dzguW9QdAa25KgmhibS5c3az07k9VpPTwU=',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    sepatu Lari terbaru
                  </Text>
                  <Text style={itemHorizontal.cardText}>Oct 15, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.black()}
                      variant="Linear"
                      size={30}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 35}}
              source={{
                uri: 'https://media.istockphoto.com/id/186246798/photo/running-equipment-man-on-grey-background.webp?b=1&s=170667a&w=0&k=20&c=CNJn8MRx13hk2-4wfQYCqT4DIJUqnJfeP9TNGotloog=',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Satu Set Pakaian Lari Pria
                  </Text>
                  <Text style={itemHorizontal.cardText}>Oct 15, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.black()}
                      variant="Linear"
                      size={30}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 35}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7IZb2-kYLQSDkinnKDp7gPMNUfP0p_HPVow&usqp=CAU',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Satu Set Pakaian Lari Wanita
                  </Text>
                  <Text style={itemHorizontal.cardText}>Oct 15, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.black()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 35}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3g3x9EHa3gI6u4o46ezM9IWSMK0D9QmyHw&usqp=CAU',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Sepatu Nike Keluaran Terbaru
                  </Text>
                  <Text style={itemHorizontal.cardText}>Oct 15, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.black()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 35}}
              source={{
                uri: 'https://media.istockphoto.com/id/1297835614/id/foto/pelari-muda-menyesuaikan-earphone-sebelum-berlari-di-pedesaan.jpg?s=612x612&w=0&k=20&c=-r9od0VTCDHy7I-Q2QYii4dYFnmI8o0_3ozBNfbcp8k=',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Kacamata Pelari</Text>
                  <Text style={itemHorizontal.cardText}>Oct 15, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.black()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://media.istockphoto.com/id/1064191168/id/foto/melihat-dari-atas-komposisi-dengan-peralatan-gym-terisolasi-di-atas-putih.jpg?s=612x612&w=0&k=20&c=jzCXOKNj5TjqIbEVUy7Sllx2iaX3hQ4zDe4YWMF3wn4=',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Product</Text>
                  <Text style={itemVertical.cardTitle}>
                    Pakaian Lari Terbaru
                  </Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Oct 16, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>90</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://media.istockphoto.com/id/956501428/photo/sport-shoes-on-isolated-white-background.webp?b=1&s=170667a&w=0&k=20&c=zQ0Dsy90DcfSH5YR3yZFR26FgkBx2z_LxIhx3M-JxKg=',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Product</Text>
                  <Text style={itemVertical.cardTitle}>
                    Sepatu Keluaran Terbaru
                  </Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Oct 15, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>90</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://media.istockphoto.com/id/590278008/photo/young-girl-eating-a-oatmeal-with-berries.webp?b=1&s=170667a&w=0&k=20&c=Eb-08qU-5PgO307OPASUwpg6S5LK8B5OXlMpOg6uKRI=',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Food</Text>
                  <Text style={itemVertical.cardTitle}>
                    Makanan sehat untuk pelari
                  </Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Oct 15, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>90</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ6JPGmGy4lRb-uz8o1XPizWyyGObWqim9rA&usqp=CAU',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Food</Text>
                  <Text style={itemVertical.cardTitle}>
                    {' '}
                    Makanan Sehat Untuk Pelari{' '}
                  </Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Oct 15, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>90</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://media.istockphoto.com/id/1269951365/photo/happy-man-listening-to-phone-music-with-headphones-relaxing-sleeping-or-meditating-on-green.webp?b=1&s=170667a&w=0&k=20&c=41mAWTgvdhZQDwUjfX9anw-d7vqEIfpVScPN0rO2Jcw=',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Health</Text>
                  <Text style={itemVertical.cardTitle}>
                    Tidur Yang cukup untuk pelari
                  </Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Oct 15, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>90</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://media.istockphoto.com/id/1372307016/photo/shot-of-a-young-woman-taking-a-break-from-working-out-to-drink-water.webp?b=1&s=170667a&w=0&k=20&c=NwiwYVQflwsSr8fAS7PRRi1den8h8FjInBzwT_FvbMY=',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Health</Text>
                  <Text style={itemVertical.cardTitle}>
                    Minum Air Putih Yang cukup untuk pelari
                  </Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Oct 15, 2023</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>90</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMFU0OxM4k9WYyG_SHXsNXgFN-p6vOL5Jrg&usqp=CAU',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Product</Text>
                  <Text style={itemVertical.cardTitle}>Peralatan Pelari</Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.black(0.6)} />
                <Text style={itemVertical.cardText}>Oct 15, 2023</Text>
                <Message size={10} variant="Linear" color={colors.black(0.6)} />
                <Text style={itemVertical.cardText}>90</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 180,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    color: colors.black(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
