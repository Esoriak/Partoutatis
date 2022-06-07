import React, { useState, useEffect } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native';
import Container from '../components/Container';
import AddTaskToRisk from '../components/AddTaskToRisk';
import Typography from '../components/Typography';
import theme from '../../theme';

const TodoRisk = ({ navigation }) => {

  const [task, setTasks] = useState([])
  const [listTasks, setListTasks] = useState([])


  const deleteTask = (toto) => {
    let newArray = listTasks.filter((item, index) => {
      if (index !== toto) {
        return item;
      }
    })
    setListTasks(newArray)
  }

  useEffect(() => {
    setListTasks(listTasks.concat(task))
  }, [task])


  return (
    <Container>
      <Typography
        style={{
          marginTop: 10
        }}
        size={'label'}
        color={'darkGrey'}
        weight={"light"}
        accessibilityLabel="ajout de tâches"
        align={'left'}
      >
        Rappel toi :
      </Typography>
      <AddTaskToRisk setTasks={setTasks} />
      <Typography
        style={{
          marginTop: 40
        }}
        size={'light'}
        color={'darkGrey'}
        weight={"light"}
        accessibilityLabel="liste des tâches"
        align={'left'}
      >
        Choisis ton combat !
      </Typography>
      <FlatList
        data={listTasks}
        horizontal={false}
        keyExtractor={((...task) => task)}
        renderItem={(...task) => {
          return (
            <View
              key={task[0].index}
              style={{
                backgroundColor: theme.colors.purple,
                height: 50,
                borderRadius: 10,
                width: 270,
                margin: 10,
                alignItems: 'center',
                alignSelf: 'center'
              }}
            >
              <Typography

                size={'label'}
                color={'darkGrey'}
                weight={"light"}
                accessibilityLabel="tâche à faire"
                align={'center'}
              >
                {task[0].item.NameOfTask}
              </Typography>
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 20,
                  justifyContent: 'center',
                  borderRadius: 20,
                  borderColor: theme.colors.red,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  backgroundColor: theme.colors.red,
                  marginTop: 20,
                }}
                onPress={() => {
                  deleteTask(task[0].index)
                }}
              >
                <Typography
                  color={'white'}
                  weight={"regular"}
                  accessibilityLabel="suppression d'une tâche"
                  align={'center'}
                  size={'petit'}
                >
                  X
                </Typography>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </Container>
  )
}


export default TodoRisk;