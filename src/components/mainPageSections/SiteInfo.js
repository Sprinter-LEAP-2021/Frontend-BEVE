import { Flex, Spacer, Text } from "@chakra-ui/layout";
import TopBar from "../TopBar";

export default function SiteInfo() {
  return (
    <Flex bgColor="green" h="200px" color="beige" p="30px" mt="3rem">
      <TopBar position="absolute" />
      <Spacer />
      <Flex flexDir="column" alignItems="center" ml="50px">
        <Text fontSize="3xl" fontWeight="bold" color="white" mb="10px">
          WEB GITHUB
        </Text>
        <Text>https://github.com/Sprinter-LEAP-2021</Text>
      </Flex>

      <Flex flexDir="column" alignItems="center" ml="50px">
        <Text fontSize="3xl" fontWeight="bold" color="white" mb="10px">
          DEVELOPERS&CONTACT
        </Text>
        <Text>YEONHEE JUNG : spig0126@gmail.com</Text>
        <Text>YOUMIN KIM : march032-@ewhain.net</Text>
        <Text>JUYEON KIM : kylakim@ewhain.net</Text>
        <Text>YESEO JANG : afterhours@ewhain.net</Text>
      </Flex>
    </Flex>
  );
}
