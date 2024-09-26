import MindMap from "simple-mind-map";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { marked } from 'marked';
import { metaData } from "../meta-generated.js"

const containerElement = document.getElementById('mindMapContainer')
document.title = metaData.data.text + " - 思维导图展示"

let toastShowing = null

new MindMap({
  el: containerElement,
  data: metaData,
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
