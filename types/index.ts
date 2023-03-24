
export interface Quote {
    content: string,
    author: string,
}

export interface StripeCoordinates {
    x1: number,
    x2: number,
    y1: number,
    y2: number,
}

export interface StripeObject {
    id: string,
    v: StripeCoordinates,
    start: StripeCoordinates,
    end: StripeCoordinates,
    visible?: boolean,
}

export interface VPGCord {
    x:number, 
    y:number
}

export interface VPGSymbol {
    polylines: Array<Array<VPGCord>>,
    connectCords: Array<VPGCord>,
    width: number,
    height: number
}
export interface CubeDimensions {
    width: 0,
    height:0,
    depth:0
} 
export type VPGMask = number[][][]

interface VPGAlgorithm {
    type: string;
    startPoint: VPGCord;
    mirrorX: 0 | 1 | 2;
    mirrorY: 0 | 1 | 2;
    drawConnectLines: boolean;
  }
  
export interface VPGConfig {
    width: number;
    height: number;
    symbols: Array<VPGSymbol>;
    algorithm: VPGAlgorithm;
  }
  