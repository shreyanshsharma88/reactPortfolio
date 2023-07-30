import '../App.css'
// import resume from 'resume.pdf'
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
export function Nav() {
    const navigate = useNavigate('')
    return (
        <div className='navBar'>

            <h2>DevelopedByS4DGE</h2>

            <div style={{display:'flex', gap:'100px'}}>
                <Button onClick={() => navigate("/")} sx={{ color: 'white' , fontSize:'13px', fontFamily:'poppins' , fontWeight:'200', border:'1.3px solid white', width:'100%'}} variant="outlined">HOME</Button>
                <Button onClick={() => navigate("/skills")} sx={{ color: 'white' , fontSize:'13px', fontFamily:'poppins' , fontWeight:'200', border:'1.3px solid white', width:'100%'}} variant="outlined">SKILLS</Button>
                <Button onClick={() => navigate("/previouswork")} sx={{ color: 'white' , fontSize:'13px', fontFamily:'poppins' , fontWeight:'200', border:'1.3px solid white', width:'100%'}} variant="outlined">PREVIOUS WORKS</Button>
                <Button onClick={() => navigate("/contactMe")} sx={{ color: 'white' , fontSize:'13px', fontFamily:'poppins' , fontWeight:'200', border:'1.3px solid white', width:'100%'}} variant="outlined">CONTACT ME</Button>

            </div>
            <a href={require("./resume.pdf")} download="myFile">
                <Button variant="contained">Resume</Button>

            </a>

        </div>
    )
}