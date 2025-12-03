import React from 'react';
import cl from './MyModal.module.css';
const MyModal = ({children, vivsible, setVisible}) => {

    const rootVisible = [cl.myModal]
    if(vivsible){
        rootVisible.push(cl.active);
    }

    return (
        <div className={rootVisible.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => (e.stopPropagation())}>
                {children}
            </div>
            
        </div>
    );
};

export default MyModal;