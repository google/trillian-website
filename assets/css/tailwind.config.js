/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
    purge: {
      content: ['./layouts/**/*.html'],
  },
    theme: {
      fontFamily: {
        'mono': ['DM Mono', 'Menlo', 'monospace'],
        'google': ['Google Sans', 'sans'],
      },
      extend: {
        colors: {
          'Yellow-400': '#FF6846',

          'Blue-600': '#1A73E8',
          'Blue-300': '#8AB4F8',
          'Blue-100': '#D2E3FC',

          'Grey-900': '#202124',
          'Grey-800': '#3c4043',
          'Grey-700': '#5F6368',
          'Grey-600': '#80868B',
          'Grey-500': '#9AA0A6',
          'Grey-400': '#BDC1C6',
          'Grey-300': '#DADCE0',
          'Grey-200': '#E8EAED',
          'Grey-100': '#F1F3F4',
          'Grey-050': '#F8F9FA',
        },
        screens: {
          'sm': '600px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1440px',
        }
      },
    },
    variants: {},
    plugins: [],
  };
