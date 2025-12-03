import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router'
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchingById,isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    })
    useEffect(() => {
        fetchingById(params.id);
        fetchComments(params.id);
    }, [])

    const [fetchComments, isLoadingComm, err] = useFetching(async (id) =>{
        const response = await PostService.getComments(id);
        setComments(response.data);


    })

    return (
        <div>
            <h1>вы попали на страницу поста c id = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>
                    <div>{post.id} {post.title}</div>
                    <div>{post.body}</div>
                </div>
            }
            <h1>Комментарии</h1>
            {isLoadingComm
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                            <div key={comm.id} style={{marginTop: 20}}>
                                <h4>{comm.email}</h4>
                                <h4>{comm.body}</h4>
                            </div>
                    )}
                </div>
            }

        </div>
    );
};

export default PostIdPage;

















