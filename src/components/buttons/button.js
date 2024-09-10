export default function Button({ buttonType, buttonStyle, buttonLabel, onClickFn }) {
    if (!buttonStyle) {
        console.log("buttonStyle needed");
        return null;
    }

    let buttonClasses = 'font-medium text-base px-3 py-2 rounded-lg w-max';
    let styleClasses = ''

    if (buttonStyle === 'fill') {
        styleClasses = 'text-white bg-cyan-950 hover:bg-cyan-900';
    } else if (buttonStyle === 'ghost') {
        styleClasses = 'text-cyan-950 hover:bg-cyan-900/20';
    }

    return (
        <button
            type={buttonType ? buttonType : 'button'}
            className={`${buttonClasses} ${styleClasses}`}
            onClick={onClickFn}>
            {buttonLabel ? buttonLabel : 'Test Button'}
        </button>
    );
}