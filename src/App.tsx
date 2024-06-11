import { Provider } from 'react-redux'

import { MainPage } from '@/pages/mainPage'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}
