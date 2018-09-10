"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _noImportant = require("aphrodite/no-important");

var _theme = require("../theme");

var _theme2 = _interopRequireDefault(_theme);

var _deepMerge = require("../utils/deepMerge");

var _deepMerge2 = _interopRequireDefault(_deepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
  tag: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: 2,
    cursor: "pointer",
    display: "inline-block",
    height: _theme2.default.thumbnail.size,
    margin: _theme2.default.thumbnail.gutter,
    overflow: "hidden",
    width: _theme2.default.thumbnail.size
  }
};

function Tag(_ref, _ref2) {
  var index = _ref.index,
      src = _ref.src,
      thumbnail = _ref.thumbnail,
      active = _ref.active,
      _onClick = _ref.onClick,
      value = _ref.value,
      selectedTags = _ref.selectedTags;
  var theme = _ref2.theme;

  var classes = _noImportant.StyleSheet.create((0, _deepMerge2.default)(defaultStyles, theme));
  var selected = Array.isArray(selectedTags) ? selectedTags.indexOf(value) > -1 : false;
  return _react2.default.createElement(
    "span",
    {
      onClick: function onClick() {
        return _onClick(value);
      },
      className: "label label-default " + (selected ? "active" : ""),
      style: {
        backgroundColor: "gray",
        marginRight: "5px",
        padding: "5px",
        borderRadius: "10px",
        cursor: "pointer"
      }
    },
    value
  );
}

Tag.propTypes = {
  value: _propTypes2.default.string
};

Tag.contextTypes = {
  theme: _propTypes2.default.object.isRequired
};

exports.default = Tag;