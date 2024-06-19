import React from "react";

import adventure from '../img/adventure-m.png'
import video1 from '../video/VID-20170424-WA0006.mp4';

export default function Home() {
    return (
        <main className="col-lg-8 col-md-12 text-center rounded bg-light p-3">
            <h2>Cabeçalho do texto principal</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nemo repellendus dolore odio quod nam aspernatur obcaecati placeat ipsa expedita non, eum corporis iste provident quas, qui exercitationem incidunt cumque.</p>

            {/* <video width='560' height='315' controls>
                <source src={video1} />
            </video> <br></br> */}

            <picture>
                <img src={adventure} alt="" />
            </picture>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nemo repellendus dolore odio quod nam aspernatur obcaecati placeat ipsa expedita non, eum corporis iste provident quas, qui exercitationem incidunt cumque.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nemo repellendus dolore odio quod nam aspernatur obcaecati placeat ipsa expedita non, eum corporis iste provident quas, qui exercitationem incidunt cumque.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nemo repellendus dolore odio quod nam aspernatur obcaecati placeat ipsa expedita non, eum corporis iste provident quas, qui exercitationem incidunt cumque.</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </main>
    )
};