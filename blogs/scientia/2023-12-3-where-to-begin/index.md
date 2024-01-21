---
title: Where to Begin?
description: A blog post on where to begin developing a full-stack web application
slug: where-to-begin
tags: [beginning scientia, learning]
image: https://i.imgur.com/mErPwqL.png
authors: [jack]
draft: true
---

## So, where do we begin?

I had the idea for Scientia at the start of this year.

To be clear, I have never built a full-stack application by myself before. I have been a part of small team that have built a few full stack apps at my day job at [Aurecon](https:///www.aurecongroup.com), but never by myself.

I have a vague idea of some of the technologies that I may use, and I have a rough list of features I wish to implement, but it is a hard thing to decide where to begin.

<!--truncate-->

So, of course, I googled *how to build a full stack application*, and I asked chatGPT.

### The Google results

Google gave me a bunch of links to random guides on different technology stacks like *Django*, *React*, *HTML/CSS*, *Svelte* and so on. I found a pretty good guide [here](https://www.freecodecamp.org/news/how-to-build-a-full-stack-application-from-start-to-finish/) at FreeCoDeCamp.

The steps were:

1. Design the front end
2. Build the front end
3. Build the persistence layer (back-ned database and data models)
4. Build the API (back-end application).

Easy. (haha)

However, I barely know Vue and React (I prefer Vue, as that is what I have used before), and the only other app I have really build is using Blazor :shit:. Blazor doesn't have the reactivity that I am after, and this is a good opportunity for me to learn some JS framework (I know, famous last words).

I am also not a UI/UX designer; I have a degree in architecture, so understand some design principles, however, it is a stretch to call myself a UI/UX designer.

So the front-end I will have to do a lot of learning...

The backend may be a little easier as I am a lot more proficient in C# (he says conidently, knowing that this is gonna :shit: all over his day in the future). I have done some stuff in SQL and have done some UML and relational mapping for some EF Core stuff in one of our apps.

I have also built small API layers for an ASP.NET and I have made some azure functions. I have done some SQLite and some SQLServer stuff, but this is all new to me still. I am also aware that for what I want to do a document store like Postgres or MongoDB (maybe even something like Cassandra or Scylla) would be a better way to go. I know that [Notion uses Amazon RDS](https://www.notion.so/blog/the-great-re-shard) with [custom JSON representation for handling rich text](https://www.notion.so/blog/creating-the-notion-api).

I'll link into that a bit later.

There was a note at the end of this that I thought was quite pertinent:

***One Final Note: Don't Do Waterfall***
***I want to double stress the fact that you should be doing this on a per-feature basis. I'm not advocating that you plan an entire application up front. You should still be practicing iterative product development.***

### The ChatGPT results

The ChatGPT results were as follows:

```text
Developing a full-stack application involves creating both the front-end (client-side) and back-end (server-side) components of a software application, as well as managing the database and other necessary components. Here's a step-by-step guide to help you get started:

    Define Requirements:
        Clearly define the purpose and features of your application.
        Identify the technologies and tools you'll use.

    Choose a Tech Stack:
        Select the programming languages, frameworks, and libraries for both front-end and back-end development.
        Common choices include:
            Front-end: HTML, CSS, JavaScript, React, Angular, Vue.js, etc.
            Back-end: Node.js, Python (Django, Flask), Ruby (Rails), Java (Spring), .NET, etc.
            Database: MySQL, PostgreSQL, MongoDB, SQLite, etc.

    Set Up Your Development Environment:
        Install the necessary software and tools for development, such as code editors, version control systems (e.g., Git), and package managers.

    Create the Back-End:
        Design the database schema.
        Set up the back-end server using your chosen framework.
        Implement server-side logic and APIs.

    Develop the Front-End:
        Create the user interface (UI) using HTML, CSS, and JavaScript.
        Integrate with the back-end APIs to fetch and send data.
        Use a front-end framework or library if applicable (e.g., React, Angular, Vue.js).

    Connect Front-End and Back-End:
        Ensure communication between the front-end and back-end through API calls.
        Handle data transfer in a secure and efficient manner.

    Implement User Authentication:
        Add user registration and login functionality.
        Implement authentication and authorization mechanisms to secure your application.

    Handle Security:
        Implement security best practices to protect against common web vulnerabilities (e.g., Cross-Site Scripting, SQL Injection).
        Set up HTTPS for secure data transmission.

    Test Your Application:
        Perform unit testing, integration testing, and end-to-end testing.
        Debug and fix any issues that arise.

    Optimize Performance:
        Optimize database queries and API calls.
        Implement caching where appropriate.
        Optimize front-end assets for faster loading times.

    Deploy Your Application:
        Choose a hosting provider and deploy your application.
        Set up a production-ready environment.
        Configure domain and server settings.

    Monitor and Maintain:
        Set up monitoring tools to track the performance and health of your application.
        Regularly update dependencies and fix security vulnerabilities.
        Address user feedback and make improvements.

    Scale Your Application (if needed):
        Optimize for scalability by considering load balancing, caching, and other scaling strategies.
        Monitor server resources and scale horizontally or vertically as necessary.

Remember to refer to the documentation of the technologies you are using, and leverage online resources and communities for support and guidance throughout the development process.
```

Conflicting messages.

*One says do the front-end, the other says do the back-end.* :expressionless:

*Sigh*.

However, the note from FreeCoDeCamp hits home a bit. Develop on a per-feature basis. This makes developing a lot easier and iterative.

So, that is what I am going to do. I am going to list down all the features I want and build them out one-by-one until I have an MVP.

We will see how this goes...

More later.
