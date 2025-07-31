import { useState } from 'react';

const FeedbackSection = () => {
    const [feedback, setFeedback] = useState('');
    const [comments, setComments] = useState([]);

    const handleSubmit = () => {
        if (feedback.trim() === '') return;

        const newComment = {
            id: Date.now(),
            text: feedback,
        };

        setComments([newComment, ...comments]);
        setFeedback('');
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Leave a Comment or Feedback</h2>

            <textarea
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
                rows="4"
                placeholder="Type your comment or feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
            />

            <button
                onClick={handleSubmit}
                className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
                Submit Feedback
            </button>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">All Feedback</h3>
                {comments.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400">No feedback submitted yet.</p>
                ) : (
                    <ul className="space-y-3">
                        {comments.map((comment) => (
                            <li
                                key={comment.id}
                                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white p-4 rounded-md"
                            >
                                {comment.text}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FeedbackSection;
