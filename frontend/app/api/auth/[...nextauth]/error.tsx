export default function ErrorPage() {
    return (
        <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Authentication Error</h1>
            <p className="mb-4">You need to register before logging in.</p>
            <a
                href="/auth/register"
                className="text-blue-500 hover:text-blue-700"
            >
                Go to Registration
            </a>
        </div>
    );
}