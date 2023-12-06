import './About.css'

export function About(){
    return(
        <>
        <section id="about" className='About'>
            <h1>About me</h1>
            <div className='SobreMi'>
            <div className='Bio'>
                <h2>Who am I?</h2>
                <h3>I'm a Frontend Developer</h3>
                <p>✅ I am a passionate software developer with strong expertise in modern web technologies and relational databases.
                    <br /> <br />✅ My experience focuses on creating attractive and functional web interfaces using HTML, CSS, and JavaScript, as well as developing dynamic applications with ReactJS.
                </p>
                <a className='Cv' download="CurriculumSV" href="../Archivos/CvSantiagoVargas.pdf">Dowland CV</a>
            </div>

            <div className='Skills'>
                <h2>Mis Skills</h2>
                <div className="logos">
                    <div class="skill-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/porfolio-f7438.appspot.com/o/HTML.png?alt=media&token=faf5e67b-d966-4215-b05e-64b15fad6282" alt="" className="skill" />
                        <p>HTML</p>
                    </div>
                    <div class="skill-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/porfolio-f7438.appspot.com/o/CSS.png?alt=media&token=e4c5aa2d-49ba-49f4-8612-590abff8161b" alt="" className="skill" />
                        <p>CSS</p>
                    </div>
                    <div class="skill-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/porfolio-f7438.appspot.com/o/Js.png?alt=media&token=df033325-6352-4bba-a272-ac401dcd3e77" alt="" className="skill" />
                        <p>JavaScript</p>
                    </div>
                    <div class="skill-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/porfolio-f7438.appspot.com/o/ReactJs.png?alt=media&token=0090520a-258a-4904-9a11-c1c809cc1247" alt="" className="skill" />
                        <p>ReactJS</p>
                    </div>
                    <div class="skill-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/porfolio-f7438.appspot.com/o/Node.png?alt=media&token=1310cb0a-7ba4-439f-b19b-96c5dc5d0ca0" alt="" className="skill" />
                        <p>NodeJS</p>
                    </div>
                    <div class="skill-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/porfolio-f7438.appspot.com/o/git.png?alt=media&token=01e1f56e-6ef7-460e-a81f-d1769a65fad0" alt="" className="skill" />
                        <p>Git</p>
                    </div>
                </div>

            </div>
            </div>
        </section>
        </>
    )

}