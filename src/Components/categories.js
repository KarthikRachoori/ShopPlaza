import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { MdHome } from "react-icons/md";

import Icon from 'react-native-vector-icons/MaterialIcons';
import HeartIcon from './../../assets/Heart.svg';
import CartIcon from  './../../assets/Cart.svg';



const {width} = Dimensions.get('window');

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    fetch('http://127.0.0.1:8082/Categories')
      .then(res => res.json())
      .then(setCategories)
      .catch(console.error);

    fetch('http://127.0.0.1:8082/Product')
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const categoryImages = {
    Men: require('../../assets/Men.jpg'),
    Women: require('../../assets/Women.jpg'),
    Kids: require('../../assets/Kids.jpg'),
    Toddler: require('../../assets/Toddler.jpg'),
  };

  // Product data using actual assets
  const mockProducts = [
    {
      id: 1,
      name: 'Jacket',
      color: 'Cloud Brust',
      size: 'L',
      price: 30.9,
      image: require('../../assets/Men.jpg'),
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Shirt',
      color: 'Light Green',
      size: 'L',
      price: 19.9,
      image: require('../../assets/Men.jpg'),
      isFavorite: true,
    },
    {
      id: 3,
      name: 'Sweatshirt',
      color: 'Malt',
      size: 'L',
      price: 49.9,
      image: require('../../assets/Men.jpg'),
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Shirt',
      color: 'Blue',
      size: 'L',
      price: 29.99,
      image: require('../../assets/Men.jpg'),
      isFavorite: false,
    },
    {
      id: 5,
      name: 'Dress',
      color: 'Pink',
      size: 'M',
      price: 45.0,
      image: require('../../assets/Women.jpg'),
      isFavorite: true,
    },
    {
      id: 6,
      name: 'Blouse',
      color: 'White',
      size: 'S',
      price: 25.0,
      image: require('../../assets/Women.jpg'),
      isFavorite: false,
    },
    {
      id: 7,
      name: 'Kids Shirt',
      color: 'Red',
      size: 'XS',
      price: 15.0,
      image: require('../../assets/Kids.jpg'),
      isFavorite: true,
    },
    {
      id: 8,
      name: 'Toddler Outfit',
      color: 'Yellow',
      size: 'XXS',
      price: 12.0,
      image: require('../../assets/Toddler.jpg'),
      isFavorite: false,
    },
  ];

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  // Filter products based on selected category
  const getFilteredProducts = () => {
    if (!selectedCategory) {
      return mockProducts;
    }
    
    const categoryName = categories.find(cat => cat.category_id === selectedCategory)?.category_name;
    if (!categoryName) return mockProducts;
    
    // Filter products based on category
    return mockProducts.filter(product => {
      switch (categoryName) {
        case 'Men':
          return ['Jacket', 'Shirt', 'Sweatshirt'].includes(product.name);
        case 'Women':
          return ['Dress', 'Blouse'].includes(product.name);
        case 'Kids':
          return ['Kids Shirt'].includes(product.name);
        case 'Toddler':
          return ['Toddler Outfit'].includes(product.name);
        default:
          return true;
      }
    });
  };

  const filteredProducts = getFilteredProducts();

  const renderCategory = ({item}) => (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item.category_id)}
      style={styles.categoryItem}>
      <View style={[
        styles.categoryImageContainer,
        selectedCategory === item.category_id && styles.selectedCategoryBorder
      ]}>
        <Image
          source={categoryImages[item.category_name]}
          style={styles.categoryImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.categoryName}>{item.category_name}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({item}) => {
    const isFavorite = favorites.has(item.id);

    return (
      <View style={styles.productCard}>
        <View style={styles.productImageContainer}>
          <Image
            source={item.image}
            style={styles.productImage}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => toggleFavorite(item.id)}>
            <HeartIcon width={20} height={20} style={{color: isFavorite ? '#FF6B6B' : '#fffff'}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton}>
            <CartIcon width={16} height={16} />
          </TouchableOpacity>
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productColor}>Color: {item.color}</Text>
          <Text style={styles.productSize}>Size: {item.size}</Text>
          <Text style={styles.productPrice}>$ {item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/2.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => navigation.navigate('Favorites')}>
            <HeartIcon width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => navigation.navigate('Profile')}>
            <Icon name="person-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item, index) => item.id?.toString() || index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="tune" size={20} color="#000" />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortText}>Price: lowest to high</Text>
          <Icon name="swap-vert" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Products */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productsList}
        showsVerticalScrollIndicator={false}
      />
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
  },
  logoContainer: {
    flex: 1,
  },
  logoImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  headerIcon: {
    padding: 5,
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
  },
  filterText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 5,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
  },
  sortText: {
    fontSize: 14,
    color: '#000',
    marginRight: 5,
  },
  categoriesContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
  },
  categoriesList: {
    paddingHorizontal: 20,
    gap: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'transparent',
    overflow: 'hidden',
    marginBottom: 8,
  },
  selectedCategoryBorder: {
    borderColor: '#FF6B6B',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  filterText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  productsList: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImageContainer: {
    position: 'relative',
    height: 180,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  productColor: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  productSize: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
