export interface InputProps extends Props {
  placeholder?: string;
  center?: boolean;
  px?: number;
  py?: number;
}

export interface SearchInputProps extends InputProps, Props {}

export interface TextAreaProps extends InputProps, Props {
  rows?: number;
  placeholder?: string;
}
