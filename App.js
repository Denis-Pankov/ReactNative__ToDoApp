import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Form from "./components/Form";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить фрукты", key: '1' },
    { text: "Помыть машину", key: '2' },
    { text: "Купить овощи", key: '3' },
    { text: "Купить орехи", key: '4' },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <View>
      <Header />
      <Form  addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
          <ListItem el={ item } deleteHandler = { deleteHandler }/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
