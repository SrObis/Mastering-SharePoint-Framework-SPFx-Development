# Sección 2: Working with SharePoint Client Side Web Parts

## 13. Finding Out SPFx Version of Your SPFx Solution

md test1
cd test1
yo @microsoft/sharepoint

Let's create a new SharePoint solution.
? What is your solution name? test-1
? Which baseline packages do you want to target for your component(s)? SharePoint O
nline only (latest)
? Where do you want to place the files? Use the current folder
Found npm version 6.14.13
? Do you want to allow the tenant admin the choice of being able to deploy the solu
tion to all sites immediately without running any feature deployment or adding apps
in sites? No
? Will the components in the solution require permissions to access web APIs that a
re unique and not shared with other components in the tenant? No
? Which type of client-side component to create? WebPart
Add new Web part to solution test-1.
? What is your Web part name? HelloWorld
? What is your Web part description? HelloWorld description
? Which framework would you like to use? No JavaScript framework

abrimos el code
vamos al package.json y en dependencia podemos ver la version
"@microsoft/sp-core-library": "1.12.1", en mi caso
esto nos influye en la version de SPF X que vamos a usar

---

md test2
cd test2
yo @microsoft/sharepoint --plusbeta
Let's create a new SharePoint solution.
? What is your solution name? test-2
? Which baseline packages do you want to target for your component(s)? SharePoint Online only (latest)
? Where do you want to place the files? Use the current folder
Found npm version 6.14.13
? Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without running any feature deployment or adding apps in sites? No
? Will the components in the solution require permissions to access web APIs that are unique and not shared with other components in the tenant? No
? Which type of client-side component to create? WebPart
Add new Web part to solution test-2.
? What is your Web part name? HelloWorld
? What is your Web part description? HelloWorld description
? Which framework would you like to use? No JavaScript framework
vamos al package.json y en dependencia podemos ver la version
"@microsoft/sp-core-library": "1.12.1-plusbeta", vemos que sale plusbeta
Esto nos puede servir cundo trabajemos con clases especiales como SPHttp

---

si en el test1 donde en el package.json no tiene el plusbeta ponemos todo plusbeta en las dependencias
y ejecutamos
npm install
creamos la plusbeta bersion desde el normal
