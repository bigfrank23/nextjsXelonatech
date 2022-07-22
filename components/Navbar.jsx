import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [solutionsSlideNav1, setSolutionsSlideNav1] = useState(false)
  const [solutionsSlideNav2, setSolutionsSlideNav2] = useState(false)
  const [solutionsSlideNav3, setSolutionsSlideNav3] = useState(false)
  const [solutionsSlideNav4, setSolutionsSlideNav4] = useState(false)
  
  const [productsSlideNav1, setProductsSlideNav1] = useState(false)
  const [productsSlideNav2, setProductsSlideNav2] = useState(false)
  const [productsSlideNav3, setProductsSlideNav3] = useState(false)
  const [productsSlideNav4, setProductsSlideNav4] = useState(false)

  const [techMouseEnter, setTechMouseEnter] = useState(true)
  const [digitalMouseEnter, setDigitalMouseEnter] = useState(false)
  const [salesMouseEnter, setSalesMouseEnter] = useState(false)

  const [hardwareMouseOver, setHardwareMouseOver] = useState(true)
  const [networkMouseOver, setNetworkMouseOver] = useState(false)
  const [systemMouseOver, setSystemMouseOver] = useState(false)
  const [telecomMouseOver, setTelecomMouseOver] = useState(false)
  const [softwareMouseOver, setSoftwareMouseOver] = useState(false)

  const [webMouseOver, setWebMouseOver] = useState(true)
  const [digitalMouseOver, setDigitalMouseOver] = useState(false)
  const [graphicsMouseOver, setGraphicsMouseOver] = useState(false)
  const [videoMouseOver , setVideoMouseOver] = useState(false)
  const [teleMouseOver, setTeleMouseOver] = useState(false)

  const handleTechMouseEnter = () => {
    setTechMouseEnter(true)
    setDigitalMouseEnter(false)
    setSalesMouseEnter(false)
  }
  const handleDigitalMouseEnter = () => {
    setDigitalMouseEnter(true)
    setSalesMouseEnter(false)
    setTechMouseEnter(false)
  }
  const handleSalesMouseEnter = () => {
    setSalesMouseEnter(true)
    setTechMouseEnter(false)
    setDigitalMouseEnter(false)
  }

  const handleHardwareMouseOver = () => {
    setHardwareMouseOver(true)
    setNetworkMouseOver(false)
    setSystemMouseOver(false)
    setTelecomMouseOver(false)
    setSoftwareMouseOver(false)
  }
  const handleNetworkMouseOver = () => {
    setNetworkMouseOver(true)
    setHardwareMouseOver(false)
    setSystemMouseOver(false)
    setTelecomMouseOver(false)
    setSoftwareMouseOver(false)
  }
  const handleSystemMouseOver = () => {
    setSystemMouseOver(true)
    setNetworkMouseOver(false)
    setHardwareMouseOver(false)
    setTelecomMouseOver(false)
    setSoftwareMouseOver(false)
  }
  const handleTelecomMouseOver = () => {
    setTelecomMouseOver(true)
    setSystemMouseOver(false)
    setNetworkMouseOver(false)
    setHardwareMouseOver(false)
    setSoftwareMouseOver(false)
  }
  const handleSoftwareMouseOver = () => {
    setSoftwareMouseOver(true)
    setTelecomMouseOver(false)
    setSystemMouseOver(false)
    setNetworkMouseOver(false)
    setHardwareMouseOver(false)
  }
  
  // 
  const handleWebMouseOver = () => {
    setWebMouseOver(true)
    setDigitalMouseEnter(false)
    setGraphicsMouseOver(false)
    setVideoMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleDigitalMouseOver = () => {
    setDigitalMouseEnter(true)
    setWebMouseOver(false)
    setGraphicsMouseOver(false)
    setVideoMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleGraphicsMouseOver = () => {
    setGraphicsMouseOver(true)
    setDigitalMouseEnter(false)
    setWebMouseOver(false)
    setVideoMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleVideoMouseOver = () => {
    setVideoMouseOver(true)
    setGraphicsMouseOver(false)
    setDigitalMouseEnter(false)
    setWebMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleTeleMouseOver = () => {
    setTeleMouseOver(true)
    setVideoMouseOver(false)
    setGraphicsMouseOver(false)
    setDigitalMouseEnter(false)
    setWebMouseOver(false)
  }
  
  const handleSolution1 = () => {
    setSolutionsSlideNav1(true)
    setSolutionsSlideNav2(false)
    setSolutionsSlideNav3(false)
    setSolutionsSlideNav4(false)
  }
  const handleSolution2 = () => {
    setSolutionsSlideNav2(true)
    setSolutionsSlideNav1(false)
    setSolutionsSlideNav3(false)
    setSolutionsSlideNav4(false)
  }
  const handleSolution3 = () => {
    setSolutionsSlideNav3(true)
    setSolutionsSlideNav1(false)
    setSolutionsSlideNav2(false)
    setSolutionsSlideNav4(false)
  }
  const handleSolution4 = () => {
    setSolutionsSlideNav4(true)
    setSolutionsSlideNav1(false)
    setSolutionsSlideNav3(false)
    setSolutionsSlideNav2(false)
  }

  // Products
  const handleProducts1 = () => {
    setProductsSlideNav1(true)
    setProductsSlideNav2(false)
    setProductsSlideNav3(false)
    setProductsSlideNav4(false)
  }
  const handleProducts2 = () => {
    setProductsSlideNav2(true)
    setProductsSlideNav1(false)
    setProductsSlideNav3(false)
    setProductsSlideNav4(false)
  }
  const handleProducts3 = () => {
    setProductsSlideNav3(true)
    setProductsSlideNav1(false)
    setProductsSlideNav2(false)
    setProductsSlideNav4(false)
  }
  const handleProducts4 = () => {
    setProductsSlideNav4(true)
    setProductsSlideNav1(false)
    setProductsSlideNav3(false)
    setProductsSlideNav2(false)
  }
  return (
    <div className={styles.container}>
        <div className={styles.logoBox}>
          {/* <Image src="/logoAndIcons/logo.png" alt="elonatechLogo" width="200px" height="100%" /> */}
          <img src="/logoAndIcons/logo.png" alt="elonatechLogo" width="200px" height="100%"  />
      </div>
        <ul className={styles.list}>
          <li className={styles.listItem}><i className="fa fa-home" aria-hidden="true" /></li>

          {/* Solutions */}
          <li className={styles.listItem}>Solutions <span><i className="fa fa-angle-down" aria-hidden="true" /></span>
          <div className={styles.mainDropdownActive}>
              <div className={styles.mainDropdownLeft}>
                <ul className={styles.mainDropdownLeftList}>
                    <li className={solutionsSlideNav1 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onMouseOver={handleSolution1}>
                      Tech Solutions <span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={solutionsSlideNav2 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onMouseOver={handleSolution2}>
                      Digital Solutions<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={solutionsSlideNav3 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onMouseOver={handleSolution3}>
                      Sales <span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                </ul>
              </div>
                <div className={styles.mainDropdownRightActive}>
                  <ul className={solutionsSlideNav1  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>Hardware solutions
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://img.icons8.com/dotty/80/000000/computer.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Computers</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-printer-stationery-and-office-wanicon-lineal-wanicon.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Printers</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-mobile-phone-devices-icongeek26-outline-icongeek26.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Mobile devices</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://img.icons8.com/ios/50/000000/outlet-switch.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Networking Equipment</h5>
                      </li>
                    </ul>
                    </li>

                    <li className={styles.mainDropdownRightListItem}>Network Engineering / Administration
                    <ul className={styles.mainDropdownRightListItemList}>
                      <Link href="/networkAdmin/NetworkAdmin">
                        <li className={styles.mainDropdownRightListItemListItem}>
                          <img src="https://img.icons8.com/ios-filled/344/networking-manager.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                          <h5 style={{fontSize: "9px"}}>Network Administration /Implementation</h5>
                        </li>
                      </Link>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/data.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Server Administration</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/system.png" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Infrastructure /System Integration</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/networkCables.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Structured cabling</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://img.icons8.com/dotty/80/000000/wallmount-camera.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>CCTV Installation/Implementation</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/internet.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Internet Solutions</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://img.icons8.com/external-vectorslab-detailed-outline-vectorslab/68/000000/external-Network-Security-gdpr-vectorslab-detailed-outline-vectorslab.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Network Security</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Security Systems
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://img.icons8.com/wired/64/000000/behavior-blocker.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Access Control</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/time.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Time management solutions</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/surveillance.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Surveillance</h5>
                      </li>
                      {/* <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Solutions 1</h5>
                      </li> */}
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Telecoms
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn0.iconfinder.com/data/icons/computer-networking-1-1/66/97-512.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>IP Telephony & PBX Systems</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/voip-technology-2049624-1732701.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>VoIP</h5>
                      </li>
                      {/* <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Solutions 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Solutions 1</h5>
                      </li> */}
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Software Solutions
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://static.vecteezy.com/system/resources/previews/005/377/464/non_2x/upgrade-of-software-line-icon-computer-system-update-linear-pictogram-download-process-icon-progress-of-upgrade-illustration-vector.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>System Software</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtNDYxLjUxIDU1Ni44OHYtMjAuMzkxaC0yODkuNDF2MjAuMzkxYzAgMTIuNDk2IDEwLjUyMyAyMy4wMjMgMjMuMDIzIDIzLjAyM2gyNzQuOTRjLTUuMjY1Ni01LjkyMTktOC41NTQ3LTE0LjQ3My04LjU1NDctMjMuMDIzeiIvPgogIDxwYXRoIGQ9Im01NTYuODggMTcyLjFjLTEyLjQ5NiAwLTIzLjAyIDEwLjUyMy0yMy4wMiAyMy4wMjN2NzEuNjk1aDQ2LjA0M3YtNzEuNjk1YzAtMTIuNS0xMC41MjctMjMuMDIzLTIzLjAyMy0yMy4wMjN6Ii8+CiAgPHBhdGggZD0ibTIzMC42NCAxOTUuMTJ2MzI4Ljg4aDIzNy40NWMzLjk0NTMgMCA2LjU3ODEgMi42MzI4IDYuNTc4MSA2LjU3ODF2MjYuOTY5YzAgMTIuNDk2IDEwLjUyMyAyMy4wMiAyMy4wMiAyMy4wMnMyMy4wMi0xMC41MjMgMjMuMDItMjMuMDJ2LTM2MS43NmMwLjAwMzkwNi04LjU1NDcgMy4yOTMtMTcuMTA1IDguNTU0Ny0yMy42ODRoLTI3NS42Yy0xMy4xNTYgMC0yMy4wMjMgMTAuNTIzLTIzLjAyMyAyMy4wMjN6bTE0NC43MSA5Ljg2MzNjNDQuNzI3IDAgODEuNTYyIDM2LjgzNiA4MS41NjIgODEuNTYycy0zNi44MzYgODEuNTYyLTgxLjU2MiA4MS41NjItODEuNTYyLTM2LjgzNi04MS41NjItODEuNTYyIDM2LjgzNi04MS41NjIgODEuNTYyLTgxLjU2MnptLTExMS44MiAxOTcuMzNoMjI0LjI5YzMuOTQ1MyAwIDYuNTc4MSAyLjYzMjggNi41NzgxIDYuNTc4MXMtMi42MzI4IDYuNTc4MS02LjU3ODEgNi41NzgxbC0yMjQuMjktMC4wMDM5MDZjLTMuOTQ1MyAwLTYuNTc4MS0yLjYzMjgtNi41NzgxLTYuNTc4MSAwLTMuOTQ1MyAyLjYyODktNi41NzQyIDYuNTc4MS02LjU3NDJ6bTAgNDAuNzgxaDIyNC4yOWMzLjk0NTMgMCA2LjU3ODEgMi42MzI4IDYuNTc4MSA2LjU3ODFzLTIuNjMyOCA2LjU3ODEtNi41NzgxIDYuNTc4MWwtMjI0LjI5LTAuMDAzOTA2Yy0zLjk0NTMgMC02LjU3ODEtMi42MzI4LTYuNTc4MS02LjU3ODEgMC0zLjk0NTMgMi42Mjg5LTYuNTc0MiA2LjU3ODEtNi41NzQyem0wIDQwLjc3N2gyMjQuMjljMy45NDUzIDAgNi41NzgxIDIuNjMyOCA2LjU3ODEgNi41NzgxIDAgMy45NDUzLTIuNjMyOCA2LjU3ODEtNi41NzgxIDYuNTc4MWgtMjI0LjI5Yy0zLjk0NTMgMC02LjU3ODEtMi42MzI4LTYuNTc4MS02LjU3ODEgMC0zLjk0NTMgMi42Mjg5LTYuNTc4MSA2LjU3ODEtNi41NzgxeiIvPgogIDxwYXRoIGQ9Im0zNTEuNjYgMjY2LjE2YzkuODY3Mi05Ljg2NzIgMjMuNjgtMTEuODQgMzUuNTItNy44OTQ1bC0zLjI4OTEgMC42NTYyNWMtMy4yODkxIDAuNjU2MjUtNS45MTggMy45NDUzLTUuMjYxNyA3Ljg5NDUgMC42NTYyNSAzLjI4OTEgNC42MDU1IDUuOTE4IDcuODk0NSA1LjI2MTdsMTkuMDc0LTMuOTQ1M2MzLjI4OTEtMC42NTYyNSA1LjkxOC00LjYwNTUgNS4yNjE3LTcuODk0NWwtMy45NDUzLTE5LjA3NGMtMC42NTYyNS0zLjI4OTEtMy45NDUzLTUuOTE4LTcuODk0NS01LjI2MTctMy4yODkxIDAuNjU2MjUtNS45MTggNC42MDU1LTUuMjYxNyA3Ljg5NDVsMC42NTYyNSAzLjI4OTFjLTE3LjEwMi03LjIzNDQtMzguMTQ4LTMuOTQ1My01MS45NjEgOS44NjcyLTIuNjMyOCAyLjYzMjgtMi42MzI4IDYuNTc4MSAwIDkuMjA3IDIuNjI4OSAyLjYzMjggNi41NzgxIDIuNjMyOCA5LjIwNyAweiIvPgogIDxwYXRoIGQ9Im0zMjYuNjcgMjk3LjczIDEuOTcyNy0xLjk3MjdjMS45NzI3IDE5LjA3NCAxNS4xMjkgMzQuODU5IDM0Ljg1OSA0MC4xMjEgMy4yODkxIDAuNjU2MjUgNy4yMzQ0LTEuMzE2NCA3Ljg5NDUtNC42MDU1IDAuNjU2MjUtMy4yODkxLTEuMzE2NC03LjIzNDQtNC42MDU1LTcuODk0NS0xMi40OTYtMy4yODkxLTIyLjM2My0xMy4xNTYtMjQuMzM2LTI2Ljk2OWwyLjYzMjggMi42MzI4YzIuNjMyOCAyLjYzMjggNi41NzgxIDIuNjMyOCA5LjIwNyAwLjY1NjI1IDIuNjMyOC0yLjYzMjggMi42MzI4LTYuNTc4MSAwLjY1NjI1LTkuMjA3bC0xMy4xNTYtMTQuNDY5Yy0yLjYzMjgtMi42MzI4LTYuNTc4MS0yLjYzMjgtOS4yMDctMC42NTYyNWwtMTQuNDY5IDEzLjE1NmMtMi42MzI4IDIuNjMyOC0yLjYzMjggNi41NzgxLTAuNjU2MjUgOS4yMDcgMS45Njg4IDIuNjI4OSA2LjU3NDIgMi42Mjg5IDkuMjA3IDB6Ii8+CiAgPHBhdGggZD0ibTQwNy41NyAyODAuNjNjMy45NDUzIDEzLjE1Ni0wLjY1NjI1IDI2Ljk2OS0xMS4xODQgMzUuNTJsMS4zMTY0LTQuNjA1NWMxLjMxNjQtMy4yODkxLTAuNjU2MjUtNy4yMzQ0LTQuNjA1NS03Ljg5NDUtMy4yODkxLTEuMzE2NC03LjIzNDQgMC42NTYyNS03Ljg5NDUgNC42MDU1bC01LjkxOCAxOC40MThjLTEuMzE2NCAzLjI4OTEgMC42NTYyNSA3LjIzNDQgMy45NDUzIDcuODk0NWwxOS4wNzQgNi41NzgxYzMuMjg5MSAxLjMxNjQgNy4yMzQ0LTAuNjU2MjUgOC41NTA4LTMuOTQ1MyAxLjMxNjQtMy4yODkxLTAuNjU2MjUtNy4yMzQ0LTMuOTQ1My04LjU1MDhsLTMuMjg5MS0xLjMxNjRjMTUuMTI5LTExLjE4NCAyMy4wMi0zMC45MTQgMTcuMTAyLTUwLjY0OC0xLjMxNjQtMy4yODkxLTQuNjA1NS01LjI2MTctNy44OTQ1LTQuNjA1NS00LjYwMTYgMS4zMTI1LTYuNTc0MiA1LjI2MTctNS4yNTc4IDguNTUwOHoiLz4KIDwvZz4KPC9zdmc+Cg==" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Application Software</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/business.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Business Application Software</h5>
                      </li>
                      {/* <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Solutions 1</h5>
                      </li> */}
                    </ul>
                    </li>
                  </ul>
                </div>
                {/* Solutions Slide Nav 2 */}
                <div className={solutionsSlideNav2  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={solutionsSlideNav2  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>Web Solutions
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons.flaticon.com/png/512/2704/premium/2704022.png?token=exp=1657794529~hmac=6b6bee45e2db5d18e94adffa4dea0b52" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Web Design/Dev.</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/921/921515.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Domain Reg./DNS Mgt </h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/860/860276.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Web Hosting/Customized Email</h5>
                      </li>
                      {/* <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>solutions 2</h5>
                      </li> */}
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Digital Marketing
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1997/1997928.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Social Media Marketing</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5599/5599556.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Email Marketing</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons.flaticon.com/png/512/2977/premium/2977742.png?token=exp=1657794944~hmac=46998a720c727bf869f603ca560355ba" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>SEO</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2405/2405070.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Content Marketing </h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons.flaticon.com/png/512/5738/premium/5738539.png?token=exp=1657795263~hmac=861481f95d35ffb3a8b77673e4ea08c0" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>PPC/CPI </h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Graphics 
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1253/1253360.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Brand Development</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/6497/6497701.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>UI/UX & Prototyping</h5>
                      </li>
                      {/* <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Solutions 2</h5>
                      </li> */}
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Video Animations 
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons.flaticon.com/png/128/4449/premium/4449063.png?token=exp=1657795441~hmac=dc962389e7304314e11fb770ebdf0d2f" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2D/3D Animations</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons-png.flaticon.com/128/1633/1633071.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Motion Graphics</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://img.icons8.com/ios-filled/50/000000/video-editing.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Video Editing</h5>
                      </li>
                      {/* <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Solutions 2</h5>
                      </li> */}
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Teleconferencing
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2177/2177994.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Livestreaming</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3169/3169113.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>Videoconferencing</h5>
                      </li>
                      {/* <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Solutions 2</h5>
                      </li> */}
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* Solutions Slide Nav 3 */}
                <div className={solutionsSlideNav3  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={solutionsSlideNav3  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 solutions 3
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>solutions 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Solutions 3
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Solutions 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Solutions 3
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Solutions 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Solutions 3
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Solutions 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Solutions 3
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Solutions 3</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* Solutions Slide Nav 4 */}
                <div className={solutionsSlideNav4  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={solutionsSlideNav4  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 solutions 4
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>solutions 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Solutions 4
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Solutions 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Solutions 4
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Solutions 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Solutions 4
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Solutions 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Solutions 4
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Solutions 4</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>
            </div>
          </li>

           {/* Products */}
           <li className={styles.listItem}>Products <span><i className="fa fa-angle-down" aria-hidden="true" /></span>
          <div className={productsSlideNav1 || productsSlideNav2 || productsSlideNav3 || productsSlideNav4 ? styles.mainDropdownActive : styles.mainDropdown}>
              <div className={styles.mainDropdownLeft}>
                <ul className={styles.mainDropdownLeftList}>
                    <li className={productsSlideNav1 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleProducts1}>
                    Computers <span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={productsSlideNav2 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleProducts2}>
                    Printers<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={productsSlideNav3 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleProducts3}>
                    Office Equipment<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={productsSlideNav4 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleProducts4}>
                    POS Systems<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                </ul>
              </div>
                <div className={productsSlideNav1  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={productsSlideNav1  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 products 1
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 1</h5>
                      </li>
                    </ul>
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Products 1
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Products 1
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Products 1
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Products 1
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 1</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>
                {/* Products Slide Nav 2 */}
                <div className={productsSlideNav2  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={productsSlideNav2  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 products 2
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Products 2
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Products 2
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Products 2
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Products 2
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 2</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* Products Slide Nav 3 */}
                <div className={productsSlideNav3  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={productsSlideNav3  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 products 3
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Products 3
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Products 3
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Products 3
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Products 3
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 3</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* Products Slide Nav 4 */}
                <div className={productsSlideNav4  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={productsSlideNav4  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 products 4
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>products 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Products 4
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>2 Products 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Products 4
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>3 Products 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Products 4
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>4 Products 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Products 4
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "9px"}}>5 Products 4</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>
            </div>
          </li>

          {/* Support*/}
          <li className={styles.listItem}>Support <span><i className="fa fa-angle-down" aria-hidden="true" /></span>
            <div className={styles.mainDropdown}>
                <div className={styles.mainDropdownLeft}>
                  <ul className={styles.mainDropdownLeftList}>
                      <li className={styles.mainDropdownLeftListItem}>
                      Technical Support <span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                      </li>
                      <li className={styles.mainDropdownLeftListItem}>
                      Network Support<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                      </li>
                      <li className={styles.mainDropdownLeftListItem}>
                      Remote Support<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                      </li>
                      <li className={styles.mainDropdownLeftListItem}>
                      Administrative Support<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                      </li>
                  </ul>
                </div>
            </div>
          </li>
          
          {/* Consultancy */}
          {/* <li className={styles.listItem}>Consultancy <span><i className="fa fa-angle-down" aria-hidden="true" /></span>
          <div className={styles.mainDropdown}>
              <div className={styles.mainDropdownLeft}>
                <ul className={styles.mainDropdownLeftList}>
                    <li className={styles.mainDropdownLeftListItem}>
                    Retainer Patnership<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={styles.mainDropdownLeftListItem}>
                    Consulting<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={styles.mainDropdownLeftListItem}>
                    Training<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                </ul>
              </div>
            </div>
          </li> */}

          {/* Who we are */}
          <li className={styles.listItem}>Who we are <span><i className="fa fa-angle-down" aria-hidden="true" /></span>
          <div className={styles.mainDropdown}>
              <div className={styles.mainDropdownLeft}>
                <ul className={styles.mainDropdownLeftList}>
                    <li className={styles.mainDropdownLeftListItem}>
                    Our Company<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={styles.mainDropdownLeftListItem}>
                    Our Portfolio<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={styles.mainDropdownLeftListItem}>
                    Our Team<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={styles.mainDropdownLeftListItem}>
                    Our Blog<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={styles.mainDropdownLeftListItem}>
                    Career<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.listItem}>Get in touch</li>

          <li className={styles.listItem}>Solutions
              <ul className={styles.innerListContainer}>
                <li className={styles.innerListItemLeft}>
                  <ul className={styles.innerListContentLeft}>
                    <li className={styles.innerListItemContentLeft} onMouseEnter={handleTechMouseEnter}>Tech Solutions <span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span></li>
                    <li className={styles.innerListItemContentLeft} onMouseEnter={handleDigitalMouseEnter}>Digital Solutions <span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span></li>
                    <li className={styles.innerListItemContentLeft}onMouseEnter={handleSalesMouseEnter}>Sales <span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span></li>
                  </ul>
                </li>
                <li className={styles.innerListItemRight}>
                  <ul className={styles.innerListContentRight}>
                    <li className={styles.innerListItemContentRight}>
                      <ul className={techMouseEnter ? styles.innerListItemContentRightTechListActive : styles.innerListItemContentRightTechList}>
                        <li className={styles.innerListItemContentRightTechListItem} onMouseEnter={handleHardwareMouseOver}>Hardware Solutions
                          <ul className={hardwareMouseOver ? styles.hardwareSolutionsListActive : styles.hardwareSolutionsList}>
                            <li className="hardwareSolutionsListItem">Computers</li>
                            <li className="hardwareSolutionsListItem">Printers</li>
                            <li className="hardwareSolutionsListItem">Mobile Devices</li>
                            <li className="hardwareSolutionsListItem">Network Equipments</li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightTechListItem} onMouseEnter={handleNetworkMouseOver}>Network Administration / Engineering
                          <ul className={networkMouseOver ? styles.networkAdministrationListActive : styles.networkAdministrationList}>
                            <li className="networkAdministrationListItem">Network Administration /Implementation</li>
                            <li className="networkAdministrationListItem">Server Administration</li>
                            <li className="networkAdministrationListItem">Infrastructure / System Integration</li>
                            <li className="networkAdministrationListItem">Structured cabling</li>
                            <li className="networkAdministrationListItem">CCTV Installation / Implementation</li>
                            <li className="networkAdministrationListItem">Internet Solutions</li>
                            <li className="networkAdministrationListItem">Network Security</li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightTechListItem} onMouseEnter={handleSystemMouseOver}>System Security
                          <ul className={systemMouseOver ? styles.systemSecurityListActive : styles.systemSecurityList}>
                            <li className="systemSecurityListListItem">Access Control</li>
                            <li className="systemSecurityListListItem">Time Management Solutions</li>
                            <li className="systemSecurityListListItem">Surveilance</li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightTechListItem} onMouseEnter={handleTelecomMouseOver}>Telecoms
                          <ul className={telecomMouseOver ? styles.telecomsListActive : styles.telecomsList}>
                            <li className="telecomsListListItem">IP Telephony & PBX Systems</li>
                            <li className="telecomsListListItem">VoIP</li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightTechListItem} onMouseEnter={handleSoftwareMouseOver}>Software Solutions
                          <ul className={softwareMouseOver ? styles.softwareSolutionsListActive : styles.softwareSolutionsList}>
                            <li className="softwareSolutionsListListItem">System Software</li>
                            <li className="softwareSolutionsListListItem">Application Software</li>
                            <li className="softwareSolutionsListListItem">Business Application Software</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className={styles.innerListItemContentRight}>
                      <ul className={digitalMouseEnter ? styles.innerListItemContentRightDigitalListActive : styles.innerListItemContentRightDigitalList}>
                        <li className={styles.innerListItemContentRightDigitalListItem} onMouseEnter={handleWebMouseOver}>Web Solutions
                          <ul className={webMouseOver ? styles.webSolutionsListActive : styles.webSolutionsList}>
                            <li className="webSolutionsListItem">Web Design/Dev.</li>
                            <li className="webSolutionsListItem">Domain Reg./DNS Mgt </li>
                            <li className="webSolutionsListItem">Web Hosting/Customized Email</li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightDigitalListItem} onMouseEnter={handleDigitalMouseOver}>Digital Marketing
                          <ul className={digitalMouseOver ? styles.digitalMarketingListActive : styles.digitalMarketingList}>
                            <li className="digitalMarketingListItem">Social Media Marketing</li>
                            <li className="digitalMarketingListItem">Email Marketing</li>
                            <li className="digitalMarketingListItem">SEO</li>
                            <li className="digitalMarketingListItem">Content Marketing</li>
                            <li className="digitalMarketingListItem">PPC/CPI </li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightDigitalListItem} onMouseEnter={handleGraphicsMouseOver}>Graphics
                          <ul className={graphicsMouseOver ? styles.graphicsListActive : styles.graphicsList}>
                            <li className="graphicsListListItem">Brand Development</li>
                            <li className="graphicsListListItem">UI/UX & Prototyping</li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightDigitalListItem} onMouseEnter={handleVideoMouseOver}>Video Animations
                          <ul className={videoMouseOver ? styles.videoAnimationsListActive : styles.videoAnimationsList}>
                            <li className="videoAnimationsListListItem">2D/3D Animations</li>
                            <li className="videoAnimationsListListItem">Motion Graphics</li>
                            <li className="videoAnimationsListListItem">Video Editing</li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightDigitalListItem} onMouseEnter={handleTeleMouseOver}>Teleconferencing
                          <ul className={teleMouseOver ? styles.teleconferencingListActive : styles.teleconferencingList}>
                            <li className="teleconferencingListListItem">Livestreaming</li>
                            <li className="teleconferencingListListItem">Videoconferencing</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className={styles.innerListItemContentRight}>
                      <ul className={salesMouseEnter ? styles.innerListItemContentRightSalesListActive : styles.innerListItemContentRightSalesList}>
                        <li className={styles.innerListItemContentRightSalesListItem}>Computer Equipments</li>
                        <li className={styles.innerListItemContentRightSalesListItem}>Printers, Copiers, Scanners</li>
                        <li className={styles.innerListItemContentRightSalesListItem}>Office Equipments</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
          </li>
        </ul>
    </div>
  );
};

export default Navbar;