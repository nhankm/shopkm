import { memo, useState } from "react";
import "./style.scss";
import { AiFillTwitterSquare, AiOutlineFacebook, AiOutlineMail, AiOutlineMenu, AiOutlinePhone, AiOutlinePinterest, AiOutlineShopping, AiOutlineUser } from "react-icons/ai"
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "../../../../utils/router";
const Header  = () => {

    const [isShowCategories, setShowCategories] = useState(true)
    const [menus] = useState([
        {
            name: "trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản Phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Thịt",
                    path: "",
                },
                {
                    name: "Rau củ",
                    path: "",
                },
                {
                    name: "Thức ăn nhanh",
                    path: "",
                },
            ]
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        },
    ])

    return (
    <>
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header__top_left">
                        <ul>
                            <li>
                                <AiOutlineMail />
                                hello@gmail.com
                            </li>
                            <li>Miễn phí ship đơn từ {formatter(200000)}</li>
                        </ul>
                    </div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                    <AiOutlineFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlinePinterest />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiFillTwitterSquare />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineUser />
                                </Link>
                                <span>Đăng nhập</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className="header__logo">
                        <h1>KM Shop</h1>
                    </div>
                </div>
                <div className="col-xl-6">

                    <nav className="header__menu">
                        <ul>
                            {
                                menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={ menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>
                                            {menu?.name}
                                        </Link>
                                        {
                                            menu.child && (
                                                <ul className="header__menu_dropdown">
                                                    {
                                                        menu.child.map((childItem, childKey) => (
                                                            <li key={`${menuKey}-${childKey}`}>
                                                                <Link to={childItem.path}>
                                                                    {childItem.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                    
                                                </ul>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                </div>
                <div className="col-xl-3">
                    <div className="header__cart">
                        <div className="header__cart__price">
                            <span>{formatter(300000)}</span>
                        </div>
                        <ul>
                            <li>
                                <Link to="#">
                                    <AiOutlineShopping /><span>5</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row hero__categories__container">
                <div className="col-lg-3 hero__categories">
                    <div className="hero__categories__all " onClick={() => setShowCategories(!isShowCategories)}>
                        <AiOutlineMenu />
                        Dánh sách sản phẩm
                    </div>
                    <ul className={isShowCategories ? "" : "hidden"}>
                        <li>
                            <Link to={"#"}>Thịt tươi</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Rau củ</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Nước trái cây</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Trái cây</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Hải sản</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-9 hero__search_container col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form>
                                <input 
                                    type="text"
                                    name=""
                                    placeholder="Bạn đang tìm gì?"
                                />
                                <button type="submit">Tìm kiếm</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <AiOutlinePhone />
                            </div>
                            <div className="hero__search__phone__text">
                                <p>0356.548.485</p>
                                <span>Hỗ trợ 24/7</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero__item">
                        <div className="hero__text">
                            <span>Trái cây tươi</span>
                            <h2>
                                Rau quả <br />
                                Sạch 100%
                            </h2>
                            <p>Miễn phí giao hàng tận nơi</p>
                            <Link to={""} className="primary-btn">
                                Mua ngày
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default memo(Header);