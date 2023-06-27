import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import globalStyles from '../assets/globalStyles';
import Icon from 'react-native-vector-icons/Feather';

const Input = ({secureTextEntry, ...rest}) => {
  const [visible, setVisibility] = React.useState(false);

  return (
    <View style={globalStyles.input}>
      {!secureTextEntry && (
        <TextInput {...rest} style={globalStyles.inputComponent} />
      )}
      {secureTextEntry && (
        <TextInput
          {...rest}
          secureTextEntry={!visible}
          style={globalStyles.inputComponent}
        />
      )}
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setVisibility(!visible)}>
          {visible && <Icon name="eye-off" size={20} />}
          {!visible && <Icon name="eye" size={20} />}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
