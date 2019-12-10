import React from 'react';
import './personal.sass';

export default function Personal() {
    return (
        <div className="personal" id='personal'>
            <p className="personal__text">
                Имею высшее образование, неоконченную степень кандидата технических наук. Увлекаюсь программированием, психологией, педагогикой, музыкой (когда-то – играть, теперь – слушать). Люблю чай, пешие прогулки и общество умных людей. Ненавижу – все остальное.<br></br><br></br><br></br>
                У меня есть почта: me@этот_сайт. Также по сети разбросаны мои аккаунты в различных сервисах.
            </p>
            <div className="contacts">
                <div>
                    <p className='contacts__title'>Захожу часто</p>
                    <ul className="contacts__offten">
                        <li><a href="http://vk.com/aksenoff"> <i className="fab fa-vk"></i></a></li>
                        <li><a href="http://t.me/aksenoff"><i className="fab fa-telegram-plane"></i></a></li>
                        <li><a href="http://github.com/aksenoff"><i className="fab fa-github"></i></a></li>
                        <li><a href="http://twitter.com/aksenoff"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
                <div>
                    <p className='contacts__title'>Захожу не очень часто</p>
                    <ul className="contacts__rarely">
                        <li><a href="http://instagr.am/aksenoff"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="http://fb.com/aksenoff"><i className="fab fa-facebook-f"></i></a></li>
                    </ul>
                </div>
                <div>
                    <p className='contacts__title'>Не захожу вообще</p>
                    <ul className="contacts__never">
                        <li><a href="http://del.icio.us/aksenoff"><i className="fab fa-delicious"></i></a></li>
                        <li><a href="http://aksenoff.tumblr.com"><i className="fab fa-tumblr"></i></a></li>
                        <li><a href="http://habr.com/users/xnv" className="habr">HABR</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}