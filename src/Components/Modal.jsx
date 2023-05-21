import React from 'react'

const Modal = ({show, item, onClose}) => {
    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
        <>
            <div className="overlay flex items-center justify-center fixed w-full min-h-screen ">
                <div className="overlay-inner bg-white w-[50%] h-[85%] px-2 relative overflow-hidden rounded-lg">
                    <button className='close outline-none border-0 absolute'><i className="fa-solid fa-xmark"
                    onClick={onClose}></i></button>
                    <div className="inner-box mt-5 flex justify-center">
                        <img className='w-[20%] h-[45%] me-4' src={thumbnail} alt="inner" />
                        <div className="info">
                            <h1 className='text-md font-bold'>{item.volumeInfo.title}</h1>
                            <h3 className='text-xs font-bold mt-1 text-yellow-500 mb-1'>{item.volumeInfo.authors}</h3> 
                            <h4 className='text-xs text-yellow-600 mb-3'>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span> </h4> 
                            <a href={item.volumeInfo.previewLink}><button className='outline-none rounded-md py-1 px-4 text-xs font-bold bg-amber-700	text-white'>More</button></a>
                        </div>
                    </div>
                    <p className="description leading-3	mt-5 text-justify">{item.volumeInfo.description}</p>
                </div>
            </div>
        </>
    )
}

export default Modal