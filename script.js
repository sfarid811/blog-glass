const longestNumber = arr => Math.max(...arr);

console.log(longestNumber([267, 306, 108]));

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
})
