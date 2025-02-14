import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
            <img src="./logo.png" alt="logo react" />
            <h3>Vite World</h3>

        </div>
    );
};

export default Logo;