// import React from 'react'
// import  ReactDOM  from 'react-dom/client'


// function Greeting(){
//     return <>
//         <h2>my first component</h2>
//         <ExternalComponent/>
       

//     </> 
// }

// const ExternalComponent = () => {
//   return  <h3>this is external component </h3>
  
// }



// export default Greeting
// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<Greeting></Greeting>)


//BookList project 

import React from "react"
import ReactDOM  from "react-dom/client"
import "./styles.css"

const BookList=()=>{
    return <section className="booklist">
        <Book/>
        <Book/>
        <Book/>
    </section>
}

const Book= ()=>{
return <section className="book">
<BookImage/>
<BookTitle/>
<Author/>
</section>
}

const BookImage = ()=><img src="https://m.media-amazon.com/images/I/81JgqgEwbeL._AC_UL800_FMwebp_QL65_.jpg" alt="Simply Lies: A Psychological Thriller" />
const BookTitle = ()=><h2>Simply Lies: A Psychological Thriller</h2>
const Author = ()=>{
    return <h3>Book Author</h3>
}

export default BookList
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)