import React from 'react';

// Solution 1
// const CoolButton = ({ bClass, bName }) => (
//   <button className={bClass}>{bName}</button>
// );

// Solution 2
function CoolButton(props) {
  const dict = {
    isActive: 'is-active',
    isBlack: 'is-black',
    isCentered: 'is-centered',
    isDanger: 'is-danger',
    isDark: 'is-dark',
    isFocused: 'is-focused',
    isGrouped: 'is-grouped',
    isHovered: 'is-hovered',
    isInfo: 'is-info',
    isInverted: 'is-inverted',
    isLarge: 'is-large',
    isLight: 'is-light',
    isLink: 'is-link',
    isLoading: 'is-loading',
    isMedium: 'is-medium',
    isOutlined: 'is-outlined',
    isPrimary: 'is-primary',
    isRight: 'is-right',
    isRounded: 'is-rounded',
    isSelected: 'is-selected',
    isSmall: 'is-small',
    isStatic: 'is-static',
    isSuccess: 'is-success',
    isText: 'is-text',
    isWarning: 'is-warning',
    isWhite: 'is-white',
  }

  console.log(props)

  let className = "button "
  // individually
  // if (props.isSuccess) className += "is-success "
  // if (props.isDanger) className += "is-danger "
  // if (props.isRounded) className += "is-rounded "
  // if (props.isClassName) className += props.className

  for (let key in dict) {
    console.log("KEY:", key)
    if (props[key])
      className += `${dict[key]} `
  }

  return (
    <button className={className}>
      {props.children}
    </button>
  )
}

export default CoolButton;