"use strict";

const PLACEHOLDER_HEIGHT_TOLERANCE = 50;
export const calculateScrollOffsetForNewMessage = (contentHeight, placeholderHeight, anchorMessageHeight) => {
  return contentHeight - placeholderHeight - anchorMessageHeight;
};
export const shouldScrollToNewMessage = state => {
  if (!state.needsScrollToNewMessage || state.placeholderHeight <= 0 || !state.isPlaceholderStable || state.anchorMessageHeight <= 0) {
    return false;
  }
  const availableSpace = state.flatListHeight - state.containerPadding;
  const expectedMinPlaceholderHeight = availableSpace - state.anchorMessageHeight - PLACEHOLDER_HEIGHT_TOLERANCE;
  return state.placeholderHeight >= expectedMinPlaceholderHeight;
};
export const isWhitespaceInViewport = ({
  contentOffset,
  layoutMeasurement,
  contentSize,
  placeholderHeight
}) => {
  if (placeholderHeight <= 0 || contentSize <= 0) {
    return false;
  }
  const viewportBottom = contentOffset + layoutMeasurement;
  const whitespaceStart = contentSize - placeholderHeight;
  return viewportBottom > whitespaceStart;
};
//# sourceMappingURL=scrollCalculations.js.map