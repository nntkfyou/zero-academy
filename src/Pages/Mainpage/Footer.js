import React from 'react'
import './Css_folder/Footer.css'

function Footer() {
    return (
        <>
            <div className='footer-wrapper'>
                <div className='information'>
                    <h2 className='courses-heading'> Направления </h2>
                    <ul className='courses-list-1 list'>
                        <li>Дизайн</li>
                        <li>Английский язык</li>
                        <li>Общее развитие</li>
                        <li>Творчество</li>
                        <li>Школа</li>

                    </ul>

                    <ul className='courses-list-2 list'>
                        <li>Программирование</li>
                        <li>Маркетинг</li>
                        <li>Психология</li>
                        <li>Другое</li>
                    </ul>

                    <h2 className='info-heading'> О Zero.Academy </h2>
                    <ul className='info-list list'>
                        <li>О платформе</li>
                        <li>Центр Карьеры</li>
                        <li>Отзывы</li>
                        <li>Контакты</li>
                        <li>Вакансии</li>
                        <li>Для учителей</li>
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Footer
