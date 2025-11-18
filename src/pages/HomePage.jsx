import React, { useEffect, useState } from 'react';
import '../styles/pages.css';
import { FaSyncAlt, FaHeart} from 'react-icons/fa';
import { BounceLoader } from "react-spinners";

const HomePage = () => {
    const [pickUpLine, setPickUpLine] = useState('');
    const [loading, setLoading] = useState(true);
    const [spin, setSpin] = useState(false);


    const fetchPickUpLine = async () => {
        setLoading(true); 
        try {
        const response = await fetch('https://rizzapi.vercel.app/random'); 
        const data = await response.json();
        setPickUpLine(data.text); 
        
        } catch (error) {
        console.error(error);
        setPickUpLine('Oops! Something went wrong.');
        } finally {
        setLoading(false); 
        }
    };

    function handleClick(){
        setSpin(true);
        fetchPickUpLine();
        setTimeout(() => setSpin(false), 800);
    }

    useEffect(() => {
        fetchPickUpLine();
    }, []);

    

    return (
        <section className='hero'>
        <div className='content'>
            {loading ? (
            <BounceLoader
                color='purple'
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            ) : (
            <p>{pickUpLine}</p>
            )}

            

            <button 
                className={spin ? 'spin' : ''}
                onClick={handleClick} >
                <FaSyncAlt size={50} color='purple'/>
            </button>
        </div>
        </section>
    );
};

export default HomePage;
