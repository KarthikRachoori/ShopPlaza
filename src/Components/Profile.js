import React from 'react';
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

export default function Profile({navigation}) {
  const menuItems = [
    {
      id: 1,
      title: 'My orders',
      icon: 'receipt',
      onPress: () => navigation.navigate('Orders'),
    },
    {
      id: 2,
      title: 'Shipping address',
      icon: 'location-on',
      onPress: () => Alert.alert('Coming Soon', 'Shipping address feature coming soon!'),
    },
    {
      id: 3,
      title: 'Payment methods',
      icon: 'credit-card',
      onPress: () => Alert.alert('Coming Soon', 'Payment methods feature coming soon!'),
    },
    {
      id: 4,
      title: 'Wishlist',
      icon: 'favorite',
      onPress: () => navigation.navigate('Favorites'),
    },
    {
      id: 5,
      title: 'My reviews',
      icon: 'star',
      onPress: () => Alert.alert('Coming Soon', 'Reviews feature coming soon!'),
    },
    {
      id: 6,
      title: 'Settings',
      icon: 'settings',
      onPress: () => Alert.alert('Coming Soon', 'Settings feature coming soon!'),
    },
  ];

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => navigation.navigate('Login'),
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Common Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My profile</Text>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => Alert.alert('Settings', 'Settings coming soon!')}>
          <Icon name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* User Info */}
        <View style={styles.userInfo}>
          <Image
            source={require('../../assets/1.png')}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>Sample User</Text>
          <Text style={styles.userEmail}>sample.user@gmail.com</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={item.onPress}>
              <View style={styles.menuItemLeft}>
                <Icon name={item.icon} size={24} color="#666" />
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Icon name="logout" size={24} color="#FF6B6B" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
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
  userInfo: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 15,
  },
  logoutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#FF6B6B',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B6B',
    marginLeft: 10,
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
