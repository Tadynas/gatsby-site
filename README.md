## Gatsby Site [(Live Version)](https://serene-galileo-af1289.netlify.app)

React.js & Gatsby & Contentful blog site

![Gatsby Site](https://i.imgur.com/DyXu9Cf.png)


## Getting Started

Following section will provide steps on how to setup the project locally

### Prerequisites

To run this project you need to have node.js

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/Tadynas/gatsby-site.git
```

2. Navigate to project directory

```sh
cd gatsby-site
```

3. Install dependencies

```sh
yarn install
```

4.  Start project

```sh
gatsby develop
```

It will run the app in the development mode.
Open [http://localhost:8000](http://localhost:8000/) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Tools

1. React.js
2. Gatsby.js
3. SASS
4. Contentful
5. GraphQL


## API

1. [Contentful](https://www.contentful.com)

## Keys

Gatsby GraphQL IDE & Contentful requires additional keys
1. Create [Contentful](https://www.contentful.com) account
2. Create new space and get ID & access token.
3. Create .env file in project root directory
4. Add following line of code
```
GATSBY_GRAPHQL_IDE=playground
CONTENTFUL_SPACE_ID=YOUR_SPACE_ID
CONTENTFUL_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

This project was bootstrapped with [Gatsby.js](https://www.gatsbyjs.com) and deployed to [Netlify](https://app.netlify.com)
