import React, {Component} from 'react';
import btn from '../images/button.png';




class Page extends Component {

	



render() {



	return (

		

		<div >

	<div className = "menu">
		<ul>
			<li>Личный кабинет</li>
			<li>Платежи</li>
			<li>История платежей</li>
			<li>Настройки</li>
			<li>Выйти</li>
		</ul>
	</div>

	<div className = "entry_block">
	<div className = "info_block">
	<p>Информация об оплате:</p>
	<p>Номер счета:</p>
	<p>Сумма платежа:</p>
	
	</div>

	<div className = "info_block_value">
	<p>87123658716587</p>
	<p>100 руб.</p>

	</div>

	<h3>Данные банковской карты</h3>



	<div className = "card_form_back"> 
	<div className = "grey_stripe"></div>
	<p>Код CVV2 / CVC2</p>
	<input className = "cvv" maxLength = "3"/>
	<div className = "info"></div>



	</div>

		<div className = "card_form"> 
	<p> Номер карты </p>

	<div className = "card_number_input_block">
		<input type="text" maxLength="4"/>
		<input type="text" maxLength="4"/>
		<input type="text" maxLength="4"/>
		<input type="text" maxLength="4"/>

	</div>

	<p>Cрок действия</p>

<select defaultValue="4" className = "select_month">
<option value="1">01</option>
<option value="2">02</option>
<option value="3">03</option>
<option value="4">04</option>
<option value="5">05</option>
<option value="6">06</option>
<option value="7">07</option>
<option value="8">08</option>
<option value="9">09</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
</select>

<select defaultValue="1" className = "select_year">
<option value="1">2018</option>
<option value="2">2019</option>
<option value="3">2020</option>
<option value="4">2021</option>
<option value="5">2022</option>
<option value="6">2023</option>
<option value="8">2024</option>
<option value="9">2025</option>
<option value="10">2026</option>
<option value="11">2027</option>
<option value="12">2028</option>
</select>

<input className= "card_holder" type="text" placeholder="Держатель карты" />





	</div>



	</div>


	<button  type= "submit"> <img src={btn} /> </button>
	<footer className = "footer">
	<p>Исходя из астатической системы координат Булгакова, соединение стабильно. Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря, ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс.
</p>

<p>
	Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла.
</p>

<p>Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект. </p>

<p>Устойчивость, например, параллельна. Аргумент перигелия определяет боксит. Проекция вертикально дает уходящий диабаз. Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, что обусловлено не только первичными неровностями эрозионно-тектонического рельефа поверхности кристаллических пород, но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.</p>

	</footer>



		</div>
		




		);

}
}



export default Page;