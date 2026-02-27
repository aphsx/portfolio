import { Project } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for project records.
// tags: use plain English strings. Translations for tag labels live in i18n.
// ---------------------------------------------------------------------------

export const projectsSeed: Project[] = [
    {
        id: 'proj-001',
        slug: 'enterprise-resource-planning',
        isActive: true,
        order: 1,
        category: 'collaborations',
        status: 'completed',
        featured: false,
        year: 2024,
        title: {
            en: '',
            th: 'ระบบการวางแผนจัดการการผลิต',
            ja: '',
        },
        description: {
            en: '',
            th: 'ระบบ ERP ที่ครอบคลุมที่ออกแบบสำหรับการดำเนินงานการผลิตทางทหาร มีการจัดการสินค้าคงคลังขั้นสูงและความสามารถในการวางแผนการผลิต',
            ja: '',
        },
        shortDescription: {
            en: '',
            th: 'ระบบ ERP สำหรับการผลิตทางทหารพร้อมการจัดการสินค้าคงคลัง',
        },
        descriptionLong: {
            en: '',
            th: 'พัฒนาระบบการวางแผนทรัพยากรองค์กรที่ซับซ้อนซึ่งปรับแต่งสำหรับการดำเนินงานการผลิตทางทหาร ระบบนี้รวมการจัดการสินค้าคงคลัง การจัดตารางการผลิต และการจัดสรรทรัพยากรสร้างด้วย React ในโปรเจคนี้ผมได้มีส่วนร่วมในการพัฒนาส่วนหน้าของระบบหลังบ้าน ยกตัวอย่างฟังชันก์ที่สำคัญ เช่น Database ฟังก์ชันการวางแผนการผลิต แทรกtask แบ่งtask',
        },
        image: '/images/IMG_2701.JPG',
        images: [],
        link: '',
        github: '',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Inventory Management'],
    },
    {
        id: 'proj-002',
        slug: 'medical-elearning-platform',
        isActive: true,
        order: 2,
        category: 'collaborations',
        status: 'completed',
        featured: false,
        year: 2024,
        title: {
            en: '',
            th: 'แพลตฟอร์มอีเลิร์นนิงทางการแพทย์',
            ja: '',
        },
        description: {
            en: '',
            th: 'แพลตฟอร์มอีเลิร์นนิงแบบโต้ตอบที่ออกแบบสำหรับนักศึกษาแพทย์ มีกรณีศึกษาที่ครอบคลุมและเครื่องมือประเมิน',
            ja: '',
        },
        shortDescription: {
            en: '',
            th: 'แพลตฟอร์มอีเลิร์นนิงรังสีวิทยาพร้อมกรณีศึกษาแบบโต้ตอบ',
        },
        descriptionLong: {
            en: '',
            th: 'สร้างแพลตฟอร์มอีเลิร์นนิงที่นวัตกรรมซึ่งออกแบบเฉพาะสำหรับการศึกษา แพลตฟอร์มนี้ให้นักศึกษาแพทย์เข้าถึงไลบรารีที่ครอบคลุมของกรณีศึกษาในโลกแห่งความเป็นจริง เครื่องมือถ่ายภาพแบบโต้ตอบ และโมดูลการประเมินแบบก้าวหน้า คุณสมบัติรวมถึงการรวม DICOM image viewer โมดูลการเรียนรู้ตามกรณี การติดตามความก้าวหน้า และเครื่องมือความร่วมมือของเพื่อน',
        },
        image: '/images/project/E-Learning.png',
        images: [],
        link: '',
        github: '',
        tags: ['React', 'Node.js', 'Golang', 'Educational Technology'],
    },
    {
        id: 'proj-003',
        slug: 'cosi-website',
        isActive: true,
        order: 3,
        category: 'collaborations',
        status: 'completed',
        featured: false,
        year: 2024,
        title: {
            en: '',
            th: 'เว็บไซต์ศูนย์นวัตกรรมเฉพาะทาง',
            ja: '',
        },
        description: {
            en: '',
            th: 'เว็บไซต์ที่ทันสมัยและตอบสนองสำหรับห้องปฏิบัติการศูนย์นวัตกรรมเฉพาะทาง แสดงโครงการวิจัย กิจกรรม และโครงการส่งผลกระทบต่อชุมชน',
            ja: '',
        },
        shortDescription: {
            en: '',
            th: 'เว็บไซต์ห้องปฏิบัติการมหาวิทยาลัยแสดงโครงการวิจัย',
        },
        descriptionLong: {
            en: '',
            th: 'ออกแบบและพัฒนาเว็บไซต์ที่ครอบคลุมสำหรับห้องปฏิบัติการศูนย์นวัตกรรมเฉพาะทาง (CoSI) ที่มหาวิทยาลัยกรุงเทพ เว็บไซต์ทำหน้าที่เป็นศูนย์กลางดิจิทัลสำหรับการแสดงโครงการวิจัยที่กำลังดำเนินอยู่ กิจกรรมที่จะเกิดขึ้น และผลกระทบของศูนย์ต่อนวัตกรรมทางสังคม คุณสมบัติรวมถึงแกลเลอรีพอร์ตโฟลิโอโครงการ ระบบการจัดการกิจกรรม ฐานข้อมูลสิ่งพิมพ์วิจัย โปรไฟล์สมาชิกทีม และระบบติดต่อแบบโต้ตอบ',
        },
        image: '/images/project/CoSI_web.png',
        images: [],
        link: 'https://cosi.bu.ac.th',
        github: '',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    },
    {
        id: 'proj-004',
        slug: 'personal-portfolio',
        isActive: true,
        order: 4,
        category: 'works',
        status: 'completed',
        featured: true,
        year: 2024,
        title: {
            en: '',
            th: 'เว็บไซต์ผลงานส่วนตัว',
            ja: '',
        },
        description: {
            en: '',
            th: 'เว็บไซต์ผลงานส่วนตัวเพื่อแสดงโปรเจค ทักษะ และประสบการณ์',
            ja: '',
        },
        shortDescription: {
            en: '',
            th: 'เว็บไซต์ผลงานส่วนตัวสร้างด้วย React และ Tailwind CSS.',
        },
        descriptionLong: {
            en: '',
            th: 'เว็บไซต์ผลงานส่วนตัวที่ออกแบบมาเพื่อแสดงโปรเจค ทักษะ และประสบการณ์ทางวิชาชีพของผม เว็บไซต์มีการออกแบบส่วนต่างๆ การแสดงโปรเจค ทักษะ และข้อมูลการติดต่อ สร้างขึ้นโดยใช้ React และ Tailwind CSS สำหรับการจัดแต่งอย่างรวดเร็วและการตอบสนอง ยกตัวอย่างฟังชันก์ที่สำคัญ เช่น Dark mode, Language switcher',
        },
        image: '/images/portfolio.png',
        images: [{ url: '/images/portfolio.png', isPrimary: true }],
        link: 'https://portfolio-aphsx.vercel.app/',
        github: 'https://github.com/aphsix/Portfolio',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    },
    {
        id: 'proj-005',
        slug: 'tourism-website',
        isActive: true,
        order: 5,
        category: 'collaborations',
        status: 'completed',
        featured: false,
        year: 2024,
        title: {
            en: '',
            th: 'เว็บไซต์ท่องเที่ยว',
            ja: '',
        },
        description: {
            en: '',
            th: 'เว็บไซต์ท่องเที่ยวที่มีชีวิตชีวาเพื่อส่งเสริมสถานที่ท่องเที่ยวในท้องถิ่น กิจกรรม และคู่มือการเดินทาง สร้างด้วย Next.js และจัดแต่งด้วย Tailwind CSS',
            ja: '',
        },
        shortDescription: {
            en: '',
            th: 'เว็บไซต์ท่องเที่ยวสร้างด้วย Next.js และ Tailwind CSS.',
        },
        descriptionLong: {
            en: '',
            th: 'เว็บไซต์ท่องเที่ยวที่ออกแบบมาเพื่อส่งเสริมสถานที่ท่องเที่ยวในท้องถิ่น กิจกรรม และคู่มือการเดินทาง เว็บไซต์มีการออกแบบที่มีสีสันและน่าสนใจ พร้อมส่วนต่างๆ สำหรับจุดหมายปลายทางยอดนิยม กิจกรรมที่จะเกิดขึ้น เคล็ดลับการเดินทาง และบทวิจารณ์ของผู้ใช้',
        },
        image: '/images/project/Tourism.png',
        images: [],
        link: '',
        github: '',
        tags: ['Next.js', 'Tailwind CSS', 'Golang', 'JavaScript', 'Responsive Design'],
    },
    {
        id: 'proj-006',
        slug: '3d-trajectory-control',
        isActive: true,
        order: 6,
        category: 'works',
        status: 'completed',
        featured: true,
        year: 2025,
        title: {
            en: '',
            th: 'ระบบคำนวณและควบคุมวิถีเคลื่อนที่แบบ 3 มิติ',
            ja: '',
        },
        description: {
            en: '',
            th: 'ระบบคำนวณความแม่นยำสูงสำหรับการเคลื่อนที่ของวิถี ซึ่งรวบรวมข้อมูลสภาพแวดล้อมแบบเรียลไทม์ การวิเคราะห์ภูมิประเทศ และการแสดงผล 3 มิติเพื่อกำหนดแนวทางวิถีที่แม่นยำที่สุด',
            ja: '',
        },
        shortDescription: {
            en: '',
            th: 'คอมพิวเตอร์คำนวณ 3 มิติขั้นสูง พร้อมระบบแก้ค่าสภาพอากาศและแผนที่ภูมิประเทศ',
        },
        descriptionLong: {
            en: '',
            th: `ซอฟต์แวร์ทางเทคนิคขั้นสูงที่ออกแบบมาเพื่อยกระดับการปฏิบัติการของการเคลื่อนที่ของวิถีสนาม ระบบนี้ช่วยเปลี่ยนการคำนวณด้วยแรงงานคนให้เป็นระบบอัตโนมัติที่ซับซ้อน โดยรวมข้อมูลจากตารางอ้างอิง (Reference Tables) เข้ากับปัจจัยสภาพแวดล้อมแบบ Real-time

### รายละเอียดทางเทคนิคที่สำคัญ:
1. **กลไกการคำนวณ (Computational Engine)**: พัฒนาระบบประมวลผล 11 ขั้นตอน (Step-by-step pipeline) ที่คำนวณวิถีตามประเภท, น้ำหนัก และข้อมูลอุตุนิยมวิทยา (ลม, ความหนาแน่นอากาศ, อุณหภูมิ)
2. **การแสดงผล 3 มิติ**: สร้างเอนจินการแสดงผลแบบ 3 มิติเพื่อจำลองวิถี จุดตก และความสูงต่ำของภูมิประเทศ ช่วยให้ผู้ปฏิบัติงานเห็นภาพสิ่งกีดขวางและผลกระทบของภูมิประเทศ
3. **ระบบปรับแก้การเคลื่อนที่ (Adjustment System)**: พัฒนาระบบอัจฉริยะที่บันทึกผลลัพธ์ที่ตรวจการณ์ได้ และคำนวณวิธีแก้ซ้ำแบบวนซ้ำ (Iterative) เพื่อลดระยะห่างระหว่างแนวทางที่ตั้งใจกับผลลัพธ์จริง
4. **การจัดการข้อมูล**: ระบบการจัดการ, ฐานข้อมูล และระบบการบันทึก/โหลดภารกิจที่แข็งแกร่งด้วย React Hooks และระบบจัดเก็บข้อมูลบน Electron`,
        },
        image: '/images/project/3FCD.png',
        images: [
            {
                url: '/images/project/3FCD.png',
                caption: { en: '3D Trajectory Visualization', th: 'การแสดงผลวิถี 3 มิติ' },
                isPrimary: true,
            },
        ],
        link: '',
        github: '',
        tags: ['React', 'TypeScript', 'Electron', '3D Graphics', 'Data Analytics', 'Mathematical Modeling'],
    },
    {
        id: 'proj-007',
        slug: 'tradingclaw-market-scanner',
        isActive: true,
        order: 7,
        category: 'works',
        status: 'completed',
        featured: true,
        year: 2025,
        title: {
            en: '',
            th: 'TradingClaw: ระบบสแกนและวิเคราะห์โครงสร้างจุลภาคดัชนีตลาด',
            ja: '',
        },
        description: {
            en: '',
            th: 'ระบบสแกนคริปโทเคอร์เรนซีประสิทธิภาพสูงที่พัฒนาด้วย Rust เพื่อวิเคราะห์ Limit Order Book (LOB) และข้อมูลการซื้อขายแบบเรียลไทม์สำหรับการทดสอบกลยุทธ์',
            ja: '',
        },
        shortDescription: {
            en: '',
            th: 'เอนจินสแกนตลาดคริปโตความถี่สูงและวิเคราะห์ความสัมพันธ์ข้ามศูนย์ซื้อขายด้วยภาษา Rust',
        },
        descriptionLong: {
            en: '',
            th: `ระบบวิเคราะห์การเทรดเชิงปริมาณที่มีความแม่นยำและเสถียรภาพ ออกแบบมาเพื่อตรวจสอบความถดถอยของกลยุทธ์ระดับโครงสร้างจุลภาคของตลาดก่อนการเทรดจริง ระบบถูกเชื่อมต่อกับกระดานเทรดชั้นนำผ่าน WebSockets เพื่อประมวลผลกระแสข้อมูลความถี่สูง

### รายละเอียดทางเทคนิคที่สำคัญ:
1. **สถาปัตยกรรมประสิทธิภาพสูง**: พัฒนาด้วยภาษา Rust ทั้งระบบ โดยใช้แพลตฟอร์ม \`tokio\` (Async runtime) เพื่อรองรับการทำงานพร้อมกันจำนวนมหาศาลและลดความหน่วง (Latency) ในการประมวลผลข้อมูลให้เหลือน้อยที่สุด
2. **ระบบท่อส่งข้อมูลแบบเรียลไทม์**: พัฒนา WebSocket ไคลเอนต์เชื่อมต่อโดยตรงกับ Binance และ Bybit เพื่อดึงข้อมูล Limit Order Book (LOB) และคำสั่งซื้อขายรวมแบบรวดเร็วที่สุด
3. **สัญญาณเชิงปริมาณขั้นสูง (Quant Signals)**: สร้างระบบคำนวณแบบรีดประสิทธิภาพสำหรับหาตัวชี้วัดความถี่สูงที่ซับซ้อน เช่น Multi-Level Order Flow Imbalance (MLOFI), Volume Adjusted Mid Price (VAMP) และ Lead-lag correlation ระหว่างกระดานเทรด
4. **เอนจินประเมินผลกลยุทธ์**: สร้างระบบวิเคราะห์โอกาสแบบผสมผสาน (Composite Opportunity Score - COS) เพื่อให้คะแนน ตัดสิน จัดอันดับ และออกรายงานความเหมาะสมของเหรียญต่างๆ สำหรับกลยุทธ์การเทรดขั้นสูง`,
        },
        image: '/images/project/Scanner.png',
        images: [
            {
                url: '/images/project/Scanner.png',
                caption: { en: 'Real-time LOB Analysis & Opportunity Scoring', th: 'การวิเคราะห์ LOB แบบเรียลไทม์' },
                isPrimary: true,
            },
        ],
        link: '',
        github: 'https://github.com/aphsx/TradingClaw',
        tags: ['Rust', 'WebSocket', 'High-Frequency Trading', 'Data Analytics', 'Quantitative Finance', 'Async Programming'],
    },
    {
        id: 'proj-008',
        slug: 'trading-short-term-scalping',
        isActive: true,
        order: 8,
        category: 'works',
        status: 'completed',
        featured: true,
        year: 2025,
        title: {
            en: '',
            th: 'Trading Short Term Futures Scalping and Backtesting',
            ja: '',
        },
        description: {
            en: '',
            th: 'บอทเทรดอัจฉริยะสำหรับ Binance Futures ที่ใช้ระบบวิเคราะห์ 5 เอนจินขนานกัน ทั้งแรงซื้อขายจริง โมเมนตัม และอารมณ์ตลาด เพื่อทำกำไรในระยะสั้นอย่างแม่นยำ',
            ja: '',
        },
        shortDescription: {
            en: '',
            th: 'ระบบเทรดอัตโนมัติแบบ Multi-engine พร้อมการจัดการความเสี่ยงอัจฉริยะและการกรองสภาวะตลาดแบบเรียลไทม์',
        },
        descriptionLong: {
            en: '',
            th: `เอนจินการเทรดประสิทธิภาพสูงที่ออกแบบมาสำหรับตลาด Binance Perpetual Futures โดยเฉพาะ ทำงานด้วยสถาปัตยกรรมแบบ 5 เอนจินอิสระที่ประมวลผลขนานกันเพื่อวิเคราะห์โครงสร้างตลาดและตัดสินใจภายในเวลาไม่กี่มิลลิวินาที

### รายละเอียดทางเทคนิคที่สำคัญ:
1. **ระบบวิเคราะห์ 5 เอนจินอัจฉริยะ**:
   - **Order Flow (E1)**: วิเคราะห์ความไม่สมดุลของกำแพงซื้อขาย (Imbalance) และราคายุติธรรม (Micro-price)
   - **Tick Momentum (E2)**: ติดตามแรงเคาะซื้อขายจริงและความเร็วของกระแสคำสั่งซื้อ
   - **Technical (E3)**: ตัวชี้วัดทางเทคนิค (RSI, BB) ที่ปรับค่าตามความผันผวนจริง (ATR)
   - **Sentiment (E4)**: วิเคราะห์อารมณ์ตลาดผ่าน Long/Short Ratio และค่า Funding Rate เพื่อหาจุดกลับตัว
   - **Regime Filter (E5)**: "สมองส่วนกลาง" ที่จำแนกสภาวะตลาด (Low/Normal/High Vol) และปรับน้ำหนักความสำคัญของแต่ละเอนจินโดยอัตโนมัติ
2. **การจัดการความเสี่ยงขั้นสูง**: ระบบคำนวณขนาดไม้ตามความมั่นใจ (Confidence Score) และมีระบบ "Liquidation Squeeze" ที่คอยบีบระยะ SL/TP โดยอัตโนมัติเพื่อป้องกันการถูกล้างพอร์ตก่อนราคาจะถึงจุด Stop Loss
3. **ระบบประมวลผลความเร็วสูง**: พัฒนาด้วย Python \`asyncio\` และ \`ccxt.pro\` เพื่อเชื่อมต่อ WebSocket แบบเรียลไทม์ ทำให้ระบบสามารถตอบสนองต่อตลาดได้รวดเร็วทันท่วงที
4. **การจัดเก็บข้อมูลเชิงลึก**: เชื่อมต่อกับ Supabase เพื่อบันทึกข้อมูลการเทรดอย่างละเอียด รวมถึงค่าความหน่วงของ API (Latency) และประสิทธิภาพของแต่ละกลยุทธ์เพื่อการพัฒนาอย่างต่อเนื่อง`,
        },
        image: '/images/project/FutureScalping.png',
        images: [
            { url: '/images/project/FutureScalping1.png', caption: { en: 'Multi-Engine Signal Processing', th: 'ระบบประมวลผล Multi-Engine' } },
            { url: '/images/project/FutureScalping.png', caption: { en: 'Future Scalping Result', th: 'ผลการ Scalping' }, isPrimary: true },
        ],
        link: '',
        github: 'https://github.com/aphsx/TradingShortTerm',
        tags: ['Python', 'Asyncio', 'CCXT', 'Algorithmic Trading', 'Market Microstructure', 'Supabase'],
    },
]
