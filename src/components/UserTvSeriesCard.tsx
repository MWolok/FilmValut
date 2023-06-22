import React from "react";
import { ListGroup } from "react-bootstrap";
import { TvSeries } from "../model/TvSeriesModel";

interface UserTvSeriesCardProps {
  tvSeriesDelete: (id: number) => void;
  tvSeries: TvSeries;
}

const UserTvSeriesCard: React.FC<UserTvSeriesCardProps> = ({
  tvSeriesDelete,
  tvSeries,
}) => {
  const handleDelete = (id: number) => {
    tvSeriesDelete(id);
  };

  return (
    <div className="card">
      {/* Card image */}
      <div className="view overlay">
        <img
          className="card-img-top"
          src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
          alt="Card image cap"
        />
        <a href="#!">
          <div className="mask rgba-white-slight"></div>
        </a>
      </div>

      {/* Card content */}
      <div className="card-body">
        {/* Title */}
        <h4 className="card-title">{tvSeries.title}</h4>
        {/* Text */}
        <p className="card-text">{tvSeries.credits}</p>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{tvSeries.releaseDate}</ListGroup.Item>
          <ListGroup.Item>{tvSeries.runtime}</ListGroup.Item>
          <ListGroup.Item>{tvSeries.ratting}</ListGroup.Item>
        </ListGroup>
        {/* Button */}
        <button
          className="btn btn-primary"
          onClick={() => handleDelete(tvSeries.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserTvSeriesCard;
