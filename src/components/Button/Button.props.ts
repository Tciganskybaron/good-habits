import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string;
  location?: 'header' | 'footer';
  state?: 'primary' | 'secondary';
}
