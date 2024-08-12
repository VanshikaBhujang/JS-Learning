/*
DOM - Document Object Model

Each document is driven by multiple objects like there are objects head, body, title etc in HTML document.

we can do following to manipulate these objects from a web page in browser :-
currently we're doing the following manuplation on first.html document

console.log(windows) --> global object
console.log(windows.document) or console.log(document) --> returns the whole document of the current webpage
console.log(document.links) --> This outputs all the links that are there on a particular web page in a form of HTML Collection.
Though any link can still be accessed like we access the elements of an array which is by using its index.

document.getElementById('firstHeading')
document.getElementById('firstHeading').innerHTML = "<h1>Chai aur Code</h1>"
document.getElementById('title').id
document.getElementById('title').className
document.getElementById('title').getAttribute('id')
document.getElementById('title').setAttribute('class', 'test heading')
const title = document.getElementById('title')
title.style.backgroundColor = 'green'
title.style.borderRadius = "15px"
title.innerText --> gives only visible text content
title.textContent --> gives invisible or hidden text content along with visible text content
title.innerHTML --> gives invisible or hidden text content along with visible text content including html tags
document.querySelector('h1') --> selects the first h1 tag from the document
document.querySelector('h2')
document.querySelector('#title') --> select using Id(#)
document.querySelector('.heading') --> select using class(.)
document.querySelecter('input[type="password"]') select input field having type password
const myul = document.querySelector('ul')
const turnGreen = myul.querySelector('li')
turnGreen.style.backgroundColor = "green"
turnGreen.style.padding = "10px"
turnGreen.innerHTML
turnGreen.innerText = "five" --> changing the inner text of html
const allLi = document.querySelectorAll('li') -->  This returns not first but all the li tags in the document in the form of NodeList which is not an array exactly but somewhat similar to it
allLi.forEach((item) => (item.style.color = "yellow")); --> If you want to apply styling to whole node list then this can be done using forEach
allLi[1].style.color = "red" -->  If you want to apply styling to one particular element of the node list then use its index
const cls = document.getElementsByClassName('list-item') -->  This returns HTML collection which does not contain forEach loop
so first we have to convert this into an array and then loop over it using forEach

const newCls = Array.from(cls) --> This way you can convert cls which is an HTML collection into an array
newCls.forEach((item) => (item.style.color="pink"));
document.querySelectorAll('.list-item') --> . while using class name
*/