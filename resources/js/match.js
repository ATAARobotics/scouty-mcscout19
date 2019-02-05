window.onload = function () {
    var startMatch = document.getElementById('startMatch');
    var timeSeconds = document.getElementById("timeSeconds");
    var timeMinutes = document.getElementById("timeMinutes");
    var timeTenths = document.getElementById("timeTenths");
    var start;
    var elapsed;
    var Interval;

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
        start = new Date().getTime()
        elapsed = '0';
        Interval = setInterval(startTimer, 100);
    }
    function startTimer() {
        var time = new Date().getTime() - start;
        elapsed = Math.floor(time / 1000);
        if (Math.round(elapsed) == elapsed) {
            elapsed += '.0';
        }
        elapsedminutes = Math.floor(elapsed / 60);
        elapsedseconds = elapsed - elapsedminutes * 60;
        if (elapsedseconds < 10) {
            clockseconds = "0" + elapsedseconds;
        } else {
            clockseconds = elapsedseconds;
        }
        if (elapsedminutes < 10) {
            clockminutes = "0" + elapsedminutes;
        } else {
            clockminutes = elapsedminutes;
        }

        if (elapsedminutes == 2 && elapsedseconds == 30) {
            clearInterval(Interval);
        }
        timeTenths.innerHTML = Math.floor(time / 100) % 10;
        timeSeconds.innerHTML = clockseconds;
        timeMinutes.innerHTML = clockminutes;
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
}