import './Home.css'

export function Home(){
    return(
        <>
        <section id="home" className="hero">
            <div className="z">

            <img className='perfil' src="https://firebasestorage.googleapis.com/v0/b/porfolio-f7438.appspot.com/o/perfil.jpg?alt=media&token=c1dae221-8034-42e6-919a-a7448418b290" alt="" />
            <h1>Hi, I'm Sntyart5</h1>
            <p>Frontend Developer</p>
            </div>
        </section>
        
        <div className="up"></div>
        <div className="down"></div>
        <div className="left"></div>
        <div className="rigth"></div>

        </>
    )
}