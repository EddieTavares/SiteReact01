import React from "react";

import i200w from '../img/200w.webp'
import insta from '../img/insta.png'

export default function Aside() {
    return (
        <aside className="col-lg-4 col-md-12 text-center bg-warning rounded p-3">
        <h2>Cabeçalho do texto lateral</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus quaerat veniam, ducimus molestiae aliquam dolorum quidem nemo quae, laudantium exercitationem? Accusamus, veniam possimus necessitatibus soluta ipsam molestias doloremque ipsum.</p>
        <picture>
            <img src={i200w} alt="" />
        </picture>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti similique eveniet laudantium accusamus magnam minus explicabo molestiae sint et? Voluptate soluta libero debitis fugit. Ea vitae rem sed amet in.</p>
        <picture>
            <img src={insta} alt="" />
        </picture>
    </aside>   
)};

