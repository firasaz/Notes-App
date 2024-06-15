import { Text, View, ScrollView, TextInput, Button, Image } from "react-native";
import { Link, useNavigation } from "expo-router";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

export default function Index() {
  const navigation = useNavigation()

  const notesList = [
    {
      title: 'Write blog post for demo day',
      date: '15/06/2024'
    },
    {
      title: 'Write blog post for demo day',
      date: '15/06/2024'
    },
    {
      title: 'Write blog post for demo day',
      date: '15/06/2024'
    },
    {
      title: 'Write blog post for demo day',
      date: '15/06/2024'
    },
  ]
  const handleSearchChange = (e) => {
    console.log(e.target.value)
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
        {/* <Image
          style={{
            position: 'absolute',
            width: 20
          }}
          source={require('@/assets/images/search.png')}
        /> */}
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
          onChange={handleSearchChange}
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
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // marginLeft: 10,
            // marginRight: 10,
            // paddingLeft: 10,
            // paddingRight: 10,
            // borderWidth: 1,
            borderColor: '#E0E0E0',
            borderRadius: 3
          }}
        >
          {/* Column 1 */}
          <View
            style={{
              display: 'flex',
              gap: 20
            }}
          >
            <Text style={{
              color: '#828282',
              marginBottom: 8 
            }}>Title</Text>
            {/* <View style={{flex: 1, maxHeight: 1, backgroundColor: '#828282', marginBottom: 8}} /> */}

            {notesList.map(note => (
              <Text key={note.id} style={{
                fontWeight: '500'
              }}
              >
                {note.title}
              </Text>
              // <View style={{flex: 1, maxHeight: 1, backgroundColor: '#828282', marginBottom: 8}} />
            ))}
            {/* <Text style={{
              fontWeight: '500'
            }}
            >
              Write blog post for demo day
            </Text>
            <Text style={{
              fontWeight: '500'
            }}
            >
              Write blog post for demo day
            </Text>
            <Text style={{
              fontWeight: '500'
            }}
            >
              Write blog post for demo day
            </Text>
            <Text style={{
              fontWeight: '500'
            }}
            >
              Write blog post for demo day
            </Text> */}
          </View>

          {/* Column 2 */}
          <View
            style={{
              display: 'flex',
              gap: 10
            }}
          >
            <Text style={{
              color: '#828282',
              marginBottom: 8 
            }}>Date</Text>
            {/* <View style={{flex: 1, maxHeight: 1, backgroundColor: '#828282', marginBottom: 8}} /> */}

            {notesList.map(note => {
              return (
                <Text key={note.id} style={{
                  borderWidth: 1,
                  borderRadius: 4,
                  borderColor: '#E0E0E0',
                  backgroundColor: '#F7F7F7',
                  marginTop: 4,
                  padding: 3,
                  fontSize: 12
                }}
                >
                  {note.date}
                </Text>
              )
            })}
            {/* <Text style={{
              borderWidth: 1,
              borderRadius: 4,
              borderColor: '#E0E0E0',
              backgroundColor: '#F7F7F7',
              marginTop: 4,
              padding: 3,
              fontSize: 12
            }}>Jun 15</Text>

            <Text style={{
              borderWidth: 1,
              borderRadius: 4,
              borderColor: '#E0E0E0',
              backgroundColor: '#F7F7F7',
              marginTop: 4,
              padding: 3,
              fontSize: 12
            }}>Jun 15</Text>
            <Text style={{
              borderWidth: 1,
              borderRadius: 4,
              borderColor: '#E0E0E0',
              backgroundColor: '#F7F7F7',
              marginTop: 4,
              padding: 3,
              fontSize: 12
            }}>Jun 15</Text> */}
            {/* <Text style={{
              borderWidth: 1,
              borderRadius: 4,
              borderColor: '#E0E0E0',
              backgroundColor: '#F7F7F7',
              marginTop: 4,
              padding: 3,
              fontSize: 12
            }}>Jun 15</Text> */}
          </View>

          {/* Column 3 */}
          <View
            style={{
              display: 'flex',
              gap: 10
            }}
          >
            <Text style={{
              color: '#828282',
              marginBottom: 8 
            }}>Options</Text>
            {/* <View style={{flex: 1, maxHeight: 1, backgroundColor: '#828282', marginBottom: 8}} /> */}
            
            <Image
              source={require('@/assets/images/options.png')}
            />
            <Image
              source={require('@/assets/images/options.png')}
            />
            <Image
              source={require('@/assets/images/options.png')}
            />
            <Image
              source={require('@/assets/images/options.png')}
            />
          </View>
        </View>
      </View>

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
