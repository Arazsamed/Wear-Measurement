// App logic
var units = Object.keys(EQUIPMENT).sort();
var html = "<div class='units'>";
for (var i = 0; i < units.length; i++) {
  var key = units[i];
  var eq = EQUIPMENT[key];
  html += "<div class='unit-card'>";
  html += "<div class='unit-name'>" + key + "</div>";
  html += "<div class='unit-type'>" + eq.type + " - " + eq.params.length + " parametr</div>";
  html += "</div>";
}
html += "</div>";
document.getElementById("app").innerHTML = html;
console.log("App initialized");