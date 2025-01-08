import cn from 'classnames';
import { ButtonProps } from './Button.props';
import './index.css';

function Button(props: ButtonProps) {
  const { children, location = 'header', state = 'primary', className } = props;
  return (
    <button
      className={cn(
        'button',
        `button-${location}`,
        `button-${state}`,
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
