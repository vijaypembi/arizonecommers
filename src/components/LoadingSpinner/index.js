export default function LoadingSpinner({ size = "h-12 w-12" }) {
    return (
        <div
            className="flex justify-center items-center min-h-[200px]"
            role="status"
        >
            <div
                className={`animate-spin rounded-full border-4 border-solid border-current border-r-transparent ${size}`}
                style={{
                    animationTimingFunction:
                        "cubic-bezier(0.65, 0.05, 0.36, 1)",
                }}
                aria-label="Loading"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
