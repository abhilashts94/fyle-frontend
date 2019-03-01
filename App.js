import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Movie from "./Component/movie";

// export default class App extends Component<props> {
class HomeScreen extends Component {
  state = {
    moviename: []
  };

  movetoHandler = () => {
    if (
      this.state.moviename == "Guardians of the Galaxy" ||
      this.state.moviename == "2017"
    ) {
      // console.log("login");
      this.props.navigation.navigate("Moviesearch");
    } else {
      console.log("error");
      alert("enter correct movie name");
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Search for movies</Text>
        <TextInput
          placeholder="enter movie name"
          onChangeText={moviename => this.setState({ moviename })}
          style={styles.inptxt}
        />

        <Text>{this.state.moviename}</Text>
        <TouchableOpacity onPress={this.movetoHandler} style={styles.touchbtn}>
          <Text style={styles.texxt}>search</Text>
        </TouchableOpacity>
        <View style={{ padding: 20 }}>
          <Text>Plz enter </Text>
          <Text style={{ color: "green" }}>Guardians of the Galaxy</Text>
          <Text>or</Text>
          <Text style={{ color: "green" }}>2017 </Text>
          <Text> to search for movies</Text>
        </View>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Moviesearch: {
      screen: Movie
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    fontSize: 30
  },
  inptxt: {
    borderColor: "lightblue",
    borderRadius: 2,
    borderWidth: 1,
    width: "50%"
  },
  touchbtn: {
    borderColor: "blue",
    borderWidth: 1,
    backgroundColor: "lightgrey",
    width: "40%",
    justifyContent: "center",
    alignItems: "center"
  },

  texxt: {
    fontSize: 20
  }
});

// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet
// } from "react-native";

// type Props = {};
// export default class App extends Component<props> {
//   state = {
//     moviename: []
//   };

//   movetoHandler = () => {
//     if (
//       this.state.moviename == "Guardians of the Galaxy" ||
//       this.state.moviename == "2017"
//     ) {
//       console.log("login");
//     } else {
//       console.log("error");
//     }
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.txt}>Search for movies</Text>
//         <TextInput
//           placeholder="enter movie name"
//           onChangeText={moviename => this.setState({ moviename })}
//           style={styles.inptxt}
//         />

//         <Text>{this.state.moviename}</Text>
//         <TouchableOpacity
//           onPress={this.movetoHandler()}
//           style={styles.touchbtn}
//         >
//           <Text style={styles.texxt}>search</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   txt: {
//     fontSize: 30
//   },
//   inptxt: {
//     borderColor: "lightblue",
//     borderRadius: 2,
//     borderWidth: 1,
//     width: "50%"
//   },
//   touchbtn: {
//     borderColor: "blue",
//     borderWidth: 1,
//     backgroundColor: "lightgrey",
//     width: "40%",
//     justifyContent: "center",
//     alignItems: "center"
//   },

//   texxt: {
//     fontSize: 20
//   }
// });
