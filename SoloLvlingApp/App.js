import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, Button} from 'react-native';

var Strength = 0;
var Agility = 0;
var Intellegence = 0;
var Discipline = 0;
var Stamina = 0;
var Willpower = 0;

const addStats = () => {
  Strength += 1;
  Agility += 1;
  Intellegence += 1;
  Discipline += 1;
  Stamina += 1;
  Willpower += 1;
}

export default function App() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Solo Leveling App</Text>
      <StatusBar style="auto" />
      <View style={[styles.container_mini]}>
        <Text style={[styles.stats_window_text]}>Stats</Text>
        <FlatList data={[
          {key: "Strength: " + Strength},
          {key: "Agility: " + Agility},
          {key: "Intellegence: " + Intellegence},
          {key: "Discipline: " + Discipline},
          {key: "Stamina: " + Stamina},
          {key: "Willpower: " + Willpower},
        ]}
        renderItem={({item}) => <Text style={[styles.stats]}>{item.key}</Text>}>
        </FlatList>
        <Text style={[styles.quest_text]}>Quests</Text>
        <FlatList data={[
          {key: 'Run 20 minutes without breaks'},
          {key: 'Do Calithsthetics workout'},
          {key: 'Train Agility'},
        ]}
        renderItem={({item}) => <Text style={[styles.list_text]}>{item.key}</Text>}
        >
        </FlatList>
        <Button title="Add Stats" onPress={() => addStats()} color="#f2f2f2"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030212',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'top',
    color: '#fff',
    paddingTop: 50,
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
  },
  container_mini: {
    flex: 2,
    backgroundColor: "#151240",
    margin: 10,
  },

  stats_window_text: {
    color: "#fff",
    margin: 10,
    fontSize: 20,
    textAlign: 'center'
  },

  stats: {
    color: "#fff",
    margin: 10,

  },

  quest_text: {
    margin: 10,
    color: "#fff",
    fontSize: 20,
    textAlign: 'center',
  },

  list_text: {
    margin: 10,
    fontSize: 15,
    color: "#fff",
  },

});

//#030212