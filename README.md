# Sección 9: Working with Library

## 49. Creating a Library


```cmc
md  mynewcustomlibrary

cd  mynewcustomlibrary

yo @microsoft/sharepoint


Let's create a new SharePoint solution.
? What is your solution name? mynewcustomlibrary
? Which baseline packages do you want to target for your component(s)? SharePoint Online only (latest)
? Where do you want to place the files? Use the current folder
Found npm version 6.14.13
? Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without
 running any feature deployment or adding apps in sites? Yes
? Will the components in the solution require permissions to access web APIs that are unique and not shared with other c
omponents in the tenant? No
? Which type of client-side component to create? Library
Add new Library to solution mynewcustomlibrary.
? What is your Library name? mynewcustomlibrarydemo
? What is your Library description? mynewcustomlibrarydemo description


gulp build
npm link
```
