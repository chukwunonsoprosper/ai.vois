import Header from './components/header';
import Body from './components/Body';
import './components/app.css';
import './components/mobile.css'
export default function App() {
    return (
        <div className="body">
            <Header appName='Vois Ai' />
            <Body />
        </div>
    )
}