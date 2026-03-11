import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { type StreamingMessageListRef } from 'react-native-streaming-message-list';
type ScrollToBottomButtonProps = {
    listRef: React.RefObject<StreamingMessageListRef | null>;
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
};
export declare const ScrollToBottomButton: ({ listRef, children, style, onPress, }: ScrollToBottomButtonProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=ScrollToBottomButton.d.ts.map