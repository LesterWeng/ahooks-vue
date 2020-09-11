import { Ref } from '@vue/composition-api';

export enum OPERATOR {
  '等于' = '=',
  '大于' = '>',
  '小于' = '<',
  '大于等于' = '>=',
  '小于等于' = '<=',
  '不等于' = '!=',
}

export type DimensionOptions = Record<string, string | number>;

export interface Options {
  dimensions?: Ref<DimensionOptions> | DimensionOptions;
  measures?: Ref<DimensionOptions> | DimensionOptions;
  series?: Ref<DimensionOptions> | DimensionOptions;
}

export interface CubeSettings {
  dimension?: string;
  measure?: string;
  series?: string;
  //
  bySeries?: boolean;
  countField?: string;
}

export interface Filter {
  field: string;
  operator: OPERATOR;
  value: string | number;
}

export type dataSource = Ref<Record<string, any>[]> | Record<string, any>[];
export type dataSourceRef = Ref<Record<string, any>[]>;

export type Columns = Ref<Record<string, string>> | Record<string, string>;
export type ColumnsRef = Ref<Record<string, string>>;

export default {};