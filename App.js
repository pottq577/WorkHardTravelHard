import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "./colors.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity underlayColor="red" activeOpacity={0.5}>
          <Text style={styles.btnText}>Travel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
/**
 * TouchableOpacity
 * 아래로 누르면 래핑된 View의 opacity가 감소하여 흐리게 표시됩니다.
 *
 * TouchableHighlight
 * 아래로 누르면 래핑된 View의 background를 표시합니다.
 *
 * TouchableWithoutFeedback
 * 합당한 이유가 없는 한 사용하지 마십시오.
 * Press에 반응하는 모든 요소는 만졌을 때 시각적 피드백이 있어야 합니다.
 *
 * Pressable
 * Pressable은 정의된 자식에 대한 다양한 Press 상호 작용 단계를 감지할 수 있는 핵심 구성 요소 래퍼입니다.
 * 가장 최신 버전
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 35,
    fontWeight: "600",
    color: "white",
  },
});
