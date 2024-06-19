import { FIRESTORE_DB } from "@/FirebaseConfig"
import firestore from '@react-native-firebase/firestore'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native"

function note() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)
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


  const handleSubmit = () => {
    addDoc(collection(FIRESTORE_DB, 'notes_list'), { text: input, title: 'Note 3' })
    .then(() => console.log('Note successfully added'))
    .catch(() => console.log('an error occured...'))
  }
  const fetchNotes = async () => {
    const data = await getDocs(collection(FIRESTORE_DB, 'notes_list'))
    if(data) {
      data.forEach(doc => {
        if(doc?.data()?.id == noteId.note){
          setInput(doc?.data()?.text)
          setLoading(false)
          return
        }
        setLoading(false)
      })
    } else {
      console.log('something went wrong...')
    }
  }
  useEffect(() => {
    fetchNotes()
  }, [])
  return (
    // <TextInput multiline={true} className='border mx-3 h-auto' />
    <View className={!loading ? 'bg-yellow-100 h-full flex justify-between pb-7' : 'bg-yellow-100 h-full flex justify-center items-center'}>
      {!loading ? 
        <TextInput multiline={true} textAlignVertical="top" placeholder="Type your notes..." className='h-full text-xl' defaultValue={input} onChangeText={(text) => {setInput(text)}} />
        : <ActivityIndicator size={'large'} color='#808080' />
      }
      {!loading ?? <TouchableOpacity onPress={handleSubmit} style={{ borderWidth: 1 }}>
        <Text>Save</Text>
      </TouchableOpacity>}
    </View>
  )
}

export default note