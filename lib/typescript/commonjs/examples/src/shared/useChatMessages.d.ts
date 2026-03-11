import { FadeIn } from 'react-native-reanimated';
import type { Message } from './types';
type UseChatMessagesOptions = {
    initialDelay?: number;
    chunkDelay?: number;
};
export declare const useChatMessages: (options?: UseChatMessagesOptions) => {
    messages: Message[];
    isStreaming: boolean;
    sendMessage: (text: string) => void;
    clearIsNew: (id: string) => void;
    getMessageMeta: (item: Message, index: number) => {
        isLastUserMessage: boolean;
        isLastAssistantMessage: boolean;
        isStreamingMessage: boolean;
        entering: FadeIn | undefined;
    };
};
export {};
//# sourceMappingURL=useChatMessages.d.ts.map