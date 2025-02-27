# @vygruppen/spor-theme-react

## 0.0.5

### Patch Changes

- 61549d5: Add Text, Paragraph and Heading components.

## 0.0.4

### Patch Changes

- fb429ab: Add super simple select component
- 65feebf: Remove overridden theme values

  This is a breaking change, if you used undocumented colors or sizes. If you kept to the specified theme colors, there is nothing to do.

  Change the implementation of Input and Textarea styles, and remove variant and sizes props.

  This is a breaking change if you used any variants or sizes in your code. Those weren't supported, and would look pretty weird, but if you did, you need to remove any variant and size props on your input fields.

- ee71c70: Add ChoiceChip component
- 24b0a72: Add new Radio and RadioGroup components
- 91e50b0: Add a new Checkbox component
- 8d088e0: Add FormLabel and Switch components

## 0.0.3

### Patch Changes

- 6f145b6: Fix a bug where you manually had to install @chakra-ui/cli. Also, fix an issue with input fields getting the wrong height
- 099d492: Add repository and home page metadata to all packages
- 146bdda: Make password input fields work with 1Password extension

## 0.0.2

### Patch Changes

- 8e5444a: Fix a bug where the published packages specified the source files, instead of the built dist files
