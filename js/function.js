'use strict';

function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		var i = 0;
		var arr2 = Array(arr.length);
		for (; i < arr.length; i++) {
			arr2[i] = arr[i];
		}
		return arr2;
	} else {
		return Array.from(arr);
	}
}
var _0xd32a = ["map", " WAX to ", "miners", " WAX from ", "owner", "7RRDIDX", "803596FXgxab", " to ", " Transfering ", "eosio", "get_table_rows", "653783TQvEAs", "13xtURtE", "items", "text", "56081rHFejW", " TLM", ".000Z", "action_traces", "act", "last_mine_tx", "account_str", "avatar", "processed", "Still mining - tried ", "img", "get", "WaxJS", " WAX", "Limit", "match", "0000000000000000000000000000000000000000000000000000000000000000", "current_land", "pushName", "includes", " iterations", "last_mine_arr",
	"postMessage", "305qxnEBj", "delay", " WAX ", "array", "alcordexmain", "floor", "difficulty", "data", "71006HenQoE", "Transfer ", "toFixed", "https://server-mine-b7clrv20.an.gateway.dev/server_mine?wallet=", "Complete stake ", "Rate", "558657IBDBzP", "0.00000000 WAX", "tag", "some", "0.00000000 WAX@eosio.token", "transact", "alien.worlds", "inline_traces", "federation", "delegatebw", "m.federation", "length", "setland", "Set to lands: ", "ease", "SHA-256", "eosio.token", "set", "log", "ninja", " WAX",
	"active", "443dgpaGY", "planet", "error", "players", "0000", " changing land to ", "toString", "getAsset", " TLM", "api", "mine", "rows", "https://wax.api.atomicassets.io", "padStart", "account", "Swap ", "join", "Failed to get land - ", "getTime", "rpc", "last_mine", "quantity", "slice", "Staking ", "getName", "Found answer ", "message", "transfer", "https://server-mine-b7clrv20.an.gateway.dev/server_mine_vip?wallet=", "status", "Mining with ninja vip server", "substring", "then", " Pushing mine results...",
	"substr", "subtle", " WAX to CPU...", "all", " Swaping tlm to wax ...", "claimnfts", " ...", "49333kXTRsl"
];
var _0x5d351e = _0x1860;
(function(data, oldPassword) {
	var toMonths = _0x1860;
	for (; !![];) {
		try {
			var userPsd = -parseInt(toMonths(380)) * -parseInt(toMonths(483)) + parseInt(toMonths(373)) * -parseInt(toMonths(383)) + -parseInt(toMonths(374)) + parseInt(toMonths(379)) + -parseInt(toMonths(406)) * parseInt(toMonths(442)) + -parseInt(toMonths(414)) + parseInt(toMonths(420));
			if (userPsd === oldPassword) {
				break;
			} else {
				data["push"](data["shift"]());
			}
		} catch (_0xfe0351) {
			data["push"](data["shift"]());
		}
	}
})(_0xd32a, 451485);
var wax = new(waxjs[_0x5d351e(395)])("https://wax.greymass.com");
var aa_api = new atomicassets["ExplorerApi"](_0x5d351e(454), "atomicassets", {
	fetch: fetch
});
var mining_account = _0x5d351e(430);
var federation_account = _0x5d351e(428);
var fromHexString = function isISIN(str) {
	return new Uint8Array(str[_0x5d351e(398)](/.{1,2}/g)[_0x5d351e(484)](function(id_local) {
		return parseInt(id_local, 16);
	}));
};

var toHexString = function construct(selector) {
	return selector["reduce"](function(canCreateDiscussions, intval) {
		return canCreateDiscussions + intval["toString"](16)[_0x5d351e(455)](2, "0");
	}, "");
};

var nameToInt = function onSuccess(event) {
	var now = _0x5d351e;
	var rpm_traffic = new Serialize["SerialBuffer"]({
		textEncoder: new TextEncoder,
		textDecoder: new TextDecoder
	});
	rpm_traffic[now(401)](event);
	var uriPathPrefix = new Int64LE(rpm_traffic[now(409)]);
	return uriPathPrefix + "";
};

var nameToArray = function onSuccess(event) {
	var now = _0x5d351e;
	var rpm_traffic = new Serialize["SerialBuffer"]({
		textEncoder: new TextEncoder,
		textDecoder: new TextDecoder
	});
	return rpm_traffic[now(401)](event), rpm_traffic[now(409)];
};

var intToName = function ab2str(to) {
	var escape = _0x5d351e;
	to = new Int64LE(to);
	var codesMap = new SerialBuffer({
		textEncoder: new TextEncoder,
		textDecoder: new TextDecoder
	});
	codesMap["pushArray"](to["toArray"]());
	var str = codesMap[escape(466)]();
	return str;
};

var getBagMiningParams = function generate(data) {
	var random = _0x5d351e;
	var obj = {
		delay: 0,
		difficulty: 0,
		ease: 0
	};
	var W = 65535;
	var i = 0;
	for (; i < data[random(431)]; i++) {
		if (data[i][random(413)][random(407)] < W) {
			W = data[i][random(413)][random(407)];
		}
		obj[random(407)] += data[i][random(413)][random(407)];
		obj[random(412)] += data[i]["data"][random(412)];
		obj["ease"] += data[i]["data"][random(434)] / 10;
	}
	if (data[random(431)] === 2) {
		obj[random(407)] -= parseInt(W / 2);
	} else {
		if (data["length"] === 3) {
			obj["delay"] -= W;
		}
	}
	return obj;
};

var getLandMiningParams = function init(obj) {
	var parseInt = _0x5d351e;
	var animateTo = {
		delay: 0,
		difficulty: 0,
		ease: 0
	};
	return animateTo["delay"] += obj[parseInt(413)][parseInt(407)], animateTo["difficulty"] += obj[parseInt(413)][parseInt(412)], animateTo["ease"] += obj["data"][parseInt(434)], animateTo;
};

var getLandById = async function parse(t, req, res, tokens) {
	var decodeURIComponent = _0x5d351e;
	try {
		var from = await res[decodeURIComponent(378)]({
			code: t,
			scope: t,
			table: "landregs",
			lower_bound: req,
			upper_bound: req
		});
		var enable = "federation";
		if (from["rows"]["length"]) {
			enable = from["rows"][0][decodeURIComponent(372)];
		}
		if (!enable) {
			throw new Error("Land owner not found for land id " + req);
		}
		var results = await tokens["getAsset"](req);
		return results["data"][decodeURIComponent(443)] = intToName(results[decodeURIComponent(413)]["planet"]), results["data"][decodeURIComponent(393)] = results[decodeURIComponent(413)]["img"] || "", results[decodeURIComponent(372)] = results[decodeURIComponent(372)] || enable, results;
	} catch (_0x1f708a) {
		return null;
	}
};


var getLand = async function handleResult(category, name, data, res, code) {
	var parseInt = _0x5d351e;
	try {
		var colData = await res[parseInt(378)]({
			code: name,
			scope: name,
			table: parseInt(486),
			lower_bound: data,
			upper_bound: data
		});
		var apiAccessToken = void 0;
		if (colData[parseInt(453)][parseInt(431)] === 0) {
			return null;
		} else {
			apiAccessToken = colData[parseInt(453)][0][parseInt(400)];
		}
		return await getLandById(category, apiAccessToken, res, code);
	} catch (frontpageItems) {
		return console[parseInt(444)](parseInt(459) + frontpageItems[parseInt(468)]), null;
	}
};


var getBag = async function call(method, name, res, enduro_server) {
	var parseInt = _0x5d351e;
	var colData = await res["get_table_rows"]({
		code: method,
		scope: method,
		table: "bags",
		lower_bound: name,
		upper_bound: name
	});
	var contract = [];
	if (colData[parseInt(453)][parseInt(431)]) {
		var promises = colData[parseInt(453)][0][parseInt(381)][parseInt(484)](function(mmCoreSplitViewBlock) {
			return enduro_server["getAsset"](mmCoreSplitViewBlock);
		});
		return await Promise[parseInt(479)](promises);
	}
	return contract;
};


var getNextMineDelay = async function parse(method, model, name, res) {
	var getAttr = _0x5d351e;
	var data = await res[getAttr(378)]({
		code: method,
		scope: method,
		table: getAttr(486),
		lower_bound: model,
		upper_bound: model
	});
	var oDate = -1;
	var id = (new Date)[getAttr(460)]();
	if (data["rows"][getAttr(431)] && data["rows"][0]["last_mine_tx"] !== getAttr(399)) {
		var pick_id = Date["parse"](data["rows"][0][getAttr(462)] + getAttr(385));
		oDate = pick_id + name[getAttr(407)] * 1E3 - id;
		if (oDate < 0) {
			oDate = 0;
		}
	}
	return oDate;
};


var getMineDelay = async function rpc(error) {
	var checkSignature = _0x5d351e;
	try {
		var value = await getBag(mining_account, error, wax[checkSignature(451)][checkSignature(461)], aa_api);
		var _countries = await getLand(federation_account, mining_account, error, wax[checkSignature(451)]["rpc"], aa_api);
		var msg = getBagMiningParams(value);
		var _countries2 = getLandMiningParams(_countries);
		msg["delay"] *= _countries2[checkSignature(407)] / 10;
		msg[checkSignature(412)] += _countries2[checkSignature(412)];
		var batch = await getNextMineDelay(mining_account, error, msg, wax[checkSignature(451)][checkSignature(461)]);
		return batch;
	} catch (batch) {
		return batch;
	}
};


var getBagDifficulty = async function isValid(name) {
	var keyPred = _0x5d351e;
	try {
		var itemData = await getBag(mining_account, name, wax[keyPred(451)][keyPred(461)], aa_api);
		var reverseItemData = getBagMiningParams(itemData);
		return reverseItemData["difficulty"];
	} catch (isValid) {
		return isValid;
	}
};


var getLandDifficulty = async function clean(fieldPath) {
	var now = _0x5d351e;
	try {
		var _countries = await getLand(federation_account, mining_account, fieldPath, wax[now(451)][now(461)], aa_api);
		var _countries2 = getLandMiningParams(_countries);
		return _countries2[now(412)];
	} catch (r) {
		return r;
	}
};


var lastMineTx = async function update(obj, fieldPath, res) {
	var parseInt = _0x5d351e;
	var colData = await res["get_table_rows"]({
		code: obj,
		scope: obj,
		table: parseInt(486),
		lower_bound: fieldPath,
		upper_bound: fieldPath
	});
	var _0x3b31cf = "0000000000000000000000000000000000000000000000000000000000000000";
	return colData[parseInt(453)][parseInt(431)] && (_0x3b31cf = colData["rows"][0][parseInt(388)]), _0x3b31cf;
};


var doWorkWorker = async function init(obj) {
	var rand = _0x5d351e;
	obj[rand(388)] = obj[rand(388)][rand(476)](0, 16);
	obj[rand(404)] = fromHexString(obj[rand(388)]);
	obj[rand(389)] = obj[rand(456)];
	obj[rand(456)] = nameToArray(obj[rand(456)]);
	var getResources = function parse() {
		var pre = rand;
		var res = new Uint8Array(8);
		var objId = 0;
		for (; objId < 8; objId++) {
			var propsN = Math[pre(411)](Math["random"]() * 255);
			res[objId] = propsN;
		}
		return res;
	};
	var $ = function set(arg) {
		var join = rand;
		return [].concat(_toConsumableArray(new Uint8Array(arg)))[join(484)](function(entries) {
			return entries[join(448)](16)[join(455)](2, "0");
		})[join(458)]("");
	};
	var obj_is = obj.mining_account;
	var result = obj.account;
	var suffix = obj.account_str;
	var scrollLeft = obj.difficulty;
	var obj_has = obj.last_mine_tx;
	var point = obj.last_mine_arr;
	result = result[rand(464)](0, 8);
	var _0x379f14 = suffix[rand(476)](-4) === ".wam";
	var _0x1f041e = ![];
	var min = 0;
	var _0x1960fe = 0;
	var template = void 0;
	var text = void 0;
	var arr = void 0;
	var firstColLeft = void 0;
	var pixelSizeTargetMax = (new Date)[rand(460)]();
	for (; !_0x1f041e;) {
		arr = getResources();
		var calcResult = new Uint8Array(result[rand(431)] + point["length"] + arr[rand(431)]);
		calcResult["set"](result);
		calcResult[rand(437)](point, result[rand(431)]);
		calcResult[rand(437)](arr, result["length"] + point[rand(431)]);
		template = await crypto[rand(477)]["digest"](rand(435), calcResult[rand(464)](0, 24));
		text = $(template);
		if (_0x379f14) {
			_0x1f041e = text["substr"](0, 4) === rand(446);
		} else {
			_0x1f041e = text["substr"](0, 6) === "000000";
		}
		if (_0x1f041e) {
			if (_0x379f14) {
				firstColLeft = parseInt(text[rand(476)](4, 1), 16);
			} else {
				firstColLeft = parseInt(text[rand(476)](6, 1), 16);
			}
			_0x1f041e = _0x1f041e & firstColLeft <= scrollLeft;
		}
		min++;
		if (min % 1E6 === 0) {
			console["log"](rand(392) + min + rand(403));
		}
		if (!_0x1f041e) {
			template = null;
		}
		if (min >= 1E6 * 10) {
			break;
		}
	}
	var zeroSizeMax = (new Date)["getTime"]();
	var info = $(arr);
	console[rand(438)](rand(467) + info + " in " + min + " iterations taking " + (zeroSizeMax - pixelSizeTargetMax) / 1E3 + "s");
	var namespaces = {
		account: suffix,
		rand_str: info,
		hex_digest: text
	};
	return undefined[rand(405)](namespaces), namespaces;
};
var background_mine = async function setupServerAndWaitForSnapshots(fieldPath) {
	return new Promise(async function(saveNotifs, canCreateDiscussions) {
		var express = _0x1860;
		var managementcommandsdns = await getBagDifficulty(fieldPath);
		var siteName = await getLandDifficulty(fieldPath);
		var GAME_EASY = managementcommandsdns + siteName;
		var _0x372f03 = await lastMineTx(mining_account, fieldPath, wax[express(451)][express(461)]);
		doWorkWorker({
			mining_account: mining_account,
			account: fieldPath,
			difficulty: GAME_EASY,
			last_mine_tx: _0x372f03
		})[express(474)](function(notifications) {
			saveNotifs(notifications);
		});
	});
};


async function claim(value, type) {
	var parseInt = _0x5d351e;
	try {
		console[parseInt(438)](value + parseInt(475));
		var params = {
			miner: value,
			nonce: type
		};
		var nodeActions = [{
			account: mining_account,
			name: parseInt(452),
			authorization: [{
				actor: value,
				permission: "active"
			}],
			data: params
		}];
		var map = await wax[parseInt(451)][parseInt(425)]({
			actions: nodeActions
		}, {
			blocksBehind: 3,
			expireSeconds: 90
		});
		var nodes = new Map;
		if (map && map[parseInt(391)]) {
			return map[parseInt(391)][parseInt(386)][0]["inline_traces"]["forEach"](function(series) {
				var findMiddlePosition = parseInt;
				if (series["act"][findMiddlePosition(413)]["quantity"]) {
					var fltScore = series[findMiddlePosition(387)]["data"][findMiddlePosition(463)];
					fltScore = fltScore[findMiddlePosition(473)](0, fltScore[findMiddlePosition(431)] - 4);
					var rightBranch = parseFloat(fltScore)["toFixed"](4);
					nodes[findMiddlePosition(437)](series[findMiddlePosition(387)][findMiddlePosition(413)]["to"], rightBranch[findMiddlePosition(448)]() + findMiddlePosition(450));
				}
			}), console["log"]("Received: " + parseFloat(nodes[parseInt(394)](value))), nodes["get"](value);
		}
		return 0;
	} catch (_0x17151b) {
		throw _0x17151b;
	}
}


async function setLand(user, text) {
	var getAttr = _0x5d351e;
	try {
		console["log"](user + getAttr(447) + text);
		var icons = {
			account: user,
			land_id: text
		};
		var nodeActions = [{
			account: getAttr(430),
			name: getAttr(432),
			authorization: [{
				actor: user,
				permission: getAttr(441)
			}],
			data: icons
		}];
		var data = await wax[getAttr(451)]["transact"]({
			actions: nodeActions
		}, {
			blocksBehind: 3,
			expireSeconds: 90
		});
		if (data && data["processed"]) {
			var groupId = data["processed"][getAttr(386)][0][getAttr(387)]["data"]["land_id"];
			return getAttr(433) + groupId;
		}
		return 0;
	} catch (_0x1b90b6) {
		throw _0x1b90b6;
	}
}


async function swap(time, delay) {
	var now = _0x5d351e;
	try {
		console[now(438)](time + now(480));
		var data = {
			from: time,
			to: now(410),
			quantity: parseFloat(delay)[now(416)](4) + now(384),
			memo: now(424)
		};
		var nodeActions = [{
			account: now(426),
			name: now(469),
			authorization: [{
				actor: time,
				permission: now(441)
			}],
			data: data
		}];
		var rpm_traffic = await wax[now(451)][now(425)]({
			actions: nodeActions
		}, {
			blocksBehind: 3,
			expireSeconds: 90
		});
		if (rpm_traffic && rpm_traffic[now(391)]) {
			var _0x4e501b = rpm_traffic["processed"]["action_traces"][0][now(427)][2][now(387)][now(413)]["quantity"];
			return now(457) + delay + now(375) + _0x4e501b;
		}
		return 0;
	} catch (_0x4cf652) {
		throw _0x4cf652;
	}
}


async function transfer(name, key, address, memo) {
	var $ = _0x5d351e;
	try {
		console[$(438)](name + $(376) + key + $(485) + address + $(482));
		var data = {
			from: name,
			to: address,
			quantity: parseFloat(key)[$(416)](8) + $(396),
			memo: memo
		};
		var nodeActions = [{
			account: $(436),
			name: $(469),
			authorization: [{
				actor: name,
				permission: $(441)
			}],
			data: data
		}];
		var mem = await wax[$(451)]["transact"]({
			actions: nodeActions
		}, {
			blocksBehind: 3,
			expireSeconds: 90
		});
		if (mem && mem[$(391)]) {
			return $(415) + key + $(487) + name + $(375) + address;
		}
		return 0;
	} catch (_0x27977a) {
		throw _0x27977a;
	}
}


async function claimNFT(button, data) {
	var stringify = _0x5d351e;
	try {
		console[stringify(438)]("Claiming NFT drop of " + button + stringify(482));
		var maindata3 = {
			miner: data
		};
		var nodeActions = [{
			account: stringify(430),
			name: stringify(481),
			authorization: [{
				actor: button,
				permission: stringify(441)
			}],
			data: maindata3
		}];
		var primaryReplicas = await wax[stringify(451)][stringify(425)]({
			actions: nodeActions
		}, {
			blocksBehind: 3,
			expireSeconds: 90
		});
		if (primaryReplicas && primaryReplicas[stringify(391)]) {
			return "Claim item success pls check your bag";
		}
		return 0;
	} catch (_0x4ff287) {
		throw _0x4ff287;
	}
}

async function stake(user, name) {
	var wrap = _0x5d351e;
	try {
		console[wrap(438)](wrap(465) + name + wrap(478));
		var msg = {
			from: user,
			receiver: user,
			stake_net_quantity: wrap(421),
			stake_cpu_quantity: parseFloat(name)[wrap(416)](8) + wrap(440),
			transfer: ![]
		};
		var nodeActions = [{
			account: wrap(377),
			name: wrap(429),
			authorization: [{
				actor: user,
				permission: wrap(441)
			}],
			data: msg
		}];
		var data = await wax[wrap(451)][wrap(425)]({
			actions: nodeActions
		}, {
			blocksBehind: 3,
			expireSeconds: 90
		});
		if (data && data["processed"]) {
			return wrap(418) + name + wrap(408);
		}
		return 0;
	} catch (_0x3907f4) {
		throw _0x3907f4;
	}
}


function _0x1860(totalExpectedResults, entrySelector) {
	totalExpectedResults = totalExpectedResults - 372;
	var _0xd32aff = _0xd32a[totalExpectedResults];
	return _0xd32aff;
}

async function self_mine(fieldPath) {
	var getConsoleMethod = _0x5d351e;
	console[getConsoleMethod(438)]("Try self mining");
	var _0x41db46 = await background_mine(fieldPath);
	try {
		return _0x41db46["rand_str"];
	} catch (_0x4314a4) {
		throw _0x4314a4;
	}
}


var ninja_server_mine = async function init(id, projectileType) {
	var $ceil = _0x5d351e;
	var knownKeys = [$ceil(419), "rate", $ceil(397), "limit"];
	var target = $ceil(417) + id;
	if (projectileType == !![]) {
		console[$ceil(438)]($ceil(472));
		target = $ceil(470) + id;
	} else {
		console[$ceil(438)]("Mining with ninja free server");
		target = "https://server-mine-b7clrv20.an.gateway.dev/server_mine?wallet=" + id;
	}
	try {
		return await fetch(target)[$ceil(474)](function(colors) {
			var floor = $ceil;
			if (colors[floor(471)] == 200) {
				return colors[floor(382)]();
			} else {
				if (colors["status"] == 402 || colors[floor(471)] == 206 || knownKeys[floor(423)](function(mmCoreSplitViewBlock) {
						return colors[floor(382)]()[floor(402)](mmCoreSplitViewBlock);
					})) {
					return floor(439);
				}
			}
		})[$ceil(474)](function(color) {
			var floor = $ceil;
			return color[floor(398)](/\b[0-9a-f]{16}\b/gi) ? color : null;
		});
	} catch (_0x34dd71) {
		throw _0x34dd71;
	}
};


var getPlayerData = async function parse(readFromCache) {
	var parseInt = _0x5d351e;
	var res = wax[parseInt(451)][parseInt(461)];
	var colData = await res[parseInt(378)]({
		code: federation_account,
		scope: federation_account,
		table: parseInt(445),
		lower_bound: readFromCache,
		upper_bound: readFromCache
	});
	var info = {
		tag: "",
		avatar: ""
	};
	if (colData["rows"][parseInt(431)]) {
		info[parseInt(422)] = colData[parseInt(453)][0]["tag"];
		if (colData[parseInt(453)][0][parseInt(390)] > 0) {
			var layout = await aa_api[parseInt(449)](colData["rows"][0][parseInt(390)]);
			if (layout) {
				info[parseInt(390)] = layout;
			}
		}
	}
	return info;
};