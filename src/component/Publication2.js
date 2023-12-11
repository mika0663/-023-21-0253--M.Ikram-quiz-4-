import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import left from "../assets/images/pub2_left.png";
import right from "../assets/images/pub2_right.png";
const Publication2 = () => {
    return (
        <>
            <div className="container pub2_bg">
                <div className="pub2_text text-center pub2_bg py-3">
                    <FontAwesomeIcon className='pub2_bg' icon={faPlay} />
                    <p className='pub2_bg'> <b className='pub2_bg'>USE CASES</b></p>
                    <h1 className='pub2_bg'>Automate what’s automatable in <br /> content</h1>
                    <p className='pub2_bg' style={{fontSize: '1.4rem'}}>Writer accelerates your writing workflow, from <br />
                    Writing   <FontAwesomeIcon className='pub2_bg' icon={faArrowRight} />          Ideation         <FontAwesomeIcon className='pub2_bg' icon={faArrowRight} />            Illustrating</p>
                </div>
                <div className="container pub2_bg">
                    <div className="row setting pub2_bg">
                        <div className="col col-sm-8 col-md-8 col-lg-8 pub2_bg text-end my-2">
                                <img className='pub2_left pub2_bg' src={left} alt="left" />
                        </div>
                        <div className="col col-sm-4 col-md-4 col-lg-4 text-start pub2_bg">
                                <img className='pub2_right pub2_bg' src={right} alt="right" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Publication2
