import PropTypes from "prop-types";
import React from "react";
import { css, StyleSheet } from "aphrodite/no-important";

import defaults from "../theme";
import deepMerge from "../utils/deepMerge";

const defaultStyles = {
  tag: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: 2,
    cursor: "pointer",
    display: "inline-block",
    height: defaults.thumbnail.size,
    margin: defaults.thumbnail.gutter,
    overflow: "hidden",
    width: defaults.thumbnail.size
  }
};

function Tag(
  { index, src, thumbnail, active, onClick, value, selectedTags },
  { theme }
) {
  const classes = StyleSheet.create(deepMerge(defaultStyles, theme));
  const selected = Array.isArray(selectedTags)
    ? selectedTags.indexOf(value) > -1
    : false;
  return (
    <span
      onClick={() => onClick(value)}
      className={`label label-default ${selected ? "active" : ""}`}
      style={{
        backgroundColor: "gray",
        marginRight: "5px",
        padding: "5px",
        borderRadius: "10px",
        cursor: "pointer"
      }}
    >
      {value}
    </span>
  );
}

Tag.propTypes = {
  value: PropTypes.string
};

Tag.contextTypes = {
  theme: PropTypes.object.isRequired
};

export default Tag;
