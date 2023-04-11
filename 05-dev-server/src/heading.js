import './heading.css';
export default () => {
  const ele = document.createElement('h2');
  ele.textContent = 'hello webpack,我想再加一个,会自动刷新吗';
  ele.classList.add('head');
  ele.addEventListener('click', () => {
    alert('hello webpack');
  });
  return ele;
}
console.log(1111);