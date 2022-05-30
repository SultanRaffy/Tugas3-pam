import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import SearchResults from './screens/SearchResults'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Search' component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
