import { Card, Collapse } from 'antd';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class RichEditorView extends React.PureComponent {
  state = {
    editorContent: undefined,
    editorState: ''
  };

  onEditorChange = (editorContent) => {
    this.setState({
      editorContent
    });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  imageUploadCallBack = file => new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
      const data = new FormData(); // eslint-disable-line no-undef
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );

  render() {
    const { editorContent, editorState } = this.state;
    return (
      <div className="gutter-example button-demo">
        <Card title="富文本编辑器" style={{ minHeight: 300 }}>
          <Editor
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
              history: { inDropdown: true },
              inline: { inDropdown: false },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              image: {
                className: undefined,
                component: undefined,
                popupClassName: undefined,
                urlEnabled: true,
                uploadEnabled: true,
                alignmentEnabled: true,
                uploadCallback: undefined,
                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                alt: { present: false, mandatory: false },
                defaultSize: {
                  height: 'auto',
                  width: 'auto'
                }
              }
              /* image: { uploadCallback: this.imageUploadCallBack } */
            }}
            onContentStateChange={this.onEditorChange}
            placeholder="请输入正文..."
            spellCheck
            hashtag={{
              separator: ' ',
              trigger: '#'
            }}
            onFocus={() => { console.log('focus'); }}
            onBlur={() => { console.log('blur'); }}
            onTab={() => {
              console.log('tab');
              return true;
            }}
            localization={{ locale: 'zh', translations: { 'generic.add': 'Test-Add' } }}
          />
        </Card>
        <Collapse accordion>
          <Collapse.Panel header="同步转换HTML" key="panel-html">
            <pre>{draftToHtml(editorContent)}</pre>
          </Collapse.Panel>
          <Collapse.Panel header="同步转换MarkDown" key="panel-markdown">
            <pre style={{ whiteSpace: 'pre-wrap' }}>{draftToMarkdown(editorContent)}</pre>
          </Collapse.Panel>
          <Collapse.Panel header="同步转换JSON" key="panel-json">
            <pre style={{ whiteSpace: 'normal' }}>{JSON.stringify(editorContent)}</pre>
          </Collapse.Panel>
        </Collapse>
      </div>
    );
  }
}
export default RichEditorView;
