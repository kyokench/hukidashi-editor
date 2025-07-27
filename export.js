function exportEditorHTML() {
  const editorContent = document.getElementById('editor').innerHTML;
  const cssContent = `
    .main{
     box-sizing:border-box;
     padding:20px;
     width:800px;
     max-width:100%;
    }

    body{
     width:800px;
     max-width:100%; 
    }

    #editor{
     width:100%;
     box-sizing: border-box;
    }

    .editor p{
     margin:0;
    }

    .editor h2{
     margin-bottom:5px;
     background-color:#efefef;
     padding-left:5px;
     border-left:6px solid var(--c-accent);
    }

    .editor h3{
     margin-bottom:5px;
     border-left:4px solid var(--c-accent);
     padding-left:5px;
    }

    .editor h4{
     margin-bottom:10px;
     padding-left:5px;
    }

    .editor h4::before {
      content: "\f00c"; /* チェックマークのUnicode */
      font-family: "Font Awesome 6 Free"; /* 使用するFont Awesomeのファミリ名 */
      font-weight: 900; /* Solidアイコンの場合は900 */
      color: green; /* アイコンの色 */
      margin-right: 5px; /* アイコンとテキストの隙間 */
    }

    .editor .pre{
     outline: 1px solid rgba(228, 228, 228, .8705882353);
     color: #444;
      margin: 10px 0;
      padding: 12px;
      position: relative;
      min-height: 20px;
      background-color: #efefef;
    }

    /* 4マスメモ テーブル調整 */
    #grid4 table {
      table-layout: fixed;
      width: 100%;
      height: auto;
      border-collapse: collapse;
    }

    #grid4 td {
      width: 50%;
      height: 150px; /* お好みの高さに変更可能 */
      border: 1px solid #ccc;
      vertical-align: top;
      padding: 8px;
    }


    /* ツールバー */
    .toolbar{display:flex;gap:6px;margin-bottom:15px;max-width:800px;}
    .toolbar button{
      padding:4px 8px;border:1px solid #ccc;border-radius:4px;cursor:pointer;background:#fafafa
    }
    .toolbar button:hover{background:#eee}

    /* エディタ領域 */
    .editor{
      width:100%;height:900px;margin:0 auto 24px;
      border:1px solid #ccc;border-radius:6px;padding:20px;
      overflow-y:auto;
    }
    .editor:focus{outline:2px solid #6699ff}

    /* トースト通知 */
    #toast{position:fixed;left:50%;bottom:40px;transform:translateX(-50%);
           background:#333;color:#fff;padding:8px 16px;border-radius:4px;font-size:.9rem;
           opacity:0;pointer-events:none;transition:opacity .3s}
    #toast.show{opacity:1}
    .save-btn{display:block;width:100%;max-width:200px;margin:8px auto;padding:8px 0}

    /* ボックススタイル */
    .info-box {
     outline: 1px solid rgba(228, 228, 228, .8705882353);
     color: #444;
      margin: 10px 0;
      padding: 12px;
      position: relative;
      min-height: 20px;
      background-color: #efefef;
    }


    /* ボックス削除ボタン */
    .box-delete {
      position: absolute;
      top: 5px;
      right: 5px;
      background: #ff4444;
      color: white;
      border: none;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 12px;
      cursor: pointer;
      display: none;
    }

    .info-box:hover .box-delete {
      display: block;
    }

    .box-delete:hover {
      background: #cc0000;
    }

    /* 吹き出しスタイル */
    .bubble-container {
      display: flex;
      flex-direction: column;
      margin: 10px 0;
    }

    .bubble {
      position: relative;
      padding: 12px;
      border-radius: 10px;
      max-width: 70%;
      background: #f0f0f0;
      word-wrap: break-word;
    }

    .bubble.left {
      align-self: flex-start;
      background: #ffffff;
      border: 1px solid #ccc;
    }

    .bubble.right {
      align-self: flex-end;
      background: #dcf8c6;
      border: 1px solid #b7e8a8;
    }

    .bubble::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
    }

    .bubble.left::before {
      top: 10px;
      left: -10px;
      border-width: 8px 10px 8px 0;
      border-color: transparent #ffffff transparent transparent;
    }

    .bubble.right::before {
      top: 10px;
      right: -10px;
      border-width: 8px 0 8px 10px;
      border-color: transparent transparent transparent #dcf8c6;
    }
  `;

  const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <title>エクスポートされたコンテンツ</title>
      <style>${cssContent}</style>
    </head>
    <body>
      <div class="editor">${editorContent}</div>
    </body>
    </html>
  `;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'エクスポートデータ.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
