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
    <button
      className={cn(
        'button',
        `button-${location}`,
        `button-${state}`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
