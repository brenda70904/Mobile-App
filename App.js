// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NativeBaseProvider, Box, FlatList, Image, AspectRatio, Heading, HStack, Stack} from 'native-base';
import getAPI from './getAPI';




export default function App() {

  // const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${REACT_APP_API_KEY}`;

  let { results } = getAPI(url);
  // console.log('data', data.results[0].title);


  return (
    <NativeBaseProvider >
      <Heading> This week's trending Movie </Heading>
      <Box safeArea alignItems="center" >
        <FlatList
          data={results}
          renderItem={({ item }) =>
          <Box alignItems="center">
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700"
            }}
            _web={{
              shadow: 2,
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{/* <Image
              source={uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`}
      /> */}

{/* <Box alignItems="center">
  <Box
    maxW="80"
    rounded="lg"
    overflow="hidden"
    borderColor="coolGray.200"
    borderWidth="1"
    _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }}
    _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
    <Box>
      <AspectRatio w="100%" ratio={16 / 9}>
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
          {item.release_date}
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
            {item.vote_count}
          </Text>
        </HStack>
      </HStack>
    </Stack>
  </Box>
</Box> */}