//json-server --watch db.json -d 2000 -p 3001
//json-server --host 0.0.0.0 --watch db.json -d 2000 -p 3001
import React, { Component } from "react";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import Dishdetail from "./DishdetailComponent";
import Reservation from "./ReservationComponent";
import Favorites from "./FavoriteComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Login from "./LoginComponent";
import {
  View,
  Platform,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  NetInfo,
  ToastAndroid,
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
//import { baseUrl } from "../shared/baseUrl";
import {
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});

const LoginNavigator = createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      title: "Login",
      headerTintColor: "#fff",
      headerLeft: (
        <Icon
          name='menu'
          size={24}
          iconStyle={{ color: "white" }}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const MenuNavigator = createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (
          <Icon
            name='menu'
            size={24}
            color='black'
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }),
    },
    Dishdetail: { screen: Dishdetail },
  },
  {
    initialRouteName: "Menu",
  }
);
// const MenuNavigatorApp = createAppContainer(MenuNavigator);

const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name='menu'
          size={24}
          color='black'
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    }),
  },
});

// const HomeNavigatorApp = createAppContainer(HomeNavigator);

const ContactNavigator = createStackNavigator(
  {
    Contact: {
      screen: Contact,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (
          <Icon
            name='menu'
            size={24}
            color='black'
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }),
    },
  },
  {
    initialRouteName: "Contact",
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (
          <Icon
            name='menu'
            size={24}
            color='black'
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }),
    },
  },
  {
    initialRouteName: "About",
  }
);
const FavoritesNavigator = createStackNavigator(
  {
    Favorites: { screen: Favorites },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
      headerLeft: (
        <Icon
          name='menu'
          size={24}
          iconStyle={{ color: "white" }}
          onPress={() => navigation.navigate("DrawerToggle")}
        />
      ),
    }),
  }
);

const ReservationNavigator = createStackNavigator(
  {
    Reservation: {
      screen: Reservation,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (
          <Icon
            name='menu'
            size={24}
            color='black'
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }),
    },
  },
  {
    initialRouteName: "Reservation",
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./images/logo.png")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        title: "Login",
        drawerLabel: "Login",
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='sign-in'
            type='font-awesome'
            size={24}
            iconStyle={{ color: tintColor }}
          />
        ),
      },
    },

    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home",
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
          <Icon name='home' type='font-awesome' size={24} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: "About",
        drawerLabel: "About Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='info-circle'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: "Menu",
        drawerLabel: "Menu",
        drawerIcon: ({ tintColor }) => (
          <Icon name='list' type='font-awesome' size={24} color={tintColor} />
        ),
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: "Contact",
        drawerLabel: "Contact Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='address-card'
            type='font-awesome'
            size={22}
            color={tintColor}
          />
        ),
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        title: "My Favorites",
        drawerLabel: "My Favorites",
        drawerIcon: ({ tintColor }) => (
          <Icon name='heart' type='font-awesome' size={24} color={tintColor} />
        ),
      },
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        title: "Reserve Table",
        drawerLabel: "Reserve Table",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='cutlery'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    drawerBackgroundColor: "#D1C4E9",
    contentComponent: CustomDrawerContentComponent,
  }
);

const MainNavigatorApp = createAppContainer(MainNavigator);

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();

    NetInfo.getConnectionInfo().then((connectionInfo) => {
      ToastAndroid.show(
        "Initial Network Connectivity Type: " +
          connectionInfo.type +
          ", effectiveType: " +
          connectionInfo.effectiveType,
        ToastAndroid.LONG
      );
    });

    NetInfo.addEventListener("connectionChange", this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  handleConnectivityChange = (connectionInfo) => {
    switch (connectionInfo.type) {
      case "none":
        ToastAndroid.show("You are now offline!", ToastAndroid.LONG);
        break;
      case "wifi":
        ToastAndroid.show("You are now connected to WiFi!", ToastAndroid.LONG);
        break;
      case "cellular":
        ToastAndroid.show(
          "You are now connected to Cellular!",
          ToastAndroid.LONG
        );
        break;
      case "unknown":
        ToastAndroid.show(
          "You now have unknown connection!",
          ToastAndroid.LONG
        );
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 0,
          //Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <MainNavigatorApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#512DA8",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
