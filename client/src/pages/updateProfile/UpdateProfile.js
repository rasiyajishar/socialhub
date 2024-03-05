import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import classes from './updateProfile.module.css'
import { AiOutlineFileImage } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateProfile = () => {
    const { user, token } = useSelector((state) => state.auth)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [coverPic, setCoverPic] = useState('')
    const navigate = useNavigate()




    useEffect(() => {
        if (user) {
            setUsername(user.username);
            setEmail(user.email);
        }
    }, [user]);


    // const handleUpdate = async (e) => {
    //     e.preventDefault()

    //     const body = {
    //         username,
    //         email
    //     }

    //     try {
    //         let profilePicName = null
    //         let coverPicName = null

    //         if (profilePic) {
    //             profilePicName = crypto.randomUUID() + profilePic.name
    //             const formData = new FormData()
    //             formData.append("imageUrl", profilePicName)
    //             formData.append("photo", profilePic)
    //             await axios.post(`http://localhost:3003/upload`, formData)
    //             body.profilePic = profilePicName
    //         }

    //         if (coverPic) {
    //             coverPicName = crypto.randomUUID() + coverPic.name
    //             const formData = new FormData()
    //             formData.append("imageUrl", coverPicName)
    //             formData.append("photo", coverPic)
    //             await axios.post(`http://localhost:3003/upload`, formData)
    //             body.coverPic = coverPicName
    //         }

    //         const headers = {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }

    //         if (user && user._id) {
    //             await axios.put(`http://localhost:3003/user/update/${user._id}`, headers, body)
    //             navigate(`/profile/${user._id}`)
    //         } else {
    //             console.error("User object or _id property is undefined.")
    //         }
            


    //     } catch (error) {
    //         console.error(error)
    //     }
    // }


    const handleUpdate = async (e) => {
        e.preventDefault();
    
        if (!user || !user._id) {
            console.error("User object or _id property is undefined.");
            return;
        }
    
        const body = {
            username,
            email
        };
    
        try {
            let profilePicName = null;
            let coverPicName = null;
    
            if (profilePic) {
                profilePicName = crypto.randomUUID() + profilePic.name;
                const formData = new FormData();
                formData.append("imageUrl", profilePicName);
                formData.append("photo", profilePic);
                await axios.post(`http://localhost:3003/upload`, formData);
                body.profilePic = profilePicName;
            }
    
            if (coverPic) {
                coverPicName = crypto.randomUUID() + coverPic.name;
                const formData = new FormData();
                formData.append("imageUrl", coverPicName);
                formData.append("photo", coverPic);
                await axios.post(`http://localhost:3003/upload`, formData);
                body.coverPic = coverPicName;
            }
    
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
    
            await axios.put(`http://localhost:3003/user/update/${user._id}`, body, { headers });
            navigate(`/profile/${user._id}`);
        } catch (error) {
            console.error(error);
        }
    };
    
    

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <form className={classes.form} onSubmit={handleUpdate}>
                        <h2>
                            Update Profile
                        </h2>
                        <div className={classes.inputBox}>
                            <label htmlFor='username'>Username</label>
                            <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className={classes.inputBox}>
                            <label htmlFor='email'>Email</label>
                            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.inputBox}>
                            <label htmlFor='pfp'>Profile picture <AiOutlineFileImage /></label>
                            <input style={{ display: 'none' }} type="file" id='pfp' onChange={(e) => setProfilePic(e.target.files[0])} />
                        </div>
                        <div className={classes.inputBox}>
                            <label htmlFor='coverPic'>Cover picture <AiOutlineFileImage /></label>
                            <input style={{ display: 'none' }} type="file" id='coverPic' onChange={(e) => setCoverPic(e.target.files[0])} />
                        </div>
                        <button className={classes.submitBtn} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateProfile