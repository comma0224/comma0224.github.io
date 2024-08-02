var dataSetSkill = [
    {"name": "가르기", "default": "98", "growth": "3.05", "hits": "1", "cool_time": "5", "ranks": "1", "key": "slash", "value":"100"},
    {"name": "마법의 구", "default": "14", "growth": "0.44", "hits": "14", "cool_time": "10", "ranks": "1", "key": "magicSphere", "value":"100"},
    {"name": "스컬 프레스", "default": "16", "growth": "0.49", "hits": "10", "cool_time": "8", "ranks": "1", "key": "skullPress", "value":"100"},
    {"name": "번개", "default": "154", "growth": "1.20", "hits": "4", "cool_time": "9", "ranks": "2", "key": "lightning", "value":"100"},
    {"name": "까마귀 깃털", "default": "26", "growth": "0.20", "hits": "16", "cool_time": "6", "ranks": "2", "key": "crowFeather", "value":"100"},
    {"name": "에너지 볼", "default": "480", "growth": "3.70", "hits": "1", "cool_time": "7", "ranks": "2", "key": "energyBall", "value":"100"},
    {"name": "고드름", "default": "280", "growth": "1.50", "hits": "3", "cool_time": "8", "ranks": "3", "key": "icicle", "value":"100"},
    {"name": "독버섯", "default": "79", "growth": "0.42", "hits": "10", "cool_time": "7.5", "ranks": "3", "key": "poisonMushroom", "value":"100"},
    {"name": "소드 마스터", "default": "298", "growth": "1.58", "hits": "3", "cool_time": "8.5", "ranks": "3", "key": "swordMaster", "value":"100"},
    {"name": "아쿠아 볼", "default": "48", "growth": "0.91", "hits": "26", "cool_time": "9", "ranks": "4", "key": "aquaBall", "value":"100"},
    {"name": "춤추는 칼", "default": "207", "growth": "3.97", "hits": "20", "cool_time": "12", "ranks": "4", "key": "dancingSword", "value":"100"},
    {"name": "크리스탈 블래스터", "default": "172", "growth": "3.31", "hits": "8", "cool_time": "10", "ranks": "4", "key": "crystalBlaster", "value":"100"},
    {"name": "오우거의 발", "default": "605", "growth": "20.80", "hits": "4", "cool_time": "7", "ranks": "5", "key": "ogreFoot", "value":"100"},
    {"name": "가시 럴커", "default": "347", "growth": "11.90", "hits": "3", "cool_time": "6.5", "ranks": "5", "key": "thornLurker", "value":"22"},
    {"name": "박쥐", "default": "206", "growth": "7.06", "hits": "16", "cool_time": "9.5", "ranks": "5", "key": "bat", "value":"12"},
    {"name": "히드라 브레스", "default": "388", "growth": "10.91", "hits": "16", "cool_time": "9", "ranks": "6", "key": "hydraBreath", "value":"9"},
    {"name": "블랙홀", "default": "865", "growth": "24.22", "hits": "8", "cool_time": "10", "ranks": "6", "key": "blackHole", "value":"7"},
    {"name": "메테오", "default": "922", "growth": "25.84", "hits": "6", "cool_time": "8", "ranks": "6", "key": "meteor", "value":"8"},
    {"name": "혜성의 창", "default": "1457", "growth": "43.50", "hits": "8", "cool_time": "11", "ranks": "7", "key": "cometSpear", "value":"3"},
    {"name": "빛의 파동", "default": "12720", "growth": "379.60", "hits": "1", "cool_time": "12", "ranks": "7", "key": "lightWave", "value":"3"},
    {"name": "마왕의 눈", "default": "630", "growth": "18.78", "hits": "16", "cool_time": "9.5", "ranks": "7", "key": "demonEye", "value":"5"}];

var dataSetFamiliar = [
    {"name": "리리", "default": "126", "growth": "1.94", "hits": "5", "cool_time": "6.3", "ranks": "1", "key": "lily", "value":"100"},
    {"name": "퍼지", "default": "200", "growth": "3.07", "hits": "3", "cool_time": "6", "ranks": "1", "key": "fuzzy", "value":"100"},
    {"name": "바츠", "default": "113", "growth": "1.74", "hits": "6", "cool_time": "6.8", "ranks": "1", "key": "bats", "value":"100"},
    {"name": "쿠르그", "default": "175", "growth": "2.69", "hits": "4", "cool_time": "7", "ranks": "1", "key": "kurg", "value":"100"},
    {"name": "트위티", "default": "162.5", "growth": "1.80", "hits": "8", "cool_time": "6.5", "ranks": "2", "key": "tweety", "value":"100"},
    {"name": "나비", "default": "366", "growth": "4.06", "hits": "3", "cool_time": "5.5", "ranks": "2", "key": "butterfly", "value":"100"},
    {"name": "레일라", "default": "252", "growth": "2.79", "hits": "5", "cool_time": "6.3", "ranks": "2", "key": "leila", "value":"100"},
    {"name": "햄찌", "default": "400", "growth": "4.42", "hits": "3", "cool_time": "6", "ranks": "2", "key": "hamji", "value":"100"},
    {"name": "레디", "default": "340", "growth": "7.88", "hits": "6", "cool_time": "6.8", "ranks": "3", "key": "ready", "value":"100"},
    {"name": "토니", "default": "262", "growth": "6.08", "hits": "8", "cool_time": "7", "ranks": "3", "key": "tony", "value":"100"},
    {"name": "크로우", "default": "244", "growth": "5.64", "hits": "8", "cool_time": "6.5", "ranks": "3", "key": "crow", "value":"100"},
    {"name": "절미", "default": "183.1", "growth": "4.25", "hits": "9", "cool_time": "5.5", "ranks": "3", "key": "jeolmi", "value":"100"},
    {"name": "블루아", "default": "630", "growth": "9.61", "hits": "5", "cool_time": "6.3", "ranks": "4", "key": "blueA", "value":"100"},
    {"name": "RH-42", "default": "1000", "growth": "15.25", "hits": "3", "cool_time": "6", "ranks": "4", "key": "rh42", "value":"100"},
    {"name": "아이시", "default": "189", "growth": "2.88", "hits": "18", "cool_time": "6.8", "ranks": "4", "key": "icy", "value":"100"},
    {"name": "알파", "default": "700", "growth": "10.67", "hits": "5", "cool_time": "7", "ranks": "4", "key": "alpha", "value":"100"},
    {"name": "루핀", "default": "597.7", "growth": "6.81", "hits": "12", "cool_time": "6.5", "ranks": "5", "key": "lupin", "value":"44"},
    {"name": "레오", "default": "674", "growth": "7.68", "hits": "9", "cool_time": "5.5", "ranks": "5", "key": "leo", "value":"8"},
    {"name": "바실리", "default": "993", "growth": "11.31", "hits": "7", "cool_time": "6.3", "ranks": "5", "key": "basil", "value":"6"},
    {"name": "토트", "default": "827", "growth": "9.43", "hits": "8", "cool_time": "6", "ranks": "5", "key": "tot", "value":"8"},
    {"name": "스파크", "default": "3328", "growth": "52.98", "hits": "3", "cool_time": "6.8", "ranks": "6", "key": "spark", "value":"3"},
    {"name": "브레이즌", "default": "1027.5", "growth": "16.37", "hits": "10", "cool_time": "7", "ranks": "6", "key": "brazen", "value":"3"},
    {"name": "녹스", "default": "596.2", "growth": "9.50", "hits": "16", "cool_time": "6.5", "ranks": "6", "key": "nox", "value":"5"},
    {"name": "치즈", "default": "897", "growth": "14.29", "hits": "9", "cool_time": "5.5", "ranks": "6", "key": "cheese", "value":"4"},
    {"name": "아우로스", "default": "3082", "growth": "49.1", "hits": "3", "cool_time": "6.3", "ranks": "6", "key": "aurora", "value":"3"},
    {"name": "록큰", "default": "3230", "growth": "90.43", "hits": "3", "cool_time": "6", "ranks": "7", "key": "rockn", "value":"2"},
    {"name": "코코", "default": "5490", "growth": "153.73", "hits": "2", "cool_time": "6.8", "ranks": "7", "key": "coco", "value":"3"},
    {"name": "베타", "default": "753.5", "growth": "21.1", "hits": "15", "cool_time": "7", "ranks": "7", "key": "beta", "value":"1"},
    {"name": "아폴로", "default": "700", "growth": "19.59", "hits": "15", "cool_time": "6.5", "ranks": "7", "key": "apollo", "value":"1"},
    {"name": "젤리", "default": "2961", "growth": "82.89", "hits": "3", "cool_time": "5.5", "ranks": "7", "key": "jelly", "value":"2"}];

var columnsDPS = [
    { data: 'name', title: '이름' },
    { data: 'default', title: '기본 계수' },
    { data: 'growth', title: '성장 계수' },
    { data: 'hits', title: '타수' },
    { data: 'cool_time', title: '쿨타임' },
    { data: 'ranks', title: 'ranks', visible: false },
    { data: 'key', title: 'key', visible: false }
];

var columnsDamage = [
    { data: 'name', title: '이름' },
    { data: 'default', title: '기본 계수' },
    { data: 'growth', title: '성장 계수' },
    { data: 'hits', title: '타수', visible: false  },
    { data: 'cool_time', title: '쿨타임', visible: false  },
    { data: 'ranks', title: 'ranks', visible: false },
    { data: 'key', title: 'key', visible: false }
];

function addColumnsDPS(columns) {

    // 100 열을 먼저 추가
    columns.push({
        data: null,
        title: '100',
        render: function(data, type, row, meta) {
            var value = (parseFloat(row.default) + (row.growth * 99)) * row.hits / row.cool_time;
            return parseFloat(value).toFixed(2); // 소수점 2자리까지 표현
        }
    });

    // 1부터 99까지의 열을 추가
    for (var i = 1; i < 100; i++) {
        $('#header-row').append('<th>' + i + '</th>');
        columns.push({
            data: null,
            title: i.toString(),
            render: (function(i) {
                return function(data, type, row, meta) {
                    var value = (parseFloat(row.default) + (row.growth * (i-1))) * row.hits / row.cool_time;
                    return parseFloat(value).toFixed(2); // 소수점 2자리까지 표현
                };
            })(i)
        });
    }
    return columns;
}
function addColumnsDamage(columns) {

    // 100 열을 먼저 추가
    columns.push({
        data: null,
        title: '100',
        render: function(data, type, row, meta) {
            var value = parseFloat(row.default) + (row.growth * 99);
            return parseFloat(value).toFixed(2); // 소수점 2자리까지 표현
        }
    });

    // 1부터 99까지의 열을 추가
    for (var i = 1; i < 100; i++) {
        $('#header-row').append('<th>' + i + '</th>');
        columns.push({
            data: null,
            title: i.toString(),
            render: (function(i) {
                return function(data, type, row, meta) {
                    var value = parseFloat(row.default) + (row.growth * (i-1));
                    return parseFloat(value).toFixed(2); // 소수점 2자리까지 표현
                };
            })(i)
        });
    }
    return columns;
}

var dataSetSpec =[
    {"name": "공격력", "ranks": "0", "value": "1.53", "key": "_attackPower"},
    {"name": "스킬 치명타 확률", "ranks": "0", "value": "142.8", "key": "_skillCriticalHitProbability"},
    {"name": "스킬 치명타 피해량", "ranks": "0", "value": "2637.5", "key": "_skillCriticalDamage"},
    {"name": "스킬 쿨타임", "ranks": "0", "value": "63.73", "key": "_skillCooldown"},
    {"name": "스킬 피해량", "ranks": "0", "value": "47451.54", "key": "_skillDamage"},
    {"name": "사역마 치명타 확률", "ranks": "0", "value": "112.6", "key": "_familiarCriticalHitProbability"},
    {"name": "사역마 치명타 피해량", "ranks": "0", "value": "2597.5", "key": "_familiarCriticalDamage"},
    {"name": "사역마 쿨타임", "ranks": "0", "value": "0", "key": "_familiarCooldown"},
    {"name": "사역마 피해량", "ranks": "0", "value": "43330.10", "key": "_familiarDamage"},
    {"name": "일반 몬스터 피해량", "ranks": "0", "value": "145", "key": "_normalMonsterDamage"},
    {"name": "보스 몬스터 피해량", "ranks": "0", "value": "165", "key": "_bossMonsterDamage"},
    {"name": "최종 피해량", "ranks": "0", "value": "710", "key": "_finalDamage"}];


var dataSetRelicsSet = [
    {"name": "유물 미장착", "ranks": "0", "value": "0", "key": "relicsSet1"},
    {"name": "지도5,마법서5,네크로5,슬라임조각5", "ranks": "0", "value": "0", "key": "relicsSet2"},
    {"name": "큐브1", "ranks": "0", "value": "0", "key": "relicsSet3"},
    {"name": "큐브2", "ranks": "0", "value": "0", "key": "relicsSet4"},
    {"name": "큐브3", "ranks": "0", "value": "0", "key": "relicsSet5"},
    {"name": "큐브4", "ranks": "0", "value": "0", "key": "relicsSet6"},
    {"name": "큐브5", "ranks": "0", "value": "0", "key": "relicsSet7"},
    {"name": "꿈룬5,맹반5,보검5,인형5", "ranks": "0", "value": "0", "key": "relicsSet9"},
    {"name": "맹반5,지도5,꼬리5,뇌전5", "ranks": "0", "value": "0", "key": "relicsSet13"},
    {"name": "맹반5,꼬리5,뇌전5,자물쇠", "ranks": "0", "value": "0", "key": "relicsSet14"},
    {"name": "맹반5,보검5,인형5,뇌전5", "ranks": "0", "value": "0", "key": "relicsSet15"},
    {"name": "꿈룬,보검,인형,슬라임조각", "ranks": "0", "value": "0", "key": "relicsSet16"},
    {"name": "꿈룬5,맹반5,뇌전5,지도5", "ranks": "0", "value": "0", "key": "relicsSet11"},
    {"name": "꿈룬5,맹반5,보검5,뇌전5", "ranks": "0", "value": "0", "key": "relicsSet8"},
    {"name": "꿈룬5,맹반5,뇌전5,꼬리5", "ranks": "0", "value": "0", "key": "relicsSet10"},
    {"name": "꿈룬5,맹반5,뇌전5,자물쇠", "ranks": "0", "value": "0", "key": "relicsSet12"},
    {"name": "꿈룬5,맹반5,붉은공명석,자물쇠", "ranks": "0", "value": "0", "key": "relicsSet17"}];

var dataSetRelics = [
    {"name": "맹수의 반지", "ranks": "0", "value": "0", "key": "relics12"},
    {"name": "꿈의 룬 조각(맹반)", "ranks": "0", "value": "0", "key": "relics13"},
    {"name": "평범한 자물쇠", "ranks": "0", "value": "0", "key": "relics4"},
    {"name": "뇌전의 깃털", "ranks": "0", "value": "0", "key": "relics6"},
    {"name": "붉은 공명석", "ranks": "0", "value": "0", "key": "relics5"},
    {"name": "셀러맨더 꼬리", "ranks": "0", "value": "0", "key": "relics1"},
    {"name": "미확인 큐브", "ranks": "0", "value": "0", "key": "relics10"},
    {"name": "대해적의 보물 지도", "ranks": "0", "value": "0", "key": "relics2"},
    {"name": "강화 슬라임 조각", "ranks": "0", "value": "0", "key": "relics3"},
    {"name": "버려진 애착 인형", "ranks": "0", "value": "0", "key": "relics7"},
    {"name": "고대 마법서", "ranks": "0", "value": "0", "key": "relics8"},
    {"name": "네크로노미콘", "ranks": "0", "value": "0", "key": "relics9"},
    {"name": "영웅의 낡은 보검", "ranks": "0", "value": "0", "key": "relics11"},
    {"name": "꿈의 룬 조각(보검)", "ranks": "0", "value": "0", "key": "relics14"},
    {"name": "꿈의 룬 조각(맹반, 보검)", "ranks": "0", "value": "0", "key": "relics15"}
];

var cooldownEfficiency = [
    {"cooldownReduction":0,"dpsIncreaseRateAtZeroCooldown":"0.00%","dpsIncreaseAtOnePercentCooldown":"1.01%","dpsIncreaseAtFivePercentCooldown":"5.26%"},
    {"cooldownReduction":1,"dpsIncreaseRateAtZeroCooldown":"1.01%","dpsIncreaseAtOnePercentCooldown":"1.02%","dpsIncreaseAtFivePercentCooldown":"5.32%"},
    {"cooldownReduction":2,"dpsIncreaseRateAtZeroCooldown":"2.04%","dpsIncreaseAtOnePercentCooldown":"1.03%","dpsIncreaseAtFivePercentCooldown":"5.38%"},
    {"cooldownReduction":3,"dpsIncreaseRateAtZeroCooldown":"3.09%","dpsIncreaseAtOnePercentCooldown":"1.04%","dpsIncreaseAtFivePercentCooldown":"5.43%"},
    {"cooldownReduction":4,"dpsIncreaseRateAtZeroCooldown":"4.17%","dpsIncreaseAtOnePercentCooldown":"1.05%","dpsIncreaseAtFivePercentCooldown":"5.49%"},
    {"cooldownReduction":5,"dpsIncreaseRateAtZeroCooldown":"5.26%","dpsIncreaseAtOnePercentCooldown":"1.06%","dpsIncreaseAtFivePercentCooldown":"5.56%"},
    {"cooldownReduction":6,"dpsIncreaseRateAtZeroCooldown":"6.38%","dpsIncreaseAtOnePercentCooldown":"1.08%","dpsIncreaseAtFivePercentCooldown":"5.62%"},
    {"cooldownReduction":7,"dpsIncreaseRateAtZeroCooldown":"7.53%","dpsIncreaseAtOnePercentCooldown":"1.09%","dpsIncreaseAtFivePercentCooldown":"5.68%"},
    {"cooldownReduction":8,"dpsIncreaseRateAtZeroCooldown":"8.70%","dpsIncreaseAtOnePercentCooldown":"1.10%","dpsIncreaseAtFivePercentCooldown":"5.75%"},
    {"cooldownReduction":9,"dpsIncreaseRateAtZeroCooldown":"9.89%","dpsIncreaseAtOnePercentCooldown":"1.11%","dpsIncreaseAtFivePercentCooldown":"5.81%"},
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
    {"cooldownReduction":60,"dpsIncreaseRateAtZeroCooldown":"150.00%","dpsIncreaseAtOnePercentCooldown":"2.56%","dpsIncreaseAtFivePercentCooldown":"14.29%"},
    {"cooldownReduction":61,"dpsIncreaseRateAtZeroCooldown":"156.41%","dpsIncreaseAtOnePercentCooldown":"2.63%","dpsIncreaseAtFivePercentCooldown":"14.71%"},
    {"cooldownReduction":62,"dpsIncreaseRateAtZeroCooldown":"163.16%","dpsIncreaseAtOnePercentCooldown":"2.70%","dpsIncreaseAtFivePercentCooldown":"15.15%"},
    {"cooldownReduction":63,"dpsIncreaseRateAtZeroCooldown":"170.27%","dpsIncreaseAtOnePercentCooldown":"2.78%","dpsIncreaseAtFivePercentCooldown":"15.63%"},
    {"cooldownReduction":64,"dpsIncreaseRateAtZeroCooldown":"177.78%","dpsIncreaseAtOnePercentCooldown":"2.86%","dpsIncreaseAtFivePercentCooldown":"16.13%"},
    {"cooldownReduction":65,"dpsIncreaseRateAtZeroCooldown":"185.71%","dpsIncreaseAtOnePercentCooldown":"2.94%","dpsIncreaseAtFivePercentCooldown":"16.67%"},
    {"cooldownReduction":66,"dpsIncreaseRateAtZeroCooldown":"194.12%","dpsIncreaseAtOnePercentCooldown":"3.03%","dpsIncreaseAtFivePercentCooldown":"17.24%"},
    {"cooldownReduction":67,"dpsIncreaseRateAtZeroCooldown":"203.03%","dpsIncreaseAtOnePercentCooldown":"3.13%","dpsIncreaseAtFivePercentCooldown":"17.86%"},
    {"cooldownReduction":68,"dpsIncreaseRateAtZeroCooldown":"212.50%","dpsIncreaseAtOnePercentCooldown":"3.23%","dpsIncreaseAtFivePercentCooldown":"18.52%"},
    {"cooldownReduction":69,"dpsIncreaseRateAtZeroCooldown":"222.58%","dpsIncreaseAtOnePercentCooldown":"3.33%","dpsIncreaseAtFivePercentCooldown":"19.23%"},
    {"cooldownReduction":70,"dpsIncreaseRateAtZeroCooldown":"233.33%","dpsIncreaseAtOnePercentCooldown":"3.45%","dpsIncreaseAtFivePercentCooldown":"20.00%"},
    {"cooldownReduction":71,"dpsIncreaseRateAtZeroCooldown":"244.83%","dpsIncreaseAtOnePercentCooldown":"3.57%","dpsIncreaseAtFivePercentCooldown":"20.83%"},
    {"cooldownReduction":72,"dpsIncreaseRateAtZeroCooldown":"257.14%","dpsIncreaseAtOnePercentCooldown":"3.70%","dpsIncreaseAtFivePercentCooldown":"21.74%"},
    {"cooldownReduction":73,"dpsIncreaseRateAtZeroCooldown":"270.37%","dpsIncreaseAtOnePercentCooldown":"3.85%","dpsIncreaseAtFivePercentCooldown":"22.73%"},
    {"cooldownReduction":74,"dpsIncreaseRateAtZeroCooldown":"284.62%","dpsIncreaseAtOnePercentCooldown":"4.00%","dpsIncreaseAtFivePercentCooldown":"23.81%"},
    {"cooldownReduction":75,"dpsIncreaseRateAtZeroCooldown":"300.00%","dpsIncreaseAtOnePercentCooldown":"4.17%","dpsIncreaseAtFivePercentCooldown":"25.00%"},
    {"cooldownReduction":76,"dpsIncreaseRateAtZeroCooldown":"316.67%","dpsIncreaseAtOnePercentCooldown":"4.35%","dpsIncreaseAtFivePercentCooldown":"26.32%"},
    {"cooldownReduction":77,"dpsIncreaseRateAtZeroCooldown":"334.78%","dpsIncreaseAtOnePercentCooldown":"4.55%","dpsIncreaseAtFivePercentCooldown":"27.78%"},
    {"cooldownReduction":78,"dpsIncreaseRateAtZeroCooldown":"354.55%","dpsIncreaseAtOnePercentCooldown":"4.76%","dpsIncreaseAtFivePercentCooldown":"29.41%"},
    {"cooldownReduction":79,"dpsIncreaseRateAtZeroCooldown":"376.19%","dpsIncreaseAtOnePercentCooldown":"5.00%","dpsIncreaseAtFivePercentCooldown":"31.25%"},
    {"cooldownReduction":80,"dpsIncreaseRateAtZeroCooldown":"400.00%","dpsIncreaseAtOnePercentCooldown":"5.26%","dpsIncreaseAtFivePercentCooldown":"33.33%"},
    {"cooldownReduction":81,"dpsIncreaseRateAtZeroCooldown":"426.32%","dpsIncreaseAtOnePercentCooldown":"5.56%","dpsIncreaseAtFivePercentCooldown":"35.71%"},
    {"cooldownReduction":82,"dpsIncreaseRateAtZeroCooldown":"455.56%","dpsIncreaseAtOnePercentCooldown":"5.88%","dpsIncreaseAtFivePercentCooldown":"38.46%"},
    {"cooldownReduction":83,"dpsIncreaseRateAtZeroCooldown":"488.24%","dpsIncreaseAtOnePercentCooldown":"6.25%","dpsIncreaseAtFivePercentCooldown":"41.67%"},
    {"cooldownReduction":84,"dpsIncreaseRateAtZeroCooldown":"525.00%","dpsIncreaseAtOnePercentCooldown":"6.67%","dpsIncreaseAtFivePercentCooldown":"45.45%"},
    {"cooldownReduction":85,"dpsIncreaseRateAtZeroCooldown":"566.67%","dpsIncreaseAtOnePercentCooldown":"7.14%","dpsIncreaseAtFivePercentCooldown":"50.00%"},
    {"cooldownReduction":86,"dpsIncreaseRateAtZeroCooldown":"614.29%","dpsIncreaseAtOnePercentCooldown":"7.69%","dpsIncreaseAtFivePercentCooldown":"55.56%"},
    {"cooldownReduction":87,"dpsIncreaseRateAtZeroCooldown":"669.23%","dpsIncreaseAtOnePercentCooldown":"8.33%","dpsIncreaseAtFivePercentCooldown":"62.50%"},
    {"cooldownReduction":88,"dpsIncreaseRateAtZeroCooldown":"733.33%","dpsIncreaseAtOnePercentCooldown":"9.09%","dpsIncreaseAtFivePercentCooldown":"71.43%"},
    {"cooldownReduction":89,"dpsIncreaseRateAtZeroCooldown":"809.09%","dpsIncreaseAtOnePercentCooldown":"10.00%","dpsIncreaseAtFivePercentCooldown":"83.33%"},
    {"cooldownReduction":90,"dpsIncreaseRateAtZeroCooldown":"900.00%","dpsIncreaseAtOnePercentCooldown":"11.11%","dpsIncreaseAtFivePercentCooldown":"100.00%"},
    {"cooldownReduction":91,"dpsIncreaseRateAtZeroCooldown":"1011.11%","dpsIncreaseAtOnePercentCooldown":"12.50%","dpsIncreaseAtFivePercentCooldown":"125.00%"},
    {"cooldownReduction":92,"dpsIncreaseRateAtZeroCooldown":"1150.00%","dpsIncreaseAtOnePercentCooldown":"14.29%","dpsIncreaseAtFivePercentCooldown":"166.67%"},
    {"cooldownReduction":93,"dpsIncreaseRateAtZeroCooldown":"1328.57%","dpsIncreaseAtOnePercentCooldown":"16.67%","dpsIncreaseAtFivePercentCooldown":"250.00%"},
    {"cooldownReduction":94,"dpsIncreaseRateAtZeroCooldown":"1566.67%","dpsIncreaseAtOnePercentCooldown":"20.00%","dpsIncreaseAtFivePercentCooldown":"500.00%"},
    {"cooldownReduction":95,"dpsIncreaseRateAtZeroCooldown":"1900.00%","dpsIncreaseAtOnePercentCooldown":"25.00%","dpsIncreaseAtFivePercentCooldown":"계산 불가"},
    {"cooldownReduction":96,"dpsIncreaseRateAtZeroCooldown":"2400.00%","dpsIncreaseAtOnePercentCooldown":"33.33%","dpsIncreaseAtFivePercentCooldown":"계산 불가"},
    {"cooldownReduction":97,"dpsIncreaseRateAtZeroCooldown":"3233.33%","dpsIncreaseAtOnePercentCooldown":"50.00%","dpsIncreaseAtFivePercentCooldown":"계산 불가"},
    {"cooldownReduction":98,"dpsIncreaseRateAtZeroCooldown":"4900.00%","dpsIncreaseAtOnePercentCooldown":"100.00%","dpsIncreaseAtFivePercentCooldown":"계산 불가"},
    {"cooldownReduction":99,"dpsIncreaseRateAtZeroCooldown":"9900.00%","dpsIncreaseAtOnePercentCooldown":"계산 불가","dpsIncreaseAtFivePercentCooldown":"계산 불가"}];
