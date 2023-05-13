import { Vector3 } from "three"

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


export interface vpgLine {
  start: VPGCord,
  end: VPGCord,
  color: string,
  side: "left" | "right" | "top" | "bottom" | "front" | "back",
  thickness: number,
  length: number
  scale?: Vector3,
  rotation?: Vector3,
  position?: Vector3,
  data?: any
  polyline?: any
}
