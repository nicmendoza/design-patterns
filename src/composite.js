/* jshint esnext: true */

// using symols to make protected members
"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NAMES = new WeakMap(),
    PRICES = new WeakMap(),
    POWER = new WeakMap();

var Equipment = (function () {
	function Equipment(name, price, power) {
		_classCallCheck(this, Equipment);

		// should be protected
		this._equipment = [];

		// private
		this._name = NAMES.set(this, name);
		this._price = PRICES.set(this, price);
		this._power = POWER.set(this, power);
	}

	_createClass(Equipment, [{
		key: "name",
		value: function name() {
			return NAMES.get(this);
		}
	}, {
		key: "power",
		value: function power() {
			return POWER.get(this);
		}
	}, {
		key: "netPrice",
		value: function netPrice() {
			return PRICES.get(this);
		}
	}, {
		key: "discountPrice",
		value: function discountPrice() {
			return this.discountPrice;
		}
	}, {
		key: "add",
		value: function add(equipment) {
			this._equipment.push(equipment);
		}
	}, {
		key: "remove",
		value: function remove(equipment) {
			this._equipment.splice(this._equipment.indexOf(equipment), 1);
		}
	}]);

	return Equipment;
})();

var CompositeEquipment = (function (_Equipment) {
	function CompositeEquipment() {
		_classCallCheck(this, CompositeEquipment);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_get(Object.getPrototypeOf(CompositeEquipment.prototype), "constructor", this).apply(this, args);

		this._basePrice = args[1] || 0;
	}

	_inherits(CompositeEquipment, _Equipment);

	_createClass(CompositeEquipment, [{
		key: "netPrice",
		value: function netPrice() {

			var total = this._basePrice;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this._equipment[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var equipment = _step.value;

					total += equipment.netPrice();
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return total;
		}
	}]);

	return CompositeEquipment;
})(Equipment);

var FloppyDisk = (function (_Equipment2) {
	function FloppyDisk() {
		_classCallCheck(this, FloppyDisk);

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		_get(Object.getPrototypeOf(FloppyDisk.prototype), "constructor", this).apply(this, args);
	}

	_inherits(FloppyDisk, _Equipment2);

	return FloppyDisk;
})(Equipment);

var Chassis = (function (_CompositeEquipment) {
	function Chassis() {
		_classCallCheck(this, Chassis);

		for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			args[_key3] = arguments[_key3];
		}

		_get(Object.getPrototypeOf(Chassis.prototype), "constructor", this).apply(this, args);
	}

	_inherits(Chassis, _CompositeEquipment);

	return Chassis;
})(CompositeEquipment);
//# sourceMappingURL=composite.js.map
