"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollBehavior = void 0;
var _reactCompilerRuntime = require("react-compiler-runtime");
var _react = require("react");
var _scrollCalculations = require("../scrollCalculations.js");
const useScrollBehavior = t0 => {
  const $ = (0, _reactCompilerRuntime.c)(26);
  const {
    messagesListRef,
    data,
    isStreaming,
    isExistingThread,
    placeholderHeight,
    anchorMessageHeight,
    containerHeight,
    containerPadding,
    paddingTop
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      contentOffset: 0,
      layoutMeasurement: 0,
      contentSize: 0
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const scrollMetricsRef = (0, _react.useRef)(t1);
  const [hasPerformedInitialScrollToEnd, setHasPerformedInitialScrollToEnd] = (0, _react.useState)(false);
  const [isPlaceholderStable, setIsPlaceholderStable] = (0, _react.useState)(false);
  const needsScrollToNewMessageRef = (0, _react.useRef)(false);
  const wasWhitespaceVisibleRef = (0, _react.useRef)(false);
  const prevStreamingRef = (0, _react.useRef)(isStreaming);
  const prevDataCountRef = (0, _react.useRef)(data.length);
  let t2;
  let t3;
  if ($[1] !== data.length || $[2] !== isStreaming) {
    t2 = () => {
      const wasStreaming = prevStreamingRef.current;
      const prevCount = prevDataCountRef.current;
      prevStreamingRef.current = isStreaming;
      prevDataCountRef.current = data.length;
      const justStartedStreaming = isStreaming && !wasStreaming;
      const isExistingConversation = prevCount >= 2;
      if (justStartedStreaming && isExistingConversation) {
        needsScrollToNewMessageRef.current = true;
      }
    };
    t3 = [isStreaming, data.length];
    $[1] = data.length;
    $[2] = isStreaming;
    $[3] = t2;
    $[4] = t3;
  } else {
    t2 = $[3];
    t3 = $[4];
  }
  (0, _react.useEffect)(t2, t3);
  let t4;
  if ($[5] !== data.length || $[6] !== hasPerformedInitialScrollToEnd || $[7] !== isExistingThread || $[8] !== isStreaming || $[9] !== messagesListRef) {
    t4 = () => {
      if (hasPerformedInitialScrollToEnd) {
        return false;
      }
      if (data.length === 0) {
        return false;
      }
      const isNewConversationFirstMessage = isStreaming && data.length <= 2;
      const shouldScrollToEnd = isExistingThread && !isNewConversationFirstMessage;
      if (shouldScrollToEnd) {
        messagesListRef.current?.scrollToEnd({
          animated: false
        });
        setHasPerformedInitialScrollToEnd(true);
        return true;
      }
      setHasPerformedInitialScrollToEnd(true);
      return true;
    };
    $[5] = data.length;
    $[6] = hasPerformedInitialScrollToEnd;
    $[7] = isExistingThread;
    $[8] = isStreaming;
    $[9] = messagesListRef;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  const performInitialScroll = t4;
  let t5;
  if ($[11] !== anchorMessageHeight || $[12] !== containerHeight || $[13] !== containerPadding || $[14] !== isPlaceholderStable || $[15] !== messagesListRef || $[16] !== paddingTop || $[17] !== placeholderHeight) {
    t5 = contentHeight => {
      const shouldScroll = (0, _scrollCalculations.shouldScrollToNewMessage)({
        needsScrollToNewMessage: needsScrollToNewMessageRef.current,
        placeholderHeight,
        isPlaceholderStable,
        anchorMessageHeight,
        flatListHeight: containerHeight,
        containerPadding
      });
      if (!shouldScroll) {
        return false;
      }
      const baseOffset = (0, _scrollCalculations.calculateScrollOffsetForNewMessage)(contentHeight, placeholderHeight, anchorMessageHeight);
      const scrollOffset = Math.max(0, baseOffset - paddingTop);
      messagesListRef.current?.scrollToOffset({
        offset: scrollOffset,
        animated: true
      });
      needsScrollToNewMessageRef.current = false;
      return true;
    };
    $[11] = anchorMessageHeight;
    $[12] = containerHeight;
    $[13] = containerPadding;
    $[14] = isPlaceholderStable;
    $[15] = messagesListRef;
    $[16] = paddingTop;
    $[17] = placeholderHeight;
    $[18] = t5;
  } else {
    t5 = $[18];
  }
  const performScrollToNewMessage = t5;
  let t6;
  if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = (contentOffset, layoutHeight, contentSize) => {
      scrollMetricsRef.current = {
        contentOffset,
        layoutMeasurement: layoutHeight,
        contentSize: contentSize ?? scrollMetricsRef.current.contentSize
      };
    };
    $[19] = t6;
  } else {
    t6 = $[19];
  }
  const updateScrollMetrics = t6;
  let t7;
  if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = (isCurrentlyVisible, whitespacePhase, onDismiss) => {
      const wasVisible = wasWhitespaceVisibleRef.current;
      wasWhitespaceVisibleRef.current = isCurrentlyVisible;
      if ((whitespacePhase === "visible_static" || whitespacePhase === "active") && wasVisible && !isCurrentlyVisible) {
        onDismiss();
      }
    };
    $[20] = t7;
  } else {
    t7 = $[20];
  }
  const checkWhitespaceDismissal = t7;
  let t8;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = () => {
      wasWhitespaceVisibleRef.current = false;
    };
    $[21] = t8;
  } else {
    t8 = $[21];
  }
  const resetWhitespaceVisibility = t8;
  let t9;
  if ($[22] !== hasPerformedInitialScrollToEnd || $[23] !== performInitialScroll || $[24] !== performScrollToNewMessage) {
    t9 = {
      scrollMetricsRef,
      hasPerformedInitialScrollToEnd,
      performInitialScroll,
      performScrollToNewMessage,
      updateScrollMetrics,
      setHasPerformedInitialScrollToEnd,
      setIsPlaceholderStable,
      checkWhitespaceDismissal,
      resetWhitespaceVisibility
    };
    $[22] = hasPerformedInitialScrollToEnd;
    $[23] = performInitialScroll;
    $[24] = performScrollToNewMessage;
    $[25] = t9;
  } else {
    t9 = $[25];
  }
  return t9;
};
exports.useScrollBehavior = useScrollBehavior;
//# sourceMappingURL=useScrollBehavior.js.map