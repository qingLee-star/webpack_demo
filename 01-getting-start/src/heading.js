export default () => {
  const ele = document.createElement('h2');
  ele.textContent = 'hello webpack';
  ele.addEventListener('click', () => {
    alert('hello webpack');
  });
  return ele;
}