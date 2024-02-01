import Link from 'next/link';

interface Props {
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    appearance?: 'primary' | 'border';
    disabled?: boolean;
    to?: string;
    label?: string;
}

export default function CustomButton({
                                    type = 'button',
                                    loading = false,
                                    appearance = 'primary',
                                    disabled = false,
                                    to = '',
                                    label,
                                }: Props): JSX.Element {
    return to ? (
        <Link href={to}>
            <a
                // disabled={disabled || loading}
                className={`${
                    appearance === 'primary'
                        ? 'w-full bg-blue-700 text-white text-sm h-12 rounded-md disabled:opacity-50 disabled:cursor-not-allowed relative text-center flex items-center justify-center'
                        : 'w-full bg-transparent text-primary-100 border border-primary-100 text-sm h-12 rounded-md disabled:opacity-50 disabled:cursor-not-allowed relative text-center  flex items-center justify-center'
                }`}
            >
                {loading && (
                    <svg
                        className="h-6 w-6 mr-3 text-white absolute right-0 top-[23%]"
                        version="1.1"
                        id="loader-1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 50 50"
                        xmlSpace="preserve"
                    >
                        <path
                            fill="#fff"
                            d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                        >
                            <animateTransform
                                attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="0.6s"
                                repeatCount="indefinite"
                            ></animateTransform>
                        </path>
                    </svg>
                )}

                {label}
            </a>
        </Link>
    ) : (
        <button
            type={type}
            disabled={disabled || loading}
            className={`${
                appearance === 'primary'
                    ? 'w-full bg-blue-600 text-white text-sm h-12 rounded-md disabled:opacity-50 disabled:cursor-not-allowed relative'
                    : 'w-full bg-transparent text-primary-100 border border-primary-100 text-sm h-12 rounded-md disabled:opacity-50 disabled:cursor-not-allowed relative'
            }`}
        >
            {loading && (
                <svg
                    className="h-6 w-6 mr-3 text-white absolute right-0 top-[23%]"
                    version="1.1"
                    id="loader-1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 50 50"
                    xmlSpace="preserve"
                >
                    <path
                        fill="#fff"
                        d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                    >
                        <animateTransform
                            attributeType="xml"
                            attributeName="transform"
                            type="rotate"
                            from="0 25 25"
                            to="360 25 25"
                            dur="0.6s"
                            repeatCount="indefinite"
                        ></animateTransform>
                    </path>
                </svg>
            )}

            {label}
        </button>
    );
}
