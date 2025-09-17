import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Categories from './src/Components/categories';
import Cart from './src/Components/cart';
import Orders from './src/Components/Orders';
import Profile from './src/Components/Profile';
import Favorites from './src/Components/Favorites';
import Forget_password from './src/Components/Forget_password';
import CreateAccount from './src/Components/CreateAccount';
import Login from './src/Components/Login';

import { FaCartArrowDown } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa6";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Main Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = <MdHome />;
          } else if (route.name === 'Cart') {
            iconName = <FaCartArrowDown />;
          } else if (route.name === 'Categories') {
            iconName = <AiOutlineBars />;
          } else if (route.name === 'Orders') {
            iconName = <FaBookmark/>;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          paddingVertical: 10,
          paddingHorizontal: 20,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Categories} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Orders" component={Orders} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forget_password"
          component={Forget_password}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React, {useState, useEffect} from 'react';
// import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';

// export default function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://127.0.0.1:8082/Customer')
//       .then(res => res.json())
//       .then(json => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setError('An error occurred while fetching data');
//         setLoading(false);
//       });
//   }, []);

//   const renderItem = ({item}) => (
//     <View style={styles.row}>
//       <Text style={styles.cell}>{item.customer_id}</Text>
//       <Text style={styles.cell}>{item.first_name}</Text>
//       <Text style={styles.cell}>{item.last_name}</Text>
//       <Text style={styles.cell}>{item.phone_number}</Text>
//       <Text style={styles.cell}>
//         {new Date(item.DOB).toISOString().split('T')[0]}
//       </Text>
//     </View>
//   );

//   if (loading) return <Text style={styles.message}>Loading...</Text>;
//   if (error) return <Text style={styles.message}>{error}</Text>;

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Customer Data</Text>
//       <View style={styles.tableHeader}>
//         <Text style={styles.headerCell}>ID</Text>
//         <Text style={styles.headerCell}>First</Text>
//         <Text style={styles.headerCell}>Last</Text>
//         <Text style={styles.headerCell}>Phone</Text>
//         <Text style={styles.headerCell}>DOB</Text>
//       </View>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item, index) =>
//           item?.customer_id != null
//             ? item.customer_id.toString()
//             : index.toString()
//         }
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingBottom: 5,
//     marginBottom: 5,
//   },
//   headerCell: {
//     flex: 1,
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
//   row: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     paddingVertical: 5,
//   },
//   cell: {
//     flex: 1,
//     fontSize: 12,
//   },
//   message: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 50,
//   },
// });
