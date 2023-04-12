// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, FlatList, Image, AspectRatio, Heading, HStack, Stack } from 'native-base';
import getAPI from './hooks/getAPI';
import { useState } from 'react';
import * as Haptics from 'expo-haptics';
import {Ionicons} from '@expo/vector-icons';

export default function App() {


  // const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`;

  let { results } = getAPI(url);
  const [like, setLike] = useState(false);

  let pressLike = () => {
    setLike(!like);
    Haptics.selectionAsync();
    console.log('like', like);
  }
  return (
    <NativeBaseProvider>
      <Heading textAlign="center" mt="50px"> trending Movies </Heading>
      <Box safeArea alignItems="center" >
        <FlatList
          data={results}
          renderItem={({ item }) =>
            <Box alignItems="center" m="10px">
              <Box
                maxW="80"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="2"
                shadow= "8"
                _web={{
                  shadow: 8,
                  borderWidth: 0
                }} _light={{
                  backgroundColor: "gray.50"
                }}>
                <Box>
                  <AspectRatio alignItems="center" h="500px" ratio={9 / 14}>
                    <Image source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    }} alt="image" />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      {item.title}
                    </Heading>
                    <Text fontSize="xs" _light={{
                      color: "blue.500"
                    }} _dark={{
                      color: "violet.400"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                      release date: {item.release_date}
                    </Text>
                  </Stack>
                  <Text fontWeight="400">
                    {item.overview}
                  </Text>
                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600" _dark={{
                        color: "warmGray.200"
                      }} fontWeight="400">
                        total votes: {item.vote_count}
                      </Text>
                    </HStack>

                    <TouchableOpacity style={styles.icons} onPress={() => pressLike()}>
                      <Ionicons name="heart" size={40} color={ like ? 'red' : 'gray'}/>
                    </TouchableOpacity>

                  </HStack>
                </Stack>
              </Box>
            </Box>
          }
        >
        </FlatList>
      </Box>

    </NativeBaseProvider >
  );
}


const styles = StyleSheet.create({
  icons: {
    margin: 10,
  }
});