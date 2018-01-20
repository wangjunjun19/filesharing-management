
import React from 'react';


render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>

    </Router>
</Provider>, document.getElementById("content"));
