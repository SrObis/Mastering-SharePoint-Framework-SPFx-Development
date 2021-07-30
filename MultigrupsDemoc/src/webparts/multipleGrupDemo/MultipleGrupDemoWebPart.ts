import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './MultipleGrupDemoWebPart.module.scss';
import * as strings from 'MultipleGrupDemoWebPartStrings';

export interface IMultipleGrupDemoWebPartProps {
  description: string;
  productName: string;
  isCertified; boolean;
}

export default class MultipleGrupDemoWebPart extends BaseClientSideWebPart<IMultipleGrupDemoWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.multipleGrupDemo }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <p class="${ styles.description }">${escape(this.properties.productName)}</p>
              <p class="${ styles.description }">${escape(this.properties.isCertified)}</p>

              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      
      
      
      pages: [{
          header: {
            description: "Page 1"
          },
          groups: [{
              groupName: "First Group 1",
              groupFields: [
                PropertyPaneTextField('productname', {
                  label: "Product Name 1"
                })
                ]
                },{
              groupName: "Second Group 1",
              groupFields: [
                PropertyPaneToggle('isCertified', {
                  label: "Is Certified 1?"
                })
                ]
                }],
                displayGroupsAsAccordion: true
        },{
          header: {
            description: "Page 2"
          },
          groups: [{
              groupName: "First Group 2",
              groupFields: [
                PropertyPaneTextField('productname', {
                  label: "Product Name 2"
                })
                ]
                },{
              groupName: "Second Group",
              groupFields: [
                PropertyPaneToggle('isCertified', {
                  label: "Is Certified 2?"
                })
                ]
                }],
                displayGroupsAsAccordion: true
        },{
          header: {
            description: "Page 3"
          },
          groups: [{
              groupName: "First Group 3",
              groupFields: [
                PropertyPaneTextField('productname', {
                  label: "Product Name 3"
                })
                ]
                },{
              groupName: "Second Group 3",
              groupFields: [
                PropertyPaneToggle('isCertified', {
                  label: "Is Certified 3?"
                })
                ]
                }],
                displayGroupsAsAccordion: true
        },{
          header: {
            description: "Page 4"
          },
          groups: [{
              groupName: "First Group 4",
              groupFields: [
                PropertyPaneTextField('productname', {
                  label: "Product Name 4"
                })
                ]
                },{
              groupName: "Second Group 4",
              groupFields: [
                PropertyPaneToggle('isCertified', {
                  label: "Is Certified 4?"
                })
                ]
                }],
                displayGroupsAsAccordion: true
        },
      
      
      ]// array pages end
    };
  }
}
