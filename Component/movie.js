import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import axios from "axios";
import { createAppContainer, createStackNavigator } from "react-navigation";

type Props = {};
export default class Movie extends Component<Props> {
  state = {
    movies: []
  };
  componentDidMount() {
    axios
      .get("http://www.omdbapi.com/?i=tt3896198&apikey=e85afbf2")
      .then(response =>
        this.setState({
          movies: response.data
        })
      );
  }

  render() {
    // console.log(this.state); //check for data
    return (
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              // flex: 1,
              flexDirection: "row"
              // borderColor: "red",
              // borderWidth: 3
              // // height: 100
            }}
          >
            <View>
              <Image
                source={{ uri: this.state.movies.Poster }}
                style={styles.imgshow}
              />
            </View>
            <View style={styles.titlestyle}>
              <View style={[styles.rowstyle, { paddingTop: 10 }]}>
                <Text style={styles.txtcolor}>Title: </Text>
                <Text>{this.state.movies.Title}</Text>
              </View>
              <View style={styles.rowstyle}>
                <Text style={styles.txtcolor}>Year: </Text>
                <Text>{this.state.movies.Year}</Text>
                <Text style={{ marginLeft: 20, color: "blue" }}>Rated: </Text>
                <Text>{this.state.movies.Rated}</Text>
              </View>
              <View style={styles.rowstyle}>
                <Text style={styles.txtcolor}>Director: </Text>
                <Text>{this.state.movies.Director}</Text>
              </View>
              <View style={styles.rowstyle}>
                <Text style={styles.txtcolor}>Release: </Text>
                <Text>{this.state.movies.Released}</Text>
              </View>
              <View style={styles.rowstyle}>
                <Text style={styles.txtcolor}>Runtime: </Text>
                <Text>{this.state.movies.Runtime}</Text>
              </View>
              <View style={styles.rowstyle}>
                <Text style={styles.txtcolor}>Genre: </Text>
                <Text style={{ fontSize: 12 }}>{this.state.movies.Genre}</Text>
              </View>
            </View>
          </View>
          <View style={{ padding: 5 }}>
            <View style={styles.rowstyle}>
              <Text style={styles.txtcolor}>Language: </Text>
              <Text>{this.state.movies.Language}</Text>
              <Text style={{ marginLeft: 20, color: "blue" }}>Country: </Text>
              <Text>{this.state.movies.Country}</Text>
            </View>
            <View style={styles.rowstyle}>
              <Text style={{ color: "blue" }}>imdbRating: </Text>
              <Text>{this.state.movies.imdbRating}</Text>
              <Text style={{ marginLeft: 20, color: "blue" }}>imdbVotes: </Text>
              <Text>{this.state.movies.imdbVotes}</Text>
            </View>

            <View>
              <Text style={[styles.txtcolor, { marginTop: 10 }]}>Cast: </Text>
              <Text>{this.state.movies.Actors}</Text>
            </View>
            <View>
              <Text style={[styles.txtcolor, { marginTop: 10 }]}>Plot: </Text>
              <Text>{this.state.movies.Plot}</Text>
            </View>
            <View>
              <Text style={[styles.txtcolor, { marginTop: 10 }]}>Awards: </Text>
              <Text>{this.state.movies.Awards}</Text>
            </View>

            <View>
              <Text style={[styles.txtcolor, { marginTop: 10 }]}>Writer: </Text>
              <Text>{this.state.movies.Writer}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9dce5",
    marginTop: 10
  },
  imgshow: {
    width: 140,
    height: 120,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },
  titlestyle: {
    marginLeft: 10
  },
  rowstyle: {
    flexDirection: "row"
  },
  txtcolor: {
    color: "blue"
  }
});
