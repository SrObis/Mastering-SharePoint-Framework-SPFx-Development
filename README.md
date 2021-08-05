# Sección 10: Working with Spfx Extensions

## 58. Performing BulkUpdate using ListView CommandSet Extension

### Video Anterior

```cmc
md  CommandSetDemo

cd  CommandSetDemo

yo @microsoft/sharepoint


Let's create a new SharePoint solution.
? What is your solution name? command-set-demo
? Which baseline packages do you want to target for your component(s)? SharePoint Online only (latest)
? Where do you want to place the files? Use the current folder
n
Found npm version 6.14.13
? Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without running any feature deployment or adding apps in sites? No
? Will the components in the solution require permissions to access web APIs that are unique and not shared with other components in the tenant? No
? Which type of client-side component to create? Extension
? Which type of client-side extension to create? ListView Command Set
Add new Command Set to solution command-set-demo.
? What is your Command Set name? MyCommandSetDemo
? What is your Command Set description? MyCommandSetDemo description


```
En config->serve.json en las dos pageUrl cambiarlas por donde queramos que se vea.

```cmc


gulp build
gulp serve
```
### Video Actual 

```cmc
    npm install sp-pnp-js --save
```