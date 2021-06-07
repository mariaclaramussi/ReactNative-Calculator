import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

export default props => {
  const stylesButton = [styles.button];

  if (props.double) {
    stylesButton.push(styles.buttonDouble);
  }
  if (props.triple) {
    stylesButton.push(styles.buttonTriple);
  }
  if (props.operation) {
    stylesButton.push(styles.operationButton);
  }
  if (props.equalsOp) {
    stylesButton.push(styles.equalsOperationButton);
  }

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};
