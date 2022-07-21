import { Model } from "./model.js";
export declare class View {
    private readonly model;
    private readonly canvas;
    private readonly graphics;
    private readonly stepTextureOn;
    private readonly stepTextureOff;
    private readonly wavesData;
    private readonly waves;
    private readonly fluidMaps;
    private fluidMapIndex;
    private stepIndex;
    constructor(model: Model, canvas: HTMLCanvasElement);
    private initEvents;
    private setStep;
    private touchFluid;
    private getStep;
    private processAnimationFrame;
    private touchActives;
    private processFluid;
    get domElement(): HTMLCanvasElement;
    private static createStepTexture;
    private static create2dContext;
}
