import React,{ FC }  from 'react';
import { Input } from "react-native-elements";
import { StyleProp, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { IconNode } from "react-native-elements/dist/icons/Icon";
import { COLORS } from '../../../constants/colors';

type Props={
    inputContainerStyle?:StyleProp<ViewStyle>,
    leftIcon?: IconNode;
    placeholder?:string;
    onChange?:(text:string)=>void;
} & TextInputProps;

export const TextBox: FC<Props> = ({inputContainerStyle,leftIcon,onChange,...props}) => {
    const customStyle={...styles.defaultInputStyle};
    return (
        <Input
           {...props}
            leftIcon={leftIcon}
            onChangeText={onChange && onChange}
            inputStyle={styles.inputStyle}
            inputContainerStyle={inputContainerStyle || customStyle}
        />
    )
}

const styles = StyleSheet.create({
    defaultInputStyle: {
        borderWidth: 1,
        borderColor: COLORS.defaultColor,
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom:0,
        outline: 'none',
    },
    inputStyle: {
        color:COLORS.defaultColor
    }
});
