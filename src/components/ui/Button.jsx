export default function Button(props) {
    if (props.type === "primary") {
        return (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {props.children}
            </button>
        )
    } else if (props.type === "learn-more") {
        return (
            <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-lg py-1 px-3 leading-normal no-underline bg-green-600">
                Learn More
            </button>
        )
    }
}