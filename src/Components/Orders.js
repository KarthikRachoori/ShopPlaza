import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CartIcon from '../../assets/Cart.svg';

export default function Orders({navigation}) {
  const [orders] = useState([
    {
      id: 1,
      orderNumber: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 89.97,
      items: [
        {
          id: 1,
          name: 'COCOBRANDY Men\'s Linen Shirt',
          price: 19.99,
          quantity: 2,
          image: require('../../assets/Men.jpg'),
        },
        {
          id: 2,
          name: 'Classic Denim Jacket',
          price: 30.9,
          quantity: 1,
          image: require('../../assets/Men.jpg'),
        },
      ],
    },
    {
      id: 2,
      orderNumber: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 45.99,
      items: [
        {
          id: 3,
          name: 'Women\'s Summer Dress',
          price: 45.99,
          quantity: 1,
          image: require('../../assets/Women.jpg'),
        },
      ],
    },
    {
      id: 3,
      orderNumber: 'ORD-003',
      date: '2024-01-05',
      status: 'Processing',
      total: 67.50,
      items: [
        {
          id: 4,
          name: 'Kids T-Shirt',
          price: 22.50,
          quantity: 3,
          image: require('../../assets/Kids.jpg'),
        },
      ],
    },
  ]);

  const getStatusColor = status => {
    switch (status) {
      case 'Delivered':
        return '#4CAF50';
      case 'Shipped':
        return '#2196F3';
      case 'Processing':
        return '#FF9800';
      default:
        return '#666';
    }
  };

  const renderOrderItem = item => (
    <View key={item.id} style={styles.orderItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>
          ${item.price.toFixed(2)} × {item.quantity}
        </Text>
      </View>
    </View>
  );

  const renderOrder = order => (
    <View key={order.id} style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <View>
          <Text style={styles.orderNumber}>{order.orderNumber}</Text>
          <Text style={styles.orderDate}>{order.date}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text
            style={[
              styles.statusText,
              {color: getStatusColor(order.status)},
            ]}>
            {order.status}
          </Text>
        </View>
      </View>

      <View style={styles.orderItems}>
        {order.items.map(renderOrderItem)}
      </View>

      <View style={styles.orderFooter}>
        <Text style={styles.orderTotal}>Total: ${order.total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Common Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Orders</Text>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.navigate('Favorites')}>
          <Icon name="favorite" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.ordersContainer}>
          {orders.map(renderOrder)}
        </View>
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
    padding: 5,
  },
  content: {
    flex: 1,
  },
  ordersContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  orderCard: {
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
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  statusContainer: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  orderItems: {
    marginBottom: 15,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 2,
  },
  itemPrice: {
    fontSize: 12,
    color: '#666',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 15,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  trackButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  trackButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  navText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    marginTop: 4,
  },
  navTextInactive: {
    fontSize: 12,
    fontWeight: '500',
    color: '#999',
    marginTop: 4,
  },
});
