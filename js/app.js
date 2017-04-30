var app = new Vue({
    el: '#app',
    data: {
        url: 'http://localhost:3000'
    },
    methods: {
        openConnection: function(url) {
            // http://localhost:3000
            var socket = io.connect(url);

            socket.on('connect', function () {
                alert('connection established');
            });

            socket.on('message', function (msg) {
                alert(msg);
            });
        }
    }
})