import React, {Component} from 'react';




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

	</div>

	</div>

	<footer className = "footer"></footer>



		</div>
		




		);

}
}



export default Page;