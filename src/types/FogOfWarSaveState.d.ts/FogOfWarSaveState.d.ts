/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface FogOfWarSaveState {
  HideGmPointer: boolean;
  HideObjects: boolean;
  Height: number;
  /**
   * Dictionary<string, HashSet<int>
   */
  RevealedLocations: {
    [k: string]: unknown;
  };
}
