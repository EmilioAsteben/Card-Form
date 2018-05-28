import React, {Component} from 'react';
import btn from '../images/button.png';




class Page extends Component {



    state = {

      /*Берут значение инпутов*/
    	name: '',
    	card_number_1:'',
    	card_number_2:'',
    	card_number_3:'',
    	card_number_4:'',
      cvv:'',

      /*Состояния фокуса инпутов*/

      name_focus: false,
      card_number_1_focus: false,
      card_number_2_focus: false,
      card_number_3_focus: false,
      card_number_4_focus: false,
      cvv_focus: false,
      card_number_4_touched: false,

      /*классы*/
    	cardHolderClassname: "card_holder",
      card_number_input_block: "card_number_input_block",
      cvv_className: "cvv",

    	holderError: "",
      cardNumberError: "",
      cvvError: ""

    }

    //Начало блока: фокус текстовых полей
    cardHolderFocused = () => {
      this.setState({name_focus: true})
     

      this.setState({card_number_1_focus: false})
      this.setState({card_number_2_focus: false})
      this.setState({card_number_3_focus: false})
      this.setState({card_number_4_focus: false})
      this.setState({cvv_focus: false})

    }

    cardNumber_1_focused = () => {
      this.setState({card_number_1_focus: true})
   

      this.setState({card_number_2_focus: false})
      this.setState({card_number_3_focus: false})
      this.setState({card_number_4_focus: false})
      this.setState({name_focus: false})
      this.setState({cvv_focus: false})

    }

     cardNumber_2_focused = () => {
      this.setState({card_number_2_focus: true})
     

      this.setState({card_number_1_focus: false})
      this.setState({card_number_3_focus: false})
      this.setState({card_number_4_focus: false})
      this.setState({name_focus: false})
      this.setState({cvv_focus: false})

    }

     cardNumber_3_focused = () => {
      this.setState({card_number_3_focus: true})
      

      this.setState({card_number_2_focus: false})
      this.setState({card_number_1_focus: false})
      this.setState({card_number_4_focus: false})
      this.setState({name_focus: false})
      this.setState({cvv_focus: false})

    }

     cardNumber_4_focused = () => {
      this.setState({card_number_4_focus: true})
    

      this.setState({card_number_2_focus: false})
      this.setState({card_number_3_focus: false})
      this.setState({card_number_1_focus: false})
      this.setState({name_focus: false})
      this.setState({cvv_focus: false})

    }

      cvvFocused = () => {
      
      this.setState({cvv_focus: true})

      this.setState({card_number_2_focus: false})
      this.setState({card_number_3_focus: false})
      this.setState({card_number_1_focus: false})
      this.setState({card_number_4_focus: false})
      this.setState({name_focus: false})

    }

    //Конец блока: фокус текстовых полей




    //handleChange берет value из инпутов и предварительно валидирует

    handleChange = ({target: {value}}) => {

      const name = this.state.name
      const cvv = this.state.cvv
      const card_number_1 = this.state.card_number_1
      const card_number_2 = this.state.card_number_2
      const card_number_3 = this.state.card_number_3
      const card_number_4 = this.state.card_number_4

      switch (true){
        case this.state.card_number_1_focus:
        
      this.setState ({card_number_1:value});

        if(card_number_1.length>=3) {
          this.setState ({card_number_input_block: "card_number_input_block"});
          this.setState ({card_number_error: "" });

        }
        break;
        case this.state.card_number_2_focus:
        
      this.setState ({card_number_2:value});

      if(card_number_2.length>=3) {
          this.setState ({card_number_input_block: "card_number_input_block"});
          this.setState ({card_number_error: "" });

        }
        break;
        case this.state.card_number_3_focus:
        
      this.setState ({card_number_3:value});

      if(card_number_3.length>=3) {
          this.setState ({card_number_input_block: "card_number_input_block"});
          this.setState ({card_number_error: "" });

        }
        break;
        case this.state.card_number_4_focus:
        
      this.setState ({card_number_4:value});

      if(card_number_4.length>=3) {
          this.setState ({card_number_input_block: "card_number_input_block"});
          this.setState ({card_number_error: "" });

        }
        break;

        case this.state.cvv_focus:
        
        this.setState ({cvv:value});

        if(cvv.length>=1) {
          this.setState ({cvv_className: "cvv"});
          this.setState ({cvv_error: "" });
        }

          break;

        case this.state.name_focus:

        
      this.setState ({name:value});
      

      if (!name.match(/^[a-zA-Z0-9\s]+$/) && name.length>=1   ) {
        this.setState({ cardHolderClassname: 'card_holder_not_valid' });
        this.setState({holderError: 'Используйте латинские буквы'});
      } else {
        this.setState({ cardHolderClassname: 'card_holder' })
        this.setState({holderError: ''});
      } ;
      break



      }

       }



       // Переключает поля ввода номера карты при заполнении

    switchInput = () => {


      const card_number_1 = this.state.card_number_1
      const card_number_2 = this.state.card_number_2
      const card_number_3 = this.state.card_number_3
      const card_number_4 = this.state.card_number_4

      const card_number_4_focus = this.state.card_number_4_focus

    if (card_number_1.length === 4 && this.state.card_number_1_focus) {

        this.refs.b.focus();

    } else if (card_number_2.length === 4 && this.state.card_number_2_focus) {
      this.refs.c.focus();

    } else if (card_number_3.length === 4 && this.state.card_number_3_focus) {

      this.refs.d.focus();
    
  }   else if (this.state.card_number_4_focus && card_number_4.length ===0) {
    this.refs.c.focus();

    
  }   else if (this.state.card_number_3_focus && card_number_3.length ===0) {
    this.refs.b.focus();

  }   else if (this.state.card_number_2_focus && card_number_2.length ===0) {
    this.refs.a.focus();

    }  
}




      
      
      
    //submit и валидация

    handleSubmit = e => {

      const cvv = this.state.cvv
      const name = this.state.name
      

      if (
        this.state.card_number_1.length < 4 || 
        this.state.card_number_2.length < 4 ||
        this.state.card_number_3.length < 4 ||
        this.state.card_number_4.length < 4   
         ) {
        e.preventDefault();
        this.setState({card_number_input_block: "card_number_input_block_not_valid"});
        this.setState({card_number_error: "В каждом поле должно быть 4 цифры"})

      
      } else if ( this.state.name.length<4) {
        e.preventDefault();
        this.setState({ cardHolderClassname: 'card_holder_not_valid' });
        this.setState({holderError: 'Минимальная длина 4 символа'});
     

      } else if(!cvv) {
         e.preventDefault();
        this.setState({cvv_className: "cvv_not_valid"});
        this.setState({cvv_error: "Поле не заполнено "});

      } else if (!cvv.match(/^[0-9]{3,4}$/)) {
        e.preventDefault();
        this.setState({cvv_className: "cvv_not_valid"});
        this.setState({cvv_error: "Только 3 цифры "});
        
      } else if (!name.match(/^[a-zA-Z0-9\s]+$/) && name.length>=1   ) {
        e.preventDefault();
        this.setState({ cardHolderClassname: 'card_holder_not_valid' });
        this.setState({holderError: 'Используйте латинские буквы'});
      } 
    	

    }
	



render() {




const {name} = this.state;
const {cardHolderClassname} = this.state;
const {holderError} = this.state;
const {card_number_1} = this.state;
const {card_number_2} = this.state;
const {card_number_3} = this.state;
const {card_number_4} = this.state;
const {card_number_error} = this.state;
const {cvv_error} = this.state;
const {cvv} = this.state;




	return (

		
		<div className = "wrapper" >

	<div className = "menu">

  <div className="menuBar"></div>
		<ul>
			<li>Личный кабинет</li>
			<li>Платежи</li>
			<li>История платежей</li>
			<li>Настройки</li>
			<li>Выйти</li>
		</ul>
	</div>
<form onSubmit={this.handleSubmit} >
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
	<input onFocus={this.cvvFocused} onChange={this.handleChange} value={cvv}  className = {this.state.cvv_className} maxLength = "3"/>
  <div className="cvv_error"><p>{cvv_error}</p></div>
	<div className = "info"></div>



	</div>

		<div className = "card_form"> 
	<p> Номер карты </p> 
  <div className="card_number_error"><p >{card_number_error}</p></div>

	<div className = {this.state.card_number_input_block}>
		<input onKeyUp={() => this.switchInput()} ref="a" onFocus={this.cardNumber_1_focused} onChange={this.handleChange} value={card_number_1} type="text" maxLength="4"/>
		<input onKeyUp={() => this.switchInput()} ref="b" onFocus={this.cardNumber_2_focused} onChange={this.handleChange} value={card_number_2} type="text" maxLength="4"/>
		<input onKeyUp={() => this.switchInput()} ref="c" onFocus={this.cardNumber_3_focused} onChange={this.handleChange} value={card_number_3} type="text" maxLength="4"/>
		<input onKeyUp={() => this.switchInput()} ref="d" onFocus={this.cardNumber_4_focused} onChange={this.handleChange} value={card_number_4} type="text" maxLength="4"/>
    

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
<div className="card_holder_wrapper">

<input  onFocus={this.cardHolderFocused} onChange={this.handleChange} value = {name} id="nameholder" name="from" className= {cardHolderClassname} type="text" placeholder="Держатель карты" />

<p>{holderError}</p>

</div>





	</div>



	</div>


	<button   type= "submit"  value="Проверить"> <img src={btn} alt="Отправить" /> </button>

	</form>
	<footer className = "footer">
	<p>Исходя из астатической системы координат Булгакова, соединение стабильно. Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря, ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс.
</p>

<p>
	Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла.
</p>

<p>Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект. </p>

<p>Устойчивость, например, параллельна. Аргумент перигелия определяет боксит. Проекция вертикально дает уходящий диабаз. Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, что обусловлено не только первичными неровностями эрозионно-тектонического рельефа поверхности кристаллических пород, но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.</p>
<p>Показать описание</p>

	</footer>



		</div>
		




		);

  }

}



export default Page;