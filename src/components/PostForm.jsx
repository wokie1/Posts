import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'',body:''});
    const  addPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost);
        setPost({title:'', body:''})
    }
    return (
        <form onSubmit={addPost} >
            <MyInput
                value={post.title}
                type="text"
                placeholder='название...'
                onChange={event => setPost({...post, title:event.target.value})}
            />
            <MyInput
                value = {post.body}
                type="text"
                placeholder='описание...'
                onChange={event => setPost({...post, body:event.target.value})}
            />
            <MyButton>Cоздать пост</MyButton>
        </form>
    );
};

export default PostForm;