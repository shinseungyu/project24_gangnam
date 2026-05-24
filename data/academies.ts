export interface Academy {
  id: string
  name: string
  tag: string
  summary: string
  tuition: string
  duration: string
  location: string
  speciality: string
  employmentRate: string
  features: string[]
}

export const gangnamAcademies: Academy[] = [
  {
    id: 'total-beauty',
    name: '강남 토탈뷰티 아카데미',
    tag: '취업률 1위',
    summary: '헤어·피부·메이크업 종합 과정 운영. 국가자격증 취득 후 취업 연계까지 원스톱.',
    tuition: '150~400만원',
    duration: '3~12개월',
    location: '강남구 역삼동',
    speciality: '국가자격증 패스트트랙',
    employmentRate: '92%',
    features: ['국가자격증 합격보장반', '취업 연계 프로그램', '소그룹 실습 (8인 이하)', '주말·야간반 운영'],
  },
  {
    id: 'hair-master',
    name: '강남 헤어마스터 학원',
    tag: '헤어 특화',
    summary: '헤어 전문 심화 과정. 커트·펌·염색부터 업스타일까지 전문 기술 완성.',
    tuition: '120~300만원',
    duration: '2~8개월',
    location: '강남구 논현동',
    speciality: '현직 헤어디자이너 강사진',
    employmentRate: '88%',
    features: ['현직 디자이너 강사', '살롱 실습 연계', '포트폴리오 제작 지원', '개인 맞춤 커리큘럼'],
  },
  {
    id: 'skin-beauty',
    name: '강남 스킨뷰티 학원',
    tag: '피부 전문',
    summary: '피부관리·에스테틱 특화. 피부미용사 자격증부터 고급 케어 테크닉까지.',
    tuition: '180~450만원',
    duration: '4~10개월',
    location: '서초구 반포동',
    speciality: '에스테틱·피부관리 특화',
    employmentRate: '85%',
    features: ['최신 피부관리 장비 보유', '병원 피부과 실습 연계', '창업 컨설팅 제공', '외국인 고객 응대 교육'],
  },
  {
    id: 'makeup-pro',
    name: '강남 메이크업 프로 학원',
    tag: '메이크업 명문',
    summary: '웨딩·무대·미디어 메이크업 전문. 국내 최고 수준의 메이크업 아티스트 양성.',
    tuition: '200~500만원',
    duration: '3~12개월',
    location: '강남구 청담동',
    speciality: '웨딩·무대 메이크업',
    employmentRate: '90%',
    features: ['연예인 담당 강사진', '방송국 실습 기회', '포트폴리오 촬영 지원', '프리랜서 에이전시 연결'],
  },
  {
    id: 'nail-beauty',
    name: '강남 네일뷰티 아카데미',
    tag: '네일 특화',
    summary: '네일아트·젤네일·아크릴 전문 과정. 빠른 기술 습득으로 단기간 취업 가능.',
    tuition: '80~200만원',
    duration: '1~4개월',
    location: '강남구 삼성동',
    speciality: '네일아트 단기 집중',
    employmentRate: '95%',
    features: ['단기 집중 과정 (1개월)', '네일샵 취업 연계', '창업 멘토링 포함', '재료비 포함 수강료'],
  },
  {
    id: 'k-beauty',
    name: 'K-뷰티 강남 아카데미',
    tag: 'K-뷰티 글로벌',
    summary: '한류 뷰티 트렌드 기반 교육. 외국인 대상 서비스부터 해외 취업까지 준비.',
    tuition: '250~600만원',
    duration: '6~18개월',
    location: '강남구 신사동',
    speciality: '해외 취업·K-뷰티 수출',
    employmentRate: '80%',
    features: ['영어·중국어 뷰티 회화', '해외 취업 알선', 'K-뷰티 트렌드 교육', '글로벌 네트워크 제공'],
  },
]
