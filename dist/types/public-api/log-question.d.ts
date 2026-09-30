/**
 * The longest question `logs.ask` answers, in characters after surrounding
 * whitespace is trimmed. The API refuses a longer one with
 * {@link LOG_QUESTION_TOO_LONG_MESSAGE}, and so does every client that checks
 * first (the CLI, the agent's `ask_logs` tool), so each surface says the same.
 */
export declare const LOG_QUESTION_MAX_LENGTH = 2000;
/** The refusal of a question longer than {@link LOG_QUESTION_MAX_LENGTH}. */
export declare const LOG_QUESTION_TOO_LONG_MESSAGE: string;
