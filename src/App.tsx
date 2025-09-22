import { FormViews } from "./components/views/FormViews"
import { FormProvider } from "./context/FormProvider"

function App() {
    return (
        <FormProvider>
            <FormViews />
        </FormProvider>
    )
}

export default App
