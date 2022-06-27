import React from 'react'

const HeroBanner1 = () => {
  return (
    <div className='container-fluid'>
        <div className="row d-none d-sm-none d-md-flex d-lg-flex">
            <div className="col-2"><img src="/images/shadow.png" height={200} width={200} alt="" /></div>
        </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="text-center">
                        <span className="h6 text-muted">ELONATECH 247 SUPPORT</span>
                        <img src="/images/shadow2.png" height={200} width={200} alt="" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="right d-sm-block d-md-flex d-lg-flex gap-3">
                        <div className="icon text-center text-md-left text-lg-left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4285f4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg></div>
                        <div className="rightTxt border-bottom border-info">
                            <h4 className="txt1" style={{color: "#4285f4"}}>3Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                            <h6 className="txt1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h6>
                        </div>
                    </div>
                    <div className="right d-flex gap-3 my-3">
                        <div className="icon text-center text-md-left text-lg-left"><img src="gears.svg" alt="" width="24" height="24" /></div>
                        <div className="rightTxt border-bottom border-info">
                            <h4 className="txt1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                            <h6 className="txt1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h6>
                        </div>
                    </div>
                    <div className="right d-flex gap-3">
                        <div className="icon text-center text-md-left text-lg-left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4285f4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></div>
                        <div className="rightTxt border-bottom border-info">
                            <h4 className="txt1" style={{color: "#4285f4"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                            <h6 className="txt1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h6>
                        </div>
                    </div>
                    <div className="right d-flex gap-3 my-3">
                        <div className="icon text-center text-md-left text-lg-left"><img src="antivirus.svg" alt="" width="24" height="24" /></div>
                        <div className="rightTxt border-bottom border-info">
                            <h3 className="txt1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                            <h6 className="txt1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner1