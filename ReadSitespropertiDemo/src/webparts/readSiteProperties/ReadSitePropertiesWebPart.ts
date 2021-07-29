import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  BaseClientSideWebPad
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './ReadSitePropertiesWebPart.module.scss';
import * as strings from 'ReadSitePropertiesWebPartStrings';

import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library'

export interface IReadSitePropertiesWebPartProps {
  description: string;
  envionmenttitle: string;
}

export default class ReadSitePropertiesWebPart extends BaseClientSideWebPart<IReadSitePropertiesWebPartProps> {
  
  private findOutEnvi(): void {
    //en Local
    if(Environment.type=== EnvironmentType.Local){
        this.properties.envionmenttitle="Local Sharepoint Environment"
    }else if (Environment.type==EnvironmentType.SharePoint || Environment.type==EnvironmentType.ClassicSharePoint){
      this.properties.envionmenttitle="Online Sharepoint Environment"

    }
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.readSiteProperties }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              
              <p class="${ styles.description }">Absolute URL ${escape(this.context.pageContext.web.absoluteUrl)}</p>
              <p class="${ styles.description }">Title ${escape(this.context.pageContext.web.title)}</p>
              <p class="${ styles.description }">Relative URL ${escape(this.context.pageContext.web.serverRelativeUrl)}</p>
              <p class="${ styles.description }">User Name ${escape(this.context.pageContext.user.displayName)}</p>

              <p class="${ styles.description }">Environment ${(Environment.type)}</p>
              
              <p class="${ styles.description }">Type of Environment ${(this.properties.envionmenttitle)}</p>


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
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
