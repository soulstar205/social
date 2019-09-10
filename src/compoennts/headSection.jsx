import React from 'react'
import './headSection.css'



function Head(){
    return(
        <div className="container">
            <div className="social-links">
                <small className="link">Facebook</small>
                <small className="link">Twitter</small>
                <small className="link">Instagram</small>
                <small className="link">SnapChat</small>
                <small className="link">LinkedIn</small>
            </div>
            <div className="thumbnail">
                <h4>The Soul</h4>
                <img src="assets/soul.jpg" alt="" className="profile-img"/>
                <h5>Imhotep_soul</h5>
            </div>
            <div className="profile-info">
                <h4>Unoke Solomon</h4>
                <small>Front End Developer</small>
                <div className="btns">
                    <div className="btn-info">1,300<small> Posts</small></div>
                    <div className="btn-info">12M<small> Followers</small></div>
                    <div className="btn-info">653<small> Following</small></div>
                </div>
                <small>Hi this is Solomon you number one stop for top notch front end developer</small>
                <small className="link">github.com/soulstar205, Lagos</small> 
            </div>

            <div className="top-right">
                <div className="first">
                    <img src="assets/bell.png" alt="" className="thumbnail"/>
                    <img src="assets/soul.jpg" alt="" className="thumbnail"/>
                    <div className="top-p">
                        <small>Unoke Solomon</small>
                        <small>Programmer</small>
                    </div>
                </div>
                <div className="second">
                    <div className="btns1"><img src="assets/msg.jpg" alt="" className="thumb"/><small>Message</small></div>
                    <div className="btns"><img src="assets/msg.jpg" alt="" className="thumb" /><small>options</small></div>
                </div>
                <div className="third">
                    <img src="assets/upload.png" alt="" className="thumb"/><small>Upload Post</small>
                </div>


            </div>

            
        </div>
    )
}
export default Head