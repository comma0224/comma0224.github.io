var dataSetSkill = [
    {"name": "가르기", "default": "98", "growth": "3.05", "hits": "1", "cool_time": "5", "tiers": "1", "key": "1a", "value":"100"},
    {"name": "마법의 구", "default": "14", "growth": "0.44", "hits": "14", "cool_time": "10", "tiers": "1", "key": "1b", "value":"100"},
    {"name": "스컬 프레스", "default": "16", "growth": "0.49", "hits": "10", "cool_time": "8", "tiers": "1", "key": "1c", "value":"100"},
    {"name": "번개", "default": "154", "growth": "1.20", "hits": "4", "cool_time": "9", "tiers": "2", "key": "2a", "value":"100"},
    {"name": "까마귀 깃털", "default": "26", "growth": "0.20", "hits": "16", "cool_time": "6", "tiers": "2", "key": "2b", "value":"100"},
    {"name": "에너지 볼", "default": "480", "growth": "3.70", "hits": "1", "cool_time": "7", "tiers": "2", "key": "2c", "value":"100"},
    {"name": "고드름", "default": "280", "growth": "1.50", "hits": "3", "cool_time": "8", "tiers": "3", "key": "3a", "value":"100"},
    {"name": "독버섯", "default": "79", "growth": "0.42", "hits": "10", "cool_time": "7.5", "tiers": "3", "key": "3b", "value":"100"},
    {"name": "소드 마스터", "default": "298", "growth": "1.58", "hits": "3", "cool_time": "8.5", "tiers": "3", "key": "3c", "value":"100"},
    {"name": "아쿠아 볼", "default": "48", "growth": "0.91", "hits": "26", "cool_time": "9", "tiers": "4", "key": "4a", "value":"100"},
    {"name": "춤추는 칼", "default": "207", "growth": "3.97", "hits": "20", "cool_time": "12", "tiers": "4", "key": "4b", "value":"100"},
    {"name": "크리스탈 블래스터", "default": "172", "growth": "3.31", "hits": "8", "cool_time": "10", "tiers": "4", "key": "4c", "value":"100"},
    {"name": "오우거의 발", "default": "605", "growth": "20.80", "hits": "4", "cool_time": "7", "tiers": "5", "key": "5a", "value":"100"},
    {"name": "가시 럴커", "default": "347", "growth": "11.90", "hits": "3", "cool_time": "6.5", "tiers": "5", "key": "5b", "value":"22"},
    {"name": "박쥐", "default": "206", "growth": "7.06", "hits": "16", "cool_time": "9.5", "tiers": "5", "key": "5c", "value":"12"},
    {"name": "히드라 브레스", "default": "388", "growth": "10.91", "hits": "16", "cool_time": "9", "tiers": "6", "key": "6a", "value":"9"},
    {"name": "블랙홀", "default": "865", "growth": "24.22", "hits": "8", "cool_time": "10", "tiers": "6", "key": "6b", "value":"7"},
    {"name": "메테오", "default": "922", "growth": "25.84", "hits": "6", "cool_time": "8", "tiers": "6", "key": "6c", "value":"8"},
    {"name": "혜성의 창", "default": "1457", "growth": "43.50", "hits": "8", "cool_time": "11", "tiers": "7", "key": "7a", "value":"3"},
    {"name": "빛의 파동", "default": "12720", "growth": "379.60", "hits": "1", "cool_time": "12", "tiers": "7", "key": "7b", "value":"3"},
    {"name": "마왕의 눈", "default": "630", "growth": "18.78", "hits": "16", "cool_time": "9.5", "tiers": "7", "key": "7c", "value":"5"}];

var dataSetFamiliar = [
    {"name": "리리", "default": "126", "growth": "1.94", "hits": "5", "cool_time": "6.3", "tiers": "1", "key": "lily", "value":"100"},
    {"name": "퍼지", "default": "200", "growth": "3.07", "hits": "3", "cool_time": "6", "tiers": "1", "key": "fuzzy", "value":"100"},
    {"name": "바츠", "default": "113", "growth": "1.74", "hits": "6", "cool_time": "6.8", "tiers": "1", "key": "bats", "value":"100"},
    {"name": "쿠르그", "default": "175", "growth": "2.69", "hits": "4", "cool_time": "7", "tiers": "1", "key": "kurg", "value":"100"},
    {"name": "트위티", "default": "162.5", "growth": "1.80", "hits": "8", "cool_time": "6.5", "tiers": "2", "key": "tweety", "value":"100"},
    {"name": "나비", "default": "366", "growth": "4.06", "hits": "3", "cool_time": "5.5", "tiers": "2", "key": "butterfly", "value":"100"},
    {"name": "레일라", "default": "252", "growth": "2.79", "hits": "5", "cool_time": "6.3", "tiers": "2", "key": "leila", "value":"100"},
    {"name": "햄찌", "default": "400", "growth": "4.42", "hits": "3", "cool_time": "6", "tiers": "2", "key": "hamji", "value":"100"},
    {"name": "레디", "default": "340", "growth": "7.88", "hits": "6", "cool_time": "6.8", "tiers": "3", "key": "ready", "value":"100"},
    {"name": "토니", "default": "262", "growth": "6.08", "hits": "8", "cool_time": "7", "tiers": "3", "key": "tony", "value":"100"},
    {"name": "크로우", "default": "244", "growth": "5.64", "hits": "8", "cool_time": "6.5", "tiers": "3", "key": "crow", "value":"100"},
    {"name": "절미", "default": "183.1", "growth": "4.25", "hits": "9", "cool_time": "5.5", "tiers": "3", "key": "jeolmi", "value":"100"},
    {"name": "블루아", "default": "630", "growth": "9.61", "hits": "5", "cool_time": "6.3", "tiers": "4", "key": "blueA", "value":"100"},
    {"name": "RH-42", "default": "1000", "growth": "15.25", "hits": "3", "cool_time": "6", "tiers": "4", "key": "rh42", "value":"100"},
    {"name": "아이시", "default": "189", "growth": "2.88", "hits": "18", "cool_time": "6.8", "tiers": "4", "key": "icy", "value":"100"},
    {"name": "알파", "default": "700", "growth": "10.67", "hits": "5", "cool_time": "7", "tiers": "4", "key": "alpha", "value":"100"},
    {"name": "루핀", "default": "597.7", "growth": "6.81", "hits": "12", "cool_time": "6.5", "tiers": "5", "key": "lupin", "value":"44"},
    {"name": "레오", "default": "674", "growth": "7.68", "hits": "9", "cool_time": "5.5", "tiers": "5", "key": "leo", "value":"8"},
    {"name": "바실리", "default": "993", "growth": "11.31", "hits": "7", "cool_time": "6.3", "tiers": "5", "key": "basil", "value":"6"},
    {"name": "토트", "default": "827", "growth": "9.43", "hits": "8", "cool_time": "6", "tiers": "5", "key": "tot", "value":"8"},
    {"name": "스파크", "default": "3328", "growth": "52.98", "hits": "3", "cool_time": "6.8", "tiers": "6", "key": "spark", "value":"3"},
    {"name": "브레이즌", "default": "1027.5", "growth": "16.37", "hits": "10", "cool_time": "7", "tiers": "6", "key": "brazen", "value":"3"},
    {"name": "녹스", "default": "596.2", "growth": "9.50", "hits": "16", "cool_time": "6.5", "tiers": "6", "key": "nox", "value":"5"},
    {"name": "치즈", "default": "897", "growth": "14.29", "hits": "9", "cool_time": "5.5", "tiers": "6", "key": "cheese", "value":"4"},
    {"name": "아우로스", "default": "3082", "growth": "49.1", "hits": "3", "cool_time": "6.3", "tiers": "6", "key": "aurora", "value":"3"},
    {"name": "록큰", "default": "3230", "growth": "90.43", "hits": "3", "cool_time": "6", "tiers": "7", "key": "rockn", "value":"2"},
    {"name": "코코", "default": "5490", "growth": "153.73", "hits": "2", "cool_time": "6.8", "tiers": "7", "key": "coco", "value":"3"},
    {"name": "베타", "default": "753.5", "growth": "21.1", "hits": "15", "cool_time": "7", "tiers": "7", "key": "beta", "value":"1"},
    {"name": "아폴로", "default": "700", "growth": "19.59", "hits": "15", "cool_time": "6.5", "tiers": "7", "key": "apollo", "value":"1"},
    {"name": "젤리", "default": "2961", "growth": "82.89", "hits": "3", "cool_time": "5.5", "tiers": "7", "key": "jelly", "value":"2"}];

var columnsDPS = [
    { data: 'name', title: '이름' },
    { data: 'default', title: '기본 계수' },
    { data: 'growth', title: '성장 계수' },
    { data: 'hits', title: '타수' },
    { data: 'cool_time', title: '쿨타임' },
    { data: 'tiers', title: 'tiers', visible: false },
    { data: 'key', title: 'key', visible: false }
];

var columnsDPS = [
    { data: 'name', title: '이름' },
    { data: 'default', title: '기본 계수' },
    { data: 'growth', title: '성장 계수' },
    { data: 'hits', title: '타수', visible: false  },
    { data: 'cool_time', title: '쿨타임', visible: false  },
    { data: 'tiers', title: 'tiers', visible: false },
    { data: 'key', title: 'key', visible: false }
];



var dataSetSpec =[
    {"name": "공격력", "tiers": "0", "value": "1.53", "key": "attackPower"},
    {"name": "스킬 치명타 확률", "tiers": "0", "value": "142.8", "key": "skillCriticalHitProbability"},
    {"name": "스킬 치명타 피해량", "tiers": "0", "value": "2637.5", "key": "skillCriticalDamage"},
    {"name": "스킬 쿨타임", "tiers": "0", "value": "63.73", "key": "skillCooldown"},
    {"name": "스킬 피해량", "tiers": "0", "value": "47451.54", "key": "skillDamage"},
    {"name": "사역마 치명타 확률", "tiers": "0", "value": "112.6", "key": "familiarCriticalHitProbability"},
    {"name": "사역마 치명타 피해량", "tiers": "0", "value": "2597.5", "key": "familiarCriticalDamage"},
    {"name": "사역마 쿨타임", "tiers": "0", "value": "0", "key": "_familiarCooldown"},
    {"name": "사역마 피해량", "tiers": "0", "value": "43330.10", "key": "familiarDamage"},
    {"name": "일반 몬스터 피해량", "tiers": "0", "value": "145", "key": "normalMonsterDamage"},
    {"name": "보스 몬스터 피해량", "tiers": "0", "value": "165", "key": "bossMonsterDamage"},
    {"name": "최종 피해량", "tiers": "0", "value": "710", "key": "finalDamage"}];


var dataSetRelicsSet = [
    {"name": "유물 미장착", "tiers": "0", "value": "0", "key": "relicsSet1"},
    {"name": "지도,마법서,네크로,슬라임조각", "tiers": "0", "value": "0", "key": "relicsSet2"},
    {"name": "큐브1", "tiers": "0", "value": "0", "key": "relicsSet3"},
    {"name": "큐브2", "tiers": "0", "value": "0", "key": "relicsSet4"},
    {"name": "큐브3", "tiers": "0", "value": "0", "key": "relicsSet5"},
    {"name": "큐브4", "tiers": "0", "value": "0", "key": "relicsSet6"},
    {"name": "큐브5", "tiers": "0", "value": "0", "key": "relicsSet7"},
    {"name": "꿈룬,맹반,보검,인형", "tiers": "0", "value": "0", "key": "relicsSet9"},
    {"name": "맹반,지도,꼬리,뇌전", "tiers": "0", "value": "0", "key": "relicsSet13"},
    {"name": "맹반,꼬리,뇌전,자물쇠", "tiers": "0", "value": "0", "key": "relicsSet14"},
    {"name": "맹반,보검,인형,뇌전", "tiers": "0", "value": "0", "key": "relicsSet15"},
    {"name": "꿈룬,보검,인형,슬라임조각", "tiers": "0", "value": "0", "key": "relicsSet16"},
    {"name": "꿈룬,맹반,뇌전,지도", "tiers": "0", "value": "0", "key": "relicsSet11"},
    {"name": "꿈룬,맹반,보검,뇌전", "tiers": "0", "value": "0", "key": "relicsSet8"},
    {"name": "꿈룬,맹반,뇌전,꼬리", "tiers": "0", "value": "0", "key": "relicsSet10"},
    {"name": "꿈룬,맹반,뇌전,자물쇠", "tiers": "0", "value": "0", "key": "relicsSet12"},
    {"name": "꿈룬,맹반,붉은공명석,자물쇠", "tiers": "0", "value": "0", "key": "relicsSet17"}];

var dataSetRelics = [
    {"name": "맹수의 반지", "tiers": "0", "value": "0", "key": "relics12"},
    {"name": "꿈의 룬 조각(맹반)", "tiers": "0", "value": "0", "key": "relics13"},
    {"name": "평범한 자물쇠", "tiers": "0", "value": "0", "key": "relics4"},
    {"name": "뇌전의 깃털", "tiers": "0", "value": "0", "key": "relics6"},
    {"name": "붉은 공명석", "tiers": "0", "value": "0", "key": "relics5"},
    {"name": "셀러맨더 꼬리", "tiers": "0", "value": "0", "key": "relics1"},
    {"name": "미확인 큐브", "tiers": "0", "value": "0", "key": "relics10"},
    {"name": "대해적의 보물 지도", "tiers": "0", "value": "0", "key": "relics2"},
    {"name": "강화 슬라임 조각", "tiers": "0", "value": "0", "key": "relics3"},
    {"name": "버려진 애착 인형", "tiers": "0", "value": "0", "key": "relics7"},
    {"name": "고대 마법서", "tiers": "0", "value": "0", "key": "relics8"},
    {"name": "네크로노미콘", "tiers": "0", "value": "0", "key": "relics9"},
    {"name": "영웅의 낡은 보검", "tiers": "0", "value": "0", "key": "relics11"},
    {"name": "꿈의 룬 조각(보검)", "tiers": "0", "value": "0", "key": "relics14"},
    {"name": "꿈의 룬 조각(맹반, 보검)", "tiers": "0", "value": "0", "key": "relics15"}
];

var cooldownEfficiency = [
    {"cooldownReduction":10,"dpsIncreaseRateAtZeroCooldown":"11.11%","dpsIncreaseAtOnePercentCooldown":"1.12%","dpsIncreaseAtFivePercentCooldown":"5.88%"},
    {"cooldownReduction":11,"dpsIncreaseRateAtZeroCooldown":"12.36%","dpsIncreaseAtOnePercentCooldown":"1.14%","dpsIncreaseAtFivePercentCooldown":"5.95%"},
    {"cooldownReduction":12,"dpsIncreaseRateAtZeroCooldown":"13.64%","dpsIncreaseAtOnePercentCooldown":"1.15%","dpsIncreaseAtFivePercentCooldown":"6.02%"},
    {"cooldownReduction":13,"dpsIncreaseRateAtZeroCooldown":"14.94%","dpsIncreaseAtOnePercentCooldown":"1.16%","dpsIncreaseAtFivePercentCooldown":"6.10%"},
    {"cooldownReduction":14,"dpsIncreaseRateAtZeroCooldown":"16.28%","dpsIncreaseAtOnePercentCooldown":"1.18%","dpsIncreaseAtFivePercentCooldown":"6.17%"},
    {"cooldownReduction":15,"dpsIncreaseRateAtZeroCooldown":"17.65%","dpsIncreaseAtOnePercentCooldown":"1.19%","dpsIncreaseAtFivePercentCooldown":"6.25%"},
    {"cooldownReduction":16,"dpsIncreaseRateAtZeroCooldown":"19.05%","dpsIncreaseAtOnePercentCooldown":"1.20%","dpsIncreaseAtFivePercentCooldown":"6.33%"},
    {"cooldownReduction":17,"dpsIncreaseRateAtZeroCooldown":"20.48%","dpsIncreaseAtOnePercentCooldown":"1.22%","dpsIncreaseAtFivePercentCooldown":"6.41%"},
    {"cooldownReduction":18,"dpsIncreaseRateAtZeroCooldown":"21.95%","dpsIncreaseAtOnePercentCooldown":"1.23%","dpsIncreaseAtFivePercentCooldown":"6.49%"},
    {"cooldownReduction":19,"dpsIncreaseRateAtZeroCooldown":"23.46%","dpsIncreaseAtOnePercentCooldown":"1.25%","dpsIncreaseAtFivePercentCooldown":"6.58%"},
    {"cooldownReduction":20,"dpsIncreaseRateAtZeroCooldown":"25.00%","dpsIncreaseAtOnePercentCooldown":"1.27%","dpsIncreaseAtFivePercentCooldown":"6.67%"},
    {"cooldownReduction":21,"dpsIncreaseRateAtZeroCooldown":"26.58%","dpsIncreaseAtOnePercentCooldown":"1.28%","dpsIncreaseAtFivePercentCooldown":"6.76%"},
    {"cooldownReduction":22,"dpsIncreaseRateAtZeroCooldown":"28.21%","dpsIncreaseAtOnePercentCooldown":"1.30%","dpsIncreaseAtFivePercentCooldown":"6.85%"},
    {"cooldownReduction":23,"dpsIncreaseRateAtZeroCooldown":"29.87%","dpsIncreaseAtOnePercentCooldown":"1.32%","dpsIncreaseAtFivePercentCooldown":"6.94%"},
    {"cooldownReduction":24,"dpsIncreaseRateAtZeroCooldown":"31.58%","dpsIncreaseAtOnePercentCooldown":"1.33%","dpsIncreaseAtFivePercentCooldown":"7.04%"},
    {"cooldownReduction":25,"dpsIncreaseRateAtZeroCooldown":"33.33%","dpsIncreaseAtOnePercentCooldown":"1.35%","dpsIncreaseAtFivePercentCooldown":"7.14%"},
    {"cooldownReduction":26,"dpsIncreaseRateAtZeroCooldown":"35.14%","dpsIncreaseAtOnePercentCooldown":"1.37%","dpsIncreaseAtFivePercentCooldown":"7.25%"},
    {"cooldownReduction":27,"dpsIncreaseRateAtZeroCooldown":"36.99%","dpsIncreaseAtOnePercentCooldown":"1.39%","dpsIncreaseAtFivePercentCooldown":"7.35%"},
    {"cooldownReduction":28,"dpsIncreaseRateAtZeroCooldown":"38.89%","dpsIncreaseAtOnePercentCooldown":"1.41%","dpsIncreaseAtFivePercentCooldown":"7.46%"},
    {"cooldownReduction":29,"dpsIncreaseRateAtZeroCooldown":"40.85%","dpsIncreaseAtOnePercentCooldown":"1.43%","dpsIncreaseAtFivePercentCooldown":"7.58%"},
    {"cooldownReduction":30,"dpsIncreaseRateAtZeroCooldown":"42.86%","dpsIncreaseAtOnePercentCooldown":"1.45%","dpsIncreaseAtFivePercentCooldown":"7.69%"},
    {"cooldownReduction":31,"dpsIncreaseRateAtZeroCooldown":"44.93%","dpsIncreaseAtOnePercentCooldown":"1.47%","dpsIncreaseAtFivePercentCooldown":"7.81%"},
    {"cooldownReduction":32,"dpsIncreaseRateAtZeroCooldown":"47.06%","dpsIncreaseAtOnePercentCooldown":"1.49%","dpsIncreaseAtFivePercentCooldown":"7.94%"},
    {"cooldownReduction":33,"dpsIncreaseRateAtZeroCooldown":"49.25%","dpsIncreaseAtOnePercentCooldown":"1.52%","dpsIncreaseAtFivePercentCooldown":"8.06%"},
    {"cooldownReduction":34,"dpsIncreaseRateAtZeroCooldown":"51.52%","dpsIncreaseAtOnePercentCooldown":"1.54%","dpsIncreaseAtFivePercentCooldown":"8.20%"},
    {"cooldownReduction":35,"dpsIncreaseRateAtZeroCooldown":"53.85%","dpsIncreaseAtOnePercentCooldown":"1.56%","dpsIncreaseAtFivePercentCooldown":"8.33%"},
    {"cooldownReduction":36,"dpsIncreaseRateAtZeroCooldown":"56.25%","dpsIncreaseAtOnePercentCooldown":"1.59%","dpsIncreaseAtFivePercentCooldown":"8.47%"},
    {"cooldownReduction":37,"dpsIncreaseRateAtZeroCooldown":"58.73%","dpsIncreaseAtOnePercentCooldown":"1.61%","dpsIncreaseAtFivePercentCooldown":"8.62%"},
    {"cooldownReduction":38,"dpsIncreaseRateAtZeroCooldown":"61.29%","dpsIncreaseAtOnePercentCooldown":"1.64%","dpsIncreaseAtFivePercentCooldown":"8.77%"},
    {"cooldownReduction":39,"dpsIncreaseRateAtZeroCooldown":"63.93%","dpsIncreaseAtOnePercentCooldown":"1.67%","dpsIncreaseAtFivePercentCooldown":"8.93%"},
    {"cooldownReduction":40,"dpsIncreaseRateAtZeroCooldown":"66.67%","dpsIncreaseAtOnePercentCooldown":"1.69%","dpsIncreaseAtFivePercentCooldown":"9.09%"},
    {"cooldownReduction":41,"dpsIncreaseRateAtZeroCooldown":"69.49%","dpsIncreaseAtOnePercentCooldown":"1.72%","dpsIncreaseAtFivePercentCooldown":"9.26%"},
    {"cooldownReduction":42,"dpsIncreaseRateAtZeroCooldown":"72.41%","dpsIncreaseAtOnePercentCooldown":"1.75%","dpsIncreaseAtFivePercentCooldown":"9.43%"},
    {"cooldownReduction":43,"dpsIncreaseRateAtZeroCooldown":"75.44%","dpsIncreaseAtOnePercentCooldown":"1.79%","dpsIncreaseAtFivePercentCooldown":"9.62%"},
    {"cooldownReduction":44,"dpsIncreaseRateAtZeroCooldown":"78.57%","dpsIncreaseAtOnePercentCooldown":"1.82%","dpsIncreaseAtFivePercentCooldown":"9.80%"},
    {"cooldownReduction":45,"dpsIncreaseRateAtZeroCooldown":"81.82%","dpsIncreaseAtOnePercentCooldown":"1.85%","dpsIncreaseAtFivePercentCooldown":"10.00%"},
    {"cooldownReduction":46,"dpsIncreaseRateAtZeroCooldown":"85.19%","dpsIncreaseAtOnePercentCooldown":"1.89%","dpsIncreaseAtFivePercentCooldown":"10.20%"},
    {"cooldownReduction":47,"dpsIncreaseRateAtZeroCooldown":"88.68%","dpsIncreaseAtOnePercentCooldown":"1.92%","dpsIncreaseAtFivePercentCooldown":"10.42%"},
    {"cooldownReduction":48,"dpsIncreaseRateAtZeroCooldown":"92.31%","dpsIncreaseAtOnePercentCooldown":"1.96%","dpsIncreaseAtFivePercentCooldown":"10.64%"},
    {"cooldownReduction":49,"dpsIncreaseRateAtZeroCooldown":"96.08%","dpsIncreaseAtOnePercentCooldown":"2.00%","dpsIncreaseAtFivePercentCooldown":"10.87%"},
    {"cooldownReduction":50,"dpsIncreaseRateAtZeroCooldown":"100.00%","dpsIncreaseAtOnePercentCooldown":"2.04%","dpsIncreaseAtFivePercentCooldown":"11.11%"},
    {"cooldownReduction":51,"dpsIncreaseRateAtZeroCooldown":"104.08%","dpsIncreaseAtOnePercentCooldown":"2.08%","dpsIncreaseAtFivePercentCooldown":"11.36%"},
    {"cooldownReduction":52,"dpsIncreaseRateAtZeroCooldown":"108.33%","dpsIncreaseAtOnePercentCooldown":"2.13%","dpsIncreaseAtFivePercentCooldown":"11.63%"},
    {"cooldownReduction":53,"dpsIncreaseRateAtZeroCooldown":"112.77%","dpsIncreaseAtOnePercentCooldown":"2.17%","dpsIncreaseAtFivePercentCooldown":"11.90%"},
    {"cooldownReduction":54,"dpsIncreaseRateAtZeroCooldown":"117.39%","dpsIncreaseAtOnePercentCooldown":"2.22%","dpsIncreaseAtFivePercentCooldown":"12.20%"},
    {"cooldownReduction":55,"dpsIncreaseRateAtZeroCooldown":"122.22%","dpsIncreaseAtOnePercentCooldown":"2.27%","dpsIncreaseAtFivePercentCooldown":"12.50%"},
    {"cooldownReduction":56,"dpsIncreaseRateAtZeroCooldown":"127.27%","dpsIncreaseAtOnePercentCooldown":"2.33%","dpsIncreaseAtFivePercentCooldown":"12.82%"},
    {"cooldownReduction":57,"dpsIncreaseRateAtZeroCooldown":"132.56%","dpsIncreaseAtOnePercentCooldown":"2.38%","dpsIncreaseAtFivePercentCooldown":"13.16%"},
    {"cooldownReduction":58,"dpsIncreaseRateAtZeroCooldown":"138.10%","dpsIncreaseAtOnePercentCooldown":"2.44%","dpsIncreaseAtFivePercentCooldown":"13.51%"},
    {"cooldownReduction":59,"dpsIncreaseRateAtZeroCooldown":"143.90%","dpsIncreaseAtOnePercentCooldown":"2.50%","dpsIncreaseAtFivePercentCooldown":"13.89%"},
    {"cooldownReduction":60,"dpsIncreaseRateAtZeroCooldown":"150.00%","dpsIncreaseAtOnePercentCooldown":"2.56%","dpsIncreaseAtFivePercentCooldown":"14.29%"}
    ];

var dataSetMenu = [
        {"id": "skillDPS", "text": "스킬 DPS"}
    ,{"id": "familiarDPS", "text": "사역마 DPS"}
    ,{"id": "skillDamage", "text": "스킬 1타 데미지"}
    ,{"id": "familiarDamage", "text": "사역마 1타 데미지"}
    ,{"id": "specAnalysis", "text": "스펙분석"}
    ,{"id": "cooldownEfficiency", "text": "쿨타임 감소 효율표"}
    // ,{"id": "calc", "text": "확률 계산기"}
    ];

var cooldownEfficiencyColumn =[
    { data: 'cooldownReduction', title: '쿨타임 감소' },
    { data: 'dpsIncreaseRateAtZeroCooldown', title: '쿨타임 0 기준 DPS 비율' },
    { data: 'dpsIncreaseAtOnePercentCooldown', title: '쿨타임 1% 상승 시 DPS 상승량' },
    { data: 'dpsIncreaseAtFivePercentCooldown', title: '쿨타임 5% 상승 시 DPS 상승량' }
];
