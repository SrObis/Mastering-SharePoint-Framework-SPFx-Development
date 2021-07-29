# Sección 2: Working with SharePoint Client Side Web Parts

## 18. Finding out SharePoint Environment Info

### Seguimos con el proyecto del video anterior

#### Video Anterior 

md  ReadSitespropertiDemo

cd  ReadSitespropertiDemo

yo @microsoft/sharepoint
```cmc
Let's create a new SharePoint solution.
? What is your solution name? read-sitesproperti-demo
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
Add new Web part to solution read-sitesproperti-demo.
? What is your Web part name? ReadSiteProperties
? What is your Web part description? ReadSiteProperties description
? Which framework would you like to use? No JavaScript framework
```

code .
abrimos src/webparts/readsit...ts

añadimos 
```TypeScript
             <p class="${ styles.description }">Absolute URL ${escape(this.context.pageContext.web.absoluteUrl)}</p>
              <p class="${ styles.description }">Title ${escape(this.context.pageContext.web.title)}</p>
              <p class="${ styles.description }">Relative URL ${escape(this.context.pageContext.web.serverRelativeUrl)}</p>
              <p class="${ styles.description }">User Name ${escape(this.context.pageContext.user.displayName)}</p>
```
Una vez tenemos el codigo puesto
gulp build
gulp bundle
gulp serve
cuando añadimos la targeta vemos que se ha puesto la informacion que hemos puesto en el .ts


#### Video Actual
sin parar de ejecutar el localhost
en el ReadSite .ts añadimos
```TypeScript
import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library'
```
En la funcion render añadimos

 ```TypeScript
        <p class="${ styles.description }">Environment ${(Environment.type)}</p>

 ```