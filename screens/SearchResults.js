import { Text, ScrollView, View, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

const data = [
  {
    maskapai: 'Garuda Indonesia',
    keberangkatan: 'Jakarta',
    tujuan: 'Palembang',
    tanggal: '30/05/2022'
  },
  {
    maskapai: 'Sriwijaya Air',
    keberangkatan: 'Palembang',
    tujuan: 'Jakarta',
    tanggal: '29/05/2022'
  },
  {
    maskapai: 'Garuda Indonesia',
    keberangkatan: 'Palembang',
    tujuan: 'Jakarta',
    tanggal: '30/05/2022'
  },
  {
    maskapai: 'Sriwijaya Air',
    keberangkatan: 'Jakarta',
    tujuan: 'Palembang',
    tanggal: '29/04/2022'
  },
  {
    maskapai: 'Air Asia',
    keberangkatan: 'Jakarta',
    tujuan: 'Singapura',
    tanggal: '31/05/2022'
  },
  {
    maskapai: 'Air Asia',
    keberangkatan: 'Singapura',
    tujuan: 'Jakarta',
    tanggal: '31/05/2022'
  }
]

const SearchResults = ({ route }) => {
  const { otherParam } = route.params

  const hasil = data.filter(({ keberangkatan, tujuan, tanggal }) => {
    return tujuan.toLowerCase().includes(otherParam.tujuan.toLowerCase()) &&
                tanggal.toLowerCase().includes(otherParam.tanggal.toLowerCase()) &&
                keberangkatan.toLowerCase().includes(otherParam.keberangkatan.toLowerCase())
  }
  )
  console.log('hasil', hasil)

  return (
    <>
      <ScrollView style={{ backgroundColor: '#000080' }}>
        <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 24, fontWeight: '400', color: 'white' }}>Hasil Pencarian Penerbangan</Text>
        {
            hasil.length > 0
              ? hasil.map((data, i) => {
                  return (
                    <View key={i} style={{ paddingBottom: 8 }}>
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

                        <Card.Title>{data.maskapai}</Card.Title>
                        <Card.Divider />
                        <View style={[styles.container, {
                          flexDirection: 'row'
                        }]}
                        >
                          <View style={{ flex: 1, marginHorizontal: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Lokasi saat ini</Text>
                            <Text style={{ fontSize: 16 }}>{data.keberangkatan}</Text>
                          </View>

                          <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tujuan</Text>
                            <Text style={{ fontSize: 16 }}>{data.tujuan}</Text>
                            <Text style={{ marginVertical: 20, color: '#000080', fontWeight: 'bold' }}>{data.tanggal}</Text>
                          </View>
                        </View>
                      </Card>
                    </View>
                  )
                })
              : <Text style={{ fontSize: 20, textAlign: 'center', color: 'white', fontWeight: 'bold', marginTop: 80 }}>Keyword Tidak di Temukan</Text>
            }
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})
export default SearchResults
