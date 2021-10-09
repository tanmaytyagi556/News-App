import React from 'react'
import style from './news.module.css'

const News = ({author,title, image,content,url}) => {
  return (
    <div className = {style.news}>
      <h1 className = {style.title}> {title} </h1>
      <p className = {style.author}> Author : {author} </p>

      <img src = {image} className= {style.image}/>
      <p> {content} </p>
      <a href = {url}> Read full article </a>

    </div>
  )
}

export default News;
