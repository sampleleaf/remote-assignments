import { useState } from "react";

const Section = () => {
    const [ hide, setHide] = useState(true)

    const visible = () => {
        setHide(false)
    }

    return (
        <>
            <section>
                <h3 className="article-title">Section Title</h3>
                <article className="grid-container">
                    <div><p>Content Box 1</p></div>
                    <div><p>Content Box 2</p></div>
                    <div><p>Content Box 3</p></div>
                    <div><p>Content Box 4</p></div>
                </article>
            </section>
            <div className="showContent">
                <button onClick={visible}>Call to Action</button>
            </div>
            <section className={hide ? 'hide' : ''}>
                <article className="grid-container">
                    <div><p>Content Box 1</p></div>
                    <div><p>Content Box 2</p></div>
                    <div><p>Content Box 3</p></div>
                    <div><p>Content Box 4</p></div>
                </article>
            </section>
        </>
    )
}

export default Section;