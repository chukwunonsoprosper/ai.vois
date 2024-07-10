import picture from './image/hey.png'

function Body() {
    return (
        <div className="thebodycontent">
            <div className="thecontent">
                <div className="firstside">
                    <h1>
                        Vois - the future of virtual interaction
                    </h1>

                    <div className="about">
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quam perferendis voluptate ad, itaque blanditiis quaerat obcaecati necessitatibus hic. Quas corporis consectetur a consequuntur est praesentium ab cupiditate assumenda excepturi?</span>
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
        </div>
    )
}

export default Body