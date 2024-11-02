# Next.js Auth with reCAPTCHA Verification

This project is a secure authentication application built with Next.js and Auth.js. It integrates Google reCAPTCHA to ensure that users are human, enhancing security by preventing automated sign-ups.

## Features

- Authentication: Uses Auth.js for handling user authentication.
- reCAPTCHA Verification: Verifies human users via Google reCAPTCHA.
- Next.js: Built on the robust and scalable Next.js framework.
- Security: Ensures user data security and provides protection against bots.

## Technologies Used

- Next.js - A React framework for building fast, user-friendly web applications.
- Auth.js - A library for handling authentication in Next.js applications.
- Google reCAPTCHA - A service that helps protect your website from spam and abuse.

## Getting Started

### Prerequisites

1. Google reCAPTCHA credentials (Site Key and Secret Key)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/yMd-Zainulabdin/nextjs-auth-recaptcha.git
```

2. Install the dependencies:

```bash
npm install
```

3. Set up environment variables by creating a <code>.env.local</code> file with the following:

```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
AUTH_SECRET=your_auth_secret
```

4. Run the development server::

```bash
npm run dev
```

Visit http://localhost:3000 to start using the application.

## Usage

1. Upon visiting the login or sign-up page, users will be prompted to complete a reCAPTCHA check.
2. Only users who pass the reCAPTCHA test will proceed with authentication, ensuring bot protection.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.
