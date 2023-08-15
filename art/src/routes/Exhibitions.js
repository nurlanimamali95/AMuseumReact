import React from "react";
import "./Exhibition.css";
import video from "../assets/video-about-1.mp4";
import useExhibitionData from "../components/useExhibitionData";

const Exhibitions = () => {
  const initialApiKey = process.env.REACT_APP_API_KEY;;
  const {
    data,
    handleSearch,
    pageSize,
    setPageSize,
    setSearchParams,
    searchButtonClicked,
    noMatchingResults,
    keyword,
    setKeyword,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useExhibitionData(initialApiKey);

  return (
    <div className="exhibitions-container">
      <video autoPlay muted loop className="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="exhibitions-heading">Exhibitions</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by city or exhibition..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="pagination-container">
        Results per page:{" "}
        <select
          className="page-size-select"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
      {noMatchingResults && (
        <p className="no-matching-results">No matching exhibitions found.</p>
      )}
      <div className="data-container-exhibition">
        {data.map((item) => (
          <div className="data-item" key={item.id}>
            <a
              className="item-link"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="heading-exhibitions">{item.title}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exhibitions;
