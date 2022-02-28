   import {
  Flex,
  Button,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

import FilterTypeBox from "./FilterTypeBox";
import { filterState, inputState, pageState, queryState } from "../../states";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export default function Filter({ isOpen, onClose, showToast }) {
  const [selectedArea, setSelectedArea] = useState([]);
  const [selectedStage, setSelectedStage] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const router = useRouter();

  const [filter, setFilter] = useRecoilState(filterState);
  const query = useRecoilValue(queryState);
  const inputText = useRecoilValue(inputState);
  const setPage = useSetRecoilState(pageState);

  const updateFilters = (e) => {
    setPage(1);
    setFilter({
      area: selectedArea,
      stage: selectedStage,
      type: selectedType,
    });

    if (selectedArea.length===0 && selectedStage.length===0 && selectedType.length===0 && inputText.length === 0) showToast();
    else {
      router.push({
        pathname: "/ResultPage",
      }); 
    }
  };

  const clearFilter = () => {
    setSelectedArea([]);
    setSelectedStage([]);
    setSelectedType([]);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          clearFilter();
        }}
        size="xl"
        scrollBehavior="inside"
        colorScheme="Green"
      >
        <ModalOverlay color="green" />
        <ModalContent>
          <Flex>
            <ModalHeader flex="1">필터</ModalHeader>
            <Spacer />
            <ModalCloseButton />
          </Flex>
          <ModalBody>
            <FilterTypeBox
              type="area"
              options={seoulAreas}
              selected={selectedArea}
              setSelected={setSelectedArea}
            />
            <FilterTypeBox
              type="stage"
              options={vegetarianStages}
              selected={selectedStage}
              setSelected={setSelectedStage}
            />
            <FilterTypeBox
              type="type"
              options={restaurantTypes}
              selected={selectedType}
              setSelected={setSelectedType}
            />
            <ModalFooter>
              <Button
                variant="solid"
                size="md"
                mt="5rem"
                alignSelf="flex-end"
                onClick={() => {
                  onClose();
                  clearFilter();
                  updateFilters();
                }}
              >
                선택 완료
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

const seoulAreas = [
  "강서구",
  "양천구",
  "구로구",
  "금천구",
  "영등포구",
  "마포구",
  "은평구",
  "서대문구",
  "동작구",
  "관악구",
  "용산구",
  "서초구",
  "강남구",
  "송파구",
  "강동구",
  "중구",
  "종로구",
  "성북구",
  "강북구",
  "도봉구",
  "노원구",
  "중랑구",
  "동대문구",
  "성동구",
  "광진구",
];
const vegetarianStages = [
  "비건",
  "락토",
  "오보",
  "락토 오보",
  "페스코",
  "폴로",
  "플렉시테리언",
];
const restaurantTypes = [
  "한식",
  "분식",
  "카페",
  "베이커리",
  "양식",
  "술집",
  "인도/중동",
  "중식",
  "동남아",
  "일식",
];