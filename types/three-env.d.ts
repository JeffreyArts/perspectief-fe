import { Scene,  Mesh, BoxGeometry, Material } from "three"

declare module "three" {
    export interface Scene {
      initialised?: boolean
    }
}

// Define a module augmentation to extend the Mesh type
declare module "three" {
  interface Mesh< TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
  > {
    data: any;
  }
}
