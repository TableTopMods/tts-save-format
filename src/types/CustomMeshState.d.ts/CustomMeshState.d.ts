/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CustomMeshState {
  MeshURL: string;
  DiffuseURL: string;
  NormalURL: string;
  CollideURL?: string;
  Convex: boolean;
  /**
   * 0 = Plastic, 1 = Wood, 2 = Metal, 3 = Cardboard
   */
  MaterialIndex: 0 | 1 | 2 | 3;
  /**
   * 0 = Generic, 1 = Figurine, 2 = Dice, 3 = Coin, 4 = Board, 5 = Chip, 6 = Bag, 7 = Infinite
   */
  TypeIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  CustomShader: CustomShaderState;
  CastShadows: boolean;
}
/**
 * Used to override the shader.
 */
export interface CustomShaderState {
  SpecularColor: ColourState;
  SpecularIntensity: number;
  SpecularSharpness: number;
  FresnelStrength: number;
}
export interface ColourState {
  r: number;
  g: number;
  b: number;
}
