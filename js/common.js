
function jqgridSet(_data,_colModel) {
    $("#specAnalysisBox").hide();
    $("#jqGrid").jqGrid("GridUnload");

    $("#jqGrid").jqGrid({
        datatype: "local",
        data: _data,
        colModel: _colModel,
        viewrecords: true,
        rowNum: _data.length,  // 모든 데이터를 한 페이지에 표시
        shrinkToFit: false,
        autowidth:true,
        height:'auto',
        autoScroll: true,
        loadonce:false
    });
    $("#jqGrid").jqGrid('setFrozenColumns');
    $("#jqGrid").trigger("reloadGrid");
}
function createInputGroup(container, items) {
    items.forEach(function(item) {
        var div = document.createElement('div');
        div.className = 'input-group input-group-sm';

        var span = document.createElement('span');
        span.className = 'input-group-text col-6 rank-' + item.ranks;
        span.id = 'inputGroup-sizing-sm';
        span.textContent = item.name;

        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.setAttribute('aria-label', 'Sizing example input');
        input.setAttribute('aria-describedby', 'inputGroup-sizing-sm');
        input.name = item.key;
        input.id = item.key;

        if (item.value) {
            input.value = item.value;
        } else {
            input.value = item.ranks < 5 ? 100 : 1;
        }

        // 이벤트 리스너 추가
        input.addEventListener('change', function() {
            bossSetResult();
        });

        div.appendChild(span);
        div.appendChild(input);
        container.appendChild(div);
    });
}
function createInputGroupResult(container, items) {
    items.forEach(function(item) {
        var div = document.createElement('div');
        div.className = 'input-group input-group-sm';

        var span = document.createElement('span');
        span.className = 'input-group-text col-6 rank-' + item.ranks;
        span.id = 'inputGroup-sizing-sm';
        span.textContent = item.name;

        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.setAttribute('aria-label', 'Sizing example input');
        input.setAttribute('aria-describedby', 'inputGroup-sizing-sm');

        input.name = item.key;
        input.id = item.key;
        input.readOnly = true;

        bossSetResult();

        div.appendChild(span);
        div.appendChild(input);
        container.appendChild(div);
    });
}

function calculateValue(data, levelData) {
    return data.map(function(item) {
        var level = parseFloat(levelData.find(function(levelItem) {
            return levelItem.key === item.key;
        }).level);

        var value = (parseFloat(item.default) + parseFloat(item.growth) * (level - 1)) * parseFloat(item.hits) / parseFloat(item.cool_time);
        return {
            "key": item.key,
            "name": item.name,
            "default": item.default,
            "growth": item.growth,
            "hits": item.hits,
            "cool_time": item.cool_time,
            "level": level,
            "value": value
        };
    });
}

function getTopData(data, rank) {
    // 데이터를 value 기준으로 내림차순 정렬
    data.sort(function(a, b) {
        return b.value - a.value;
    });

    // 상위 rank개의 데이터를 추출
    var topData = data.slice(0, rank);

    return topData;
}

function calculateDamage(entity, parameters,_criticalHitProbability,_criticalDamage,_cooldown,_damage) {
    var value = (parseFloat(entity.default) + parseFloat(entity.growth) * (entity.level - 1)) * parseFloat(entity.hits);
    var cooldown = parseFloat(entity.cool_time) * (1 - (_cooldown/100));
    var criticalHitMultiplier = _criticalHitProbability >= 100 ? _criticalDamage : _criticalDamage / _criticalHitProbability;
    var totalDamage = parameters.attackPower * criticalHitMultiplier * _damage * parameters.bossMonsterDamage * parameters.finalDamage * value / cooldown;
    return totalDamage;
}

function calculateTopDamage(topData, parameters,_criticalHitProbability,_criticalDamage,_cooldown,_damage) {
    return topData.map(function(entity) {
        var totalDamage = calculateDamage(entity, parameters,_criticalHitProbability,_criticalDamage,_cooldown,_damage);
        return {
            "name": entity.name,
            "damage": totalDamage
        };
    });
}



function calculateTotalDPS(damageData) {
    var totalDPS = 0;
    damageData.forEach(function(item) {
        totalDPS += item.damage;
    });
    return totalDPS;
}

function bossSetResult() {
    var parameters = {
        "attackPower": parseFloat($("#_attackPower").val()), // 공격력
        "skillCriticalHitProbability": parseFloat($("#_skillCriticalHitProbability").val()), // 스킬 치명타 확률
        "skillCriticalDamage": parseFloat($("#_skillCriticalDamage").val()), // 스킬 치명타 피해량
        "skillCooldown": parseFloat($("#_skillCooldown").val()), // 스킬 쿨타임
        "skillDamage": parseFloat($("#_skillDamage").val()), // 스킬 피해량
        "familiarCriticalHitProbability": parseFloat($("#_familiarCriticalHitProbability").val()), // 사역마 치명타 확률
        "familiarCriticalDamage": parseFloat($("#_familiarCriticalDamage").val()), // 사역마 치명타 피해량
        "familiarCooldown": parseFloat($("#_familiarCooldown").val()), // 사역마 쿨타임
        "familiarDamage": parseFloat($("#_familiarDamage").val()), // 사역마 피해량
        "normalMonsterDamage": parseFloat($("#_normalMonsterDamage").val()), // 일반 몬스터 피해량
        "bossMonsterDamage": parseFloat($("#_bossMonsterDamage").val()), // 보스 몬스터 피해량
        "finalDamage": parseFloat($("#_finalDamage").val()) // 최종 피해량
    };

    var _skillLevel = [
        {"key":"slash", "level":$("#slash").val()},
        {"key":"magicSphere", "level":$("#magicSphere").val()},
        {"key":"skullPress", "level":$("#skullPress").val()},
        {"key":"lightning", "level":$("#lightning").val()},
        {"key":"crowFeather", "level":$("#crowFeather").val()},
        {"key":"energyBall", "level":$("#energyBall").val()},
        {"key":"icicle", "level":$("#icicle").val()},
        {"key":"poisonMushroom", "level":$("#poisonMushroom").val()},
        {"key":"swordMaster", "level":$("#swordMaster").val()},
        {"key":"aquaBall", "level":$("#aquaBall").val()},
        {"key":"dancingSword", "level":$("#dancingSword").val()},
        {"key":"crystalBlaster", "level":$("#crystalBlaster").val()},
        {"key":"ogreFoot", "level":$("#ogreFoot").val()},
        {"key":"thornLurker", "level":$("#thornLurker").val()},
        {"key":"bat", "level":$("#bat").val()},
        {"key":"hydraBreath", "level":$("#hydraBreath").val()},
        {"key":"blackHole", "level":$("#blackHole").val()},
        {"key":"meteor", "level":$("#meteor").val()},
        {"key":"cometSpear", "level":$("#cometSpear").val()},
        {"key":"lightWave", "level":$("#lightWave").val()},
        {"key":"demonEye", "level":$("#demonEye").val()}
    ];

    var _servantLevel = [
        {"key":"lily", "level":$("#lily").val()},
        {"key":"fuzzy", "level":$("#fuzzy").val()},
        {"key":"bats", "level":$("#bats").val()},
        {"key":"kurg", "level":$("#kurg").val()},
        {"key":"tweety", "level":$("#tweety").val()},
        {"key":"butterfly", "level":$("#butterfly").val()},
        {"key":"leila", "level":$("#leila").val()},
        {"key":"hamji", "level":$("#hamji").val()},
        {"key":"ready", "level":$("#ready").val()},
        {"key":"tony", "level":$("#tony").val()},
        {"key":"crow", "level":$("#crow").val()},
        {"key":"jelly", "level":$("#jelly").val()},
        {"key":"blueA", "level":$("#blueA").val()},
        {"key":"rh42", "level":$("#rh42").val()},
        {"key":"icy", "level":$("#icy").val()},
        {"key":"alpha", "level":$("#alpha").val()},
        {"key":"lupin", "level":$("#lupin").val()},
        {"key":"leo", "level":$("#leo").val()},
        {"key":"basil", "level":$("#basil").val()},
        {"key":"tot", "level":$("#tot").val()},
        {"key":"spark", "level":$("#spark").val()},
        {"key":"brazen", "level":$("#brazen").val()},
        {"key":"nox", "level":$("#nox").val()},
        {"key":"cheese", "level":$("#cheese").val()},
        {"key":"aurora", "level":$("#aurora").val()},
        {"key":"rockn", "level":$("#rockn").val()},
        {"key":"coco", "level":$("#coco").val()},
        {"key":"beta", "level":$("#beta").val()},
        {"key":"apollo", "level":$("#apollo").val()},
        {"key":"jelly", "level":$("#jelly").val()}
    ];
//레벨에 따른 데미지 값 구하기
    var _skillValue = calculateValue(_skill, _skillLevel);
    var _servantValue = calculateValue(_servant, _servantLevel);

//구한 데미지 값 중 상위 랭킹 추출
    var top6SkillData = getTopData(_skillValue, 6);
    var top5SkillData = getTopData(_skillValue, 5);
    var top4ServantData = getTopData(_servantValue, 4);

// 상위 랭킹의 DPS 값 구하기
    //var top6skillDPS = calculateTopDamage(top6SkillData, parameters, parameters.skillCriticalHitProbability,parameters.skillCriticalDamage,parameters.skillCooldown,parameters.skillDamage);
    //var top4servantDPS = calculateTopDamage(top4ServantData, parameters,parameters.familiarCriticalHitProbability, parameters.familiarCriticalDamage, parameters.familiarCooldown, parameters.familiarDamage);


    var modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    var top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    var top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
//총 DPS값 구하기
    var totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet1 = totalDPS;
    $("#relicsSet1").val((relicsSet1/relicsSet1*100).toFixed(2) + "%");

//지도5,마법서5,네크로5,슬라임조각5
    var modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.skillCriticalDamage += 200;
    modifiedParameters.skillDamage += 1600;
    var top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    modifiedParameters.familiarCriticalDamage += 200;
    modifiedParameters.familiarDamage += 1600;
    var top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    var totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet2 = totalDPS;
    $("#relicsSet2").val((relicsSet2/relicsSet1*100).toFixed(2) + "%");

//큐브1
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.bossMonsterDamage += 10;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet3 = totalDPS;
    $("#relicsSet3").val((relicsSet3/relicsSet1*100).toFixed(2) + "%");

//큐브2
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.bossMonsterDamage += 20;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet4 = totalDPS;
    $("#relicsSet4").val((relicsSet4/relicsSet1*100).toFixed(2) + "%");

//큐브3
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.bossMonsterDamage += 30;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet5 = totalDPS;
    $("#relicsSet5").val((relicsSet5/relicsSet1*100).toFixed(2) + "%");

//큐브4
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.bossMonsterDamage += 40;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet6 = totalDPS;
    $("#relicsSet6").val((relicsSet6/relicsSet1*100).toFixed(2) + "%");

//큐브5
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.bossMonsterDamage += 50;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet7 = totalDPS;
    $("#relicsSet7").val((relicsSet7/relicsSet1*100).toFixed(2) + "%");

    var excessskillProbability = parameters.skillCriticalHitProbability > 100 ? Math.floor(parameters.skillCriticalHitProbability - 100) : 0;
    var excessfamiliarProbability = parameters.familiarCriticalHitProbability > 100 ? Math.floor(parameters.familiarCriticalHitProbability - 100) : 0;

//꿈룬5,맹반5,보검5,뇌전5
    var modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.skillCriticalDamage += (excessskillProbability+50)*30;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    modifiedParameters.familiarCriticalDamage += (excessfamiliarProbability+30)*30;
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet8 = totalDPS;
    $("#relicsSet8").val((relicsSet8/relicsSet1*100).toFixed(2) + "%");

//꿈룬5,맹반5,보검5,인형5
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.skillCriticalDamage += (excessskillProbability+30)*30;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    modifiedParameters.familiarCriticalDamage += (excessfamiliarProbability+50)*30;
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet9 = totalDPS;
    $("#relicsSet9").val((relicsSet9/relicsSet1*100).toFixed(2) + "%");

//꿈룬5,맹반5,뇌전5,꼬리5
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.skillCriticalDamage += (excessskillProbability+62)*30;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet10 = totalDPS;
    $("#relicsSet10").val((relicsSet10/relicsSet1*100).toFixed(2) + "%");

//꿈룬5,맹반5,뇌전5,지도5
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.skillCriticalDamage += (excessskillProbability+50)*30+200;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet11 = totalDPS;
    $("#relicsSet11").val((relicsSet11/relicsSet1*100).toFixed(2) + "%");

//꿈룬5,맹반5,뇌전5,자물쇠
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.skillCriticalDamage += (excessskillProbability+50)*30;
    modifiedParameters.skillCooldown += 5;
    var top5skillDPS = calculateTopDamage(top5SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top5skillDPS.concat(top4servantDPS));
    var relicsSet12 = totalDPS;
    $("#relicsSet12").val((relicsSet12/relicsSet1*100).toFixed(2) + "%");

//맹반5,지도5,꼬리5,뇌전5
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.skillCriticalDamage += (excessskillProbability+32)*30+200;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet13 = totalDPS;
    $("#relicsSet13").val((relicsSet13/relicsSet1*100).toFixed(2) + "%");

//맹반5,꼬리5,뇌전5,자물쇠
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.skillCriticalDamage += (excessskillProbability+32)*30;
    modifiedParameters.skillCooldown += 5;
    top5skillDPS = calculateTopDamage(top5SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top5skillDPS.concat(top4servantDPS));
    var relicsSet14 = totalDPS;
    $("#relicsSet14").val((relicsSet14/relicsSet1*100).toFixed(2) + "%");

//맹반5,보검5,인형5,뇌전5
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.skillCriticalDamage += (excessskillProbability+20)*30;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    modifiedParameters.familiarCriticalDamage += (excessfamiliarProbability+20)*30;
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet15 = totalDPS;
    $("#relicsSet15").val((relicsSet15/relicsSet1*100).toFixed(2) + "%");

//꿈룬,보검,인형,슬라임조각
    modifiedParameters = JSON.parse(JSON.stringify(parameters)); // parameters 객체 복사
    modifiedParameters.familiarCriticalDamage += (excessfamiliarProbability+50)*30+200;
    top6skillDPS = calculateTopDamage(top6SkillData, modifiedParameters, modifiedParameters.skillCriticalHitProbability,modifiedParameters.skillCriticalDamage,modifiedParameters.skillCooldown,modifiedParameters.skillDamage);
    top4servantDPS = calculateTopDamage(top4ServantData, modifiedParameters,modifiedParameters.familiarCriticalHitProbability, modifiedParameters.familiarCriticalDamage, modifiedParameters.familiarCooldown, modifiedParameters.familiarDamage);
    totalDPS = calculateTotalDPS(top6skillDPS.concat(top4servantDPS));
    var relicsSet16 = totalDPS;
    $("#relicsSet16").val((relicsSet16/relicsSet1*100).toFixed(2) + "%");


}
function analysiInit() {

    var specContainer = document.getElementById('spec-container');
    var skillContainer = document.getElementById('skill-container');
    var servantContainer = document.getElementById('servant-container');
    var relicsContainer = document.getElementById('relics-container');


    if (!specContainer) {
        console.error('specContainer is null');
        return;
    }

    if (!skillContainer) {
        console.error('skillContainer is null');
        return;
    }

    if (!servantContainer) {
        console.error('servantContainer is null');
        return;
    }
    if (!relicsContainer) {
        console.error('relicsContainer is null');
        return;
    }

    createInputGroup(specContainer, _spec);
    createInputGroup(skillContainer, _skill);
    createInputGroup(servantContainer, _servant);
    createInputGroupResult(relicsContainer, _relics);


}
window.addEventListener('load', function() {
    document.getElementById('skillDPS').click();
});
document.addEventListener('DOMContentLoaded', function() {
    analysiInit();

    function handleDPSClick(event, data, colModel) {

        data.forEach(function(row) {
            row['default'] = row['default'];
            row['growth'] = row['growth'];
            row['cool_time'] = row['cool_time'];

            for (var i = 1; i <= 100; i++) {
                if (row['ranks'] < 5 && i != 100) {
                    row[i.toString()] = "-";
                } else {
                    row[i.toString()] = ((parseFloat(row['default']) + (parseFloat(row['growth']) * (i - 1))) * parseFloat(row['hits']) / parseFloat(row['cool_time'])).toFixed(2);
                }
            }
        });
        jqgridSet(data, colModel);
    }

    function handleDamageClick(event, data, colModel) {
        $('#menuName').text(event.target.textContent);
        data.forEach(function(row) {
            row['default'] = row['default'];
            row['growth'] = row['growth'];

            for (var i = 1; i <= 100; i++) {
                if (row['ranks'] < 5 && i != 100) {
                    row[i.toString()] = "-";
                } else {
                    row[i.toString()] = (parseFloat(row['default']) + (parseFloat(row['growth']) * (i - 1))).toFixed(2);
                }
            }
        });
        jqgridSet(data, colModel);
    }

    document.getElementById('skillDPS').addEventListener('click', function(event) {
        $("#specAnalysisBox").hide();
        $('#menuName').text(event.target.textContent);
        handleDPSClick(event, _skill, colModelDPS);
    });

    document.getElementById('servantDPS').addEventListener('click', function(event) {
        $("#specAnalysisBox").hide();
        $('#menuName').text(event.target.textContent);
        handleDPSClick(event, _servant, colModelDPS);
    });

    document.getElementById('skillDamage').addEventListener('click', function(event) {
        $("#specAnalysisBox").hide();
        $('#menuName').text(event.target.textContent);
        handleDamageClick(event, _skill, colModelDamage);
    });

    document.getElementById('servantDamage').addEventListener('click', function(event) {
        $("#specAnalysisBox").hide();
        $('#menuName').text(event.target.textContent);
        handleDamageClick(event, _servant, colModelDamage);
    });

    document.getElementById('specAnalysis').addEventListener('click', function(event) {
        $('#menuName').text(event.target.textContent);
        $("#jqGrid").jqGrid("GridUnload");
        $("#specAnalysisBox").show();
    });

});
