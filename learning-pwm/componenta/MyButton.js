"use client";

export function MyButton() {
    const handleClick = () => {
       window.open('https://github.com/Pedro-Vic3005', '_blank');
    };
    return (
        <>
            <button onClick={handleClick}>MyButton</button>
        </>
    );
}