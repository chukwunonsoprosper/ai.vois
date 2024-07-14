import picture from './image/hey.png'
import Nextsection from './section/nextsection'
import Capability from './section/capability'
import Waitlist from './section/waitlist'
import { Analytics } from "@vercel/analytics/react"

function Body() {
    return (
        <div className="thebodycontent">
            <div className="thecontent">
                <div className="firstside">
                    <h1>
                        Vois - the future of virtual interaction
                    </h1>

                    <div className="about">
                        <span>Vois AI revolutionizes virtual interaction by seamlessly blending advanced AI technology with intuitive design. Experience the future of communication, where every interaction is personalized and effortless. Join us as we redefine the way you connect and engage, bringing innovation and convenience to your fingertips. Discover a world where virtual and reality converge.</span>
                    </div>

                    <div className="getstarted">
                        <a href="#">Get Started</a>

                    </div>
                </div>

                <div className="theimage">
                    <div className='circle'></div>
                    <div className="img">
                        <img src={picture} alt="" />
                    </div>
                </div>
            </div>
            <Nextsection />
            <Capability /> 
            <Waitlist />
            
        </div>
    )
}

export default Body