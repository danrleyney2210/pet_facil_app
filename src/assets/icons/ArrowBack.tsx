import React from 'react'
import { Svg, Path } from 'react-native-svg'


interface svgProps {
  color?: string
  size?: number
}

export function ArrowBack({ color = 'black', size = 20 }: svgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.80761 10.4853 1.3934L0.939341 10.9393ZM23 10.5L2 10.5L2 13.5L23 13.5L23 10.5Z" fill={color}
      />
    </Svg>
  );
}