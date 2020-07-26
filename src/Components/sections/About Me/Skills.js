import React from 'react';
import '../css/Skills.css'
const Skills = () => {
    const skills=[
        {
            title: 'HTML 5',
            percentage: '90%'
        },
        {
            title: 'CSS 3',
            percentage: '75%'
        },
        {
            title: 'JavaScript',
            percentage: '80%'
        },
        {
            title: 'Python',
            percentage: '75%'
        },
        {
            title: 'ReactJs',
            percentage: '85%'
        },
        {
            title: 'NodeJs',
            percentage: '80%'
        },
        {
            title: 'Bootstrap 4',
            percentage: '98%'
        },
        {
            title: 'Java',
            percentage: '58%'
        }

    ]
    return (
        <div className={"skills-section background"}>
            <div className="row container-fluid border-0">
                <div className="col-lg-2">

                </div>
                <div className="col-lg-8">
                    <div id='skills' className={"card card-body py-5 border-0 background"} style={{width: '80%%', margin: 'auto', outline: 'none'}}>
                        <h3 className="text-bolder">My Skills</h3>
                        <p className="text-lighter">Note: These percentages are just my opinion!</p>
                        {skills.map((skill,index)=>(
                            <Skill title={skill.title} percentage={skill.percentage} key={index}/>
                        ))}

                    </div>
                </div>
                </div>
                <div className="col-lg-2">

            </div>
        </div>



    );
};

export default Skills;

const Skill = ({title,percentage}) => {
    return (
        <div>
            <h4 className="text-lighter">{title}</h4>
            <div className="progress mb-3">
                <div className="progress-bar" style={{width: percentage,backgroundColor:'#17a2b8'}}></div>

            </div>
        </div>
    );
};
