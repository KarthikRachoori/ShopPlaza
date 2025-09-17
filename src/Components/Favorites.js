import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Favorites({navigation}) {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'COCOBRANDY Men\'s Linen Shirt',
      price: 19.99,
      image: require('../../assets/Men.jpg'),
      color: 'Light Green',
      size: 'L',
    },
    {
      id: 2,
      name: 'Classic Denim Jacket',
      price: 30.9,
      image: require('../../assets/Men.jpg'),
      color: 'Blue',
      size: 'M',
    },
    {
      id: 3,
      name: 'Women\'s Summer Dress',
      price: 45.99,
      image: require('../../assets/Women.jpg'),
      color: 'Pink',
      size: 'S',
    },
    {
      id: 4,
      name: 'Kids T-Shirt',
      price: 22.50,
      image: require('../../assets/Kids.jpg'),
      color: 'Red',
      size: 'M',
    },
  ]);

  const removeFromFavorites = id => {
    Alert.alert(
      'Remove from Favorites',
      'Are you sure you want to remove this item from your favorites?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () =>
            setFavorites(items => items.filter(item => item.id !== id)),
        },
      ],
    );
  };

  const addToCart = item => {
    Alert.alert(
      'Add to Cart',
      `Add ${item.name} to your cart?`,
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Add to Cart',
          onPress: () => {
            Alert.alert('Success', 'Item added to cart!');
            navigation.navigate('Cart');
          },
        },
      ],
    );
  };

  const renderFavoriteItem = item => (
    <View key={item.id} style={styles.favoriteItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemInfo}>
          {item.color} • Size {item.size}
        </Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.itemActions}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addToCart(item)}>
            <Icon name="shopping-cart" size={16} color="#FFFFFF" />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeFromFavorites(item.id)}>
            <Icon name="delete" size={20} color="#FF6B6B" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Wishlist</Text>
        <View style={styles.headerIcon} />
      </View>

      <ScrollView style={styles.content}>
        {favorites.length > 0 ? (
          <View style={styles.favoritesContainer}>
            {favorites.map(renderFavoriteItem)}
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Icon name="favorite-border" size={80} color="#CCC" />
            <Text style={styles.emptyTitle}>No Favorites Yet</Text>
            <Text style={styles.emptySubtitle}>
              Start adding items to your wishlist!
            </Text>
            <TouchableOpacity
              style={styles.shopButton}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.shopButtonText}>Start Shopping</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerIcon: {
    width: 34,
  },
  content: {
    flex: 1,
  },
  favoritesContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  favoriteItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  itemInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 5,
  },
  removeButton: {
    padding: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    marginBottom: 10,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  shopButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  shopButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
