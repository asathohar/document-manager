import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { SampleBase } from './sample-base';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
import { TitleBar } from './title-bar';

DocumentEditorContainerComponent.Inject(Toolbar);


class App extends SampleBase {
    constructor() {
        super(...arguments);
        this.hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
        this.onLoadDefault = () => {
            // tslint:disable
            this.container.documentEditor.documentName = 'Getting Started';
            this.titleBar.updateDocumentTitle();
            this.container.documentChange = () => {
                this.titleBar.updateDocumentTitle();
                this.container.documentEditor.focusIn();
            };
        };
    }
    rendereComplete() {
        this.container.serviceUrl = this.hostUrl + 'api/documenteditor/';
        this.container.documentEditor.pageOutline = '#E0E0E0';
        this.container.documentEditor.acceptTab = true;
        this.container.documentEditor.resize();
        this.titleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), this.container.documentEditor, true);
        this.onLoadDefault();
    }
    render() {
        return (<div className='control-pane'>
            <div className='control-section'>
                <div id='documenteditor_titlebar' className="e-de-ctn-title"></div>
                <div id="documenteditor_container_body">
                    <DocumentEditorContainerComponent id="container" ref={(scope) => { this.container = scope; }} style={{ 'display': 'block', 'height': '590px' }} enableToolbar={true} locale='en-US'/>
                </div>
            </div>
            <script>{window.onbeforeunload = function () {
            return 'Want to save your changes?';
        }}
            </script>
        </div>);
    }
}

export default App