import React, { useCallback, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import UserTvSeriesCard from "../../components/UserTvSeriesCard";
import { TvSeries } from "../../model/TvSeriesModel";
import { TestTvSeries } from "../../api/TestTvSeries";
import Pagination from "../../components/Pagination";

const UserTvSeries = () => {
  const [tvseries, setTvSeries] = useState<TvSeries[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tvseriesPerPage, setTvSeriesPerPage] = useState(8);

  const getTvSeries = useCallback(async () => {
    const result = await TestTvSeries.getPopularTvSeries();
    setTvSeries(result.data);
  }, []);

  useEffect(() => {
    getTvSeries();
  }, [getTvSeries]);

  const deleteTvSeriesFromList = (id: number) => {
    console.log(id);
  };

  const indexOfLastTvSeries = currentPage * tvseriesPerPage;
  const indexOfFirstTvSeries = indexOfLastTvSeries - tvseriesPerPage;
  const currentTvSeries = tvseries.slice(
    indexOfFirstTvSeries,
    indexOfLastTvSeries
  );

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container-fluid min-vh-100">
        <div className="underline"></div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {tvseries.length === 0 ? (
            <p className="text-algin-center">No tv series Found</p>
          ) : (
            currentTvSeries.map((series) => (
              <div key={series.id} className="col">
                <UserTvSeriesCard
                  tvSeriesDelete={deleteTvSeriesFromList}
                  tvSeries={series}
                />
              </div>
            ))
          )}
          <Pagination
            totalItems={tvseries.length}
            itemsPerPage={tvseriesPerPage}
            curentPage={changePage}
          />
        </div>
      </div>
    </>
  );
};

export default UserTvSeries;
