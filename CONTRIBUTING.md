# JavaScript Contributing Guidelines

These guidelines reflect our shared consensus on protocol and etiquette from what we've built so far. Every single item that is presented here is the result of lots of experimentation. However, that doesn't mean that there isn't a better way to do things. What we have below is simply what we've found to work best for us. In this document you will find notes about:

- Project structure.
- Code style.
- Continuous integration.
- Tests.
- Tasks (asset pipeline, transpiling, releasing, etc).
- Dependency management.

Our toolkit for each of these is not set in stone, and we don't plan to halt our constant search for better tools. Get in touch if you've got ideas. [These are guidelines rather than rules](assets/CodeIsMoreLikeGuidelines.jpg).

## Table of Contents

- [Goals](#goals)
- [Contributing](#contributing)
  - [Guidelines](#guidelines)
    - [Supported versions](#supported-versions)
    - [Linting & Code Style](#linting--code-style)
    - [Error Codes](#error-codes)
    - [Dependency Versions](#dependency-versions)
    - [Testing](#testing)
    - [Releasing](#releasing)
    - [Documentation](#documentation)
  - [Commits](#commits)
  - [Pull Requests](#pull-requests)
- [Code of Conduct](#code-of-conduct)
- [References - Resources and good reads](#references---resources-and-good-reads)
- [Acknowledgments](#acknowledgments)

## Goals

For the majority of our JavaScript projects, our goals are to:

- **Ensure browser compatibility**, with the possible exceptions being:
  - Access to the file system.
  - Native bindings.
  - Network transports (uTP, udt, curveCP, etc) that are not available in the browser.
- **Don't break CommonJS's** `require`. This means that if someone requires a JavaScript module from the IPFS ecosystem, they should be able to require it and use browserify, webpack or other bundlers without having to worry about adding special shims for module internals.
- **Encourage contribution**.
- **Have great UX** for everyone involved.

## Contributing

Please follow the conventions described in this document.

When reporting a bug, if possible, provide a way for us to reproduce it (or even better, write a test that fails with your case).

Always run tests before pushing and PR'ing your code.

### Guidelines

#### Supported Versions

The IPFS JavaScript projects work with the Current and Active LTS versions of Node.js and respective npm version that gets installed with Node.js. Please consult [nodejs.org](https://nodejs.org/) for LTS timeline.


### Commits

We have guidelines for how our git commit messages should be formatted. This leads to more readable messages that are easy to follow when looking through the project history.  But also, we use the git commit messages to generate the change log.

The commit message formatting can be added using a typical git workflow or through the use of a CLI wizard ([Commitizen](https://github.com/commitizen/cz-cli)).

- **Type** - Must be one of the following:
  - **feat**: A new feature
  - **fix**: A bug fix
  - **docs**: Documentation only changes
  - **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  - **refactor**: A code change that neither fixes a bug nor adds a feature
  - **perf**: A code change that improves performance
  - **test**: Adding missing tests
  - **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **Scope** - The scope could be anything specifying the place of the commit change. For example `api`, `cli`, etc...
- **Breaking Changes** - Should be identified at the end of commit message. Start with the words `BREAKING CHANGE:` on a new line followed by a space or two new lines. The rest of the commit message is then used to describe in detail what was broken and the migration path (if there is one).

Examples:

```
feat(pencil): add 'graphiteWidth' option
```

```
fix(graphite): stop graphite breaking when width < 0.1

Closes #28
```

```
perf(pencil): remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason.
```

```
revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

### Pull Requests

There should be no dependencies that rely on commits. Instead, there should be WIP PR and each PR that depends on other WIP PR should list what it depends on. Yes, everyone will have to do the extra work of `npm link`ing everything, but this helps us have a cleaner workflow.
##### Continuous Integration

You can find samples for [Travis](https://github.com/ipfs/ci-sync/blob/master/configs/.travis.yml) and [circle](https://github.com/ipfs/ci-sync/blob/master/configs/circle.yml) in the examples folder.

We also use [coveralls.io](https://coveralls.io/) to automatically publish coverage reports. This is done from travis using this:

```yml
script:
  - npm run coverage
after_success:
  - npm run coverage publish --providers coveralls
```

##### `.gitignore`

To avoid checking in unwanted files, the `.gitignore` file should follow the [example](examples/.gitignore). This is if you are using `aegir` - smaller projects can use smaller `.gitignore` files.

## Acknowledgments

This project would not be possible without the hard work of many many people. So a big shout out to all contributors to these projects:

- [eslint](https://github.com/eslint/eslint/graphs/contributors)
- [standard](https://github.com/feross/standard/graphs/contributors)
- [webpack](https://github.com/webpack/webpack/graphs/contributors)
