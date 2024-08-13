import { useState } from "react";
import { StyleSheet, View, FlatList, Button  } from "react-native";
import { StatusBar } from "expo-status-bar";
import Goalitem from "./components/goalitem";
import Goalinput from "./components/goalinput";

export default function App() {
  const [goalsdata, setgoalsdata] = useState("");
  const [data, setData] = useState([]);
  const [modalisvisible, setmodalisvisible] = useState(false);

  const starthandlergoal = () => {
    setmodalisvisible(true);
  };

  const closehandlergoal = () => {
    setmodalisvisible(false);
  };

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appcontainer}>
        <Button
          onPress={() => {
            starthandlergoal();
          }}
          title="Add New Goal"
          color="#5e0acc"
        />
        <Goalinput
          finish={setmodalisvisible}
          close={closehandlergoal}
          setgoalsdata={setgoalsdata}
          setData={setData}
          goalsdata={goalsdata}
          visible={modalisvisible}
        />

        <View style={styles.listcontainer}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(dataitem) => {
              return (
                <Goalitem
                  data={data}
                  id={dataitem.item.id}
                  setData={setData}
                  dataitem={dataitem}
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    paddingTop: 50,
    paddingHorizontal: 30,
    flex: 1,
  },

  listcontainer: {
    marginTop: 30,
    flex: 14,
  },
});
