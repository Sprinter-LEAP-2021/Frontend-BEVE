import { Box, Text, Flex, Spacer, Image, Modal,Button,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton } from "@chakra-ui/react";
import React, { useState } from "react";
import Map from "./Map";
import {  VscCircleOutline,VscCircleFilled } from "react-icons/vsc";

export default function DetailedShop({ value, isOpen, onClose,franName }) {
  
  const [count, setCount] = useState(1);

  const next = () => {
    if (count == 1) setCount(2);
    else setCount(1);
  };
  const before = () => {
    if (count == 2) setCount(1);
    else setCount(2);
  };

    return (
      <>
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay color="green" />
          <ModalContent>
            {value.franchise == 0?
              <Image
                w="50rem"
                h="30rem"
                boxShadow="md"
                borderRadius="0.2rem"
                src={`https://beve2-march0320.vercel.app/img_res/${value.name}/${count}.PNG`}
                objectFit="fill"
              />:  <Image
                w="50rem"
                h="30rem"
                boxShadow="md"
                borderRadius="0.2rem"
                src={`https://beve2-march0320.vercel.app/img_res/${franName}/1.PNG`}
              />}
            <Flex direction="row" justify="center" m={1}>
              {count == 1 ?
                <>
              <Button
                p={1}
                as={VscCircleFilled}
                size="sm"
                variant="ghost"
                color="#3E603B"
              />
              <Button
                p={1}
                as={VscCircleOutline}
                onClick={next}
                size="sm"
                variant="ghost"
                color="#3E603B"
              />
              </>:<><Button
                p={1}
                as={VscCircleOutline}
                onClick={before}
                size="sm"
                variant="ghost"
                color="#3E603B"
              />
              <Button
                p={1}
                as={VscCircleFilled}
                size="sm"
                variant="ghost"
                color="#3E603B"
              /></> }
            </Flex>
            <ModalCloseButton borderRadius="3rem" backgroundColor="#3E603B" color="white" />
            <ModalBody>
              <Flex direction="column" justify="center">
                <Text fontSize="1.8rem" fontWeight="bolder" m={2}>{value.name}</Text>
                <Box m={2}>
                  <Text m={1}>카테고리 : {value.category}</Text>
                  <Text m={1}>전화번호 : {value.phone}</Text>
                  <Text m={1}>주소 : {value.location.address}</Text>
                </Box>
                <Box m={2}>
                  <Text m={1}>메뉴<hr /></Text>
                  <Text>
                    {value.menu.map((menus, index) => (
                      <Flex key={index}>
                        <Text m={0.5}>{menus.name}</Text>
                        <Spacer />
                        <Text>{menus.level.join(", ")}</Text>
                      </Flex>
                    ))}
                  </Text>
                </Box>
              </Flex>
              <ModalCloseButton borderRadius="3rem" backgroundColor="#3E603B" color="white" />
              <Flex justify="center" m={4}>
                <Map value={value} />
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }        
  


