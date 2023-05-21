import React, { useState } from 'react'
import Modal from './Modal';

const Card = ({ book }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState();
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                    if (thumbnail != undefined && amount != undefined) 
                    {
                        return (
                            <>
                            <div className="card flex items-center justify-center bg-secondary rounded-md p-3 relative text-center"
                            onClick={() => {setShow(true); setBookItem(item)}}>
                                <div className="p-1 flex flex-col items-center justify-center">
                                    <img className='w-[200px] h-[250px] rounded-md' src={thumbnail} alt="book" />
                                    <div className="bottom flex flex-col mt-2">
                                        <h3 className="title font-bold mb-3">{item.volumeInfo.title}</h3>
                                        <p className="amount bg-primary text-secondary font-bold">&#8377;{amount}</p>
                                    </div>
                                </div>
                            </div>
                            <Modal show={show} item={bookItem} onClose={() => setShow(false)}/>
                            </>
                        )
                    }                    
                })
            }
        </>
    )
}

export default Card