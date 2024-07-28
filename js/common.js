var _servant = [
    {"name": "리리", "default": 126, "growth": 1.94, "hits": 5, "cool_time": 6.3, "ranks": 1},
    {"name": "퍼지", "default": 200, "growth": 3.07, "hits": 3, "cool_time": 6, "ranks": 1},
    {"name": "바츠", "default": 113, "growth": 1.74, "hits": 6, "cool_time": 6.8, "ranks": 1},
    {"name": "쿠르그", "default": 175, "growth": 2.69, "hits": 4, "cool_time": 7, "ranks": 1},
    {"name": "트위티", "default": 162.5, "growth": 1.8, "hits": 8, "cool_time": 6.5, "ranks": 2},
    {"name": "나비", "default": 366, "growth": 4.06, "hits": 3, "cool_time": 5.5, "ranks": 2},
    {"name": "레일라", "default": 252, "growth": 2.79, "hits": 5, "cool_time": 6.3, "ranks": 2},
    {"name": "햄찌", "default": 400, "growth": 4.42, "hits": 3, "cool_time": 6, "ranks": 2},
    {"name": "레디", "default": 340, "growth": 7.88, "hits": 6, "cool_time": 6.8, "ranks": 3},
    {"name": "토니", "default": 262, "growth": 6.08, "hits": 8, "cool_time": 7, "ranks": 3},
    {"name": "크로우", "default": 244, "growth": 5.64, "hits": 8, "cool_time": 6.5, "ranks": 3},
    {"name": "절미", "default": 183.1, "growth": 4.25, "hits": 9, "cool_time": 5.5, "ranks": 3},
    {"name": "블루아", "default": 630, "growth": 9.61, "hits": 5, "cool_time": 6.3, "ranks": 4},
    {"name": "RH-42", "default": 1000, "growth": 15.25, "hits": 3, "cool_time": 6, "ranks": 4},
    {"name": "아이시", "default": 189, "growth": 2.88, "hits": 18, "cool_time": 6.8, "ranks": 4},
    {"name": "알파", "default": 700, "growth": 10.67, "hits": 5, "cool_time": 7, "ranks": 4},
    {"name": "루핀", "default": 597.7, "growth": 6.81, "hits": 12, "cool_time": 6.5, "ranks": 5},
    {"name": "레오", "default": 674, "growth": 7.68, "hits": 9, "cool_time": 5.5, "ranks": 5},
    {"name": "바실리", "default": 993, "growth": 11.31, "hits": 7, "cool_time": 6.3, "ranks": 5},
    {"name": "토트", "default": 827, "growth": 9.43, "hits": 8, "cool_time": 6, "ranks": 5},
    {"name": "스파크", "default": 3328, "growth": 52.98, "hits": 3, "cool_time": 6.8, "ranks": 6},
    {"name": "브레이즌", "default": 1027.5, "growth": 16.37, "hits": 10, "cool_time": 7, "ranks": 6},
    {"name": "녹스", "default": 596.2, "growth": 9.5, "hits": 16, "cool_time": 6.5, "ranks": 6},
    {"name": "치즈", "default": 897, "growth": 14.29, "hits": 9, "cool_time": 5.5, "ranks": 6},
    {"name": "아우로스", "default": 3082, "growth": 49.1, "hits": 3, "cool_time": 6.3, "ranks": 6},
    {"name": "록큰", "default": 3230, "growth": 90.43, "hits": 3, "cool_time": 6, "ranks": 7},
    {"name": "코코", "default": 5490, "growth": 153.73, "hits": 2, "cool_time": 6.8, "ranks": 7},
    {"name": "베타", "default": 753.5, "growth": 21.1, "hits": 15, "cool_time": 7, "ranks": 7},
    {"name": "아폴로", "default": 700, "growth": 19.59, "hits": 15, "cool_time": 6.5, "ranks": 7},
    {"name": "젤리", "default": 2961, "growth": 82.89, "hits": 3, "cool_time": 5.5, "ranks": 7}];

var _skill = [
    {"name": "가르기", "default": 98, "growth": 3.05, "hits": 1, "cool_time": 5, "ranks": 1},
    {"name": "마법의 구", "default": 14, "growth": 0.44, "hits": 14, "cool_time": 10, "ranks": 1},
    {"name": "스컬 프레스", "default": 16, "growth": 0.49, "hits": 10, "cool_time": 8, "ranks": 1},
    {"name": "번개", "default": 154, "growth": 1.2, "hits": 4, "cool_time": 9, "ranks": 2},
    {"name": "까마귀 깃털", "default": 26, "growth": 0.2, "hits": 16, "cool_time": 6, "ranks": 2},
    {"name": "에너지 볼", "default": 480, "growth": 3.7, "hits": 1, "cool_time": 7, "ranks": 2},
    {"name": "고드름", "default": 280, "growth": 1.5, "hits": 3, "cool_time": 8, "ranks": 3},
    {"name": "독버섯", "default": 79, "growth": 0.42, "hits": 10, "cool_time": 7.5, "ranks": 3},
    {"name": "소드 마스터", "default": 298, "growth": 1.58, "hits": 3, "cool_time": 8.5, "ranks": 3},
    {"name": "아쿠아 볼", "default": 48, "growth": 0.91, "hits": 26, "cool_time": 9, "ranks": 4},
    {"name": "춤추는 칼", "default": 207, "growth": 3.97, "hits": 10, "cool_time": 12, "ranks": 4},
    {"name": "크리스탈 블래스터", "default": 172, "growth": 3.31, "hits": 8, "cool_time": 10, "ranks": 4},
    {"name": "오우거의 발", "default": 605, "growth": 20.8, "hits": 4, "cool_time": 7, "ranks": 5},
    {"name": "가시 럴커", "default": 347, "growth": 11.9, "hits": 8, "cool_time": 6.5, "ranks": 5},
    {"name": "박쥐", "default": 206, "growth": 7.06, "hits": 16, "cool_time": 9.5, "ranks": 5},
    {"name": "히드라 브레스", "default": 388, "growth": 10.91, "hits": 16, "cool_time": 9, "ranks": 6},
    {"name": "블랙홀", "default": 865, "growth": 24.22, "hits": 8, "cool_time": 10, "ranks": 6},
    {"name": "메테오", "default": 922, "growth": 25.84, "hits": 6, "cool_time": 8, "ranks": 6},
    {"name": "혜성의 창", "default": 1457, "growth": 43.5, "hits": 8, "cool_time": 11, "ranks": 7},
    {"name": "빛의 파동", "default": 12720, "growth": 379.6, "hits": 1, "cool_time": 12, "ranks": 7},
    {"name": "마왕의 눈", "default": 630, "growth": 18.78, "hits": 16, "cool_time": 9.5, "ranks": 7}];

var colModelDPS = [
    { label: '이름', name: 'name', width: 75, frozen:true, cellattr: nameColor },
    { label: '기본 계수', name: 'default', width: 60, align: 'right' , frozen:true },
    { label: '성장 계수', name: 'growth', width: 60, align: 'right' , frozen:true },
    { label: '횟수', name: 'hits', width: 50, align: 'right' , frozen:true },
    { label: '쿨타임', name: 'cool_time', width: 50, align: 'right' , frozen:true },
    { label: '100', name: '100', width: 70, align: 'right' , frozen:true }
];

for (var i = 1; i < 100; i++) {
    colModelDPS.push({ label: i.toString(), name: i.toString(), width: 70, cellattr: alignCell });
}

var colModelDamage = [
    { label: '이름', name: 'name', width: 75, frozen:true, cellattr: nameColor },
    { label: '기본 계수', name: 'default', width: 60, align: 'right' , frozen:true },
    { label: '성장 계수', name: 'growth', width: 60, align: 'right' , frozen:true },
    { label: '100', name: '100', width: 70, align: 'right' , frozen:true }
];

for (var i = 1; i < 100; i++) {
    colModelDamage.push({ label: i.toString(), name: i.toString(), width: 70, cellattr: alignCell });
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

// 이름영역 색상변환 함수
function nameColor(rowId, cellValue, rawObject, cm, rdata) {
    if(rawObject.ranks === 1) {
        return ' style="color: white; background-color: #6c5d6e;font-weight: bold;"';
    }else if(rawObject.ranks === 2) {
        return ' style="color: white; background-color: #009517;font-weight: bold;"';
    }else if(rawObject.ranks === 3) {
        return ' style="color: white; background-color: #0069bb;font-weight: bold;"';
    }else if(rawObject.ranks === 4) {
        return ' style="color: white; background-color: #79118d;font-weight: bold;"';
    }else if(rawObject.ranks === 5) {
        return ' style="background-color: #f69d00;font-weight: bold;"';
    }else if(rawObject.ranks === 6) {
        return ' style="background-color: #ef6235;font-weight: bold;"';
    }else{
        return ' style="background-color: #e8ca8f;font-weight: bold;"';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    $('#menuName').text("스킬 DPS");

    var data = _skill;
    data.forEach(function(row) {
        row['default'] = row['default'].toFixed(2);
        row['growth'] = row['growth'].toFixed(2);
        row['cool_time'] = row['cool_time'].toFixed(2);

        for (var i = 1; i <= 100; i++) {
            if (row['ranks'] < 5 && i != 100) {
                row[i.toString()] = "-";
            }else {
                row[i.toString()] = ((parseFloat(row['default']) + (parseFloat(row['growth']) * (i - 1))) * parseFloat(row['hits']) / parseFloat(row['cool_time'])).toFixed(2);
            }
        }
    });
    $('.skillDPS').jqGrid({
        datatype: "local",
        data: data,
        colModel: colModelDPS,
        viewrecords: true,
        rowNum: data.length,  // 모든 데이터를 한 페이지에 표시
        shrinkToFit: false,
        autowidth:true,
        autoScroll: true
    });
    $('.skillDPS').jqGrid('setFrozenColumns');

    data = _servant;
    data.forEach(function(row) {
        row['default'] = row['default'].toFixed(2);
        row['growth'] = row['growth'].toFixed(2);
        row['cool_time'] = row['cool_time'].toFixed(2);

        for (var i = 1; i <= 100; i++) {
            if (row['ranks'] < 5 && i != 100) {
                row[i.toString()] = "-";
            }else {
                row[i.toString()] = ((parseFloat(row['default']) + (parseFloat(row['growth']) * (i - 1))) * parseFloat(row['hits']) / parseFloat(row['cool_time'])).toFixed(2);
            }
        }
    });
    $('.servantDPS').jqGrid({
        datatype: "local",
        data: data,
        colModel: colModelDPS,
        viewrecords: true,
        rowNum: data.length,  // 모든 데이터를 한 페이지에 표시
        shrinkToFit: false,
        autowidth:true,
        autoScroll: true
    });
    $('.servantDPS').jqGrid('setFrozenColumns');

    data = _skill;
    data.forEach(function(row) {
        row['default'] = row['default'].toFixed(2);
        row['growth'] = row['growth'].toFixed(2);

        for (var i = 1; i <= 100; i++) {
            if (row['ranks'] < 5 && i != 100) {
                row[i.toString()] = "-";
            }else {
                row[i.toString()] = ((parseFloat(row['default']) + (parseFloat(row['growth']) * (i - 1))) * parseFloat(row['hits']) / parseFloat(row['cool_time'])).toFixed(2);
            }
        }
    });
    $('.skillDamage').jqGrid({
        datatype: "local",
        data: data,
        colModel: colModelDamage,
        viewrecords: true,
        rowNum: data.length,  // 모든 데이터를 한 페이지에 표시
        shrinkToFit: false,
        autowidth:true,
        autoScroll: true
    });
    $('.skillDamage').jqGrid('setFrozenColumns');

    data = _servant;
    data.forEach(function(row) {
        row['default'] = row['default'].toFixed(2);
        row['growth'] = row['growth'].toFixed(2);

        for (var i = 1; i <= 100; i++) {
            if (row['ranks'] < 5 && i != 100) {
                row[i.toString()] = "-";
            }else {
                row[i.toString()] = ((parseFloat(row['default']) + (parseFloat(row['growth']) * (i - 1))) * parseFloat(row['hits']) / parseFloat(row['cool_time'])).toFixed(2);
            }
        }
    });
    $('.servantDamage').jqGrid({
        datatype: "local",
        data: data,
        colModel: colModelDamage,
        viewrecords: true,
        rowNum: data.length,  // 모든 데이터를 한 페이지에 표시
        shrinkToFit: false,
        autowidth:true,
        autoScroll: true
    });

    $('.servantDamage').jqGrid('setFrozenColumns');

    hideAllGrids();
    alert("1");
    $('.skillDPS').show();

    document.getElementById('skillDPS').addEventListener('click', function() {
        hideAllGrids();
        $('.skillDPS').show();
    });

    document.getElementById('servantDPS').addEventListener('click', function() {
        hideAllGrids();
        $('.servantDPS').show();
    });

    document.getElementById('skillDamage').addEventListener('click', function() {
        hideAllGrids();
        $('.skillDamage').show();
    });

    document.getElementById('servantDamage').addEventListener('click', function() {
        hideAllGrids();
        $('.servantDamage').show();
    });

});

// 모든 그리드를 숨기는 함수
function hideAllGrids() {
    $('.skillDPS').hide();
    $('.servantDPS').hide();
    $('.skillDamage').hide();
    $('.servantDamage').hide();
}