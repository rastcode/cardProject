const Card=(props)=>{
 return(
            <div  className={`card ${props.color}`}>
                <div>
                    <h4 className="itemh4">{props.title}</h4>
                    <p className="itemp">{props.description}</p>
                </div>

                <div className='icon'>

                        <img className='iconn' src={props.icon} alt="sd"/>

                </div>
            </div>

        )








}

export default Card;