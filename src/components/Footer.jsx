import "./Footer.css"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-gride">
                    <div>
                        <h3 className="footer-company-title">Thai Market</h3>
                        <p className="footer-company-description">
                            ผู้จำหน่ายสมุนไพรไทยและผลิตภัณฑ์เพื่อสุขภาพคุณภาพสูง 
                            มุ่งมั่นในการนำเสนอสินค้าธรรมชาติที่ดีที่สุด
                        </p>
                        <div className="footer-social-links">
                            <a href="#" className="footer-social-link">
                                <Facebook className="footer-contact-icon" />
                            </a>
                            <a href="#" className="footer-social-link">
                                <Instagram className="footer-contact-icon" />
                            </a>
                            <a href="#" className="footer-social-link">
                                <Twitter className="footer-contact-icon" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-section-title">ลิงก์ด่วน</h4>
                        <ul className="footer-links-list">
                            <li><a href="#" className="footer-link">เกี่ยวกับเรา</a></li>
                            <li><a href="#" className="footer-link">สินค้าทั้งหมด</a></li>
                            <li><a href="#" className="footer-link">โปรโมชั่น</a></li>
                            <li><a href="#" className="footer-link">บทความสุขภาพ</a></li>
                            <li><a href="#" className="footer-link">ติดต่อเรา</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-section-title">หมวดหมู่สินค้า</h4>
                        <ul className="footer-links-list">
                            <li><a href="#" className="footer-link">สมุนไพรไทย</a></li>
                            <li><a href="#" className="footer-link">อาหารเสริม</a></li>
                            <li><a href="#" className="footer-link">ผลิตภัณฑ์ธรรมชาติ</a></li>
                            <li><a href="#" className="footer-link">เครื่องดื่มสุขภาพ</a></li>
                            <li><a href="#" className="footer-link">ผลิตภัณฑ์ความงาม</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-section-title">ติดต่อเรา</h4>
                        <div>
                            <div className="footer-contact-item">
                                <MapPin className="footer-contact-icon" />
                                <div className="footer-contact-address">
                                <p className="footer-contact-text">123 ถนนสุขภาพ</p>
                                <p className="footer-contact-text">เขตธรรมชาติ กรุงเทพฯ 10110</p>
                                </div>
                            </div>
                            <div className="footer-contact-item">
                                <Phone className="footer-contact-icon" />
                                <p className="footer-contact-text">02-123-4567</p>
                            </div>
                            <div className="footer-contact-item">
                                <Mail className="footer-contact-icon" />
                                <p className="footer-contact-text">info@thaiherbmarket.com</p>
                            </div>
                        </div>
                    </div>  
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2024 Thai Herb Market. สงวนลิขสิทธิ์ทุกประการ.
                    </p>
                </div>
            </div>
        </footer>
    )
}