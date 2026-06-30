import type { SystemStyleObject } from "#styled-system/types";

export type WithCSSProp<Props> = Omit<Props, "css"> & { css?: SystemStyleObject };
