export declare class Pattern {
    private readonly data;
    constructor();
    serialize(): string;
    deserialize(code: string): void;
    setStep(x: number, y: number, value: boolean): void;
    getStep(x: number, y: number): boolean;
    clear(): void;
}
export declare class Model {
    readonly pattern: Pattern;
    stepIndex: number;
    constructor();
}
