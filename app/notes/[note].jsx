import { useLocalSearchParams } from "expo-router"
import { View, Text, TextInput, FlatList } from "react-native"

function note({ id }) {
  const noteId = useLocalSearchParams()
  const notes = [
    {
      id: 1,
      text: 'note 1'
    },
    {
      id: 2,
      text: 'note 2'
    },
  ]
  return (
    <View className='bg-white h-full divide-y divide-dotted'>
      {notes.map(note => (
        <TextInput key={note.id} className='p-2' defaultValue={note.text} />
      ))}
    </View>
  )
}

export default note