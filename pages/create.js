import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTitle, setDesc } from "../reducers/question"


export default function Create () {
  const dispatch = useDispatch();
  const title = useSelector ((state) => state.question.title)
  const desc = useSelector ((state) => state.question.desc)

  const updateTitle = (title) => {
    dispatch(setTitle(title));
  }

  const updateDesc = (desc) => {
    dispatch(setTitle(desc));
  }


  return (
    <div>
      <div>Create question</div>
      <input value = {title} palceholder="title" onChange={e => updateTitle(e.target.value)} />
      <input value = {desc} palceholder="desc" onChange={e => updateDesc(e.target.value)} />
    </div>
  )
}