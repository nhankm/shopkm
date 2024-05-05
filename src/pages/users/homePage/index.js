import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss"
import cat1Img from "assets/users/images/categories/cat1.jpg";
import cat2Img from "assets/users/images/categories/cat2.jpg";
import cat3Img from "assets/users/images/categories/cat3.jpg";
import cat4Img from "assets/users/images/categories/cat4.jpg";
import cat5Img from "assets/users/images/categories/cat5.jpg";
import featured1 from "assets/users/images/featured/featured1.jpg";
import featured2 from "assets/users/images/featured/featured2.jpg";
import featured3 from "assets/users/images/featured/featured3.jpg";
import featured4 from "assets/users/images/featured/featured4.jpg";
import featured5 from "assets/users/images/featured/featured5.jpg";
import featured6 from "assets/users/images/featured/featured6.jpeg";
import featured7 from "assets/users/images/featured/featured7.jpg";
import featured8 from "assets/users/images/featured/featured8.jpg";
import banner1 from "assets/users/images/banner/banner1.jpg";
import banner2 from "assets/users/images/banner/banner2.png";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const HomePage  = () => {

    const sliderItems = [
        {
            bgImg: cat1Img,
            name: "Cam tươi"
        },
        {
            bgImg: cat2Img,
            name: "Hoa quả khô"
        },
        {
            bgImg: cat3Img,
            name: "Rau củ tươi"
        },
        {
            bgImg: cat4Img,
            name: "Sữa tươi"
        },
        {
            bgImg: cat5Img,
            name: "Thịt bò"
        },
    ];

    const featProducts = {
        all: {
            title: "Toàn bộ",
            products: [
                {
                    img: featured1,
                    name: "Thịt Bò nạt",
                    price: 20000,
                },
                {
                    img: featured2,
                    name: "Chuối",
                    price: 15000,
                },
                {
                    img: featured3,
                    name: "Ổi",
                    price: 15000,
                },
                {
                    img: featured4,
                    name: "Dưa hấu",
                    price: 45000,
                },
                {
                    img: featured5,
                    name: "Nho",
                    price: 140000,
                },
                {
                    img: featured6,
                    name: "Hamburger",
                    price: 80000,
                },
                {
                    img: featured7,
                    name: "Xoài keo",
                    price: 70000,
                },
                {
                    img: featured8,
                    name: "Táo",
                    price: 55000,
                },
            ],
        },
        freshMeat: {
            title: "Thịt tươi",
            products: [
                {
                    img: featured1,
                    name: "Thịt Bò nạt",
                    price: 20000,
                },
            ],
        },
        fruits: {
            title: "Trái cây",
            products: [
                {
                    img: featured2,
                    name: "Chuối",
                    price: 15000,
                },
                {
                    img: featured3,
                    name: "Ổi",
                    price: 15000,
                },
                {
                    img: featured4,
                    name: "Dưa hấu",
                    price: 45000,
                },
                {
                    img: featured5,
                    name: "Nho",
                    price: 140000,
                },
                {
                    img: featured7,
                    name: "Xoài keo",
                    price: 70000,
                },
                {
                    img: featured8,
                    name: "Táo",
                    price: 55000,
                },
            ],
        },
        fastFood: {
            title: "Thức ăn nhanh",
            products: [
                {
                    img: featured6,
                    name: "Hamburger",
                    price: 80000,
                },
            ],
        },
    };

    const renderFeatProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
        
        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>)

            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(<div className="col-lg-3" key={j}>
                    <div className="featured__item">
                        <div 
                            className="featured__item__pic"
                            style={{
                                backgroundImage: `url(${item.img})`
                            }}
                        >
                            <ul className="featured__item__pic__hover">
                                <li>
                                    <AiOutlineEye />
                                </li>
                                <li>
                                    <AiOutlineShoppingCart />
                                </li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6>
                                <Link to={""}>{item.name}</Link>
                            </h6>
                            <h5>{formatter(item.price)}</h5>
                        </div>
                    </div>
                </div>);
            });
            tabPanels.push(tabPanel);
        });


        return (
            <Tabs>
                <TabList>
                    {tabList}
                </TabList>
                {tabPanels.map((item, key) => (
                    <TabPanel key={key}>
                        <div className="row">{item}</div>
                    </TabPanel>
                ))}
                <TabPanel>
                <h2>Any content 1</h2>
                </TabPanel>
            </Tabs>
        )
    }

    return (
        <>
            <div className="container container__categories_slider">
                <Carousel 
                    responsive={responsive}
                    className="categories_slider"
                >
                    {
                        sliderItems.map((item, key) =>(
                            <div 
                                className="categories_slider_item"
                                style={{ backgroundImage: `url(${item.bgImg})` }}
                                key={key}
                            >
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className="container">
                <div className="featured">
                    <div className="section-title">
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    {renderFeatProducts(featProducts)}
                </div>
            </div>
            <div className="container">
                <div className="banner">
                    <div className="banner__pic">
                        <img src={banner1} alt="banner"/>
                    </div>
                    <div className="banner__pic">
                        <img src={banner2} alt="banner"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(HomePage);