import React from "react";

function RenderButton() {
    return (
        <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 my-1 mr-2 rounded"
            title="Si vous pensez que ces outils le méritent... Merci !"
            type="submit"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                height="1em"
                className="fill-current"
            >
                <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
            </svg>
        </button>
    );
}

function RenderHiddenInput() {
    return (
        <>
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
                type="hidden"
                name="hosted_button_id"
                value="Q2XYVFP4EEX2J"
            />
        </>
    );
}

function Paypal() {
    return (
        <div>
            <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
            >
                <RenderButton />
                <RenderHiddenInput />
            </form>
        </div>
    );
}

export default Paypal;
