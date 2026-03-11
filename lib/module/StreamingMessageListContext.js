"use strict";

import { c as _c } from "react-compiler-runtime";
import { createContext, useContext, useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export const StreamingMessageListInternalContext = /*#__PURE__*/createContext(null);
export const useStreamingMessageListInternal = () => {
  const context = useContext(StreamingMessageListInternalContext);
  if (!context) {
    throw new Error("useStreamingMessageListInternal must be used within StreamingMessageList");
  }
  return context;
};
export const StreamingMessageListPublicContext = /*#__PURE__*/createContext(null);
export const useStreamingMessageList = () => {
  const $ = _c(3);
  const context = useContext(StreamingMessageListPublicContext);
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
export const StreamingMessageListProvider = t0 => {
  const $ = _c(6);
  const {
    children
  } = t0;
  const [isAtEnd, setIsAtEnd] = useState(true);
  const [contentFillsViewport, setContentFillsViewport] = useState(false);
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
    t2 = /*#__PURE__*/_jsx(StreamingMessageListPublicContext.Provider, {
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
//# sourceMappingURL=StreamingMessageListContext.js.map