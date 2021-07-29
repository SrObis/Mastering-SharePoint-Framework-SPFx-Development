# Sección 2: Working with SharePoint Client Side Web Parts

# 19. Accessing Culture Info Details Using a Web Part

```cmc
md  cultureInfoDetails

cd  cultureInfoDetails

yo @microsoft/sharepoint

Let's create a new SharePoint solution.
? What is your solution name? culture-info-details
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
Add new Web part to solution culture-info-details.
? What is your Web part name? cultureInfoDetails
? What is your Web part description? cultureInfoDetails description
? Which framework would you like to use? No JavaScript framework
```

añadimos

```TypeScript
<ul>
    <li><strong>current Culture Name</strong>: ${escape(this.context.pageContext.cultureInfo.currentCultureName)}</li>
    <li><strong>current UI Culture Name</strong>: ${escape(this.context.pageContext.cultureInfo.currentUICultureName)}</li>
    <li><strong>isRightToLeft?</strong>: ${this.context.pageContext.cultureInfo.isRightToLeft}</li>
  </ul>
```

ejecutamos 
gulp build
gulp serve 

podemor ver que el culture name es en-US