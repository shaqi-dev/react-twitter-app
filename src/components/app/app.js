import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusfilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';


const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'ssda'},
        {label: 'That is so good', important: false, id: 'qqqw'},
        {label: 'I need a break...', important: false, id: 'sdss'}
    ];

    return ( 
    <div className='app'>
        <AppHeader/>
        <div className='search-panel d-flex'>
            <SearchPanel/>
            <PostStatusfilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
    </div>
    )
}

export default App;