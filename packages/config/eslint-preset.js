module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: [
        "apps/docs/",
        "packages/config/",
        "packages/tsconfig/",
        "packages/spor-theme-react/",
        "packages/spor-react/",
        "packages/spor-logo-react/",
        "packages/spor-input-react/",
        "packages/spor-i18n-react/",
        "packages/spor-button-react/",
        "packages/spor-layout-react/",
        "packages/spor-typography-react/",
      ],
    },
  },
};
