import React from 'react'
import './Css_folder/Footer.css'

function Footer() {
    return (
        <>
            <div className='footer-wrapper'>
                <div className='information'>
                    <h2 className='courses-heading'> Направления </h2>
                    <ul className='courses-list-1 list'>
                        <li><a href='/'>Дизайн</a></li>
                        <li><a href='/'>Английский язык</a></li>
                        <li><a href='/'>Общее развитие</a></li>
                        <li><a href='/'>Творчество</a></li>
                        <li><a href='/'>Школа</a></li>

                    </ul>

                    <ul className='courses-list-2 list'>
                    <li><a href='/'>Программирование</a></li>
                    <li><a href='/'>Маркетинг</a></li>
                    <li><a href='/'>Психология</a></li>
                    <li><a href='/'>Другое</a></li>
                    

                    </ul>

                    <h2 className='info-heading'> О Zero.Academy </h2>
                    <ul className='info-list list'>
                        <li><a href='/'>О платформе</a></li>
                        <li><a href='/'>Центр карьеры</a></li>
                        <li><a href='/'>Отзывы</a></li>
                        <li><a href='/'>Контакты</a></li>
                        <li><a href='/'>Вакансии</a></li>
                        <li><a href='/'>Для учителей</a></li>
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Footer
