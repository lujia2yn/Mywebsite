// vue代码部分
var app = new Vue({
    el: "#sec4-app",
    data: {
        city: "河南",
        weatherList: [],
    },
    methods: {
        searchEnter: function () {
            var that = this;
            axios
                .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
                .then(function (response) {
                    that.weatherList = response.data.data.forecast;
                })
                .catch(function (err) { });
        },
        changeCity: function (city) {
            this.city = city;
            this.searchEnter();
        },
        clickButton: function () {
            this.searchEnter();
        },
    },
});
