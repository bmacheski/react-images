"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _noImportant = require("aphrodite/no-important");

var _theme = require("../theme");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = require("../utils/deepMerge");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

var _Tag = require("../components/Tag");

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tags = function (_Component) {
  _inherits(Tags, _Component);

  function Tags() {
    _classCallCheck(this, Tags);

    return _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).apply(this, arguments));
  }

  _createClass(Tags, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          handleTagClick = _props.handleTagClick,
          editingTags = _props.editingTags,
          selectedTags = _props.selectedTags,
          tags = _props.tags,
          toggleEditTags = _props.toggleEditTags;


      return _react2.default.createElement(
        "div",
        {
          className: (0, _noImportant.css)(editingTags ? classes.editingTags : classes.paginatedThumbnails)
        },
        editingTags && _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            "div",
            { style: { color: "white", float: "left" } },
            _react2.default.createElement(
              "span",
              { onClick: toggleEditTags, style: { cursor: "pointer" } },
              "Dismiss ",
              _react2.default.createElement("i", { className: "fas fa-times" })
            )
          ),
          tags.map(function (x) {
            return _react2.default.createElement(_Tag2.default, {
              value: x,
              selectedTags: selectedTags,
              onClick: handleTagClick
            });
          })
        )
      );
    }
  }]);

  return Tags;
}(_react.Component);

exports.default = Tags;


var classes = _noImportant.StyleSheet.create({
  paginatedThumbnails: {
    bottom: _theme2.default.container.gutter.vertical,
    height: _theme2.default.thumbnail.size,
    padding: "0 50px",
    position: "absolute",
    textAlign: "center",
    whiteSpace: "nowrap",
    left: "50%",
    transform: "translateX(-50%)"
  },
  editingTags: {
    bottom: _theme2.default.container.gutter.vertical,
    height: _theme2.default.thumbnail.size,
    padding: "0 20px",
    position: "absolute",
    textAlign: "center",
    whiteSpace: "nowrap",
    left: "50%",
    transform: "translateX(-50%)"
  }
});