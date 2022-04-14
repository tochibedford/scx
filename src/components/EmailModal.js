import React, { useRef, useState } from 'react';

const EmailModal = ()=>{
    const [userEmail, setUserEmail] = useState("");
    const circularFollowerRef = useRef(null);

    document.addEventListener('mousemove', (e)=>{
        circularFollowerRef.current.style.left = `${e.pageX - circularFollowerRef.current.parentNode.offsetLeft - circularFollowerRef.current.offsetWidth/2}px`;
        circularFollowerRef.current.style.top = `${e.pageY - circularFollowerRef.current.parentNode.offsetTop - circularFollowerRef.current.offsetHeight/2}px`;
    })

    const closeEmailModal = ()=>{
        document.querySelector(".emailModal").style.display = "none";
    }

    const handleEmailChange = (e)=>{
        setUserEmail(e.target.value);
    }

    return(
        <div className="emailModal">
            <div className="emailForm">
                <div className="circularFollower" ref={circularFollowerRef}></div>
                <div className="closeEmailModal" onClick={closeEmailModal}>X</div>
                <div className="modalInstructions">PROVIDE YOUR EMAIL FOR MORE INFORMATION</div>
                <input type="email" name="emailInput" id="emailInput" className="emailInput" value={userEmail} onChange={handleEmailChange} placeholder='email@address.com' />
            </div>
        </div>
    )
}

export default EmailModal;