# Sección 2: Working with SharePoint Client Side Web Parts

## 11. Developing a Simple SharePoint Client Side Web Part - Approach 2

code . -> abrimos el visual studio code
abrimos un nuevo terminal desde el visual
selecionamos el terminal de cmd
yo @microsoft/sharepoint
Let's create a new SharePoint solution.
? What is your solution name? hello-wordl-demo-2
? Which baseline packages do you want to target for your component(s)? SharePoint Online only (latest)
? Where do you want to place the files? Create a subfolder with solution name
Found npm version 6.14.13
? Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without running any
feature deployment or adding apps in sites? No
? Will the components in the solution require permissions to access web APIs that are unique and not shared with other components in
the tenant? No
? Which type of client-side component to create? WebPart
Add new Web part to solution hello-wordl-demo-2.  
? What is your Web part name? HelloWorld
? What is your Web part description? HelloWorld description
? Which framework would you like to use? No JavaScript framework

de esta manera no hace falta esperar a que se haya completado todo el comando para empezar a trabajar

cd hello-wordl-demo-2
gulp serve
