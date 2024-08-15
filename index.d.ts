declare module '@ryujaewan/animated' {
    import React from 'react';

    export interface InterpolateConfig {
        inputRange: number[];
        outputRange: number[];
        suffix?: string;
    }

    export interface AnimatedValue<T = number | string> {
        [Symbol.toPrimitive](hint: string): T;
        toString(): string;
        symbolTypeOf(): 'animatedValue';
        rootValue: string;
        setValue(value: T, stopAnimation?: boolean): void;
        getValue(): T;
        timing(config: {
            to: T;
            duration: number;
            fps?: number;
            easing?: (t: number) => number;
        }): {
            start(onDone?: () => void): void;
            stop(): void;
        };
        stopAnimation(): void;
    }

    export interface AnimatedProps extends React.HTMLAttributes<HTMLElement> {
        style?: React.CSSProperties & {
            [key: string]: AnimatedValue | any;
        };
    }

    export const Easing: {
        linear: (t: number) => number;
        easeIn: (t: number) => number;
        easeOut: (t: number) => number;
        easeInOut: (t: number) => number;
        easeIn3: (t: number) => number;
        easeOut3: (t: number) => number;
        easeInOut3: (t: number) => number;
        easeIn4: (t: number) => number;
        easeOut4: (t: number) => number;
        easeInOut4: (t: number) => number;
        easeIn5: (t: number) => number;
        easeOut5: (t: number) => number;
        easeInOut5: (t: number) => number;
        easeInOutSine: (t: number) => number;
    };

    export const animated: {
        useAnimatedValue: <T extends number | string>(initialValue: T, interpolate?: InterpolateConfig) => AnimatedValue<T>;
        div: React.FC<AnimatedProps>;
        span: React.FC<AnimatedProps>;
        p: React.FC<AnimatedProps>;
        h1: React.FC<AnimatedProps>;
        h2: React.FC<AnimatedProps>;
        h3: React.FC<AnimatedProps>;
        h4: React.FC<AnimatedProps>;
        h5: React.FC<AnimatedProps>;
        h6: React.FC<AnimatedProps>;
        button: React.FC<AnimatedProps>;
        a: React.FC<AnimatedProps>;
        img: React.FC<AnimatedProps & React.ImgHTMLAttributes<HTMLImageElement>>;
        ul: React.FC<AnimatedProps>;
        ol: React.FC<AnimatedProps>;
        li: React.FC<AnimatedProps>;
    };

    export const useAnimatedValue: <T extends number | string>(initialValue: T, interpolate?: InterpolateConfig) => AnimatedValue<T>;

    export function interpolateFn(config: {
        value: number;
        inputRange: number[];
        outputRange: (number | string)[];
        suffix?: string;
    }): string | number | null;
}