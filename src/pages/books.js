import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Books = () => {

    const [bookData, setBookData] = useState()
    const navigate=useNavigate()

    useEffect(() => {
        axios
            .get('http://localhost:3030/books')
            .then((res) => setBookData(res.data))
    }, [])

    if (!bookData) return 'Yükleniyor....';

    return (
        <div className='booksContainer'>
            {bookData.map((e) => {
                return (
                    <div  key={e.id} onClick={()=>navigate(`/books/${e.id}`)} className='bookCard'>
                        <img src={e.image} alt="" />
                        <h3>{e.title}</h3>
                        <p>Yazar:{e.author}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Books