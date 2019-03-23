document.addEventListener('deviceready', async function () {
    if (localStorage.getItem('settingsCheck') == 1) {
        var databaseName = localStorage.getItem('databaseName');
        var db;
        if (JSON.parse(localStorage.getItem('sqLite'))) {
            db = new PouchDB(databaseName, { adapter: 'cordova-sqlite' });
            console.log(db.adapter);
            console.log('SQLite plugin is installed?: ' + (!!window.sqlitePlugin));
        } else {
            db = new PouchDB(databaseName);
            console.log(db.adapter);
        }
    } else {
        $('#Submit').prop('disabled', true);
        window.alert("Check Settings!")
    }
    function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    var picture1 = '';
    document.getElementById('newPicture1').onclick = function () {
        function success(img) {
            picture1 = b64toBlob(img, 'image/jpeg');
            document.getElementById("robotPhoto1Preview").style.display = "block";
            robotPhoto1Preview.src = URL.createObjectURL(picture1);
        }
        function fail() {
            console.log('newPicture1 fail');
        }
        navigator.camera.getPicture(success, fail, { destinationType: Camera.DestinationType.DATA_URL });
    }
    document.getElementById('existingPicture1').onclick = function () {
        function success(img) {
            picture1 = b64toBlob(img, 'image/jpeg');
            document.getElementById("robotPhoto1Preview").style.display = "block";
            robotPhoto1Preview.src = URL.createObjectURL(picture1);
        }
        function fail() {
            console.log('existingPicture1 fail');
        }
        navigator.camera.getPicture(success, fail, { destinationType: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    }
    var picture2 = '';
    document.getElementById('newPicture2').onclick = function () {
        function success(img) {
            picture2 = b64toBlob(img, 'image/jpeg');
            document.getElementById("robotPhoto2Preview").style.display = "block";
            robotPhoto2Preview.src = URL.createObjectURL(picture2);
        }
        function fail() {
            console.log('newPicture2 fail');
        }
        navigator.camera.getPicture(success, fail, { destinationType: Camera.DestinationType.DATA_URL });
    }
    document.getElementById('existingPicture2').onclick = function () {
        function success(img) {
            picture2 = b64toBlob(img, 'image/jpeg');
            document.getElementById("robotPhoto2Preview").style.display = "block";
            robotPhoto2Preview.src = URL.createObjectURL(picture2);
        }
        function fail() {
            console.log('existingPicture2 fail');
        }
        navigator.camera.getPicture(success, fail, { destinationType: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    }
    function show(doc) {
        var robotAppearance = doc.robotAppearance;
        var groundIntake = doc.groundIntake;
        var climbLevel = doc.climbLevel;
        var cargoLevel = doc.cargoLevel;
        var hatchLevel = doc.hatchLevel;
        var robotDone = doc.robotDone;
        var robotBroken = doc.robotBroken;
        var robotPhoto1Url = URL.createObjectURL(doc._attachments['photo1.jpg'].data);
        var robotPhoto2Url = URL.createObjectURL(doc._attachments['photo2.jpg'].data);
        var comments = doc.comments;
        $('#commentSection').val(`${comments}\n---EDIT---\n`);
        robotPhoto1Preview.src = robotPhoto1Url;
        robotPhoto2Preview.src = robotPhoto2Url;
        document.getElementById("robotPhoto1Preview").style.display = "block";
        document.getElementById("robotPhoto2Preview").style.display = "block";
        $("input[name=robotAppearance][value=" + robotAppearance + "]").prop('checked', true);
        $('#' + $('input[name=robotAppearance]:checked').attr("id")).addClass('active');
        $("input[name=groundIntake][value=" + groundIntake + "]").prop('checked', true);
        $('#' + $('input[name=groundIntake]:checked').attr("id")).addClass('active');
        $("input[name=climbLevel][value=" + climbLevel + "]").prop('checked', true);
        $('#' + $('input[name=climbLevel]:checked').attr("id")).addClass('active');
        $("input[name=cargoLevel][value=" + cargoLevel + "]").prop('checked', true);
        $('#' + $('input[name=cargoLevel]:checked').attr("id")).addClass('active');
        $("input[name=hatchLevel][value=" + hatchLevel + "]").prop('checked', true);
        $('#' + $('input[name=hatchLevel]:checked').attr("id")).addClass('active');
        $("input[name=robotDone][value=" + robotDone + "]").prop('checked', true);
        $('#' + $('input[name=robotDone]:checked').attr("id")).addClass('active');
        $("input[name=robotBroken][value=" + robotBroken + "]").prop('checked', true);
        $('#' + $('input[name=robotBroken]:checked').attr("id")).addClass('active');
    }
    function hide() {
        $('#' + $('input[name=robotAppearance]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=groundIntake]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=climbLevel]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=cargoLevel]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=hatchLevel]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=robotDone]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=robotBroken]:checked').attr("id")).removeClass('active');
        $('#commentSection').val('');
        $('input[type=radio]').attr('checked', false);
        document.getElementById("robotPhoto1Preview").style.display = "none";
        document.getElementById("robotPhoto1Preview").src = "#";
        document.getElementById("robotPhoto2Preview").style.display = "none";
        document.getElementById("robotPhoto2Preview").src = "#";

    }
    document.getElementById("Submit").onclick = async function () {
        var teamNumber = $('#teamNumber').val();
        var scoutName = localStorage.getItem('scoutName');
        var robotAppearance = parseInt($('input[name=robotAppearance]:checked').val());
        var groundIntake = $('input[name=groundIntake]:checked').val();
        var climbLevel = parseInt($('input[name=climbLevel]:checked').val());
        var cargoLevel = $('input[name=cargoLevel]:checked').val();
        var hatchLevel = $('input[name=hatchLevel]:checked').val();
        var robotDone = parseInt($('input[name=robotDone]:checked').val());
        var robotBroken = parseInt($('input[name=robotBroken]:checked').val());
        var comments = $('#commentSection').val();
        var doc = {
            _id: `pit_${teamNumber}`,
            _attachments: {
                'photo1.jpg': {
                    content_type: picture1.type || '',
                    data: picture1 || ''
                },
                'photo2.jpg': {
                    content_type: picture2.type || '',
                    data: picture2 || ''
                }
            },
            scoutName: scoutName,
            robotAppearance: robotAppearance,
            groundIntake: groundIntake,
            climbLevel: climbLevel,
            cargoLevel: cargoLevel,
            hatchLevel: hatchLevel,
            robotDone: robotDone,
            robotBroken: robotBroken,
            comments: comments
        }
        if (localStorage.getItem('settingsCheck') == 1) {
            if (teamNumber && robotAppearance != NaN && groundIntake && climbLevel != NaN && cargoLevel && hatchLevel && robotDone != NaN && robotBroken != NaN) {
                try {
                    let docPut = await db.put(doc);
                    window.alert("Submitted!");
                    window.location.href = '../pit/index.html';
                } catch (err) {
                    if (err.status == 409) {
                        let old = await db.get(`pit_${teamNumber}`, { attachments: true, binary: true });
                        doc._rev = old._rev;
                        if (doc._attachments['photo1.jpg'].data == '') {
                            doc._attachments['photo1.jpg'].data = old._attachments['photo1.jpg'].data;
                            doc._attachments['photo1.jpg'].content_type = old._attachments['photo1.jpg'].content_type;
                        }
                        if (doc._attachments['photo2.jpg'].data == '') {
                            doc._attachments['photo2.jpg'].data = old._attachments['photo2.jpg'].data;
                            doc._attachments['photo2.jpg'].content_type = old._attachments['photo2.jpg'].content_type;
                        }
                        let newDoc = await db.put(doc, { force: true });
                        window.alert("Updated!");
                        window.location.href = '../pit/index.html';
                    }
                }
            } else {
                window.alert("Fill all fields!")
            }
        } else {
            window.alert("Set settings first!")
        }
    }
    document.getElementById("teamNumber").onkeyup = async function () {
        try {
            var pitDoc = await db.get(`pit_${$('#teamNumber').val()}`, { attachments: true, binary: true });
            hide();
            show(pitDoc);
        } catch (err) {
            hide();
        }
    }
});