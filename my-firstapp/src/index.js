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


const title ="Simply Lies: A Psychological Thriller"
const img = "https://m.media-amazon.com/images/I/81JgqgEwbeL._AC_UL800_FMwebp_QL65_.jpg" 

const BookList=()=>{
    return <section className="booklist">
        <Book job="Developer" author={title}/>
        <Book/>
        <Book/>
        <Book> </Book>
    </section>
}

const Book= (props)=>{
    console.log(props)
return <section className="book">
<img src={img} alt={title} />
<h2>{title}</h2> <h3 style={{color:'blue',fontSize:'30px'}}>Book Author</h3>
<h1>{props.job} {props.author}</h1> 

</section>
}



export default BookList
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)