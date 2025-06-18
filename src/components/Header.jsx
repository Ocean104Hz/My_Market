import React from "react"
import "./Header.css"

export default function Header() {


    return (
        <>
            <header>
                <div>
                    <div>
                        <div className="logo">
                            <h1>Thai Herb Market</h1>
                        </div>

                        <div>
                            <div>
                                <input type="text"  className="search-input" placeholder="ค้นหาสินค้า..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
