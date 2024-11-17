const initialWords = {
    beginner: [
        {
            word: "time",
            meaning: "시간",
            sentence: "What time is it now?",
            translation: "지금 몇 시인가요?"
        },
        {
            word: "day",
            meaning: "날, 하루",
            sentence: "It's a beautiful day today.",
            translation: "오늘은 아름다운 날이에요."
        },
        {
            word: "year",
            meaning: "년도",
            sentence: "This year has been great.",
            translation: "이 해는 멋진 해였어요."
        },
        {
            word: "people",
            meaning: "사람들",
            sentence: "Many people enjoy watching movies.",
            translation: "많은 사람들이 영화를 보는 것을 즐겨요."
        },
        {
            word: "way",
            meaning: "방법, 길",
            sentence: "This is the way to the station.",
            translation: "이것은 역으로 가는 길이에요."
        },
        {
            word: "food",
            meaning: "음식",
            sentence: "The food in this restaurant is delicious.",
            translation: "이 식당의 음식은 맛있어요."
        },
        {
            word: "water",
            meaning: "물",
            sentence: "Drink plenty of water every day.",
            translation: "하루 종일 많은 물을 마시세요."
        },
        {
            word: "friend",
            meaning: "친구",
            sentence: "She is my best friend.",
            translation: "그녀는 내 최고의 친구에요."
        },
        {
            word: "family",
            meaning: "가족",
            sentence: "I love spending time with my family.",
            translation: "나는 가족과 함께 시간을 보내는 것을 좋아해요."
        },
        {
            word: "home",
            meaning: "집",
            sentence: "I'm going home now.",
            translation: "지금 집으로 가요."
        },
        {
            word: "school",
            meaning: "학교",
            sentence: "The school is closed today.",
            translation: "오늘은 학교가 휴업이에요."
        },
        {
            word: "work",
            meaning: "일, 직장",
            sentence: "I have to go to work.",
            translation: "나는 일을 가야해요."
        },
        {
            word: "book",
            meaning: "책",
            sentence: "I'm reading an interesting book.",
            translation: "나는 흥미로운 책을 읽고 있어요."
        },
        {
            word: "phone",
            meaning: "전화",
            sentence: "My phone is ringing.",
            translation: "내 전화가 울리고 있어요."
        },
        {
            word: "computer",
            meaning: "컴퓨터",
            sentence: "I use my computer every day.",
            translation: "나는 하루 종일 컴퓨터를 사용해요."
        },
        {
            word: "car",
            meaning: "자동차",
            sentence: "He drives a new car.",
            translation: "그는 새로운 자동차를 운전해요."
        },
        {
            word: "money",
            meaning: "돈",
            sentence: "Save money for the future.",
            translation: "미래를 위해 돈을 저금하세요."
        },
        {
            word: "job",
            meaning: "직업",
            sentence: "She loves her job.",
            translation: "그녀는 그녀의 일을 좋아해요."
        },
        {
            word: "city",
            meaning: "도시",
            sentence: "Seoul is a big city.",
            translation: "서울은 큰 도시에요."
        },
        {
            word: "country",
            meaning: "나라",
            sentence: "Which country are you from?",
            translation: "어떤 나라에서 오세요?"
        },
        {
            word: "name",
            meaning: "이름",
            sentence: "What's your name?",
            translation: "당신의 이름은 무엇인가요?"
        },
        {
            word: "student",
            meaning: "학생",
            sentence: "He is a good student.",
            translation: "그는 좋은 학생이에요."
        },
        {
            word: "teacher",
            meaning: "선생님",
            sentence: "Our teacher is very kind.",
            translation: "우리 선생님은 매우 친절해요."
        },
        {
            word: "room",
            meaning: "방",
            sentence: "My room is clean.",
            translation: "내 방은 깨끗해요."
        },
        {
            word: "door",
            meaning: "문",
            sentence: "Please close the door.",
            translation: "문을 닫으세요."
        },
        {
            word: "window",
            meaning: "창문",
            sentence: "Open the window, please.",
            translation: "창문을 열어주세요."
        },
        {
            word: "hand",
            meaning: "손",
            sentence: "Wash your hands carefully.",
            translation: "손을 깨끗하게 씻어주세요."
        },
        {
            word: "head",
            meaning: "머리",
            sentence: "I have a headache.",
            translation: "나는 두통이 있어요."
        },
        {
            word: "eye",
            meaning: "눈",
            sentence: "She has beautiful eyes.",
            translation: "그녀는 아름다운 눈을 가지고 있어요."
        },
        {
            word: "mouth",
            meaning: "입",
            sentence: "Open your mouth wide.",
            translation: "입을 넓게 열어주세요."
        },
        {
            word: "face",
            meaning: "얼굴",
            sentence: "She has a pretty face.",
            translation: "그녀는 예쁜 얼굴을 가지고 있어요."
        },
        {
            word: "hair",
            meaning: "머리카락",
            sentence: "She has long hair.",
            translation: "그녀는 긴 머리카락을 가지고 있어요."
        },
        {
            word: "dog",
            meaning: "개",
            sentence: "The dog is barking.",
            translation: "개가 짖고 있어요."
        },
        {
            word: "cat",
            meaning: "고양이",
            sentence: "The cat is sleeping.",
            translation: "고양이가 잠에 들어가고 있어요."
        },
        {
            word: "bird",
            meaning: "새",
            sentence: "I can hear birds singing.",
            translation: "나는 새들의 노래를 들을 수 있어요."
        },
        {
            word: "fish",
            meaning: "물고기",
            sentence: "There are many fish in the sea.",
            translation: "바다에는 많은 물고기가 있어요."
        },
        {
            word: "tree",
            meaning: "나무",
            sentence: "The tree is very tall.",
            translation: "나무는 매우 높아요."
        },
        {
            word: "flower",
            meaning: "꽃",
            sentence: "These flowers smell nice.",
            translation: "이 꽃들은 좋은 냄새를 풍기에요."
        },
        {
            word: "sun",
            meaning: "태양",
            sentence: "The sun is shining brightly.",
            translation: "태양은 밝게 빛나고 있어요."
        },
        {
            word: "moon",
            meaning: "달",
            sentence: "The moon is beautiful tonight.",
            translation: "달은 오늘 밤에 아름답게 빛나고 있어요."
        },
        {
            word: "star",
            meaning: "별",
            sentence: "I can see many stars.",
            translation: "나는 많은 별을 볼 수 있어요."
        },
        {
            word: "sky",
            meaning: "하늘",
            sentence: "The sky is blue today.",
            translation: "하늘은 오늘 푸르게 보여요."
        },
        {
            word: "rain",
            meaning: "비",
            sentence: "It's raining outside.",
            translation: "비가 외외 내리고 있어요."
        },
        {
            word: "snow",
            meaning: "눈",
            sentence: "It's snowing heavily.",
            translation: "눈이 많이 내리고 있어요."
        },
        {
            word: "wind",
            meaning: "바람",
            sentence: "The wind is strong today.",
            translation: "오늘 바람은 강해요."
        },
        {
            word: "air",
            meaning: "공기",
            sentence: "The air is fresh here.",
            translation: "여기는 새로운 공기가 있어요."
        },
        {
            word: "fire",
            meaning: "불",
            sentence: "Be careful with fire.",
            translation: "불에 조심하세요."
        },
        {
            word: "earth",
            meaning: "지구",
            sentence: "We must protect the Earth.",
            translation: "우리는 지구를 보호해야 해요."
        },
        {
            word: "sea",
            meaning: "바다",
            sentence: "I love the sea.",
            translation: "나는 바다를 사랑해요."
        },
        {
            word: "river",
            meaning: "강",
            sentence: "The river is very long.",
            translation: "강은 매우 길어요."
        }
    ],
    intermediate: [
        {
            word: "accomplish",
            meaning: "성취하다",
            sentence: "She accomplished her goal of running a marathon.",
            translation: "그녀는 마라톤을 완주하는 목표를 달성했어요."
        },
        {
            word: "determine",
            meaning: "결정하다",
            sentence: "We need to determine the cause of the problem.",
            translation: "우리는 문제의 원인을 결정해야 해요."
        },
        {
            word: "establish",
            meaning: "설립하다",
            sentence: "They established a new company last year.",
            translation: "그들은 작년에 새로운 회사를 설립했어요."
        },
        {
            word: "indicate",
            meaning: "나타내다",
            sentence: "The results indicate significant progress.",
            translation: "결과는 큰 진전을 나타내요."
        },
        {
            word: "maintain",
            meaning: "유지하다",
            sentence: "It's important to maintain good health.",
            translation: "건강을 유지하는 것이 중요해요."
        },
        {
            word: "consider",
            meaning: "고려하다",
            sentence: "Please consider my proposal carefully.",
            translation: "내 제안을 꼼꼼히 고려해주세요."
        },
        {
            word: "provide",
            meaning: "제공하다",
            sentence: "The company provides excellent service.",
            translation: "회사는 뛰어난 서비스를 제공해요."
        },
        {
            word: "require",
            meaning: "요구하다",
            sentence: "This job requires experience.",
            translation: "이 일은 경험을 요구해요."
        },
        {
            word: "suggest",
            meaning: "제안하다",
            sentence: "I suggest we take a break.",
            translation: "나는 우리가 휴식을 취하는 것을 제안해요."
        },
        {
            word: "develop",
            meaning: "개발하다",
            sentence: "They are developing new software.",
            translation: "그들은 새로운 소프트웨어를 개발하고 있어요."
        },
        {
            word: "achieve",
            meaning: "달성하다",
            sentence: "You can achieve anything with hard work.",
            translation: "열심히 일하면 무엇이든 달성할 수 있어요."
        },
        {
            word: "improve",
            meaning: "향상시키다",
            sentence: "We need to improve our skills.",
            translation: "우리는 기술을 향상시켜야 해요."
        },
        {
            word: "increase",
            meaning: "증가하다",
            sentence: "Sales have increased this month.",
            translation: "이 달에 매출이 증가했어요."
        },
        {
            word: "reduce",
            meaning: "감소시키다",
            sentence: "We must reduce our expenses.",
            translation: "우리는 지출을 줄여야 해요."
        },
        {
            word: "analyze",
            meaning: "분석하다",
            sentence: "Let's analyze the data carefully.",
            translation: "우리는 데이터를 꼼꼼히 분석해야 해요."
        },
        {
            word: "create",
            meaning: "창조하다",
            sentence: "Artists create beautiful works.",
            translation: "아티스트들은 아름다운 작품을 창조해요."
        },
        {
            word: "prepare",
            meaning: "준비하다",
            sentence: "I need to prepare for the meeting.",
            translation: "나는 회의를 위해 준비해야 해요."
        },
        {
            word: "support",
            meaning: "지원하다",
            sentence: "We support your decision.",
            translation: "우리는 당신의 결정을 지원해요."
        },
        {
            word: "explain",
            meaning: "설명하다",
            sentence: "Can you explain this to me?",
            translation: "이것을 나에게 설명해줄 수 있어요?"
        },
        {
            word: "discuss",
            meaning: "논의하다",
            sentence: "Let's discuss this matter tomorrow.",
            translation: "내일 이 문제에 대해 논의해봅시다."
        },
        {
            word: "experience",
            meaning: "경험",
            sentence: "This was a great experience.",
            translation: "이것은 훌륭한 경험이었습니다."
        },
        {
            word: "opportunity",
            meaning: "기회",
            sentence: "Don't miss this opportunity.",
            translation: "이 기회를 놓치지 마세요."
        },
        {
            word: "responsibility",
            meaning: "책임",
            sentence: "With great power comes great responsibility.",
            translation: "큰 권한은 큰 책임을 가져오는 것을 알아요."
        },
        {
            word: "development",
            meaning: "발전",
            sentence: "The development of technology is rapid.",
            translation: "기술의 발전은 빠르게 진행되고 있어요."
        },
        {
            word: "management",
            meaning: "관리",
            sentence: "Good management is essential.",
            translation: "좋은 관리는 필수적이에요."
        },
        {
            word: "environment",
            meaning: "환경",
            sentence: "We must protect the environment.",
            translation: "우리는 환경을 보호해야 해요."
        },
        {
            word: "relationship",
            meaning: "관계",
            sentence: "They have a good relationship.",
            translation: "그들은 좋은 관계를 유지하고 있어요."
        },
        {
            word: "performance",
            meaning: "성과",
            sentence: "His performance was excellent.",
            translation: "그의 성과는 훌륭했어요."
        },
        {
            word: "quality",
            meaning: "품질",
            sentence: "This product is of high quality.",
            translation: "이 제품은 높은 품질을 가지고 있어요."
        },
        {
            word: "solution",
            meaning: "해결책",
            sentence: "We need to find a solution.",
            translation: "우리는 해결책을 찾아야 해요."
        },
        {
            word: "decision",
            meaning: "결정",
            sentence: "This is an important decision.",
            translation: "이것은 중요한 결정이에요."
        },
        {
            word: "success",
            meaning: "성공",
            sentence: "Hard work leads to success.",
            translation: "열심히 일하면 성공을 이뤄낼 수 있어요."
        },
        {
            word: "method",
            meaning: "방법",
            sentence: "This is an effective method.",
            translation: "이것은 효과적인 방법이에요."
        },
        {
            word: "research",
            meaning: "연구",
            sentence: "The research takes time.",
            translation: "연구는 시간이 걸리는 일이에요."
        },
        {
            word: "industry",
            meaning: "산업",
            sentence: "The industry is growing rapidly.",
            translation: "산업은 빠르게 성장하고 있어요."
        },
        {
            word: "technology",
            meaning: "기술",
            sentence: "Technology changes quickly.",
            translation: "기술은 빠르게 변화하고 있어요."
        },
        {
            word: "community",
            meaning: "지역사회",
            sentence: "We are part of this community.",
            translation: "우리는 이 지역사회의 일부에요."
        },
        {
            word: "education",
            meaning: "교육",
            sentence: "Education is very important.",
            translation: "교육은 매우 중요해요."
        },
        {
            word: "information",
            meaning: "정보",
            sentence: "This information is useful.",
            translation: "이 정보는 유용해요."
        },
        {
            word: "knowledge",
            meaning: "지식",
            sentence: "Knowledge is power.",
            translation: "지식은 힘이에요."
        },
        {
            word: "situation",
            meaning: "상황",
            sentence: "This is a difficult situation.",
            translation: "이것은 어려운 상황이에요."
        },
        {
            word: "attention",
            meaning: "주의",
            sentence: "Pay attention to details.",
            translation: "세심한 주의를 기울여요."
        },
        {
            word: "direction",
            meaning: "방향",
            sentence: "We're going in the right direction.",
            translation: "우리는 옳은 방향으로 가고 있어요."
        },
        {
            word: "position",
            meaning: "위치",
            sentence: "What's your position on this?",
            translation: "이 문제에 대한 당신의 입장은 무엇인가요?"
        },
        {
            word: "difference",
            meaning: "차이",
            sentence: "There's a big difference.",
            translation: "큰 차이가 있어요."
        },
        {
            word: "purpose",
            meaning: "목적",
            sentence: "What's the purpose of this?",
            translation: "이것의 목적은 무엇인가요?"
        },
        {
            word: "approach",
            meaning: "접근방식",
            sentence: "We need a different approach.",
            translation: "우리는 다른 접근 방식이 필요해요."
        },
        {
            word: "process",
            meaning: "과정",
            sentence: "This is a long process.",
            translation: "이것은 긴 과정이에요."
        },
        {
            word: "result",
            meaning: "결과",
            sentence: "The results were positive.",
            translation: "결과는 긍정적이었어요."
        },
        {
            word: "effect",
            meaning: "영향",
            sentence: "The effect was immediate.",
            translation: "효과는 즉간에 나타났어요."
        }
    ],
    advanced: [
        {
            word: "unprecedented",
            meaning: "전례 없는",
            sentence: "The company achieved unprecedented growth.",
            translation: "회사가 전례 없는 성장을 이루었어요."
        },
        {
            word: "comprehensive",
            meaning: "포괄적인",
            sentence: "We need a comprehensive approach.",
            translation: "우리는 포괄적인 접근이 필요해요."
        },
        {
            word: "sophisticated",
            meaning: "정교한",
            sentence: "This is a sophisticated system.",
            translation: "이것은 정교한 시스템이에요."
        },
        {
            word: "phenomenon",
            meaning: "현상",
            sentence: "This is an interesting phenomenon.",
            translation: "이것은 흥미로운 현상이에요."
        },
        {
            word: "substantial",
            meaning: "상당한",
            sentence: "There is substantial evidence.",
            translation: "상당한 증거가 있어요."
        },
        {
            word: "fundamental",
            meaning: "근본적인",
            sentence: "These are fundamental principles.",
            translation: "이것들은 근본적인 원리들이에요."
        },
        {
            word: "significant",
            meaning: "중요한",
            sentence: "This is a significant discovery.",
            translation: "이것은 중요한 발견이에요."
        },
        {
            word: "perspective",
            meaning: "관점",
            sentence: "From my perspective, this is correct.",
            translation: "내 관점에 이것은 옳아요."
        },
        {
            word: "implement",
            meaning: "시행하다",
            sentence: "We will implement new policies.",
            translation: "우리는 새로운 정책을 시행할 것이에요."
        },
        {
            word: "integrate",
            meaning: "통합하다",
            sentence: "We need to integrate these systems.",
            translation: "우리는 이 시스템들을 통합해야 해요."
        },
        {
            word: "collaborate",
            meaning: "협력하다",
            sentence: "Let's collaborate on this project.",
            translation: "우리는 이 프로젝트를 협력하여 진행해요."
        },
        {
            word: "facilitate",
            meaning: "촉진하다",
            sentence: "This will facilitate better communication.",
            translation: "이것은 더 나은 커뮤니케이션을 촉진할 것이에요."
        },
        {
            word: "anticipate",
            meaning: "예상하다",
            sentence: "We anticipate strong growth.",
            translation: "우리는 강력한 성장을 예상하고 있어요."
        },
        {
            word: "demonstrate",
            meaning: "입증하다",
            sentence: "The results demonstrate our success.",
            translation: "결과는 우리의 성공을 입증해요."
        },
        {
            word: "emphasize",
            meaning: "강조하다",
            sentence: "I want to emphasize this point.",
            translation: "나는 이 점을 강조하고 싶어요."
        },
        {
            word: "initiative",
            meaning: "계획",
            sentence: "This is a new initiative.",
            translation: "이것은 새로운 계획이에요."
        },
        {
            word: "innovation",
            meaning: "혁신",
            sentence: "Innovation drives progress.",
            translation: "혁신은 진보를 촉진해요."
        },
        {
            word: "methodology",
            meaning: "방법론",
            sentence: "This methodology is effective.",
            translation: "이 방법론은 효과적이에요."
        },
        {
            word: "infrastructure",
            meaning: "기반시설",
            sentence: "We need better infrastructure.",
            translation: "우리는 더 나은 기반시설이 필요해요."
        },
        {
            word: "sustainability",
            meaning: "지속가능성",
            sentence: "Sustainability is important.",
            translation: "지속가능성은 중요해요."
        },
        {
            word: "optimization",
            meaning: "최적화",
            sentence: "Optimization improves performance.",
            translation: "최적화는 성능을 향상시켜요."
        },
        {
            word: "implementation",
            meaning: "구현",
            sentence: "The implementation was successful.",
            translation: "구현은 성공적으로 이뤄졌어요."
        },
        {
            word: "configuration",
            meaning: "구성",
            sentence: "Check the system configuration.",
            translation: "시스템 구성을 확인하세요."
        },
        {
            word: "specification",
            meaning: "명세서",
            sentence: "Read the specifications carefully.",
            translation: "명세서를 꼼꼼히 읽어주세요."
        },
        {
            word: "authentication",
            meaning: "인증",
            sentence: "Authentication is required.",
            translation: "인증이 필요해요."
        },
        {
            word: "authorization",
            meaning: "승인",
            sentence: "You need authorization for this.",
            translation: "이 작업을 위해 승인이 필요해요."
        },
        {
            word: "visualization",
            meaning: "시각화",
            sentence: "Data visualization helps understanding.",
            translation: "데이터 시각화는 이해를 돕습니다."
        },
        {
            word: "standardization",
            meaning: "표준화",
            sentence: "Standardization improves quality.",
            translation: "표준화는 품질을 향상시켜요."
        },
        {
            word: "interpretation",
            meaning: "해석",
            sentence: "This is my interpretation.",
            translation: "이것은 내 해석이에요."
        },
        {
            word: "conceptualize",
            meaning: "개념화하다",
            sentence: "Let's conceptualize the project.",
            translation: "우리는 프로젝트를 개념화하여 진행해요."
        },
        {
            word: "hypothetical",
            meaning: "가설의",
            sentence: "This is a hypothetical situation.",
            translation: "이것은 가설적인 상황이에요."
        },
        {
            word: "theoretical",
            meaning: "이론적인",
            sentence: "This is theoretical research.",
            translation: "이것은 이론적인 연구에요."
        },
        {
            word: "philosophical",
            meaning: "철학적인",
            sentence: "These are philosophical questions.",
            translation: "이것들은 철학적인 질문들이에요."
        },
        {
            word: "psychological",
            meaning: "심리적인",
            sentence: "Consider the psychological effects.",
            translation: "심리적인 효과를 고려하세요."
        },
        {
            word: "methodology",
            meaning: "방법론",
            sentence: "The methodology is sound.",
            translation: "이 방법론은 옳아요."
        },
        {
            word: "terminology",
            meaning: "전문용어",
            sentence: "Learn the correct terminology.",
            translation: "정확한 전문용어를 배워요."
        },
        {
            word: "prerequisite",
            meaning: "전제조건",
            sentence: "This is a prerequisite course.",
            translation: "이것은 전제조건 과정이에요."
        },
        {
            word: "subsequent",
            meaning: "후속의",
            sentence: "The subsequent events were unexpected.",
            translation: "후속 사건들은 예상치 못한 것이었어요."
        },
        {
            word: "concurrent",
            meaning: "동시의",
            sentence: "These are concurrent processes.",
            translation: "이것들은 동시에 진행되는 과정이에요."
        },
        {
            word: "preliminary",
            meaning: "예비의",
            sentence: "These are preliminary results.",
            translation: "이것들은 예비 결과에요."
        },
        {
            word: "empirical",
            meaning: "경험적인",
            sentence: "We need empirical evidence.",
            translation: "우리는 경험적인 증거가 필요해요."
        },
        {
            word: "analytical",
            meaning: "분석적인",
            sentence: "Take an analytical approach.",
            translation: "분석적인 접근 방식을 사용하세요."
        },
        {
            word: "systematic",
            meaning: "체계적인",
            sentence: "Use a systematic method.",
            translation: "체계적인 방법을 사용하세요."
        },
        {
            word: "pragmatic",
            meaning: "용적인",
            sentence: "We need pragmatic solutions.",
            translation: "우리는 실용적인 해결책이 필요해요."
        },
        {
            word: "strategic",
            meaning: "전략적인",
            sentence: "This is a strategic decision.",
            translation: "이것은 전략적인 결정이에요."
        },
        {
            word: "innovative",
            meaning: "혁신적인",
            sentence: "This is an innovative approach.",
            translation: "이것은 혁신적인 접근 방식이에요."
        },
        {
            word: "progressive",
            meaning: "진보적인",
            sentence: "These are progressive ideas.",
            translation: "이것들은 진보적인 아이디어에요."
        },
        {
            word: "conservative",
            meaning: "보수적인",
            sentence: "Take a conservative approach.",
            translation: "보수적인 접근 방식을 사용하세요."
        },
        {
            word: "alternative",
            meaning: "대안의",
            sentence: "Consider alternative solutions.",
            translation: "대안의 해결책을 고려하세요."
        },
        {
            word: "conventional",
            meaning: "관습적인",
            sentence: "These are conventional methods.",
            translation: "이것들은 관습적인 방법이에요."
        },
        {
            word: "revolutionary",
            meaning: "혁명적인",
            sentence: "This is a revolutionary idea.",
            translation: "이것은 혁명적인 아이디어에요."
        }
    ]
}; 