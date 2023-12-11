import React from 'react'
import brain from "../assets/images/brain_logo.png";
import kate from "../assets/images/kate.png";
import ui from "../assets/images/ui_logo.png";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';




const Brainstorming = () => {
  return (
    <>
      <div className="container brain_bg">
        <div className="text-center brain_bg py-5">
          <img src={brain} className='brain_bg' alt="" />
          <h1 className='brain_bg my-4'><b className='brain_bg'>The only brainstorming solution <br />that lives up to the hype</b></h1>
        </div>

        <div className="brain_text text-center brain_bg py-0">
          <div className=" first brain_bg" style={{ borderBottom: '3px solid black' }}>
            <b className="brain_bg">Content <br />Marketing</b>
          </div>

          <div className="Second brain_bg">
            Demand <br />Generation
          </div>

          <div className="Third brain_bg">
            Product <br />marketing
          </div>

          <div className="fourth brain_bg">
            Brand <br />marketing
          </div>

          <div className="fifth brain_bg">
            Content <br />design
          </div>
        </div>

        <div className="brain_cards">
          <div className="row brain_bg">
            <div className="col col-sm-12 col-lg-8 col-md-8 brain_bg my-4" >
              <div className="row brain_bg" style={{display: 'flex', justifyContent: 'end'}}>
              <Card style={{ width: '18rem'}}>
                <div className="brain_text2 bg-white">
                <h5 className='bg-white py-2'>Without Writer</h5>
                    <p className='bg-white'> <FontAwesomeIcon icon={faTimes} className='bg-white' />   Insumountable backlog of content <br />   requests from partner teams</p>
                    <p className='bg-white'><FontAwesomeIcon icon={faTimes} className='bg-white' />   No bandwidth for content strategy <br /> and creative writing</p>
                    <p className='bg-white'><FontAwesomeIcon icon={faTimes} className='bg-white' />   8 weeks to produce on SEO blog post</p>
                    <p className='bg-white'><FontAwesomeIcon icon={faTimes} className='bg-white' />   Short shlef-life for new content pieces</p>
                    <p className='bg-white'><FontAwesomeIcon icon={faTimes} className='bg-white' />   Distractions due to adhoc copy and edit requests</p>
                </div> 
              </Card>
            {/* </div> */}

            {/* <div className="col col-sm-12 col-lg-4 col-md-4 brain_bg my-4" style={{border: '2px solid black'}}> */}
             
              <Card style={{ width: '18rem'}}>
                <div className="brain_text2 bg-white">
                <h5 className='bg-white py-2'>With Writer</h5>
                    <p className='bg-white py-1'><FontAwesomeIcon icon={faCheck} className='bg-white' /> Accelerated content creation with <br />faster first drafts and editing cycles</p>
                    <p className='bg-white py-1'><FontAwesomeIcon icon={faCheck} className='bg-white' /> Limited time spend editing off-brand and poorly written content</p>
                    <p className='bg-white py-1'><FontAwesomeIcon icon={faCheck} className='bg-white' /> Daily SEO post on the blog</p>
                    <p className='bg-white py-1'><FontAwesomeIcon icon={faCheck} className='bg-white' /> Easy reporposing of existing content</p>
                    <p className='bg-white py-1'><FontAwesomeIcon icon={faCheck} className='bg-white' /> Collegues editing their own work for brand voice, style, and terminology</p>
                </div> 
              </Card>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-4 col-md-4 brain_bg my-4" >
              <div className="container brain_bg">
                    <img className='brain_bg' src={kate} alt="" style={{height: '7em'}} />
                    <p className='brain_bg'><b className='brain_bg'>"I have fascinated by the <br />that cowrite is able to <br />write in our brand voice"</b></p>
                    <p className='brain_bg'><b className='brain_bg'>Kate McDaniel</b></p>
                    <p className='brain_bg'>Blog an web Editor, <br />Global Content</p>
                    <img className='brain_bg' src={ui} alt="" />
                    </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Brainstorming

