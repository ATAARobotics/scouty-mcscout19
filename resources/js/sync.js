document.addEventListener('deviceready', async function () {
    document.getElementById("sync").onclick = function () {
        var databaseName = localStorage.getItem('databaseName');
        var serverIp = localStorage.getItem('serverIp');
        var serverUsername = localStorage.getItem('serverUsername');
        var serverPassword = localStorage.getItem('serverPassword');
        document.getElementById("spinner").style.animation = "spin 2s linear infinite";
        document.getElementById("page").style.display = "none";
        document.getElementById("header").style.display = "none";
        document.getElementById("spinner").style.display = "block";
        document.getElementById("status").style.display = "block";
        if (localStorage.getItem('settingsCheck') == 1) {
            var databaseName = localStorage.getItem('databaseName');
            var db;
            if (JSON.parse(localStorage.getItem('sqLite')) ) {
                db = new PouchDB(databaseName, { adapter: 'cordova-sqlite' });
                console.log(db.adapter);
                console.log('SQLite plugin is installed?: ' + (!!window.sqlitePlugin));
            } else {
                db = new PouchDB(databaseName);
                console.log(db.adapter);
            }
            $.ajax({
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'Authorization': 'Basic ' + btoa(serverUsername + ":" + serverPassword)
                },
                url: "http://" + serverIp + ":5984/" + databaseName,
                type: "HEAD",
                timeout: 5000,
                statusCode: {
                    200: function (response) {
                        var status = 0
                        var statusBox = document.getElementById('status');
                        PouchDB.sync(db, 'http://' + serverUsername + ':' + serverPassword + '@' + serverIp + ':5984/' + databaseName, {
                            live: false,
                            retry: true,
                            batches_limit: 1,
                            batch_size: 1
                        }).on('denied', function (err) {
                            window.alert("Access Denied? This shouldn't happen.");
                            window.location.reload();
                        }).on('change', function (info) {
                            status = status + 1
                            var statusString = status.toString();
                            statusBox.innerHTML = statusString;
                        }).on('complete', function (info) {
                            console.log('done');
                            window.alert("Synced successfully!");
                            window.location.reload();
                        }).on('error', function (err) {
                            window.alert("Sync Error! Try Again!");
                            window.location.reload();
                        });
                    },
                    404: function (response) {
                        window.alert("Server ip or database name is incorrect! Check server ip and database name!");
                        window.location.reload();
                    },
                    401: function (response) {
                        window.alert("Incorrect username or password!");
                        window.location.reload();
                    },
                    0: function (response) {
                        window.alert("Couldn't reach server. Are you connected to the internet?");
                        window.location.reload();
                    }
                }
            });
        } else {
            window.alert("Check Settings!")
            window.location.reload();
        }
    }
});