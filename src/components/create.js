import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./create.css"
const Create = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: ""
    })
    const addPost = (e) => {
        e.preventDefault();

        axios.post('https://real-estate-backend-1.onrender.com/api/property', formData,
            {
                headers: {
                    authorization: localStorage.getItem('token')
                }

            })
            .then(function (response) {
                console.log(response)
                console.log(response.data);
                alert(response.data.message);
                setFormData({
                    title: "",
                    description: "",
                    author: ""
                })
                if (response.data.message === "success") {
                    navigate('/dashboard')
                }
            })
            .catch(function (error) {
                alert(error)
            });
    }
    return <>
        <div className="main-create">
            <form action="#">
                <label htmlFor="title">Title</label><br />
                <input required className="input-data" value={formData.title} onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value })
                }} /><br />
                <label required htmlFor="decription">Add description</label><br />
                <textarea className="input-data" id="input-data" value={formData.description} onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value })
                }} /><br />
                <label htmlFor="author">Author</label><br />
                <input required className="input-data" value={formData.author} onChange={(e) => {
                    setFormData({ ...formData, author: e.target.value })
                }} /><br />
                <button className="btn" onClick={addPost}>Add Post</button>
            </form>
        </div>
    </>
}
export default Create;