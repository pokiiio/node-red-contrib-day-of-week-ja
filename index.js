module.exports = function (RED) {
    function DayOfWeekNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var holiday_jp = require('@holiday-jp/holiday_jp');

        node.on('input', function (msg) {
            var data = {}

            var today = new Date()
            var tomorrow = new Date(today);
            var dayAfterTomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            dayAfterTomorrow.setDate(today.getDate() + 2);

            data.dayNum = today.getDay()
            data.dayName =  [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ][data.dayNum]

            data.isHoliday = holiday_jp.isHoliday(today)

            if(data.isHoliday){
                data.holidayName = holiday_jp.between(today, tomorrow)[0].name
            }else{
                data.holidayName = ''
            }

            data.isHolidayTomorrow = holiday_jp.isHoliday(tomorrow)

            if(data.isHolidayTomorrow){
                data.holidayNameTomorrow = holiday_jp.between(tomorrow, dayAfterTomorrow)[0].name
            }else{
                data.holidayNameTomorrow = ''
            }

            msg.payload = data;
            node.send(msg);
        });
    }
    RED.nodes.registerType("Day of week", DayOfWeekNode);
}