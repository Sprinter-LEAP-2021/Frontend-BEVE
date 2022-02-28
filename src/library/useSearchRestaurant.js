import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import axios from "axios";

import {
  filterState,
  pageState,
  queryState,
  restaurantDataState,
  inputState,
} from "../states";

export default function useSearchRestaurants() {
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  const query = useRecoilValue(queryState);
  const page = useRecoilValue(pageState);
  const [restaurantData, setRestaurantData] =
    useRecoilState(restaurantDataState);
  const [filter, setFilter] = useRecoilState(filterState);
  const [inputText, setInputText] = useRecoilState(inputState);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      console.log(query);

      const response = await axios
        .get(
          `https://beve1-march0320.vercel.app//api/posts?area=${query.area}&stage=${query.stage}&type=${query.type}&inputText=${query.inputText}&page=${page}`
        )
        .catch((error) => {
          setIsError(true);
          console.log(error.response.data);
        })
        .then((response) => {
          setIsLoading(false);
          setRestaurantData(response.data);
        });
    };

    fetchData();
  }, [query, page]);

  return { isLoading, isError };
}
