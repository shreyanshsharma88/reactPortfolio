import { useNavigate } from "react-router-dom"

export function ContactMe({ArrowForwardIosIcon}) {
    const navigate = useNavigate();

    return (
        <>
            <ArrowForwardIosIcon className='arrow' fontSize='large' onClick={() => navigate('/')} style={{ float: "right" }}/>
            <ArrowForwardIosIcon className='arrow' fontSize='large' onClick={() => navigate('/previousWork')} style={{ float: "left" , transform: "rotate(180deg)"}}/>
            <h1>contact me</h1>
        </>
    )
}