import React from 'react';
import { useSelector } from 'react-redux';

const Email = () => {
    const email = useSelector(({ user }) => user.email);
    return (        
            <div>
               <p>Email:</p> 
                <span data-testid="email-field">{email}</span>
            </div>        
)
}
export default Email;