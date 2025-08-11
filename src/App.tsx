
import { useTranslation } from "react-i18next"
import {useForm, type SubmitHandler} from 'react-hook-form';
import { use } from "react";


type FormFields = {
  email:string;
  password:string;

}
function App() {
  const { t } = useTranslation('tesst');
  const { register, handleSubmit, formState:{errors} } = useForm<FormFields>();
  const onSubmit:SubmitHandler<FormFields> = (data) => {
    
    console.log(data);
  }
  return (
    <>
      <div>
      
      </div>
      <h1>Vite + React</h1>
      <div className="card">

    <h1>{t('WelcomeMessage')}</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', {required: "Email is required"})} type="text" placeholder="Emai" />
      {errors.email && (<div>{errors.email.message}</div>)}
      <input {...register('password')} type="password" placeholder="Password" />
   {errors.password && (<div>{errors.password.message}</div>)}
      <button type="submit">Submit</button>
    </form>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
