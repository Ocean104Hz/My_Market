import React from "react"
import "./Header.css"
import { Search, ShoppingCart, Heart, User } from "lucide-react"

export default function Header() {


    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="header-content">
                        <div className="logo">
                            <h1>Thai Market</h1>
                        </div>

                        <div className="search-container">
                            <div className="search-wrapper">
                                <Search className="search-icon"/>
                                <input type="text"  className="search-input" placeholder="ค้นหาสินค้า..."/>
                            </div>
                        </div>
                        <div className="actions">
                            <button className="action-button">
                                <Heart size={24}/>
                            </button>
                            <button className="action-button">
                                <User size={24}/>
                            </button>
                            <button className="action-button">
                                <ShoppingCart size={24} />
                                <span className="cart-badge">1</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="navigation">
                    <div className="nav-container">
                        <nav>
                            <ul className="nav-list">
                                <li><a href="#" className="nav-link">หน้าแรก</a></li>
                                <li><a href="#" className="nav-link">สินค้าลดราคา</a></li>
                                <li><a href="#" className="nav-link">สินค้าที่มาใหม่</a></li>
                                <li><a href="#" className="nav-link">เกี่ยวกับเรา</a></li>
                                <li><a href="#" className="nav-link">ติดต่อเรา</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
