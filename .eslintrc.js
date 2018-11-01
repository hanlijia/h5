// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 单双引号不检查
    'quotes': 'off',
    // 缩进风格 不检查
    'indent': 0,
    // 函数定义时括号前面要不要有空格 不检查
    'space-before-function-paren': 0,
    // 强制文件以换行符结束 不检查
    'eol-last': 0,
    // 允许使用宽松运算符
    'eqeqeq': 0,
    // 允许三目运算中使用布尔值
    'no-unneeded-ternary': 0,
    // 允许使用表达式
    'no-unused-expressions': 0,
    // 不检查字符串和注释之外的空白
    'no-irregular-whitespace': 0,
    // 不检查对象拓展 日期 format
    'no-extend-native': 0,
  }
}
