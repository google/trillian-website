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

const themeDir = __dirname + '/../../';

module.exports = {
    plugins: [
        require('postcss-import')({
            path: [themeDir]
            }),
        require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
        require('@fullhuman/postcss-purgecss')({
            content: ['layouts/**/*.html', 'layouts/**/*.svg', 'content/**/*.html'],
            extractors: [
            {
                extractor: content =>
                    content.match(/[A-Za-z0-9-_:\/]+/g) || [],
                extensions: ['html']
            }],
            fontFace: true
        }),
        require('autoprefixer')({
            grid: true
        }),
        require('postcss-reporter'),
    ]
}
