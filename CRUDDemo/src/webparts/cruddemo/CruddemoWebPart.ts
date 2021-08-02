import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CruddemoWebPart.module.scss';
import * as strings from 'CruddemoWebPartStrings';

export interface ICruddemoWebPartProps {
  description: string;
}

export default class CruddemoWebPart extends BaseClientSideWebPart<ICruddemoWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      
    <div>
    <table border='5' bgcolor='aqua'>

    <tr>
    <td>Please Enter Software ID </td>
    <td><input type='text' id='txtID' />
    <td><input type='submit' id='btnRead' value='Read Details' />
    </td>
    </tr>

     
      <tr>
      <td>Software Title</td>
      <td><input type='text' id='txtSoftwareTitle' />
      </tr>

      <tr>
      <td>Software Name</td>
      <td><input type='text' id='txtSoftwareName' />
      </tr>

      <tr>
      <td>Software Vendor</td>
      <td>
      <select id="ddlSoftwareVendor">
        <option value="Microsoft">Microsoft</option>
        <option value="Sun">Sun</option>
        <option value="Oracle">Oracle</option>
        <option value="Google">Google</option>
      </select>  
      </td>
     
      </tr>

      <tr>
      <td>Software Version</td>
      <td><input type='text' id='txtSoftwareVersion' />
      </tr>

      <tr>
      <td>Software Description</td>
      <td><textarea rows='5' cols='40' id='txtSoftwareDescription'> </textarea> </td>
      </tr>

      <tr>
      <td colspan='2' align='center'>
      <input type='submit'  value='Insert Item' id='btnSubmit' />
      <input type='submit'  value='Update' id='btnUpdate' />
      <input type='submit'  value='Delete' id='btnDelete' />      
      </td>
    </table>
    </div>
    <div id="divStatus"/>
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
