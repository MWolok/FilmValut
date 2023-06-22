import { ListGroup } from "react-bootstrap";
import { MovieModel } from "../model/MovieModel.";
import { TvSeries } from "../model/TvSeriesModel";

const UserTvSeriesCard = (props:TvSeries) => {



return(<><div className="card">
{/* <!-- Card image --> */}
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

{/* <!-- Card content --> */}
<div className="card-body">
    {/* <!-- Title --> */}
    <h4 className="card-title">{props.name}</h4>
    {/* <!-- Text --> */}
    <p className="card-text">
       {props.episodes}
    </p>
    <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.first_air_date}</ListGroup.Item>
        <ListGroup.Item>{props.number_of_seasons}</ListGroup.Item>
        <ListGroup.Item>{props.region.country}</ListGroup.Item>
    </ListGroup>
    {/* <!-- Button --> */}
    <a href="#" className="btn btn-primary">
        Button
    </a>
</div>
</div></>)

};
export default UserTvSeriesCard;
