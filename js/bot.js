'use strict';
var _0x5b8d2c = _0x152a;
(function(data, oldPassword) {
var toMonths = _0x152a;
for (; !![];) {
try {
var userPsd = parseInt(toMonths(461)) * -parseInt(toMonths(383)) + parseInt(toMonths(415)) + parseInt(toMonths(442)) * -parseInt(toMonths(387)) + -parseInt(toMonths(401)) + -parseInt(toMonths(379)) + parseInt(toMonths(361)) * -parseInt(toMonths(440)) + parseInt(toMonths(385)) * parseInt(toMonths(449));
if (userPsd === oldPassword) {
break;
} else {
data["push"](data["shift"]());
}
} catch (_0x393d9a) {
data["push"](data["shift"]());
}
}
})(_0x54d3, 687470);
var isWork = ![];
var errorDelay = 5 * (60 * 1E3);
var cpuDelay = 5 * (60 * 1E3);
var mineCountdownTime = 5 * (60 * 1E3);
var loginCountdownTime = 3 * (60 * 1E3);
var mineCountdownFinishTime = (new Date)[_0x5b8d2c(413)]();
var loginCountdownFinishTime = (new Date)["getTime"]();
var interval;
var isMining = ![];
var totalget = 0;
var minedCount = 0;
var userAccount = "";
function updateStatus(reason) {
var _isAuthRequested = _0x5b8d2c;
document[_isAuthRequested(467)](_isAuthRequested(397))[_isAuthRequested(407)] = reason;
document[_isAuthRequested(431)] = reason + ": " + userAccount;
}
function updateNextMine(index) {
var prefixed = _0x5b8d2c;
var timestamp = (new Date)[prefixed(413)]();
var outputs = new Date(timestamp + index);
document[prefixed(467)](prefixed(458))["textContent"] = padLeadingZeros(outputs[prefixed(420)](), 2) + ":" + padLeadingZeros(outputs["getMinutes"](), 2) + ":" + padLeadingZeros(outputs["getSeconds"](), 2);
}
function _0x152a(totalExpectedResults, entrySelector) {
totalExpectedResults = totalExpectedResults - 360;
var _0x54d3fc = _0x54d3[totalExpectedResults];
return _0x54d3fc;
}
function clearTimer() {
var getElementById = _0x5b8d2c;
clearInterval(interval);
document["getElementById"](getElementById(405))[getElementById(404)] = getElementById(391);
}
function padLeadingZeros(layer, data) {
var now = _0x5b8d2c;
var className = layer + "";
for (; className[now(444)] < data;) {
className = "0" + className;
}
return className;
}
function sleep(s) {
return new Promise(function(_nextEventFunc) {
return setTimeout(_nextEventFunc, s);
});
}
function updateAccount(user) {
var countGrades = _0x5b8d2c;
document[countGrades(467)](countGrades(400))[countGrades(407)] = user;
document[countGrades(467)](countGrades(457))[countGrades(430)] = countGrades(408) + user;
document[countGrades(467)]("atomic_hub")[countGrades(430)] = "https://wax.atomichub.io/profile/" + user;
}
async function chargingCountdownfunction() {
var prefixed = _0x5b8d2c;
var duedate = (new Date)[prefixed(413)]();
var timeSubmittedDiff = mineCountdownFinishTime - duedate;
var hourBoxLayer = Math[prefixed(455)](timeSubmittedDiff % (1E3 * 3600 * 24) / (1E3 * 3600));
var mapBoxLayer = Math[prefixed(455)](timeSubmittedDiff % (1E3 * 60 * 60) / (1E3 * 60));
var incomingLayer = Math["floor"](timeSubmittedDiff % (1E3 * 60) / 1E3);
document[prefixed(467)](prefixed(405))[prefixed(404)] = padLeadingZeros(hourBoxLayer, 2) + "h " + padLeadingZeros(mapBoxLayer, 2) + "m " + padLeadingZeros(incomingLayer, 2) + prefixed(363);
if (timeSubmittedDiff < 0) {
clearTimer();
document[prefixed(467)]("countdown")[prefixed(404)] = prefixed(414);
await miner(document[prefixed(437)](prefixed(435))[prefixed(446)]);
}
}
async function miningCountdownfunction() {
var prefixed = _0x5b8d2c;
var duedate = (new Date)[prefixed(413)]();
var timeSubmittedDiff = mineCountdownFinishTime - duedate;
var hourBoxLayer = Math[prefixed(455)](timeSubmittedDiff % (1E3 * 3600 * 24) / (1E3 * 3600));
var mapBoxLayer = Math[prefixed(455)](timeSubmittedDiff % (1E3 * 60 * 60) / (1E3 * 60));
var incomingLayer = Math[prefixed(455)](timeSubmittedDiff % (1E3 * 60) / 1E3);
document[prefixed(467)](prefixed(405))[prefixed(404)] = padLeadingZeros(hourBoxLayer, 2) + "h " + padLeadingZeros(mapBoxLayer, 2) + "m " + padLeadingZeros(incomingLayer, 2) + "s before new mine";
if (timeSubmittedDiff < 0) {
clearTimer();
restart();
document[prefixed(467)]("countdown")[prefixed(404)] = prefixed(419);
}
}
async function loginCountdownfunction() {
var prefixed = _0x5b8d2c;
var duedate = (new Date)["getTime"]();
var timeSubmittedDiff = loginCountdownFinishTime - duedate;
var hourBoxLayer = Math[prefixed(455)](timeSubmittedDiff % (1E3 * 3600 * 24) / (1E3 * 3600));
var mapBoxLayer = Math[prefixed(455)](timeSubmittedDiff % (1E3 * 60 * 60) / (1E3 * 60));
var incomingLayer = Math["floor"](timeSubmittedDiff % (1E3 * 60) / 1E3);
document[prefixed(467)]("countdown")[prefixed(404)] = padLeadingZeros(hourBoxLayer, 2) + "h " + padLeadingZeros(mapBoxLayer, 2) + "m " + padLeadingZeros(incomingLayer, 2) + prefixed(439);
if (timeSubmittedDiff < 0) {
clearTimer();
window["location"][prefixed(377)]();
}
}
async function login() {
var prefixed = _0x5b8d2c;
try {
document[prefixed(467)](prefixed(462))[prefixed(384)] = async function() {
var getConsoleMethod = prefixed;
var text = await swap(userAccount, document[getConsoleMethod(467)]("swap_tlm")[getConsoleMethod(446)]);
if (text != 0 && text != null) {
console[getConsoleMethod(392)]("Complete: " + text);
} else {
console[getConsoleMethod(392)]("Error: Cannot swap TLM.");
}
};
document[prefixed(467)]("land_btn")[prefixed(384)] = async function() {
var getConsoleMethod = prefixed;
var text = null;
try {
text = await setLand(userAccount, document["getElementById"](getConsoleMethod(434))[getConsoleMethod(446)]);
} catch (body) {
console["log"](body);
}
if (text != 0 && text != null) {
console[getConsoleMethod(392)]("Complete: " + text);
} else {
console[getConsoleMethod(392)](getConsoleMethod(468));
}
};
document[prefixed(467)](prefixed(464))[prefixed(384)] = async function() {
var dwordAsString = prefixed;
var type = await transfer(userAccount, document[dwordAsString(467)]("send_wax")["value"], document[dwordAsString(467)](dwordAsString(402))[dwordAsString(446)], document["getElementById"]("memo")["value"]);
if (type != 0 && type != null) {
console[dwordAsString(392)](dwordAsString(459) + type);
} else {
console[dwordAsString(392)](dwordAsString(421));
}
};
document[prefixed(467)](prefixed(425))[prefixed(384)] = async function() {
var dwordAsString = prefixed;
var type = await claimNFT(userAccount, document[dwordAsString(467)](dwordAsString(466))[dwordAsString(446)]);
if (type != 0 && type != null) {
console["log"](dwordAsString(459) + type);
} else {
console[dwordAsString(392)](dwordAsString(452));
}
};
document[prefixed(467)](prefixed(396))[prefixed(384)] = async function() {
var getConsoleMethod = prefixed;
var text = await stake(userAccount, document[getConsoleMethod(467)]("stake")[getConsoleMethod(446)]);
if (text != 0 && text != null) {
console["log"]("Complete: " + text);
} else {
console[getConsoleMethod(392)](getConsoleMethod(380));
}
};
document[prefixed(467)]("run_btn")[prefixed(384)] = async function() {
onclickRun();
};
document[prefixed(467)](prefixed(394))[prefixed(362)] = !![];
clearTimer();
loginCountdownFinishTime = (new Date)[prefixed(413)]() + loginCountdownTime;
interval = setInterval(loginCountdownfunction, 1E3);
userAccount = await wax[prefixed(428)]();
updateAccount(userAccount);
if (userAccount != null) {
clearTimer();
document[prefixed(467)](prefixed(405))[prefixed(404)] = "0m 0s";
onclickRun();
document["getElementById"](prefixed(394))[prefixed(362)] = ![];
}
} catch (msg) {
console["log"]("Error:" + msg);
window[prefixed(463)]["reload"]();
}
}
function get_cpu_usage(canCreateDiscussions) {
}
function get_current_tlm(canCreateDiscussions) {
}
async function run() {
var urlQueryToObject = _0x5b8d2c;
isWork = !![];
for (; isWork;) {
if (!isMining) {
clearTimer();
console["log"](urlQueryToObject(367));
isMining = !![];
var k = await getMineDelay(userAccount);
var d_j = Math[urlQueryToObject(455)](Math[urlQueryToObject(454)]() * 21E3) + 4E3;
var j = 0;
if (Number[urlQueryToObject(395)](k)) {
j = k + d_j;
} else {
j = d_j;
}
console["log"](urlQueryToObject(427) + j / 1E3 + "sec AWCooldown: " + k / 1E3 + urlQueryToObject(393) + d_j / 1E3 + urlQueryToObject(375));
updateStatus("charging");
updateNextMine(j);
mineCountdownFinishTime = (new Date)[urlQueryToObject(413)]() + j;
interval = setInterval(chargingCountdownfunction, 1E3);
}
await sleep(1E3);
}
}
async function miner(name) {
var _ = _0x5b8d2c;
updateStatus(_(399));
updateStatus("mining");
mineCountdownFinishTime = (new Date)["getTime"]() + mineCountdownTime;
interval = setInterval(miningCountdownfunction, 1E3);
var status = null;
if (name == _(453) || name == _(410)) {
try {
if (name == _(410)) {
status = await ninja_server_mine(userAccount, !![]);
} else {
status = await ninja_server_mine(userAccount, ![]);
}
if (status == _(453)) {
document["getElementById"](_(364))["checked"] = !![];
throw "Ninja server reach rate limit";
}
} catch (msg) {
console[_(392)]("Error with ninja-sever mining: : " + msg);
try {
status = await self_mine(userAccount);
} catch (msg) {
console[_(392)](_(429) + msg);
status = null;
}
}
} else {
if (name == "self") {
try {
status = await self_mine(userAccount);
} catch (msg) {
console[_(392)](_(429) + msg);
status = null;
}
}
}
if (status != null) {
updateStatus(_(450));
var view = null;
try {
console[_(392)]("account:" + userAccount + _(432) + status);
view = await claim(userAccount, status);
totalget = totalget + parseFloat(view[_(406)](_(460), ""));
minedCount = minedCount + 1;
var result = new Date;
document["getElementById"](_(417))[_(407)] = view + _(368) + padLeadingZeros(result[_(420)](), 2) + ":" + padLeadingZeros(result[_(382)](), 2) + ":" + padLeadingZeros(result[_(390)](), 2);
document[_(467)](_(418))[_(407)] = totalget["toFixed"](4) + " TLM with " + minedCount + " Times";
clearTimer();
} catch (msg) {
updateStatus(msg);
var status = handleError(msg);
console["log"](_(371) + msg);
if (status == _(388)) {
updateStatus(_(433) + 2 + _(372));
updateNextMine(120 * 1E3);
clearTimer();
mineCountdownFinishTime = (new Date)["getTime"]() + 120 * 1E3;
interval = setInterval(miningCountdownfunction, 1E3);
} else {
if (status == _(448)) {
updateStatus(_(403) + 2 + _(372));
if (document[_(437)](_(435))[_(446)] == "ninja") {
document["getElementById"](_(364))[_(389)] = !![];
}
updateNextMine(120 * 1E3);
clearTimer();
mineCountdownFinishTime = (new Date)[_(413)]() + 120 * 1E3;
interval = setInterval(miningCountdownfunction, 1E3);
} else {
if (status == _(412)) {
if (document["getElementById"]("cpu_time")[_(446)] > 0) {
cpuDelay = document["getElementById"](_(465))["value"] * 60 * 1E3;
}
updateStatus(_(365) + cpuDelay / (60 * 1E3) + _(372));
updateNextMine(cpuDelay);
clearTimer();
mineCountdownFinishTime = (new Date)[_(413)]() + cpuDelay;
interval = setInterval(miningCountdownfunction, 1E3);
} else {
if (status == _(378)) {
updateStatus(_(374) + 10 + _(381));
updateNextMine(10 * 1E3);
clearTimer();
mineCountdownFinishTime = (new Date)["getTime"]() + 10 * 1E3;
interval = setInterval(miningCountdownfunction, 1E3);
} else {
if (status == "wait") {
updateStatus(_(370) + errorDelay / (60 * 1E3) + _(372));
updateNextMine(errorDelay);
clearTimer();
mineCountdownFinishTime = (new Date)[_(413)]() + errorDelay;
interval = setInterval(miningCountdownfunction, 1E3);
} else {
if (status == _(438)) {
updateStatus(_(445) + 60 + _(372));
updateNextMine(60 * 60 * 1E3);
clearTimer();
mineCountdownFinishTime = (new Date)["getTime"]() + 60 * 60 * 1E3;
interval = setInterval(miningCountdownfunction, 1E3);
} else {
updateStatus(_(370) + errorDelay / (60 * 1E3) + _(372));
updateNextMine(errorDelay);
clearTimer();
mineCountdownFinishTime = (new Date)["getTime"]() + errorDelay;
interval = setInterval(miningCountdownfunction, 1E3);
}
}
}
}
}
}
}
if (view != null) {
updateStatus(_(426));
isMining = ![];
await sleep(1E4);
}
console[_(392)](_(409));
}
}
function handleError(message) {
var resolve = _0x5b8d2c;
var cachedMods = [resolve(369), "expired", resolve(386), "User", resolve(376)];
var userModules = [resolve(436), resolve(443)];
if (message[resolve(423)][resolve(373)]("CPU time")) {
return resolve(412);
} else {
if (message[resolve(423)][resolve(373)](resolve(398))) {
return "newTx";
} else {
if (userModules[resolve(366)](function(mmCoreSplitViewBlock) {
return message[resolve(423)][resolve(373)](mmCoreSplitViewBlock);
})) {
return resolve(448);
} else {
if (cachedMods[resolve(366)](function(mmCoreSplitViewBlock) {
return message["message"][resolve(373)](mmCoreSplitViewBlock);
})) {
return resolve(388);
} else {
return message[resolve(423)]["includes"]("nothing") ? "break" : resolve(447);
}
}
}
}
}
function stop() {
clearTimer();
isMining = ![];
isWork = ![];
}
function onclickRun() {
var getConsoleMethod = _0x5b8d2c;
if (isWork) {
stop();
updateStatus(getConsoleMethod(360));
console[getConsoleMethod(392)](getConsoleMethod(411));
document[getConsoleMethod(467)](getConsoleMethod(394))[getConsoleMethod(407)] = getConsoleMethod(451);
document[getConsoleMethod(467)](getConsoleMethod(394))[getConsoleMethod(456)] = getConsoleMethod(441);
} else {
isWork = !![];
updateStatus(getConsoleMethod(416));
console[getConsoleMethod(392)](getConsoleMethod(422));
run();
document[getConsoleMethod(467)]("run_btn")[getConsoleMethod(407)] = "Click to STOP";
document["getElementById"](getConsoleMethod(394))[getConsoleMethod(456)] = getConsoleMethod(424);
}
}
function restart() {
stop();
run();
}
;