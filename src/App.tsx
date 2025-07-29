
import { useTranslation } from "react-i18next"


function App() {
  const { t } = useTranslation('tesst');

  return (
    <>
      <div>
      
      </div>
      <h1>Vite + React</h1>
      <div className="card">

   


    <h1>{t('WelcomeMessage')}</h1>
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
