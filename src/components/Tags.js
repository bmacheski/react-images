import PropTypes from "prop-types";
import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite/no-important";
import theme from "../theme";
import deepMerge from "../utils/deepMerge";
import Tag from "../components/Tag";

export default class Tags extends Component {
  render() {
    const {
      handleTagClick,
      editingTags,
      selectedTags,
      tags,
      toggleEditTags
    } = this.props;

    return (
      <div
        className={css(
          editingTags ? classes.editingTags : classes.paginatedThumbnails
        )}
      >
        {editingTags && (
          <React.Fragment>
            <div
              style={
                {
                  // margin: "0"
                  // top: "50%",
                  // transform: "translateY(-50)",
                  // position: "absolute",
                  // left: "-75px",
                  // height: "100%",
                  // paddingRight: "4px",
                  // color: "white",
                  // marginRight: "10px"
                }
              }
            >
              {/* <span onClick={toggleEditTags} style={{ cursor: "pointer" }}>
                Apply <i className="fas fa-check" />
              </span>
              <br /> */}
              <span onClick={toggleEditTags} style={{ cursor: "pointer" }}>
                Dismiss <i className="fas fa-times" />
              </span>
            </div>

            {tags.map(x => {
              return (
                <Tag
                  value={x}
                  selectedTags={selectedTags}
                  onClick={handleTagClick}
                />
              );
            })}
          </React.Fragment>
        )}
      </div>
    );
  }
}

const classes = StyleSheet.create({
  paginatedThumbnails: {
    bottom: theme.container.gutter.vertical,
    height: theme.thumbnail.size,
    padding: "0 50px",
    position: "absolute",
    textAlign: "center",
    whiteSpace: "nowrap",
    left: "50%",
    transform: "translateX(-50%)"
  },
  editingThumbnails: {
    bottom: theme.container.gutter.vertical,
    height: theme.thumbnail.size,
    padding: "0 20px",
    position: "absolute",
    textAlign: "center",
    whiteSpace: "nowrap",
    left: "50%",
    transform: "translateX(-50%)"
  }
});
