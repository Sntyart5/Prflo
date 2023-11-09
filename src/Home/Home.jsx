import './Home.css'

export function Home(){
    return(
        <>
        <section className="hero">
            <img className='perfil' src="https://firebasestorage.googleapis.com/v0/b/porfolio-f7438.appspot.com/o/perfil.jpg?alt=media&token=c1dae221-8034-42e6-919a-a7448418b290" alt="" />
            <h1>Hi, I'm Sntyart5</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, harum!</p>
        </section>

        
        <section className='About'>
            <h1>About me</h1>
            <div className='SobreMi'>
            <div className='Bio'>
                <h2>Who am i?</h2>
                <h3>i am a Frontend Developer</h3>
                <p>✅ Soy un apasionado desarrollador de software con sólidos conocimientos en tecnologías web modernas y bases de datos relacionales.
                    <br /> <br />✅ Mi experiencia se centra en la creación de interfaces web atractivas y funcionales utilizando HTML, CSS y JavaScript, así como en el desarrollo de aplicaciones dinámicas con ReactJS.
                    <br /> <br />✅ Además, poseo habilidades en el diseño y optimización de bases de datos utilizando MySQL.
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
                        <p>NodeJS</p>
                    </div>
                </div>




            </div>
            </div>
        </section>

<hr />
        <section className="Services">
            <h2>Services</h2>
            <h3>Services I offer to my clients</h3>
            
            <div className="service-items">
                <div className="service-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon cel" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
                    <h4>Fully Responcive</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</p>
                </div>
                <div className="service-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon creative" viewBox="0 0 16 16">
                    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                </svg>
                    <h4>Creaive Desing</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</p>
                </div>
                <div className="service-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon deve" viewBox="0 0 16 16">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
                    <h4>Development</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</p>
                </div>
                <div className="service-item">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='icon social' viewBox="0 0 16 16">
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                </svg>
                    <h4>Social Media Integration</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</p>
                </div>
                <div className="service-item">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='icon perfor' viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                    <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                </svg>
                    <h4>Performance</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</p>
                </div>
                <div className="service-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='icon seo' viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                    <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                </svg>
                    <h4>SEO</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</p>
                </div>
            </div>
        </section>
<hr />
        <section className="Porfolio ">
            <h2>Porfolio</h2>
            <h3>Here you can see the projects i have worked on.</h3>
            <div className="projects main-container">
                <div className="project containers first">
                    <div className="content ">
                    <h5>Type</h5>
                    <p>Project_name</p>
                    <div className="btns">
                    <a className='btnpor' href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg> Repository</a>
                    <a className='btnpor' href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                    </svg>Page
                    </a>  
                    </div>

                    </div>
                </div>
                <div className="project containers second">
                    <div className="content">
                    <h5>Type</h5>
                    <p>Project_name</p>
                    <div className="btns">
                    <a className='btnpor' href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg> Repository</a>
                    <a className='btnpor' href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                    </svg>Page
                    </a>  
                    </div>
                    </div>
                </div>
                <div className="project containers third">
                    <div className="content">
                    <h5>Type</h5>
                    <p>Project_name</p>
                    <div className="btns">
                    <a className='btnpor' href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg> Repository</a>
                    <a className='btnpor' href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                    </svg>Page
                    </a>  
                    </div>

                   </div>

                </div>
            </div>

        </section>

        <section className='Fin'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in maiores, natus optio sit rem nobis accusamus corporis fuga recusandae odio reprehenderit eum perferendis eveniet, earum repellendus labore modi, tempore nulla debitis. Eius nostrum perferendis a placeat iure tenetur temporibus officiis ipsum cupiditate inventore, earum asperiores impedit amet dolorem totam quod minus quae. Officiis, pariatur architecto saepe autem alias qui quidem quia aperiam numquam veniam itaque non ut voluptatibus nesciunt nostrum aliquid iure, ipsam natus, suscipit eius error id! Provident impedit expedita odio iste at obcaecati officiis sed, minima voluptatum inventore. Quidem, reprehenderit magnam illo aut dolores inventore maiores blanditiis expedita unde excepturi cumque vel vero atque iusto nesciunt animi quasi labore repellendus ullam? Est, expedita odit? Enim modi consequuntur qui cupiditate facere minima animi quae maxime ipsum pariatur, error dolores nam? Exercitationem illum possimus, sequi aut laboriosam laudantium molestiae harum facere? Atque dolorum unde dolor, similique fugiat delectus mollitia officia, laborum assumenda reiciendis, minima modi doloribus? Dignissimos, esse. Quos sint eum, eaque earum, cumque quam sunt dignissimos deserunt, porro commodi dicta nostrum odio adipisci! Expedita, doloremque fuga. Nihil corrupti iusto et animi earum eos, exercitationem, at cum cupiditate incidunt praesentium magnam aperiam quisquam ipsum, reiciendis ratione eum distinctio odit quas id ab! Cumque distinctio possimus, provident consequatur sunt, molestiae blanditiis libero voluptas sint odit iusto in perferendis architecto aspernatur et mollitia modi adipisci, voluptatibus officia. Repudiandae aspernatur quia expedita iusto illum? Perferendis soluta necessitatibus error ipsam atque quas, facere eaque laborum suscipit porro quasi sed nostrum est odit! Nihil officia esse deleniti ratione assumenda alias necessitatibus, veniam sapiente distinctio! Dolores, suscipit ipsum! Officiis corporis dolor, error repudiandae quod quia autem? Quibusdam hic sit eveniet temporibus, voluptates ullam unde nesciunt quae facilis explicabo quia accusantium, soluta aperiam voluptatibus necessitatibus. Porro eius aliquam vel sint facere, expedita ipsum animi voluptas fugiat hic veritatis, omnis laboriosam repellendus maiores totam doloribus inventore officiis excepturi iure illum alias recusandae. Ab quos perferendis, numquam aliquid, aspernatur corrupti quae ea repellendus enim est a unde amet! Dolorum possimus iste commodi molestias est ipsum ipsam explicabo voluptate cum iusto voluptatum, tempora itaque deleniti! Eum, id expedita voluptates voluptate sed quam dolores obcaecati aspernatur? Quidem quo necessitatibus expedita in pariatur saepe, illo numquam! Sequi ducimus reprehenderit, quod cumque eaque error, ratione vitae velit voluptate, blanditiis aliquid architecto sint. Doloremque tempore ipsam non quia. Enim, illum! Facere assumenda sit dolorum! Repellendus recusandae nobis enim at a adipisci. Corporis maiores veniam quos id voluptates reiciendis temporibus aliquam! Voluptas inventore, molestiae distinctio, excepturi veniam, voluptates illum quod obcaecati repellendus et sequi unde perspiciatis sapiente nostrum maiores illo? Sunt debitis laudantium accusantium ex aliquam, alias reiciendis nesciunt? Error aspernatur nesciunt incidunt reprehenderit impedit magnam vero iste, praesentium quia voluptate nulla porro repudiandae quo vel quod ea enim. Quos cumque corrupti rem optio ullam officiis. Dignissimos dolore optio, beatae laborum consectetur incidunt. Tempora, dolorem, voluptatibus a fugit distinctio ipsum dolor maiores praesentium quisquam velit porro error nemo perspiciatis aut alias ut excepturi amet atque nihil voluptatum dolores. Accusamus vero non voluptatem amet exercitationem vel? Provident earum, aut harum optio nostrum quod? Nam deserunt rerum aperiam odio eius, non amet mollitia hic. Totam nostrum dolor ad atque excepturi labore unde aliquid, quis nulla maiores accusantium magni, omnis sequi voluptatem? Nobis et sequi culpa commodi quaerat doloremque eligendi itaque porro, tempora dignissimos facilis quis ea ipsum error quod assumenda ullam saepe consequatur voluptatibus temporibus harum maiores optio? Aut, in sunt? Provident facere accusantium laudantium? Quisquam vel voluptates earum possimus labore obcaecati distinctio explicabo omnis deserunt! Aut error, minima laborum ipsum quia quae aperiam, eaque porro voluptate perferendis sit? Dicta excepturi molestiae cumque dolorum deleniti, aut ea! Veritatis praesentium alias assumenda adipisci eveniet iure, libero fugit suscipit mollitia id ipsam esse soluta sint error minima! Nihil alias, mollitia eum sed ullam repellendus! Laborum, eos. Modi necessitatibus, illum pariatur ex, odio quia in quis repudiandae veritatis perspiciatis, eaque facilis excepturi. Asperiores veritatis nemo iusto aperiam illo dolor veniam. Dignissimos consequatur, doloribus perspiciatis distinctio dolor ex quis harum laborum. Quam voluptas rerum expedita consectetur minus aliquam tenetur odit magnam suscipit, corporis alias dolorem qui explicabo incidunt placeat eligendi quisquam blanditiis amet cum officiis quis delectus voluptatibus omnis dignissimos! Quae assumenda maiores dolor est excepturi porro? Modi explicabo, magni quisquam minima accusantium reiciendis? Obcaecati magnam quidem ducimus? Mollitia minima ipsa cupiditate ratione est cumque sapiente? Corporis rerum debitis veritatis repudiandae, nam eligendi aliquam nemo perspiciatis, repellendus doloribus illum earum quia numquam molestias fugiat voluptatem quae aspernatur? Pariatur reiciendis perferendis obcaecati voluptates blanditiis sequi mollitia tempora nemo at modi numquam culpa, quis praesentium iste, distinctio inventore quia rem nam rerum natus possimus a optio ipsa! Sunt maiores culpa repudiandae commodi itaque, voluptatibus dolor reiciendis quod repellendus ullam eaque reprehenderit hic nostrum quae illo libero at quam exercitationem, obcaecati nobis facere doloribus deleniti? Consectetur optio odio, ipsa deserunt provident excepturi maiores quos veritatis doloremque aliquam. Molestiae at iusto exercitationem mollitia sed voluptate consequuntur dolorum neque sint quis ipsa facilis, architecto dicta commodi quos in. Repudiandae corrupti aliquam ratione impedit animi facere optio nostrum iure enim mollitia iste in, placeat iusto consequuntur blanditiis aperiam hic ducimus, debitis distinctio fugit. Earum dolorum dolore in veritatis aspernatur quas magnam molestiae, cupiditate perspiciatis dicta, modi odio laborum animi maxime repellat sed. Inventore beatae ipsa sunt cum, a optio. Inventore veniam recusandae blanditiis necessitatibus dolorum suscipit harum laboriosam, ad minima labore, sed eos iusto. Illum quae numquam totam explicabo iste, consequuntur rem voluptate corrupti odio aliquam sit tempore expedita sequi magnam ab culpa, autem quaerat laudantium, molestias saepe cumque nobis? Illo eaque ipsam soluta explicabo libero tempora nulla sed iure ab dolore repellat hic quidem facilis, modi dolores qui atque, molestiae sequi ducimus. Esse, aut, neque distinctio veniam beatae, vero earum quam eligendi repellendus nihil voluptatum adipisci? Adipisci velit consectetur voluptatem sequi pariatur aut praesentium saepe incidunt facilis repellendus amet autem sunt nam magni, ratione dolorem corrupti libero cumque odio nostrum maxime perferendis. Maiores perspiciatis aliquam voluptatum iure porro dolorem excepturi? Fuga officia incidunt laboriosam, quisquam corporis architecto rerum distinctio excepturi reprehenderit quaerat sapiente minima ad?</p>
        </section>

        </>
    )
}