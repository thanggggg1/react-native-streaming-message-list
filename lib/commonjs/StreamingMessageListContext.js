"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStreamingMessageListInternal = exports.useStreamingMessageList = exports.StreamingMessageListPublicContext = exports.StreamingMessageListProvider = exports.StreamingMessageListInternalContext = void 0;
var _reactCompilerRuntime = require("react-compiler-runtime");
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
const StreamingMessageListInternalContext = exports.StreamingMessageListInternalContext = /*#__PURE__*/(0, _react.createContext)(null);
const useStreamingMessageListInternal = () => {
  const context = (0, _react.useContext)(StreamingMessageListInternalContext);
  if (!context) {
    throw new Error("useStreamingMessageListInternal must be used within StreamingMessageList");
  }
  return context;
};
exports.useStreamingMessageListInternal = useStreamingMessageListInternal;
const StreamingMessageListPublicContext = exports.StreamingMessageListPublicContext = /*#__PURE__*/(0, _react.createContext)(null);
const useStreamingMessageList = () => {
  const $ = (0, _reactCompilerRuntime.c)(3);
  const context = (0, _react.useContext)(StreamingMessageListPublicContext);
  if (!context) {
    throw new Error("useStreamingMessageList must be used within StreamingMessageListProvider");
  }
  let t0;
  if ($[0] !== context.contentFillsViewport || $[1] !== context.isAtEnd) {
    t0 = {
      isAtEnd: context.isAtEnd,
      contentFillsViewport: context.contentFillsViewport
    };
    $[0] = context.contentFillsViewport;
    $[1] = context.isAtEnd;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  return t0;
};
exports.useStreamingMessageList = useStreamingMessageList;
const StreamingMessageListProvider = t0 => {
  const $ = (0, _reactCompilerRuntime.c)(6);
  const {
    children
  } = t0;
  const [isAtEnd, setIsAtEnd] = (0, _react.useState)(true);
  const [contentFillsViewport, setContentFillsViewport] = (0, _react.useState)(false);
  let t1;
  if ($[0] !== contentFillsViewport || $[1] !== isAtEnd) {
    t1 = {
      isAtEnd,
      contentFillsViewport,
      setIsAtEnd,
      setContentFillsViewport
    };
    $[0] = contentFillsViewport;
    $[1] = isAtEnd;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const value = t1;
  let t2;
  if ($[3] !== children || $[4] !== value) {
    t2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(StreamingMessageListPublicContext.Provider, {
      value: value,
      children: children
    });
    $[3] = children;
    $[4] = value;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  return t2;
};
exports.StreamingMessageListProvider = StreamingMessageListProvider;
//# sourceMappingURL=StreamingMessageListContext.js.map