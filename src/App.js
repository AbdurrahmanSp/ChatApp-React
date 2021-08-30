import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed'

import './App.css'


const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    setTimeout(() => localStorage.clear(), 5000)

    return (
        <ChatEngine
            height="100vh"
            projectID="9bd85dc5-082c-47f0-828c-7c8c8ee26209"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App