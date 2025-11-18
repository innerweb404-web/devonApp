import React from 'react';
import { FaHeart } from "react-icons/fa";
import { CircleLoader } from "react-spinners";


const Loading = ({ text }) => {
    return (
        <div className="loading-overlay">
            <div className="loading-spinner">
                <CircleLoader
                color='rgb(128, 0, 128,0.9)'
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
            </div>
            <p className="loading-text">{text}<FaHeart color='rgb(94, 4, 94)'
                        size={20}/></p>
        </div>
    );
};

export default Loading;
