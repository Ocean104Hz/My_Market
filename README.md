# ร้านสมุนไพรไทยออนไลน์

โปรเจ็กต์เว็บไซต์ขายผ้าออนไลน์ที่สร้างด้วย React และ TypeScript

## ลิงก์โปรเจ็กต์

**URL**: 

## คุณสมบัติหลัก

- 🌿 แสดงสินค้าสมุนไพรไทยและอาหารเสริมธรรมชาติ
- 🔍 ระบบค้นหาสินค้า
- 🛒 ตะกร้าสินค้าพร้อมการจัดการรายการ
- 📱 ออกแบบแบบ Responsive สำหรับทุกอุปกรณ์
- ⭐ ระบบแสดงคะแนนรีวิวและความนิยม
- 🏷️ ระบบจัดหมวดหมู่สินค้า
- 💳 หน้าชำระเงินสำหรับสั่งซื้อ

## เทคโนโลยีที่ใช้

- **React** - JavaScript Library สำหรับสร้าง UI
- **TypeScript** - ภาษาโปรแกรมที่เพิ่ม Type Safety ให้ JavaScript
- **Vite** - Build Tool ที่รวดเร็ว
- **CSS** - CSS สำหรับการจัดแต่ง
- **shadcn/ui** - Component Library สำหรับ UI
- **Lucide React** - Icon Library
- **React Router** - สำหรับการจัดการเส้นทาง

## วิธีการติดตั้งและรัน

### ความต้องการ
- Node.js (แนะนำใช้ nvm สำหรับการจัดการ version)
- npm หรือ yarn

### ขั้นตอนการติดตั้ง

1. **Clone repository**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **ติดตั้ง dependencies**
```bash
npm install
```

3. **รันโปรเจ็กต์ในโหมด development**
```bash
npm run dev
```

4. **เปิดเบราว์เซอร์ไปที่** `http://localhost:5173`

## คำสั่งที่มีให้ใช้

```bash
# รันโปรเจ็กต์ในโหมด development
npm run dev

# Build โปรเจ็กต์สำหรับ production
npm run build

# Preview build ที่สร้างแล้ว
npm run preview

# ตรวจสอบ TypeScript
npm run type-check
```

## โครงสร้างโปรเจ็กต์

```
src/
├── components/          # React Components
│   ├── ui/             # UI Components (shadcn/ui)
│   ├── Header.tsx      # ส่วนหัวเว็บไซต์
│   ├── HeroSection.tsx # ส่วนแบนเนอร์หลัก
│   ├── ProductCard.tsx # การ์ดแสดงสินค้า
│   ├── ProductGrid.tsx # ตารางแสดงสินค้า
│   ├── Cart.tsx        # ตะกร้าสินค้า
│   └── Footer.tsx      # ส่วนท้ายเว็บไซต์
├── contexts/           # React Contexts
│   └── CartContext.tsx # จัดการสถานะตะกร้าสินค้า
├── pages/              # หน้าต่างๆ ของเว็บไซต์
│   ├── Index.tsx       # หน้าหลัก
│   ├── Checkout.tsx    # หน้าชำระเงิน
│   └── NotFound.tsx    # หน้า 404
├── hooks/              # Custom React Hooks
├── lib/                # Utility functions
└── main.tsx           # Entry point
```

## การแก้ไขโค้ด

### ใช้ ???


### ใช้ IDE ของคุณเอง
1. Clone repository นี้
2. แก้ไขโค้ดตามต้องการ
3. Push การเปลี่ยนแปลงกลับไปที่ GitHub

### แก้ไขไฟล์โดยตรงใน GitHub
1. เลือกไฟล์ที่ต้องการแก้ไข
2. คลิกปุ่ม "Edit" (รูปดินสอ)
3. แก้ไขและ commit การเปลี่ยนแปลง

## การเชื่อมต่อ Custom Domain

คุณสามารถเชื่อมต่อโดเมนของคุณเองได้

---

สร้างด้วย ❤️ โดยใช้ [Lovable](https://lovable.dev)