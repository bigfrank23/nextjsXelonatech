import Image from "next/image";
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

  const [whoWeAreSlideNav1, setWhoWeAreSlideNav1] = useState(false)
  const [whoWeAreSlideNav2, setWhoWeAreSlideNav2] = useState(false)
  const [whoWeAreSlideNav3, setWhoWeAreSlideNav3] = useState(false)
  const [whoWeAreSlideNav4, setWhoWeAreSlideNav4] = useState(false)
  const [slideNav, setSlideNav] = useState(false)

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

  // Who We Are
  const handleWhoWeAre1 = () => {
    setWhoWeAreSlideNav1(true)
    setWhoWeAreSlideNav2(false)
    setWhoWeAreSlideNav3(false)
    setWhoWeAreSlideNav4(false)
  }
  const handleWhoWeAre2 = () => {
    setWhoWeAreSlideNav2(true)
    setWhoWeAreSlideNav1(false)
    setWhoWeAreSlideNav3(false)
    setWhoWeAreSlideNav4(false)
  }
  const handleWhoWeAre3 = () => {
    setWhoWeAreSlideNav3(true)
    setWhoWeAreSlideNav1(false)
    setWhoWeAreSlideNav2(false)
    setWhoWeAreSlideNav4(false)
  }
  const handleWhoWeAre4 = () => {
    setWhoWeAreSlideNav4(true)
    setWhoWeAreSlideNav1(false)
    setWhoWeAreSlideNav3(false)
    setWhoWeAreSlideNav2(false)
  }
  return (
    <div className={styles.container}>
        <div className={styles.logoBox}>
          {/* <Image src="/logoAndIcons/logo.png" alt="elonatechLogo" width="200px" height="100%" /> */}
          <img src="/logoAndIcons/logo.png" alt="elonatechLogo" width="150px" height="100%"  />
      </div>
        <ul className={styles.list}>
          <li className={styles.listItem}><i className="fa fa-home" aria-hidden="true" /></li>

          {/* Solutions */}
          <li className={styles.listItem}>Solutions <span><i className="fa fa-angle-down" aria-hidden="true" /></span>
          <div className={solutionsSlideNav1 || solutionsSlideNav2 || solutionsSlideNav3 || solutionsSlideNav4 ? styles.mainDropdownActive : styles.mainDropdown}>
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
                    {/* <li className={solutionsSlideNav4 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onMouseOver={handleSolution4}>
                      solutions 4<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li> */}
                </ul>
              </div>
                <div className={solutionsSlideNav1  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={solutionsSlideNav1  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>Hardware solutions <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>Computers</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>Printers</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>Mobile devices</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>Networking Equipment</h5>
                      </li>
                    </ul>
                    {/* <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 1</h5>
                      </li>
                    </ul> */}
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Network Engineering <i className="fa fa-arrow-down" aria-hidden="true" />
                    {/* <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 1</h5>
                      </li>
                    </ul> */}
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Security Systems <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>Access Control</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>Time management solutions</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>Surveillance</h5>
                      </li>
                      {/* <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 1</h5>
                      </li> */}
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Telecoms <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>IP Telephony & PBX Systems</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>VoIP</h5>
                      </li>
                      {/* <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 1</h5>
                      </li> */}
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Software Solutions <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>System Software</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>Application Software</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>Business Application Software</h5>
                      </li>
                      {/* <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 1</h5>
                      </li> */}
                    </ul>
                    </li>
                  </ul>
                </div>
                {/* Solutions Slide Nav 2 */}
                <div className={solutionsSlideNav2  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={solutionsSlideNav2  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>Web Design & Development <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>User Interface & User Experience<i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Digital Marketing<i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Graphics and Branding <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>Product Design<i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 2</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* Solutions Slide Nav 3 */}
                <div className={solutionsSlideNav3  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={solutionsSlideNav3  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 solutions 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Solutions 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Solutions 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Solutions 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Solutions 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 3</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* Solutions Slide Nav 4 */}
                <div className={solutionsSlideNav4  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={solutionsSlideNav4  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 solutions 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>solutions 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Solutions 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Solutions 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Solutions 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Solutions 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Solutions 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Solutions 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Solutions 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Solutions 4</h5>
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
                    <li className={styles.mainDropdownRightListItem}>1 products 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 1</h5>
                      </li>
                    </ul>
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Products 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Products 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Products 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Products 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 1</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>
                {/* Products Slide Nav 2 */}
                <div className={productsSlideNav2  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={productsSlideNav2  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 products 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Products 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Products 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Products 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Products 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 2</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* Products Slide Nav 3 */}
                <div className={productsSlideNav3  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={productsSlideNav3  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 products 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Products 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Products 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Products 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Products 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 3</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* Products Slide Nav 4 */}
                <div className={productsSlideNav4  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={productsSlideNav4  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 products 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>products 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 Products 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 Products 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 Products 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 Products 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 Products 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 Products 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Products 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 Products 4</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>
            </div>
          </li>


          {/* Support*/}
          <li className={styles.listItem}>Support <span><i className="fa fa-angle-down" aria-hidden="true" /></span>
          <div className={whoWeAreSlideNav1 || whoWeAreSlideNav2 || whoWeAreSlideNav3 || whoWeAreSlideNav4 ? styles.mainDropdownActive : styles.mainDropdown}>
              <div className={styles.mainDropdownLeft}>
                <ul className={styles.mainDropdownLeftList}>
                    <li className={whoWeAreSlideNav1 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleWhoWeAre1}>
                    Technical Support <span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={whoWeAreSlideNav2 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleWhoWeAre2}>
                    Network Support<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={whoWeAreSlideNav3 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleWhoWeAre3}>
                    Remote Support<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={whoWeAreSlideNav4 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleWhoWeAre4}>
                    Administrative Support<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                </ul>
              </div>
                <div className={whoWeAreSlideNav1  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={whoWeAreSlideNav1  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 support 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 1</h5>
                      </li>
                    </ul>
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 support 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 support 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 support 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 who we wre 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we wre 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we wre 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we wre 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we wre 1</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>
                {/* Who we are Slide Nav 2 */}
                <div className={whoWeAreSlideNav2  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={whoWeAreSlideNav2  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 support 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 support 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 support 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 support 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 support 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 2</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* support Slide Nav 3 */}
                <div className={whoWeAreSlideNav3  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={whoWeAreSlideNav3  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 support 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 support 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 support 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 support 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Support 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 3</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* Who we are Slide Nav 4 */}
                <div className={whoWeAreSlideNav4  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={whoWeAreSlideNav4  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 support 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>support 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 support 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 support 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 support 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 support 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 support 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 support 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 support 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 support 4</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>
            </div>
          </li>

          {/* Who we are */}
          <li className={styles.listItem}>Who we are <span><i className="fa fa-angle-down" aria-hidden="true" /></span>
          <div className={whoWeAreSlideNav1 || whoWeAreSlideNav2 || whoWeAreSlideNav3 || whoWeAreSlideNav4 ? styles.mainDropdownActive : styles.mainDropdown}>
              <div className={styles.mainDropdownLeft}>
                <ul className={styles.mainDropdownLeftList}>
                    <li className={whoWeAreSlideNav1 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleWhoWeAre1}>
                    The Company<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={whoWeAreSlideNav2 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleWhoWeAre2}>
                    Our Portfolio<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={whoWeAreSlideNav3 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleWhoWeAre3}>
                    Our Team<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                    <li className={whoWeAreSlideNav4 ? styles.mainDropdownLeftListItemActive : styles.mainDropdownLeftListItem} onClick={handleWhoWeAre4}>
                    Career<span className={styles.displayArrow}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                    </li>
                </ul>
              </div>
                <div className={whoWeAreSlideNav1  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={whoWeAreSlideNav1  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 who we are 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 1</h5>
                      </li>
                    </ul>
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 who we are 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 who we are 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 who we are 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 1</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 who we wre 1 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we wre 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we wre 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we wre 1</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we wre 1</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>
                {/* Who we are Slide Nav 2 */}
                <div className={whoWeAreSlideNav2  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={whoWeAreSlideNav2  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 who we are 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 who we are 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 who we are 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 who we are 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 2</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 who we are 2 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 2</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 2</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* who we are Slide Nav 3 */}
                <div className={whoWeAreSlideNav3  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={whoWeAreSlideNav3  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 who we are 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 who we are 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 who we are 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 who we are 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 3</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 Solutions 3 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 3</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 3</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>

                {/* Who we are Slide Nav 4 */}
                <div className={whoWeAreSlideNav4  ? styles.mainDropdownRightActive : styles.mainDropdownRight}>
                  <ul className={whoWeAreSlideNav4  ? styles.mainDropdownRightListActive : styles.mainDropdownRightList}>
                    <li className={styles.mainDropdownRightListItem}>1 who we are 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>who we are 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>2 who we are 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>2 who we are 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>3 who we are 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>3 who we are 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>4 who we are 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>4 who we are 4</h5>
                      </li>
                    </ul>
                    </li>
                    <li className={styles.mainDropdownRightListItem}>5 who we are 4 <i className="fa fa-arrow-down" aria-hidden="true" />
                    <ul className={styles.mainDropdownRightListItemList}>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 4</h5>
                      </li>
                      <li className={styles.mainDropdownRightListItemListItem}>
                        <img src="/logoAndIcons/testIcon1.jpg" alt="productIcon" style={{width: "80px", height: "80px", objectFit: "contain"}} />

                        <h5 style={{fontSize: "12px"}}>5 who we are 4</h5>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </div>
            </div>
          </li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Get in touch</li>
        </ul>
    </div>
  );
};

export default Navbar;