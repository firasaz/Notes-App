import { Text, View, ScrollView, TextInput, Image, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { Link } from "expo-router";
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
  const handleSearchChange = (e) => {
    let filteredNotes = notes.filter(note => note.title.includes(e))
    filteredNotes.length > 0 ? setNotes(filteredNotes) : setNotes(notesList)
  }
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
        paddingLeft: 14,
        paddingRight: 14,
      }}
      contentContainerStyle={{
        display: 'flex',
        height: '100%',
        paddingBottom: 30,
        paddingRight: 10
      }}
    >
      {/* Page Header */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBlockColor: '#000000',
          borderStyle: 'solid',
          padding: 0,
          marginBottom: 10,
        }}
      >
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
        <View
          style={{ borderRadius: 4, padding: 8, backgroundColor: '#F4F4F4' }}
        >
          <Image
            source={require('@/assets/images/filter/Icon/filter.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>
      </View>

      {/* Notes List Table */}
      <View className='flex flex-col gap-3'>

        {/* <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ color: '#828282', marginBottom: 8 }}>
            Title
          </Text>
          <Text style={{ color: '#828282', marginBottom: 8 }}>
            Date
          </Text>
          <Text style={{ color: '#828282', marginBottom: 8 }}>
            Options
          </Text>
        </View> */}
        {(notes && notes.length > 0) ? notes.map(note => (
          <View
            key={note.id}
            className='flex flex-row justify-between'
          >
            <Text style={{ fontWeight: '500' }}>
              {note.title}
            </Text>
            <Text className='border rounded border-lightGray-md bg-lightGray-sm p-1 text-xs'
            // style={{
            //   borderWidth: 1,
            //   borderRadius: 4,
            //   borderColor: '#E0E0E0',
            //   backgroundColor: '#F7F7F7',
            //   // marginTop: 4,
            //   padding: 3,
            //   fontSize: 12 }}
            >
              {note.date}
            </Text>
            {/* <TouchableHighlight>
              <View>
                <Text>test</Text>
              </View>
            </TouchableHighlight> */}
            <Image source={require('@/assets/images/options.png')} />
          </View>
        )) : <Text>No notes were found...</Text>}
      </View>
      <TouchableHighlight className="border border-gray-400 rounded p-3 bg-blue-300 mt-5" underlayColor='#000'>
        <View>
          <Link href={'example-docs'} className="text-center">go to docs</Link>
        </View>
      </TouchableHighlight>

      {/* Page Footer */}
      <View
        style={{
          alignItems: 'flex-end',
          alignSelf: 'flex-end',
          marginTop: 'auto',
          padding: 10,
          backgroundColor: '#F4F4F4',
          borderRadius: 100,
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </View>
    </ScrollView>
  );
}
