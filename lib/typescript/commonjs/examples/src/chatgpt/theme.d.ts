export declare const theme: {
    readonly colors: {
        readonly bgPrimary: "#212121";
        readonly bgSecondary: "#303030";
        readonly bgTertiary: "#424242";
        readonly messageSurface: "#424242";
        readonly textPrimary: "#ececec";
        readonly textSecondary: "#ffffffb3";
        readonly textTertiary: "#ffffff94";
        readonly textQuaternary: "#ffffff69";
        readonly mainSurfaceSecondary: "#2f2f2f";
        readonly borderXlight: "#ffffff0d";
        readonly borderLight: "#ffffff1a";
        readonly borderMedium: "#ffffff26";
        readonly submitBtnBg: "#ececec";
        readonly submitBtnText: "#212121";
        readonly interactiveBgSecondaryHover: "#ffffff1a";
    };
    readonly spacing: {
        readonly xs: 4;
        readonly sm: 8;
        readonly md: 12;
        readonly lg: 16;
        readonly xl: 20;
        readonly xxl: 28;
    };
    readonly typography: {
        readonly body: {
            readonly fontSize: 16;
            readonly lineHeight: 24;
        };
        readonly bodyLarge: {
            readonly fontSize: 18;
            readonly lineHeight: 28;
        };
        readonly headerTitle: {
            readonly fontSize: 20;
            readonly lineHeight: 24;
            readonly fontWeight: "600";
        };
        readonly headerSubtitle: {
            readonly fontSize: 14;
            readonly lineHeight: 20;
        };
    };
    readonly animation: {
        readonly springCommon: {
            readonly damping: 20;
            readonly stiffness: 300;
        };
        readonly springFast: {
            readonly damping: 25;
            readonly stiffness: 400;
        };
        readonly fadeInDuration: 700;
        readonly slideUpDuration: 700;
    };
    readonly layout: {
        readonly bubbleRadius: 18;
        readonly maxUserBubbleWidth: "70%";
        readonly userBubblePaddingH: 16;
        readonly userBubblePaddingV: 6;
        readonly composerRadius: 28;
        readonly composerHeight: 56;
        readonly composerPadding: 10;
        readonly composerGap: 6;
        readonly sendButtonSize: 36;
        readonly headerHeight: 56;
        readonly headerPadding: 8;
        readonly headerTitleSize: 18;
    };
    readonly shadows: {
        readonly composer: {
            readonly shadowColor: "#000";
            readonly shadowOffset: {
                readonly width: 0;
                readonly height: 2;
            };
            readonly shadowOpacity: 0.1;
            readonly shadowRadius: 8;
            readonly elevation: 4;
        };
        readonly header: {
            readonly shadowColor: "#000";
            readonly shadowOffset: {
                readonly width: 0;
                readonly height: 1;
            };
            readonly shadowOpacity: 0.05;
            readonly shadowRadius: 2;
            readonly elevation: 2;
        };
    };
};
export type Theme = typeof theme;
//# sourceMappingURL=theme.d.ts.map