import Image from "next/image";
import styles from "../styles/Footer.module.css";
import footerBg from '../public/images/footerBg.png'

const Footer = () => {
  return (
    // <div className={styles.container}>
        <div className="container-fluid p-3" style={{background: `url(${footerBg.src})`, position: "relative", bottom: 0, left: 0}}>
            <div className="row my-5" style={{padding: "2rem 7rem"}}>
                <div className="col-3">
                    <Image src={'/logoAndIcons/logo2.png'} width="70px" height="70px" />
                </div>
                <div className="col-3">
                    <h4 className="text-white mb-5">Contact</h4>
                    <ul className="list-group">
                        <li className="list-unstyled text-white-50">4, Oluwakemi Street, Shasha Road,<br/> Egbeda, Lagos.</li>
                        <li className="list-unstyled text-white-50 my-3"><span className="p-1 text-white" style={{background: "purple", borderRadius: "50%", marginRight: "5px"}}><i className="fa fa-phone" aria-hidden="true" /></span><span className="text-white">Phone:</span> +2349 0145 44520.</li>
                        <li className="list-unstyled text-white-50"><span className="p-1 text-white" style={{background: "lightPink", borderRadius: "50%", marginRight: "5px"}}><i className="fa fa-envelope-o" aria-hidden="true" /></span><span className="text-white">Email:</span> info@elonatech.com</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h4 className="text-white mb-5">Coperate</h4>
                    <ul className="list-group">
                        <li className="list-unstyled text-white-50">Home</li>
                        <li className="list-unstyled text-white-50">About</li>
                        <li className="list-unstyled text-white-50">Who we are</li>
                        <li className="list-unstyled text-white-50">Team Members</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h4 className="text-white mb-5">Services</h4>
                    <ul className="list-group">
                        <li className="list-unstyled text-white-50">Network Installation</li>
                        <li className="list-unstyled text-white-50">Server development</li>
                        <li className="list-unstyled text-white-50">App + Website Development</li>
                        <li className="list-unstyled text-white-50">Workstations</li>
                        <li className="list-unstyled text-white-50">Digital Martketing</li>
                        <li className="list-unstyled text-white-50">PBX/Video conferencing</li>
                        <li className="list-unstyled text-white-50">Livestreaming</li>
                    </ul>
                </div>
            </div>
            <div className="m-auto mt-5 d-flex justify-content-center">
                <div >
                <hr className="w-100 bg-light" />
                <span><small className="text-muted">Copyright (c) 2022 All rights reserved | Designed by Elonatech Nigeria Limited</small></span>
                </div>
            </div>
        </div>
  );
};

export default Footer;