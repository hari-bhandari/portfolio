import React, {Fragment, useState} from 'react';
import '../css/Coding.css'
const Coding = () => {
    const codeObject = {
        python: ['class Person:', 'def __init__(self,name,dateOfBirth=2001):', 'self.name="Hari Bhandari"', 'self.age=datetime.datetime.now().year-dateOfBirth'],
        java: ['public class Person:{', 'String final name;', 'int final dateOfBirth;', 'public Person(String name,int dateOfBirth){', ' this.name="Hari Bhandari";', 'this.dateOfBirth=Calendar.getInstance().get(Calendar.YEAR)-dateOfBirth}}'],
        js: ['class Person:', 'constructor(name,dateOfBirth=2001){', 'this.name="Hari Bhandari"', 'this.age = new Date().getFullYear() - dateOfBirth']
    }
    const [language, setLanguage] = useState('python')
    const [text, setText] = useState(codeObject['python'])
    const onClick = (language, text, char, delay) => {
        setLanguage(language)
        setText(text)
        document.documentElement.style.setProperty('--char', char);
        document.documentElement.style.setProperty('--char-ch', `${char}ch`);
        document.documentElement.style.setProperty('--speed', delay);
    }


    return (
        <Fragment>
            <div className="card text-white bg-dark mb-3" style={{width: '35rem', marginTop: '5em', backgroundColor: '#353839'}}>
                <div className="card-body">

                    <p className={"text-white"}>{text[0]}</p>
                    <p className={"ml-2 text-white"}>{text[1]}</p>
                    <p className={language === 'java' ? "ml-2 text-white" : "ml-4 text-white"}>{text[2]}</p>
                    <p className={language === 'java' ? "ml-2 text-white" : "ml-4 text-white animate"}>{text[3]}</p>
                    {language === 'java' ? (
                        <div>
                            <p className={"ml-4 text-white"}>{text[4]}</p>
                            <p className={"ml-4 text-white animate"}>{text[5]}</p>
                        </div>
                    ) : ''}
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-between py-1 ">
                    <div className="d-flex flex-row">
                        <i className={language === 'python' ? "fab fa-python fa-3x ml-5 text-danger" : "fab fa-python fa-3x ml-5 text-warning"} onClick={() => {
                            onClick('python', codeObject['python'], 49, '5s')

                        }}></i>
                        <i className={language === 'js' ? "fab fa-js fa-3x ml-5 text-danger" : "fab fa-js fa-3x ml-5 text-warning"} onClick={() => {
                            onClick('js', codeObject['js'], 42, '4s')
                        }}></i>
                        <i className={language === 'java' ? "fab fa-java fa-3x ml-5 text-danger" : "fab fa-java fa-3x ml-5 text-warning"} onClick={() => {
                            onClick('java', codeObject['java'], 72, '8s')
                        }
                        }></i>
                    </div>
                </div>
            </div>

        </Fragment>


    );
};

export default Coding;