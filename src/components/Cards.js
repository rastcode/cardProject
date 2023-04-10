import Card from "./Card";
import cal from "../images/icon-calculator.svg";
import carma from "../images/icon-karma.svg";
import sup from "../images/icon-supervisor.svg";
import bul from "../images/icon-team-builder.svg";


const Cards=({data})=>{

    return(
        <div className='cards'>
            <div>{
                <Card title="Supervisor" description="Monitors activity to identify project roadblocks" icon="icon-1" color="aqua" icon={sup}/>
            }</div>
            <div>
                <Card title="Team Builder" description="Scans our talent network to create the optimal team for your project" icon={bul} color="red"/>
                <Card title="Karma" description="Regularly evaluates our talent to ensure quality" icon={carma} color="orange"/>
            </div>
            <div>
                <Card title="Calculator" description="Uses data from past projects to provide better delivery estimates" icon={cal} color="blue"/>
            </div>
        </div>
    )
}
export default Cards;