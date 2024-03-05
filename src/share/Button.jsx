const Button = ({ onClick, label, isContinue, step }) => {
    const buttonClasses = `text-center ${
        isContinue
            ? "bg-sky-500 hover:bg-sky-600"
            : "basis-1/3 bg-slate-500 hover:bg-slate-600"
    } rounded-md my-2 py-2 transition-all ${
        isContinue && step > 1 ? "w-2/3" : "w-full"
    }`;

    return (
        <button className={buttonClasses} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;