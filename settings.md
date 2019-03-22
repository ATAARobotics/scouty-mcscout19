---
layout: default
title: Settings
files: |
 <script src="../resources/js/settings.js"></script>
---
<div class="container-fluid" style="background-color: #f0f0f0; margin-bottom: 15px">
	<form>
		<div class="row">
			<div class="col-md">
                <label class="mr-sm-2" for="matchType">Match Type</label>
                <select class="custom-select mr-sm-2" id="matchType">
                    <option value="p">Practice</option>
                    <option selected value="q">Qualification</option>
                </select>
            </div>
			<div class="col-md">
				<label class="mr-sm-2" for="databaseName">Database Name:</label>
				<input id="databaseName" class="form-control" placeholder="Database Name">
			</div>
			<div class="col-md">
				<label class="mr-sm-2" for="scoutName">Scout Name:</label>
				<input id="scoutName" class="form-control" placeholder="Scout Name">
			</div>
		</div>
		<div class="row">
			<div class="col-md">
				<label class="mr-sm-2" for="serverIp">Server IP:</label>
				<input id="serverIp" class="form-control" placeholder="Server IP">
			</div>
			<div class="col-md">
				<label class="mr-sm-2" for="serverUsername">Username:</label>
				<input id="serverUsername" class="form-control" placeholder="Username">
			</div>
			<div class="col-md">
				<label class="mr-sm-2" for="serverPassword">Password:</label>
				<input type="password" id="serverPassword" class="form-control" placeholder="Password">
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="sqLite">
					<label class="form-check-label" for="sqLite">
						Use SQLite storage backend
					</label>
				</div>
			</div>
		</div>
		<button id="Save" class="btn btn-success" style="margin-right:15px; margin-top:15px; margin-bottom: 15px" type="button">Save</button>
		<button id="Delete" class="btn btn-danger" type="button" style="margin-top:15px; margin-bottom: 15px">Delete Local
			Database</button>
	</form>
</div>