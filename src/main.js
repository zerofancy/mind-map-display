import MindMap from "simple-mind-map";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { marked } from 'marked';

const containerElement = document.getElementById('mindMapContainer')

let toastShowing = null

new MindMap({
  el: containerElement,
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
  },
  customNoteContentShow: {
    show: (content, left, top) => {
      if (toastShowing != null) {
        return
      }
      toastShowing = Toastify({
        text: marked.parse("**备注**\n\n" + content),
        duration: 3000,
        position: "left",
        callback: () => {
          toastShowing = null
        },
        offset: {
          x: left,
          y: top
        },
        escapeMarkup: false
      })
      toastShowing.showToast();
    },
    hide: () => {
    }
  }
});
