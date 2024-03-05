const BadgeButton = ({ isSelected, onClick }) => {
    return (
        <button
            className={`w-6 rounded-r-md font-medium ${
                isSelected ? "text-slate-50" : "text-slate-600"
            }`}
            onClick={onClick}
        >
            <div
                className={`transition-all inline-block ${
                    isSelected ? "rotate-45" : "rotate-0"
                }`}
            >
                +
            </div>
        </button>
    );
};

export default BadgeButton;