// Three pillars of Web Programming 

// Recognizing JS events: Your click action on the empty heart tells JavaScript to do work

//Manipulating the DOM: the work JavaScript was told to do was to update the screen to make the heart "look clicked"

//Communicating with the server: the work JavaScript was told to do was to tell the social media company that you approved of this content



// The DOM
// Document Object Model 
// representation of our HTML document made up of literal objects
// think of it like a tree like structure of HTML tags body, header div class etc...


// Dom nodes are linked 

// -> parentNode
// as long as a node has some children  then that node is a parent
// for example the body is the parent of the head, but a header tag can be the parent of an h1 tag.
// nodes are objects, they have key value pairs
// -> childNode
    //  firstChild
    //  lastChild

// previousSibling
// node that exists in the document before the node we're on

//nextSibling 
// node that in the document that loads after the node we're on 

// for example 
// <label for = "desciption"> Description</label>
// <textarea id= "description" name = "description"></textarea> // if we're currently using this id or name. previousSibling would be line 34. nextSibling would be line 36.
// <button type= "submit">Adopt Animal</button>

// line 35 - 37 are all siblings 
// if we're looking at line 36, our previousSibling would be line 35
// if we're looking at line 36, our nextSibling would then be line 37.

// A note on Nodes 
// -> Document 
//        Entry point for javaScript to the DOM

//-> DOM Nodes are objects
//      Element Nodes


//-> HTMLCollection
//      Array like objet of dom elemenbts(no map, filter, forEach)
//      is iterable (works with loops)
//      Can be converted with Array.from()


// -> NodeList
//      Array like object of nodes
//      forEach does work
//      is iterable (works with loops)
//      can be converted with Array.from()
document.querySelectorAll('div')

let nodes = document.querySelectorAll('div')
Array.from(nodes)