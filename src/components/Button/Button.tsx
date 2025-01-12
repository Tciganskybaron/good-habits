import cn from 'classnames';

import { ButtonProps } from './Button.props';
import './index.css';

function Button(props: ButtonProps) {
  const {
    children,
    location = 'header',
    state = 'primary',
    className,
    ...rest
  } = props;

  return (
    <a
      className={cn(
        'button',
        `button-${location}`,
        `button-${state}`,
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

export default Button;
