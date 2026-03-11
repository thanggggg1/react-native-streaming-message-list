import type { ReactNode } from 'react';
export type StreamingMessageListInternalContextType = {
    setAnchorMessageHeight: (height: number) => void;
    setStreamingContentHeight: (height: number, force?: boolean) => void;
};
export declare const StreamingMessageListInternalContext: import("react").Context<StreamingMessageListInternalContextType | null>;
export declare const useStreamingMessageListInternal: () => StreamingMessageListInternalContextType;
export type ScrollMetrics = {
    isAtEnd: boolean;
    contentFillsViewport: boolean;
};
type ScrollMetricsContextType = ScrollMetrics & {
    setIsAtEnd: (value: boolean) => void;
    setContentFillsViewport: (value: boolean) => void;
};
export declare const StreamingMessageListPublicContext: import("react").Context<ScrollMetricsContextType | null>;
export declare const useStreamingMessageList: () => ScrollMetrics;
type StreamingMessageListProviderProps = {
    children: ReactNode;
};
export declare const StreamingMessageListProvider: ({ children, }: StreamingMessageListProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=StreamingMessageListContext.d.ts.map