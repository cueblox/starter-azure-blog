## Contents

## GitHub Actions

`.github/workflows/data.yml` contains a workflow that will automatically create a pre-release named 'CueBlox' of your processed content every time you make a change to content in the `/data/` folder.

This action uses pre-releases with a fixed name so that the download URL of your data is constant. For this sample repository it is `https://github.com/cueblox/starter-azure-blog/releases/download/blox/data.json`, yours will change based on your GitHub username and the name of your repository.

This action will run after you push a change to your content in the `/data` directory, so start by making some changes and pushing them to GitHub to trigger the action.

## Two Azure Static Web App Deployments

There are two separate web sites in this starter. There will be two separate deployments to Azure Static Web Apps.

1. asdlfasdf

2. adsfasdf

## Blog Template

Blog template is from [next.js examples](https://github.com/vercel/next.js/tree/canary/examples), Copyright Vercel, Inc. Licensed under the MIT License.

## Tools and References

[Azure Static Web Apps VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps)
