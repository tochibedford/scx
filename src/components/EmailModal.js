import React, { useRef, useState } from 'react';

const EmailModal = ()=>{
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [submitStatus, setSubmitStatus] = useState("SUBMIT");
    const circularFollowerRef = useRef(null);

    document.addEventListener('mousemove', (e)=>{
        if(circularFollowerRef.current){
            circularFollowerRef.current.style.left = `${e.pageX - circularFollowerRef.current.parentNode.offsetLeft - circularFollowerRef.current.offsetWidth/2}px`;
            circularFollowerRef.current.style.top = `${e.pageY - circularFollowerRef.current.parentNode.offsetTop - circularFollowerRef.current.offsetHeight/2}px`;
        }
    })

    const closeEmailModal = ()=>{
        document.querySelector(".emailModal").style.display = "none";
    }

    const handleEmailChange = (e)=>{
        setUserEmail(e.target.value);
    }

    const handleNameChange = (e)=>{
        setUserName(e.target.value);
    }

    const handleSubmit = (e)=>{
        //do something with name and email
        setUserName("");
        setUserEmail("");
        document.querySelector(".modalButtonText").classList.add("swoopIn");
        setSubmitStatus("✔");
        setInterval(()=>{
            document.querySelector(".modalButtonText").classList.remove("swoopIn");
            setSubmitStatus("SUBMIT");
        }, 1000)

    }

    return(
        <div className="emailModal">
            <div className="emailForm">
                <div className="circularFollower" ref={circularFollowerRef}></div>
                <div className="closeEmailModal" onClick={closeEmailModal}>X</div>
                <div className="modalInstructions">PROVIDE YOUR EMAIL FOR MORE INFORMATION</div>
                <input type="text" name="nameInput" id="nameInput" className="nameInput modalInput" value={userName} onChange={handleNameChange} placeholder='Type Name Here' />
                <input type="email" name="emailInput" id="emailInput" className="emailInput modalInput" value={userEmail} onChange={handleEmailChange} placeholder='email@address.com' />
                <button className='modalButton modalInput' onClick={handleSubmit}><div className="modalButtonText">{submitStatus}</div></button>
            </div>
        </div>
    )
}

export default EmailModal;