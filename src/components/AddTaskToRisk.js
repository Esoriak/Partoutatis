import React, {useState} from 'react';
import { View, TouchableOpacity} from 'react-native';
import TxtInput from './TxtInput';
import Typography from './Typography';
import theme from '../../theme';

const AddTaskToRisk = ({setTasks,}) => {

  // Todo Disabled le button Add when taskName is empty

  const [taskName, setTaskName] = useState("")

    return (
      <View
        style={{
          width: '90%',
          marginTop: 15,
          backgroundColor: theme.colors.white,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
          borderRadius: 35,
        }}>
        <TxtInput
          placeHolder="KestaAFer"
          inputChange={taskNameInput=> setTaskName(taskNameInput)}
          inputValue={taskName}
          autoCaps={"words"}
        />
        <View  
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          >
        <TouchableOpacity
        style={{
          height: 30,
          width: 100,
          marginRight: 15,
          justifyContent: 'center',
          borderRadius: 20,
          borderColor: taskName.length < 1 ? theme.colors.lightGrey :theme.colors.green,
          borderStyle: 'solid',
          borderWidth: 1,
          backgroundColor: taskName.length < 1 ? theme.colors.lightGrey :theme.colors.green,
          marginTop: 10,
        }}
        onPress={() => {
          taskName.length > 1 && setTasks({NameOfTask: taskName}) & setTaskName("")
        }}
        >
        <Typography
          color={'white'}
          weight={"regular"}
          accessibilityLabel="ajout d'une tâche"
          align={'center'}
          size={'petit'}
        >
          Ajouter
        </Typography>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 30,
          width: 100,
          marginRight: 15,
          justifyContent: 'center',
          borderRadius: 20,
          borderColor: theme.colors.red,
          borderStyle: 'solid',
          borderWidth: 1,
          backgroundColor: theme.colors.red,
          marginTop: 10,
        }}
        onPress={() => {
          setTaskName("")
        }}
        >
        <Typography
          color={'white'}
          weight={"regular"}
          accessibilityLabel="annulation d'une tâche"
          align={'center'}
          size={'petit'}
        >
          Annuler
        </Typography>
      </TouchableOpacity>
      </View>
      </View>
    )
  }


export default AddTaskToRisk;