import type { LegendListRef } from '@legendapp/list';
import type { WhitespacePhase } from '../types';
type ScrollMetrics = {
    contentOffset: number;
    layoutMeasurement: number;
    contentSize: number;
};
export declare const useScrollBehavior: ({ messagesListRef, data, isStreaming, isExistingThread, placeholderHeight, anchorMessageHeight, containerHeight, containerPadding, paddingTop, }: {
    messagesListRef: React.RefObject<LegendListRef | null>;
    data: unknown[];
    isStreaming: boolean;
    isExistingThread: boolean;
    placeholderHeight: number;
    anchorMessageHeight: number;
    containerHeight: number;
    containerPadding: number;
    paddingTop: number;
}) => {
    scrollMetricsRef: import("react").RefObject<ScrollMetrics>;
    hasPerformedInitialScrollToEnd: boolean;
    performInitialScroll: () => boolean;
    performScrollToNewMessage: (contentHeight: number) => boolean;
    updateScrollMetrics: (contentOffset: number, layoutHeight: number, contentSize?: number) => void;
    setHasPerformedInitialScrollToEnd: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setIsPlaceholderStable: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    checkWhitespaceDismissal: (isCurrentlyVisible: boolean, whitespacePhase: WhitespacePhase, onDismiss: () => void) => void;
    resetWhitespaceVisibility: () => void;
};
export {};
//# sourceMappingURL=useScrollBehavior.d.ts.map