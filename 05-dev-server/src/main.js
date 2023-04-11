import createHeading from './heading.js';
import './main.css';
import dog from './dog.jpg';

const heading = createHeading();
document.body.append(heading);
alert('被触发了')
const img = new Image();
img.src = dog;
img.style = 'width:400px;height:400px';
document.body.append(img);

// 不用担心这些代码会多余，如果没开启hot或hotOnly，打包过后的代码只会有 if(false) {}
/* if (module.hot) {
  // let hotEditor = editor;
  module.hot.accept('./heading.js', () => {
    console.log('在这里手动处理热替换逻辑');
    let hotEditor = editor
    module.hot.accept('./editor.js', () => {
      const value = hotEditor.innerHTML
      document.body.removeChild(hotEditor)
      hotEditor = createEditor()
      hotEditor.innerHTML = value
      document.body.appendChild(hotEditor)
    })
  })
}

if (module.hot) {
  module.hot.accept('./dog.jpg', () => {
    img.src = background;
    console.log('在这里手动处理热替换逻辑');
  })
} */