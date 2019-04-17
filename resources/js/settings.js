document.addEventListener('deviceready', async function () {
    var databaseNameSet = document.getElementById("databaseName");
    databaseNameSet.value = localStorage.getItem('databaseName') || 'new2019';
    var serverIpSet = document.getElementById("serverIp");
    serverIpSet.value = localStorage.getItem('serverIp');
    var scoutNameSet = document.getElementById("scoutName");
    scoutNameSet.value = localStorage.getItem('scoutName');
    var serverUsernameSet = document.getElementById("serverUsername");
    serverUsernameSet.value = localStorage.getItem('serverUsername');
    var serverPasswordSet = document.getElementById("serverPassword");
    serverPasswordSet.value = localStorage.getItem('serverPassword');
    var sqLite = document.getElementById("sqLite");
    sqLite.checked = JSON.parse(localStorage.getItem('sqLite'));
    var matchTypeSet = document.getElementById("matchType");
    matchTypeSet.value = localStorage.getItem('matchType') || "q";

    $('#Delete').on('click', async function(e){
        if (localStorage.getItem('settingsCheck') == 1){
            var databaseName = localStorage.getItem('databaseName');
            var db;
            if (JSON.parse(localStorage.getItem('sqLite'))) {
                db = new PouchDB(databaseName, {adapter: 'cordova-sqlite'});
                console.log(db.adapter);
                console.log('SQLite plugin is installed?: ' + (!!window.sqlitePlugin));
            } else {
                db = new PouchDB(databaseName);
                console.log(db.adapter);
            }
            let destroy = await db.destroy();
            if (destroy.ok) {
                window.alert("Local DB deleted!")
            } else {
                window.alert("Error deleting local DB!")
            }
        } else {
            window.alert("Check Settings!")
        }    
    });
    $('#Save').on('click', function (e) {
        var databaseName = $('#databaseName').val();
        var serverIp = $('#serverIp').val();
        var scoutName = $('#scoutName').val();
        var serverUsername = $('#serverUsername').val();
        var serverPassword = $('#serverPassword').val();
        var sqLiteChecked = sqLite.checked;
        var matchType = $('#matchType').val();
        function correct() {
            localStorage.setItem('databaseName', databaseName);
            localStorage.setItem('serverIp', serverIp);
            localStorage.setItem('settingsCheck', '1');
            localStorage.setItem('scoutName', scoutName);
            localStorage.setItem('serverUsername', serverUsername);
            localStorage.setItem('serverPassword', serverPassword);
            localStorage.setItem('sqLite', sqLiteChecked);
            localStorage.setItem('matchType', matchType);
            window.alert("Settings Saved!");
            window.location.href = '../index.html';
        };
        function incorrect() {
            localStorage.setItem('serverIp', '');
            localStorage.setItem('databaseName', '');
            localStorage.setItem('scoutName', scoutName);
            localStorage.setItem('serverUsername', '');
            localStorage.setItem('serverPassword', '');
            localStorage.setItem('settingsCheck', '0');
            localStorage.setItem('sqLite', false);
            localStorage.setItem('matchType', matchType);
        };
        if (scoutName != "" && databaseName != "") {
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
                        correct();
                    },
                    404: function (response) {
                        if (confirm("Server ip or database name is incorrect! Check server ip and database name! Press OK to save these settings anyway. Make sure they are correct!")) {
                            correct();
                        } else {
                            incorrect();
                        }
                    },
                    401: function (response) {
                        window.alert("Incorrect username or password!");
                        localStorage.setItem('settingsCheck', '0');
                    },
                    0: function (response) {
                        if (confirm("Server ip or database name is incorrect! Check internet connection, server ip and database name! Press OK to save these settings anyway. Make sure they are correct!")) {
                            correct();
                        } else {
                            incorrect();
                        }
                    }
                }
            });
        } else {
            window.alert("Make sure all fields are filled");
        }
    });

});