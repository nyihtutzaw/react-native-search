import { FC } from "react";
import { UserData } from "../../../data/leaderboard";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../../constants/colors";

type Props = {
  eachUserData: UserData;
  isSearchedUser: boolean;
  index: number;
  isEvenRow: boolean;
};

export const Item: FC<Props> = ({
  eachUserData,
  index,
  isSearchedUser,
  isEvenRow,
}) => {
  const rowStyles = isEvenRow ? styles.evenRow : {}; 

  return (
    <View style={{ ...styles.tableRow, ...rowStyles }}>
      <Text
        style={{
          ...styles.cell,
          color: isSearchedUser ? COLORS.danger : COLORS.black,
        }}
      >
        {eachUserData.name}
      </Text>
      <Text style={styles.cell}>{index + 1}</Text>
      <Text style={styles.cell}>{eachUserData.bananas}</Text>
      <Text style={styles.cell}>{isSearchedUser ? "Yes" : "No"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: COLORS.black,
    padding: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  evenRow: {
    backgroundColor: COLORS.rowColor,
  },
});
