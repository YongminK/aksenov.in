import React from "react";

export default function Menu() {
    return(
        <div className="meny">
            <h2>Быстрые ссылки для студентов</h2>
            <ul>
                <li><a href="./guap/x3dom" target="_blank">ИКГ</a></li>
                <li><a href="./guap/db/2019/ss" target="_blank">Текущий семестр БД</a></li>
                <li><a href="./guap/db/2018/ss" target="_blank">Прошлый семестр БД</a></li>
            </ul>
            <h2>(Некоторые) подсайты</h2>
            <ul>
                <li><a href="https://blog.aksenov.in" target="_blank">blog</a>.aksenov.in</li>
                <li><a href="https://blog.aksenov.in/ru" target="_blank">блог</a>.aksenov.in</li>
                <li><a href="https://poll.aksenov.in" target="_blank">poll</a>.aksenov.in</li>
                (fixme)
                <li><a href="https://todo.aksenov.in" target="_blank">todo</a>.aksenov.in</li>
            </ul>
            <h2>Машина времени</h2>
            Как выглядел сайт в разные периоды времени
            <ul>
                <li>сайт <a href="javascript:void(0);" onClick="time_travel(1);">v 1.0</a></li>
                (2010-2013)
                <li>сайт <a href="javascript:void(0);" onClick="time_travel(2);">v 2.0</a></li> (2013-2016)
                <li>сайт <a href="javascript:void(0);" onClick="time_travel(3);">v 3.0</a></li> (2016)
                <li>сайт <a href="javascript:void(0);" onClick="time_travel(4);">v 4.0</a></li> (март 2017)
                <li>сайт <a href="javascript:void(0);" onClick="present_times();">v 5.0</a></li> (2017-...)
            </ul>
        </div>
    )
}