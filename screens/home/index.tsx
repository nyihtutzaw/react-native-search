import React, { FC, useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { Controller, useForm } from 'react-hook-form';
import { TextBox } from '../../components/components/TextBox';
import { Icon } from 'react-native-elements';
import { Button } from '../../components/components/Button';
import { useModal } from '../../hooks/useModal';
import { COLORS } from '../../constants/colors';
import { Modal } from '../../components/components/Modal';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { useDataSearch } from './useDataSearch';

type Form = {
    name: string;
}


type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export const HomeScreen: FC<Props> = ({ navigation }) => {

    const { control, formState, handleSubmit, reset } = useForm<Form>();
    const { isModalVisible, showModal, hideModal } = useModal();


    const { isDirty } = formState;

    const { searchUserData, isLoading, data, searchData } = useDataSearch();

    const onSubmit = useCallback(async (values: Form) => {
        const result = await searchUserData(values);
        if (!result) {
            showModal();
            reset();
            return;
        }
        reset();
    }, []);

    useEffect(() => {
        if (data && searchData) {
            navigation.navigate('Result', {
                data: data,
                searchData: searchData
            })
        }
    }, [data, searchData])

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.textBoxContainerStyle}>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextBox
                                placeholder='Type your name'
                                {...field}
                                leftIcon={<Icon name="search" type="font-awesome" color={'#fff'} />}
                            />
                        )}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Search"
                        onPress={handleSubmit(onSubmit)}
                        disabled={!isDirty}
                        loading={isLoading}
                    />
                </View>
            </View>
            <Modal isVisible={isModalVisible} hideModal={hideModal} title="This user name does not exist!" description="Please specify an existing user name!" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textBoxContainerStyle: {
        flex: 1,
        padding: 0,
        alignItems: 'flex-end',
        outline: 'none',
    },
    buttonContainer: {
        marginLeft: 10,
        paddingBottom: 20,
    },
});
