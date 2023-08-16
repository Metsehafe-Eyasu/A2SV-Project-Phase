import { useState } from 'react'
import { useAddBlogMutation } from '../api/apiSlice'

const NewBlog: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const [addBlog] = useAddBlogMutation()
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addBlog({ title, content })
    setTitle('')
    setContent('')
  }

  return (
    <div className='flex flex-col justify-center p-2 bg-slate-400 w-96 rounded'>
      <h1 className='text-2xl font-bold text-center'>New Blog</h1>
      <form className='flex flex-col gap-1' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='p-2 border-2 border-slate-300 rounded'
        />
        <label htmlFor='content'>Content</label>
        <textarea
          id='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='p-2 border-2 border-slate-300 rounded'
        />
        <button className='p-1 bg-slate-500 rounded text-white disabled:cursor-not-allowed' disabled={!title || !content}>Submit</button>
      </form>
    </div>
  )
}

export default NewBlog
