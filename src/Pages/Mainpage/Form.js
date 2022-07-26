import React from 'react'
import './Css_folder/Form.css'

function Form() {
    return (
        <>
            <div className='form-wrapper'>
                <h2 className='form-heading'>Поможем в выборе!</h2>
                <p className='form-text'>Если у вас есть вопросы о
                    формате или вы не знаете,
                    что выбрать, оставьте
                    свой номер — мы позвоним,
                    чтобы ответить на все
                    ваши вопросы.</p>
                <form className='form'>

                    <input type='text' className='input-name input-text' placeholder='Имя Фамилия Отчество'></input>
                    <input type='tel' className='input-phone input-text' placeholder='Номер телефона'></input>
                    <input type='email' className='input-email input-text' placeholder='Почта'></input>
                    <input type='submit' className='submit-btn' placeholder='Отправить'></input>
                </form>
            </div>
        </>
    )
}

export default Form
