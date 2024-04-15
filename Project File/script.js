
function calculateRemainingTime() {
  // Get the input values
  var siteAvail = parseFloat(document.getElementById("siteAvailInput").value) || 0;
  var numberOfDays = parseFloat(document.getElementById("daysInput").value) || 0;

  // Calculate the remaining percentage
  var remainingPercentage = 100 - siteAvail;

  // Convert remaining percentage to dd:hh:mm format
  var totalMinutes = (remainingPercentage * numberOfDays * 1440) / 100; // 1 day = 1440 minutes
  var days = Math.floor(totalMinutes / 1440);
  var hours = Math.floor((totalMinutes % 1440) / 60);
  var minutes = Math.floor(totalMinutes % 60);

  // Display the result in the Total Downtime div
  var totalDowntimeDiv = document.getElementById("totalDowntimeDiv");
  totalDowntimeDiv.textContent =  days + 'd: ' + hours + 'h: ' + minutes + 'm';
}
