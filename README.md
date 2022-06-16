# tripitaka-transport-sumologic

## Git Flow

## Install Git Flow

Mac: ```brew install git-flow```

Linux: ```sudo apt-get install git-flow```

## Use Git Flow

```git flow init```

```git flow feature start <feature branch name>```

```git flow feature finish <feature branch name>``` 

## Type Script

https://ultimatecourses.com/blog/setup-typescript-nodejs-express

```npm i --save typescript```

```npx tsc --init```

```uncomment and update: "outDir": "dist",```

## ESLint

https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/

```npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin```

```touch .eslintrc```

```
{
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint"
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "rules": { 
        "no-console": "error",
        "@typescript-eslint/no-explicit-any": "off"
    }
  }
```

```touch .eslintignore```

```
node_modules
dist
```

```
{
  "scripts": {
    ...
    "lint": "eslint . --ext .ts",
  }
}
```
## Bable

```npm i --save-dev babel-cli babel-preset-env```
```npm i --save-dev @babel/preset-env @babel/preset-typescript```

```touch babel.config.js```

```
// babel.config.js
module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
    ],
  };
```

## Prettier

```npm i --save-dev prettier```

```touch .prettierrc```

```
{
    "printWidth": 180,
    "tabWidth": 4,
    "singleQuote": true,
    "trailingComma": "es5",
    "semi": true
}
```
