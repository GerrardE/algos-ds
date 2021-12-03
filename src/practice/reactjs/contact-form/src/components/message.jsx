import React from 'react';

export const Message = props => <div className="text-center">
     {props.header && <h3 className="message-header">{props.header}</h3>}
    {props.text ? <div className="message-body">{props.text}</div> : <div className="message-body">{props.children}</div>}
</div>
