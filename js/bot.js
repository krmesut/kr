'use strict';
var _0x1b35 = ["RUNNING", "memo", "before new login", "soon", "1579853mGbmVO", "wait", "toal_get", "textContent", "stake_btn", "value", "Invalid", "https://wax.atomichub.io/profile/", "user", "href", "mining", "last_mine", "WTF is this error???? restart in 5 min", "account:", "STOPPING", "floor", "1609474YQAmOY", "self", "กำลัง cooldown", "getSeconds", "trying to mine", "cpu", "claim_nft_acc", "status", "Normal error wait: ", "login", "Error: Claimed NFT.", "toLocaleString", "restart", "includes",
	" min", "charging", " วิ Cooldown : ", "Unknow error wait: ", "send_btn", "wax_bloks", " TLM", "79EwqwoV", "className", "restarting", "Failed", "getElementById", "checked", "16624OAEnVL", "break", "179051xJBmNb", "message", "random", "sec", "some", "1728563ocrnbp", "getTime", "declined", "isInteger", "0m 0s", "Click to Start", "onclick", "location", " บวกสุ่ม : ", "run_btn", "Error: Cannot transfer.", "reload", "toFixed", "Nothing to be mine wait : ", "Complete: ", "ninja", "-------------------",
	" at ", "expired", "send_wax", "land_btn", "ninja_vip", "error: ", "replace", "user_account", "log", "getMinutes", "รวม cooldown : ", " ก่อนขุด", "atomic_hub", "Ninja server reach rate limit", "next_mine", "nothing", "innerHTML", "to_acc", "countdown", "querySelector", " || answer:", "set_land", "1144112cWrfcB", "claim_btn", 'input[name="mining_with"]:checked', "getHours", "3506789lBRJcy", "claiming", "disabled", "======== STOPPING ========", "btn btn-danger", "Error with ninja-sever mining: : "
];
var _0xa1f22a = _0x3f9e;
(function(data, oldPassword) {
	var toMonths = _0x3f9e;
	for (; !![];) {
		try {
			var userPsd = parseInt(toMonths(206)) + -parseInt(toMonths(154)) * -parseInt(toMonths(160)) + parseInt(toMonths(167)) + -parseInt(toMonths(117)) + parseInt(toMonths(133)) + parseInt(toMonths(162)) + -parseInt(toMonths(210));
			if (userPsd === oldPassword) {
				break;
			} else {
				data["push"](data["shift"]());
			}
		} catch (_0x4da6bf) {
			data["push"](data["shift"]());
		}
	}
})(_0x1b35, 887854);
var isWork = ![];
var errorDelay = 1 * (60 * 1E3);
var cpuDelay = 1 * (60 * 1E3);
var mineCountdownTime = 2 * (60 * 1E3);
var loginCountdownTime = 1 * (60 * 1E3);
var mineCountdownFinishTime = (new Date)[_0xa1f22a(168)]();
var loginCountdownFinishTime = (new Date)[_0xa1f22a(168)]();
var interval;
var isMining = ![];
var totalget = 0;
var minedCount = 0;
var userAccount = "";

function updateStatus(reason) {
	var _isAuthRequested = _0xa1f22a;
	document[_isAuthRequested(158)](_isAuthRequested(140))[_isAuthRequested(120)] = reason;
	document["title"] = reason + ": " + userAccount;
}

function updateNextMine(index) {
	var prefixed = _0xa1f22a;
	var timestamp = (new Date)[prefixed(168)]();
	var outputs = new Date(timestamp + index);
	document[prefixed(158)](prefixed(198))[prefixed(120)] = outputs[prefixed(144)]();
}

function clearTimer() {
	var getElementById = _0xa1f22a;
	clearInterval(interval);
	document[getElementById(158)](getElementById(202))[getElementById(200)] = getElementById(171);
}

function sleep(s) {
	return new Promise(function(_nextEventFunc) {
		return setTimeout(_nextEventFunc, s);
	});
}

function updateAccount(user) {
	var countGrades = _0xa1f22a;
	document[countGrades(158)](countGrades(191))[countGrades(120)] = user;
	document[countGrades(158)](countGrades(152))[countGrades(126)] = "https://wax.bloks.io/account/" + user;
	document["getElementById"](countGrades(196))[countGrades(126)] = countGrades(124) + user;
}

async function chargingCountdownfunction() {
	var prefixed = _0xa1f22a;
	var duedate = (new Date)[prefixed(168)]();
	var timeSubmittedDiff = mineCountdownFinishTime - duedate;
	var hourNamePrefix = Math[prefixed(132)](timeSubmittedDiff % (1E3 * 3600 * 24) / (1E3 * 360));
	var groupNamePrefix = Math[prefixed(132)](timeSubmittedDiff % (1E3 * 60 * 60) / (1E3 * 60));
	var dupeNameCount = Math[prefixed(132)](timeSubmittedDiff % (1E3 * 60) / 1E3);
	document["getElementById"](prefixed(202))["innerHTML"] = hourNamePrefix + "h " + groupNamePrefix + "m " + dupeNameCount + "s " + prefixed(195);
	if (timeSubmittedDiff < 0) {
		clearTimer();
		document[prefixed(158)](prefixed(202))[prefixed(200)] = prefixed(137);
		await miner(document["querySelector"](prefixed(208))[prefixed(122)]);
	}
}

async function miningCountdownfunction() {
	var prefixed = _0xa1f22a;
	var duedate = (new Date)[prefixed(168)]();
	var timeSubmittedDiff = mineCountdownFinishTime - duedate;
	var hourNamePrefix = Math[prefixed(132)](timeSubmittedDiff % (1E3 * 3600 * 24) / (1E3 * 3600));
	var groupNamePrefix = Math[prefixed(132)](timeSubmittedDiff % (1E3 * 60 * 60) / (1E3 * 60));
	var dupeNameCount = Math[prefixed(132)](timeSubmittedDiff % (1E3 * 60) / 1E3);
	document[prefixed(158)]("countdown")[prefixed(200)] = hourNamePrefix + "h " + groupNamePrefix + "m " + dupeNameCount + "s " + "before new mine";
	if (timeSubmittedDiff < 0) {
		clearTimer();
		restart();
		document["getElementById"](prefixed(202))["innerHTML"] = prefixed(156);
	}
}

async function loginCountdownfunction() {
	var prefixed = _0xa1f22a;
	var duedate = (new Date)["getTime"]();
	var timeSubmittedDiff = loginCountdownFinishTime - duedate;
	var hourNamePrefix = Math[prefixed(132)](timeSubmittedDiff % (1E3 * 3600 * 24) / (1E3 * 3600));
	var groupNamePrefix = Math["floor"](timeSubmittedDiff % (1E3 * 60 * 60) / (1E3 * 60));
	var dupeNameCount = Math[prefixed(132)](timeSubmittedDiff % (1E3 * 60) / 1E3);
	document[prefixed(158)]("countdown")["innerHTML"] = hourNamePrefix + "h " + groupNamePrefix + "m " + dupeNameCount + "s " + prefixed(218);
	if (timeSubmittedDiff < 0) {
		clearTimer();
		window[prefixed(174)][prefixed(178)]();
	}
}

async function login() {
	var disableLists = _0xa1f22a;
	try {
		document["getElementById"]("swap_btn")[disableLists(173)] = async function() {
			var dwordAsString = disableLists;
			var type = await swap(userAccount, document[dwordAsString(158)]("swap_tlm")[dwordAsString(122)]);
			if (type != 0 && type != null) {
				console["log"](dwordAsString(181) + type);
			} else {
				console[dwordAsString(192)]("Error: Cannot swap TLM.");
			}
		};
		document[disableLists(158)](disableLists(187))[disableLists(173)] = async function() {
			var dwordAsString = disableLists;
			var type = null;
			try {
				type = await setLand(userAccount, document[dwordAsString(158)](dwordAsString(205))[dwordAsString(122)]);
			} catch (body) {
				console["log"](body);
			}
			if (type != 0 && type != null) {
				console["log"](dwordAsString(181) + type);
			} else {
				console[dwordAsString(192)]("Error: Cannot set land.");
			}
		};
		document["getElementById"](disableLists(151))[disableLists(173)] = async function() {
			var dwordAsString = disableLists;
			var type = await transfer(userAccount, document[dwordAsString(158)](dwordAsString(186))[dwordAsString(122)], document[dwordAsString(158)](dwordAsString(201))[dwordAsString(122)], document["getElementById"](dwordAsString(217))[dwordAsString(122)]);
			if (type != 0 && type != null) {
				console[dwordAsString(192)](dwordAsString(181) + type);
			} else {
				console["log"](dwordAsString(177));
			}
		};
		document["getElementById"](disableLists(207))[disableLists(173)] = async function() {
			var getConsoleMethod = disableLists;
			var text = await claimNFT(userAccount, document[getConsoleMethod(158)](getConsoleMethod(139))[getConsoleMethod(122)]);
			if (text != 0 && text != null) {
				console[getConsoleMethod(192)]("Complete: " + text);
			} else {
				console[getConsoleMethod(192)](getConsoleMethod(143));
			}
		};
		document["getElementById"](disableLists(121))["onclick"] = async function() {
			var getConsoleMethod = disableLists;
			var text = await stake(userAccount, document[getConsoleMethod(158)]("stake")[getConsoleMethod(122)]);
			if (text != 0 && text != null) {
				console["log"]("Complete: " + text);
			} else {
				console[getConsoleMethod(192)]("Error: Cannot stake.");
			}
		};
		document[disableLists(158)](disableLists(176))[disableLists(173)] = async function() {
			onclickRun();
		};
		document[disableLists(158)](disableLists(176))[disableLists(212)] = !![];
		clearTimer();
		loginCountdownFinishTime = (new Date)[disableLists(168)]() + loginCountdownTime;
		interval = setInterval(loginCountdownfunction, 1E3);
		userAccount = await wax[disableLists(142)]();
		updateAccount(userAccount);
		if (userAccount != null) {
			clearTimer();
			document["getElementById"](disableLists(202))["innerHTML"] = disableLists(171);
			onclickRun();
			document["getElementById"](disableLists(176))["disabled"] = ![];
		}
	} catch (msg) {
		console[disableLists(192)]("Error:" + msg);
		updateState(disableLists(129));
		updateNextMine(5 * 60 * 1E3);
		isWork = ![];
		clearTimer();
		document["getElementById"]("countdown")[disableLists(200)] = disableLists(171);
		await sleep(5 * 60 * 1E3);
		window["location"][disableLists(178)]();
	}
}

function get_cpu_usage(canCreateDiscussions) {}

function _0x3f9e(totalExpectedResults, entrySelector) {
	totalExpectedResults = totalExpectedResults - 116;
	var _0x1b3561 = _0x1b35[totalExpectedResults];
	return _0x1b3561;
}

function get_current_tlm(canCreateDiscussions) {}

async function run() {
	var $ = _0xa1f22a;
	isWork = !![];
	for (; isWork;) {
		if (!isMining) {
			clearTimer();
			console[$(192)]($(135));
			isMining = !![];
			var k = await getMineDelay(userAccount);
			var d_j = Math[$(132)](Math[$(164)]() * 21E3) + 4E3;
			var j = 0;
			if (Number[$(170)](k)) {
				j = k + d_j;
			} else {
				j = d_j;
			}
			console[$(192)]($(194) + j / 1E3 + $(149) + k / 1E3 + $(175) + d_j / 1E3 + $(165));
			updateStatus($(148));
			updateNextMine(j);
			mineCountdownFinishTime = (new Date)[$(168)]() + j;
			interval = setInterval(chargingCountdownfunction, 1E3);
		}
		await sleep(1E3);
	}
}


async function miner(value) {
	var t = _0xa1f22a;
	updateStatus("waiting to mine...");
	updateStatus(t(127));
	mineCountdownFinishTime = (new Date)[t(168)]() + mineCountdownTime;
	interval = setInterval(miningCountdownfunction, 1E3);
	var errorCode = null;
	if (value == "ninja" || value == t(188)) {
		try {
			if (value == t(188)) {
				errorCode = await ninja_server_mine(userAccount, !![]);
			} else {
				errorCode = await ninja_server_mine(userAccount, ![]);
			}
			if (errorCode == t(182)) {
				document[t(158)]("self")[t(159)] = !![];
				throw t(197);
			}
		} catch (msg) {
			console[t(192)](t(215) + msg);
			try {
				errorCode = await self_mine(userAccount);
			} catch (msg) {
				console[t(192)]("Error with self mining: " + msg);
				errorCode = null;
			}
		}
	} else {
		if (value == "self") {
			try {
				errorCode = await self_mine(userAccount);
			} catch (msg) {
				console[t(192)]("Error with self mining: " + msg);
				errorCode = null;
			}
		}
	}
	if (errorCode != null) {
		updateStatus(t(211));
		var ret = null;
		try {
			console[t(192)](t(130) + userAccount + t(204) + errorCode);
			ret = await claim(userAccount, errorCode);
			totalget = totalget + parseFloat(ret[t(190)](t(153), ""));
			minedCount = minedCount + 1;
			var expected_date2 = new Date;
			document[t(158)](t(128))["textContent"] = ret + t(184) + expected_date2[t(209)]() + ":" + expected_date2[t(193)]() + ":" + expected_date2[t(136)]();
			document["getElementById"](t(119))[t(120)] = totalget[t(179)](4) + " TLM with " + minedCount + " Times";
			clearTimer();
		} catch (msg) {
			updateStatus(msg);
			var errorMsg = handleError(msg);
			console[t(192)](t(189) + msg);
			if (errorMsg == t(145)) {
				updateStatus(t(141) + 2 + t(147));
				updateNextMine(120 * 1E3);
				clearTimer();
				mineCountdownFinishTime = (new Date)[t(168)]() + 120 * 1E3;
				interval = setInterval(miningCountdownfunction, 1E3);
			} else {
				if (errorMsg == t(127)) {
					updateStatus("Error while find answer: " + 2 + t(147));
					if (document[t(203)]('input[name="mining_with"]:checked')[t(122)] == "ninja") {
						document[t(158)](t(134))[t(159)] = !![];
					}
					updateNextMine(120 * 1E3);
					clearTimer();
					mineCountdownFinishTime = (new Date)["getTime"]() + 120 * 1E3;
					interval = setInterval(miningCountdownfunction, 1E3);
				} else {
					if (errorMsg == t(138)) {
						updateStatus("Cpu full wait: " + cpuDelay / (60 * 1E3) + t(147));
						updateNextMine(cpuDelay);
						clearTimer();
						mineCountdownFinishTime = (new Date)[t(168)]() + cpuDelay;
						interval = setInterval(miningCountdownfunction, 1E3);
					} else {
						if (errorMsg == t(118)) {
							updateStatus(t(150) + errorDelay / (60 * 1E3) + t(147));
							updateNextMine(errorDelay);
							clearTimer();
							mineCountdownFinishTime = (new Date)[t(168)]() + errorDelay;
							interval = setInterval(miningCountdownfunction, 1E3);
						} else {
							if (errorMsg == t(161)) {
								updateStatus(t(180) + 60 + t(147));
								updateNextMine(60 * 60 * 1E3);
								clearTimer();
								mineCountdownFinishTime = (new Date)[t(168)]() + 60 * 60 * 1E3;
								interval = setInterval(miningCountdownfunction, 1E3);
							} else {
								updateStatus(t(150) + errorDelay / (60 * 1E3) + t(147));
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
		if (ret != null) {
			updateStatus("mining success sleeping");
			await sleep(1E4);
			isMining = ![];
		}
		console["log"](t(183));
	}
}

function handleError(obj) {
	var parseInt = _0xa1f22a;
	var wrapper1 = [parseInt(169), parseInt(185), parseInt(116), parseInt(125), parseInt(157)];
	var args = [parseInt(123), "limit"];
	if (obj[parseInt(163)]["includes"]("CPU time")) {
		return "cpu";
	} else {
		if (args[parseInt(166)](function(mmCoreSplitViewBlock) {
				return obj["message"]["includes"](mmCoreSplitViewBlock);
			})) {
			return "mining";
		} else {
			if (wrapper1["some"](function(mmCoreSplitViewBlock) {
					return obj["message"][parseInt(146)](mmCoreSplitViewBlock);
				})) {
				return parseInt(145);
			} else {
				return obj[parseInt(163)]["includes"](parseInt(199)) ? "break" : parseInt(118);
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
	var getConsoleMethod = _0xa1f22a;
	if (isWork) {
		stop();
		updateStatus(getConsoleMethod(131));
		console[getConsoleMethod(192)](getConsoleMethod(213));
		document["getElementById"](getConsoleMethod(176))[getConsoleMethod(120)] = getConsoleMethod(172);
		document["getElementById"](getConsoleMethod(176))[getConsoleMethod(155)] = "btn btn-success";
	} else {
		isWork = !![];
		updateStatus(getConsoleMethod(216));
		console[getConsoleMethod(192)]("======== RUNNING ========");
		run();
		document[getConsoleMethod(158)](getConsoleMethod(176))[getConsoleMethod(120)] = "Click to STOP";
		document[getConsoleMethod(158)](getConsoleMethod(176))[getConsoleMethod(155)] = getConsoleMethod(214);
	}
}

function restart() {
	stop();
	run();
};