type PlaceholderState = {
    shouldShowPlaceholder: boolean;
    placeholderHeight: number;
    flatListHeight: number;
    containerPadding: number;
    anchorMessageHeight: number;
    needsScrollToNewMessage: boolean;
    isPlaceholderStable: boolean;
};
export declare const calculateScrollOffsetForNewMessage: (contentHeight: number, placeholderHeight: number, anchorMessageHeight: number) => number;
export declare const shouldScrollToNewMessage: (state: Pick<PlaceholderState, "needsScrollToNewMessage" | "placeholderHeight" | "isPlaceholderStable" | "anchorMessageHeight" | "flatListHeight" | "containerPadding">) => boolean;
export declare const isWhitespaceInViewport: ({ contentOffset, layoutMeasurement, contentSize, placeholderHeight, }: {
    contentOffset: number;
    layoutMeasurement: number;
    contentSize: number;
    placeholderHeight: number;
}) => boolean;
export {};
//# sourceMappingURL=scrollCalculations.d.ts.map