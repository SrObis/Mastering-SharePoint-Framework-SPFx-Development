# Sección 2: Working with SharePoint Client Side Web Parts

## 16. Understanding SkipFeatureDeployment Option Practically

md  SkipFeatureDeploymentDemo

cd  SkipFeatureDeploymentDemo

yo @microsoft/sharepoint

Let's create a new SharePoint solution.
? What is your solution name? skip-feature-deployment-demo
? Which baseline packages do you want to target for your component(s)? SharePoint Online only (latest)
? Where do you want to place the files? Use the current folder
Found npm version 6.14.13
? Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without running any feature deployment or adding apps i
n sites? Yes
? Will the components in the solution require permissions to access web APIs that are unique and not shared with other components in the tenant? No
? Which type of client-side component to create? WebPart
Add new Web part to solution skip-feature-deployment-demo.
? What is your Web part name? HelloWorld2
? What is your Web part description? HelloWorld2 description
? Which framework would you like to use? No JavaScript framework

gulp bundle --ship
gulp package-solution --ship