# Sección 2: Working with SharePoint Client Side Web Parts

## 14. Creating Multiple Web Parts as part of Single Solution

md multiwebpartdemo

cd multiwebpartdemo

yo @microsoft/sharepoint

Let's create a new SharePoint solution.
? What is your solution name? multiwebpartdemo
? Which baseline packages do you want to target for your component(s)? SharePoint Online only (latest)
? Where do you want to place the files? Use the current folder
Found npm version 6.14.13
? Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without running any feature deployment or adding apps i
n sites? No
? Will the components in the solution require permissions to access web APIs that are unique and not shared with other components in the tenant? No
? Which type of client-side component to create? WebPart
Add new Web part to solution multiwebpartdemo.
? What is your Web part name? HelloWordl1
? What is your Web part description? HelloWordl1 description
? Which framework would you like to use? No JavaScript framework

si volvemos a ejecutar
yo @microsoft/sharepoint
solo nos pide:

? Which type of client-side component to create? WebPart
Add new Web part to solution multiwebpartdemo.
? What is your Web part name? HelloWoeld2
? What is your Web part description? HelloWoeld2 description
? Which framework would you like to use? No JavaScript framework

yo @microsoft/sharepoint
? Which type of client-side component to create? WebPart
Add new Web part to solution multiwebpartdemo.
? What is your Web part name? HelloWorld3
? What is your Web part description? HelloWorld3 description
? Which framework would you like to use? No JavaScript framework

Ahora tenemos 3 HelloWorld en el mimso proyecto
gulp build
gulp serve
podemos ver que se puede selecionar los 3 HelloWorld
