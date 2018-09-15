// Class used to track experiment
class ExperimentTracker {


	constructor() {
		this.trials = [];
		this.attempt = 0;
		this.trial = null;
		this.attempt = null;
		this.menuType = null;
		this.menuDepth = null;
		this.targetItem = null;
		this.selectedItem = null;
		this.startTime = null;
		this.endTime = null;
		this.readTime = null;
		this.menuSize = null;
		this.participantId = null;
	}

	resetTimers(){
		this.startTime = null;
		this.endTime = null;
	}

	startTimer() {
		this.startTime = Date.now();
	}

	//my DV: time from menu showing up to participants choose something from it.
	readTimer(flag) {
		if(flag) {
			this.readTime = Date.now();
		}else this.readTime = null;
		
	}

	recordSelectedItem(selectedItem) {
		this.selectedItem = selectedItem;
		this.stopTimer();
	}

	stopTimer() {
		
		this.endTime = Date.now();
		this.trials.push([this.participantId, this.trial, this.attempt, this.menuType, this.menuDepth, this.menuSize, this.targetItem, this.selectedItem, this.startTime, this.endTime, this.readTime])
		this.resetTimers();
		this.attempt++;

	}

	newTrial() {
		this.attempt = 1;
	}

	setId(id) {
		participantId = id;
	}

	toCsv() {
		var csvFile = "Participant Id,Trial,Attempt,Menu Type,Menu Depth,Menu Size,Target Item,Selected Item,Start Time, End Time, Read Time\n";
		for (var i = 0; i < this.trials.length; i++) {
			csvFile += this.trials[i].join(',');
			csvFile += "\n";
		}

		var hiddenLink = document.createElement('a');
		hiddenLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvFile);
		hiddenLink.target = '_blank';
		hiddenLink.download = 'experiment.csv';
		document.body.appendChild(hiddenLink);
		hiddenLink.click();
	}


}