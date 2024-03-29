import React, { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/backButton'
import { useSnackbar } from 'notistack'


const EditBook = () => {
    const [title, setTitle] = useState('');
    const[author, setAuthor] = useState('');
    const[publishYear, setPublishYear] = useState('');
    const[loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() =>{
        setLoading(true);
        axios.get(`http://localhost:5555/api/v1/books/${id}`).then((res) =>{
            setAuthor(res.data.author);
            setPublishYear(res.data.publishYear);
            setTitle(res.data.title);
            setLoading(false);
        }).catch((err) =>{
              setLoading(false);
              alert('An error happened, Please check console')
        })
    },[])
    const handleEditBook = () =>{
        const data = {
            title, 
            author, 
            publishYear
        };

        setLoading(true)
        axios.put(`http://localhost:5555/api/v1/books/${id}`, data).then(() =>{
            setLoading(false);
            enqueueSnackbar("The book has been edited", { variant:"success" });
            navigate('/');
        }).catch((err) => {
            setLoading(flase);
            enqueueSnackbar("Error", {variant:"error"})
            alert('An error happened, Please check console');
            console.log(err);
        });
    };
  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>Edit Book</h1>
        {loading ? (<Spinner />): ''}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
            </div>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
            </div>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Published Year</label>
                <input type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
            </div>
           
           <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
                Save
           </button>
        </div>
    </div>
  )
}

export default EditBook