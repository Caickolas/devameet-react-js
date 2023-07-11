import logo from '../assets/images/logo.svg';
import mailIcon from '../assets/images/mail.svg';
import passwordIcon from '../assets/images/key.svg';
import { PublicInput } from '../components/general/PublicInput';
import { useState } from "react"

export const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="container-public">
            <img className='logo' src={logo} alt="Logo Devameet" />
            <form>

                <PublicInput icon={mailIcon} alt="Email" name="Email" placeholder='Email' type='text'
                    modelValue={login} setValue={setLogin} />

                <PublicInput icon={passwordIcon} alt="Senha" name="Senha" placeholder='Senha' type='password'
                    modelValue={password} setValue={setPassword} />   

                <button type='button' className='button'> Login </button>

                <div className='link'>
                    <p>Não possui uma conta?</p>
                    <a>Faça seu cadastro agora!</a>
                </div>
            </form>
        </div>
    )
}