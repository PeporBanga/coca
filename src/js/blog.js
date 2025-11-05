import '/scss/blog.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {useBlogSlider, useAcordslider, useArticlesSlider,} from './components/blog/slider.js';

useTheme();
useBurger();
useBlogSlider();
useAcordslider();
useArticlesSlider();