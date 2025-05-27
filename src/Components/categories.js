import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const renderCategory = ({item}) => (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item.category_id)}
      style={[
        styles.categoryItem,
        selectedCategory === item.category_id && styles.selectedCategory,
      ]}>
      <Image
        source={categoryImages[item.category_name]}
        style={styles.cat_img}
        resizeMode="cover"
      />
      <Text style={styles.categoryName}>{item.category_name}</Text>
    </TouchableOpacity>
  );

  // Map category_id -> category_name for easy lookup
  const categoryIdToName = {};
  categories.forEach(cat => {
    categoryIdToName[cat.category_id] = cat.category_name;
  });

  const renderProduct = ({item}) => {
    const categoryName = categoryIdToName[item.category_id];
    const imageSource = categoryImages[categoryName]; // fallback if needed

    return (
      <View style={styles.productCard}>
        <View style={styles.imagePlaceholder}>
          <Image
            source={imageSource}
            style={{width: '100%', height: 100}}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.price}>Material: {item.material || 'N/A'}</Text>
      </View>
    );
  };

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category_id === selectedCategory)
    : products;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Categories */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        numColumns={4}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        scrollEnabled={false}
      />

      {/* Products */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item, index) =>
          item?.product_id?.toString() || index.toString()
        }
        numColumns={2}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '25%',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    padding: 5,
  },
  selectedCategory: {
    backgroundColor: '#d1e7dd',
    borderRadius: 8,
  },
  cat_img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  categoryName: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  productCard: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#F0EBED',
    borderRadius: 10,
  },
  imagePlaceholder: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginBottom: 5,
    overflow: 'hidden',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#000',
  },
});
