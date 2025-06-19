import './HeroSection.css';

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <h2>
                            สมุนไพรไทยแท้
                            <span className="hero-title-highlight">เพื่อสุขภาพที่ดี</span>
                        </h2>
                        <p className="hero-description">
                            รวมสมุนไพรไทยคุณภาพสูง อาหารเสริมธรรมชาติ
                            และผลิตภัณฑ์เพื่อสุขภาพที่ได้มาตรฐานสากล
                        </p>
                        <div className="hero-buttons">
                            <button className="hero-button-primary">
                                เลือกซื้อสินค้า
                            </button>
                            <button className="hero-button-secondary">
                                เรียนรู้เพิ่มเติม
                            </button>
                        </div>
                    </div>
                    <div className="hero-stats">
                        <div className="stats-card">
                            <div className="stats-grid">
                                <div className="stat-item stat-green">
                                    <div className="stat-number">100+</div>
                                    <div className="stat-label">สมุนไพรไทย</div>
                                </div>
                                <div className="stat-item stat-blue">
                                    <div className="stat-number">50+</div>
                                    <div className="stat-label">อาหารเสริม</div>
                                </div>
                                <div className="stat-item stat-orange">
                                    <div className="stat-number">1000+</div>
                                    <div className="stat-label">ลูกค้าพึงพอใจ</div>
                                </div>
                                <div className="stat-item stat-purple">
                                    <div className="stat-number">24/7</div>
                                    <div className="stat-label">บริการลูกค้า</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}