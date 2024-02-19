type CommentIconProps = {
    height?: number;
    width?: number;
    className?: string;
};
/**
 * Use tailwind classNames to change fill of component.
 */
export default function CommentIcon({
    height,
    width,
    className,
}: CommentIconProps) {
    return (
        <svg
            width={width ? `${width}px` : "20px"}
            height={height ? `${height}px` : "20px"}
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>comment-4</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
            >
                <g
                    id="Icon-Set"
                    transform="translate(-308.000000, -255.000000)"
                    className={className}
                >
                    <path
                        d="M327.494,279.633 L324,284 L320.506,279.633 C314.464,278.355 309.992,273.863 309.992,268.501 C309.992,262.146 316.264,256.994 324,256.994 C331.736,256.994 338.008,262.146 338.008,268.501 C338.008,273.863 333.536,278.355 327.494,279.633 L327.494,279.633 Z M324,255 C315.163,255 308,261.143 308,268.72 C308,274.969 312.877,280.232 319.542,281.889 L324,287.001 L328.459,281.889 C335.123,280.232 340,274.969 340,268.72 C340,261.143 332.837,255 324,255 L324,255 Z"
                        id="comment-4"
                    ></path>
                </g>
            </g>
        </svg>
    );
}
