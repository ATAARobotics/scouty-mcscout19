---
layout: default
title: Match
files: |
 <script src="./resources/js/match.js"></script>
---
<div id='spinner'></div>
<div id='status'>0</div>
<div id='page' class="container-fluid" style="background-color: #f0f0f0; margin-bottom: 15px">
    <form>
        <div class="row">
            <div class="col">
                <h2>General</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="mr-sm-2" for="matchNumber">Match Number</label>
                <input id="matchNumber" maxlength="3" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                    autocomplete="off" type="tel" class="form-control" placeholder="Match Number">
            </div>
            <div class="col">
                <label class="mr-sm-2" for="teamNumber">Team Number</label>
                <input id="teamNumber" maxlength="4" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                    autocomplete="off" type="tel" class="form-control" placeholder="Team Number">
            </div>
        </div>
        <hr />
        <div class="d-flex flex-row">
            <div style="margin-right: 15px">
                <button type="button" id="startMatch" class="btn btn-primary">Start Match</button>
            </div>
            <div>
                <p style="margin-bottom: 0px"><span style="font-size: 24px;" id="timeMinutes">02</span><span style="font-size: 24px;">:</span><span
                        style="font-size: 24px;" id="timeSeconds">30</span><span style="font-size: 24px;">.</span><span
                        style="font-size: 24px;" id="timeTenths">0</span></p>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-md">
                <h2>Sandstorm</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2 col-sm-3 col-4">
                <label class="mr-sm-2" style="display: block" for="startingLevel">Starting Level</label>
                <div id="startingLevel" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="startingLevel1" class="btn btn-secondary">
                        <input type="radio" value="1" name="startingLevel" id="startingLevel1" autocomplete="off">
                        1
                    </label>
                    <label id="startingLevel2" class="btn btn-secondary">
                        <input type="radio" value="2" name="startingLevel" id="startingLevel2" autocomplete="off">
                        2
                    </label>
                </div>
            </div>
            <div class="col-lg-2 col-sm-3 col-4">
                <label class="mr-sm-2" style="display: block" for="startingLevel">Crossed Baseline</label>
                <div id="crossedBaseline" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="crossedBaselineYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="crossedBaseline" id="crossedBaselineYes" autocomplete="off">
                        Yes
                    </label>
                    <label id="crossedBaselineNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="crossedBaseline" id="crossedBaselineNo" autocomplete="off">
                        No
                    </label>
                </div>
            </div>
            <div class="col-lg-2 col-sm-3 col-4">
                <label class="mr-sm-2" style="display: block" for="sandstormCargoCargoship">Cargo in Cargoship</label>
                <div id="sandstormCargoCargoship" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="sandstormCargoCargoshipYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="sandstormCargoCargoship" id="sandstormCargoCargoshipYes"
                            autocomplete="off">
                        Yes
                    </label>
                    <label id="sandstormCargoCargoshipNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="sandstormCargoCargoship" id="sandstormCargoCargoshipNo"
                            autocomplete="off">
                        No
                    </label>
                </div>
            </div>
            <div class="col-lg-2 col-sm-3 col-4">
                <label class="mr-sm-2" style="display: block" for="sandstormCargoRocket">Cargo in Rocket</label>
                <div id="sandstormCargoRocket" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="sandstormCargoRocketYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="sandstormCargoRocket" id="sandstormCargoRocketYes"
                            autocomplete="off">
                        Yes
                    </label>
                    <label id="sandstormCargoRocketNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="sandstormCargoRocket" id="sandstormCargoRocketNo"
                            autocomplete="off">
                        No
                    </label>
                </div>
            </div>
            <div class="col-lg-2 col-sm-3 col-4">
                <label class="mr-sm-2" style="display: block" for="sandstormHatchCargoship">Hatch in Cargoship</label>
                <div id="sandstormHatchCargoship" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="sandstormHatchCargoshipYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="sandstormHatchCargoship" id="sandstormHatchCargoshipYes"
                            autocomplete="off">
                        Yes
                    </label>
                    <label id="sandstormHatchCargoshipNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="sandstormHatchCargoship" id="sandstormHatchCargoshipNo"
                            autocomplete="off">
                        No
                    </label>
                </div>
            </div>
            <div class="col-lg-2 col-sm-3 col-4">
                <label class="mr-sm-2" style="display: block" for="sandstormHatchRocket">Hatch in Rocket</label>
                <div id="sandstormHatchRocket" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="sandstormHatchRocketYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="sandstormHatchRocket" id="sandstormHatchRocketYes"
                            autocomplete="off">
                        Yes
                    </label>
                    <label id="sandstormHatchRocketNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="sandstormHatchRocket" id="sandstormHatchRocketNo"
                            autocomplete="off">
                        No
                    </label>
                </div>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col">
                <h2>Teleop</h2>
            </div>
        </div>
        <div class="row" style="border-bottom: 1px solid; border-color: rgba(0, 0, 0, 0.1)">
            <div class="col-6" style="border-right: 1px solid; border-color: rgba(0, 0, 0, 0.1)">
                <div class="row">
                    <div class="col-12">
                        <h4>Cargo</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div class="row">
                            <div class="col">
                                <label style="margin-bottom: 0px" for="cargoshipCargo">Cargoship</label>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <input id="cargoshipCargo" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                                        autocomplete="off" type="tel" class="form-control" value="0">
                                    <div class="input-group-append">
                                        <button id='cargoshipCargoPlace' class="btn btn-primary" type="button" disabled="true">Place</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div class="row">
                            <div class="col">
                                <label style="margin-bottom: 0px" for="rocket1Cargo">Rocket Level 1</label>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <input id="rocket1Cargo" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                                        autocomplete="off" type="tel" class="form-control" value="0">
                                    <div class="input-group-append">
                                        <button id='rocket1CargoPlace' class="btn btn-primary" type="button" disabled="true">Place</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div class="row">
                            <div class="col">
                                <label style="margin-bottom: 0px" for="rocket2Cargo">Rocket Level 2</label>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <input id="rocket2Cargo" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                                        autocomplete="off" type="tel" class="form-control" value="0">
                                    <div class="input-group-append">
                                        <button id='rocket2CargoPlace' class="btn btn-primary" type="button" disabled="true">Place</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div class="row">
                            <div class="col">
                                <label style="margin-bottom: 0px" for="rocket3Cargo">Rocket Level 3</label>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <input id="rocket3Cargo" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                                        autocomplete="off" type="tel" class="form-control" value="0">
                                    <div class="input-group-append">
                                        <button id='rocket3CargoPlace' class="btn btn-primary" type="button" disabled="true">Place</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-5 col-sm-7 col-7">
                        <div class="row">
                            <div class="col">
                                <label style="margin-bottom: 0px" for="droppedCargo">Dropped</label>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <input id="droppedCargo" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                                        autocomplete="off" type="tel" class="form-control" value="0">
                                    <div class="input-group-append">
                                        <button id='cargoDropped' class="btn btn-primary" type="button" disabled="true">Dropped</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button id='cargoPickup' class="btn btn-warning" type="button" style="width: 100%; margin-bottom: 15px">Pickup</button>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-12">
                        <h4>Hatches</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div class="row">
                            <div class="col">
                                <label style="margin-bottom: 0px" for="cargoshipHatch">Cargoship</label>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <input id="cargoshipHatch" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                                        autocomplete="off" type="tel" class="form-control" value="0">
                                    <div class="input-group-append">
                                        <button id='cargoshipHatchPlace' class="btn btn-primary" type="button" disabled="true">Place</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div class="row">
                            <div class="col">
                                <label style="margin-bottom: 0px" for="rocket1Hatch">Rocket Level 1</label>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <input id="rocket1Hatch" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                                        autocomplete="off" type="tel" class="form-control" value="0">
                                    <div class="input-group-append">
                                        <button id='rocket1HatchPlace' class="btn btn-primary" type="button" disabled="true">Place</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div class="row">
                            <div class="col">
                                <label style="margin-bottom: 0px" for="rocket2Hatch">Rocket Level 2</label>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <input id="rocket2Hatch" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                                        autocomplete="off" type="tel" class="form-control" value="0">
                                    <div class="input-group-append">
                                        <button id='rocket2HatchPlace' class="btn btn-primary" type="button" disabled="true">Place</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                        <div class="row">
                            <div class="col">
                                <label style="margin-bottom: 0px" for="rocket3Hatch">Rocket Level 3</label>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <input id="rocket3Hatch" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                                        autocomplete="off" type="tel" class="form-control" value="0">
                                    <div class="input-group-append">
                                        <button id='rocket3HatchPlace' class="btn btn-primary" type="button" disabled="true">Place</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-5 col-sm-7 col-7">
                        <div class="row">
                            <div class="col">
                                <label style="margin-bottom: 0px" for="droppedHatch">Dropped</label>
                            </div>
                        </div>
                        <div class="row" style="margin-top:5px">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <input id="droppedHatch" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                                        autocomplete="off" type="tel" class="form-control" value="0">
                                    <div class="input-group-append">
                                        <button id='hatchDropped' class="btn btn-primary" type="button" disabled="true">Dropped</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button id='hatchPickup' class="btn btn-warning" type="button" style="width: 100%; margin-bottom: 15px">Pickup</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <label class="mr-sm-2" for="climbingType">Climbing</label>
                <select class="custom-select mr-sm-2" id="climbingType">
                    <option selected>Choose...</option>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                    <option value="2-3">Level 3 through level 2</option>
                    <option value="0">None</option>
                    <option value="other">Other, describe in notes</option>
                </select>
            </div>
            <div class="col-3">
                <label class="mr-sm-2" style="display: block" for="gaveAssistance">Gave assistance</label>
                <div id="gaveAssistance" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="gaveAssistanceYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="gaveAssistance" id="gaveAssistanceYes" autocomplete="off">
                        Yes
                    </label>
                    <label id="gaveAssistanceNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="gaveAssistance" id="gaveAssistanceNo" autocomplete="off">
                        No
                    </label>
                </div>
            </div>
            <div class="col-3">
                <label class="mr-sm-2" style="display: block" for="gotAssistance">Got assistance</label>
                <div id="gotAssistance" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="gotAssistanceYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="gotAssistance" id="gotAssistanceYes" autocomplete="off">
                        Yes
                    </label>
                    <label id="gotAssistanceNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="gotAssistance" id="gotAssistanceNo" autocomplete="off">
                        No
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <button id='climbStart' class="btn btn-success" type="button" style="width: 100%; margin-top: 15px" disabled="true">Climb
                    Start</button>
            </div>
            <div class="col-md-6 col-sm-12">
                <button id='climbEnd' class="btn btn-danger" type="button" style="width: 100%; margin-top: 15px" disabled="true">Climb
                    End</button>
            </div>
        </div>
        <hr />
        <div class='row'>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                <label class="mr-sm-2" style="display: block" for="speedRating">Speed</label>
                <div id="speedRating" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="speed1" class="btn btn-secondary">
                        <input type="radio" value="1" name="speedRating" id="speed1" autocomplete="off"> 1
                    </label>
                    <label id="speed2" class="btn btn-secondary">
                        <input type="radio" value="2" name="speedRating" id="speed2" autocomplete="off"> 2
                    </label>
                    <label id="speed3" class="btn btn-secondary">
                        <input type="radio" value="3" name="speedRating" id="speed3" autocomplete="off"> 3
                    </label>
                    <label id="speed4" class="btn btn-secondary">
                        <input type="radio" value="4" name="speedRating" id="speed4" autocomplete="off"> 4
                    </label>
                    <label id="speed5" class="btn btn-secondary">
                        <input type="radio" value="5" name="speedRating" id="speed5" autocomplete="off"> 5
                    </label>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                <label class="mr-sm-2" style="display: block" for="stabilityRating">Stability</label>
                <div id="stabilityRating" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="stability1" class="btn btn-secondary">
                        <input type="radio" value="1" name="stabilityRating" id="stability1" autocomplete="off"> 1
                    </label>
                    <label id="stability2" class="btn btn-secondary">
                        <input type="radio" value="2" name="stabilityRating" id="stability2" autocomplete="off"> 2
                    </label>
                    <label id="stability3" class="btn btn-secondary">
                        <input type="radio" value="3" name="stabilityRating" id="stability3" autocomplete="off"> 3
                    </label>
                    <label id="stability4" class="btn btn-secondary">
                        <input type="radio" value="4" name="stabilityRating" id="stability4" autocomplete="off"> 4
                    </label>
                    <label id="stability5" class="btn btn-secondary">
                        <input type="radio" value="5" name="stabilityRating" id="stability5" autocomplete="off"> 5
                    </label>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                <label class="mr-sm-2" style="display: block" for="skillRating">Driver Skill</label>
                <div id="skillRating" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="skill1" class="btn btn-secondary">
                        <input type="radio" value="1" name="skillRating" id="skill1" autocomplete="off"> 1
                    </label>
                    <label id="skill2" class="btn btn-secondary">
                        <input type="radio" value="2" name="skillRating" id="skill2" autocomplete="off"> 2
                    </label>
                    <label id="skill3" class="btn btn-secondary">
                        <input type="radio" value="3" name="skillRating" id="skill3" autocomplete="off"> 3
                    </label>
                    <label id="skill4" class="btn btn-secondary">
                        <input type="radio" value="4" name="skillRating" id="skill4" autocomplete="off"> 4
                    </label>
                    <label id="skill5" class="btn btn-secondary">
                        <input type="radio" value="5" name="skillRating" id="skill5" autocomplete="off"> 5
                    </label>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                <label class="mr-sm-2" style="display: block" for="defenceRating">Defence</label>
                <div id="defenceRating" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="defence1" class="btn btn-secondary">
                        <input type="radio" value="1" name="defenceRating" id="defence1" autocomplete="off"> 1
                    </label>
                    <label id="defence2" class="btn btn-secondary">
                        <input type="radio" value="2" name="defenceRating" id="defence2" autocomplete="off"> 2
                    </label>
                    <label id="defence3" class="btn btn-secondary">
                        <input type="radio" value="3" name="defenceRating" id="defence3" autocomplete="off"> 3
                    </label>
                    <label id="defence4" class="btn btn-secondary">
                        <input type="radio" value="4" name="defenceRating" id="defence4" autocomplete="off"> 4
                    </label>
                    <label id="defence5" class="btn btn-secondary">
                        <input type="radio" value="5" name="defenceRating" id="defence5" autocomplete="off"> 5
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="mr-sm-2" style="display: block" for="anythingBreak">Did Anything Break?</label>
                <div id="anythingBreak" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="anythingBreakYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="anythingBreak" id="anythingBreakYes" autocomplete="off">
                        Yes
                    </label>
                    <label id="anythingBreakNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="anythingBreak" id="anythingBreakNo" autocomplete="off"> No
                    </label>
                </div>
            </div>
            <div class="col">
                <label class="mr-sm-2" style="display: block" for="robotDead">Robot Dead, Disabled, Disconnected</label>
                <div id="robotDead" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="robotDeadYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="robotDead" id="robotDeadYes" autocomplete="off"> Yes
                    </label>
                    <label id="robotDeadNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="robotDead" id="robotDeadNo" autocomplete="off"> No
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="mr-sm-2" style="display: block" for="commentSection">Notes and Comments</label>
                <textarea autocomplete="off" style="width: 100%; height:100px" id="commentSection"></textarea>
            </div>
        </div>
        <button id="Submit" class="btn btn-success" type="button" style="margin-top: 15px; margin-bottom: 15px">Submit</button>
    </form>
</div>