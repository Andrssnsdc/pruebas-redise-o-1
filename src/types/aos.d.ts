declare module 'aos' {
    export function init(options?: {
        duration?: number;
        once?: boolean;
        offset?: number;
        easing?: string;
        disable?: boolean | 'mobile' | 'tablet';
    }): void;
}