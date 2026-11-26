/**
 * TypeScript sidecar for `./ABFieldCore.js` (extends `ABMLClass`).
 *
 * @see ../../platform/ABMLClass.js
 */
import type ABDefinition from "../../platform/ABDefinition.js";
import { ABMLClass } from "../../types/abPlatformStack.js";

/** Parent object surface used by fields (see `ABFieldCore` constructor). */
export interface ABFieldParentObject {
  AB: unknown;
  name?: string;
  alias?: string;
  isAPI?: boolean;
  isImported?: boolean;
  isExternal?: boolean;
  connName?: string;
  urlField(): string;
  dbSchemaName(): string;
  dbTableName(): string;
  model(): { modelKnexRefresh(): void };
}

export interface ABFieldValueValidator {
  addError(column: string, message: string): void;
}

/** @see ./ABFieldCore.js */
export default class ABFieldCore extends ABMLClass {
  static get reservedNames(): string[];
  static defaultValues(): Record<string, unknown>;

  defaults: Record<string, unknown>;
  object: ABFieldParentObject;

  id?: string;
  type?: string;
  key: string;
  icon?: string;
  label: string;
  columnName: string;
  isImported: number;
  settings: Record<string, unknown> & {
    showIcon?: number;
    required?: number;
    unique?: number;
    width?: number;
    label?: string;
  };
  alias?: string;

  constructor(
    values: Record<string, unknown>,
    object: ABFieldParentObject,
    fieldDefaults?: Record<string, unknown>,
  );

  fieldKey(): string;
  fieldOrmTypes(): unknown[];
  fieldMysqlTypes(): unknown[];
  fieldIcon(): string | undefined;
  fieldMenuName(): string | undefined;
  fieldDescription(): string | undefined;
  fieldIsFilterable(): number | boolean;
  fieldIsSortable(): number | boolean;
  fieldUseAsLabel(): number | boolean;
  fieldSupportRequire(): boolean;
  fieldSupportQuery(): boolean;

  toObj(): {
    id?: string;
    type: string;
    key: string;
    icon?: string;
    isImported: number;
    columnName: string;
    settings: Record<string, unknown>;
    translations: unknown;
  };

  defaultCheck<T>(val: T | undefined, defaultVal: T): T;
  fromValues(values: Record<string, unknown>): void;
  urlPointer(): string;
  defaultValue(values: Record<string, unknown>): void;
  isValidData(data: Record<string, unknown>, validator: ABFieldValueValidator): void;
  get isMultilingual(): boolean;
  dataValue(rowData: Record<string, unknown> | null | undefined): unknown;
  format(rowData: Record<string, unknown> | null | undefined): string;
  toDefinition(): ABDefinition;
}
