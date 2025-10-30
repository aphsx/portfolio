import { BioTimelineItem, PersonalInfo } from '../../types'
import { createLocalizedText } from '../../utils'

export const personalInfo: PersonalInfo = {
  name: createLocalizedText('Aphisit Danchaodang', 'อภิสิทธิ์ ด่านเจ้าแดง'),
  title: createLocalizedText('FullStack Web Developer', 'นักพัฒนา Full-Stack'),
  greeting: createLocalizedText('Hi, I am Aphisit Danchaodang', 'สวัสดีครับ ผมนาย อภิสิทธิ์ ด่านเจ้าแดง'),
  profileImage: '/images/CSI00139.jpg',
  email: 'aphisit.danchaodang@example.com',
}

export const bioTimeline: BioTimelineItem[] = [
  {
    year: '2025',
    event: createLocalizedText(
      'Work as a FullStack developer at the Center of Specialty Innovation (CoSI) - research lab under Bangkok University',
      'ทำงานเป็นนักพัฒนา FullStack ที่ศูนย์นวัตกรรมเฉพาะทาง (CoSI) - ห้องปฏิบัติการวิจัยภายใต้มหาวิทยาลัยกรุงเทพ'
    ),
  },
  {
    year: '2024',
    event: createLocalizedText(
      'Joined the Center of Specialty Innovation (CoSI) - research lab under Bangkok University',
      'เข้าร่วมศูนย์นวัตกรรมเฉพาะทาง (CoSI) - ห้องปฏิบัติการวิจัยภายใต้มหาวิทยาลัยกรุงเทพ'
    ),
  },
  {
    year: '2023',
    event: createLocalizedText(
      'Currently studying Computer Science at Bangkok University',
      'กำลังศึกษาวิทยาการคอมพิวเตอร์ที่มหาวิทยาลัยกรุงเทพ'
    ),
  },
  {
    year: '2018',
    event: createLocalizedText(
      'Successfully completed secondary education at Matthayomwatmaikrongtong School (Grade 7-12)',
      'จบการศึกษาระดับมัธยมศึกษาตอนปลายจากโรงเรียนมัธยมวัดใหม่กรองทอง (ม.1-6)'
    ),
  },
  {
    year: '2012',
    event: createLocalizedText(
      'Completed lower secondary education at Banthaicharoen School (Grade 1-6)',
      'จบการศึกษาระดับประถมศึกษาจากโรงเรียนบ้านไทยเจริญ (ป.1-6)'
    ),
  },
]