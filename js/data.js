var _spec =[
    {"name": "공격력", "ranks": "0", "value": "1.53", "key": "_attackPower"},
    {"name": "스킬 치명타 확률", "ranks": "0", "value": "142.8", "key": "_skillCriticalHitProbability"},
    {"name": "스킬 치명타 피해량", "ranks": "0", "value": "2637.5", "key": "_skillCriticalDamage"},
    {"name": "스킬 쿨타임", "ranks": "0", "value": "63.73", "key": "_skillCooldown"},
    {"name": "스킬 피해량", "ranks": "0", "value": "47451.54", "key": "_skillDamage"},
    {"name": "사역마 치명타 확률", "ranks": "0", "value": "112.6", "key": "_familiarCriticalHitProbability"},
    {"name": "사역마 치명타 피해량", "ranks": "0", "value": "2597.5", "key": "_familiarCriticalDamage"},
    {"name": "사역마 쿨타임", "ranks": "0", "value": "0", "key": "_familiarCooldown"},
    {"name": "사역마 피해량", "ranks": "0", "value": "4330.10", "key": "_familiarDamage"},
    {"name": "일반 몬스터 피해량", "ranks": "0", "value": "145", "key": "_normalMonsterDamage"},
    {"name": "보스 몬스터 피해량", "ranks": "0", "value": "165", "key": "_bossMonsterDamage"},
    {"name": "최종 피해량", "ranks": "0", "value": "710", "key": "_finalDamage"}];

var _skill = [
    {"name": "가르기", "default": "98", "growth": "3.05", "hits": "1", "cool_time": "5", "ranks": "1", "key": "slash"},
    {"name": "마법의 구", "default": "14", "growth": "0.44", "hits": "14", "cool_time": "10", "ranks": "1", "key": "magicSphere"},
    {"name": "스컬 프레스", "default": "16", "growth": "0.49", "hits": "10", "cool_time": "8", "ranks": "1", "key": "skullPress"},
    {"name": "번개", "default": "154", "growth": "1.20", "hits": "4", "cool_time": "9", "ranks": "2", "key": "lightning"},
    {"name": "까마귀 깃털", "default": "26", "growth": "0.20", "hits": "16", "cool_time": "6", "ranks": "2", "key": "crowFeather"},
    {"name": "에너지 볼", "default": "480", "growth": "3.70", "hits": "1", "cool_time": "7", "ranks": "2", "key": "energyBall"},
    {"name": "고드름", "default": "280", "growth": "1.50", "hits": "3", "cool_time": "8", "ranks": "3", "key": "icicle"},
    {"name": "독버섯", "default": "79", "growth": "0.42", "hits": "10", "cool_time": "7.5", "ranks": "3", "key": "poisonMushroom"},
    {"name": "소드 마스터", "default": "298", "growth": "1.58", "hits": "3", "cool_time": "8.5", "ranks": "3", "key": "swordMaster"},
    {"name": "아쿠아 볼", "default": "48", "growth": "0.91", "hits": "26", "cool_time": "9", "ranks": "4", "key": "aquaBall"},
    {"name": "춤추는 칼", "default": "207", "growth": "3.97", "hits": "10", "cool_time": "12", "ranks": "4", "key": "dancingSword"},
    {"name": "크리스탈 블래스터", "default": "172", "growth": "3.31", "hits": "8", "cool_time": "10", "ranks": "4", "key": "crystalBlaster"},
    {"name": "오우거의 발", "default": "605", "growth": "20.80", "hits": "4", "cool_time": "7", "ranks": "5", "key": "ogreFoot"},
    {"name": "가시 럴커", "default": "347", "growth": "11.90", "hits": "8", "cool_time": "6.5", "ranks": "5", "key": "thornLurker"},
    {"name": "박쥐", "default": "206", "growth": "7.06", "hits": "16", "cool_time": "9.5", "ranks": "5", "key": "bat"},
    {"name": "히드라 브레스", "default": "388", "growth": "10.91", "hits": "16", "cool_time": "9", "ranks": "6", "key": "hydraBreath"},
    {"name": "블랙홀", "default": "865", "growth": "24.22", "hits": "8", "cool_time": "10", "ranks": "6", "key": "blackHole"},
    {"name": "메테오", "default": "922", "growth": "25.84", "hits": "6", "cool_time": "8", "ranks": "6", "key": "meteor"},
    {"name": "혜성의 창", "default": "1457", "growth": "43.50", "hits": "8", "cool_time": "11", "ranks": "7", "key": "cometSpear"},
    {"name": "빛의 파동", "default": "12720", "growth": "379.60", "hits": "1", "cool_time": "12", "ranks": "7", "key": "lightWave"},
    {"name": "마왕의 눈", "default": "630", "growth": "18.78", "hits": "16", "cool_time": "9.5", "ranks": "7", "key": "demonEye"}];

var _servant = [
    {"name": "리리", "default": "126", "growth": "1.94", "hits": "5", "cool_time": "6.3", "ranks": "1", "key": "lily"},
    {"name": "퍼지", "default": "200", "growth": "3.07", "hits": "3", "cool_time": "6", "ranks": "1", "key": "fuzzy"},
    {"name": "바츠", "default": "113", "growth": "1.74", "hits": "6", "cool_time": "6.8", "ranks": "1", "key": "bats"},
    {"name": "쿠르그", "default": "175", "growth": "2.69", "hits": "4", "cool_time": "7", "ranks": "1", "key": "kurg"},
    {"name": "트위티", "default": "162.5", "growth": "1.80", "hits": "8", "cool_time": "6.5", "ranks": "2", "key": "tweety"},
    {"name": "나비", "default": "366", "growth": "4.06", "hits": "3", "cool_time": "5.5", "ranks": "2", "key": "butterfly"},
    {"name": "레일라", "default": "252", "growth": "2.79", "hits": "5", "cool_time": "6.3", "ranks": "2", "key": "leila"},
    {"name": "햄찌", "default": "400", "growth": "4.42", "hits": "3", "cool_time": "6", "ranks": "2", "key": "hamji"},
    {"name": "레디", "default": "340", "growth": "7.88", "hits": "6", "cool_time": "6.8", "ranks": "3", "key": "ready"},
    {"name": "토니", "default": "262", "growth": "6.08", "hits": "8", "cool_time": "7", "ranks": "3", "key": "tony"},
    {"name": "크로우", "default": "244", "growth": "5.64", "hits": "8", "cool_time": "6.5", "ranks": "3", "key": "crow"},
    {"name": "절미", "default": "183.1", "growth": "4.25", "hits": "9", "cool_time": "5.5", "ranks": "3", "key": "jelly"},
    {"name": "블루아", "default": "630", "growth": "9.61", "hits": "5", "cool_time": "6.3", "ranks": "4", "key": "blueA"},
    {"name": "RH-42", "default": "1000", "growth": "15.25", "hits": "3", "cool_time": "6", "ranks": "4", "key": "rh42"},
    {"name": "아이시", "default": "189", "growth": "2.88", "hits": "18", "cool_time": "6.8", "ranks": "4", "key": "icy"},
    {"name": "알파", "default": "700", "growth": "10.67", "hits": "5", "cool_time": "7", "ranks": "4", "key": "alpha"},
    {"name": "루핀", "default": "597.7", "growth": "6.81", "hits": "12", "cool_time": "6.5", "ranks": "5", "key": "lupin"},
    {"name": "레오", "default": "674", "growth": "7.68", "hits": "9", "cool_time": "5.5", "ranks": "5", "key": "leo"},
    {"name": "바실리", "default": "993", "growth": "11.31", "hits": "7", "cool_time": "6.3", "ranks": "5", "key": "basil"},
    {"name": "토트", "default": "827", "growth": "9.43", "hits": "8", "cool_time": "6", "ranks": "5", "key": "tot"},
    {"name": "스파크", "default": "3328", "growth": "52.98", "hits": "3", "cool_time": "6.8", "ranks": "6", "key": "spark"},
    {"name": "브레이즌", "default": "1027.5", "growth": "16.37", "hits": "10", "cool_time": "7", "ranks": "6", "key": "brazen"},
    {"name": "녹스", "default": "596.2", "growth": "9.50", "hits": "16", "cool_time": "6.5", "ranks": "6", "key": "nox"},
    {"name": "치즈", "default": "897", "growth": "14.29", "hits": "9", "cool_time": "5.5", "ranks": "6", "key": "cheese"},
    {"name": "아우로스", "default": "3082", "growth": "49.1", "hits": "3", "cool_time": "6.3", "ranks": "6", "key": "aurora"},
    {"name": "록큰", "default": "3230", "growth": "90.43", "hits": "3", "cool_time": "6", "ranks": "7", "key": "rockn"},
    {"name": "코코", "default": "5490", "growth": "153.73", "hits": "2", "cool_time": "6.8", "ranks": "7", "key": "coco"},
    {"name": "베타", "default": "753.5", "growth": "21.1", "hits": "15", "cool_time": "7", "ranks": "7", "key": "beta"},
    {"name": "아폴로", "default": "700", "growth": "19.59", "hits": "15", "cool_time": "6.5", "ranks": "7", "key": "apollo"},
    {"name": "젤리", "default": "2961", "growth": "82.89", "hits": "3", "cool_time": "5.5", "ranks": "7", "key": "jelly"}];

var _relics = [
    {"name": "유물 미장착", "ranks": "0", "value": "0", "key": "relicsSet1"},
    {"name": "지도5,마법서5,네크로5,슬라임조각5", "ranks": "0", "value": "0", "key": "relicsSet2"},
    {"name": "큐브1", "ranks": "0", "value": "0", "key": "relicsSet3"},
    {"name": "큐브2", "ranks": "0", "value": "0", "key": "relicsSet4"},
    {"name": "큐브3", "ranks": "0", "value": "0", "key": "relicsSet5"},
    {"name": "큐브4", "ranks": "0", "value": "0", "key": "relicsSet6"},
    {"name": "큐브5", "ranks": "0", "value": "0", "key": "relicsSet7"},
    {"name": "꿈룬5,맹반5,보검5,뇌전5", "ranks": "0", "value": "0", "key": "relicsSet8"},
    {"name": "꿈룬5,맹반5,보검5,인형5", "ranks": "0", "value": "0", "key": "relicsSet9"},
    {"name": "꿈룬5,맹반5,뇌전5,꼬리5", "ranks": "0", "value": "0", "key": "relicsSet10"},
    {"name": "꿈룬5,맹반5,뇌전5,지도5", "ranks": "0", "value": "0", "key": "relicsSet11"},
    {"name": "꿈룬5,맹반5,뇌전5,자물쇠", "ranks": "0", "value": "0", "key": "relicsSet12"},
    {"name": "맹반5,지도5,꼬리5,뇌전5", "ranks": "0", "value": "0", "key": "relicsSet13"},
    {"name": "맹반5,꼬리5,뇌전5,자물쇠", "ranks": "0", "value": "0", "key": "relicsSet14"},
    {"name": "맹반5,보검5,인형5,뇌전5", "ranks": "0", "value": "0", "key": "relicsSet15"},
    {"name": "꿈룬,보검,인형,슬라임조각", "ranks": "0", "value": "0", "key": "relicsSet16"}];

function createColModel(baseCols, isDPS) {
    let colModel = [...baseCols];
    if (isDPS) {
        colModel.push({ label: '횟수', name: 'hits', width: 70, align: 'right', frozen: true });
        colModel.push({ label: '쿨타임', name: 'cool_time', width: 70, align: 'right', frozen: true });
    }
    colModel.push({ label: '100', name: '100', width: 70, align: 'right', frozen: true });
    for (let i = 1; i < 100; i++) {
        colModel.push({ label: i.toString(), name: i.toString(), width: 70, cellattr: alignCell });
    }

    return colModel;
}

const baseCols = [
    { label: '이름', name: 'name', width: 100, frozen: true, cellattr: nameColor },
    { label: '기본 계수', name: 'default', width: 60, align: 'right', frozen: true },
    { label: '성장 계수', name: 'growth', width: 60, align: 'right', frozen: true }
];

const colModelDPS = createColModel(baseCols, true);
const colModelDamage = createColModel(baseCols, false);

// 이름영역 색상변환 함수
function nameColor(rowId, cellValue, rawObject, cm, rdata) {
    if(rawObject.ranks == "1") {
        return ' style="color: white; background-color: #6c5d6e;font-weight: bold;"';
    }else if(rawObject.ranks == "2") {
        return ' style="color: white; background-color: #009517;font-weight: bold;"';
    }else if(rawObject.ranks == "3") {
        return ' style="color: white; background-color: #0069bb;font-weight: bold;"';
    }else if(rawObject.ranks == "4") {
        return ' style="color: white; background-color: #79118d;font-weight: bold;"';
    }else if(rawObject.ranks == "5") {
        return ' style="background-color: #f69d00;font-weight: bold;"';
    }else if(rawObject.ranks == "6") {
        return ' style="background-color: #ef6235;font-weight: bold;"';
    }else{
        return ' style="background-color: #e8ca8f;font-weight: bold;"';
    }
}

// 셀 정렬 함수
function alignCell(rowId, val, rawObject, cm, rdata) {
    if (isNaN(val)) {
        // 값이 문자인 경우
        return ' style="text-align:center"';
    } else {
        // 값이 숫자인 경우
        return ' style="text-align:right"';
    }
}