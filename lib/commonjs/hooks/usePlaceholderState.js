"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePlaceholderState = void 0;
var _reactCompilerRuntime = require("react-compiler-runtime");
var _react = require("react");
var _lodash = _interopRequireDefault(require("lodash.debounce"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DEFAULT_DEBOUNCE_MS = 150;
const calculatePlaceholderHeight = (containerHeight, anchorMessageHeight, streamingContentHeight, containerPadding) => {
  const contentHeight = anchorMessageHeight + streamingContentHeight;
  const availableSpace = containerHeight - containerPadding;
  return Math.max(0, availableSpace - contentHeight);
};
const usePlaceholderState = config => {
  const $ = (0, _reactCompilerRuntime.c)(29);
  const debounceMs = config?.debounceMs ?? DEFAULT_DEBOUNCE_MS;
  const [debouncedPlaceholderHeight, setDebouncedPlaceholderHeight] = (0, _react.useState)(0);
  const [placeholderHeight, setPlaceholderHeight] = (0, _react.useState)(0);
  const [containerHeight, setContainerHeightState] = (0, _react.useState)(0);
  const [anchorMessageHeight, setAnchorMessageHeightState] = (0, _react.useState)(0);
  const [whitespacePhase, setWhitespacePhase] = (0, _react.useState)("none");
  const [containerPadding, setContainerPaddingState] = (0, _react.useState)(0);
  const [paddingTop, setPaddingTopState] = (0, _react.useState)(0);
  const containerHeightRef = (0, _react.useRef)(0);
  const anchorMessageHeightRef = (0, _react.useRef)(0);
  const streamingContentHeightRef = (0, _react.useRef)(0);
  const containerPaddingRef = (0, _react.useRef)(0);
  const placeholderHeightRef = (0, _react.useRef)(0);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = height => {
      setDebouncedPlaceholderHeight(height);
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] !== debounceMs) {
    t1 = (0, _lodash.default)(t0, debounceMs);
    $[1] = debounceMs;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const debouncedSetPlaceholderHeight = t1;
  let t2;
  let t3;
  if ($[3] !== debouncedSetPlaceholderHeight) {
    t2 = () => () => {
      debouncedSetPlaceholderHeight.cancel();
    };
    t3 = [debouncedSetPlaceholderHeight];
    $[3] = debouncedSetPlaceholderHeight;
    $[4] = t2;
    $[5] = t3;
  } else {
    t2 = $[4];
    t3 = $[5];
  }
  (0, _react.useEffect)(t2, t3);
  let t4;
  if ($[6] !== debouncedSetPlaceholderHeight) {
    t4 = () => {
      const height_0 = calculatePlaceholderHeight(containerHeightRef.current, anchorMessageHeightRef.current, streamingContentHeightRef.current, containerPaddingRef.current);
      placeholderHeightRef.current = height_0;
      setPlaceholderHeight(height_0);
      debouncedSetPlaceholderHeight(height_0);
    };
    $[6] = debouncedSetPlaceholderHeight;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  const recalculatePlaceholder = t4;
  let t5;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = () => placeholderHeightRef.current;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  const getPlaceholderHeight = t5;
  let t6;
  if ($[9] !== recalculatePlaceholder) {
    t6 = height_1 => {
      containerHeightRef.current = height_1;
      setContainerHeightState(height_1);
      recalculatePlaceholder();
    };
    $[9] = recalculatePlaceholder;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  const setContainerHeight = t6;
  let t7;
  if ($[11] !== recalculatePlaceholder) {
    t7 = height_2 => {
      anchorMessageHeightRef.current = height_2;
      streamingContentHeightRef.current = 0;
      setAnchorMessageHeightState(height_2);
      recalculatePlaceholder();
    };
    $[11] = recalculatePlaceholder;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  const setAnchorMessageHeight = t7;
  let t8;
  if ($[13] !== recalculatePlaceholder) {
    t8 = (height_3, t9) => {
      const force = t9 === undefined ? false : t9;
      if (!force && streamingContentHeightRef.current > height_3) {
        return;
      }
      streamingContentHeightRef.current = height_3;
      recalculatePlaceholder();
    };
    $[13] = recalculatePlaceholder;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  const setStreamingContentHeight = t8;
  let t9;
  if ($[15] !== recalculatePlaceholder) {
    t9 = (padding, topPadding) => {
      containerPaddingRef.current = padding;
      setContainerPaddingState(padding);
      setPaddingTopState(topPadding);
      recalculatePlaceholder();
    };
    $[15] = recalculatePlaceholder;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  const setContainerPadding = t9;
  let t10;
  if ($[17] !== anchorMessageHeight || $[18] !== containerHeight || $[19] !== containerPadding || $[20] !== debouncedPlaceholderHeight || $[21] !== paddingTop || $[22] !== placeholderHeight || $[23] !== setAnchorMessageHeight || $[24] !== setContainerHeight || $[25] !== setContainerPadding || $[26] !== setStreamingContentHeight || $[27] !== whitespacePhase) {
    t10 = {
      debouncedPlaceholderHeight,
      placeholderHeight,
      getPlaceholderHeight,
      containerHeight,
      anchorMessageHeight,
      whitespacePhase,
      setContainerHeight,
      setAnchorMessageHeight,
      setStreamingContentHeight,
      setWhitespacePhase,
      containerPadding,
      paddingTop,
      setContainerPadding
    };
    $[17] = anchorMessageHeight;
    $[18] = containerHeight;
    $[19] = containerPadding;
    $[20] = debouncedPlaceholderHeight;
    $[21] = paddingTop;
    $[22] = placeholderHeight;
    $[23] = setAnchorMessageHeight;
    $[24] = setContainerHeight;
    $[25] = setContainerPadding;
    $[26] = setStreamingContentHeight;
    $[27] = whitespacePhase;
    $[28] = t10;
  } else {
    t10 = $[28];
  }
  return t10;
};
exports.usePlaceholderState = usePlaceholderState;
//# sourceMappingURL=usePlaceholderState.js.map