import React, { FC } from 'react';
import { ButtonProps, StyleSheet } from 'react-native';
import { Button as ElementButton } from 'react-native-elements';

type Props = {
    title: string;
    width?: number;
    height?: number;
    loading?:boolean;
} & ButtonProps;

export const Button: FC<Props> = ({ title, width, height,loading=false,...otherProps }) => {
    const dynamicStyle = {
        ...styles.buttonStyle,
        width: width || styles.buttonStyle.width,
        height: height || styles.buttonStyle.height,
    };
    return (
        <ElementButton
            testID={'button'}
            title={title}
            loading={loading}
            {...otherProps}
            buttonStyle={dynamicStyle}
        />
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        width: 80,
        height: 50,
    },
});
