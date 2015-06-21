"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Composite = (function () {
	function Composite(geometry, materials) {
		_classCallCheck(this, Composite);

		//super(geometry, materials);

		this.idMatrix = Composite.defaultMatrix();
		this.bones = [];
		this.boneMatrices = [];
		//...
	}

	_createClass(Composite, [{
		key: "update",
		value: function update(camera) {}
	}, {
		key: "boneCount",
		get: function get() {
			return this.bones.length;
		}
	}, {
		key: "matrixType",
		set: function set(matrixType) {
			this.idMatrix = Composite[matrixType]();
		}
	}], [{
		key: "defaultMatrix",
		value: function defaultMatrix() {
			return {};
		}
	}]);

	return Composite;
})();

//...
//super.update();
//# sourceMappingURL=composite.js.map
