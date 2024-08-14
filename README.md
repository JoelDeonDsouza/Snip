# Snip

Welcome to Snip, A web application designed to facilitate the sharing and discussion of questions and responses. Users can post questions, view them in a card layout, and provide answers. The platform also allows users to comment on existing questions and interact through modals.

## Tech Stack

**Client:** Next.js, Tailwind CSS, nyxbui.design, Typescript.

**Backend:** Supabase, PostgreSQL.

## Screenshots

![App Screenshot](https://i.ibb.co/2Fm1jWn/img.png)

![App Screenshot](https://i.ibb.co/q0zC64k/img2.png)

## Features

-  Post Questions: Users can create and submit new questions with a title and description.
-  View Questions: Questions are displayed in a card layout for easy browsing.
-  Interact with Questions: Click on a question card to view comments and interact through a modal.
-  Comment on Questions: Users can provide responses to questions using a comment form within the modal.

## Getting Started

#### Prerequisites

-  Supabase Account: You need an active Supabase account to access your Supabase URL and API key.
-  Supabase URL and API Key: Obtain your Supabase project URL and API key from the Supabase dashboard. These are necessary for the application to interact with your Supabase database

#### Make sure to create a .env.local file

```bash
NEXT_PUBLIC_SUPABASE_URL= // Add your url //
NEXT_PUBLIC_SUPABASE_KEY= // Add api key //
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/JoelDeonDsouza/Snip.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

To Run

```bash
  npm run dev
```

## Code Overview

#### Components

-  Home: Main component displaying a list of questions and a form to submit new questions. It handles fetching questions and showing modals for detailed views and responses.
-  Form: Component for submitting new questions. It handles form submission and data validation.
-  Card: UI component for displaying questions in a card layout.
-  Modal: Displays detailed view of a selected question and its comments. It includes a form for submitting responses.
-  RepForm: Form component within the modal for submitting responses to questions.
