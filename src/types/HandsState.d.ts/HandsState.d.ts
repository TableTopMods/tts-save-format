/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface HandsState {
  Enable: boolean;
  DisableUnused: boolean;
  /**
   * Default = only owner can see, Reverse = opposite of default, Disable = hiding is disabled.
   */
  Hiding: "Default" | "Reverse" | "Disable";
  HandTransforms: HandTransformState[];
}
export interface HandTransformState {
  Color: string;
  Transform: TransformState;
}
export interface TransformState {
  posX: number;
  posY: number;
  posZ: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;
}
