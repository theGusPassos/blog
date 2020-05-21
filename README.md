# Academic Developer Blog

My personal blog where I write about software and game development. The website was developed with Vue and is served as a [github page](https://theguspassos.github.io/#/)

The website's responsive design was made by me, the prototype was made using [figma](https://www.figma.com/).

Posts are saved as .md files and fetched by the client in the webserver public folder. This approach was necessary since it's served as a static page and no api was developed to serve posts.

The comments are stored as github issues and fetched by the github api. There're many drawbacks with this approach, however it doesn't require a dedicated server to store comments or authentication setup.

## Built with

- [vue](https://vuejs.org/)
- [typescript](https://www.typescriptlang.org/docs/home.html)
- [gh-pages](https://www.npmjs.com/package/gh-pages)

## Development

Make sure to checkout to the **dev branch**. The master branch is used for build files that are served as a github page.
After making changes to the code you can publish it to github with the `deploy.sh` script

### Running tests

- npm run test
- npm run test:watch

### Requirements

- npm v6.12 +

### Setup

- `npm i`
- `npm run serve`

## Contributing

Feel free to suggest improvements, report bugs or even create a PR.

1. Fork it
2. Create your feature branch
3. Push to the branch
4. Create a new PR

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
