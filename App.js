import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCouresGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0){
      return;
    }
    setCouresGoals(currentGoals => [...currentGoals,
    { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCouresGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen} >
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCanc  el={cancelGoalAdditionalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem
          id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />
        } />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }


});
