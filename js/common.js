
function loadContent(buttonId) {
    $('#' + buttonId).on('click', function() {
        // 모든 버튼에서 active 클래스 제거
        $('.navbar-nav .btn').removeClass('active');
        // 클릭된 버튼에 active 클래스 추가
        $(this).addClass('active');

        // 컨텐츠 로드
        $("#contentBox").load(this.id + ".html");
    });
}

//메뉴 리스트 생성
function loadMenu() {
    var $menuList = $('.navbar-nav');

    $.each(dataSetMenu, function(index, item) {
        var $navItem = $('<li>', {class: 'nav-item'}).append(
            $('<a>', {id: item.id, class: 'btn btn-outline-secondary ', text: item.text})
        );
        $menuList.append($navItem);
    });
}

//DataTable 생성
function initializeDataTable(dataSet, columns, fixedColumns) {
    $('#datatables').DataTable({
        data: dataSet,
        columns: columns,
        "pageLength": -1,
        "order": [[5, 'asc']],
        "dom": 'rt', // 'l'과 'f'를 제거하여 "Show entries"와 "Search"를 숨김
        "scrollX": true, // 가로 스크롤 활성화
        "autoWidth": false, // 자동 너비 조정 비활성화
        "responsive": true, // 반응형 옵션 추가
        "fixedColumns": {
            leftColumns: fixedColumns // 고정할 열의 수
        },
        "createdRow": function(row, data, dataIndex) {
            if (data.ranks) {
                $('td:eq(0)', row).addClass('rank-' + data.ranks); // 첫 번째 열(name)에만 클래스 추가
            }
        }
    }).columns.adjust();
}

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



$(document).ready(function() {
    loadMenu();

    // 메뉴 리스트 클릭 이벤트 생성
    $.each(dataSetMenu, function(index, item) {
        loadContent(item.id);
    });

    $('#specAnalysis').click();

});
