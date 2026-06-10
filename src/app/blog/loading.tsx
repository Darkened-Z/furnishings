import SquareLoader from "@/components/common/loader";

// Route-level loading UI: shown instantly while the server renders the next
// page of blogs (e.g. after clicking a pagination link).
export default function Loading() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <SquareLoader text="Loading..." />
        </div>
    );
}
