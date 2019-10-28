import React from 'react';
import './header.sass';
import { Navbar, Nav, Jumbotron } from 'react-bootstrap';
export default function Header() {
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Алексей Аксенов</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Главная</Nav.Link>
                        <Nav.Link href="#link">Личное</Nav.Link>
                        <Nav.Link href="#home">Наука</Nav.Link>
                        <Nav.Link href="#home">Университет</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    Меня зовут Алексей.<br></br>
                    Хотя если вы студент, для вас – Алексей Владимирович.<br></br>
                    Это главная страница сайта, где собрана вся или почти вся информация, касающаяся меня, которую вам может потребоваться знать и которую я счел нужным предоставить.<br></br>

                    Этот сайт находится в процессе постоянного обновления, переработки и наполнения. Ведь, как известно, совершенству нет предела (и прокрастинации – тоже).
                 </p>
            </Jumbotron>
            
        </div>
    )
}