import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl ,key,size,history,linkUrl,match}) => (

    <div className= {`${size} menu-item`} onClick = { () => { history.push(`${match.url}${linkUrl}`)}}>
        <div className="background" style = {{
            background: `linear-gradient(to top,rgba(0,0,0,0.7),rgba(0,0,0,0.4)) , url(${imageUrl}) `,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            backgroundPosition: 'center'
                }} ></div>
                <div className="content">
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
        
    </div>
);

export default withRouter(MenuItem);