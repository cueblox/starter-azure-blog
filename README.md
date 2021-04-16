# CueBlox Blog on Azure Static Web Apps

## GitHub Actions

`.github/workflows/data.yml` contains a workflow that will automatically create a pre-release named 'CueBlox' of your processed content every time you make a change to content in the `/data/` folder.

This action uses pre-releases with a fixed name so that the download URL of your data is constant. For this sample repository it is `https://github.com/cueblox/starter-azure-blog/releases/download/blox/data.json`, yours will change based on your GitHub username and the name of your repository.

This action will run after you push a change to your content in the `/data` directory, so start by making some changes and pushing them to GitHub to trigger the action.

## Two Azure Static Web App Deployments

There are two separate web sites in this starter. There will be two separate deployments to Azure Static Web Apps.

### CMS Deployment

### Website Deployment

## Blog Template

Blog template is from [next.js examples](https://github.com/vercel/next.js/tree/canary/examples), Copyright Vercel, Inc. Licensed under the MIT License.

## Learn how

Learn how to [Publish an Angular, React, Svelte, or Vue JavaScript app and API with Azure Static Web Apps](https://docs.microsoft.com/learn/modules/publish-app-service-static-web-app-api/?WT.mc_id=opensource-0000-brketels)

## Prerequisites

- A GitHub account
- [Node.js and Git](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=opensource-0000-brketels) installed
- The [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions%3FWT.mc_id%3Dcueblox-github-brketels&WT.mc_id=opensource-0000-brketels) installed
- The [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=opensource-0000-brketels) installed

## Problems or Suggestions

[Open an issue here](https://github.com/cueblox/starter-azure-blog/issues)

## Resources

### Azure Static Web Apps

- Learn how to [Publish an Angular, React, Svelte, or Vue JavaScript app and API with Azure Static Web Apps](https://docs.microsoft.com/learn/modules/publish-app-service-static-web-app-api?WT.mc_id=opensource-0000-brketels)
- [API support in Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/apis?WT.mc_id=opensource-0000-brketels)
- [Add an API to Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/add-api?WT.mc_id=opensource-0000-brketels)
- [Authentication and authorization](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization?WT.mc_id=opensource-0000-brketels)
- [Routes](https://docs.microsoft.com/azure/static-web-apps/routes?WT.mc_id=opensource-0000-brketels)
- [Review pre-production environments](https://docs.microsoft.com/azure/static-web-apps/review-publish-pull-requests?WT.mc_id=opensource-0000-brketels)
- [Azure Free Trial](https://azure.microsoft.com/free/?WT.mc_id=opensource-0000-brketels)

## Tools and References

[Azure Static Web Apps VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps)
