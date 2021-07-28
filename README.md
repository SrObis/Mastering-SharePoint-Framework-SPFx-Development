# Sección 2: Working with SharePoint Client Side Web Parts

## 15. Understanding Web Part Project Structure

md  AnatomyDemo

cd  AnatomyDemo

yo @microsoft/sharepoint

Let's create a new SharePoint solution.
? What is your solution name? anatomy-demo
? Which baseline packages do you want to target for your component(s)? SharePoint Online only (latest)
? Where do you want to place the files? Use the current folder
Found npm version 6.14.13
? Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without running any feature deployment or adding apps i
n sites? Yes
? Will the components in the solution require permissions to access web APIs that are unique and not shared with other components in the tenant? Yes
? Which type of client-side component to create? WebPart
Add new Web part to solution anatomy-demo.
? What is your Web part name? HelloWorld
? What is your Web part description? HelloWorld description
? Which framework would you like to use? No JavaScript framework

cramos a mano una carpeta llamada lib
gulp build
se generan los ficheros dentro de la carpeta
cramos a mano una carpeta llamada temp
gulp build
se generan los ficheros dentro de la carpeta
gulp bundle --ship
gulp package-solution --ship
se crea una carpeta sharepoint con la subcarpeta debug