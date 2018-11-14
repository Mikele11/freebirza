import React from 'react';
import mainLinks from './mainLinks.css';
function About() {
  return (
    <div className='container about'>
        <h1 className="h1">Это биржа товаров и услуг</h1>
        <h3>УСЛОВИЯ:</h3>
        <div>
          <h4 className="aboutPunto">1.</h4>
          <p className="aboutPunto">Постить и покупать могут только зарегистрированные пользователи</p>
        </div>
        <div>
          <h4 className="aboutPunto">2.</h4>
          <p className="aboutPunto">Вы должны указывать реальные товары и услуги и стоимсть, которою хотите за них получить</p><br/>       
        </div>
        <div className="aboutFooter">
          Создатель Иляш М
        </div>
    </div>
  );
}

export default About;
