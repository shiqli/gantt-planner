module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
  },
  globals: {
      gantt: true,
      moment: true,
      $: true,
      server: true,
      bootbox: true,
      RSVP: true
  }
};
