# 🚀 @ryujaewan/animated
> Unleash the power of fluid, high-performance animations in your React applications!

## 🌟 Features
- 🎭 Smooth, high-performance animations
- 🧩 Easy-to-use React hooks and components
- 🎨 Customizable easing functions
- 🔧 Flexible interpolation

## 📦 Installation
```bash
npm install @ryujaewan/animated
```

or

```bash
yarn add @ryujaewan/animated
```

## 🚀 Quick Start

Here's a taste of what you can do with @ryujaewan/animated:

```jsx
import React from 'react';
import { animated, useAnimatedValue, Easing } from '@ryujaewan/animated';

export default function CustomEasingExample() {
  const scale = useAnimatedValue(1);
  const rotate = useAnimatedValue(scale, {
    inputRange: [1, 1.2],
    outputRange: [0, 20],
    suffix: 'deg',
  });

  const handlePulse = () => {
    scale.timing({
      to: 1.2,
      duration: 200,
      easing: Easing.easeInOut,
        // fps: 120, // default: 120
    }).start(() => {
      scale.timing({
        to: 1,
        duration: 150,
        easing: Easing.easeInOut,
        // fps: 120, // default: 120
      }).start();
    });
  };

  return (
    <animated.div
      style={{
        transform: [
          { scale: scale },
          { rotate: rotate }
        ],
        padding: 20,
        background: '#e74c3c',
        color: 'white',
        display: 'inline-block',
        cursor: 'pointer',
      }}
      onClick={handlePulse}
    >
      Click to see pulse effect
    </animated.div>
  );
}
```

