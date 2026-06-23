export type ContactFormState =
  | { status: 'idle'; message: null }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

export const CONTACT_FORM_INITIAL_STATE: ContactFormState = {
  status: 'idle',
  message: null,
};

export const CONTACT_SUBJECTS = [
  "Mobile App Development (iOS/Android)",
  "Web Development",
  "IoT / Hardware Products",
  "Freelance / Contract Work",
  "Partnership / Collaboration",
  "General Inquiry / Just saying hi",
] as const;

export type ContactSubject = typeof CONTACT_SUBJECTS[number];

