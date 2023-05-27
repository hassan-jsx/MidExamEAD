import React from 'react';
import PollDisplay from './Components/PollDisplay';
import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import UserParticipationComponent from './Components/AnotherUserParticipant';
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PollDisplay />} />
                    <Route
                        path="/user"
                        element={<UserParticipationComponent />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
