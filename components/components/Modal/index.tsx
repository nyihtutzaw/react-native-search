import { View,Text,StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import ReactNativeModal from 'react-native-modal';
import { Button } from "../Button";
import { FC } from "react";

type Props={
    title:string;
    description?:string;
    isVisible:boolean;
    hideModal:()=>void;
}

export const Modal:FC<Props> = ({title,description,isVisible,hideModal}) => {
    return (
        <ReactNativeModal isVisible={isVisible} deviceWidth={100}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTextStyle}>{title}</Text>
                {description && <Text style={styles.modalTextStyle}>{description}</Text> }
                <Button title="Close" onPress={hideModal} />
            </View>
        </ReactNativeModal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: COLORS.secondaryBgColor,
        paddingVertical: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20,
    },
    modalTextStyle: {
        fontSize: 22,
        color: COLORS.danger,
    }
});
