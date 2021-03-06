import React from 'react';
import 'sass/footers/footer';

export default class Footer extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    center: React.PropTypes.bool
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const {children, center, className, ...rest} = this.props;
    const isCenter = center ? ' center' : '';
    return (
      <footer className={`footer${isCenter} ${className}`} {...rest}>{children}</footer>
    );
  }
}
