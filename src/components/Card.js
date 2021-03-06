import { Box, Text, Flex, Spacer, Image, useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import DetailedShop from "./DetailedShop";
import noimage from "../../public/img/noimage.jpg"

export default function Card({ value }) {
  // console.log(value);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const tmp = value.name;
  const tmp_t = tmp.split(" (");

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
          { `img_res/${value.name}/1.png` ? (
            <Image src={`img_res/${value.name}/1.png`} objectFit="fill" maxW="15vw" maxH="13vw" w="15vw" h="13vw" />
          ):(<Image src={noimage.src} objectFit="fill" maxW="15vw" maxH="13vw" w="15vw" h="13vw" />)
          }
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
           { `img_res/` + tmp_t[0] + `/1.png` ? (
             <Image src={`img_res/` + tmp_t[0] + `/1.png`} objectFit="fill" maxW="15vw" maxH="13vw" w="15vw" h="13vw" />
          ):(<Image src={noimage.src} objectFit="fill" maxW="15vw" maxH="13vw" w="15vw" h="13vw" />)
          }


          <Box m={2} textAlign="left">
            <Text color="green" fontWeight="bolder">{value.name}</Text>
            <Text fontSize="0.8rem" justifySelf="end">{value.category}</Text>
          <Text fontSize="0.8rem">{value.location.address}</Text>
          </Box>
        </Box>
      );
  }
}
