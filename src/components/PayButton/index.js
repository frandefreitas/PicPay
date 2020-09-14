import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, Label } from './styles'
import { TouchableWithoutFeedback } from 'react-native';

export default function PayButton({onPress, focused}){
   return(
      <TouchableWithoutFeedback onPress={onPress}>
         {/* O LinearGradient inserido no Button faz com que o Button precisa ser passado duas propriedades */}
         <Button 
            colors={
               focused
                  ? ['#fff', '#ccc'] 
                  : ['#00fc6c', '#00ac4a']
            } 
            start={[1, 0.2]}
         >
            <MaterialIcons 
               name="attach-money" 
               size={30} 
               color={ focused ? '#000' : '#fff' } 
            />
            <Label focused={focused}>Pagar</Label>
         </Button>
      </TouchableWithoutFeedback>
   );
}