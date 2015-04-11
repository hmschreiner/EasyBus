var EasyBusApi = {
    settings: {
        //url: 'http://easybus.app.hackinpoa.tsuru.io'
        url: 'http://172.16.5.53/api'
    },
    getXhr: function () {
        if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();
        }
        var versions = [
            "MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ];

        var xhr;
        for (var i = 0; i < versions.length; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {
            }
        }
        return xhr;
    },
    send: function (url, callback, method, data, sync) {
        var request = this.getXhr();

        request.open(method, this.settings.url + url, sync);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                callback(request.responseText)
            }
        };
        if (method == 'POST') {
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        request.send(data)
    },
    post: function (url, data, callback, sync) {

        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        this.send(url, callback, 'POST', query.join('&'), sync);
    },
    get: function (url, data, callback, sync) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        this.send(url + '?' + query.join('&'), callback, 'GET', null, sync)
    }
};