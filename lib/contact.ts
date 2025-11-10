export type ContactFormState =
  | { status: 'idle'; message: null }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

export const CONTACT_FORM_INITIAL_STATE: ContactFormState = {
  status: 'idle',
  message: null,
};
