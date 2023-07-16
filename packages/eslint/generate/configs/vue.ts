import merge from 'lodash.merge';
import clonedeep from 'lodash.clonedeep';
import { defineConfig } from '../utility';
import { vueRules } from '../rules';
import { typeScriptConfig } from './typescript';
import { javaScriptConfig } from './javascript';

export const vueConfig = defineConfig(() => ({
	overrides: [
		merge(clonedeep(javaScriptConfig), clonedeep(typeScriptConfig), {
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
			extends: [
				'plugin:vue/essential',
				'plugin:vue/base',
				'eslint:recommended',
				'plugin:vue/vue3-essential',
				'@vue/eslint-config-typescript',
				'@vue/eslint-config-prettier'
			],
			plugins: ['vuejs-accessibility', '@typescript-eslint'],
			rules: { ...vueRules },
			settings: {
				// 'import/resolver': 'webpack',
				'prettier-vue': {
					SFCBlocks: {
						template: false,
						script: true,
						style: true,

						customBlocks: {
							docs: { lang: 'markdown' },
							config: { lang: 'json' },
							module: { lang: 'js' },
							comments: false
						}
					},
					usePrettierrc: true,
					fileInfoOptions: {
						ignorePath: '.testignore',
						withNodeModules: false
					}
				}
			},
			parserOptions: {
				parser: '@typescript-eslint/parser',
				sourceType: 'module',
				ecmaVersion: 2021,
				extraFileExtensions: ['.vue']
			}
		})
	]
}));
