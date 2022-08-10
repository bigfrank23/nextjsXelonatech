import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  
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
  const [digitalMarketMouseOver, setDigitalMarketMouseOver] = useState(false)
  const [graphicsMouseOver, setGraphicsMouseOver] = useState(false)
  const [videoMouseOver , setVideoMouseOver] = useState(false)
  const [teleMouseOver, setTeleMouseOver] = useState(false)

  // Scroll
  const [scroll, setScroll] = useState(false)

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
        if (window.scrollY > 500) {
          setScroll(true)
          // console.log('Scroll Active');
      }else{
          setScroll(false)
      }
    })
  }, [])

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
    setDigitalMarketMouseOver(false)
    setGraphicsMouseOver(false)
    setVideoMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleDigitalMarketMouseOver = () => {
    setDigitalMarketMouseOver(true)
    setWebMouseOver(false)
    setGraphicsMouseOver(false)
    setVideoMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleGraphicsMouseOver = () => {
    setGraphicsMouseOver(true)
    setDigitalMarketMouseOver(false)
    setWebMouseOver(false)
    setVideoMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleVideoMouseOver = () => {
    setVideoMouseOver(true)
    setGraphicsMouseOver(false)
    setDigitalMarketMouseOver(false)
    setWebMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleTeleMouseOver = () => {
    setTeleMouseOver(true)
    setVideoMouseOver(false)
    setGraphicsMouseOver(false)
    setDigitalMarketMouseOver(false)
    setWebMouseOver(false)
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
    <div className={scroll ? styles.activeContainer : styles.container}>
        <div className={styles.logoBox}>
          <Link href='/'>
          <img src="/logoAndIcons/logo.png" alt="elonatechLogo" width="200px" height="100%"  />
          </Link>
          {/* <Image src="/logoAndIcons/logo.png" alt="elonatechLogo" width="200px" height="100%" /> */}
        </div>
        <ul className={styles.list}>
          <Link href='/'>
            <li className={styles.listItem}><i className="fa fa-home" aria-hidden="true" /></li>
          </Link>

          {/* Solutions */}
          <li className={styles.listItem}>Solutions <span><i className="fa fa-angle-down" aria-hidden="true" /></span>
              <ul className={styles.innerListContainer}>
                <li className={styles.innerListItemLeft}>
                  <ul className={styles.innerListContentLeft}>
                    <li className={techMouseEnter ? styles.innerListItemContentLeftActive : styles.innerListItemContentLeft} onMouseEnter={handleTechMouseEnter}>Tech Solutions <span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span></li>
                    <li className={digitalMouseEnter ? styles.innerListItemContentLeftActive : styles.innerListItemContentLeft} onMouseEnter={handleDigitalMouseEnter}>Digital Solutions <span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span></li>
                    <li className={salesMouseEnter ? styles.innerListItemContentLeftActive : styles.innerListItemContentLeft}onMouseEnter={handleSalesMouseEnter}>Sales <span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span></li>
                  </ul>
                </li>
                <hr className={styles.line} />
                <li className={styles.innerListItemRight}>
                  <ul className={styles.innerListContentRight}>
                    <li className={styles.innerListItemContentRight}>
                      <ul className={techMouseEnter ? styles.innerListItemContentRightTechListActive : styles.innerListItemContentRightTechList}>
                        <li className={styles.innerListItemContentRightTechListItem} onMouseEnter={handleHardwareMouseOver}><h6 className={hardwareMouseOver ? styles.innerListItemContentRightTechListTitleActive : styles.innerListItemContentRightTechListTitle}>Hardware Solutions</h6>
                          <ul className={hardwareMouseOver ? styles.hardwareSolutionsListActive : styles.hardwareSolutionsList}>
                            <Link href='/computers/Computers'>
                              <li className={styles.hardwareSolutionsListItem}>
                              <img src="https://img.icons8.com/dotty/80/000000/computer.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Computer Engineering
                              </li>
                            </Link>
                            <Link href='/printers/Printers'>
                              <li className={styles.hardwareSolutionsListItem}>
                              <img src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-printer-stationery-and-office-wanicon-lineal-wanicon.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Printer Repair & Maintenance
                              </li>
                            </Link>
                            <Link href='/mobileDevices/MobileDevices'>
                              <li className={styles.hardwareSolutionsListItem}>
                              <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-mobile-phone-devices-icongeek26-outline-icongeek26.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Mobile Device Repair
                              </li>
                            </Link>
                            <Link href='/networkingEquipment/NetworkingEquipment'>
                              <li className={styles.hardwareSolutionsListItem}>
                              <img src="https://img.icons8.com/ios/50/000000/outlet-switch.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Network Equipment Maintenance
                              </li>
                            </Link>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightTechListItem} onMouseEnter={handleNetworkMouseOver}> <h6 className={networkMouseOver ? styles.innerListItemContentRightTechListTitleActive : styles.innerListItemContentRightTechListTitle}>Network Admin/Eng</h6> 
                          <ul className={networkMouseOver ? styles.networkAdministrationListActive : styles.networkAdministrationList}>
                          <Link href="/networkAdmin/NetworkAdmin">
                            <li className={styles.networkAdministrationListItem}>
                            <img src="https://img.icons8.com/ios-filled/344/networking-manager.png" alt="productIcon" style={{alignSelf: "center", width: "50px", height: "50px", objectFit: "contain"}} />
                              Network Admin/Implementation
                            </li>
                          </Link>
                          <Link href='/ServerAdmin'>
                            <li className={styles.networkAdministrationListItem}>
                            <img src="/logoAndIcons/data.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Server Administration
                            </li>
                          </Link>
                          <Link href='/SystemIntegration'>
                            <li className={styles.networkAdministrationListItem}>
                            <img src="/logoAndIcons/system.png" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain", alignSelf: "center"}} />
                              {/* Infrastructure / System Integration */}
                            </li>
                          </Link>
                          <Link href='/StructuredCabling'>
                            <li className={styles.networkAdministrationListItem}>
                            <img src="/logoAndIcons/networkCables.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Structured cabling
                            </li>
                          </Link>
                          <Link href='/CCTVinstallation'>
                            <li className={styles.networkAdministrationListItem}>
                            <img src="https://img.icons8.com/dotty/80/000000/wallmount-camera.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              CCTV Installation
                            </li>
                          </Link>
                            <li className={styles.networkAdministrationListItem}>
                            <img src="/logoAndIcons/internet.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Internet Solutions
                            </li>
                            <li className={styles.networkAdministrationListItem}>
                            <img src="https://img.icons8.com/external-vectorslab-detailed-outline-vectorslab/68/000000/external-Network-Security-gdpr-vectorslab-detailed-outline-vectorslab.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Network Security
                            </li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightTechListItem} onMouseEnter={handleSystemMouseOver}> <h6 className={systemMouseOver ? styles.innerListItemContentRightTechListTitleActive : styles.innerListItemContentRightTechListTitle}>System Security</h6> 
                          <ul className={systemMouseOver ? styles.systemSecurityListActive : styles.systemSecurityList}>
                            <li className={styles.systemSecurityListListItem}>
                            <img src="https://img.icons8.com/wired/64/000000/behavior-blocker.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Access Control
                            </li>
                            <li className={styles.systemSecurityListListItem}>
                            <img src="/logoAndIcons/time.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Time Management Solutions
                            </li>
                            <li className={styles.systemSecurityListListItem}>
                            <img src="/logoAndIcons/surveillance.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Surveilance
                            </li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightTechListItem} onMouseEnter={handleTelecomMouseOver}><h6 className={telecomMouseOver ? styles.innerListItemContentRightTechListTitleActive : styles.innerListItemContentRightTechListTitle}>Telecoms</h6>
                          <ul className={telecomMouseOver ? styles.telecomsListActive : styles.telecomsList}>
                            <li className={styles.telecomsListListItem}>
                            <img src="https://cdn0.iconfinder.com/data/icons/computer-networking-1-1/66/97-512.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              IP Telephony & PBX Systems
                            </li>
                            <li className={styles.telecomsListListItem}>
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/voip-technology-2049624-1732701.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              VoIP
                            </li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightTechListItem} onMouseEnter={handleSoftwareMouseOver}> <h6 className={softwareMouseOver ? styles.innerListItemContentRightTechListTitleActive : styles.innerListItemContentRightTechListTitle}>Software Solutions</h6> 
                          <ul className={softwareMouseOver ? styles.softwareSolutionsListActive : styles.softwareSolutionsList}>
                            <li className={styles.softwareSolutionsListListItem}>
                            <img src="https://static.vecteezy.com/system/resources/previews/005/377/464/non_2x/upgrade-of-software-line-icon-computer-system-update-linear-pictogram-download-process-icon-progress-of-upgrade-illustration-vector.jpg" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              System Software
                            </li>
                            <li className={styles.softwareSolutionsListListItem}>
                              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtNDYxLjUxIDU1Ni44OHYtMjAuMzkxaC0yODkuNDF2MjAuMzkxYzAgMTIuNDk2IDEwLjUyMyAyMy4wMjMgMjMuMDIzIDIzLjAyM2gyNzQuOTRjLTUuMjY1Ni01LjkyMTktOC41NTQ3LTE0LjQ3My04LjU1NDctMjMuMDIzeiIvPgogIDxwYXRoIGQ9Im01NTYuODggMTcyLjFjLTEyLjQ5NiAwLTIzLjAyIDEwLjUyMy0yMy4wMiAyMy4wMjN2NzEuNjk1aDQ2LjA0M3YtNzEuNjk1YzAtMTIuNS0xMC41MjctMjMuMDIzLTIzLjAyMy0yMy4wMjN6Ii8+CiAgPHBhdGggZD0ibTIzMC42NCAxOTUuMTJ2MzI4Ljg4aDIzNy40NWMzLjk0NTMgMCA2LjU3ODEgMi42MzI4IDYuNTc4MSA2LjU3ODF2MjYuOTY5YzAgMTIuNDk2IDEwLjUyMyAyMy4wMiAyMy4wMiAyMy4wMnMyMy4wMi0xMC41MjMgMjMuMDItMjMuMDJ2LTM2MS43NmMwLjAwMzkwNi04LjU1NDcgMy4yOTMtMTcuMTA1IDguNTU0Ny0yMy42ODRoLTI3NS42Yy0xMy4xNTYgMC0yMy4wMjMgMTAuNTIzLTIzLjAyMyAyMy4wMjN6bTE0NC43MSA5Ljg2MzNjNDQuNzI3IDAgODEuNTYyIDM2LjgzNiA4MS41NjIgODEuNTYycy0zNi44MzYgODEuNTYyLTgxLjU2MiA4MS41NjItODEuNTYyLTM2LjgzNi04MS41NjItODEuNTYyIDM2LjgzNi04MS41NjIgODEuNTYyLTgxLjU2MnptLTExMS44MiAxOTcuMzNoMjI0LjI5YzMuOTQ1MyAwIDYuNTc4MSAyLjYzMjggNi41NzgxIDYuNTc4MXMtMi42MzI4IDYuNTc4MS02LjU3ODEgNi41NzgxbC0yMjQuMjktMC4wMDM5MDZjLTMuOTQ1MyAwLTYuNTc4MS0yLjYzMjgtNi41NzgxLTYuNTc4MSAwLTMuOTQ1MyAyLjYyODktNi41NzQyIDYuNTc4MS02LjU3NDJ6bTAgNDAuNzgxaDIyNC4yOWMzLjk0NTMgMCA2LjU3ODEgMi42MzI4IDYuNTc4MSA2LjU3ODFzLTIuNjMyOCA2LjU3ODEtNi41NzgxIDYuNTc4MWwtMjI0LjI5LTAuMDAzOTA2Yy0zLjk0NTMgMC02LjU3ODEtMi42MzI4LTYuNTc4MS02LjU3ODEgMC0zLjk0NTMgMi42Mjg5LTYuNTc0MiA2LjU3ODEtNi41NzQyem0wIDQwLjc3N2gyMjQuMjljMy45NDUzIDAgNi41NzgxIDIuNjMyOCA2LjU3ODEgNi41NzgxIDAgMy45NDUzLTIuNjMyOCA2LjU3ODEtNi41NzgxIDYuNTc4MWgtMjI0LjI5Yy0zLjk0NTMgMC02LjU3ODEtMi42MzI4LTYuNTc4MS02LjU3ODEgMC0zLjk0NTMgMi42Mjg5LTYuNTc4MSA2LjU3ODEtNi41NzgxeiIvPgogIDxwYXRoIGQ9Im0zNTEuNjYgMjY2LjE2YzkuODY3Mi05Ljg2NzIgMjMuNjgtMTEuODQgMzUuNTItNy44OTQ1bC0zLjI4OTEgMC42NTYyNWMtMy4yODkxIDAuNjU2MjUtNS45MTggMy45NDUzLTUuMjYxNyA3Ljg5NDUgMC42NTYyNSAzLjI4OTEgNC42MDU1IDUuOTE4IDcuODk0NSA1LjI2MTdsMTkuMDc0LTMuOTQ1M2MzLjI4OTEtMC42NTYyNSA1LjkxOC00LjYwNTUgNS4yNjE3LTcuODk0NWwtMy45NDUzLTE5LjA3NGMtMC42NTYyNS0zLjI4OTEtMy45NDUzLTUuOTE4LTcuODk0NS01LjI2MTctMy4yODkxIDAuNjU2MjUtNS45MTggNC42MDU1LTUuMjYxNyA3Ljg5NDVsMC42NTYyNSAzLjI4OTFjLTE3LjEwMi03LjIzNDQtMzguMTQ4LTMuOTQ1My01MS45NjEgOS44NjcyLTIuNjMyOCAyLjYzMjgtMi42MzI4IDYuNTc4MSAwIDkuMjA3IDIuNjI4OSAyLjYzMjggNi41NzgxIDIuNjMyOCA5LjIwNyAweiIvPgogIDxwYXRoIGQ9Im0zMjYuNjcgMjk3LjczIDEuOTcyNy0xLjk3MjdjMS45NzI3IDE5LjA3NCAxNS4xMjkgMzQuODU5IDM0Ljg1OSA0MC4xMjEgMy4yODkxIDAuNjU2MjUgNy4yMzQ0LTEuMzE2NCA3Ljg5NDUtNC42MDU1IDAuNjU2MjUtMy4yODkxLTEuMzE2NC03LjIzNDQtNC42MDU1LTcuODk0NS0xMi40OTYtMy4yODkxLTIyLjM2My0xMy4xNTYtMjQuMzM2LTI2Ljk2OWwyLjYzMjggMi42MzI4YzIuNjMyOCAyLjYzMjggNi41NzgxIDIuNjMyOCA5LjIwNyAwLjY1NjI1IDIuNjMyOC0yLjYzMjggMi42MzI4LTYuNTc4MSAwLjY1NjI1LTkuMjA3bC0xMy4xNTYtMTQuNDY5Yy0yLjYzMjgtMi42MzI4LTYuNTc4MS0yLjYzMjgtOS4yMDctMC42NTYyNWwtMTQuNDY5IDEzLjE1NmMtMi42MzI4IDIuNjMyOC0yLjYzMjggNi41NzgxLTAuNjU2MjUgOS4yMDcgMS45Njg4IDIuNjI4OSA2LjU3NDIgMi42Mjg5IDkuMjA3IDB6Ii8+CiAgPHBhdGggZD0ibTQwNy41NyAyODAuNjNjMy45NDUzIDEzLjE1Ni0wLjY1NjI1IDI2Ljk2OS0xMS4xODQgMzUuNTJsMS4zMTY0LTQuNjA1NWMxLjMxNjQtMy4yODkxLTAuNjU2MjUtNy4yMzQ0LTQuNjA1NS03Ljg5NDUtMy4yODkxLTEuMzE2NC03LjIzNDQgMC42NTYyNS03Ljg5NDUgNC42MDU1bC01LjkxOCAxOC40MThjLTEuMzE2NCAzLjI4OTEgMC42NTYyNSA3LjIzNDQgMy45NDUzIDcuODk0NWwxOS4wNzQgNi41NzgxYzMuMjg5MSAxLjMxNjQgNy4yMzQ0LTAuNjU2MjUgOC41NTA4LTMuOTQ1MyAxLjMxNjQtMy4yODkxLTAuNjU2MjUtNy4yMzQ0LTMuOTQ1My04LjU1MDhsLTMuMjg5MS0xLjMxNjRjMTUuMTI5LTExLjE4NCAyMy4wMi0zMC45MTQgMTcuMTAyLTUwLjY0OC0xLjMxNjQtMy4yODkxLTQuNjA1NS01LjI2MTctNy44OTQ1LTQuNjA1NS00LjYwMTYgMS4zMTI1LTYuNTc0MiA1LjI2MTctNS4yNTc4IDguNTUwOHoiLz4KIDwvZz4KPC9zdmc+Cg==" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Application Software
                            </li>
                            <li className={styles.softwareSolutionsListListItem}>
                            <img src="/logoAndIcons/business.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}} />
                              Business Application Software
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className={styles.innerListItemContentRight}>
                      <ul className={digitalMouseEnter ? styles.innerListItemContentRightDigitalListActive : styles.innerListItemContentRightDigitalList}>
                        <li className={styles.innerListItemContentRightDigitalListItem} onMouseEnter={handleWebMouseOver}><h6 className={webMouseOver ? styles.innerListItemContentRightTechListTitleActive : styles.innerListItemContentRightTechListTitle}>Web Solutions</h6>
                          <ul className={webMouseOver ? styles.webSolutionsListActive : styles.webSolutionsList}>
                            <Link href='/WebDesignAndDevelopment'>
                              <li className={styles.webSolutionsListItem}>
                              <img src="https://img.icons8.com/ios/50/000000/developer-mode--v1.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                                Web Design/Dev.
                              </li>
                            </Link>
                            <li className={styles.webSolutionsListItem}>
                            <img src="https://cdn-icons-png.flaticon.com/512/921/921515.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              Domain Reg./DNS Mgt 
                            </li>
                            <li className={styles.webSolutionsListItem}>
                            <img src="https://cdn-icons-png.flaticon.com/512/860/860276.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              Web Hosting/Customized Email
                            </li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightDigitalListItem} onMouseEnter={handleDigitalMarketMouseOver}><h6 className={digitalMarketMouseOver? styles.innerListItemContentRightTechListTitleActive : styles.innerListItemContentRightTechListTitle}>Digital Marketing</h6> 
                          <ul className={digitalMarketMouseOver ? styles.digitalMarketingListActive : styles.digitalMarketingList}>
                            <li className={styles.digitalMarketingListItem}>
                            <img src="https://cdn-icons-png.flaticon.com/512/1997/1997928.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              Social Media Marketing
                            </li>
                            <li className={styles.digitalMarketingListItem}>
                            <img src="https://cdn-icons-png.flaticon.com/512/5599/5599556.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              Email Marketing
                            </li>
                            <li className={styles.digitalMarketingListItem}>
                            <img src="https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/32/000000/external-seo-marketing-and-seo-yogi-aprelliyanto-glyph-yogi-aprelliyanto-2.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              SEO
                            </li>
                            <li className={styles.digitalMarketingListItem}>
                            <img src="https://cdn-icons-png.flaticon.com/512/2405/2405070.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              Content Marketing
                            </li>
                            <li className={styles.digitalMarketingListItem}>
                            <img src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/99/000000/external-ppc-shipping-delivery-and-fulfillment-smashingstocks-hand-drawn-black-smashing-stocks.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              PPC/CPI 
                            </li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightDigitalListItem} onMouseEnter={handleGraphicsMouseOver}><h6 className={graphicsMouseOver? styles.innerListItemContentRightTechListTitleActive : styles.innerListItemContentRightTechListTitle}>Graphics</h6>
                          <ul className={graphicsMouseOver ? styles.graphicsListActive : styles.graphicsList}>
                            <li className={styles.graphicsListListItem}>
                            <img src="https://cdn-icons-png.flaticon.com/512/1253/1253360.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              Brand Development
                            </li>
                            <li className={styles.graphicsListListItem}>
                            <img src="https://cdn-icons-png.flaticon.com/512/6497/6497701.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              UI/UX & Prototyping
                            </li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightDigitalListItem} onMouseEnter={handleVideoMouseOver}><h6 className={videoMouseOver? styles.innerListItemContentRightTechListTitleActive : styles.innerListItemContentRightTechListTitle}>Video Animations</h6>
                          <ul className={videoMouseOver ? styles.videoAnimationsListActive : styles.videoAnimationsList}>
                            <li className={styles.videoAnimationsListListItem}>
                            <img src="https://img.icons8.com/dotty/80/000000/3d-select.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              2D/3D Animations
                            </li>
                            <li className={styles.videoAnimationsListListItem}>
                            <img src="https://cdn-icons-png.flaticon.com/128/1633/1633071.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              Motion Graphics
                            </li>
                            <li className={styles.videoAnimationsListListItem}>
                            <img src="https://img.icons8.com/ios-filled/50/000000/video-editing.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              Video Editing
                            </li>
                          </ul>
                        </li>
                        <li className={styles.innerListItemContentRightDigitalListItem} onMouseEnter={handleTeleMouseOver}><h6 className={teleMouseOver? styles.innerListItemContentRightTechListTitleActive : styles.innerListItemContentRightTechListTitle}>Teleconferencing</h6>
                          <ul className={teleMouseOver ? styles.teleconferencingListActive : styles.teleconferencingList}>
                            <li className={styles.teleconferencingListListItem}>
                            <img src="https://cdn-icons-png.flaticon.com/512/2177/2177994.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              Livestreaming
                            </li>
                            <li className={styles.teleconferencingListListItem}>
                            <img src="https://cdn-icons-png.flaticon.com/512/3169/3169113.png" alt="productIcon" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}} />
                              Videoconferencing
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className={styles.innerListItemContentRight}>
                      <ul className={salesMouseEnter ? styles.innerListItemContentRightSalesListActive : styles.innerListItemContentRightSalesList}>
                        <li className={styles.innerListItemContentRightSalesListItem}>
                          {/* <h6 className={salesMouseEnter? styles.innerListItemContentRightTechListTitleActive : styles.innerListItemContentRightTechListTitle}>Computer Equipments</h6> */}
                          <img src="https://img.icons8.com/ios/50/000000/workstation.png" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/>
                          Computer Equipments
                        </li>
                        <li className={styles.innerListItemContentRightSalesListItem}>
                          {/* <h6 className={styles.innerListItemContentRightTechListTitleActive}>Printers, Copiers, Scanners</h6> */}
                          <img src="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000/external-Printer-printers-simple-solid-edt.graphics-10.png" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/>
                          Printers, Copiers, Scanners
                          </li>
                        <li className={styles.innerListItemContentRightSalesListItem}>
                          {/* <h6 className={styles.innerListItemContentRightTechListTitleActive}>Office Equipments</h6> */}
                        <img src="https://img.icons8.com/dotty/80/000000/home-office.png" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/>
                        Office Equipments
                        </li>
                        <li className={styles.innerListItemContentRightSalesListItem}>
                          {/* <h6 className={styles.innerListItemContentRightTechListTitleActive}>Office Equipments</h6> */}
                        <img src="https://img.icons8.com/external-itim2101-fill-itim2101/64/1A1A1A/external-networking-network-technology-itim2101-fill-itim2101-1.png" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/>
                        Networking Equipments
                        </li>
                        <li className={styles.innerListItemContentRightSalesListItem}>
                          {/* <h6 className={styles.innerListItemContentRightTechListTitleActive}>Office Equipments</h6> */}
                        <img src="https://img.icons8.com/ios/50/000000/receipt-terminal.png" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/>
                        POS System
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
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
                  <Link href='/whoWeAre/WhoWeAre2'>
                    <li className={styles.mainDropdownLeftListItem}>
                    Our Company<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                  </Link>
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
        </ul>
    </div>
  );
};

export default Navbar;