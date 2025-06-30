import React from 'react';
import Typewriter from  'typewriter-effect';

const Future = () => {
    return (
        <div className='AboutPage'>
          <div className="TypeEffect">
            <Typewriter
                options={{
                    strings: ['Soon...', 'Resume Under Construction', 'Check Back Later', 'Thank You for Your Patience..'],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed:20,
                }}
            />
            </div>
        </div>
    );
}

export default Future;