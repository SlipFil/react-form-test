import React, { useEffect, useState } from 'react'


export function Form ({props}){

const [name, setName]=useState('')
const [email, setEmail]=useState('')
const [phone, setPhone]=useState('')
const [nameDirty, setNameDirty]=useState(false)
const [emailDirty, setEmailDirty]=useState(false)
const [phoneDirty, setPhoneDirty]=useState(false)
const [nameError, setNameError]=useState('Поле Имя не может быть пустым')
const [emailError, setEmailError]=useState('Поле Email не может быть пустым')
const [phoneError, setPhoneError]=useState('Поле телефон не может быть пустым')
const [formValid, setFormValid]=useState(false)
const [checkbox, setCheckbox]=useState(false)



useEffect(()=>{
    if(nameError||emailError||phoneError||!checkbox){
        setFormValid(false)
    }else {setFormValid(true)}
},)


const nameHandler = (e) => {
    setName(e.target.value)
    const re = RegExp(/^[a-zа-я]{3,15}$/)
    if(!re.test(String(e.target.value).toLowerCase()))
     {
         setNameError('Имя не должно содержать цифр и быть не меньше 2-х букв')
     } else {setNameError('')}
    }

const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
    if(!re.test(String(e.target.value).toLowerCase()))
     {
         setEmailError('Некорректный  Email')
     } else {setEmailError('')}
}

const phoneHandler = (e) => {
    setPhone(e.target.value)
    const re = RegExp(/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/)
    if(!re.test(String(e.target.value).toLowerCase()))
     {
         setPhoneError('Некорректный  номер')
     } else {setPhoneError('')}
}

const checkboxHandler = (e)=>{
    if (checkbox===false){ 
        setCheckbox(true)
    } else {setCheckbox(false)}
    
}

const blurHandler = (e) => {
    switch (e.target.name){
        case 'name':
            setNameDirty(true)
            break;
        case 'email':
            setEmailDirty(true)
            break;
        case 'phone':
            setPhoneDirty(true)
            break;
    }
}


    return (
        <div className="form-body">
            <h2>Регистрация</h2>
            <div>
                <div className="have-account">Уже есть аккаунт? <a href="#">Войти</a> </div>
            </div>
            <form className="form" >
                <div className="form-group name">
                    <label htmlFor='name'>Имя</label>
                    <input type='text'
                           id='Name'
                           className='form-control'
                           value= {name}
                           name='name'
                           // onChange={this.changeInputHandler}
                        placeholder='Введите Ваше Имя'
                        onBlur = {e=>blurHandler(e)}
                        onChange = {e=> nameHandler(e)}
                    />
                    {(nameDirty && nameError) && <div className="error" style={{color:'red'}}>{nameError}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                           id='email'
                           className='form-control'
                           value= {email}
                           name='email'
                        // onChange={this.changeInputHandler}
                           placeholder='Введите Ваш Email'
                           onBlur = {e=>blurHandler(e)}
                           onChange= {e => emailHandler(e)}
                    />
                    {(emailDirty && emailError) && <div className="error" style={{color:'red'}}>{emailError}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor='phone'>Номер телефона</label>
                    <input type='text'
                           id='phone'
                           className='form-control'
                           value= {phone}
                           name='phone'
                        // onChange={this.changeInputHandler}
                           placeholder='Введите Ваш Номер'
                           onBlur = {e=>blurHandler(e)}
                           onChange = {e=>phoneHandler(e)}
                    />
                    {(phoneDirty && phoneError) && <div className="error" style={{color:'red'}}>{phoneError}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor='language'>Язык</label>
                    <select className='language' name="language" id="language" placeholder='Выберите язык' >
                        <option value="Russian">Русский</option>
                        <option value="English">Английский</option>
                        <option value="Chinese">Китайский</option>
                        <option value="Spanish">Испанский</option>
                    </select>
                </div>
                <div className='checkbox-block'>
                    <input className="checkbox" type="checkbox" checked={checkbox} onChange={e=>checkboxHandler(e)}/>
                    <div className="checkbox-text">
                        Принимаю <a href="#">условия</a> использования
                    </div>

                </div>
                
                <button className='btn' disabled={!formValid} type='submit' >Зарегистрироваться</button>
            </form>
        </div>
    )
}