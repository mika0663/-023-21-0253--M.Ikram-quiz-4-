import React from 'react'
import Herosection from "../assets/images/Herosection.png";

const HeroSection = () => {
    return (
        <>
            <div className="container my-5 herosection_bg">
                <div className="row">
                    <div className="col col-sm-12 col-md-6 col-lg-6 col1">
                        <h1 className='hero_text'>Brainstorm<br /> Your Book <br /> Easily</h1>
                        <h5 className='hero_text2'>World-class companies use Writealy <br /> AI writing platform to unlock <br /> brainstorming for publishing a book.</h5>
                        <button className='btn btn-lg' id='hero_btn1'><b>Request Demo</b></button>
                        <button className='btn btn-lg' id='hero_btn2' >Try for free</button>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-6">
                        <img src={Herosection} alt="HeroSection" className='hero_img' style={{ width: '100%', height: 'auto' }} />
                        <h5 className='my-3 text-center'><b>Watch the Product Overview 3m</b></h5>
                        <div className="hero_btn">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSection
