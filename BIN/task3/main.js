/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
    // 获取li
    var list = document.querySelectorAll('li');
    // new一个data数组，且元素为对象
    var data = new Array(list.length);
    for (var i = 0; i < data.length; i++) {
        data[i] = {};
    }

    for (var i = 0; i < data.length; i++) {
        // 获取处理li里的数据
        data[i].city = list[i].innerHTML[0];
        data[i].city += list[i].innerHTML[1];
        data[i].aqi = Number(list[i].querySelector('b').textContent);
    }

    return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {

    // 降序排序
    // js sort参考：↓
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    data.sort(function compareByNumber(a, b) {
        return b.aqi - a.aqi;
    });

    return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
    var aqiData = [
        ["北京", 90],
        ["上海", 50],
        ["福州", 10],
        ["广州", 50],
        ["成都", 90],
        ["西安", 100]
    ];
    // 转换成中文数字
    var number = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    var ul = document.getElementById('resort');

    for (var i = 0; i < data.length; i++) {
        // 拼接输出字符串
        var str = "第" + number[i + 1] + "名： " + data[i].city + "，aqi指数: ";
        var bold = document.createElement('b');
        var li = document.createElement('li');
        li.textContent = str;
        bold.textContent = data[i].aqi
        li.appendChild(bold);
        ul.appendChild(li);
    }
}

function btnHandle() {
    // 先用getData方法获取数据，然后用sortAqiData排序，最后渲染到页面
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
}

function init() {
    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    var myButton = document.querySelector('#sort-btn');
    myButton.addEventListener('click', btnHandle);
}

window.onload = init;