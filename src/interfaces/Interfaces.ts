export interface InputContent {
  name?: string;
  [key: string]: any;
}

export interface QueryData {
  [key: string]: string;
}

export interface ButtonData {
  withInput: boolean;
  component: InputContent;
  text: string;
}
