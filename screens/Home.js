import { useState } from 'react'
import { Text, View } from 'react-native'
import { Card, Button, Icon, Input } from 'react-native-elements'

const Home = ({ navigation }) => {
  const [keberangkatan, setKeberangkatan] = useState('')
  const [tujuan, setTujuan] = useState('')
  const [tanggal, setTanggal] = useState('')

  const handleSearch = () => {
    console.log(keberangkatan)
    console.log(tujuan)
    console.log(tanggal)

    navigation.navigate('Search', {
      itemId: 86,
      otherParam: { keberangkatan, tujuan, tanggal }
    })
  }
  return (
    <>
      <View
        style={{
          backgroundColor: '#000080',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Card containerStyle={{
          shadowColor: '#ffffff',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 7,
          borderRadius: 24
        }}
        >
          <Card.Title style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginVertical: 10 }}>Hilling.id</Card.Title>
          <Card.Divider />
          <Text style={{ margin: 8, fontWeight: 'bold' }}>Lokasi Keberangkatan</Text>
          <Input
            onChange={(e) => setKeberangkatan(e.nativeEvent.text)}
            placeholder='Jakarta'
            isFocused
          />
          <Text style={{ margin: 8, fontWeight: 'bold' }}>Lokasi Tujuan</Text>
          <Input
            onChange={(e) => setTujuan(e.nativeEvent.text)}
            placeholder='Palembang'
            isFocused
          />
          <Text style={{ margin: 8, fontWeight: 'bold' }}>Tanggal Keberangkatan</Text>
          <Input
            onChange={(e) => setTanggal(e.nativeEvent.text)}
            placeholder='30/05/2022'
            isFocused
          />

          <Button
            onPress={() => handleSearch()}
            icon={
              <Icon
                name='search'
                color='#ffffff'
              />
                        }
            buttonStyle={{
              borderRadius: 24,
              marginVertical: 20,
              backgroundColor: '#000080'
            }}
            title='Cari Sekarang'
          />
        </Card>
      </View>
    </>
  )
}

export default Home
