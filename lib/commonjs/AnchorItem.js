"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnchorItem = void 0;
var _reactCompilerRuntime = require("react-compiler-runtime");
var _reactNative = require("react-native");
var _StreamingMessageListContext = require("./StreamingMessageListContext.js");
var _jsxRuntime = require("react/jsx-runtime");
const AnchorItem = t0 => {
  const $ = (0, _reactCompilerRuntime.c)(5);
  const {
    children
  } = t0;
  const {
    setAnchorMessageHeight
  } = (0, _StreamingMessageListContext.useStreamingMessageListInternal)();
  let t1;
  if ($[0] !== setAnchorMessageHeight) {
    t1 = event => {
      setAnchorMessageHeight(event.nativeEvent.layout.height);
    };
    $[0] = setAnchorMessageHeight;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const handleLayout = t1;
  let t2;
  if ($[2] !== children || $[3] !== handleLayout) {
    t2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      onLayout: handleLayout,
      children: children
    });
    $[2] = children;
    $[3] = handleLayout;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  return t2;
};
exports.AnchorItem = AnchorItem;
//# sourceMappingURL=AnchorItem.js.map