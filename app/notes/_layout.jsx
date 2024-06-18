import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Slot } from 'expo-router'

const SingleNoteLayout = () => {
  return (
    <View>
      <Slot />
    </View>
  )
}

export default SingleNoteLayout