import { contentLoader } from "./contentLoader.js";

export function reloadContent(content) {
    const preContent = document.querySelector('div');
    preContent.remove();

    contentLoader(content);
  
}