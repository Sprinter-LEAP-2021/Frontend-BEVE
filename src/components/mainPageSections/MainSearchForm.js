import { Flex, Spacer, Text } from "@chakra-ui/layout";
import SearchForm from "../SearchForm";
import CurrentLocation from "../location/CurrentLocation";

export default function MainSearchForm() {
  return (
    <Flex
      font-family="Zilla, serif"
      flexDirection="column"
      w="50%"
      h="100vh"
      p="10% 0 8% 4%"
      position="relative"
      zIndex="1"
    >
      <Spacer />
      <Text fontSize="6xl" fontWeight="bold" color="white" fontStyle>
        Explore Seoul with <br /> Vegetarian Restaurants
      </Text>
      <Text fontSize="4xl" color="beige" mt="0.5em">
        BECOME VEGETARIAN
      </Text>
      <Flex direction="column">
      <SearchForm width="100%" marginTop="3em" inputVariant="filled" />
        <CurrentLocation />
        </Flex>
    </Flex>
  );
}
