import { Text, View, ScrollView, TextInput, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import { Link, useRouter } from "expo-router";
import { useState } from "react";

export default function Index() {
  const notesList = [
    {
      id: 1,
      title: 'Write blog post for demo day 1',
      date: '15/06/2024'
    },
    {
      id: 2,
      title: 'Write blog post for demo day 2',
      date: '15/06/2024'
    },
    {
      id: 3,
      title: 'Write blog post for demo day 3',
      date: '15/06/2024'
    },
    {
      id: 4,
      title: 'Write blog post for demo day 4',
      date: '15/06/2024'
    },
  ]
  const [notes, setNotes] = useState(notesList)
  const router = useRouter()
  const handleSearchChange = (userInput) => {
    let filteredNotes = notesList.filter(note => note.title.includes(userInput)===true)
    setNotes(filteredNotes)
  }
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          height: '100%',
          margin: 15,
          paddingBottom: 30,
          paddingRight: 10
        }}
      >
        {/* Page Header */}
        <View className='my-4 flex flex-row justify-between items-center'>
          <TextInput
            placeholder="Search notes..."
            style={{
              // marginLeft: 10,
              padding: 4,
              paddingLeft: 8,
              width: '87%',
              borderWidth: 1,
              borderColor: '#E0E0E0',
              borderStyle: 'solid',
              borderRadius: 8,
            }}
            onChangeText={handleSearchChange}
          />
          <View style={{ borderRadius: 4, padding: 8, backgroundColor: '#F4F4F4' }}>
            <FontAwesomeIcon icon={faFilter} className='text-white' />
          </View>
        </View>
        {/* Notes List Table */}
        <View className='flex flex-col flex-1 gap-3'>
          {(notes && notes.length > 0) ?
            notes.map(note => (
              <TouchableOpacity
                onPress={() => router.push(`/notes/${note.id}`)}
                key={note.id}
                className='flex flex-row justify-between'
              >
                <Text style={{ fontWeight: '500' }}>
                  {note.title}
                </Text>
                <Text className='border rounded border-lightGray-md bg-lightGray-sm p-1 text-xs'>
                  {note.date}
                </Text>
                <FontAwesomeIcon icon={faEllipsis} />
              </TouchableOpacity>
            )) : <Text>No notes were found...</Text>
          }
        </View>
        {/* Page Footer */}
        <View className='flex flex-row justify-between items-center'>
          <TouchableHighlight className="border border-gray-400 rounded p-2 bg-blue-300" underlayColor='#000'>
            <View>
              <Link href={'example-docs'} className="text-center">go to docs</Link>
            </View>
          </TouchableHighlight>
          <View className='p-2 rounded-full bg-lightGray-md'>
            <FontAwesomeIcon icon={faPlus} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
