import { useState, useEffect } from "react";

const useExhibitionData = (initialApiKey) => {
  const [apiKey] = useState(initialApiKey);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useState({
    keyword: "",
    startDate: "",
    endDate: "",
  });
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [noMatchingResults, setNoMatchingResults] = useState(false);

  useEffect(() => {
    if (searchButtonClicked) {
      fetchData();
    }
  }, [apiKey, pageSize, currentPage, searchParams, searchButtonClicked]);

  const fetchData = async () => {
    try {
      let apiUrl = `https://api.harvardartmuseums.org/exhibition?apikey=${apiKey}`;

      const { keyword, startDate, endDate } = searchParams;

      if (keyword) {
        apiUrl += `&keyword=${encodeURIComponent(keyword)}`;
      }

      if (startDate) {
        apiUrl += `&startDate=${encodeURIComponent(startDate)}`;
      }

      if (endDate) {
        apiUrl += `&endDate=${encodeURIComponent(endDate)}`;
      }

      apiUrl += `&size=${pageSize}&page=${currentPage}`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();

      if (responseData.records.length === 0) {
        setNoMatchingResults(true);
        setData([]);
      } else {
        setNoMatchingResults(false);
        setData(responseData.records);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    setCurrentPage(1);
    setSearchButtonClicked(true);
  };

  return {
    data,
    handleSearch,
    pageSize,
    setPageSize,
    setSearchParams,
    searchButtonClicked,
    noMatchingResults,
    ...searchParams,
    setKeyword: (keyword) => setSearchParams((prev) => ({ ...prev, keyword })),
    setStartDate: (startDate) =>
      setSearchParams((prev) => ({ ...prev, startDate })),
    setEndDate: (endDate) => setSearchParams((prev) => ({ ...prev, endDate })),
  };
};

export default useExhibitionData;
