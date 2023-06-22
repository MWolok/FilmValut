
import { Link } from "react-router-dom";
import "./Pagination.css";

export type Props = {
	itemsPerPage: number;
	totalItems: number;
    curentPage: (num:number)=>void;
};

export default function Pagination({ itemsPerPage, totalItems,curentPage }: Props) {
	const pageNums = [];

    for(let i = 1; i<= Math.ceil(totalItems/itemsPerPage); i++){
        pageNums.push(i)
    }

	return <nav>
        <ul className="pagination vw-100 d-flex justify-content-center">
            {pageNums.map(num => (<li key={num} className="page-item">
                <Link   onClick={() => curentPage(num)} className="page-link" to={""}>
                    {num}
                </Link>
            </li>))}
        </ul>
    </nav>;
}
