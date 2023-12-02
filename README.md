# Code Conductor

## Figma Design
- ![image](https://github.com/AliBdeir/code-conductor/assets/30950330/e5d547c5-a9b2-4fb7-a89e-4308b1cbd659)
- ![image](https://github.com/AliBdeir/code-conductor/assets/30950330/0d4d0209-b2b1-4d85-985a-d31afd5f65ab)


## Prerequisites

Before you begin, ensure you have installed the latest versions of:

- **Node.js** - [Download Node.js LTS Version](https://nodejs.org/en/download)
- **Git** - [Download Git](https://git-scm.com/downloads)
- **Visual Studio Code** - [Download VSCode](https://code.visualstudio.com/)
    - Make sure to install the following extensions:
        - [React Extension Pack](https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack)
        - [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

## Resources
- **GIT** (Version Control)
    - [Git in 100 seconds](https://www.youtube.com/watch?v=hwP7WQkmECE)
    - [Git Pull Requests in 100 seconds](https://www.youtube.com/watch?v=8lGpZkjnkt4)

- **HTML**
    - [HTML/CSS/JS in 30 minutes](https://www.youtube.com/watch?app=desktop&v=_GTMOmRrqkU)

- **TYPESCRIPT**
    - [TypeScript in 100 seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)
        - You do NOT need to "learn" TypeScript, it is literally just JavaScript but strongly-typed. TypeScript simply prevents you from doing something like:
        ```js
        let text = "Hello, world!";
        text = 0; // This is valid JavaScript
        ```
        Here's what the code would look like in TypeScript:
        ```ts
        let text: string = "Hello, world!";
        text = 0; // Syntax error in TypeScript!
        ```

- **REACT**
    - I'm only presuming [@Abdul](https://github.com/khanabdu25) knows some React. The tasks I am giving the rest of you DO NOT require React knowledge, only HTML, CSS, and JavaScript (at least during the beginning of the project). However, you should still watch the following video to get a general idea of what's going on:

    ### **[React in 100 seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM)**

## Getting Started

To get a local copy up and running, follow these simple steps.

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/AliBdeir/code-conductor.git
```

### Navigate to the Repository

Change to the project directory:

```bash
cd code-conductor
```

### Install Dependencies

Install the necessary packages:

```bash
npm install
```

### Run the Application

Finally, start the Vite server:

```bash
npm run dev
```

The application should now be running on [http://localhost:3000](http://localhost:3000). You can type "o" into the command line and it should open it in your default browser or you can just enter the url into your browser manually.

## License

This project is licensed under the [MIT License](LICENSE).
