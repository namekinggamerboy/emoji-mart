import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { getData } from '../utils';
import NimbleEmoji from './emoji/nimble-emoji';
import SkinsEmoji from './skins-emoji';
import SkinsDot from './skins-dot';
export default class Preview extends React.PureComponent {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = {
      emoji: null
    };
  }

  render() {
    var {
      emoji
    } = this.state,
        {
      emojiProps,
      skinsProps,
      showSkinTones,
      title,
      emoji: idleEmoji,
      i18n,
      showPreview
    } = this.props;

    if (emoji && showPreview) {
      var emojiData = getData(emoji, null, null, this.data),
          {
        emoticons = []
      } = emojiData,
          knownEmoticons = [],
          listedEmoticons = [];
      emoticons.forEach(emoticon => {
        if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) {
          return;
        }

        knownEmoticons.push(emoticon.toLowerCase());
        listedEmoticons.push(emoticon);
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "emoji-mart-preview"
      }, /*#__PURE__*/React.createElement("div", {
        className: "emoji-mart-preview-emoji",
        "aria-hidden": "true"
      }, NimbleEmoji(_objectSpread({
        key: emoji.id,
        emoji: emoji,
        data: this.data
      }, emojiProps))), /*#__PURE__*/React.createElement("div", {
        className: "emoji-mart-preview-data",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("div", {
        className: "emoji-mart-preview-name"
      }, emoji.name), /*#__PURE__*/React.createElement("div", {
        className: "emoji-mart-preview-shortnames"
      }, emojiData.short_names.map(short_name => /*#__PURE__*/React.createElement("span", {
        key: short_name,
        className: "emoji-mart-preview-shortname"
      }, ":", short_name, ":"))), /*#__PURE__*/React.createElement("div", {
        className: "emoji-mart-preview-emoticons"
      }, listedEmoticons.map(emoticon => /*#__PURE__*/React.createElement("span", {
        key: emoticon,
        className: "emoji-mart-preview-emoticon"
      }, emoticon)))));
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "emoji-mart-preview"
      }, /*#__PURE__*/React.createElement("div", {
        className: "emoji-mart-preview-emoji",
        "aria-hidden": "true"
      }, idleEmoji && idleEmoji.length && NimbleEmoji(_objectSpread({
        emoji: idleEmoji,
        data: this.data
      }, emojiProps))), /*#__PURE__*/React.createElement("div", {
        className: "emoji-mart-preview-data",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("span", {
        className: "emoji-mart-title-label"
      }, title)), showSkinTones && /*#__PURE__*/React.createElement("div", {
        className: `emoji-mart-preview-skins${skinsProps.skinEmoji ? ' custom' : ''}`
      }, skinsProps.skinEmoji ? /*#__PURE__*/React.createElement(SkinsEmoji, {
        skin: skinsProps.skin,
        emojiProps: emojiProps,
        data: this.data,
        skinEmoji: skinsProps.skinEmoji,
        i18n: i18n,
        onChange: skinsProps.onChange
      }) : /*#__PURE__*/React.createElement(SkinsDot, {
        skin: skinsProps.skin,
        i18n: i18n,
        onChange: skinsProps.onChange
      })));
    }
  }

}
Preview.propTypes
/* remove-proptypes */
= {
  showSkinTones: PropTypes.bool,
  title: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  emojiProps: PropTypes.object.isRequired,
  skinsProps: PropTypes.object.isRequired
};
Preview.defaultProps = {
  showSkinTones: true,
  onChange: () => {}
};