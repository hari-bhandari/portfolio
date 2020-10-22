import React, {Fragment, useState} from 'react';
import '../css/Coding.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython,faJava,faJs } from '@fortawesome/free-brands-svg-icons'
import {Typer} from 'react-typetool'
const Coding = () => {
    const codeObject = {
        python: ['class Person:', 'def __init__(self,name,dateOfBirth=2001):', 'self.name="Hari Bhandari"', 'self.age=datetime.datetime.now().year-dateOfBirth'],
        java: ['public class Person:{', 'String final name;', 'int final dateOfBirth;', 'public Person(String name,int dateOfBirth){', ' this.name="Hari Bhandari";', 'this.dateOfBirth=Calendar.getInstance().get(Calendar.YEAR)-dateOfBirth}}'],
        js: ['class Person:', 'constructor(name,dateOfBirth=2001){', 'this.name="Hari Bhandari"', 'this.age = new Date().getFullYear() - dateOfBirth']
    }
    const [language, setLanguage] = useState('python')
    const [text, setText] = useState(codeObject['python'])
    const onClick = (language, text) => {
        setLanguage(language)
        setText(text)
    }


    return (
        <Fragment>
            <div className="card text-white bg-dark mb-3" style={{width: '38rem', marginTop: '5em', backgroundColor: '#353839'}}>
                <div className="card-body">

                    <p className={"text-white"}>{text[0]}</p>
                    <p className={"ml-2 text-white"}>{text[1]}</p>
                    <p className={language === 'java' ? "ml-2 text-white" : "ml-4 text-white"}>{text[2]}</p>
                    {language==='java'?(<p className={"ml-2 text-white"}>{text[3]}</p>):(<p className="ml-4 text-white"><Typer text={text[3]} loop={true} stepIntervalMS={100}/></p>)}
                    {language === 'java' ? (
                        <div>
                            <p className={"ml-4 text-white"}>{text[4]}</p>
                            <p className="ml-4 text-white"><Typer text={text[5]} stepIntervalMS={100} loop={true}/></p>
                        </div>
                    ) : ''}
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-between py-1 ">
                    <div className="d-flex flex-row">
                        <FontAwesomeIcon icon={faPython} size="3x" style={{marginLeft:"10rem"}} color={language==='python'?'#dc3545':'#ffc107'} className="icon" onClick={() => {
                            onClick('python', codeObject['python'])
                        }}/>
                        <FontAwesomeIcon icon={faJs} size="3x" style={{marginLeft:"3rem"}} color={language==='js'?'#dc3545':'#ffc107'} className="icon" onClick={() => {
                            onClick('js', codeObject['js'])
                        }}/>
                        <FontAwesomeIcon icon={faJava} size="3x" style={{marginLeft:"3rem"}} color={language==='java'?'#dc3545':'#ffc107'} className="icon" onClick={() => {
                            onClick('java', codeObject['java'])
                        }}/>
                    </div>
                </div>
            </div>

        </Fragment>


    );
};

export default Coding;