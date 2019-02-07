window.onload = async function () {
    var startMatch = document.getElementById('startMatch');
    var timeSeconds = document.getElementById("timeSeconds");
    var timeMinutes = document.getElementById("timeMinutes");
    var timeTenths = document.getElementById("timeTenths");

    var crossedBaselineTime;
    var sandstormCargoCargoshipTime;
    var sandstormCargoRocketTime;
    var sandstormHatchCargoshipTime;
    var sandstormHatchRocketTime;

    var teleopCargoTimeTemp = [];
    var teleopCargoTime = [];
    var teleopHatchTimeTemp = [];
    var teleopHatchTime = [];
    var climbingTime = [];

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

    function pickup(a) {
        if (a == "enable") {
            $('#cargoPickup').prop('disabled', false);
            $('#hatchPickup').prop('disabled', false);
        }
        if (a == "disable") {
            $('#cargoPickup').prop('disabled', true);
            $('#hatchPickup').prop('disabled', true);
        }
    }

    function hatch(a) {
        if (a == "enable") {
            $('#cargoshipHatchPlace').prop('disabled', false);
            $('#rocket1HatchPlace').prop('disabled', false);
            $('#rocket2HatchPlace').prop('disabled', false);
            $('#rocket3HatchPlace').prop('disabled', false);
            $('#hatchDropped').prop('disabled', false);
        }
        if (a == "disable") {
            $('#cargoshipHatchPlace').prop('disabled', true);
            $('#rocket1HatchPlace').prop('disabled', true);
            $('#rocket2HatchPlace').prop('disabled', true);
            $('#rocket3HatchPlace').prop('disabled', true);
            $('#hatchDropped').prop('disabled', true);
        }
    }

    function cargo(a) {
        if (a == "enable") {
            $('#cargoshipCargoPlace').prop('disabled', false);
            $('#rocket1CargoPlace').prop('disabled', false);
            $('#rocket2CargoPlace').prop('disabled', false);
            $('#rocket3CargoPlace').prop('disabled', false);
            $('#cargoDropped').prop('disabled', false);
        }
        if (a == "disable") {
            $('#cargoshipCargoPlace').prop('disabled', true);
            $('#rocket1CargoPlace').prop('disabled', true);
            $('#rocket2CargoPlace').prop('disabled', true);
            $('#rocket3CargoPlace').prop('disabled', true);
            $('#cargoDropped').prop('disabled', true);
        }
    }

    startMatch.onclick = function () {
        $('#startMatch').prop('disabled', true);
        $('#cargoPickup').prop('disabled', false);
        $('#hatchPickup').prop('disabled', false);
        $('#climbStart').prop('disabled', false);
        startTimer();
    }

    function startTimer() {
        var start = Date.now(),
            diff,
            minutes,
            seconds,
            tenths,
            Interval;
        function timer() {
            // get the number of seconds that have elapsed since 
            // startTimer() was called
            diff = ((60 * 2 *10) + 300) - (((Date.now() - start) / 100) | 0);
    
            // does the same job as parseInt truncates the float
            tenths = diff % 10;
            minutes = ((diff/10) / 60) | 0;
            seconds = ((diff/10) % 60) | 0;
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            timeTenths.innerHTML = tenths;
            timeSeconds.innerHTML = seconds;
            timeMinutes.innerHTML = minutes;
    
            if (diff <= 0) {
                // add one second so that the count down starts at the full duration
                // example 05:00 not 04:59
                start = Date.now() + 1000;
            }
            if (minutes == 0 && seconds == 0 && tenths == 0) {
                clearInterval(Interval);
            }
        };
        // we don't want to wait a full second before the timer starts
        timer();
        Interval = setInterval(timer, 100);
    }    

    document.getElementById('climbStart').onclick = function() {
        climbingTime.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        $('#climbStart').prop('disabled', true);
        $('#climbEnd').prop('disabled', false);
    }

    document.getElementById('climbEnd').onclick = function() {
        climbingTime.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        $('#climbEnd').prop('disabled', true);
    }

    document.getElementById('crossedBaselineYes').onclick = function() {
        if (!crossedBaselineTime) {
            crossedBaselineTime = `${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`;
        }
    }

    document.getElementById('sandstormCargoCargoshipYes').onclick = function() {
        if (!sandstormCargoCargoshipTime) {
            sandstormCargoCargoshipTime = `${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`;
        }
    }

    document.getElementById('sandstormCargoRocketYes').onclick = function() {
        if (!sandstormCargoRocketTime) {
            sandstormCargoRocketTime = `${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`;
        }
    }

    document.getElementById('sandstormHatchCargoshipYes').onclick = function() {
        if (!sandstormHatchCargoshipTime) {
            sandstormHatchCargoshipTime = `${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`;
        }
    }

    document.getElementById('sandstormHatchRocketYes').onclick = function() {
        if (!sandstormHatchRocketTime) {
            sandstormHatchRocketTime = `${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`;
        }
    }


    document.getElementById('cargoPickup').onclick = function() {
        teleopCargoTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        pickup('disable');
        cargo('enable');
    }
    document.getElementById('hatchPickup').onclick = function() {
        teleopHatchTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        pickup('disable');
        hatch('enable');
    }
    document.getElementById('cargoshipCargoPlace').onclick = function() {
        teleopCargoTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        teleopCargoTimeTemp.push('cs');
        teleopCargoTime.push(teleopCargoTimeTemp);
        teleopCargoTimeTemp = [];
        document.getElementById('cargoshipCargo').value = parseInt($('#cargoshipCargo').val()) + 1;
        cargo('disable');
        pickup('enable');
    }
    document.getElementById('rocket1CargoPlace').onclick = function() {
        teleopCargoTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        teleopCargoTimeTemp.push('r1');
        teleopCargoTime.push(teleopCargoTimeTemp);
        teleopCargoTimeTemp = [];
        document.getElementById('rocket1Cargo').value = parseInt($('#rocket1Cargo').val()) + 1;
        cargo('disable');
        pickup('enable');
    }
    document.getElementById('rocket2CargoPlace').onclick = function() {
        teleopCargoTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        teleopCargoTimeTemp.push('r2');
        teleopCargoTime.push(teleopCargoTimeTemp);
        teleopCargoTimeTemp = [];
        document.getElementById('rocket2Cargo').value = parseInt($('#rocket2Cargo').val()) + 1;
        cargo('disable');
        pickup('enable');
    }
    document.getElementById('rocket3CargoPlace').onclick = function() {
        teleopCargoTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        teleopCargoTimeTemp.push('r3');
        teleopCargoTime.push(teleopCargoTimeTemp);
        teleopCargoTimeTemp = [];
        document.getElementById('rocket3Cargo').value = parseInt($('#rocket3Cargo').val()) + 1;
        cargo('disable');
        pickup('enable');
    }
    document.getElementById('cargoDropped').onclick = function() {
        teleopCargoTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        teleopCargoTimeTemp.push('dr');
        teleopCargoTime.push(teleopCargoTimeTemp);
        teleopCargoTimeTemp = [];
        document.getElementById('droppedCargo').value = parseInt($('#droppedCargo').val()) + 1;
        cargo('disable');
        pickup('enable');
    }
    document.getElementById('cargoshipHatchPlace').onclick = function() {
        teleopHatchTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        teleopHatchTimeTemp.push('cs');
        teleopHatchTime.push(teleopHatchTimeTemp);
        teleopHatchTimeTemp = [];
        document.getElementById('cargoshipHatch').value = parseInt($('#cargoshipHatch').val()) + 1;
        hatch('disable');
        pickup('enable');
    }
    document.getElementById('rocket1HatchPlace').onclick = function() {
        teleopHatchTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        teleopHatchTimeTemp.push('r1');
        teleopHatchTime.push(teleopHatchTimeTemp);
        teleopHatchTimeTemp = [];
        document.getElementById('rocket1Hatch').value = parseInt($('#rocket1Hatch').val()) + 1;
        hatch('disable');
        pickup('enable');
    }
    document.getElementById('rocket2HatchPlace').onclick = function() {
        teleopHatchTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        teleopHatchTimeTemp.push('r2');
        teleopHatchTime.push(teleopHatchTimeTemp);
        teleopHatchTimeTemp = [];
        document.getElementById('rocket2Hatch').value = parseInt($('#rocket2Hatch').val()) + 1;
        hatch('disable');
        pickup('enable');
    }
    document.getElementById('rocket3HatchPlace').onclick = function() {
        teleopHatchTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        teleopHatchTimeTemp.push('r3');
        teleopHatchTime.push(teleopHatchTimeTemp);
        teleopHatchTimeTemp = [];
        document.getElementById('rocket3Hatch').value = parseInt($('#rocket3Hatch').val()) + 1;
        hatch('disable');
        pickup('enable');
    }
    document.getElementById('hatchDropped').onclick = function() {
        teleopHatchTimeTemp.push(`${timeMinutes.innerHTML}:${timeSeconds.innerHTML}.${timeTenths.innerHTML}`);
        teleopHatchTimeTemp.push('dr');
        teleopHatchTime.push(teleopHatchTimeTemp);
        teleopHatchTimeTemp = [];
        document.getElementById('droppedHatch').value = parseInt($('#droppedHatch').val()) + 1;
        hatch('disable');
        pickup('enable');
    }

    function show(doc) {
        $('#climbingType').val(doc.climbingType);
        $('#cargoshipCargo').val(doc.teleopCargoshipCargo);
        $('#rocket1Cargo').val(doc.teleopRocket1Cargo);
        $('#rocket2Cargo').val(doc.teleopRocket2Cargo);
        $('#rocket3Cargo').val(doc.teleopRocket3Cargo);
        $('#droppedCargo').val(doc.teleopDroppedCargo);
        $('#cargoshipHatch').val(doc.teleopCargoshipHatch);
        $('#rocket1Hatch').val(doc.teleopRocket1Hatch);
        $('#rocket2Hatch').val(doc.teleopRocket2Hatch);
        $('#rocket3Hatch').val(doc.teleopRocket3Hatch);
        $('#droppedHatch').val(doc.teleopDroppedHatch);
        $("input[name=startingLevel][value=" + doc.startingLevel + "]").prop('checked', true);
        $('#' + $('input[name=startingLevel]:checked').attr("id")).addClass('active');
        $("input[name=crossedBaseline][value=" + doc.crossedBaseline + "]").prop('checked', true);
        $('#' + $('input[name=crossedBaseline]:checked').attr("id")).addClass('active');
        $("input[name=sandstormCargoCargoship][value=" + doc.sandstormCargoCargoship + "]").prop('checked', true);
        $('#' + $('input[name=sandstormCargoCargoship]:checked').attr("id")).addClass('active');
        $("input[name=sandstormCargoRocket][value=" + doc.sandstormCargoRocket + "]").prop('checked', true);
        $('#' + $('input[name=sandstormCargoRocket]:checked').attr("id")).addClass('active');
        $("input[name=sandstormHatchCargoship][value=" + doc.sandstormHatchCargoship + "]").prop('checked', true);
        $('#' + $('input[name=sandstormHatchCargoship]:checked').attr("id")).addClass('active');
        $("input[name=sandstormHatchRocket][value=" + doc.sandstormHatchRocket + "]").prop('checked', true);
        $('#' + $('input[name=sandstormHatchRocket]:checked').attr("id")).addClass('active');
        $('#commentSection').val(`${doc.comments}\n---EDIT---\n`);
        $("input[name=gaveAssistance][value=" + doc.climbingGaveAssistance + "]").prop('checked', true);
        $('#' + $('input[name=gaveAssistance]:checked').attr("id")).addClass('active');
        $("input[name=gotAssistance][value=" + doc.climbingGotAssistance + "]").prop('checked', true);
        $('#' + $('input[name=gotAssistance]:checked').attr("id")).addClass('active');
        $("input[name=speedRating][value=" + doc.speed + "]").prop('checked', true);
        $('#' + $('input[name=speedRating]:checked').attr("id")).addClass('active');
        $("input[name=stabilityRating][value=" + doc.stability + "]").prop('checked', true);
        $('#' + $('input[name=stabilityRating]:checked').attr("id")).addClass('active');
        $("input[name=skillRating][value=" + doc.driverSkill + "]").prop('checked', true);
        $('#' + $('input[name=skillRating]:checked').attr("id")).addClass('active');
        $("input[name=defenceRating][value=" + doc.defence + "]").prop('checked', true);
        $('#' + $('input[name=defenceRating]:checked').attr("id")).addClass('active');
        $("input[name=robotDead][value=" + doc.dead + "]").prop('checked', true);
        $('#' + $('input[name=robotDead]:checked').attr("id")).addClass('active');
        $("input[name=anythingBreak][value=" + doc.anythingBreak + "]").prop('checked', true);
        $('#' + $('input[name=anythingBreak]:checked').attr("id")).addClass('active');
        $('#startMatch').prop('disabled', true);
    }

    function hide() {
        $('#' + $('input[name=startingLevel]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=crossedBaseline]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=sandstormCargoCargoship]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=sandstormCargoRocket]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=sandstormHatchCargoship]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=sandstormHatchRocket]:checked').attr("id")).removeClass('active');
        $('#climbingType').val("Choose...");
        $('#cargoshipCargo').val("0");
        $('#rocket1Cargo').val("0");
        $('#rocket2Cargo').val("0");
        $('#rocket3Cargo').val("0");
        $('#droppedCargo').val("0");
        $('#cargoshipHatch').val("0");
        $('#rocket1Hatch').val("0");
        $('#rocket2Hatch').val("0");
        $('#rocket3Hatch').val("0");
        $('#droppedHatch').val("0");
        $('#' + $('input[name=gotAssistance]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=gaveAssistance]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=speedRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=stabilityRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=skillRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=defenceRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=robotDead]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=anythingBreak]:checked').attr("id")).removeClass('active');
        $('#commentSection').val('');
        $('input[type=radio]').attr('checked', false);
        $('#startMatch').prop('disabled', false);
    }

    async function update() {
        try {
            var matchDoc = await db.get(`${$('#matchType').val()}${$('#matchNumber').val()}_${$('#teamNumber').val()}`);
            show(matchDoc);
        } catch (err) {
            hide();
        }
    }

    document.getElementById('matchType').onchange = function() {
        update();
    }

    document.getElementById('matchNumber').onkeyup = function() {
        update();
    }
    document.getElementById('teamNumber').onkeyup = function() {
        update();
    }

    document.getElementById("Submit").onclick = async function () {
        var matchType = $('#matchType').val();
        var matchNumber = $('#matchNumber').val();
        var teamNumber = $('#teamNumber').val();

        var startingLevel = parseInt($('input[name=startingLevel]:checked').val());
        var crossedBaseline = parseInt($('input[name=crossedBaseline]:checked').val());
        var sandstormCargoCargoship = parseInt($('input[name=sandstormCargoCargoship]:checked').val());
        var sandstormCargoRocket = parseInt($('input[name=sandstormCargoRocket]:checked').val());
        var sandstormHatchCargoship = parseInt($('input[name=sandstormHatchCargoship]:checked').val());
        var sandstormHatchRocket = parseInt($('input[name=sandstormHatchRocket]:checked').val());

        var teleopCargoshipCargo = parseInt($('#cargoshipCargo').val());
        var teleopRocket1Cargo = parseInt($('#rocket1Cargo').val());
        var teleopRocket2Cargo = parseInt($('#rocket2Cargo').val());
        var teleopRocket3Cargo = parseInt($('#rocket3Cargo').val());
        var teleopDroppedCargo = parseInt($('#droppedCargo').val());
        var teleopCargoshipHatch = parseInt($('#cargoshipHatch').val());
        var teleopRocket1Hatch = parseInt($('#rocket1Hatch').val());
        var teleopRocket2Hatch = parseInt($('#rocket2Hatch').val());
        var teleopRocket3Hatch = parseInt($('#rocket3Hatch').val());
        var teleopDroppedHatch = parseInt($('#droppedHatch').val());

        var climbingType = $('#climbingType').val()
        var climbingGaveAssistance = parseInt($('input[name=gaveAssistance]:checked').val());
        var climbingGotAssistance = parseInt($('input[name=gotAssistance]:checked').val());

        var speed = parseInt($('input[name=speedRating]:checked').val());
        var stability = parseInt($('input[name=stabilityRating]:checked').val());
        var driverSkill = parseInt($('input[name=skillRating]:checked').val());
        var defence = parseInt($('input[name=defenceRating]:checked').val());
        var anythingBreak = parseInt($('input[name=anythingBreak]:checked').val());
        var dead = parseInt($('input[name=robotDead]:checked').val());

        var comments = $('#commentSection').val();

        var doc = {
            _id: `${matchType}${matchNumber}_${teamNumber}`,
            startingLevel: startingLevel,
            crossedBaseline: crossedBaseline,
            crossedBaselineTime: crossedBaselineTime,
            sandstormCargoCargoship: sandstormCargoCargoship,
            sandstormCargoCargoshipTime: sandstormCargoCargoshipTime,
            sandstormCargoRocket: sandstormCargoRocket,
            sandstormCargoRocketTime: sandstormCargoRocketTime,
            sandstormHatchCargoship: sandstormHatchCargoship,
            sandstormHatchCargoshipTime: sandstormHatchCargoshipTime,
            sandstormHatchRocket: sandstormHatchRocket,
            sandstormHatchRocketTime: sandstormHatchRocketTime,
            teleopCargoshipCargo: teleopCargoshipCargo,
            teleopRocket1Cargo: teleopRocket1Cargo,
            teleopRocket2Cargo: teleopRocket2Cargo,
            teleopRocket3Cargo: teleopRocket3Cargo,
            teleopDroppedCargo: teleopDroppedCargo,
            teleopCargoTime: teleopCargoTime,
            teleopCargoshipHatch: teleopCargoshipHatch,
            teleopRocket1Hatch: teleopRocket1Hatch,
            teleopRocket2Hatch: teleopRocket2Hatch,
            teleopRocket3Hatch: teleopRocket3Hatch,
            teleopDroppedHatch: teleopDroppedHatch,
            teleopHatchTime: teleopHatchTime,
            climbingType: climbingType,
            climbingTime: climbingTime,
            climbingGaveAssistance: climbingGaveAssistance,
            climbingGotAssistance: climbingGotAssistance,
            speed: speed,
            stability: stability,
            driverSkill: driverSkill,
            defence: defence,
            anythingBreak: anythingBreak,
            dead: dead,
            comments: comments
        }
        if (localStorage.getItem('settingsCheck') == 1) {
            if (matchType && matchNumber && teamNumber) {
                try {
                    let docPut = await db.put(doc);
                    window.alert("Submitted!");
                    window.location.href = "/";
                } catch (err) {
                    if (err.status == 409) {
                        let old = await db.get(`${matchType}${matchNumber}_${teamNumber}`);
                        doc._rev = old._rev;
                        doc.crossedBaselineTime = old.crossedBaselineTime;
                        doc.sandstormCargoCargoshipTime = old.sandstormCargoCargoshipTime;
                        doc.sandstormCargoRocketTime = old.sandstormCargoRocketTime;
                        doc.sandstormHatchCargoshipTime = old.sandstormHatchCargoshipTime;
                        doc.sandstormHatchRocketTime = old.sandstormHatchRocketTime;
                        doc.teleopCargoTime = old.teleopCargoTime;
                        doc.teleopHatchTime = old.teleopHatchTime;
                        doc.climbingTime = old.climbingTime;
                        let newDoc = await db.put(doc, {force: true});
                        window.alert("Updated!");
                        window.location.href = "/";
                    }
                }
            } else {
                window.alert("Fill all fields!")
            }
        } else {
            window.alert("Set settings first!")
        }
    }
}