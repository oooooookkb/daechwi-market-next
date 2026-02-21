/* ── 업체 카드 공통 데이터 (50개) ── */

export type CardData = {
  id: number;
  badge: string;
  tagColor: string;
  title: string;
  company: string;
  category: string;
  region: string;
  phone: string;
  img: string;
  features: string[];
};

const allCards: CardData[] = [
  { id: 1,  badge: "월변·당일",    tagColor: "red",    title: "24시 비대면 월변대출",       company: "24시전국당일승인대부", category: "당일대출",     region: "전국", phone: "010-1234-5678", img: "/cards/card-1.png", features: ["높은 승인률 비대면 간편진행", "상담 후 당일 송금 OK", "24시간 상담 가능"] },
  { id: 2,  badge: "무직자·저신용", tagColor: "orange", title: "무직자·외국인 당일입금",     company: "구조대부",            category: "무직자대출",   region: "서울", phone: "010-2345-6789", img: "/cards/card-2.png", features: ["무직자·저신용·외국인 OK", "무방문 비대면 빠른진행", "당일 입금 가능"] },
  { id: 3,  badge: "직장인·비대면", tagColor: "blue",   title: "직장인 1개월 월변대출",      company: "드림파이낸셜",         category: "직장인대출",   region: "경기", phone: "010-3456-7890", img: "/cards/card-3.png", features: ["직장인·자영업자 OK", "신속 비대면 빠른진행", "1개월 단위 월변"] },
  { id: 4,  badge: "소액·당일",    tagColor: "yellow", title: "소액 당일대출 전국OK",       company: "미래대부",            category: "소액대출",     region: "부산", phone: "010-4567-8901", img: "/cards/card-4.png", features: ["소액 가능 당일송금", "전국 어디서나 OK", "10분 내 심사완료"] },
  { id: 5,  badge: "신불자·소액",  tagColor: "purple", title: "신용불량 소액 급전",         company: "희망대부",            category: "저신용대출",   region: "대구", phone: "010-5678-9012", img: "/cards/card-5.png", features: ["10만~300만원 소액", "신용불량·연체 가능", "무서류 간편 심사"] },
  { id: 6,  badge: "사업자",       tagColor: "green",  title: "개인사업자 비대면대출",      company: "성장파이낸셜",         category: "사업자대출",   region: "인천", phone: "010-6789-0123", img: "/cards/card-6.png", features: ["자영업·개인사업자 OK", "매출 기반 한도산정", "사업자등록증만 있으면 OK"] },
  { id: 7,  badge: "여성·주부",    tagColor: "pink",   title: "여성·주부 전용 대출",        company: "레이디파이낸셜",       category: "여성대출",     region: "서울", phone: "010-7890-1234", img: "/cards/card-7.png", features: ["주부·무직 여성 OK", "당일 입금 빠른진행", "소득증빙 불필요"] },
  { id: 8,  badge: "대환·저금리",  tagColor: "navy",   title: "고금리 대환 전환대출",       company: "클린대부",            category: "대환대출",     region: "경기", phone: "010-8901-2345", img: "/cards/card-8.png", features: ["고금리→저금리 전환", "원클릭 간편 신청", "기존 대출 통합관리"] },
  { id: 9,  badge: "비상금·즉시",  tagColor: "orange", title: "비상금 10분 즉시입금",       company: "빠른머니대부",         category: "비상금대출",   region: "전국", phone: "010-9012-3456", img: "/cards/card-9.png", features: ["50만~500만원 비상금", "10분 안에 입금", "24시간 즉시 처리"] },
  { id: 10, badge: "프리랜서",     tagColor: "blue",   title: "프리랜서 소득증빙 없이",     company: "자유대부",            category: "프리랜서대출", region: "전국", phone: "010-0123-4567", img: "/cards/card-1.png", features: ["소득증빙 불필요", "실적 기반 간편 심사", "프리랜서·N잡러 OK"] },
  { id: 11, badge: "월변·당일",    tagColor: "red",    title: "전국 당일 월변 승인",        company: "스피드론대부",         category: "당일대출",     region: "전국", phone: "010-1111-2222", img: "/cards/card-2.png", features: ["전국 어디서나 당일승인", "월변 전문 상담", "무방문 비대면 OK"] },
  { id: 12, badge: "직장인·비대면", tagColor: "blue",   title: "직장인 전용 신속대출",       company: "월급쟁이파이낸셜",     category: "직장인대출",   region: "서울", phone: "010-2222-3333", img: "/cards/card-3.png", features: ["재직증명서 하나로 OK", "최대 3000만원 한도", "당일 심사 완료"] },
  { id: 13, badge: "무직자·저신용", tagColor: "orange", title: "저신용 전문 급전대출",       company: "새출발대부",           category: "저신용대출",   region: "부산", phone: "010-3333-4444", img: "/cards/card-4.png", features: ["신용점수 무관", "소득증빙 불필요", "당일 송금 가능"] },
  { id: 14, badge: "소액·당일",    tagColor: "yellow", title: "50만원~즉시 소액대출",       company: "미니머니대부",         category: "소액대출",     region: "대전", phone: "010-4444-5555", img: "/cards/card-5.png", features: ["50만원부터 가능", "5분 내 심사완료", "24시간 접수 가능"] },
  { id: 15, badge: "사업자",       tagColor: "green",  title: "자영업자 매출기반 대출",     company: "사장님대부",           category: "사업자대출",   region: "경기", phone: "010-5555-6666", img: "/cards/card-6.png", features: ["매출 기반 심사", "사업자등록증만 OK", "최대 5000만원"] },
  { id: 16, badge: "대환·저금리",  tagColor: "navy",   title: "고금리 탈출 대환대출",       company: "리셋파이낸셜",         category: "대환대출",     region: "서울", phone: "010-6666-7777", img: "/cards/card-7.png", features: ["기존 고금리 통합", "월 이자 절감 효과", "무료 상담 가능"] },
  { id: 17, badge: "여성·주부",    tagColor: "pink",   title: "전업주부 전용 생활자금",     company: "맘스파이낸셜",         category: "여성대출",     region: "인천", phone: "010-7777-8888", img: "/cards/card-8.png", features: ["전업주부 전문", "배우자 소득 기반", "소액부터 가능"] },
  { id: 18, badge: "비상금·즉시",  tagColor: "orange", title: "긴급 비상금 즉시지급",       company: "119머니대부",          category: "비상금대출",   region: "전국", phone: "010-8888-9999", img: "/cards/card-9.png", features: ["긴급자금 전문", "5분 내 입금", "무서류 간편진행"] },
  { id: 19, badge: "월변·당일",    tagColor: "red",    title: "무방문 월변 당일처리",       company: "원스톱대부",           category: "당일대출",     region: "대구", phone: "010-1010-2020", img: "/cards/card-1.png", features: ["무방문 비대면 전문", "당일 처리 보장", "전국 어디서나 OK"] },
  { id: 20, badge: "프리랜서",     tagColor: "blue",   title: "N잡러·긱워커 전용대출",      company: "긱이코노미대부",       category: "프리랜서대출", region: "서울", phone: "010-2020-3030", img: "/cards/card-2.png", features: ["프리랜서·N잡러 전문", "통장거래내역 심사", "빠른 당일입금"] },
  { id: 21, badge: "직장인·비대면", tagColor: "blue",   title: "중소기업 직장인 우대",       company: "워커스파이낸셜",       category: "직장인대출",   region: "경기", phone: "010-3030-4040", img: "/cards/card-3.png", features: ["중소기업 재직자 우대", "4대보험 가입자 OK", "최저금리 도전"] },
  { id: 22, badge: "신불자·소액",  tagColor: "purple", title: "연체자도 가능한 소액",       company: "두번째기회대부",       category: "저신용대출",   region: "광주", phone: "010-4040-5050", img: "/cards/card-4.png", features: ["연체 이력 무관", "10만원부터 가능", "무서류 3분 심사"] },
  { id: 23, badge: "소액·당일",    tagColor: "yellow", title: "100만원 이하 초소액",        company: "포켓머니대부",         category: "소액대출",     region: "전국", phone: "010-5050-6060", img: "/cards/card-5.png", features: ["10만~100만원 전문", "신분증만 OK", "즉시 입금 가능"] },
  { id: 24, badge: "사업자",       tagColor: "green",  title: "스타트업 창업자금 대출",     company: "벤처대부",            category: "사업자대출",   region: "서울", phone: "010-6060-7070", img: "/cards/card-6.png", features: ["창업 초기 자금 OK", "사업계획서 기반", "최대 1억원 한도"] },
  { id: 25, badge: "대환·저금리",  tagColor: "navy",   title: "다중채무 통합 대환",         company: "프리덤파이낸셜",       category: "대환대출",     region: "부산", phone: "010-7070-8080", img: "/cards/card-7.png", features: ["다중채무 한번에 통합", "월 상환액 대폭 절감", "전문 상담사 배정"] },
  { id: 26, badge: "월변·당일",    tagColor: "red",    title: "야간·주말 당일대출",         company: "올나잇대부",           category: "당일대출",     region: "전국", phone: "010-8080-9090", img: "/cards/card-8.png", features: ["야간·주말 상담 OK", "365일 24시간 운영", "당일 송금 보장"] },
  { id: 27, badge: "무직자·저신용", tagColor: "orange", title: "학생·취준생 생활자금",       company: "청춘대부",            category: "무직자대출",   region: "서울", phone: "010-9090-1010", img: "/cards/card-9.png", features: ["대학생·취준생 OK", "소액 생활자금 전문", "무이자 기간 제공"] },
  { id: 28, badge: "여성·주부",    tagColor: "pink",   title: "여성 창업자금 전문",         company: "쉬즈파이낸셜",         category: "여성대출",     region: "경기", phone: "010-1212-3434", img: "/cards/card-1.png", features: ["여성 창업 전문", "정부지원 연계 가능", "저금리 우대"] },
  { id: 29, badge: "비상금·즉시",  tagColor: "orange", title: "카카오톡 간편 비상금",       company: "톡머니대부",           category: "비상금대출",   region: "전국", phone: "010-3434-5656", img: "/cards/card-2.png", features: ["카톡 상담으로 간편", "3분 내 심사완료", "즉시 입금 보장"] },
  { id: 30, badge: "직장인·비대면", tagColor: "blue",   title: "공무원·공기업 우대대출",     company: "퍼블릭파이낸셜",       category: "직장인대출",   region: "대전", phone: "010-5656-7878", img: "/cards/card-3.png", features: ["공무원·공기업 최저금리", "재직증명 간편 확인", "최대 5000만원"] },
  { id: 31, badge: "소액·당일",    tagColor: "yellow", title: "무서류 간편 소액대출",       company: "이지론대부",           category: "소액대출",     region: "인천", phone: "010-7878-9090", img: "/cards/card-4.png", features: ["서류 제출 불필요", "신분증만으로 OK", "10분 내 입금"] },
  { id: 32, badge: "사업자",       tagColor: "green",  title: "배달·택배 사업자 전용",      company: "라이더파이낸셜",       category: "사업자대출",   region: "전국", phone: "010-1313-2424", img: "/cards/card-5.png", features: ["배달·택배 종사자 전문", "배달앱 매출 기반", "당일 심사 완료"] },
  { id: 33, badge: "대환·저금리",  tagColor: "navy",   title: "카드론 대환 전문",           company: "카드프리대부",         category: "대환대출",     region: "서울", phone: "010-2424-3535", img: "/cards/card-6.png", features: ["카드론 고금리 탈출", "통합 대환 전문", "월 이자 50% 절감"] },
  { id: 34, badge: "프리랜서",     tagColor: "blue",   title: "유튜버·크리에이터 대출",     company: "크리에이터론",         category: "프리랜서대출", region: "서울", phone: "010-3535-4646", img: "/cards/card-7.png", features: ["크리에이터 수익 기반", "구독자 수 심사 반영", "최대 2000만원"] },
  { id: 35, badge: "신불자·소액",  tagColor: "purple", title: "개인회생자 전용 소액",       company: "회생대부",            category: "저신용대출",   region: "대구", phone: "010-4646-5757", img: "/cards/card-8.png", features: ["개인회생 진행중 OK", "소액 전문", "무방문 비대면 진행"] },
  { id: 36, badge: "월변·당일",    tagColor: "red",    title: "전화 한통 당일대출",         company: "콜론대부",            category: "당일대출",     region: "부산", phone: "010-5757-6868", img: "/cards/card-9.png", features: ["전화 상담 후 즉시처리", "복잡한 서류 NO", "당일 입금 100%"] },
  { id: 37, badge: "무직자·저신용", tagColor: "orange", title: "주부·아르바이트 OK",         company: "알바론대부",           category: "무직자대출",   region: "경기", phone: "010-6868-7979", img: "/cards/card-1.png", features: ["알바·파트타임 OK", "주 소득 기준 완화", "소액부터 가능"] },
  { id: 38, badge: "직장인·비대면", tagColor: "blue",   title: "IT·개발자 전용 우대",        company: "테크론파이낸셜",       category: "직장인대출",   region: "서울", phone: "010-7979-8080", img: "/cards/card-2.png", features: ["IT업계 종사자 우대", "연봉 기반 고한도", "비대면 5분 심사"] },
  { id: 39, badge: "비상금·즉시",  tagColor: "orange", title: "심야 긴급자금 대출",         company: "나이트머니대부",       category: "비상금대출",   region: "전국", phone: "010-8080-9191", img: "/cards/card-3.png", features: ["심야 시간대 전문", "새벽 2시까지 상담", "즉시 송금 가능"] },
  { id: 40, badge: "소액·당일",    tagColor: "yellow", title: "학자금 긴급대출",            company: "캠퍼스론대부",         category: "소액대출",     region: "대전", phone: "010-9191-1212", img: "/cards/card-4.png", features: ["대학생 학자금 전문", "등록금 분할 가능", "저금리 우대"] },
  { id: 41, badge: "사업자",       tagColor: "green",  title: "온라인쇼핑몰 사업자 전용",   company: "셀러파이낸셜",         category: "사업자대출",   region: "서울", phone: "010-1414-2525", img: "/cards/card-5.png", features: ["쇼핑몰 매출 기반", "스마트스토어 OK", "최대 3000만원"] },
  { id: 42, badge: "대환·저금리",  tagColor: "navy",   title: "저축은행 대환 전문",         company: "세이브론대부",         category: "대환대출",     region: "경기", phone: "010-2525-3636", img: "/cards/card-6.png", features: ["저축은행 고금리 탈출", "은행권 금리로 전환", "무료 금리비교"] },
  { id: 43, badge: "여성·주부",    tagColor: "pink",   title: "싱글맘 긴급생활자금",        company: "싱글맘파이낸셜",       category: "여성대출",     region: "전국", phone: "010-3636-4747", img: "/cards/card-7.png", features: ["한부모가정 우대", "정부지원 연계", "저금리 장기상환"] },
  { id: 44, badge: "월변·당일",    tagColor: "red",    title: "비대면 모바일 월변",         company: "모바일론대부",         category: "당일대출",     region: "전국", phone: "010-4747-5858", img: "/cards/card-8.png", features: ["모바일 전용 간편신청", "앱으로 3분 완료", "당일 월변 OK"] },
  { id: 45, badge: "프리랜서",     tagColor: "blue",   title: "디자이너·작가 전용",         company: "아트론파이낸셜",       category: "프리랜서대출", region: "서울", phone: "010-5858-6969", img: "/cards/card-9.png", features: ["예술·창작 종사자 전문", "포트폴리오 심사 반영", "유연한 상환"] },
  { id: 46, badge: "신불자·소액",  tagColor: "purple", title: "파산면책자 재기자금",        company: "뉴스타트대부",         category: "저신용대출",   region: "광주", phone: "010-6969-7070", img: "/cards/card-1.png", features: ["파산면책 완료자 OK", "재기자금 전문", "단계별 한도 증액"] },
  { id: 47, badge: "소액·당일",    tagColor: "yellow", title: "중고차 구매자금 소액",       company: "카론대부",            category: "소액대출",     region: "인천", phone: "010-7171-8282", img: "/cards/card-2.png", features: ["중고차 구매 전용", "차량 담보 불필요", "100~500만원 가능"] },
  { id: 48, badge: "사업자",       tagColor: "green",  title: "프랜차이즈 가맹점 전용",     company: "프랜차이즈론",         category: "사업자대출",   region: "부산", phone: "010-8282-9393", img: "/cards/card-3.png", features: ["프랜차이즈 가맹점 전문", "본사 매출 연동 심사", "운영자금 OK"] },
  { id: 49, badge: "대환·저금리",  tagColor: "navy",   title: "캐피탈 대환 저금리",         company: "캐피탈프리대부",       category: "대환대출",     region: "전국", phone: "010-9393-1414", img: "/cards/card-4.png", features: ["캐피탈 고금리 전환", "금리 인하 보장", "원금균등 상환 OK"] },
  { id: 50, badge: "비상금·즉시",  tagColor: "orange", title: "주말·공휴일 즉시입금",       company: "홀리데이대부",         category: "비상금대출",   region: "전국", phone: "010-1515-2626", img: "/cards/card-5.png", features: ["주말·공휴일 OK", "연중무휴 상담", "10분 내 즉시입금"] },
];

export default allCards;
