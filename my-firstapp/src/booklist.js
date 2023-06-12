import React from "react"
import ReactDOM  from "react-dom/client"

const BookList=()=>{
    return <section>
        <Book/>
    </section>
}

const Book= ()=>{
return <section>
<BookImage/>
<BookTitle/>
<Author/>
</section>
}

const BookImage = ()=><h2>Book image placeholder</h2>
const BookTitle = ()=><h2>Book Title</h2>
const Author = ()=>{
    return <h3>Book Author</h3>
}

export default BookList
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)