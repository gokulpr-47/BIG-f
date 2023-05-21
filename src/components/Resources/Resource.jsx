import React, {useState, useEffect} from 'react'
import './Resource.css'
import { NavLink, useParams } from "react-router-dom";
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import useAuth from '../../Hooks/useAuth';
function Resource() {
    const axiosPrivate = useAxiosPrivate();
    const {id} = useParams();
    const [resource, setResource] = useState();
    const{auth, setAuth} = useAuth()
    useEffect(()=>{
        axiosPrivate.get(`/resource/single/${id}`).then(res=>{
            console.log(res.data.data);
            if(res.data.success){
                setResource(res.data.data.curatedNotes);
            }
        })
    }, [])
    const handleSubmit = (e)=>{
        e.preventDefault()
        axiosPrivate.post(`/user/logout/${auth.uid}`).then(res=>{
            console.log(res.data)
            if(res.data.success){
                console.log("sda")
                setAuth({});
            }
        }) 
    }


    return (
        <div className="container">
            <div className="rheader">
                <div className="rlogo">
                    <img src="\images\logo.jpg" alt="" className="relogo" />
                </div>
                <div className="rlogout">
                    <div className="btn rightbtn">

                    <NavLink to="/signup">
                    <button onClick={handleSubmit} className="big-button">Logout</button>
            </NavLink>


                       
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="gpt">
                    <img src="\images\chatbox.jpg" alt="" className="chatgpt" />
                </div>

                <div className="imgcard">
                    <img src="\images\curated.jpg" alt="" className="curatedcard" />
                    <div className="textareabig">
                        <textarea name="" id="" value={resource}className='tt' cols="30" rows="10">{resource?.curatedNotes}</textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resource