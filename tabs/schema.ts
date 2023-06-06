export interface TextAreaInput {
  type: 'textarea';
  label: string;
  default?: "Tab Content";
}

export interface TextInput {
  type: 'text';
  label: string;
  default?: string;
}

export interface ColorInput {
  type: 'color';
  label: string;
  default?: string;
}

export interface Blocks {
  type: string;
  settings: {
    [key: string]: TextInput | TextAreaInput | ColorInput
  };
}

export interface SectionSchema {
  settings: {
    [key: string]: TextInput | TextAreaInput | ColorInput
  };
  blocks: Blocks[];
}