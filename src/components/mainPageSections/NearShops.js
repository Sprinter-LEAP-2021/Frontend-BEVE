import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function NearShops({ useLoc, isSeoul, usePos }) {
  console.log(useLoc.city);  //useLoc.city=구 useLoc.address=주소 isSeoul이 1이면 서울
  
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);
  const [nearShop, setNearShop] = useState(null);
  const [count, setCount] = useState(0);

  const next = () => {
    if (count == nearShop.length - 1) setCount(0);
    else setCount(count + 1);
  };

  const before = () => {
    if (count == 0) setCount(nearShop.length - 1);
    else setCount(count - 1);
  };

  return (
  <Box >
      <Text fontSize="2xl" m={1} color="lightbeige">
            현 위치 : {useLoc.address} 
    </Text>  
  </Box>);
}
  
