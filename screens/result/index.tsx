import React, { FC } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { Item } from "./components/Item";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { COLORS } from "../../constants/colors";

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Result'>;
}

export const ResultScreen: FC<Props> = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'Result'>>();
    const { data, searchData } = route.params || { data: null, searchData: null };
    return (
        <>
            <View style={styles.tableRow}>
                <Text style={styles.headerCell}>Name</Text>
                <Text style={styles.headerCell}>Rank</Text>
                <Text style={styles.headerCell}>Bananas</Text>
                <Text style={styles.headerCell}>isSearchedUser</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => <Item eachUserData={item} index={index} isSearchedUser={searchData?.uid === item.uid}   isEvenRow={index % 2 === 0} />}
                keyExtractor={(item) => item.uid}
            />
        </>

    );
}

const styles = StyleSheet.create({
    tableRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: COLORS.black,
        padding: 10,
    },
    headerCell: {
        fontWeight: "bold",
        flex: 1,
        textAlign: "center"
    },
});
