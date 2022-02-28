import { Box, Text, Image, useDisclosure } from "@chakra-ui/react";
import React from "react";
import DetailedShop from "./DetailedShop";
import noimage from "../../public/img/noimage.jpg"

export default function Card({ value }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const tmp_t = value.name.split("(")[0].trim;
  const selectImage = () => {
    try {
    return <Image src={`https://beve2-march0320.vercel.app/img_res/${value.name}/1.PNG`} objectFit="fill" maxW="15vw" maxH="13vw" w="15vw" h="13vw" />
    } catch (error) {
      return <Image src={noimage.src} objectFit="fill" maxW="15vw" maxH="13vw" w="15vw" h="13vw" />
  }  
  }
  const selectFranImage = () => {
    try {
    return <Image src={`https://beve2-march0320.vercel.app/img_res/` + tmp_t + `/1.PNG`} objectFit="fill" maxW="15vw" maxH="13vw" w="15vw" h="13vw" />
    } catch (error) {
      return <Image src={noimage.src} objectFit="fill" maxW="15vw" maxH="13vw" w="15vw" h="13vw" />
  }  
}
  if (value.franchise == 0) {
      return (
        <Box
          as="button"
          variant="ghost"
          _hover="none"
          _focus="none"
          display="flex"
          flexDirection="column"
          h="100%"
          w="90%"
          color="black"
          onClick={onOpen}
        >
          <DetailedShop onOpen={onOpen} isOpen={isOpen} onClose={onClose} value={value}/>
          {selectImage()}
          <Box m={2} textAlign="left">
            <Text color="green" fontWeight="bolder">{value.name}</Text>
            <Text fontSize="0.8rem" justifySelf="end">{value.category}</Text>
          <Text fontSize="0.8rem">{value.location.address}</Text>
          </Box>
        </Box>
      );
  }

  else {
      return (
        <Box
          as="button"
          variant="ghost"
          _hover="none"
          _focus="none"
          display="flex"
          flexDirection="column"
          h="100%"
          w="90%"
          boxShadow="base"
          color="black"
          onClick={onOpen}
        >
          <DetailedShop onOpen={onOpen} isOpen={isOpen} onClose={onClose} value={value}/>
          {selectFranImage()}


          <Box m={2} textAlign="left">
            <Text color="green" fontWeight="bolder">{value.name}</Text>
            <Text fontSize="0.8rem" justifySelf="end">{value.category}</Text>
          <Text fontSize="0.8rem">{value.location.address}</Text>
          </Box>
        </Box>
      );
  }
}
