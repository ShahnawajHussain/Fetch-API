 //GET method
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then((res)=>res.json())
 .then((data)=>console.log(data))

 //POST method 
 fetch('https://jsonplaceholder.typicode.com/posts',{
     method: 'POST',
     body: JSON.stringify({
         title: "Shahnawaj Hussain",
         category: "Human Resources"
     })
 })
 .then(res => res.json())
 .then(console.log)
 .catch((error)=>console.log(error))

