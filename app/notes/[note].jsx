import { useLocalSearchParams } from "expo-router"
import { View, Text } from "react-native"

function note({ id }) {
  const noteId = useLocalSearchParams()
  return (
    <View>
        <Text>hii, you are viewing note {noteId.note}</Text>
    </View>
  )
}

export default note