import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Slot } from 'expo-router'

const SingleNoteLayout = () => {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  )
}

export default SingleNoteLayout