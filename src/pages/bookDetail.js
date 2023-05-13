
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const BookDetail = () => {

    const params = useParams();
    const [bookDetail, setBookDetail] = useState()

    useEffect(() => {
        axios
            .get(`http://localhost:3030/books/${params.bookId}`)
            .then((res) => setBookDetail(res.data));
    }, [])

    if (!bookDetail) return 'Yükleniyor....';

    return (
        <div className="bookDetailMainContainer">
            <div className="bookDetailContainer">
                <img src={bookDetail.image} alt="" />
                <div>
                    <h2>{bookDetail.title}</h2>
                    <h3>{bookDetail.author}</h3>
                    <p>{bookDetail.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BookDetail