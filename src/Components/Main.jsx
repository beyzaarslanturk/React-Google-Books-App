import React, { useState } from 'react'
import Card from './Card'
import axios from 'axios'



const Main = () => {

    const [search, serSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAIqB15O82FKDdRkbWjHmgCvXI9QNstEQQ'+'&maxResults=40')
                .then(res => setBookData(res.data.items))
                .catch(err => console.log(err))
        }
    };

    return (
        <>
            <div className='header w-full h-[500px] text-secondary flex items-center relative '>
                <div className="row1">
                    <h1 className='text-[20px] ms-6 text-center md:text-[40px]'>A room without books is like <br /> a body without a soul.</h1>
                </div>
                <div className="row2 absolute top-2.5 right-36 text-center">
                    <h2 className='lg:text-[35px]  text-[20px] mt-5 mb-4 font-bold	'>Find Your Book</h2>
                    <div className="search flex items-center justify-center">
                        <input className='text-black font-bold text-xs py-1 ps-2 pe-3 outline-0 border-0 w-[60%] md:w-[80%]'
                            type="text"
                            placeholder='Enter Your Book Name'
                            value={search}
                            onChange={e => serSearch(e.target.value)}
                            onKeyPress={searchBook}
                        />

                        <button className='bg-white text-black outline-0 border-0 px-2'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <img className='mt-7 w-[250px] lg:block hidden' src="./images/bg2.png" alt="background" />
                </div>
            </div>

            <div className="container flex items-center justify-center min-h-screen mx-auto">
                <div className="grid px-10 gap-8 my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        <Card book = {bookData} />
                    }

                </div>
            </div>

        </>
    )
}

export default Main