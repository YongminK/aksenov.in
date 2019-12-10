import React from "react";
import '../../legacy/css/main.css'
import '../../legacy/css/st.css'
import ParticleComponent from "./ParticleComponent";
import Tree from 'react-tree-graph';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let data = {
            name: 'ГУАП' ,
            children: [
                {
                    name: 'Общее',
                    path: 'vk.com'
                },
                {
                    name: 'Предмет',
                    children: [
                        {
                            name: 'БД'
                        },
                        {
                            name: 'ИКГ'
                        }]
                },
                {
                    name: 'Диплом',
                    children: [
                        {
                            name: 'История'
                        },
                        {
                            name: 'Актуальное'
                        }
                    ]
                }]
        };
        return (
            <>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <ParticleComponent/>
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }}
                    >
                    </div>
                </div>
                <div className="contents">
                    <div id="content">
                        {/*<div className="menupointer">*/}
                        {/*    <img src={require('../../img/arrow.png')} alt="something here!"/></div>*/}
                        <div className="perspective">
                            <input type="radio" name="tabs" id="tab-top"/>
                            <label className="tab" for="tab-top"><span role="img">👤</span> личное</label>
                            <input type="radio" name="tabs" id="tab-front" checked/>
                            <label className="tab" for="tab-front"><span role="img">⌂</span></label>
                            <input type="radio" name="tabs" id="tab-bottom"/>
                            <label className="tab" for="tab-bottom"><span role="img">⚛</span> наука</label>
                            <input type="radio" name="tabs" id="tab-back" onClick="init();"/>
                            <label className="tab" for="tab-back"><span role="img">🎓</span> университет</label>
                            <div className="cube">
                                <div className="tab-content">
                                    <h1>Обо мне</h1>
                                    <div className="lyrics">
                                        Имею высшее образование, неоконченную степень кандидата
                                        технических наук. Увлекаюсь программированием, психологией,
                                        педагогикой, музыкой (когда-то &ndash; играть,
                                        теперь &ndash; слушать). Люблю чай, пешие прогулки и
                                        общество умных людей. Ненавижу &ndash; все остальное.<br/>
                                        У меня есть почта: me@этот_сайт. Также по сети разбросаны
                                        мои аккаунты в различных сервисах.<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;захожу
                                        часто<br/>
                                        вк &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&mdash;
                                        <a
                                            href="https://vk.com/aksenoff"
                                            target="_blank"
                                            rel='noopener noreferrer'>
                                            vk.com/aksenoff
                                        </a>
                                        <br/>
                                        телеграм &nbsp;&nbsp;&mdash;
                                        <a
                                            href="https://t.me/aksenoff"
                                            target="_blank"
                                            rel='noopener noreferrer'>
                                            t.me/aksenoff
                                        </a>
                                        <br/>
                                        гитхаб &nbsp;&nbsp;&nbsp;&nbsp;&mdash;
                                        <a href="https://github.com/aksenoff"
                                           target="_blank"
                                           rel='noopener noreferrer'
                                        >github.com/aksenoff
                                        </a>
                                        <br/>
                                        твиттер &nbsp;&nbsp;&nbsp;&mdash;
                                        <a href="https://twitter.com/aksenoff"
                                           target="_blank"
                                           rel='noopener noreferrer'
                                        >twitter.com/aksenoff
                                        </a>
                                        <br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;захожу не
                                        очень часто
                                        <div className="rare">
                                            инстаграм &nbsp;&mdash;
                                            <a href="https://instagr.am/aksenoff"
                                               target="_blank"
                                               rel='noopener noreferrer'
                                            >instagr.am/aksenoff
                                            </a>
                                            <br/>
                                            фейсбук &nbsp;&nbsp;&nbsp;&mdash;
                                            <a href="https://fb.com/aksenoff"
                                               target="_blank"
                                               rel='noopener noreferrer'
                                            >fb.com/aksenoff
                                            </a>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;не захожу
                                        вообще
                                        <div className="never">
                                            делишез &nbsp;&nbsp;&nbsp;&mdash;
                                            <a href="https://del.icio.us/aksenoff"
                                               target="_blank"
                                               rel='noopener noreferrer'
                                            >
                                                del.icio.us/aksenoff
                                            </a>
                                            <br/>
                                            тумблер &nbsp;&nbsp;&nbsp;&mdash;
                                            <a href="https://aksenoff.tumblr.com"
                                               target="_blank"
                                               rel='noopener noreferrer'
                                            >
                                                aksenoff.tumblr.com
                                            </a>
                                            <br/>
                                            хабр &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&mdash;
                                            <a href="https://habr.com/users/xnv/"
                                               target="_blank"
                                               rel='noopener noreferrer'
                                            >
                                                habr.com/users/xnv
                                            </a>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div className="intro">
                                        <h1>Добрый день</h1>
                                        <div className="lyrics">
                                            Меня зовут Алексей.<br/>
                                            Хотя если вы студент, для вас &ndash; Алексей
                                            Владимирович.<br/>
                                            Это главная страница сайта, где собрана вся или почти
                                            вся информация, касающаяся меня, которую вам может
                                            потребоваться знать и которую я счел нужным
                                            предоставить.<br/>
                                            ☞ Справа есть вкладки-разделы по темам.<br/>
                                            {/*☜ Слева прячется меню, там быстрые ссылки на важные*/}
                                            {/*вещи.<br/>*/}
                                            <br/>
                                            Этот сайт находится в процессе постоянного обновления,
                                            переработки и наполнения. Ведь, как известно,
                                            совершенству нет предела (и
                                            прокрастинации &ndash; тоже).<br/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <h1>⚛</h1>
                                    <div className="lyrics">
                                        Вам <a href="./guap/science/" target="_blank" rel='noopener noreferrer'>сюда</a>.
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div className="lyrics">
                                        Исторически сложилось, что я работаю преподавателем в
                                        СПбГУАП. Попытавшись визуально структурировать свою
                                        деятельность там и разделы сайта, которые это описывают, я
                                        получил вот это:
                                    </div>
                                    <Tree
                                        data={data}
                                        height={300}
                                        width={300}
                                        animated
                                        svgProps={{
                                            className: 'custom-tree'
                                        }}
                                        steps={3}
                                        duration={1000}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <span>Алексей Аксенов, {(new Date().getFullYear())}</span>
                        </div>
                    </div>
                </div>
            </>


        )
    }
}