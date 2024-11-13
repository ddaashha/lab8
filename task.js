


var arrShow = [];

arrShow[0] = {
    Sub: "Сучасне мистецтво",
    Place: "Музей сучасного мистецтва",
    Organizer: "Мистецька асоціація",
    Date: "2024-11-04"
};

arrShow[1] = {
    Sub: "Історія України",
    Place: "Національний історичний музей",
    Organizer: "Міністерство культури",
    Date: "2024-11-15"
};

arrShow[2] = {
    Sub: "Технології майбутнього",
    Place: "Центр наукових досліджень",
    Organizer: "",
    Date: "2024-11-06"
};

arrShow[3] = {
    Sub: "Космос і людина",
    Place: "Космічний центр",
    Organizer: "Космічна агенція",
    Date: "2024-12-05"
};

arrShow[4] = {
    Sub: "Мода та стиль",
    Place: "ТЦ 'Модний стиль'",
    Organizer: "Дизайнерська студія",
    Date: "2024-10-10"
};

var html = "";

function ras_diff_Days(text) {
    var currentDate = new Date();
    var date1 = new Date(text); 
    var timeDiff = date1.getTime() - currentDate.getTime();
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysDiff;
}



function ouptput(item) {
    var startDateText = item['Date'];
    var daysUntilStart = ras_diff_Days(startDateText); 
    var endDate = new Date(startDateText);
    endDate.setDate(endDate.getDate() + 7);
    var daysUntilEnd = Math.ceil((endDate - new Date()) / (1000 * 3600 * 24)); 

    if (daysUntilStart <= 0 && daysUntilEnd >= 0) {
        html += "<tr style='background-color: yellow;'>";
        daysUntilStart = "Виставка вже почалася"; 
    } else if (daysUntilEnd < 0) {
        html += "<tr style='background-color: red;'>";
        daysUntilStart = "Виставка закінчилась";
        daysUntilEnd = "Виставка закінчилась";
    } else {
        html += "<tr>";
    }

    html += "<td>" + item['Sub'] + "</td>";
    html += "<td>" + item['Place'] + "</td>";
    html += "<td>" + (item['Organizer'] || "<em>Організатор не вказаний</em>") + "</td>";
    html += "<td>" + item['Date'] + "</td>";
    html += "<td>" + daysUntilStart + "</td>";
    html += "<td>" + daysUntilEnd + "</td>";
    html += "</tr>";
}



function result() {
    html = "<table style='border-collapse: collapse; width: 100%; border: 1px solid black;'>";

    html += "<tr><th>Тематика</th><th>Місце проведення</th><th>Організатор</th><th>Дата початку</th><th>Днів до початку</th><th>Днів до закриття</th></tr>";
    
    arrShow.forEach(ouptput);

    html += "</table>";
    document.getElementById('result').innerHTML = html;
}
