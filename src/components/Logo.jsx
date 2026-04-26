import React from 'react';
import logoImg from '../assets/logo123.png';

const Logo = ({ size = 50 }) => (
  <img
    src={logoImg}
    alt="Nadan Chaya Logo"
    width={size}
    height={size}
    className="rounded-full shrink-0"
    style={{ width: size, height: size, objectFit: 'cover' }}
  />
);

export default Logo;
