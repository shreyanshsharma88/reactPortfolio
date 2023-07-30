import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../App.css'

export function IntroSection({ ArrowForwardIosIcon }) {
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const subText = useRef(null);
    const icons = useRef(null);
    const navigate = useNavigate();


    useEffect(() => {
        const node = imgRef.current;
        const textNode = textRef.current;
        const subTextNode = subText.current;
        const iconsNode = icons.current;
        node.style.animation = 'fadeIn 1s ease-in';
        textNode.style.animation = 'waviy 3.5s ease-out'
        subTextNode.style.animation = 'loading 1s ease-out'
        iconsNode.style.animation = 'loading 3s ease-out'
    })

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', overflow: 'hidden', justifyContent: 'space-between', marginTop: '21px' }}>
            <ArrowForwardIosIcon className='arrow' fontSize='large' style={{ float: "left", transform: "rotate(180deg)" }} onClick={() => navigate("/contactMe")} />
        <div className='aboutMe'>
            <div>

                <h1 ref={textRef}>SHREYANSH SHARMA</h1>

                <p ref={subText}>Web Developer</p>

                <img ref={imgRef} className='coderImage' src={require('./images/WebDeveloper.png')}  ></img>
            </div>

            <div ref={icons} className='socialIcons' >
                <a target="_blank" href='https://www.instagram.com/sharma.shreyansh88/' >
                    <InstagramIcon color='primary' fontSize='large' />
                </a>
                < a target="_blank" href='https://www.linkedin.com/in/shreyansh-sharma-4244461bb/'>
                    <LinkedInIcon color='primary' fontSize='large' />
                </a>
                <a target="_blank" href='https://github.com/shreyanshsharma88'>
                    <GitHubIcon color='primary' fontSize='large' />
                </a>
            </div>

        </div>
           <ArrowForwardIosIcon className='arrow' fontSize='large' style={{ float: "right" }} onClick={() => navigate("/skills")} />
        </div>
    )

}