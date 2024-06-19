import { useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { View, Text, TextInput, FlatList } from "react-native"

function note({ id }) {
  const [input, setInput] = useState('')
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
    // <TextInput multiline={true} className='border mx-3 h-auto' />
    <View className='h-full divide-y divide-dotted'>
      <TextInput multiline={true} textAlignVertical="top" placeholder="Type your notes..." className='h-full mx-1 text-xl' defaultValue={input} onChange={(text)=>setInput({text})} />
    </View>
  )
}

export default note