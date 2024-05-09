export interface InputProps extends Props {
  placeholder?: string;
  center?: boolean;
  px?: number;
  py?: number;
  type?: string;
}

export interface SearchInputProps extends InputProps, Props {}

export interface TextAreaProps extends InputProps, Props {
  rows?: number;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
