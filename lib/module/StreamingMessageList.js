"use strict";

import { c as _c } from "react-compiler-runtime";
import { isValidElement, useContext, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { LegendList } from '@legendapp/list';
import { usePlaceholderState } from "./hooks/usePlaceholderState.js";
import { useScrollBehavior } from "./hooks/useScrollBehavior.js";
import { isWhitespaceInViewport } from "./scrollCalculations.js";
import { StreamingMessageListInternalContext, StreamingMessageListPublicContext } from "./StreamingMessageListContext.js";
import { jsx as _jsx } from "react/jsx-runtime";
const DEFAULT_PLACEHOLDER_STABLE_DELAY_MS = 200;
const DEFAULT_IS_AT_END_THRESHOLD = 10;
export const StreamingMessageList = t0 => {
  const $ = _c(94);
  let ListEmptyComponent;
  let ListFooterComponent;
  let ListHeaderComponent;
  let config;
  let contentContainerStyle;
  let data;
  let keyExtractor;
  let onContentSizeChange;
  let onScroll;
  let ref;
  let renderItem;
  let restProps;
  let t1;
  if ($[0] !== t0) {
    ({
      data,
      isStreaming: t1,
      config,
      keyExtractor,
      renderItem,
      ListHeaderComponent,
      ListFooterComponent,
      ListEmptyComponent,
      onScroll,
      onContentSizeChange,
      contentContainerStyle,
      ref,
      ...restProps
    } = t0);
    $[0] = t0;
    $[1] = ListEmptyComponent;
    $[2] = ListFooterComponent;
    $[3] = ListHeaderComponent;
    $[4] = config;
    $[5] = contentContainerStyle;
    $[6] = data;
    $[7] = keyExtractor;
    $[8] = onContentSizeChange;
    $[9] = onScroll;
    $[10] = ref;
    $[11] = renderItem;
    $[12] = restProps;
    $[13] = t1;
  } else {
    ListEmptyComponent = $[1];
    ListFooterComponent = $[2];
    ListHeaderComponent = $[3];
    config = $[4];
    contentContainerStyle = $[5];
    data = $[6];
    keyExtractor = $[7];
    onContentSizeChange = $[8];
    onScroll = $[9];
    ref = $[10];
    renderItem = $[11];
    restProps = $[12];
    t1 = $[13];
  }
  const isStreaming = t1 === undefined ? false : t1;
  const placeholderStableDelayMs = config?.placeholderStableDelayMs ?? DEFAULT_PLACEHOLDER_STABLE_DELAY_MS;
  const isAtEndThreshold = config?.isAtEndThreshold ?? DEFAULT_IS_AT_END_THRESHOLD;
  const internalRef = useRef(null);
  const listRef = ref ?? internalRef;
  const prevDataLengthRef = useRef(0);
  const {
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
  } = usePlaceholderState(config);
  const t2 = data.length > 0;
  let t3;
  if ($[14] !== anchorMessageHeight || $[15] !== containerHeight || $[16] !== containerPadding || $[17] !== data || $[18] !== debouncedPlaceholderHeight || $[19] !== isStreaming || $[20] !== listRef || $[21] !== paddingTop || $[22] !== t2) {
    t3 = {
      messagesListRef: listRef,
      data,
      isStreaming,
      isExistingThread: t2,
      placeholderHeight: debouncedPlaceholderHeight,
      anchorMessageHeight,
      containerHeight,
      containerPadding,
      paddingTop
    };
    $[14] = anchorMessageHeight;
    $[15] = containerHeight;
    $[16] = containerPadding;
    $[17] = data;
    $[18] = debouncedPlaceholderHeight;
    $[19] = isStreaming;
    $[20] = listRef;
    $[21] = paddingTop;
    $[22] = t2;
    $[23] = t3;
  } else {
    t3 = $[23];
  }
  const {
    scrollMetricsRef,
    performInitialScroll,
    performScrollToNewMessage,
    updateScrollMetrics,
    setHasPerformedInitialScrollToEnd,
    setIsPlaceholderStable,
    checkWhitespaceDismissal,
    resetWhitespaceVisibility
  } = useScrollBehavior(t3);
  const publicContext = useContext(StreamingMessageListPublicContext);
  let t4;
  if ($[24] !== debouncedPlaceholderHeight || $[25] !== getPlaceholderHeight || $[26] !== isAtEndThreshold || $[27] !== publicContext) {
    t4 = (contentOffsetY, layoutHeight, contentHeight) => {
      if (!publicContext) {
        return;
      }
      const currentPlaceholderHeight = getPlaceholderHeight();
      const targetContentHeight = contentHeight - debouncedPlaceholderHeight + currentPlaceholderHeight;
      const atEnd = contentOffsetY + layoutHeight >= targetContentHeight - isAtEndThreshold;
      const fills = targetContentHeight > layoutHeight;
      publicContext.setIsAtEnd(atEnd);
      publicContext.setContentFillsViewport(fills);
    };
    $[24] = debouncedPlaceholderHeight;
    $[25] = getPlaceholderHeight;
    $[26] = isAtEndThreshold;
    $[27] = publicContext;
    $[28] = t4;
  } else {
    t4 = $[28];
  }
  const updateScrollMetricsState = t4;
  const prevStreamingRef = useRef(isStreaming);
  let t5;
  let t6;
  if ($[29] !== data.length || $[30] !== isStreaming || $[31] !== placeholderHeight || $[32] !== resetWhitespaceVisibility || $[33] !== setAnchorMessageHeight || $[34] !== setStreamingContentHeight || $[35] !== setWhitespacePhase || $[36] !== whitespacePhase) {
    t5 = () => {
      const prevLength = prevDataLengthRef.current;
      const wasStreaming = prevStreamingRef.current;
      prevDataLengthRef.current = data.length;
      prevStreamingRef.current = isStreaming;
      const isNewConversationFirstMessage = isStreaming && prevLength === 0 && data.length === 1;
      const isNewMessageInExistingConversation = isStreaming && !wasStreaming && prevLength >= 2;
      if (isNewConversationFirstMessage || isNewMessageInExistingConversation) {
        setWhitespacePhase("active");
        resetWhitespaceVisibility();
        setAnchorMessageHeight(0);
        setStreamingContentHeight(0, true);
      }
      if (wasStreaming && !isStreaming && whitespacePhase !== "dismissed") {
        if (placeholderHeight > 0) {
          setWhitespacePhase("visible_static");
        } else {
          setWhitespacePhase("none");
        }
      }
    };
    t6 = [data.length, isStreaming, placeholderHeight, whitespacePhase, setWhitespacePhase, resetWhitespaceVisibility, setAnchorMessageHeight, setStreamingContentHeight];
    $[29] = data.length;
    $[30] = isStreaming;
    $[31] = placeholderHeight;
    $[32] = resetWhitespaceVisibility;
    $[33] = setAnchorMessageHeight;
    $[34] = setStreamingContentHeight;
    $[35] = setWhitespacePhase;
    $[36] = whitespacePhase;
    $[37] = t5;
    $[38] = t6;
  } else {
    t5 = $[37];
    t6 = $[38];
  }
  useEffect(t5, t6);
  let t7;
  if ($[39] !== onContentSizeChange || $[40] !== performInitialScroll || $[41] !== performScrollToNewMessage || $[42] !== scrollMetricsRef || $[43] !== updateScrollMetricsState) {
    t7 = (width, height) => {
      onContentSizeChange?.(width, height);
      const didPerformInitialScroll = performInitialScroll();
      if (!didPerformInitialScroll) {
        performScrollToNewMessage(height);
      }
      updateScrollMetricsState(scrollMetricsRef.current.contentOffset, scrollMetricsRef.current.layoutMeasurement, height);
    };
    $[39] = onContentSizeChange;
    $[40] = performInitialScroll;
    $[41] = performScrollToNewMessage;
    $[42] = scrollMetricsRef;
    $[43] = updateScrollMetricsState;
    $[44] = t7;
  } else {
    t7 = $[44];
  }
  const handleContentSizeChange = t7;
  let t8;
  if ($[45] !== contentContainerStyle || $[46] !== scrollMetricsRef || $[47] !== setContainerHeight || $[48] !== setContainerPadding || $[49] !== updateScrollMetrics || $[50] !== updateScrollMetricsState) {
    t8 = event => {
      const height_0 = event.nativeEvent.layout.height;
      setContainerHeight(height_0);
      updateScrollMetrics(scrollMetricsRef.current.contentOffset, height_0);
      if (contentContainerStyle) {
        const style = StyleSheet.flatten(contentContainerStyle);
        const padding = typeof style.padding === "number" ? style.padding : 0;
        const paddingBottom = typeof style.paddingBottom === "number" ? style.paddingBottom : padding;
        const topPadding = typeof style.paddingTop === "number" ? style.paddingTop : padding;
        setContainerPadding(paddingBottom + topPadding, topPadding);
      }
      updateScrollMetricsState(scrollMetricsRef.current.contentOffset, height_0, scrollMetricsRef.current.contentSize);
    };
    $[45] = contentContainerStyle;
    $[46] = scrollMetricsRef;
    $[47] = setContainerHeight;
    $[48] = setContainerPadding;
    $[49] = updateScrollMetrics;
    $[50] = updateScrollMetricsState;
    $[51] = t8;
  } else {
    t8 = $[51];
  }
  const handleLayout = t8;
  let t9;
  if ($[52] !== checkWhitespaceDismissal || $[53] !== debouncedPlaceholderHeight || $[54] !== onScroll || $[55] !== setWhitespacePhase || $[56] !== updateScrollMetrics || $[57] !== updateScrollMetricsState || $[58] !== whitespacePhase) {
    t9 = event_0 => {
      onScroll?.(event_0);
      const {
        contentOffset,
        layoutMeasurement,
        contentSize
      } = event_0.nativeEvent;
      updateScrollMetrics(contentOffset.y, layoutMeasurement.height, contentSize.height);
      updateScrollMetricsState(contentOffset.y, layoutMeasurement.height, contentSize.height);
      if (whitespacePhase === "visible_static" || whitespacePhase === "active") {
        const isVisible = isWhitespaceInViewport({
          contentOffset: contentOffset.y,
          layoutMeasurement: layoutMeasurement.height,
          contentSize: contentSize.height,
          placeholderHeight: debouncedPlaceholderHeight
        });
        checkWhitespaceDismissal(isVisible, whitespacePhase, () => {
          setWhitespacePhase("dismissed");
        });
      }
    };
    $[52] = checkWhitespaceDismissal;
    $[53] = debouncedPlaceholderHeight;
    $[54] = onScroll;
    $[55] = setWhitespacePhase;
    $[56] = updateScrollMetrics;
    $[57] = updateScrollMetricsState;
    $[58] = whitespacePhase;
    $[59] = t9;
  } else {
    t9 = $[59];
  }
  const handleScroll = t9;
  let t10;
  if ($[60] !== setHasPerformedInitialScrollToEnd) {
    t10 = () => {
      setHasPerformedInitialScrollToEnd(true);
    };
    $[60] = setHasPerformedInitialScrollToEnd;
    $[61] = t10;
  } else {
    t10 = $[61];
  }
  const handleEndReached = t10;
  let t11;
  if ($[62] !== ListFooterComponent || $[63] !== debouncedPlaceholderHeight || $[64] !== whitespacePhase) {
    t11 = () => {
      const listFooterComponent = ListFooterComponent ? /*#__PURE__*/isValidElement(ListFooterComponent) ? ListFooterComponent : /*#__PURE__*/_jsx(ListFooterComponent, {}) : null;
      const shouldRenderPlaceholder = (whitespacePhase === "active" || whitespacePhase === "visible_static") && debouncedPlaceholderHeight > 0;
      if (!shouldRenderPlaceholder) {
        return listFooterComponent;
      }
      return /*#__PURE__*/_jsx(View, {
        style: {
          height: debouncedPlaceholderHeight
        },
        children: listFooterComponent
      });
    };
    $[62] = ListFooterComponent;
    $[63] = debouncedPlaceholderHeight;
    $[64] = whitespacePhase;
    $[65] = t11;
  } else {
    t11 = $[65];
  }
  const renderListFooterComponent = t11;
  let t12;
  let t13;
  if ($[66] !== debouncedPlaceholderHeight || $[67] !== placeholderStableDelayMs || $[68] !== setIsPlaceholderStable) {
    t12 = () => {
      if (debouncedPlaceholderHeight > 0) {
        const timer = setTimeout(() => {
          setIsPlaceholderStable(true);
        }, placeholderStableDelayMs);
        return () => clearTimeout(timer);
      }
    };
    t13 = [debouncedPlaceholderHeight, setIsPlaceholderStable, placeholderStableDelayMs];
    $[66] = debouncedPlaceholderHeight;
    $[67] = placeholderStableDelayMs;
    $[68] = setIsPlaceholderStable;
    $[69] = t12;
    $[70] = t13;
  } else {
    t12 = $[69];
    t13 = $[70];
  }
  useEffect(t12, t13);
  let t14;
  if ($[71] !== setAnchorMessageHeight || $[72] !== setStreamingContentHeight) {
    t14 = {
      setAnchorMessageHeight,
      setStreamingContentHeight
    };
    $[71] = setAnchorMessageHeight;
    $[72] = setStreamingContentHeight;
    $[73] = t14;
  } else {
    t14 = $[73];
  }
  const internalContextValue = t14;
  if (!renderItem) {
    throw new Error("renderItem is required for StreamingMessageList");
  }
  let t15;
  if ($[74] !== renderListFooterComponent) {
    t15 = renderListFooterComponent();
    $[74] = renderListFooterComponent;
    $[75] = t15;
  } else {
    t15 = $[75];
  }
  let t16;
  if ($[76] !== ListEmptyComponent || $[77] !== ListHeaderComponent || $[78] !== contentContainerStyle || $[79] !== data || $[80] !== handleContentSizeChange || $[81] !== handleEndReached || $[82] !== handleLayout || $[83] !== handleScroll || $[84] !== isStreaming || $[85] !== keyExtractor || $[86] !== listRef || $[87] !== renderItem || $[88] !== restProps || $[89] !== t15) {
    t16 = /*#__PURE__*/_jsx(LegendList, {
      ref: listRef,
      ...restProps,
      ListEmptyComponent: ListEmptyComponent,
      ListFooterComponent: t15,
      ListHeaderComponent: ListHeaderComponent,
      contentContainerStyle: contentContainerStyle,
      data: data,
      extraData: isStreaming,
      keyExtractor: keyExtractor,
      keyboardShouldPersistTaps: "handled",
      onContentSizeChange: handleContentSizeChange,
      onEndReached: handleEndReached,
      onEndReachedThreshold: 0.2,
      onLayout: handleLayout,
      onScroll: handleScroll,
      renderItem: renderItem,
      scrollEventThrottle: 16
    });
    $[76] = ListEmptyComponent;
    $[77] = ListHeaderComponent;
    $[78] = contentContainerStyle;
    $[79] = data;
    $[80] = handleContentSizeChange;
    $[81] = handleEndReached;
    $[82] = handleLayout;
    $[83] = handleScroll;
    $[84] = isStreaming;
    $[85] = keyExtractor;
    $[86] = listRef;
    $[87] = renderItem;
    $[88] = restProps;
    $[89] = t15;
    $[90] = t16;
  } else {
    t16 = $[90];
  }
  let t17;
  if ($[91] !== internalContextValue || $[92] !== t16) {
    t17 = /*#__PURE__*/_jsx(StreamingMessageListInternalContext.Provider, {
      value: internalContextValue,
      children: t16
    });
    $[91] = internalContextValue;
    $[92] = t16;
    $[93] = t17;
  } else {
    t17 = $[93];
  }
  return t17;
};
//# sourceMappingURL=StreamingMessageList.js.map