import MindMap from "simple-mind-map";


const mindMap = new MindMap({
  el: document.getElementById('mindMapContainer'),
  data: {
    "data": {
        "text": "根节点"
    },
    "children": [
      {
        "data": {
          "text": "子节点1",
          "hyperlink": "https://ntutn.top",
          "hyperlinkTitle": "我的博客",
          "note": "这是一个**测试**" // 备注是否支持markdown
        },
      }
    ]
  }
});
