import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IBlog } from '../../types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
  tagTypes: ['Blogs'],
  endpoints: (builder) => ({
    getBlogs: builder.query<IBlog[], void>({
      query: () => '/blogs',
      transformResponse: (response: IBlog[]) => response.sort((a, b) => b.id - a.id),
      providesTags: ['Blogs']
    }),
    addBlog: builder.mutation<IBlog, Partial<IBlog>>({
      query: (blog) => ({
        url: '/blogs',
        method: "POST",
        body: blog
      }),
      invalidatesTags: ['Blogs']
    }),
    updateBlog: builder.mutation<IBlog, Partial<IBlog>>({
      query: (blog) => ({
        url: `/blogs/${blog.id}`,
        method: "PUT",
        body: blog
      }),
      invalidatesTags: ['Blogs']
    }),
    deleteBlog: builder.mutation<IBlog, number>({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ['Blogs']
    })
  })
}) 

export const { useGetBlogsQuery, useAddBlogMutation, useUpdateBlogMutation, useDeleteBlogMutation } = apiSlice
