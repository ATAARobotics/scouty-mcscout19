window.onload = async function () {
    if (localStorage.getItem('settingsCheck') == 1){
        var databaseName = localStorage.getItem('databaseName');
        var db;
        if (window.cordova) {
            document.addEventListener('deviceready', function () {
                db = new PouchDB(databaseName, {adapter: 'cordova-sqlite'});
                console.log(db.adapter);
                console.log('SQLite plugin is installed?: ' + (!!window.sqlitePlugin));
            });
        } else {
            db = new PouchDB(databaseName);
        }
    } else {
        $('#Submit').prop('disabled', true);
        window.alert("Check Settings!")
    }
    function show(doc) {
        var vision = doc.vision;
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
        $("input[name=vision][value=" + vision + "]").prop('checked', true);
        $('#' + $('input[name=vision]:checked').attr("id")).addClass('active');
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
        $('#' + $('input[name=vision]:checked').attr("id")).removeClass('active');
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
        var vision = parseInt($('input[name=vision]:checked').val());
        var robotAppearance = parseInt($('input[name=robotAppearance]:checked').val());
        var groundIntake = $('input[name=groundIntake]:checked').val();
        var climbLevel = parseInt($('input[name=climbLevel]:checked').val());
        var cargoLevel = $('input[name=cargoLevel]:checked').val();
        var hatchLevel = $('input[name=hatchLevel]:checked').val();
        var robotDone = parseInt($('input[name=robotDone]:checked').val());
        var robotBroken = parseInt($('input[name=robotBroken]:checked').val());
        var robotPhoto1 = $('#robotPhoto1').prop("files")[0] || '';
        var robotPhoto2 = $('#robotPhoto2').prop("files")[0] || '';
        var comments = $('#commentSection').val();
        var doc = {
            _id: `pit_${teamNumber}`,
            _attachments: {
                'photo1.jpg':{
                    content_type: robotPhoto1.type,
                    data: robotPhoto1
                },
                'photo2.jpg': {
                    content_type: robotPhoto2.type,
                    data: robotPhoto2
                }
            },
            scoutName: scoutName,
            vision: vision,
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
            if (teamNumber && vision != NaN && robotAppearance != NaN && groundIntake && climbLevel != NaN && cargoLevel && hatchLevel && robotDone != NaN && robotBroken != NaN) {
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
                        let newDoc = await db.put(doc, {force: true});
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
            show(pitDoc);
        } catch (err) {
            hide();
        }
    }   
}