---
layout: default
title: Pit
files: |
 <script src="../resources/js/pit.js"></script>
---
<div id='spinner'></div>
<div id='status'>0</div>
<div id='page' class="container-fluid" style="background-color: #f0f0f0; margin-bottom: 15px">
    <form>
        <div class="row">
            <div class="col">
                <label class="mr-sm-2" for="teamNumber">Team Number</label>
                <input id="teamNumber" maxlength="4" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                    autocomplete="off" type="tel" class="form-control" placeholder="Team Number">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-3 col-5">
                <label class="mr-sm-2" style="display: block" for="robotAppearance">Overall Appearance:</label>
                <div id="robotAppearance" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="appearance1" class="btn btn-secondary">
                        <input type="radio" value="1" name="robotAppearance" id="appearance1" autocomplete="off"> 1
                    </label>
                    <label id="appearance2" class="btn btn-secondary">
                        <input type="radio" value="2" name="robotAppearance" id="appearance2" autocomplete="off"> 2
                    </label>
                    <label id="appearance3" class="btn btn-secondary">
                        <input type="radio" value="3" name="robotAppearance" id="appearance3" autocomplete="off"> 3
                    </label>
                    <label id="appearance4" class="btn btn-secondary">
                        <input type="radio" value="4" name="robotAppearance" id="appearance4" autocomplete="off"> 4
                    </label>
                    <label id="appearance5" class="btn btn-secondary">
                        <input type="radio" value="5" name="robotAppearance" id="appearance5" autocomplete="off"> 5
                    </label>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-7">
                <label class="mr-sm-2" style="display: block" for="groundIntake">Ground Intake</label>
                <div id="groundIntake" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="groundIntakeCargo" class="btn btn-secondary">
                        <input type="radio" value="cargo" name="groundIntake" id="groundIntakeCargo" autocomplete="off">
                        Cargo
                    </label>
                    <label id="groundIntakeHatch" class="btn btn-secondary">
                        <input type="radio" value="hatch" name="groundIntake" id="groundIntakeHatch" autocomplete="off">
                        Hatch
                    </label>
                    <label id="groundIntakeBoth" class="btn btn-secondary">
                        <input type="radio" value="both" name="groundIntake" id="groundIntakeBoth" autocomplete="off">
                        Both
                    </label>
                    <label id="groundIntakeNone" class="btn btn-secondary">
                        <input type="radio" value="none" name="groundIntake" id="groundIntakeNone" autocomplete="off">
                        None
                    </label>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-4">
                <label class="mr-sm-2" style="display: block" for="climbLevel">Can Climb to Level:</label>
                <div id="climbLevel" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="climbLevel1" class="btn btn-secondary">
                        <input type="radio" value="1" name="climbLevel" id="climbLevel1" autocomplete="off"> 1
                    </label>
                    <label id="climbLevel2" class="btn btn-secondary">
                        <input type="radio" value="2" name="climbLevel" id="climbLevel2" autocomplete="off"> 2
                    </label>
                    <label id="climbLevel3" class="btn btn-secondary">
                        <input type="radio" value="3" name="climbLevel" id="climbLevel3" autocomplete="off"> 3
                    </label>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
                <label class="mr-sm-2" style="display: block" for="cargoLevel">Max Cargo Level</label>
                <div id="cargoLevel" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="cargoLevelCargoship" class="btn btn-secondary">
                        <input type="radio" value="cargoship" name="cargoLevel" id="cargoLevelCargoship" autocomplete="off">
                        Cargoship
                    </label>
                    <label id="cargoLevel1" class="btn btn-secondary">
                        <input type="radio" value="1" name="cargoLevel" id="cargoLevel1" autocomplete="off">
                        Rocket 1
                    </label>
                    <label id="cargoLevel2" class="btn btn-secondary">
                        <input type="radio" value="2" name="cargoLevel" id="cargoLevel2" autocomplete="off">
                        Rocket 2
                    </label>
                    <label id="cargoLevel3" class="btn btn-secondary">
                        <input type="radio" value="3" name="cargoLevel" id="cargoLevel3" autocomplete="off">
                        Rocket 3
                    </label>
                    <label id="cargoLevelNone" class="btn btn-secondary">
                        <input type="radio" value="none" name="cargoLevel" id="cargoLevelNone" autocomplete="off">
                        None
                    </label>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
                <label class="mr-sm-2" style="display: block" for="hatchLevel">Max Hatch Level</label>
                <div id="hatchLevel" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="hatchLevelCargoship" class="btn btn-secondary">
                        <input type="radio" value="cargoship" name="hatchLevel" id="hatchLevelCargoship" autocomplete="off">
                        Cargoship
                    </label>
                    <label id="hatchLevel1" class="btn btn-secondary">
                        <input type="radio" value="1" name="hatchLevel" id="hatchLevel1" autocomplete="off">
                        Rocket 1
                    </label>
                    <label id="hatchLevel2" class="btn btn-secondary">
                        <input type="radio" value="2" name="hatchLevel" id="hatchLevel2" autocomplete="off">
                        Rocket 2
                    </label>
                    <label id="hatchLevel3" class="btn btn-secondary">
                        <input type="radio" value="3" name="hatchLevel" id="hatchLevel3" autocomplete="off">
                        Rocket 3
                    </label>
                    <label id="hatchLevelNone" class="btn btn-secondary">
                        <input type="radio" value="none" name="hatchLevel" id="hatchLevelNone" autocomplete="off">
                        None
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <label class="mr-sm-2" style="display: block" for="robotDone">Robot Done</label>
                <div id="robotDone" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="robotDoneYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="robotDone" id="robotDoneYes" autocomplete="off"> Yes
                    </label>
                    <label id="robotDoneNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="robotDone" id="robotDoneNo" autocomplete="off"> No
                    </label>
                </div>
            </div>
            <div class="col-6">
                <label class="mr-sm-2" style="display: block" for="robotBroken">Anything Broken?</label>
                <div id="robotBroken" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="robotBrokenYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="robotBroken" id="robotBrokenYes" autocomplete="off"> Yes
                    </label>
                    <label id="robotBrokenNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="robotBroken" id="robotBrokenNo" autocomplete="off"> No
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-6">
                <div>
                    <img class="img-fluid" style="margin-top: 15px; display:none" alt="No Image" id="robotPhoto1Preview" />
                </div>
                <label class="mr-sm-2" style="display: block" for="robotPhoto1">Robot Photo 1</label>
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <button id='newPicture1' class="btn btn-info" type="button" style="width: 100%; margin-bottom: 15px">Take
                            Picture</button>
                    </div>
                    <div class="col-sm-6 col-12">
                        <button id='existingPicture1' class="btn btn-info" type="button" style="width: 100%; margin-bottom: 15px">Use
                            Existing</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-6">
                <div>
                    <img class="img-fluid" style="margin-top: 15px; display:none" alt="No Image" id="robotPhoto2Preview" />
                </div>
                <label class="mr-sm-2" style="display: block" for="robotPhoto2">Robot Photo 2</label>
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <button id='newPicture2' class="btn btn-info" type="button" style="width: 100%; margin-bottom: 15px">Take
                            Picture</button>
                    </div>
                    <div class="col-sm-6 col-12">
                        <button id='existingPicture2' class="btn btn-info" type="button" style="width: 100%; margin-bottom: 15px">Use
                            Existing</button>
                    </div>
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