declare interface IHelloWorldFromObisWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloWorldFromObisWebPartStrings' {
  const strings: IHelloWorldFromObisWebPartStrings;
  export = strings;
}
