"use strict";

import { c as _c } from "react-compiler-runtime";
import { View } from 'react-native';
import { useStreamingMessageListInternal } from "./StreamingMessageListContext.js";
import { jsx as _jsx } from "react/jsx-runtime";
export const StreamingItem = t0 => {
  const $ = _c(5);
  const {
    children
  } = t0;
  const {
    setStreamingContentHeight
  } = useStreamingMessageListInternal();
  let t1;
  if ($[0] !== setStreamingContentHeight) {
    t1 = event => {
      setStreamingContentHeight(event.nativeEvent.layout.height);
    };
    $[0] = setStreamingContentHeight;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const handleLayout = t1;
  let t2;
  if ($[2] !== children || $[3] !== handleLayout) {
    t2 = /*#__PURE__*/_jsx(View, {
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
//# sourceMappingURL=StreamingItem.js.map