import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{ ignores: ['dist'] },
	{ settings: { react: { version: 'detect' } } },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx,js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react': react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...js.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...reactRefresh.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'semi': ['error', 'never'],
			'quotes': ['error', 'single'],
			'indent': ['error', 'tab'],
			'comma-dangle': ['error', 'always-multiline'],
			'object-curly-spacing': ['error', 'always'],
		},
	},
)
