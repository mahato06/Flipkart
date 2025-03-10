import React from 'react'
import './Flipkart.css'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import { BsShopWindow } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { PiShootingStarLight } from "react-icons/pi";
import { IoGiftOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";

const Flipkart = () => {
  return (
    <div>
        <div className='header'>
            <a href='https://www.flipkart.com/'><img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg' alt='flipkart'/></a>
            <div className='search'>
                <CiSearch className='Icon'/>
                <input type='text' placeholder='Search for Products, Brands and More'/>
            </div>
            <button>
                <CgProfile className='Icon'/>
                Login
                <IoIosArrowDown className='Icon'/>
            </button>
            <button>
                <PiShoppingCart className='Icon'/>
                Cart
            </button>
            <a href='https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect0'>
                <button>
                    <BsShopWindow className='Icon'/>
                    Become a Seller
                </button>
            </a>
            <button>
                <BsThreeDotsVertical className='Icon'/>
            </button>
        </div>
        <div className='categories'>
            <div>
                <a href='https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_5755f7c0-d139-4029-b0c0-9eda273f8638_1_372UD5BXDFYS_MC.CBUR1Q46W5F1&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Kilos_CBUR1Q46W5F1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L0_view-all&cid=CBUR1Q46W5F1'>
                <img src='https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100' alt='Kilos'/>
                <p>Kilos</p>
                </a>
            </div>
            <div>
                <a href='https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_5755f7c0-d139-4029-b0c0-9eda273f8638_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J'>
                <img src='https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100' alt='Mobiles'/>
                <p>Mobiles</p>
                </a>
            </div>
            <div>
                <a href='https://www.flipkart.com/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_03620a7d-6cdd-489f-9de5-b035db1318e7_1_372UD5BXDFYS_MC.AHHHWF67UPNB&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Men%27s%2BTop%2BWear~All_AHHHWF67UPNB&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=AHHHWF67UPNB'>
                <img src='https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100' alt='Fashion'/>
                <p>Fashion</p>
                </a>
            </div>
            <div>
                <a href='https://www.flipkart.com/audio-video/pr?sid=0pm&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_a85ade0d-b7bd-4d54-90d1-c511751b61fd_1_372UD5BXDFYS_MC.9JGNW7M0TUHD&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Audio~All_9JGNW7M0TUHD&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=9JGNW7M0TUHD'>
                <img src='https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100' alt='Electronics'/>
                <p>Electronics</p>
                </a>
            </div>
            <div>
                <a href='https://www.flipkart.com/home-furnishing/pr?sid=jra&marketplace=FLIPKART&otracker=nmenu_sub_Home%20%26%20Furniture_0_Furnishing&fm=neo%2Fmerchandising&iid=M_ced1e7ee-ec6e-4a94-89f9-7152fb1dd989_1_372UD5BXDFYS_MC.A8O1FN5LHOZ5&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Home%2B%26%2BFurniture~Home%2BFurnishings~All_A8O1FN5LHOZ5&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=A8O1FN5LHOZ5'>
                <img src='https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100' alt='Home & Furniture'/>
                <p>Home & Furniture</p>
                </a>
            </div>
            <div>
                <a href='https://www.flipkart.com/tvs-and-appliances-new-clp-store?fm=neo%2Fmerchandising&iid=M_5755f7c0-d139-4029-b0c0-9eda273f8638_1_372UD5BXDFYS_MC.LO4IWVHA61BX&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Appliances_LO4IWVHA61BX&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L0_view-all&cid=LO4IWVHA61BX'>
                <img src='https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100' alt='Appliances'/>
                <p>Appliances</p>
                </a>
            </div>
            <div>
                <a href='https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_5755f7c0-d139-4029-b0c0-9eda273f8638_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Flight%2BBookings_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321'>
                <img src='https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100' alt='Flight Bookings'/>
                <p>Flight Bookings</p>
                </a>
            </div>
            <div>
                <a href='https://www.flipkart.com/beauty-and-grooming/pr?sid=g9b&otracker=categorytree&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&fm=neo%2Fmerchandising&iid=M_1cf5d644-91d6-4fa2-a176-42364bc68c07_1_372UD5BXDFYS_MC.NJKL2WGZ9KLB&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Beauty%2C%2BToys%2B%26%2BMore~Beauty%2B%26%2BPersonal%2BCare~View%2BAll_NJKL2WGZ9KLB&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=NJKL2WGZ9KLB'>
                <img src='https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100' alt='Beauty, Toys & More'/>
                <p>Beauty Toys & More</p>
                </a>
            </div>
            <div>
                <a href='https://www.flipkart.com/two-wheelers-store?fm=neo%2Fmerchandising&iid=M_b45e15de-9abf-4bb0-a191-fb3400fbe815_1_372UD5BXDFYS_MC.SCJPZ04TFJJM&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Two%2BWheelers~Petrol%2BVehicles_SCJPZ04TFJJM&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=SCJPZ04TFJJM'>
                <img src='https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100' alt='Two Wheelers'/>
                <p>Two Wheelers</p>
                </a>
            </div>
        </div>
        <div className='highlight'>
            <div className='slideTrack'>
                <div className='side'>
                    <a href='https://www.flipkart.com/valentines-week-store?param=34578'>
                    <img src='https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/f8dae5ce006b7d54.jpg?q=20' alt='hl1'/>
                    </a>
                </div>
                <div className='side'>
                    <a href='https://www.flipkart.com/travel/flights?param=Travel-DT-HPW-VDay-Roundtrip'>
                    <img src='https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/766ea612e03ff01d.jpg?q=20' alt='hl2'/>
                    </a>
                </div>
                <div className='highlight'>
                    <a href='https://www.flipkart.com/travel/flights?param=Travel-DT-HPW-VDay-malaysia'>
                    <img src='https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/2f9905cc4b67c99c.jpg?q=20' alt='hl3'/>
                    </a>
                </div>
                <div className='slide'>
                    <a href='https://www.flipkart.com/travel/flights?param=Travel-DT-HPW-VDay-FKINT-grabnow'>
                    <img src='https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a6d74b7e7af9bcdc.jpg?q=20' alt='hl4'/>
                    </a>
                </div>
                <div className='slide'>
                    <a href='https://www.flipkart.com/search?sid=mgl&p%5B%5D=facets.fulfilled_by%255B%255D%3DF-Assured'>
                    <img src='https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/3f976ca32ddc651e.jpg?q=20' alt='hl5'/>
                    </a>
                </div>
            </div>
        </div>
        <div className='electronics'>
            <div>
                <h2>Best of Electronics</h2>
                <div className='products'>
                    <a href='https://www.flipkart.com/computers/monitors/pr?sid=6bo%2C9no&fm=neo%2Fmerchandising&iid=M_ce1a6f68-d7d2-4ae1-875c-0d0877d9a11f_2_372UD5BXDFYS_MC.ECL5SFI77NSY&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=ECL5SFI77NSY&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DLenovo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTc5NDkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNb25pdG9ycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6Ik1PTkdGWjlSV1o1RUhIV1giLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19'>
                    <div className='product'>
                        <img src='https://rukminim2.flixcart.com/image/312/312/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70' alt='product'/>
                        <p>Monitors</p>
                        <h4>From ₹7949</h4>
                    </div>
                    </a>
                    <a href='https://www.flipkart.com/audio-video/headset/pr?sid=0pm%2Cfcn&p%5B%5D=facets.connectivity%255B%255D%3DBluetooth&sort=popularity&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.price_range.from%3D599&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.headphone_type%255B%255D%3DTrue%2BWireless&param=866&hpid=WqCPtE2MbDEYEbYbttXC1qp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJHcmFiIE5vdyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkFDQ0c2RFM5WkgyRUNEQkciLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJCZXN0IFRydWV3aXJlbGVzcyBIZWFkcGhvbmVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D'>
                    <div className='product'>
                        <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/f/y/f/-original-imahy3uqgtzmdsge.jpeg?q=70' alt='product'/>
                        <p>True Wireless Headphones</p>
                        <h4>From ₹1,649</h4>
                    </div>
                    </a>
                    <a href='https://www.flipkart.com/wearable-smart-devices/smart-watches/pr?sid=ajy%2Cbuh&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DFastrack&hpid=SVKCw8G6nMCuH4Eqbt2Crap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEsMzk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiU01XSDQ0RlVYNEo0VFE1UyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZhc3RyYWNrIFNtYXJ0d2F0Y2hlcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D'>
                    <div className='product'>
                        <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/z/r/d/-original-imagywnzhh3dnqvk.jpeg?q=70' alt='product'/>
                        <p>Fastrack SmartWatches</p>
                        <h4>From ₹1399</h4>
                    </div>
                    </a>
                    <a href='https://www.flipkart.com/computers/computer-peripherals/projectors/pr?sid=6bo%2Ctia%2C1hx&fm=neo%2Fmerchandising&iid=M_0cc842bf-96c6-4409-b385-b0a904682f33_2_372UD5BXDFYS_MC.ICU0BSHGNPBF&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L2_view-all&cid=ICU0BSHGNPBF&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DZEBRONICS&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJQcm9qZWN0b3JzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiUFJPSDM2Rk0yWEU0U0dHSiIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D'>
                    <div className='product'>
                        <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/projector/u/d/h/zeb-jlp-2-4-zeb-jlp-2-led-projector-zebronics-original-imah6wbu2vfhrzjm.jpeg?q=70' alt='product'/>
                        <p>Projectors</p>
                        <h4>From ₹9999</h4>
                    </div>
                    </a>
                    <a href='https://www.flipkart.com/computers/computer-peripherals/printers-inks/printers/pr?sid=6bo%2Ctia%2Cffn%2Ct64&fm=neo%2Fmerchandising&iid=M_2731d14e-2583-4664-a065-6fc7ea504a6d_2_372UD5BXDFYS_MC.ES1XN5J8PT49&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=ES1XN5J8PT49&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DBrother&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEwMTkwIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiUHJpbnRlcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJQUk5GWlpGWjhTV0ZURlg3IiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D'>
                    <div className='product'>
                        <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=70' alt='product'/>
                        <p>Printers</p>
                        <h4>From ₹10190</h4>
                    </div>
                    </a>
                    <a href='https://www.flipkart.com/cameras/dslr-mirrorless/pr?sid=jek%2Cp31%2Ctrv&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.type%255B%255D%3DMirrorless&param=179&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTaG9wIE5vdyEiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgTWlycm9ybGVzcyBDYW1lcmFzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQ0FNRk1OMjlGVVRITUJZSyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D'>
                    <div className='product'>
                        <img src='https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/n/p/t/eos-r50-24-2-r50-canon-original-imagngc7syac8pfd.jpeg?q=70' alt='product'/>
                        <p>Top Mirrorless Cameras</p>
                        <h4>Shop Now!</h4>
                    </div>
                    </a>
                    <a href='https://www.flipkart.com/audio-video/speakers/pr?sid=0pm%2C0o7&sort=popularity&param=8755&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.price_range.from%3D599&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.type%255B%255D%3DHome%2BAudio%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DGaming%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DHome%2BTheatre&p%5B%5D=facets.type%255B%255D%3DLaptop%252FDesktop%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DMobile%252FTablet%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DSoundbar&param=443&hpid=-9HuwFIVtikIZ8W21KTsvKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTQ5OSoiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJBQ0NIRlJIM0hFNEdDWlpGIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQmVzdCBTZWxsaW5nIE1vYmlsZSBTcGVha2VycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D'>
                    <div className='product'>
                        <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/t/b/s/-original-imah97vmtytbdrhf.jpeg?q=70' alt='product'/>
                        <p>Bluetooth Speakers</p>
                        <h4>From ₹499*</h4>
                    </div>
                    </a>
                    <a href='https://www.flipkart.com/computers/storage/ssd/pr?sid=6bo%2Cjdy%2Cdus&p%5B%5D=facets.brand%255B%255D%3DSanDisk&sort=popularity&param=34567&hpid=cO5m4Oh8Ao_ji8Ag-0t33ap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTUsNzk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQUNDR1lTUEVZWFYyRVVQVyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNhbmRpc2sgRXh0cmVtZSBQb3J0YWJsZSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D'>
                    <div className='product'>
                        <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/external-hard-drive/ssd/y/s/7/sdssde30-1t00-g26-sandisk-original-imagsgpmhcxmsxet.jpeg?q=70' alt='product'/>
                        <p>Sandisk Portable</p>
                        <h4>From ₹5,799</h4>
                    </div>
                    </a>
                </div>
            </div>
            <div><img src='https://rukminim1.flixcart.com/fk-p-flap/530/810/image/105f7b5c7c808679.jpeg?q=20' alt='Electronics'/></div>
        </div>
        <div className='beauty'>
            <h2>Beauty, Food, Toys & more</h2>
            <div className='beautyProducts'>
                <a href='https://www.flipkart.com/toys/action-toys/pr?sid=tng%2Csv3&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&hpid=rTHd3P8c2Eh-2fwrqbmKvqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcCB0byA3MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiVFdQRkZKRUpOTkI5SFk5VCIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJlc3Qgb2YgQWN0aW9uIFRveXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19'>
                <div className='product'>
                    <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/action-figure/8/q/g/5-kung-fu-panda-action-figure-16-cm-collectible-for-office-desk-original-imaghzndcwbqqyhu.jpeg?q=70' alt='product'/>
                    <p>Best of Action Toys</p>
                    <h4>Up to 70% off</h4>
                </div>
                </a>
                <a href='https://www.flipkart.com/toys/stuffed-toys/pr?sid=mgl%2C1zt&hpid=aYIiqog0ctRH4fZXM42Ro6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcHRvIDcwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTVEZIWUZGSFFFRUNEWVhLIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiU29mdCBUb3lzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D'>
                <div className='product'>
                    <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/w/t/o/spongy-cute-cuddly-lovable-huggable-teddybear-for-gift-original-imagtvjqugftb46c.jpeg?q=70' alt='product'/>
                    <p>Soft Toys</p>
                    <h4>Up to 70% off</h4>
                </div>
                </a>
                <a href='https://www.flipkart.com/toys/toy-vehicles/remote-control-toys/pr?sid=tng%2C56a%2Cfq8&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BPlus&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D300000000000&hpid=w0h50eB9gc7vXk_wfN2Za6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcCB0byA4MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiUkNUR0haUUdDQUtKWUVaRCIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlJlbW90ZSBDb250cm9sIFRveXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19'>
                <div className='product'>
                    <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/z/h/4/remote-control-metal-car-for-kids-with-mist-smoke-effect-monster-original-imah8gdnfrrhw2rz.jpeg?q=70' alt='product'/>
                    <p>Remote Control Toys</p>
                    <h4>Up to 80% off</h4>
                </div>
                </a>
                <a href='https://www.flipkart.com/pens-stationery/pr?sid=dgv&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&hpid=B2Ku1G4aX7ZGf37AOgCozap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTQ5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiU1BERlVaMjVGREVKUUZSSyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlRvcCBTZWxsaW5nIFN0YXRpb25lcnkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19'>
                <div className='product'>
                    <img src='https://rukminim2.flixcart.com/image/612/612/khkvukw0-0/pen/6/s/c/8901765126245-hauser-original-imafxkck3g75whwf.jpeg?q=70' alt='product'/>
                    <p>Top Selling Stationery</p>
                    <h4>From ₹49</h4>
                </div>
                </a>
                <a href='https://www.flipkart.com/sports/cycling/electric-cycle/pr?sid=abc%2Culv%2Ctwp&hpid=IN6WQymhhksnM1l95t0Z6Kp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcCB0byA0MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiRUNZSDNaWUg2TURZVDlQRyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkVsZWN0cmljIEN5Y2xlIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D'>
                <div className='product'>
                    <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/electric-cycle/n/c/k/hypno-8ah-battery-front-suspension-90-assembled-led-trooper-grey-original-imah8agmwcbzmnae.jpeg?q=70' alt='product'/>
                    <p>Electric Cycle</p>
                    <h4>Up to 40% off</h4>
                </div>
                </a>
                <a href='https://www.flipkart.com/exercise-fitness/fitness-accessories/pr?sid=qoc%2Cacb&p%5B%5D=facets.fulfilled_by%255B%255D%3DPlus%2B%2528FAssured%2529&hpid=wXxDXjUDi0JocvmBiNvc9Kp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEzOSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkZHUEdOSllGR1lIQkhSQjYiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJHeW0gRXNzZW50aWFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D'>
                <div className='product'>
                    <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/fitness-grip/z/i/w/hand-grip-strengthener-soft-foam-hand-wrist-power-forearm-original-imah7uzwk6hx7ckb.jpeg?q=70' alt='product'/>
                    <p>Gym Essentials</p>
                    <h4>From ₹139</h4>
                </div>
                </a>
                <a href='https://www.flipkart.com/musical-instruments/string-instruments/pr?sid=ypu%2Cujd&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&hpid=B-XAf3E_DShXt5jns5U3Map7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcCB0byA3MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQUNHR0ZCTjNKNEpTWkJSOCIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlN0cmluZyBJbnN0cnVtZW50cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D'>
                <div className='product'>
                    <img src='https://rukminim2.flixcart.com/image/612/612/kklhbbk0/ukulele/j/f/w/int-uk21ld-nt-intern-original-imafzwtayzv8pnky.jpeg?q=70' alt='product'/>
                    <p>String instruments</p>
                    <h4>Up to 70% off</h4>
                </div>
                </a>
                <a href='https://www.flipkart.com/musical-instruments/keys-synthesizers/musical-keyboards/pr?sid=ypu%2Cnvg%2Cxqg&p%5B%5D=facets.discount_range_v1%255B%255D%3D30%2525%2Bor%2Bmore&p%5B%5D=facets.discount_range_v1%255B%255D%3D40%2525%2Bor%2Bmore&p%5B%5D=facets.discount_range_v1%255B%255D%3D20%2525%2Bor%2Bmore&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJ1cCB0byA3MCUgb2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiTXVzaWNhbCBLZXlib2FyZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJNS0RGR0RKWFpZTkQzUFNaIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D'>
                <div className='product'>
                    <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/q/e/37-0-6-37-keys-portable-piano-keyboard-piano-keyboard-toy-kids-original-imah7e3gue594zwd.jpeg?q=70' alt='product'/>
                    <p>Musical Keyboards</p>
                    <h4>Up to 70% off</h4>
                </div>
                </a>
            </div>
        </div>
        <div className='Other'>
            <div className='Section'>
                <div className='More'>
                <h2>Suggested For You</h2>
                <TbSquareRoundedChevronRightFilled className='nextIcon'/>
                </div>
                <div className='Partition'>
                    <div className='grid spanrows2'>
                        <a href='https://www.flipkart.com/campus-royce-2-men-s-sports-shoes-comfy-mesh-upper-enhanced-airflow-lace-up-walking-men/p/itm95079a5f93a98?pid=SHOFEHZGGNPTKN59&lid=LSTSHOFEHZGGNPTKN59KADKBL&hl_lid=&marketplace=FLIPKART'>
                        <img src='https://rukminim1.flixcart.com/image/340/340/xif0q/shoe/i/d/y/6-cg-248-6-campus-blu-sky-original-imah4zpvb4erqq7y.jpeg?q=90' alt='img'/>
                        <p>CAMPUS ROYCE-2 Men's Sports</p>
                        <div className='Price'>
                            <div className='fPrice'>₹1,299</div>
                            <div className='cPrice'>₹748</div>
                            <div className='Discount'>42% off</div>
                        </div>
                        </a>
                    </div>
                    <div className='grid'>
                        <a href='https://www.flipkart.com/bersache-men-clogs/p/itmf91fff896eda2?pid=SNDHFNDNRWZV8DFK&lid=LSTSNDHFNDNRWZV8DFKQXESF9&hl_lid=&marketplace=FLIPKART'>
                        <img src='https://rukminim1.flixcart.com/image/200/200/xif0q/slipper-flip-flop/7/v/w/7-ori-a-6069-bersache-white-original-imah4gpfxgx2zwmz.jpeg?q=60' alt='img'/>
                        <p>BERSACHE Men Clogs Sandal</p>
                        <div className='Price'>
                            <div className='fPrice'>₹1,999</div>
                            <div className='cPrice'>₹233</div>
                            <div className='Discount'>88% off</div>
                        </div>
                        </a>
                    </div>
                    <div className='grid'>
                    <a href='https://www.flipkart.com/bersache-women-clogs/p/itmbaee965992a71?pid=SNDH47V99U6ZG6FH&lid=LSTSNDH47V99U6ZG6FHUKYTKE&marketplace=FLIPKART&q=bersache+women+sandal&store=osp%2Fiko&srno=s_1_9&otracker=AS_Query_OrganicAutoSuggest_3_15_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_3_15_na_na_ps&fm=Search&iid=d6570c5a-3620-4617-a807-7a2c6de56ecc.SNDH47V99U6ZG6FH.SEARCH&ppt=sp&ppn=sp&ssid=o84hvz8ngg0000001739266724945&qH=5023d05521851c4a'>
                        <img src='https://rukminim1.flixcart.com/image/200/200/xif0q/sandal/h/a/i/8-z-san-6108-8-bersache-white-original-imah9yfmfkvrrruh.jpeg?q=60' alt='img'/>
                        <p>BERSACHE Women Sandal</p>
                        <div className='Price'>
                            <div className='fPrice'>₹1,999</div>
                            <div className='cPrice'>₹399</div>
                            <div className='Discount'>80% off</div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='Section'>
                <div className='More'>
                <h2>Discounts For You</h2>
                <TbSquareRoundedChevronRightFilled className='nextIcon'/>
                </div>
                <div className='Partition'>
                    <div className='grid spanrows2'>
                        <a href='https://www.flipkart.com/boat-partypal-300-320-flame-leds-up-6-hrs-playtime-120-w-bluetooth-party-speaker/p/itm0588ecc1a42ef?pid=ACCGT3NEHZGD2YHX&lid=LSTACCGT3NEHZGD2YHX6BEDOB&hl_lid=&marketplace=FLIPKART'>
                        <img src='https://rukminim2.flixcart.com/image/416/416/xif0q/speaker/k/n/y/-original-imah7effzurcdfzc.jpeg?q=70&crop=false' alt='img'/>
                        <p> boAt PartyPal 300 </p>
                        <div className='Price'>
                            <div className='fPrice'>₹29,990</div>
                            <div className='cPrice'>₹8,699</div>
                            <div className='Discount'>71% off</div>
                        </div>
                        </a>
                    </div>
                    <div className='grid'>
                        <a href='https://www.flipkart.com/marshall-willen-10-w-bluetooth-speaker/p/itm347f3a36956e4?pid=ACCGJ9D6YVV7MRAP&lid=LSTACCGJ9D6YVV7MRAP3TLHLO&hl_lid=&marketplace=FLIPKART'>
                        <img src='https://rukminim2.flixcart.com/image/416/416/xif0q/speaker/0/q/g/-original-imagzefk7phjchax.jpeg?q=70&crop=false' alt='img'/>
                        <p> Marshall Willen 10 W </p>
                        <div className='Price'>
                            <div className='fPrice'>₹14,999</div>
                            <div className='cPrice'>₹8,999</div>
                            <div className='Discount'>70% off</div>
                        </div>
                        </a>
                    </div>
                    <div className='grid'>
                    <a href='https://www.flipkart.com/sony-srs-xb100-portable-super-compact-waterproof-16hrs-batt-extra-bass-built-in-mic-bluetooth-speaker/p/itm9499b0816a73a?pid=ACCGR5NXH7PH2FKT&lid=LSTACCGR5NXH7PH2FKT9WY82G&marketplace=FLIPKART&q=sony+bluetooth+speaker&store=0pm%2F0o7&srno=s_1_4&otracker=AS_QueryStore_OrganicAutoSuggest_1_21_sc_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_21_sc_na_ps&fm=search-autosuggest&iid=670fe39d-cbd1-415b-87b4-28ecef29dfbf.ACCGR5NXH7PH2FKT.SEARCH&ppt=sp&ppn=sp&ssid=n5svzhv01s0000001739126434246&qH=d136b3fa5a1af0b7'>
                        <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/i/f/d/-original-imahfcgxf2gzuzer.jpeg?q=70' alt='img'/>
                        <p> SONY SRS-XB100 Portable</p>
                        <div className='Price'>
                            <div className='fPrice'>₹5,990</div>
                            <div className='cPrice'>₹3,990</div>
                            <div className='Discount'>33% off</div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='Section'>
                <div className='More'>
                <h2>You may like...</h2>
                <TbSquareRoundedChevronRightFilled className='nextIcon'/>
                </div>
                <div className='Partition'>
                    <div className='grid spanrows2'>
                        <a href='https://www.flipkart.com/wrogn-men-checkered-casual-black-shirt/p/itm2e4d06c811c93?pid=SHTHFJ8ZGBZ6HFHA&lid=LSTSHTHFJ8ZGBZ6HFHAALT40R&hl_lid=&marketplace=FLIPKART'>
                        <img src='https://rukminim1.flixcart.com/image/340/340/xif0q/shirt/p/i/i/-original-imah3882ynhg6ysb.jpeg?q=80' alt='img'/>
                        <p>WROGN Men Checkered Shirt</p>
                        <div className='Price'>
                            <div className='fPrice'>₹2,299</div>
                            <div className='cPrice'>₹919</div>
                            <div className='Discount'>60% off</div>
                        </div>
                        </a>
                    </div>
                    <div className='grid'>
                        <a href='https://www.flipkart.com/wrogn-men-solid-casual-dark-green-shirt/p/itm7800a3405435a?pid=SHTGUU6YMQ48FWZP&lid=LSTSHTGUU6YMQ48FWZPVIPXPV&hl_lid=&marketplace=FLIPKART'>
                        <img src='https://rukminim1.flixcart.com/image/200/200/xif0q/shirt/9/a/7/xxl-wrsh0474m-wrogn-original-imaguu5urhmjhhgn.jpeg?q=60' alt='img'/>
                        <p>WROGN Men Slim Fit Shirt</p>
                        <div className='Price'>
                            <div className='fPrice'>₹2,199</div>
                            <div className='cPrice'>₹923</div>
                            <div className='Discount'>58% off</div>
                        </div>
                        </a>
                    </div>
                    <div className='grid'>
                    <a href='https://www.flipkart.com/wrogn-men-printed-casual-light-blue-shirt/p/itm1fe258eac365c?pid=SHTGY3H6PYYZHUVZ&lid=LSTSHTGY3H6PYYZHUVZZBMHT3&hl_lid=&marketplace=FLIPKART'>
                        <img src='https://rukminim1.flixcart.com/image/200/200/xif0q/shirt/y/i/h/-original-imahfekgp2qgu4xf.jpeg?q=60' alt='img'/>
                        <p>WROGN Men Printed Shirt</p>
                        <div className='Price'>
                            <div className='fPrice'>₹2,299</div>
                            <div className='cPrice'>₹889</div>
                            <div className='Discount'>61% off</div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='Credit'>
            <h2>Flipkart: The One-stop Shopping Destination</h2>
            <p>E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down. </p>
            <p>What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from Flipkart when there are multiple options available to you, well, the below will answer your question.</p>  
            <h2>Flipkart Plus</h2>
            <p>A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins &amp; non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more! </p>
            <p>What's more, you can even use the Flipkart supercoins for a number of exciting services, like:<br></br>
            An annual Zomato Gold membership<br></br>
            An annual Hotstar Premium membership<br></br>
            6 months Gaana plus subscription<br></br>
            Rupees 550 instant discount on flights on ixigo<br></br>
            Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.<br></br>
            <h2>No Cost EMI</h2>
            In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.
            <h2>EMI on Debit Cards</h2>
            Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply. 
            <h2>Mobile Exchange Offers</h2>
            Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply. 
            <h2>What Can You Buy From Flipkart?</h2>
            <h2>Mobile Phones</h2>
            From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured, you're buying from only the most reliable names in the market. What's more, with Flipkart's Complete Mobile Protection Plan, you will never again find the need to run around service centres. This plan entails you to a number of post-purchase solutions, starting at as low as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches, and replacements - 
            <b>the Flipkart Complete Mobile Protection</b>
            covers a comprehensive range of post-purchase problems, with door-to-door services. 
            <h2>Electronic Devices and Accessories</h2>
            When it comes to laptops, we are not far behind. Filter among dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle, screen size and many other criterias for personalized results in a flash. All you students out there, confused about what laptop to get? Our 
            <b> Back to College Store </b>
            segregates laptops purpose wise (gaming, browsing and research, project work, entertainment, design, multitasking) with recommendations from top brands and industry experts, facilitating a shopping experience that is quicker and simpler.<br></br><br></br>
            Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. <br></br><br></br>
            Turn your home into a theatre with a stunning surround sound system. Choose from our elaborate range of Sony home theatres, JBL soundbars and Philips tower speakers for an experience to remember.<br></br><br></br>
            How about jazzing up your phone with our quirky designer cases and covers? Our wide-ranging mobile accessories starting from headphones, power banks, memory cards, mobile chargers, to selfie sticks can prove to be ideal travel companions for you and your phone; never again worry about running out of charge or memory on your next vacation.
            <h2>Large Appliance</h2>
            Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing machines - discover everything you need to run a house under one roof. Our <b>Dependable TV and Appliance Store </b>
            ensures zero transit damage, with a replacement guarantee if anything goes wrong; delivery and installation as per your convenience and a double warranty (Official Brand Warranty along with an extended Flipkart Warranty) - rest assured, value for money is what is promised and delivered. Shop from market leaders in the country like Samsung, LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony, Daikin, and Hitachi among many others.<br></br><br></br>
            For certain product categories, Customers meeting the eligibility criteria will have the option to buy larger quantities. To know more on the eligibility criteria and terms and conditions, please reach out to 
            <h2>Small Home Appliances</h2>
            Find handy and practical home appliances designed to make your life simpler: electric kettles, OTGs, microwave ovens, sandwich makers, hand blenders, coffee makers, and many more other time-saving appliances that are truly crafted for a quicker lifestyle. Live life king size with these appliances at home.
            <h2>Lifestyle</h2>
            "Flipkart, "
            <b>India Ka Fashion Capital</b>
            , is your one-stop fashion destination for anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up, grooming tools and accessories are sure to sweep you off your feet. Shop from crowd favourites like Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of other top-of-the-ladder names. From summer staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is up to date. Explore our in-house brands like Metronaut, Anmi, and Denizen, to name a few, for carefully curated designs that are the talk of the town. Get ready to be spoiled for choice.Festivals, office get-togethers, weddings, brunches, or nightwear - Flipkart will have your back each time.
            <h2> Home and Furniture</h2>
            Moving to a new place is never easy, especially if you're buying new furniture. Beds, sofa sets, dining tables, wardrobes, and TV units - it's not easy to set up everything again. With the hundreds of options thrown at you, the ride could be overwhelming. What place is reliable, what furniture will stand the test of time? These are questions you must ask before you choose a store. Well, our 
            <b>Durability Certified Furniture Store</b>
            has not only curated a range of furniture keeping in mind the modern Indian consumer but furniture that comes with a lab certification, ensuring they last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so that you receive only the best-quality furniture. 
            <b>Be Furnisure</b>
            , always. Names to look out for are Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.<br></br><br></br> 
            You may have your furniture all set up, but they could end up looking flat and incomplete without complementary decor. Curtains, cushion covers, bed sheets, wall shelves, paintings, floor lamps - find everything that turns a house to an inviting home under one roof at Flipkart. 
            <h2>Baby and Kids</h2>
            Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if you're an expecting mother or a new mother, you will find everything you need to set sail on a smooth parenting journey with the help of our baby care collection. When it comes to safety, hygiene and comfort, you can rely on us without a second thought. Huggies, Pampers, MamyPoko, and Johnson &amp; Johnson: we host only the most-trusted names in the business for your baby.
            <h2>Books , Sports and Games</h2>
            Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to get moving. 
            <h2>Grocery/Supermart</h2>
            Launching into the grocery vertical, Flipkart introduces <b>Supermart</b>
            that is out to bring everyday essentials close to you. From pulses, spices, dairy, personal and sanitary care, breakfast essentials, health drinks, spreads, ready to cook, grooming to cleaning agents, we are happy to present everything you need to run a house. Now buy Grocery products for as low as 1 Rupee only - our 
            <b>1 Rupee Store</b>
            presents new products every day for a nominal price of 1 Rupee only. Terms and conditions apply.
            </p>
        </div>
        <div className='footer'>
            <div className='leftDiv'>
                <div>
                    <h5>ABOUT</h5>
                    <a href='https://www.flipkart.com/helpcentre?otracker=footer_navlinks'>Contact Us</a><br></br>
                    <a href='https://corporate.flipkart.net/corporate-home'>About Us</a><br></br>
                    <a href='https://www.flipkartcareers.com/?otracker=footer_navlinks'>Careers</a><br></br>
                    <a href='http://stories.flipkart.com/?otracker=footer_navlinks'>Flipkart Stories</a><br></br>
                    <a href='http://stories.flipkart.com/category/top-stories/news/'>Press</a><br></br>
                    <a href='https://www.flipkart.com/corporate-information'>Corporate Information</a><br></br>
                </div>
                <div>
                    <h5>GROUP COMPANIES</h5>
                    <a href='https://www.myntra.com/'>Myntra</a><br></br>
                    <a href='https://www.cleartrip.com/'>Cleartrip</a><br></br>
                    <a href='https://www.shopsy.in/'>Shopsy</a><br></br>
                </div>
                <div>
                    <h5>HELP</h5>
                    <a href='https://www.flipkart.com/pages/payments'>Payments</a><br></br>
                    <a href='https://www.flipkart.com/pages/shipping'>Shipping</a><br></br>
                    <a href='https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG'>Cancellation & Returns</a><br></br>
                    <a href='https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG'>FAQ</a><br></br>
                </div>
                <div>
                    <h5>CONSUMER POLICY</h5>
                    <a href='https://www.flipkart.com/pages/returnpolicy?otracker=footer_navlinks'>Cacellation & Returns</a><br></br>
                    <a href='https://www.flipkart.com/pages/terms?otracker=footer_navlinks'>Terms of Use</a><br></br>
                    <a href='https://www.flipkart.com/pages/paymentsecurity?otracker=footer_navlinks'>Security</a><br></br>
                    <a href='https://www.flipkart.com/pages/privacypolicy?otracker=footer_navlinks'>Privacy</a><br></br>
                    <a href='https://www.flipkart.com/sitemap?otracker=footer_navlinks'>Sitemap</a><br></br>
                    <a href='https://www.flipkart.com/pages/grievance-redressal-mechanism?otracker=footer_navlinks'>Grievance Redressal</a><br></br>
                    <a href='https://www.flipkart.com/pages/ewaste-compliance-tnc?otracker=footer_navlinks'>EPR Compliance</a><br></br>
                </div>
            </div>
            <div className='line'></div>
            <div className='rightDiv'>
                <div>
                    <h5>Mail Us:</h5>
                    <p>Flipkart Internet Private Limited, </p>
                    <p> Buildings Alyssa, Begonia & </p>
                    <p> Clove Embassy Tech Village, </p>
                    <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                    <p> Bengaluru, 560103, </p>
                    <p> Karnataka, India</p>
                    <h5>Social:</h5>
                    <div className='social'>
                    <CiFacebook className='socialIcon'/>
                    <FaXTwitter className='socialIcon'/>
                    <SlSocialYoutube className='socialIcon'/>
                    </div>
                </div>
                <div>
                    <h5>Registered Office Address:</h5>
                    <p>Flipkart Internet Private Limited, </p>
                    <p> Buildings Alyssa, Begonia & </p>
                    <p> Clove Embassy Tech Village, </p>
                    <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                    <p> Bengaluru, 560103, </p>
                    <p> Karnataka, India </p>
                    <p> CIN : U51109KA2012PTC066107 </p>
                    <p> Telephone: 044-45614700 / 044-67415800</p>
                </div>
            </div>
        </div>
        <div className='hline'></div>
        <div className='endFooter'>
            <div>
            <BsShopWindow className='endIcon'/>
            <a href='https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect'>Become a Seller</a>
            </div>
            <div>
            <PiShootingStarLight className='endIcon'/>
            <a href='https://brands.flipkart.com/'>Advertise</a>
            </div>
            <div>
            <IoGiftOutline className='endIcon'/>
            <a href='https://www.flipkart.com/the-gift-card-store?otracker=footer_navlinks'>Gift Cards</a>
            </div>
            <div>
            <GoQuestion className='endIcon'/>
            <a href='https://www.flipkart.com/helpcentre?otracker=footer_navlinks'>Help Center</a>
            </div>
            <p>© 2007-2025 Flipkart.com</p>
            <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg' alt='endimg'/>
        </div>
    </div>
  )
}

export default Flipkart