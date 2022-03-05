# require-if

Require a package, if it doesn't exists you can define a default value that will be return.

If package doesn't exist it will never throw an error.

## Getting Started

### Installation

Install the package in your project as dependency (add option `--save-dev` if you want it as devDependencies)
```sh
npm install require-if
```

## Usage

```js
const requireIf = require("require-if");

// Default value that will be return if the package doesn't exist
const defaultValueOfThePackage = {
    add: () => (0)
};
const somePackage = requireIf("some-package", defaultValueOfThePackage);

// If package exist
console.log(somePackage.add(1, 2)); // 3
// OR
// If package doesn't exist
console.log(somePackage.add(1, 2)); // 0
```

*The second paramater is optionnal, if you don't add it it will return an empty object.*
```js
const requireIf = require("require-if");

const somePackage = requireIf("some-package");

// If package doesn't exist
console.log(somePackage); // {}
```

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.