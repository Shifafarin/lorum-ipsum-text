# Lorem Ipsum Text Generator

Generate Lorem Ipsum text with ease!

## Introduction

This npm package allows you to generate Lorem Ipsum text in the desired number of paragraphs. Lorem Ipsum is commonly used as a placeholder text in design and development projects.

## Installation

You can install this package using npm:
```bash
npm install lorum-ipsum-text
```

## Usage
To use this package, import it into your project and call the 'generateLoremIpsum' function. The function returns a Promise that resolves to the generated text.

```bash
const generateLoremIpsum = require('lorum-ipsum-text');

async function main() {
  try {
    const loremIpsum = await generateLoremIpsum(3); // Generate 3 paragraphs
    console.log(loremIpsum);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## Examples

Here are some usage examples:

- Generate a single paragraph of Lorem Ipsum text:

```bash
const loremIpsum = await generateLoremIpsum();
```

- Generate five paragraphs of Lorem Ipsum text:

```bash
const loremIpsum = await generateLoremIpsum(5);
```

## Contributing

The Package is always under progress for constant feature updates. Therefore your suggestions are always welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the [Github Repository](https://github.com/Shifafarin/lorum-ipsum-text/issues).

## git Repository

- https://www.github.com/shifafarin/lorum-ipsum-text.git

## License

This package is open-source and available under the [MIT License](https://choosealicense.com/licenses/mit/)

## Author

- [@Shifafarin](https://www.github.com/shifafarin)
