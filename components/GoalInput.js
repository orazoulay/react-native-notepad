import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    const addGoalHendler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputConteiner}>
                <TextInput
                    placeholder="Course  Goal" style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View Style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View Style={styles.button}>
                        <Button title='ADD' onPress={addGoalHendler} />
                    </View>

                </View>
            </View>
        </Modal>);
};
const styles = StyleSheet.create({
    inputConteiner: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    input: {
        width: '80%', borderColor: 'black', borderWidth: 1, padding: 10, marginBottom: 10, color: 'black'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;