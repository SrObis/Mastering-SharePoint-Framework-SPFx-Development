# Sección 3: Working With Property Pane

# 21. Overview of Property Panes


```cmc
md  WorkingWithPropertyPaneControls

cd  WorkingWithPropertyPaneControls

yo @microsoft/sharepoint

Let's create a new SharePoint solution.

? What is your solution name? working-with-property-pane-controls
? Which baseline packages do you want to target for your component(s)? SharePoint Online only (latest)
? Where do you want to place the files? Use the current folder
Found npm version 6.14.13
? Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without
 running any feature deployment or adding apps in sites? No
? Will the components in the solution require permissions to access web APIs that are unique and not shared with other c
omponents in the tenant? No
? Which type of client-side component to create? WebPart
Add new Web part to solution working-with-property-pane-controls.
? What is your Web part name? PropertyPaneWp
? What is your Web part description? PropertyPaneWp description
? Which framework would you like to use? No JavaScript framework

```

si cambiamos algun elemento en el archivo PropertyPaneWpWebPart.manifest.json tenemos que para y re ejecutar gulp serve
de esta manera podremos ver los cambios
si se cambian desde el ts no hace falta