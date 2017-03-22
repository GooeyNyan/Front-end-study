function selectAqi() {

    var aqiData = [
        ["北京", 90],
        ["上海", 50],
        ["福州", 10],
        ["广州", 50],
        ["成都", 90],
        ["西安", 100]
    ];
    // 转换成中文数字
    var number = ["零","一","二","三","四","五","六","七","八","九"];
    var ul = document.getElementById('aqi-list');
    var j = 1;
    for (var i = 0; i < aqiData.length; i++) {
        if (aqiData[i][1] > 60) {
            // var str = "第" + number[j] + "名： " + aqiData[i][0] + ", aqi指数: " + aqiData[i][1];
            var str = aqiData[i][0] + ", aqi指数: " + aqiData[i][1];
            var li = document.createElement('li');
            li.textContent = str;
            ul.appendChild(li);
            j++;
        }
    }
}

window.onload = selectAqi;