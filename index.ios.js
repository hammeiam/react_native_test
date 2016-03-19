/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class ReactNativeTest extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: null
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    fetch(REQUEST_URL)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          movies: resJson.movies
        })
      })
      .done()
  }

  render() {
    if(!this.state.movies){
      return this.renderLoadingView()
    }

    let movie = MOCKED_MOVIES_DATA[0]
    return this.renderMovie(movie)
  }

  renderLoadingView(){
    return (
      <View style={styles.container}>
        <Text>
          Loading Movies...
        </Text>
      </View>
    )
  }

  renderMovie(movie){
    return (
      <View style={styles.container}>
        <Image 
          source={{ uri: movie.posters.thumbnail }}
          style={styles.thumbnail} 
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);
