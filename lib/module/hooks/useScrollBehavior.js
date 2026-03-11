"use strict";

import { c as _c } from "react-compiler-runtime";
import { useEffect, useRef, useState } from 'react';
import { calculateScrollOffsetForNewMessage, shouldScrollToNewMessage } from "../scrollCalculations.js";
export const useScrollBehavior = t0 => {
  const $ = _c(26);
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
  const scrollMetricsRef = useRef(t1);
  const [hasPerformedInitialScrollToEnd, setHasPerformedInitialScrollToEnd] = useState(false);
  const [isPlaceholderStable, setIsPlaceholderStable] = useState(false);
  const needsScrollToNewMessageRef = useRef(false);
  const wasWhitespaceVisibleRef = useRef(false);
  const prevStreamingRef = useRef(isStreaming);
  const prevDataCountRef = useRef(data.length);
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
  useEffect(t2, t3);
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
      const shouldScroll = shouldScrollToNewMessage({
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
      const baseOffset = calculateScrollOffsetForNewMessage(contentHeight, placeholderHeight, anchorMessageHeight);
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
//# sourceMappingURL=useScrollBehavior.js.map