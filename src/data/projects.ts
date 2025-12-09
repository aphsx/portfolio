import { Project } from "../types";
import { createLocalizedText } from "../utils";

export const projects: Project[] = [
  {
    id: "1",
    title: createLocalizedText(
      "Enterprise Resource Planning System",
      "ระบบการวางแผนจัดการการผลิต",
    ),
    description: createLocalizedText(
      "A comprehensive ERP system for military manufacturing that handles inventory management, production scheduling, and resource allocation.",
      "ระบบ ERP ที่ครอบคลุมที่ออกแบบสำหรับการดำเนินงานการผลิตทางทหาร มีการจัดการสินค้าคงคลังขั้นสูงและความสามารถในการวางแผนการผลิต",
    ),
    shortDescription: createLocalizedText(
      "Planning system for military manufacturing with inventory management and production planning.",
      "ระบบ ERP สำหรับการผลิตทางทหารพร้อมการจัดการสินค้าคงคลัง",
    ),
    descriptionLong: createLocalizedText(
      " A comprehensive Enterprise Resource Planning (ERP) system tailored for military manufacturing operations. The system integrates advanced inventory management, production scheduling, and resource allocation capabilities to streamline manufacturing processes and improve operational efficiency. Built with React, the project involved developing the front-end of the back-office system, implementing key functionalities such as database management, production planning functions, task insertion, and task division.",
      "พัฒนาระบบการวางแผนทรัพยากรองค์กรที่ซับซ้อนซึ่งปรับแต่งสำหรับการดำเนินงานการผลิตทางทหาร ระบบนี้รวมการจัดการสินค้าคงคลัง การจัดตารางการผลิต และการจัดสรรทรัพยากรสร้างด้วย React ในโปรเจคนี้ผมได้มีส่วนร่วมในการพัฒนาส่วนหน้าของระบบหลังบ้าน ยกตัวอย่างฟังชันก์ที่สำคัญ เช่น Database ฟังก์ชันการวางแผนการผลิต แทรกtask แบ่งtask",
    ),
    image: "/images/IMG_2701.JPG",
    images: [],
    link: "",
    github: "",
    tags: createLocalizedText(
      ["React", "TypeScript", "Tailwind CSS", "Inventory Management"],
      ["React", "TypeScript", "Tailwind CSS", "การจัดการ การผลิต"],
    ),
    category: "collaborations",
  },
  {
    id: "5",
    title: createLocalizedText("Tourism Website", "เว็บไซต์ท่องเที่ยว"),
    description: createLocalizedText(
      "A vibrant tourism website promoting local attractions, events, and travel guides, built with Next.js and styled with Tailwind CSS.",
      "เว็บไซต์ท่องเที่ยวที่มีชีวิตชีวาเพื่อส่งเสริมสถานที่ท่องเที่ยวในท้องถิ่น กิจกรรม และคู่มือการเดินทาง สร้างด้วย Next.js และจัดแต่งด้วย Tailwind CSS",
    ),
    shortDescription: createLocalizedText(
      "Tourism website built with Next.js and Tailwind CSS.",
      "เว็บไซต์ท่องเที่ยวสร้างด้วย Next.js และ Tailwind CSS.",
    ),
    descriptionLong: createLocalizedText(
      "A tourism website designed to promote local attractions, events, and travel guides. The site features a colorful and engaging design with sections for popular destinations, upcoming events, travel tips, and user reviews. Built using Next.js for server-side rendering and SEO optimization, along with Tailwind CSS for a responsive and visually appealing layout.",
      "เว็บไซต์ท่องเที่ยวที่ออกแบบมาเพื่อส่งเสริมสถานที่ท่องเที่ยวในท้องถิ่น กิจกรรม และคู่มือการเดินทาง เว็บไซต์มีการออกแบบที่มีสีสันและน่าสนใจ พร้อมส่วนต่างๆ สำหรับจุดหมายปลายทางยอดนิยม กิจกรรมที่จะเกิดขึ้น เคล็ดลับการเดินทาง และบทวิจารณ์ของผู้ใช้ สร้างขึ้นโดยใช้ Next.js สำหรับการเรนเดอร์ฝั่งเซิร์ฟเวอร์และการเพิ่มประสิทธิภาพ SEO รวมถึง Tailwind CSS สำหรับเลย์เอาต์ที่ตอบสนองและน่าดึงดูดทางสายตา",
    ),
    image: "/images/project/Tourism.png",
    images: [],
    link: "",
    github: "",
    tags: createLocalizedText(
      [
        "Next.js",
        "Tailwind CSS",
        "Golang",
        "JavaScript",
        "Responsive Design",
        "Web Development",
      ],
      [
        "Next.js",
        "Tailwind CSS",
        "Golang",
        "JavaScript",
        "การออกแบบตอบสนอง",
        "การพัฒนาเว็บ",
      ],
    ),
    category: "collaborations",
  },
  {
    id: "2",
    title: createLocalizedText(
      "Medical E-Learning Platform",
      "แพลตฟอร์มอีเลิร์นนิงทางการแพทย์",
    ),
    description: createLocalizedText(
      "An interactive e-learning platform designed for medical students specializing in radiology, featuring comprehensive case studies and assessment tools.",
      "แพลตฟอร์มอีเลิร์นนิงแบบโต้ตอบที่ออกแบบสำหรับนักศึกษาแพทย์ มีกรณีศึกษาที่ครอบคลุมและเครื่องมือประเมิน",
    ),
    shortDescription: createLocalizedText(
      "E-learning platform for medical radiology with interactive case studies and assessments.",
      "แพลตฟอร์มอีเลิร์นนิงรังสีวิทยาพร้อมกรณีศึกษาแบบโต้ตอบ",
    ),
    descriptionLong: createLocalizedText(
      "An e-learning platform for medical radiology education that provides medical students with access to real-world case studies, interactive imaging tools, and assessment modules. The platform includes DICOM image viewer integration, case-based learning modules, progress tracking, and collaboration tools.",
      "สร้างแพลตฟอร์มอีเลิร์นนิงที่นวัตกรรมซึ่งออกแบบเฉพาะสำหรับการศึกษา แพลตฟอร์มนี้ให้นักศึกษาแพทย์เข้าถึงไลบรารีที่ครอบคลุมของกรณีศึกษาในโลกแห่งความเป็นจริง เครื่องมือถ่ายภาพแบบโต้ตอบ และโมดูลการประเมินแบบก้าวหน้า คุณสมบัติรวมถึงการรวม DICOM image viewer โมดูลการเรียนรู้ตามกรณี การติดตามความก้าวหน้า และเครื่องมือความร่วมมือของเพื่อน",
    ),
    image: "/images/project/E-Learning.png",
    images: [],
    link: "",
    github: "",
    tags: createLocalizedText(
      ["React", "Node.js", "Golang", "Educational Technology"],
      ["React", "Node.js", "Golang", "เทคโนโลยีการศึกษา"],
    ),
    category: "collaborations",
  },
  {
    id: "3",
    title: createLocalizedText(
      "Center of Social Innovation Website",
      "เว็บไซต์ศูนย์นวัตกรรมเฉพาะทาง",
    ),
    description: createLocalizedText(
      "A modern, responsive website for the Center of Social Innovation Lab, showcasing research projects, events, and community impact initiatives.",
      "เว็บไซต์ที่ทันสมัยและตอบสนองสำหรับห้องปฏิบัติการศูนย์นวัตกรรมเฉพาะทาง แสดงโครงการวิจัย กิจกรรม และโครงการส่งผลกระทบต่อชุมชน",
    ),
    shortDescription: createLocalizedText(
      "University lab website showcasing research projects and social innovation initiatives.",
      "เว็บไซต์ห้องปฏิบัติการมหาวิทยาลัยแสดงโครงการวิจัย",
    ),
    descriptionLong: createLocalizedText(
      "A comprehensive website for the Center of Social Innovation (CoSI) Lab at Bangkok University. The site showcases ongoing research projects, upcoming events, and the center's impact on social innovation. Features include project portfolio galleries, event management system, research publication database, team member profiles, and an interactive contact system.",
      "ออกแบบและพัฒนาเว็บไซต์ที่ครอบคลุมสำหรับห้องปฏิบัติการศูนย์นวัตกรรมเฉพาะทาง (CoSI) ที่มหาวิทยาลัยกรุงเทพ เว็บไซต์ทำหน้าที่เป็นศูนย์กลางดิจิทัลสำหรับการแสดงโครงการวิจัยที่กำลังดำเนินอยู่ กิจกรรมที่จะเกิดขึ้น และผลกระทบของศูนย์ต่อนวัตกรรมทางสังคม คุณสมบัติรวมถึงแกลเลอรีพอร์ตโฟลิโอโครงการ ระบบการจัดการกิจกรรม ฐานข้อมูลสิ่งพิมพ์วิจัย โปรไฟล์สมาชิกทีม และระบบติดต่อแบบโต้ตอบ",
    ),
    image: "/images/project/CoSI_web.png",
    images: [],
    link: "https://cosi.bu.ac.th",
    github: "",
    tags: createLocalizedText(
      [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
        "University Website",
      ],
      [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "การออกแบบตอบสนอง",
        "เว็บไซต์มหาวิทยาลัย",
      ],
    ),
    category: "collaborations",
  },
  {
    id: "4",
    title: createLocalizedText(
      "Personal Portfolio Website",
      "เว็บไซต์ผลงานส่วนตัว",
    ),
    description: createLocalizedText(
      "A personal portfolio website to showcase projects, skills, and experience.",
      "เว็บไซต์ผลงานส่วนตัวเพื่อแสดงโปรเจค ทักษะ และประสบการณ์ ",
    ),
    shortDescription: createLocalizedText(
      "Personal portfolio website built with React and Tailwind CSS.",
      "เว็บไซต์ผลงานส่วนตัวสร้างด้วย React และ Tailwind CSS.",
    ),
    descriptionLong: createLocalizedText(
      "A personal portfolio website designed to showcase my projects, skills, and professional experience. The site features sections for project highlights, skill sets, and contact information. Built using React and Tailwind CSS for rapid styling and responsiveness. Key functionalities include Dark mode, Language switcher.",
      "เว็บไซต์ผลงานส่วนตัวที่ออกแบบมาเพื่อแสดงโปรเจค ทักษะ และประสบการณ์ทางวิชาชีพของผม เว็บไซต์มีการออกแบบส่วนต่างๆ การแสดงโปรเจค ทักษะ และข้อมูลการติดต่อ สร้างขึ้นโดยใช้ React และ Tailwind CSS สำหรับการจัดแต่งอย่างรวดเร็วและการตอบสนอง ยกตัวอย่างฟังชันก์ที่สำคัญ เช่น Dark mode, Language switcher",
    ),
    image: "/images/portfolio.png",
    images: ["/images/portfolio.png"],
    link: "https://portfolio-aphsx.vercel.app/",
    github: "https://github.com/aphsix/Portfolio",
    tags: createLocalizedText(
      [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Responsive Design",
        "Web Development",
      ],
      [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "การออกแบบตอบสนอง",
        "การพัฒนาเว็บ",
      ],
    ),
    category: "works",
  },
  {
    id: "6",
    title: createLocalizedText(
      "3D Trajectory Control Computer",
      "ระบบคำนวณและควบคุมวิถีเคลื่อนที่แบบ 3 มิติ",
    ),
    description: createLocalizedText(
      "A high-precision modular computing system that integrates real-time environmental data, terrain analysis, and 3D visualization to provide accurate operational solutions.",
      "ระบบคำนวณความแม่นยำสูงสำหรับการเคลื่อนที่ของวิถี ซึ่งรวบรวมข้อมูลสภาพแวดล้อมแบบเรียลไทม์ การวิเคราะห์ภูมิประเทศ และการแสดงผล 3 มิติเพื่อกำหนดแนวทางวิถีที่แม่นยำที่สุด",
    ),
    shortDescription: createLocalizedText(
      "Advanced 3D computing system for field operations with environmental corrections and terrain mapping.",
      "คอมพิวเตอร์คำนวณ 3 มิติขั้นสูง พร้อมระบบแก้ค่าสภาพอากาศและแผนที่ภูมิประเทศ",
    ),
    descriptionLong: createLocalizedText(
      `An advanced tactical software suite designed to modernize field operations. The system automates complex calculations by integrating data from reference tables with real-time environmental factors.

### Key Technical Details:
1. **Computational Engine**: Implemented a multi-step processing pipeline (11 steps) that calculates trajectories based on equipment types, parameters, and meteorological data (wind, air density, temperature).
2. **3D Visualization**: Built using a custom 3D rendering engine to visualize trajectories, impact points, and terrain elevations, allowing operators to see potential obstructions and terrain impacts.
3. **Intelligent Refinement**: Developed an adjustment system that records observed results and re-calculates solutions iteratively to close the gap between intended and actual outcomes.
4. **Data Management**: Robust system for handling registries, databases, and session management using React hooks and Electron-based storage.`,

      `ซอฟต์แวร์ทางเทคนิคขั้นสูงที่ออกแบบมาเพื่อยกระดับการปฏิบัติการของการเคลื่อนที่ของวิถีสนาม ระบบนี้ช่วยเปลี่ยนการคำนวณด้วยแรงงานคนให้เป็นระบบอัตโนมัติที่ซับซ้อน โดยรวมข้อมูลจากตารางอ้างอิง (Reference Tables) เข้ากับปัจจัยสภาพแวดล้อมแบบ Real-time

### รายละเอียดทางเทคนิคที่สำคัญ:
1. **กลไกการคำนวณ (Computational Engine)**: พัฒนาระบบประมวลผล 11 ขั้นตอน (Step-by-step pipeline) ที่คำนวณวิถีตามประเภท, น้ำหนัก และข้อมูลอุตุนิยมวิทยา (ลม, ความหนาแน่นอากาศ, อุณหภูมิ)
2. **การแสดงผล 3 มิติ**: สร้างเอนจินการแสดงผลแบบ 3 มิติเพื่อจำลองวิถี จุดตก และความสูงต่ำของภูมิประเทศ ช่วยให้ผู้ปฏิบัติงานเห็นภาพสิ่งกีดขวางและผลกระทบของภูมิประเทศ
3. **ระบบปรับแก้การเคลื่อนที่ (Adjustment System)**: พัฒนาระบบอัจฉริยะที่บันทึกผลลัพธ์ที่ตรวจการณ์ได้ และคำนวณวิธีแก้ซ้ำแบบวนซ้ำ (Iterative) เพื่อลดระยะห่างระหว่างแนวทางที่ตั้งใจกับผลลัพธ์จริง
4. **การจัดการข้อมูล**: ระบบการจัดการ, ฐานข้อมูล และระบบการบันทึก/โหลดภารกิจที่แข็งแกร่งด้วย React Hooks และระบบจัดเก็บข้อมูลบน Electron`,
    ),
    image: "/images/project/3FCD.png",
    images: [
      {
        url: "/images/project/3FCD.png",
        caption: "3D Trajectory Visualization",
      },
    ],
    link: "",
    github: "",
    tags: createLocalizedText(
      [
        "React",
        "TypeScript",
        "Electron",
        "3D Graphics",
        "Data Analytics",
        "Mathematical Modeling",
      ],
      [
        "React",
        "TypeScript",
        "Electron",
        "กราฟิก 3 มิติ",
        "ตรรกะคณิตศาสตร์ขั้นสูง",
        " การจัดการข้อมูลเชิงลึก",
      ],
    ),
    category: "works",
  },
  {
    id: "7", // เปลี่ยนหมายเลข ID ตามลำดับโปรเจคของคุณ
    title: createLocalizedText(
      "TradingClaw: Market Microstructure Scanner",
      "TradingClaw: ระบบสแกนและวิเคราะห์โครงสร้างจุลภาคดัชนีตลาด",
    ),
    description: createLocalizedText(
      "A high-performance cryptocurrency scanning system built in Rust to analyze real-time Limit Order Book (LOB) and trade data for strategy validation.",
      "ระบบสแกนคริปโทเคอร์เรนซีประสิทธิภาพสูงที่พัฒนาด้วย Rust เพื่อวิเคราะห์ Limit Order Book (LOB) และข้อมูลการซื้อขายแบบเรียลไทม์สำหรับการทดสอบกลยุทธ์",
    ),
    shortDescription: createLocalizedText(
      "Rust-based high-frequency crypto market scanner and cross-correlation analysis engine.",
      "เอนจินสแกนตลาดคริปโตความถี่สูงและวิเคราะห์ความสัมพันธ์ข้ามศูนย์ซื้อขายด้วยภาษา Rust",
    ),
    descriptionLong: createLocalizedText(
      `A robust and modular quantitative trading analysis system designed to validate market microstructure strategies before live execution. The system connects to major cryptocurrency exchanges via WebSockets to process high-frequency data streams.

### Key Technical Details:
1. **High-Performance Architecture**: Developed entirely in Rust using the \`tokio\` async runtime to handle massive concurrency and minimize data processing latency.
2. **Real-time Data Pipeline**: Implemented WebSocket clients connecting to Binance and Bybit for continuous Limit Order Book (LOB) updates and aggregated trade streams.
3. **Advanced Quantitative Signals**: Engineered highly optimized calculators for complex high-frequency trading signals, including Multi-Level Order Flow Imbalance (MLOFI), Volume Adjusted Mid Price (VAMP), and cross-exchange lead-lag correlation.
4. **Strategy Validation Engine**: Built a Composite Opportunity Score (COS) system to dynamically evaluate, rank, and generate comprehensive reports on coin viability for execution strategies.`,

      `ระบบวิเคราะห์การเทรดเชิงปริมาณที่มีความแม่นยำและเสถียรภาพ ออกแบบมาเพื่อตรวจสอบความถดถอยของกลยุทธ์ระดับโครงสร้างจุลภาคของตลาดก่อนการเทรดจริง ระบบถูกเชื่อมต่อกับกระดานเทรดชั้นนำผ่าน WebSockets เพื่อประมวลผลกระแสข้อมูลความถี่สูง

### รายละเอียดทางเทคนิคที่สำคัญ:
1. **สถาปัตยกรรมประสิทธิภาพสูง**: พัฒนาด้วยภาษา Rust ทั้งระบบ โดยใช้แพลตฟอร์ม \`tokio\` (Async runtime) เพื่อรองรับการทำงานพร้อมกันจำนวนมหาศาลและลดความหน่วง (Latency) ในการประมวลผลข้อมูลให้เหลือน้อยที่สุด
2. **ระบบท่อส่งข้อมูลแบบเรียลไทม์**: พัฒนา WebSocket ไคลเอนต์เชื่อมต่อโดยตรงกับ Binance และ Bybit เพื่อดึงข้อมูล Limit Order Book (LOB) และคำสั่งซื้อขายรวมแบบรวดเร็วที่สุด
3. **สัญญาณเชิงปริมาณขั้นสูง (Quant Signals)**: สร้างระบบคำนวณแบบรีดประสิทธิภาพสำหรับหาตัวชี้วัดความถี่สูงที่ซับซ้อน เช่น Multi-Level Order Flow Imbalance (MLOFI), Volume Adjusted Mid Price (VAMP) และ Lead-lag correlation ระหว่างกระดานเทรด
4. **เอนจินประเมินผลกลยุทธ์**: สร้างระบบวิเคราะห์โอกาสแบบผสมผสาน (Composite Opportunity Score - COS) เพื่อให้คะแนน ตัดสิน จัดอันดับ และออกรายงานความเหมาะสมของเหรียญต่างๆ สำหรับกลยุทธ์การเทรดขั้นสูง`,
    ),
    image: "/images/project/Scanner.png",
    images: [
      {
        url: "/images/project/Scanner.png",
        caption: "Real-time LOB Analysis & Opportunity Scoring",
      },
    ],
    link: "",
    github: "https://github.com/aphsx/TradingClaw", // ลบออกหรือใส่ลิงก์จริงได้
    tags: createLocalizedText(
      [
        "Rust",
        "WebSocket",
        "High-Frequency Trading",
        "Data Analytics",
        "Quantitative Finance",
        "Async Programming",
      ],
      [
        "Rust",
        "WebSocket",
        "High-Frequency Trading",
        "การวิเคราะห์ข้อมูลความต้านทาน",
        "การเงินเชิงปริมาณ",
        "Async Programming",
      ],
    ),
    category: "works", // หรือ 'personal'
  },
  {
    id: '8', // ลำดับโปรเจค VORTEX-7
    title: createLocalizedText(
      'Trading Short Term Futures Scalping and Backtesting',
      'Trading Short Term Futures Scalping and Backtesting'
    ),
    description: createLocalizedText(
      'A sophisticated multi-engine trading bot for Binance Futures, utilizing order flow, tick momentum, and sentiment analysis to execute high-probability scalping strategies.',
      'บอทเทรดอัจฉริยะสำหรับ Binance Futures ที่ใช้ระบบวิเคราะห์ 5 เอนจินขนานกัน ทั้งแรงซื้อขายจริง โมเมนตัม และอารมณ์ตลาด เพื่อทำกำไรในระยะสั้นอย่างแม่นยำ'
    ),
    shortDescription: createLocalizedText(
      'Multi-engine async trading system with dynamic risk management and real-time market regime filtering.',
      'ระบบเทรดอัตโนมัติแบบ Multi-engine พร้อมการจัดการความเสี่ยงอัจฉริยะและการกรองสภาวะตลาดแบบเรียลไทม์'
    ),
    descriptionLong: createLocalizedText(
      `a high-performance trading engine designed for the high-volatility environment of Binance Perpetual Futures. It operates on a modular "5-Engine" architecture to decode market microstructure and execute trades with sub-10ms logic latency.

### Key Technical Pillars:
1. **Multi-Engine Analysis Core**:
   - **Order Flow (E1)**: Real-time L2 imbalance and micro-price calculation.
   - **Tick Momentum (E2)**: Aggressor-side volume and trade velocity tracking.
   - **Technical (E3)**: Volatility-adjusted RSI, Bollinger Bands, and ATR.
   - **Sentiment (E4)**: Contrarian analysis of Long/Short ratios and funding rates.
   - **Regime Filter (E5)**: A global "brain" that classifies market volatility (Low to Extreme) and dynamically adjusts engine weights.
2. **Intelligent Risk Management**: Implements dynamic position sizing based on trade confidence and ATR. It features an automated "Liquidation Squeeze" prevention system that adjusts SL/TP prices to ensure orders are executed before margin limits.
3. **Low-Latency Pipeline**: Built with Python's \`asyncio\` and \`ccxt.pro\` for continuous WebSocket streams, ensuring the system reacts to market shifts in milliseconds.
4. **Data Analytics Integration**: Full integration with Supabase for granular logging of every execution, including API latency, slippage, and strategy performance metrics.`,

      `VORTEX-7 คือเอนจินการเทรดประสิทธิภาพสูงที่ออกแบบมาสำหรับตลาด Binance Perpetual Futures โดยเฉพาะ ทำงานด้วยสถาปัตยกรรมแบบ 5 เอนจินอิสระที่ประมวลผลขนานกันเพื่อวิเคราะห์โครงสร้างตลาดและตัดสินใจภายในเวลาไม่กี่มิลลิวินาที

### รายละเอียดทางเทคนิคที่สำคัญ:
1. **ระบบวิเคราะห์ 5 เอนจินอัจฉริยะ**:
   - **Order Flow (E1)**: วิเคราะห์ความไม่สมดุลของกำแพงซื้อขาย (Imbalance) และราคายุติธรรม (Micro-price)
   - **Tick Momentum (E2)**: ติดตามแรงเคาะซื้อขายจริงและความเร็วของกระแสคำสั่งซื้อ
   - **Technical (E3)**: ตัวชี้วัดทางเทคนิค (RSI, BB) ที่ปรับค่าตามความผันผวนจริง (ATR)
   - **Sentiment (E4)**: วิเคราะห์อารมณ์ตลาดผ่าน Long/Short Ratio และค่า Funding Rate เพื่อหาจุดกลับตัว
   - **Regime Filter (E5)**: "สมองส่วนกลาง" ที่จำแนกสภาวะตลาด (Low/Normal/High Vol) และปรับน้ำหนักความสำคัญของแต่ละเอนจินโดยอัตโนมัติ
2. **การจัดการความเสี่ยงขั้นสูง**: ระบบคำนวณขนาดไม้ตามความมั่นใจ (Confidence Score) และมีระบบ "Liquidation Squeeze" ที่คอยบีบระยะ SL/TP โดยอัตโนมัติเพื่อป้องกันการถูกล้างพอร์ตก่อนราคาจะถึงจุด Stop Loss
3. **ระบบประมวลผลความเร็วสูง**: พัฒนาด้วย Python \`asyncio\` และ \`ccxt.pro\` เพื่อเชื่อมต่อ WebSocket แบบเรียลไทม์ ทำให้ระบบสามารถตอบสนองต่อตลาดได้รวดเร็วทันท่วงที
4. **การจัดเก็บข้อมูลเชิงลึก**: เชื่อมต่อกับ Supabase เพื่อบันทึกข้อมูลการเทรดอย่างละเอียด รวมถึงค่าความหน่วงของ API (Latency) และประสิทธิภาพของแต่ละกลยุทธ์เพื่อการพัฒนาอย่างต่อเนื่อง`
    ),
    image: '/images/project/FutureScalping.png',
    images: [
      { url: '/images/project/FutureScalping1.png', caption: 'Multi-Engine Signal Processing' },
      { url: '/images/project/FutureScalping.png', caption: 'Future Scalping result' },
    ],
    link: '',
    github: 'https://github.com/aphsx/TradingShortTerm',
    tags: createLocalizedText(
      ['Python', 'Asyncio', 'CCXT', 'Algorithmic Trading', 'Market Microstructure', 'Supabase'],
      ['Python', 'Asyncio', 'CCXT', 'การเทรดอัลกอริทึม', 'โครงสร้างจุลภาคตลาด', 'การจัดการความเสี่ยงอัจฉริยะ']
    ),
    category: 'works'
  }

];
