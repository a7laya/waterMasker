$(function () {
    var data_length = 300; // 设置水印单元边长
    var doc = $(document); // 获取整个页面
    var wm = $('.watermark');
    // var wm_row = $('.watermark .row');


    // 保存一个临时变量
    w = doc.width();
    h = doc.height();
    len = data_length / 2;

    render(data_length); // 进入页面后先渲染一下水印

    $(window).resize(function () {
        // 当窗口变化达到一定程度时，重载水印
        if ($(this).width() - w > len || $(this).height() - h > len) {
            w = $(this).width();
            h = $(this).height();
            console.log("1234");
            render(data_length);
        }
    });


    function render(data_length) {

        wm[0].innerHTML = '';

        // 设置水印区域为整个页面
        wm.width(doc.width());
        wm.height(doc.height());

        // 计算用水印单元填满整个水印区域需要的行数和列数
        row_num = parseInt(wm.height() / data_length) + 1;
        col_num = parseInt(wm.width() / data_length) + 1;


        wm_row = document.createElement('div');
        wm_row.className = 'row';
        wm_row = $(wm_row);
        wm.append(wm_row);
        // 计算生成行的宽和高，保证能填满整个区域
        wm_row.width(col_num * data_length + 100);
        wm_row.height(data_length + 10);


        // 填满一个水印单元行
        for (var i = 0; i < col_num; i++) {
            data = '<div class="data" style="height:' + data_length + 'px;width:' + data_length + 'px;">这是一行水印文字0123456789</div>'
            wm_row.append(data);
        }

        for (var j = 0; j < row_num - 1; j++) {
            wm.append(wm_row.clone());
        }
    }


})