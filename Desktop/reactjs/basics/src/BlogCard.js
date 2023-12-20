import React from 'react';
import { dumpLogs } from './Utils';
import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    dumpLogs(props)
  return (
    <div className = {classes.BlogCard} >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default BlogCard