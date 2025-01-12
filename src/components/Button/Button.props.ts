export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: string;
  location?: 'header' | 'footer';
  state?: 'primary' | 'secondary';
}
