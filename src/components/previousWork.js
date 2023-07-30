import { useNavigate } from 'react-router-dom';
import Rica from './images/rica.png'
import Todo from './images/todo.png'
import Rictionary from './images/rictionary.png'
import Chat from './images/chatRooms.png'

function Description() {
    return (
        <div className='descriptions'>
            <div style={{ marginTop:'38px', display:'flex',justifyContent:'center', alignItems:'center' , float: 'left', color:'white' , fontSize:'50px', fontFamily:'JetBrains Mono', color:'green' }}>readMe.md</div>

            <div className='descriptions-text'>

                <div style={{ paddingTop: '150px' }}>
                    <hr></hr>
                    Apart from these webapps I have also created many other small applications like
                    <div style={{ paddingTop: '15px', fontWeight: '400' }}>
                        TicTakToe game which stores history of moves in react
                    </div>

                    <div style={{ paddingTop: '15px', fontWeight: '400' }}>
                        E-Com website that takes data from an API using react
                    </div>
                    <div style={{ paddingTop: '15px', fontWeight: '400' }}>
                        Asset management system using react
                    </div>
                    <div style={{ paddingTop: '15px', fontWeight: '400' }}>
                        I have worked on AI ML projects too
                    </div>
                    <div style={{ paddingTop: '15px', fontWeight: '400' }}>
                    Also a React-based calculator with an elegant user interface.
                    </div>
                </div>

            </div>
        </div>


    )
}

function ProjectCard({ projectName, projectDescription, projectImage }) {

    return (
        <div className='projects'>


            <div className='card'>
                < img className='propImage' src={projectImage}  ></img>

                <p className='textField'>
                    <div style={{ float: 'left', fontFamily: 'poppins', fontSize: '28px', fontWeight: '300' }}>{projectName}</div>
                    <div>{projectDescription}</div>
                </p>
            </div>


        </div>
    )
}

export function PreviousWorks({ ArrowForwardIosIcon }) {

    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', overflow: 'hidden', justifyContent: 'space-between', marginTop: '21px' }}>
            <ArrowForwardIosIcon className='arrow' fontSize='large' onClick={() => navigate('/skills')} style={{ float: "left", transform: "rotate(180deg)" }} />
            <div className='previousWorks'>

                <div style={{ display: 'grid', gap: '40px' }}>

                    <div class="wrapper">
                        <div class="typing-demo">
                            Hover to Know More
                        </div>
                    </div>
                    <div style={{ position: 'absolute', left: '6%', bottom: '1%' }}>

                        <div style={{ display: 'flex', gap: '40px' }}>

                            <ProjectCard projectName={'RICA'}
                                projectDescription={'RICA stands for Remote Intensive Care Application, health Webapp with various great features like a heart rate monitor which sends data directly to doctor, order Medicines feature, and for doctor side, a full appointment page'}
                                projectImage={Rica} />
                            <ProjectCard projectName={'Rictionary'}
                                projectDescription={'A picture guessing game with real time chat(uses multithreading too!!), this app was designed using Java Swing GUI, objective of game was that an image was displayed and whoever guessed the image first gets the point'}
                                projectImage={Rictionary} />
                        </div>
                        <div style={{ display: 'flex', gap: '40px' }}>

                            <ProjectCard projectName={'ToDoList'}
                                projectDescription={'A fully functional Todo List with beautiful UI and functionality which is also hosted online by me, stores your taks in local storage too'}
                                projectImage={Todo} />
                            <ProjectCard projectName={'Real time Chat app'}
                                projectDescription={'A real time chat application using socket.io and express framework'}
                                projectImage={Chat} />
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ float: 'right', position: 'absolute', right: '10%', top: '20%' }}>

                <Description />
            </div>
            <ArrowForwardIosIcon className='arrow' fontSize='large' onClick={() => navigate('/contactMe')} style={{ float: "right" }} />





        </div>
    )
}