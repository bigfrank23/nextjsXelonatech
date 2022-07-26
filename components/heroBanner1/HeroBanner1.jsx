import React from 'react'

const HeroBanner1 = () => {
  return (
        <div className="container">
            {/* <div className="row flex-lg-row flex-md-row flex-column-reverse" style={{marginTop: "9rem", marginBottom: "9rem"}}>
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                    <h4 className="txt1" style={{color: "#34548c"}}>Intelligence Meet Innovation</h4>
                    <h6 className="txt1">Get the very best PCs and Laptops for home / Business</h6>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src="/images/laptop.jpg" alt="laptop" width={400} height="auto" className='img-fluid' />
                </div>
            </div> */}
            <div className="row" style={{marginTop: "5rem", marginBottom: "5rem"}}>
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="right d-sm-block d-md-flex d-lg-flex gap-3">
                        <div className="icon text-center text-md-left text-lg-left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34548c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg></div>
                        <div className="rightTxt border-bottom border-info">
                            <h4 className="txt1" style={{color: "#34548c", textTransform: 'capitalize'}}>Onsite Support and Installations</h4>
                            <h6 className="txt1">Expertise. Convinience. Customer Experience</h6>
                        </div>
                    </div>
                    <div className="right d-sm-block d-md-flex gap-3 my-3">
                        <div className="icon text-center text-md-left text-lg-left"><img src="gears.svg" alt="" width="24" height="24" /></div>
                        <div className="rightTxt border-bottom border-info">
                            <h4 className="txt1" style={{textTransform: 'capitalize'}}>Contact Support</h4>
                            <h6 className="txt1">Let us assist you with any product or service questions</h6>
                        </div>
                    </div>
                    <div className="right d-sm-block d-md-flex gap-3">
                        <div className="icon text-center text-md-left text-lg-left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34548c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></div>
                        <div className="rightTxt border-bottom border-info">
                            <h4 className="txt1" style={{color: "#34548c", textTransform: 'capitalize'}}>Laptops. Network servers. Workstations</h4>
                            <h6 className="txt1">Get the best</h6>
                        </div>
                    </div>
                    <div className="right d-sm-block d-md-flex gap-3 my-3">
                        <div className="icon text-center text-md-left text-lg-left"><img src="antivirus.svg" alt="" width="24" height="24" /></div>
                        <div className="rightTxt border-bottom border-info">
                            <h3 className="txt1" style={{textTransform: 'capitalize'}}>Premium Antivirus retail & installation </h3>
                            <h6 className="txt1">Ensure you stay safe behind a firewall</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="text-center">
                        <span className="h6 text-muted">ELONATECH 24/7 SUPPORT</span>
                        <img src="/images/shadow2.png" height={200} width={200} alt="ELONATECH 247 SUPPORT" />
                    </div>
                </div>
            </div>
            {/* <div className="row" style={{marginTop: "9rem", marginBottom: "9rem"}}>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src="/images/printer.jpg" alt="printer" width={400} height="auto" className='img-fluid' />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                    <h4 className="txt1" style={{color: "#34548c"}}>Power your business with server and workstations</h4>
                    <h6 className="txt1">Get the very best PCs and Laptops for home / Business</h6>
                </div>
            </div> */}
        </div>
  )
}

export default HeroBanner1