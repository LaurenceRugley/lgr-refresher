var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import path from 'path';
export default defineConfig({
    plugins: [
        __assign({ enforce: 'pre' }, mdx({
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkGfm],
        })),
        react({ include: /\.(jsx|tsx|mdx)$/ }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/lgr-refresher/', // for GitHub Pages
});
