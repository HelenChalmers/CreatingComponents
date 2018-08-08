console.log("hi friend")

// You're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// Create five (5) section elements, each with a class of message, and with textContent of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

let messageValue = document.querySelector("#messagesValue")
let list = document.createElement('ul')
let strings = ["Hi, I miss you",
"I miss you too",
"I bet",
 "how's the land downunder",
 "its under"
]

function messages() {
       strings.forEach((item)=>{
        document.createElement('li')
       })
}

messages('li');


// let messageitem = document.createElement('li')
// let messageitem2 = document.createElement('li')
// let messageitem3 = document.createElement('li')
// let messageitem4 = document.createElement('li')
// let messageitem5 = document.createElement('li')


messages.className = "message"
// messageitem2.className = "message"
// messageitem3.className = "message"
// messageitem4.className = "message"
// messageitem5.className = "message"




list.appendChild(messages)


console.log(list)



//---------PRACTICE--------------------------

// // Create an unordered list element
// const list = document.createElement('ul')

// // Create a list item for our list
// const listItem = document.createElement('li')
// listItem.className = "president"
// listItem.textContent = "George Bush"

// // Put the list item on the unordered list
// list.appendChild(listItem)

// console.log(list)
