
import logo from './logo.svg';
import react from 'react';
import './App.css';
import BlogHomePage from './BlogCard';
import { isArrayEmty } from './Utils';

class App extends react.Component {

  state = {
    showBlogs: true
  }

   blogArr = [
    {
      id: 1,
      title : "Blog Titile 1",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi sapiente iusto sequi consectetur, adipisci, culpa blanditiis vero eius magnam, officiis quia ullam. Quae libero possimus explicabo iure atque magnam commodi minima."
    },
    {
      id: 2,
      title : "Blog Titile 2",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi sapiente iusto sequi consectetur, adipisci, culpa blanditiis vero eius magnam, officiis quia ullam. Quae libero possimus explicabo iure atque magnam commodi minima."
    },
    {
      id: 2,
      title : "Blog Titile 3",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi sapiente iusto sequi consectetur, adipisci, culpa blanditiis vero eius magnam, officiis quia ullam. Quae libero possimus explicabo iure atque magnam commodi minima."
    }
  ]

   blogObj = isArrayEmty(this.blogArr) ? [] : this.blogArr.map((item, pos) => {
    
    return (
      <BlogHomePage key={pos} title={item.title} description={item.description} id={item.id}/>
    //   <div className = "BlogCard" key={blogArr.id}>
    //   <h1>{item.title}</h1>
    //   <p>{item.description}</p>
    // </div>
    )
  })

  

   onHideBtn = () => {
    // let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
      return {showBlogs : !prevState.showBlogs}
    });

    console.log(this.state.showBlogs);
  }


render(){
  return (
    <div className="App">
      <button onClick={this.onHideBtn}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
      <br />
      {
      this.state.showBlogs ?  this.blogObj : null 
       }
       {/* <div className = "BlogCard">
      <h1>{blogObj.title}</h1>
      <p>{blogObj.description}</p>
    </div>
    <div className = "BlogCard">
      <h1>{blogObj.title}</h1>
      <p>{blogObj.description}</p>
    </div>
    <div className = "BlogCard">
      <h1>{blogObj.title}</h1>
      <p>{blogObj.description}</p>
    </div> */}
    </div> 
  );
}
}

export default App;
