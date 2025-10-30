import { Project } from '../types'
import { createLocalizedText } from '../utils'

export const projects: Project[] = [
  {
    id: '1',
    title: createLocalizedText('Enterprise Resource Planning System', 'ระบบการวางแผนจัดการการผลิต'),
    description: createLocalizedText(
      'A comprehensive ERP system for military manufacturing that handles inventory management, production scheduling, and resource allocation.',
      'ระบบ ERP ที่ครอบคลุมที่ออกแบบสำหรับการดำเนินงานการผลิตทางทหาร มีการจัดการสินค้าคงคลังขั้นสูงและความสามารถในการวางแผนการผลิต'
    ),
    shortDescription: createLocalizedText(
      'Planning system for military manufacturing with inventory management and production planning.',
      'ระบบ ERP สำหรับการผลิตทางทหารพร้อมการจัดการสินค้าคงคลัง'
    ),
    descriptionLong: createLocalizedText(
      ' A comprehensive Enterprise Resource Planning (ERP) system tailored for military manufacturing operations. The system integrates advanced inventory management, production scheduling, and resource allocation capabilities to streamline manufacturing processes and improve operational efficiency. Built with React, the project involved developing the front-end of the back-office system, implementing key functionalities such as database management, production planning functions, task insertion, and task division.',
      'พัฒนาระบบการวางแผนทรัพยากรองค์กรที่ซับซ้อนซึ่งปรับแต่งสำหรับการดำเนินงานการผลิตทางทหาร ระบบนี้รวมการจัดการสินค้าคงคลัง การจัดตารางการผลิต และการจัดสรรทรัพยากรสร้างด้วย React ในโปรเจคนี้ผมได้มีส่วนร่วมในการพัฒนาส่วนหน้าของระบบหลังบ้าน ยกตัวอย่างฟังชันก์ที่สำคัญ เช่น Database ฟังก์ชันการวางแผนการผลิต แทรกtask แบ่งtask'
    ),
    image: '/images/IMG_2701.JPG',
    images: [],
    link: '',
    github: '',
    tags: createLocalizedText(
      ['React','TypeScript','Tailwind CSS','Inventory Management'],
      ['React','TypeScript', 'Tailwind CSS', 'การจัดการ การผลิต']
    ),
    category: 'collaborations'
  },
  {
    id: '5',
    title: createLocalizedText('Tourism Website', 'เว็บไซต์ท่องเที่ยว'),
    description: createLocalizedText(
      'A vibrant tourism website promoting local attractions, events, and travel guides, built with Next.js and styled with Tailwind CSS.',
      'เว็บไซต์ท่องเที่ยวที่มีชีวิตชีวาเพื่อส่งเสริมสถานที่ท่องเที่ยวในท้องถิ่น กิจกรรม และคู่มือการเดินทาง สร้างด้วย Next.js และจัดแต่งด้วย Tailwind CSS'
    ),
    shortDescription: createLocalizedText(
      'Tourism website built with Next.js and Tailwind CSS.',
      'เว็บไซต์ท่องเที่ยวสร้างด้วย Next.js และ Tailwind CSS.'
    ),
    descriptionLong: createLocalizedText(
      'A tourism website designed to promote local attractions, events, and travel guides. The site features a colorful and engaging design with sections for popular destinations, upcoming events, travel tips, and user reviews. Built using Next.js for server-side rendering and SEO optimization, along with Tailwind CSS for a responsive and visually appealing layout.',
      'เว็บไซต์ท่องเที่ยวที่ออกแบบมาเพื่อส่งเสริมสถานที่ท่องเที่ยวในท้องถิ่น กิจกรรม และคู่มือการเดินทาง เว็บไซต์มีการออกแบบที่มีสีสันและน่าสนใจ พร้อมส่วนต่างๆ สำหรับจุดหมายปลายทางยอดนิยม กิจกรรมที่จะเกิดขึ้น เคล็ดลับการเดินทาง และบทวิจารณ์ของผู้ใช้ สร้างขึ้นโดยใช้ Next.js สำหรับการเรนเดอร์ฝั่งเซิร์ฟเวอร์และการเพิ่มประสิทธิภาพ SEO รวมถึง Tailwind CSS สำหรับเลย์เอาต์ที่ตอบสนองและน่าดึงดูดทางสายตา'
    ),
    image: '/images/project/Tourism.png',
    images: [],
    link: '',
    github: '',
    tags: createLocalizedText(
      ['Next.js', 'Tailwind CSS','Golang','JavaScript', 'Responsive Design', 'Web Development'],
      ['Next.js', 'Tailwind CSS', 'Golang','JavaScript', 'การออกแบบตอบสนอง', 'การพัฒนาเว็บ']
    ),
    category: 'collaborations'
  }
  ,
  {
    id: '2',
    title: createLocalizedText('Medical E-Learning Platform', 'แพลตฟอร์มอีเลิร์นนิงทางการแพทย์'),
    description: createLocalizedText(
      'An interactive e-learning platform designed for medical students specializing in radiology, featuring comprehensive case studies and assessment tools.',
      'แพลตฟอร์มอีเลิร์นนิงแบบโต้ตอบที่ออกแบบสำหรับนักศึกษาแพทย์ มีกรณีศึกษาที่ครอบคลุมและเครื่องมือประเมิน'
    ),
    shortDescription: createLocalizedText(
      'E-learning platform for medical radiology with interactive case studies and assessments.',
      'แพลตฟอร์มอีเลิร์นนิงรังสีวิทยาพร้อมกรณีศึกษาแบบโต้ตอบ'
    ),
    descriptionLong: createLocalizedText(
      'An e-learning platform for medical radiology education that provides medical students with access to real-world case studies, interactive imaging tools, and assessment modules. The platform includes DICOM image viewer integration, case-based learning modules, progress tracking, and collaboration tools.',
      'สร้างแพลตฟอร์มอีเลิร์นนิงที่นวัตกรรมซึ่งออกแบบเฉพาะสำหรับการศึกษา แพลตฟอร์มนี้ให้นักศึกษาแพทย์เข้าถึงไลบรารีที่ครอบคลุมของกรณีศึกษาในโลกแห่งความเป็นจริง เครื่องมือถ่ายภาพแบบโต้ตอบ และโมดูลการประเมินแบบก้าวหน้า คุณสมบัติรวมถึงการรวม DICOM image viewer โมดูลการเรียนรู้ตามกรณี การติดตามความก้าวหน้า และเครื่องมือความร่วมมือของเพื่อน'
    ),
    image: '/images/project/E-Learning.png',
    images: [],
    link: '',
    github: '',
    tags: createLocalizedText(
      ['React', 'Node.js','Golang', 'Educational Technology'],
      ['React', 'Node.js','Golang',  'เทคโนโลยีการศึกษา']
    ),
    category: 'collaborations'
  },
  {
    id: '3',
    title: createLocalizedText('Center of Social Innovation Website', 'เว็บไซต์ศูนย์นวัตกรรมเฉพาะทาง'),
    description: createLocalizedText(
      'A modern, responsive website for the Center of Social Innovation Lab, showcasing research projects, events, and community impact initiatives.',
      'เว็บไซต์ที่ทันสมัยและตอบสนองสำหรับห้องปฏิบัติการศูนย์นวัตกรรมเฉพาะทาง แสดงโครงการวิจัย กิจกรรม และโครงการส่งผลกระทบต่อชุมชน'
    ),
    shortDescription: createLocalizedText(
      'University lab website showcasing research projects and social innovation initiatives.',
      'เว็บไซต์ห้องปฏิบัติการมหาวิทยาลัยแสดงโครงการวิจัย'
    ),
    descriptionLong: createLocalizedText(
      'A comprehensive website for the Center of Social Innovation (CoSI) Lab at Bangkok University. The site showcases ongoing research projects, upcoming events, and the center\'s impact on social innovation. Features include project portfolio galleries, event management system, research publication database, team member profiles, and an interactive contact system.',
      'ออกแบบและพัฒนาเว็บไซต์ที่ครอบคลุมสำหรับห้องปฏิบัติการศูนย์นวัตกรรมเฉพาะทาง (CoSI) ที่มหาวิทยาลัยกรุงเทพ เว็บไซต์ทำหน้าที่เป็นศูนย์กลางดิจิทัลสำหรับการแสดงโครงการวิจัยที่กำลังดำเนินอยู่ กิจกรรมที่จะเกิดขึ้น และผลกระทบของศูนย์ต่อนวัตกรรมทางสังคม คุณสมบัติรวมถึงแกลเลอรีพอร์ตโฟลิโอโครงการ ระบบการจัดการกิจกรรม ฐานข้อมูลสิ่งพิมพ์วิจัย โปรไฟล์สมาชิกทีม และระบบติดต่อแบบโต้ตอบ'
    ),
    image: '/images/project/CoSI_web.png',
    images: [],
    link: 'https://cosi.bu.ac.th',
    github: '',
    tags: createLocalizedText(
      ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'University Website'],
      ['React', 'TypeScript', 'Tailwind CSS', 'การออกแบบตอบสนอง', 'เว็บไซต์มหาวิทยาลัย']
    ),
    category: 'collaborations'
  }
  ,
  {
    id: '4',
    title: createLocalizedText('Personal Portfolio Website', 'เว็บไซต์ผลงานส่วนตัว'),
    description: createLocalizedText(
      'A personal portfolio website to showcase projects, skills, and experience.',
      'เว็บไซต์ผลงานส่วนตัวเพื่อแสดงโปรเจค ทักษะ และประสบการณ์ '
    ),
    shortDescription: createLocalizedText(
      'Personal portfolio website built with React and Tailwind CSS.',
      'เว็บไซต์ผลงานส่วนตัวสร้างด้วย React และ Tailwind CSS.'
    ),
    descriptionLong: createLocalizedText(
      'A personal portfolio website designed to showcase my projects, skills, and professional experience. The site features sections for project highlights, skill sets, and contact information. Built using React and Tailwind CSS for rapid styling and responsiveness. Key functionalities include Dark mode, Language switcher.',
      'เว็บไซต์ผลงานส่วนตัวที่ออกแบบมาเพื่อแสดงโปรเจค ทักษะ และประสบการณ์ทางวิชาชีพของผม เว็บไซต์มีการออกแบบส่วนต่างๆ การแสดงโปรเจค ทักษะ และข้อมูลการติดต่อ สร้างขึ้นโดยใช้ React และ Tailwind CSS สำหรับการจัดแต่งอย่างรวดเร็วและการตอบสนอง ยกตัวอย่างฟังชันก์ที่สำคัญ เช่น Dark mode, Language switcher'
    ),
    image: '/images/portfolio.png',
    images: ['/images/portfolio.png'],
    link: 'https://portfolio-aphsx.vercel.app/',
    github: 'https://github.com/aphsix/Portfolio',
    tags: createLocalizedText(
      ['React', 'Tailwind CSS','TypeScript', 'Responsive Design', 'Web Development'],
      ['React', 'Tailwind CSS', 'TypeScript', 'การออกแบบตอบสนอง', 'การพัฒนาเว็บ']
    ),
    category: 'works'
  },
  
]