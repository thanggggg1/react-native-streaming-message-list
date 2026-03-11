import type { StreamingMessageListConfig, WhitespacePhase } from '../types';
export declare const usePlaceholderState: (config?: StreamingMessageListConfig) => {
    debouncedPlaceholderHeight: number;
    placeholderHeight: number;
    getPlaceholderHeight: () => number;
    containerHeight: number;
    anchorMessageHeight: number;
    whitespacePhase: WhitespacePhase;
    setContainerHeight: (height: number) => void;
    setAnchorMessageHeight: (height: number) => void;
    setStreamingContentHeight: (height: number, force?: boolean) => void;
    setWhitespacePhase: import("react").Dispatch<import("react").SetStateAction<WhitespacePhase>>;
    containerPadding: number;
    paddingTop: number;
    setContainerPadding: (padding: number, topPadding: number) => void;
};
//# sourceMappingURL=usePlaceholderState.d.ts.map