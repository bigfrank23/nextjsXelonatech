import React from 'react'
import styles from '../../styles/WhatWeDoBest.module.css'
import Link from 'next/link'

const WhatWeDoBest = () => {
  return (
    <div className='container' style={{marginBottom: '9rem'}}>
        <h3 className="text-center">What we do best</h3>
        <hr className='m-auto my-3' style={{background: 'red', width: "50px", height: "2px"}} />
        <div className={styles.rowd}>
            <div className={styles.WhatWeDoBestCard}>
                <div className={styles.WhatWeDoBestInnerCard}>
                    <div className={styles.WhatWeDoBestInnerCardImg} style={{background: `url('/images/web-design.jpg')`}}>
                        <div className={styles.halfOverlay}>
                            <h3>Web design & Development</h3>
                            <img src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/000000/external-website-design-digital-marketing-smashingstocks-detailed-outline-smashing-stocks.png"/>
                        </div>
                        <div className={styles.fullOverlay}>
                        <h3 className='text-center'>Web design & Development</h3>
                            <img className='my-2' src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/000000/external-website-design-digital-marketing-smashingstocks-detailed-outline-smashing-stocks.png"/>
                            <p className='text-center'>At Elonatech, we build websites that are not only visually beautiful but also functionally effective. Our team of web strategists, designers, developers, and project managers work together to help clients meet their business objectives...</p>
                            <div className="text-center">
                                <Link href='#'>
                                    <button type="button" className="btn btn-outline-danger text-white">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.WhatWeDoBestCard}>
                <div className={styles.WhatWeDoBestInnerCard}>
                    <div className={styles.WhatWeDoBestInnerCardImg} style={{background: `url('/images/digital-marketing.jpg')`}}>
                        <div className={styles.halfOverlay}>
                            <h3>Digital Marketing</h3>
                            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-digital-marketing-digital-marketing-flatart-icons-outline-flatarticons.png"/>
                        </div>
                        <div className={styles.fullOverlay}>
                        <h3 className='text-center'>Digital Marketing</h3>
                            <img className='my-2' src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-digital-marketing-digital-marketing-flatart-icons-outline-flatarticons.png"/>
                            <p className='text-center'>With Digital marketing, we have successfully changed the way brands and businesses use technology for marketing. Digital platforms are increasingly incorporated into marketing plans and everyday life, and with the high rise in the use of digital devices instead...</p>
                            <div className="text-center">
                                <Link href='#'>
                                    <button type="button" className="btn btn-outline-danger text-white">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.WhatWeDoBestCard}>
                <div className={styles.WhatWeDoBestInnerCard}>
                    <div className={styles.WhatWeDoBestInnerCardImg} style={{background: `url('/images/branding.jpg')`}}>
                        <div className={styles.halfOverlay}>
                            <h3>Graphics & Branding</h3>
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/poster.png"/>
                        </div>
                        <div className={styles.fullOverlay}>
                        <h3 className='text-center'>Graphics & Branding</h3>
                            <img className='my-2' src="https://img.icons8.com/ios-glyphs/30/000000/poster.png"/>
                            <p className='text-center'>Elonatech Nigeria Limited, in a bid to serve you better, has included Corporate branding in their services; Which includes: logo design, complimentary card, and ID card design, E-invoice & letterhead design, uniform social media handles, ...</p>
                            <div className="text-center">
                                <Link href='#'>
                                    <button type="button" className="btn btn-outline-danger text-white">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.WhatWeDoBestCard}>
                <div className={styles.WhatWeDoBestInnerCard}>
                    <div className={styles.WhatWeDoBestInnerCardImg} style={{background: `url('/images/sales.jpg')`}}>
                        <div className={styles.halfOverlay}>
                            <h3>Network engineering / Administration</h3>
                            <img src="https://img.icons8.com/dotty/80/000000/total-sales-1.png"/>
                        </div>
                        <div className={styles.fullOverlay}>
                        <h3 className='text-center'>Network engineering / Administration</h3>
                            <img className='my-2' src="https://img.icons8.com/dotty/80/000000/total-sales-1.png"/>
                            <p className='text-center'>
                                Elonatech Nigeria Limited is built on the assumption that the management of information technology for business is not inherently a do-it-yourself prospect. Smart business people who aren&apos;t tech-savvy need to find quality vendors of reliable hardware, software, service, and support...</p>
                            <div className="text-center">
                                <Link href='#'>
                                    <button type="button" className="btn btn-outline-danger text-white">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.WhatWeDoBestCard}>
                <div className={styles.WhatWeDoBestInnerCard}>
                    <div className={styles.WhatWeDoBestInnerCardImg} style={{background: `url('/images/networking.jpg')`}}>
                        <div className={styles.halfOverlay}>
                            <h3>Computer engineering</h3>
                            <img src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-networking-cryptocurrency-block-chain-becris-lineal-becris.png"/>
                        </div>
                        <div className={styles.fullOverlay}>
                        <h3 className='text-center'>Computer engineering</h3>
                            <img className='my-2' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-networking-cryptocurrency-block-chain-becris-lineal-becris.png"/>
                            <p className='text-center'>
                                Network administration involves a wide array of operational tasks that help a network to run smoothly and efficiently. This includes activities such as the deployment, configuration, maintenance, and monitoring of an active network...</p>
                            <div className="text-center">
                                <Link href='#'>
                                    <button type="button" className="btn btn-outline-danger text-white">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.WhatWeDoBestCard}>
                <div className={styles.WhatWeDoBestInnerCard}>
                    <div className={styles.WhatWeDoBestInnerCardImg} style={{background: `url('/images/networking.jpg')`}}>
                        <div className={styles.halfOverlay}>
                            <h3>Access control & Survailance</h3>
                            <img src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-networking-cryptocurrency-block-chain-becris-lineal-becris.png"/>
                        </div>
                        <div className={styles.fullOverlay}>
                        <h3 className='text-center'>Access control & Survailance</h3>
                            <img className='my-2' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-networking-cryptocurrency-block-chain-becris-lineal-becris.png"/>
                            <p className='text-center'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio expedita, aut possimus labore non sit libero eaque autem molestias reiciendis?...</p>
                            <div className="text-center">
                                <Link href='#'>
                                    <button type="button" className="btn btn-outline-danger text-white">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.WhatWeDoBestCard}>
                <div className={styles.WhatWeDoBestInnerCard}>
                    <div className={styles.WhatWeDoBestInnerCardImg} style={{background: `url('/images/sales.jpg')`}}>
                        <div className={styles.halfOverlay}>
                            <h3>Animations & motion graphics/ Video Editing</h3>
                            <img src="https://img.icons8.com/dotty/80/000000/total-sales-1.png"/>
                        </div>
                        <div className={styles.fullOverlay}>
                        <h3 className='text-center'>Animations & motion graphics/ Video Editing</h3>
                            <img className='my-2' src="https://img.icons8.com/dotty/80/000000/total-sales-1.png"/>
                            <p className='text-center'>
                                Elonatech Nigeria Limited is built on the assumption that the management of information technology for business is not inherently a do-it-yourself prospect. Smart business people who aren&apos;t tech-savvy need to find quality vendors of reliable hardware, software, service, and support...</p>
                            <div className="text-center">
                                <Link href='#'>
                                    <button type="button" className="btn btn-outline-danger text-white">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.WhatWeDoBestCard}>
                <div className={styles.WhatWeDoBestInnerCard}>
                    <div className={styles.WhatWeDoBestInnerCardImg} style={{background: `url('/images/networking.jpg')`}}>
                        <div className={styles.halfOverlay}>
                            <h3>Livestreaming & Videoconferencing</h3>
                            <img src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-networking-cryptocurrency-block-chain-becris-lineal-becris.png"/>
                        </div>
                        <div className={styles.fullOverlay}>
                        <h3 className='text-center'>Livestreaming & Videoconferencing</h3>
                            <img className='my-2' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-networking-cryptocurrency-block-chain-becris-lineal-becris.png"/>
                            <p className='text-center'>
                                Network administration involves a wide array of operational tasks that help a network to run smoothly and efficiently. This includes activities such as the deployment, configuration, maintenance, and monitoring of an active network...</p>
                            <div className="text-center">
                                <Link href='#'>
                                    <button type="button" className="btn btn-outline-danger text-white">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.WhatWeDoBestCard}>
                <div className={styles.WhatWeDoBestInnerCard}>
                    <div className={styles.WhatWeDoBestInnerCardImg} style={{background: `url('/images/networking.jpg')`}}>
                        <div className={styles.halfOverlay}>
                            <h3>Consulting</h3>
                            <img src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-networking-cryptocurrency-block-chain-becris-lineal-becris.png"/>
                        </div>
                        <div className={styles.fullOverlay}>
                        <h3 className='text-center'>Consulting</h3>
                            <img className='my-2' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-networking-cryptocurrency-block-chain-becris-lineal-becris.png"/>
                            <p className='text-center'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio expedita, aut possimus labore non sit libero eaque autem molestias reiciendis?...</p>
                            <div className="text-center">
                                <Link href='#'>
                                    <button type="button" className="btn btn-outline-danger text-white">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDoBest