import { useNavigate } from "react-router-dom"
import '../App.css';
function SkillCards({ skillName }) {

    return (
        <div  className="skillCards">
            <p>{skillName}</p>

        </div>
    )
}
export function MySkillSet({ ArrowForwardIosIcon }) {
    const navigate = useNavigate();
    // console.log(bgColor[(Math.floor(Math.random() * bgColor.length))]);
    return (
        <div className="skillSetContainer" style={{ display: 'flex', justifyContent: 'space-between', overflow: 'hidden', justifyContent: 'space-between', marginTop: '21px' }}>

            <ArrowForwardIosIcon className='arrow' fontSize='large' onClick={() => navigate('/intro')} style={{ float: "left", transform: "rotate(180deg)" }} />
            <div className="introText">

                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0%' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '20px', flexDirection: 'column', columnGap: '2px' }}>

                        <div style={{ width: '50px', float: 'left', fontSize: '80px', fontWeight: '400' }}>
                            Hi
                        </div>
                        <br></br>
                        <div style={{ width: '550px', float: 'left', fontSize: '50px', fontWeight: '300' }}>
                            I am Shreyansh

                        </div>
                    </div>
                    <div style={{ width: '80%', paddingTop: '20px', zIndex: '10', paddingLeft: '15px' }}>

                        A caffeine-addicted React Web Developer, proficient in C++, Java, JavaScript, Express framework, web sockets, and Python. My passion for React drives them to craft captivating web applications, while their versatile skills tackle any challenge with ease. Get ready for a caffeinated coding journey like no other, as they revolutionize web development with every line of code.
                    </div>


                    <img className="coffeImg" src={require('./images/Gif.gif')}  ></img>

                </div>
                <div style={{border: '4px solid white' , marginRight:'100px'}}></div>
                <div className="callSkillCards">
                    <div className='flexRows'>
                        <SkillCards skillName={'C++'} />
                        <SkillCards skillName={'JavaScript'} />
                    </div>

                    <div className='flexRows'>
                        <SkillCards skillName={'HTML & CSS'} />
                        <SkillCards skillName={'ReactJS'} />
                    </div>

                    <div className='flexRows'>
                        <SkillCards skillName={'Web Sockets'} />
                        <SkillCards skillName={'Java'} />
                    </div>

                    <div className='flexRows'>
                        <SkillCards skillName={'Python'} />
                        <SkillCards skillName={'Express Framework'} />
                    </div>

                    <div className='flexRows'>
                        <SkillCards skillName={'Swing'} />
                        <SkillCards skillName={'Socket.io'} />
                    </div>

                </div>

            </div>

            <ArrowForwardIosIcon className='arrow' fontSize='large' onClick={() => navigate('/previousWork')} style={{ float: "right" }} />
        </div>
    )
}