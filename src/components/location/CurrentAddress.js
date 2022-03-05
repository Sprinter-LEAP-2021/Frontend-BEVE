import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import NearShops from "../mainPageSections/NearShops";

export default function CurrentAddress({usePos}) {

  const [noLoc, setNoLoc]=useState(false);
  const [useLoc, setUseLoc] = useState({ city: "서대문구", address: "서대문구" });
  const [isSeoul, setIsSeoul] = useState(0);
  
  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    try{
    if(usePos.lat!=null){  
      geocoder.coord2Address(usePos.lon, usePos.lat, function(result, status) {      
        if (status === kakao.maps.services.Status.OK) {      
          const newUseLoc = ({
            city: result[0].address.region_2depth_name,
            address: result[0].address.address_name,
          });
          if (result[0].address.region_1depth_name == '서울') {
            setIsSeoul(1);
          }
          setUseLoc({
            city: newUseLoc.city,
            address:newUseLoc.address
          });
              }
            }
        );
      }
    } catch (e) {
      setNoLoc(true);    
    };
    setNoLoc(false);
  }, [usePos]); 
   if(noLoc){
     return(<div>에러</div>);
  }

  return <Box><NearShops useLoc={useLoc} isSeoul={isSeoul} usePos={usePos}/></Box>;
}
