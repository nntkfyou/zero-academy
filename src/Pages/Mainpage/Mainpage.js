import React from 'react';
import './Css_folder/Mainpage.css';
import Form from './Form';
import Carousel from './Carousel';



function Mainpage() {
    return (
        <>
            <div className='main-wrapper'>

                { /* Вступительная информация на главной странице */}

                <div className='first-fragment'>
                    <h1 className='first-fragment-heading'>
                        <span>Улучшайте</span> свои навыки  в любое время
                    </h1>
                    <p className='first-fragment-text'>Давайте пройдем онлайн-курс, чтобы <span> улучшить
                        свои навыки</span> по-другому, вы можете
                        установить свое <span>собственное время обучения</span>
                        в соответствии с вашими потребностями в
                        обучении. Так Вы можете спокойно <span>учиться
                            и усваивать материал.</span></p>
                    <div>
                        <button className='btn-start'> Начать </button>
                        <button className='btn-watch-video'> Смотреть видео </button>
                    </div>
                </div>
                <div className='cards'>

                    <div className='card-student cards'>
                        <p className='bold-card-text'>10.000+</p>
                        <p className='thin-card-text'><span>Студентов</span></p>
                    </div>

                    <div className='card-course cards'>
                        <p className='bold-card-text'>50+</p>
                        <p className='thin-card-text'>Курсов</p>
                    </div>

                    <div className='card-mentor cards'>
                        <p className='bold-card-text'>30+</p>
                        <p className='thin-card-text'>Наставников</p>
                    </div>




                </div>

                { /* Карточка с преимуществами */}

                <div className='advantages'>
                    <div className='advantages-img'></div>
                    <div className='advantages-text'>
                        <h2 className='advantages-heading' >Наши преимущества:</h2>
                        <ul className='advantages-list'>
                            <li>Сертификат участника</li>
                            <li>Индивидуальный подход к каждому</li>
                            <li>Постоянный доступ к курсам</li>
                            <li>Вернём полную сумму, если Вам не понравится курс</li>
                        </ul>
                        <button className='advantages-btn'>Подробнее</button>
                    </div>

                </div>

                {/*Images*/}
                <div className='sticker'></div>
                <div className='vector-img1'></div>
                <div className='vector-img2'></div>
                <div className='vector-img3'></div>
                <div className='vector-img4'></div>

            </div>

            <Form />
            <Carousel />
            {/* <Carousel>
            <div className='carousel-card-1 carousel-cards'>Card1</div>
            <div className='carousel-card-2 carousel-cards'>Card2</div>
            <div className='carousel-card-3 carousel-cards'>Card3</div>
            <div className='carousel-card-2 carousel-cards'>Card2</div>
            <div className='carousel-card-3 carousel-cards'>Card3</div>
        </Carousel> */}
        </>
    )
}

export default Mainpage
