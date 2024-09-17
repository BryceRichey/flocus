export default function Button({ buttonType, buttonStyle, buttonLabel, onClickFn, iconLeft, width }) {
    if (!buttonStyle) {
        console.log("buttonStyle needed");
        return null;
    }

    let buttonClasses = 'font-medium text-base px-3 py-2 rounded-lg';
    let styleClasses = ''
    let widthClasses = 'w-max'

    if (buttonStyle === 'fill') {
        styleClasses = 'text-white text-left bg-cyan-950 hover:bg-cyan-900';
    } else if (buttonStyle === 'ghost') {
        styleClasses = 'text-white/95 text-left hover:text-white hover:bg-cyan-900/20';
    }

    if (width) {
        widthClasses = width;
    }

    return (
        <button
            type={buttonType ? buttonType : 'button'}
            className={`${buttonClasses} ${styleClasses} ${widthClasses}`}
            onClick={onClickFn}>
            {iconLeft ? <span className="pe-2">{iconLeft}</span> : ''}
            {buttonLabel ? buttonLabel : 'Test Button'}
        </button>
    );
}