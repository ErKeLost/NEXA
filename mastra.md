### Project Setup and Running Instructions

Source: https://mastra.ai/en/examples/agents/ai-sdk-v5-integration

Step-by-step guide to setting up and running the project. It details the commands to install dependencies, start the development server, and access the application.

```sh
pnpm install
pnpm dev
Visit http://localhost:3000 and ask about weather in different cities!
```

--------------------------------

### Install Mastra CLI with Project Name and Example

Source: https://mastra.ai/en/docs/getting-started/installation

This command installs the Mastra CLI globally and creates a new project. It uses the 'openai' LLM and includes components for tools, agents, and workflows. The '--example' flag indicates that example configurations should be included.

```bash
npx create-mastra@latest --project-name hello-mastra --example tools,agents,workflows --llm openai
```

--------------------------------

### Create Mastra Project with CLI Flags

Source: https://mastra.ai/en/docs/getting-started/installation

Creates a Mastra project using the `create mastra` CLI with specified flags for non-interactive setup. This example sets the project name, includes specific components, and configures the LLM provider.

```bash
npx create-mastra@latest --project-name hello-mastra --example --components tools,agents,workflows --llm openai
```

--------------------------------

### Install Mastra with bun

Source: https://mastra.ai/en/docs/getting-started/installation

Installs Mastra using the bun runtime. This command initiates the `create mastra` CLI wizard for project setup.

```bash
bun create mastra@latest
```

--------------------------------

### Start Mastra AI LLMs TXT CLI Wizard with bun

Source: https://mastra.ai/ja/docs/getting-started/installation

Initiates the interactive setup for Mastra AI LLMs TXT using bun. This command uses `bunx` to execute the create-mastra package, guiding the user through project configuration. Ensure you have Node.js and bun installed.

```bash
bunx create-mastra@latest
```

--------------------------------

### Launch Mastra Development Server with bun

Source: https://mastra.ai/en/docs/getting-started/installation

Starts the Mastra development server using bun. This allows for testing agents in the Mastra Playground.

```bash
bun run dev
```

--------------------------------

### Start CLI Wizard with Bun

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

Initiates the interactive setup wizard for Mastra AI LLMs TXT using Bun. This command uses Bun's built-in package execution capabilities.

```bash
bun dlx create-mastra@latest
```

--------------------------------

### Launch Mastra Development Server with yarn

Source: https://mastra.ai/en/docs/getting-started/installation

Starts the Mastra development server using yarn. This allows for testing agents in the Mastra Playground.

```bash
yarn run dev
```

--------------------------------

### Start Project with npm

Source: https://mastra.ai/ja/docs/deployment/cloud-providers/digital-ocean

Starts the project using npm. This command is used to run the application locally after installation and building. It executes the start script defined in package.json.

```bash
npm start
```

--------------------------------

### Install Mastra Project with a Template

Source: https://mastra.ai/en/docs/getting-started/installation

Installs the Mastra project using a pre-built template to demonstrate specific use cases. Replace 'template-name' with the desired template. Refer to the documentation for available templates. Example shows installation for a text-to-SQL application.

```bash
npx create-mastra@latest --template template-name
```

```bash
npx create-mastra@latest --template text-to-sql
```

--------------------------------

### Start Mastra AI LLMs TXT CLI Wizard with pnpm

Source: https://mastra.ai/ja/docs/getting-started/installation

Initiates the interactive setup for Mastra AI LLMs TXT using pnpm. This command uses `pnpm dlx` to execute the create-mastra package, guiding the user through project configuration. Ensure you have Node.js and pnpm installed.

```bash
pnpm dlx create-mastra@latest
```

--------------------------------

### Launch Mastra Development Server with pnpm

Source: https://mastra.ai/en/docs/getting-started/installation

Starts the Mastra development server using pnpm. This allows for testing agents in the Mastra Playground.

```bash
pnpm run dev
```

--------------------------------

### Example: Install Text-to-SQL Mastra Template

Source: https://mastra.ai/en/docs/getting-started/templates

An example command to install the 'text-to-sql' Mastra template using npm.

```bash
npx create-mastra@latest --template text-to-sql
```

--------------------------------

### Launch Mastra Development Server with Mastra CLI

Source: https://mastra.ai/en/docs/getting-started/installation

Starts the Mastra development server directly using the Mastra CLI command. This is an alternative to using package manager scripts.

```bash
mastra dev
```

--------------------------------

### Install Mastra with pnpm

Source: https://mastra.ai/en/docs/getting-started/installation

Installs Mastra using the pnpm package manager. This command initiates the `create mastra` CLI wizard for project setup.

```bash
pnpm create mastra@latest
```

--------------------------------

### Start Mastra Development Server with Mastra CLI

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

This command utilizes the Mastra CLI to start the development server. The Mastra CLI provides specific tooling for the Mastra project. This is the recommended approach if you are using the Mastra ecosystem.

```bash
Mastra CLI run dev
```

--------------------------------

### Mastra Cloud Setup and Deploy Steps (Markdown)

Source: https://mastra.ai/en/docs/mastra-cloud/setting-up

This code snippet demonstrates the markdown structure for guiding users through the Mastra Cloud setup and deploy process. It includes prerequisites, sign-in instructions, and steps for installing the GitHub app and creating a new project. It utilizes custom components like MastraCloudCallout and Steps.

```markdown
---\ntitle: Setting Up a Project\ndescription: Configuration steps for Mastra Cloud projects\n---\n\nimport { MastraCloudCallout } from '@/components/mastra-cloud-callout'\nimport { Steps } from \"nextra/components\";\n\n# Setting Up and Deploying\n\nThis page explains how to set up a project on [Mastra Cloud](https://mastra.ai/cloud) with automatic deployments using our GitHub integration.\n\n\u003cMastraCloudCallout /\u003e\n\n## Prerequisites\n\n- A [Mastra Cloud](https://mastra.ai/cloud) account\n- A GitHub account / repository containing a Mastra application\n\n\u003e See our [Getting started](/docs/getting-started/installation) guide to scaffold out a new Mastra project with sensible defaults.\n\n## Setup and Deploy process\n\n\u003cSteps\u003e\n\n### Sign in to Mastra Cloud\n\nHead over to [https://cloud.mastra.ai/](https://cloud.mastra.ai) and sign in with either:\n\n- **GitHub**\n- **Google**\n\n### Install the Mastra GitHub app\n\nWhen prompted, install the Mastra GitHub app.\n\n![Install GitHub](/image/mastra-cloud/mastra-cloud-install-github.jpg)\n\n### Create a new project\n\nClick the **Create new project** button to create a new project.\n\n![Create new project](/image/mastra-cloud/mastra-cloud-create-new-project.jpg)\n\n### Import a Git repository\n\nSearch fo
```

--------------------------------

### Install Mastra with yarn

Source: https://mastra.ai/en/docs/getting-started/installation

Installs Mastra using the yarn package manager. This command initiates the `create mastra` CLI wizard for project setup.

```bash
yarn dlx create-mastra@latest
```

--------------------------------

### Example: Starting MCPServer via stdio (Shell)

Source: https://mastra.ai/en/reference/tools/mcp-server

This is an example of how to start the MCPServer using standard input and output from a shell environment. It assumes the server is set up to communicate via stdio.

```shell
...
// Example of starting the server using stdio (actual command may vary based on project setup)
// This is a conceptual representation based on the documentation context.
// For a real scenario, you would execute the compiled server binary.
// For example:
// ./your_server_executable --stdio
...
```

--------------------------------

### Create a New Project Directory

Source: https://mastra.ai/en/docs/getting-started/installation

These commands demonstrate how to create a new project directory and navigate into it. This is a prerequisite for further project setup.

```bash
mkdir my-mastra-app
cd my-mastra-app
```

--------------------------------

### Automatic Installation - New Projects

Source: https://mastra.ai/ja/docs/getting-started/mcp-docs-server

This snippet describes the automatic installation process for new projects. It highlights the option to enable the setup during interactive installation or by using the '-m' flag for non-interactive setup.

```text
新規プロジェクトでは、インストール時に 対話型 セットアップのプロンプトから追加するか、非対話型 コマンドで -m フラグを指定して追加できます。
```

--------------------------------

### Install Mastra CLI with CLI flags

Source: https://mastra.ai/en/docs/getting-started/installation

This example illustrates how to install the Mastra CLI non-interactively using CLI flags. This is useful for automated deployments or scripting.

```bash
npm create mastra@latest -- --template=node --docker
```

--------------------------------

### Initialize New Project with Mastra AI

Source: https://mastra.ai/en/docs/getting-started/installation

Initializes a new project and creates a directory named 'hello-mastra'. This command is typically used to start a fresh project environment for Mastra AI development.

```bash
mkdir hello-mastra && cd hello-mastra
```

--------------------------------

### Setup Mastra Inngest Workflow Environment

Source: https://mastra.ai/en/examples/workflows/inngest-workflow

Installs necessary packages and starts the Inngest development server for local Mastra workflow development. Ensure Docker is running and accessible.

```bash
npm install @mastra/inngest inngest @mastra/core @mastra/deployer @hono/node-server @ai-sdk/openai
docker run --rm -p 8288:8288 \
  inngest/inngest \
  inngest dev -u http://host.docker.internal:3000/inngest/api
```

--------------------------------

### Set Up Mastra Template: Navigate and Configure

Source: https://mastra.ai/en/docs/getting-started/templates

Commands to navigate into the installed project directory and copy the environment variable example file.

```bash
cd your-project-name
cp .env.example .env
```

--------------------------------

### Create Mastra Project with Package Managers

Source: https://mastra.ai/en/docs/getting-started/installation

Commands to create a new Mastra project using different package managers. These commands all achieve the same result: initiating the Mastra project with an interactive setup. Ensure you have the respective package manager installed.

```bash
npx create-mastra@latest
```

```bash
yarn dlx create-mastra@latest
```

```bash
pnpm create mastra@latest
```

```bash
bun create mastra@latest
```

--------------------------------

### Guides API

Source: https://mastra.ai/en/examples/deployment

Access documentation guides for various Mastra features.

```APIDOC
## Guides

### Description
This API provides access to documentation guides for different aspects of the Mastra framework.

### Endpoints

#### GET /guides

##### Description
Retrieves a list of available guides.

##### Method
GET

##### Endpoint
`/guides`

##### Response
*   **guides** (array) - An array of guide objects.

##### Response Example
```json
{
  "guides": [
    {
      "name": "research-assistant",
      "route": "/en/guides/guide/research-assistant",
      "frontMatter": {
        "title": "Building a Research Paper Assistant | Mastra RAG Guides",
        "description": "Guide on creating an AI research assistant that can analyze and answer questions about academic papers using RAG.",
        "filePath": "src/content/en/guides/guide/research-assistant.mdx"
      },
      "title": "RAG: Research Assistant"
    },
    {
      "name": "notes-mcp-server",
      "route": "/en/guides/guide/notes-mcp-server",
      "frontMatter": {
        "title": "MCP Server: Building a Notes MCP Server | Mastra Guide",
        "description": "A step-by-step guide to creating a fully-featured MCP (Model Context Protocol) server for managing notes using the Mastra framework.",
        "filePath": "src/content/en/guides/guide/notes-mcp-server.mdx"
      },
      "title": "MCP Server: Notes MCP Server"
    }
  ]
}
```

#### GET /guides/{guideName}

##### Description
Retrieves a specific guide by its name.

##### Method
GET

##### Endpoint
`/guides/{guideName}`

##### Parameters
*   **Path Parameters**
    *   **guideName** (string) - Required - The name of the guide to retrieve.

##### Response
*   **guide** (object) - The guide object.

##### Response Example
```json
{
  "guide": {
    "name": "research-assistant",
    "route": "/en/guides/guide/research-assistant",
    "frontMatter": {
      "title": "Building a Research Paper Assistant | Mastra RAG Guides",
      "description": "Guide on creating an AI research assistant that can analyze and answer questions about academic papers using RAG.",
      "filePath": "src/content/en/guides/guide/research-assistant.mdx"
    },
    "title": "RAG: Research Assistant"
  }
}
```
```

--------------------------------

### Automatic Installation with Interactive Setup

Source: https://mastra.ai/ja/reference/cli/mcp-docs-server

This section describes how to install the MCP Docs Server using an interactive setup process within a new project. It involves choosing the installation option during the initial project setup.

```markdown
## 自動インストール

新規プロジェクトでは、インストール時に 対話型 セットアップのプロンプトから追加するか、非対話型 コマンドで `-m` フラグを指定して追加できます。

```

--------------------------------

### Launch Mastra Development Server

Source: https://mastra.ai/en/docs/getting-started/installation

Commands to launch the Mastra Development Server using different package managers. These commands start the local development environment for testing your agent. Ensure you are in the project directory.

```bash
npm run dev
```

```bash
yarn run dev
```

```bash
pnpm run dev
```

```bash
bun run dev
```

```bash
mastra dev
```

--------------------------------

### Create Mastra Project using npm, yarn, pnpm, or bun

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

This code snippet demonstrates how to initiate the Mastra project creation using the `create mastra` CLI. It provides equivalent commands for different package managers (npm, yarn, pnpm, bun) to ensure users can follow the installation process with their preferred tool. The commands trigger an interactive setup for the Mastra project.

```bash
npx create-mastra@latest
```

```bash
yarn create mastra
```

```bash
pnpm create mastra
```

```bash
bun create mastra
```

--------------------------------

### Mastra Starter Project Setup

Source: https://mastra.ai/ja/docs/frameworks/agentic-uis/cedar-os

When setting up a new project with Cedar-OS, selecting the 'Mastra starter' option provides a complete setup with both frontend and backend components within a monorepo. This is ideal for starting from scratch.

```bash
npx cedar-os-cli plant-seed

# Select the Mastra starter template during the CLI prompts.
```

--------------------------------

### Initialize Mastra with Default Components (CLI)

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/vite-react

Quickly scaffolds the default Weather agent with sensible defaults using the Mastra CLI. This command is useful for getting started rapidly with a pre-configured agent and example setup.

```bash
npx mastra@latest init --dir . --components agents,tools --example --llm openai
```

--------------------------------

### Usage Example for NetlifyDeployer

Source: https://mastra.ai/en/docs/deployment/serverless-platforms/netlify-deployer

This snippet demonstrates how to use the NetlifyDeployer class. It outlines the basic setup and configuration required to initiate a deployment to Netlify. Specific details about the Mastra application and Netlify project setup are assumed to be in place.

```javascript
self.__next_f.push([
  1,
  "15:[\"$\",\"main\",null,{\"data-pagefind-body\":true,\"children\":[[\"$\",\"h1\",null,{\"id\":\"$undefined\",\"className\":\"x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-bold x:mt-2 x:text-4xl\",\"children\":[\"NetlifyDeployer\",\"$undefined\"]}]},\"\\n\",[\"$\",\"p\",null,{\"className\":\"x:not-first:mt-\\[1.25em] x:leading-7\",\"children\":[\"The \",[\"$\",\"code\",null,{\"className\":\"nextra-code\",\"dir\":\"ltr\",\"children\":[\"NetlifyDeployer\"]},\" class handles deployment of standalone Mastra applications to Netlify. It manages configuration, deployment, and extends the base \",[\"$\",\"$L16\",null,{\"href\":\"/reference/deployer/deployer\",\"prefetch\":\"$undefined\",\"className\":\"x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:\\[text-underline-position:from-font]\"},\"Deployer\"],\" class with Netlify specific functionality.\"}]}]),\"\\n\",[\"$\",\"h2\",null,{\"id\":\"installation\",\"className\":\"x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-\\[fade-in_1.5s] x:mt-10 x:border-b x:pb-1 x:text-3xl nextra-border\",\"children\":[\"Installation\",[\"$\",\"$L17\",null,{\"id\":\"installation\"}]]}]),\"\\n\",[\"$\",\"div\",null,{\"data-pagefind-ignore\":\"$undefined\",\"className\":\"nextra-code x:relative x:not-first:mt-\\[1.25em]\",\"children\":[\"$undefined\",[\"$\",\"pre\",null,{\"className\":\"x:group x:focus-visible:nextra-focus x:overflow-x-auto x:subpixel-antialiased x:text-\\[.9em] x:bg-white x:dark:bg-black x:py-4 x:ring-1 x:ring-inset x:ring-gray-300 x:dark:ring-neutral-700 x:contrast-more:ring-gray-900 x:contrast-more:dark:ring-gray-50 x:contrast-more:contrast-150 x:rounded-md not-prose\",\"tabIndex\":\"0\",\"children\":[[\"$\",\"div\",null,{\"className\":\"x:group-hover:opacity-100 x:group-focus:opacity-100 x:opacity-0 x:transition x:focus-within:opacity-100 x:flex x:gap-1 x:absolute x:right-4 x:top-2\",\"children\":[[\"$\",\"$L18\",null,{\"children\":[\"$\",\"svg\",null,{\"viewBox\":\"0 0 24 24\",\"fill\":\"currentColor\",\"height\":\"1em\",\"children\":[\"$\",\"path\",null,{\"d\":\"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z\"}]}]],[\"$\",\"$L19\",null,{\"className\":\" \"}]]}],[\"$\",\"code\",null,{\"className\":\"nextra-code\",\"dir\":\"ltr\",\"children\":[\"$\",\"span\",null,{\"children\":[[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-color-text-6)\",\"--shiki-dark\":\"#D06BEE\"},\"children\":[\"npm\"}]],[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-color-text-6)\",\"--shiki-dark\":\"#46F488\"},\"children\":[\" install\"}]],[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-color-text-6)\",\"--shiki-dark\":\"#46F488\"},\"children\":[\" @mastra/deployer-netlify@latest\"}] ]]}]]}]]}]]},\"\\n\",[\"$\",\"h2\",null,{\"id\":\"usage-example\",\"className\":\"x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-\\[fade-in_1.5s] x:mt-10 x:border-b x:pb-1 x:text-3xl nextra-border\",\"children\":[\"Usage example\",[\"$\",\"$L17\",null,{\"id\":\"usage-example\"}]]}]),\"\\n\",[\"$\",\"div\",null,{\"data-pagefind-ignore\":\"$undefined\",\"className\":\"nextra-code x:relative x:not-first:mt-\\[1.25em]\",\"children\":[[\"$\",\"div\",null,{\"className\":\"x:px-4 x:text-xs x:text-gray-700 x:dark:text-gray-200 x:bg-gray-100 x:dark:bg-neutral-900 x:flex x:items-center x:h-12 x:gap-2 x:rounded-t-md x:border x:border-gray-300 x:dark:border-neutral-700 x:contrast-more:border-gray-900 x:contrast-more:dark:border-gray-50 x:border-b-0\",\"children\":[[\"$\",\"svg\",null,{\"viewBox\":\"0 0 24 24\",\"fill\":\"currentColor\",\"height\":\"1em\",\"className\":\"x:max-w-6 x:shrink-0\",\"children\":[\"$\",\"path\",null,{\"d\":\"M0 2.66667
```

--------------------------------

### Create New Project and Install Dependencies (bun)

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

Steps to create a new directory for a Mastra project, initialize it with bun, and install necessary development and core Mastra packages along with zod and the OpenAI SDK.

```shell
mkdir hello-mastra && cd hello-mastra
bun init -y
bun add typescript tsx @types/node mastra@latest --dev
bun add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Install Mastra Core and OpenAI SDK

Source: https://mastra.ai/ja/examples/workflows_vNext/control-flow

Installs the necessary Mastra core library and the OpenAI SDK using npm. This is a prerequisite for running the workflow examples.

```sh
npm install @ai-sdk/openai @mastra/core
```

--------------------------------

### Basic Setup - Mastra AI Project

Source: https://mastra.ai/en/docs/observability/ai-tracing/exporters/default

This section covers the basic setup for the Mastra AI project. It details the configuration of a storage provider such as LibSQL or PostgreSQL. The primary input is the configuration details for the chosen storage backend.

```bash
MASTRA_STORAGE_URL='<your_storage_url>'
```

--------------------------------

### TypeScript Build Configuration Example

Source: https://mastra.ai/en/docs/getting-started/installation

This example shows a TypeScript configuration snippet for defining build outputs. It specifies the `outDir` where the compiled code will be placed and an `include` pattern to specify which source files should be processed. This is common in projects using `tsc` for compilation.

```typescript
{
  "compilerOptions": {
    "outDir": "dist",
    "include": [
      "src/**/*"
    ]
  }
}

```

--------------------------------

### Initialize Project with Yarn

Source: https://mastra.ai/en/docs/getting-started/installation

Command to initialize a new project using Yarn and install TypeScript and related types. This command is typically used at the beginning of a project setup to ensure necessary development tools are in place.

```shell
yarn init -y
```

--------------------------------

### Agent Get Instructions API

Source: https://mastra.ai/en/examples/workflows/agent-as-step

Documentation for the `Agent.getInstructions()` method in Mastra agents, which retrieves the instructions that guide the agent.

```APIDOC
## GET /api/agents/getInstructions

### Description
Retrieves the instructions that guide the agent.

### Method
GET

### Endpoint
/api/agents/getInstructions

### Parameters
No parameters required.

### Request Example
```
GET /api/agents/getInstructions
```

### Response
#### Success Response (200)
- **instructions** (string) - The instructions guiding the agent's behavior.

#### Response Example
```json
{
  "instructions": "Always respond in a helpful and harmless manner. Prioritize user safety and ethical considerations."
}
```
```

--------------------------------

### Create Mastra Project with different package managers (Shell)

Source: https://mastra.ai/en/docs/getting-started/installation

This example shows how to create a new Mastra project using different package managers like npm, yarn, and pnpm. The generated project is compatible with `ai-sdk v4`. Ensure you have Node.js v20.0 or higher installed.

```bash
npm create mastra@latest
```

```bash
yarn create mastra
```

```bash
pnpm create mastra
```

--------------------------------

### Create and Run Workflow Async Example (TypeScript)

Source: https://mastra.ai/en/reference/workflows/workflow

This example demonstrates how to create and run a workflow asynchronously using the Mastra library. It shows how to get a workflow, create a run, start it, and handle suspended states by resuming the workflow.

```typescript
import { mastra } from "./mastra";

const run = await mastra.getWorkflow("workflow").createRunAsync();

const result = await run.start({...});

if (result.status === "suspended") {
 const resumedResult = await run.resume({...});
}
```

--------------------------------

### Mastra CLI Start

Source: https://mastra.ai/en/docs/getting-started/project-structure

Start your built Mastra application using the `mastra start` command.

```APIDOC
## mastra start

### Description
Start your built Mastra application.

### Method
CLI Command

### Endpoint
N/A

### Parameters
N/A

### Request Example
```bash
mastra start
```

### Response
#### Success Response
Application started successfully.
```

--------------------------------

### Deploying MCPServer Example

Source: https://mastra.ai/en/reference/legacyWorkflows/step-options

Example of setting up, building, and deploying a Mastra MCPServer. This includes using the stdio transport and publishing the server to NPM for distribution.

```markdown
```md
## Deploying an MCPServer

This example provides a step-by-step guide on how to deploy a Mastra MCPServer. It covers the entire process from initial setup and building to publishing the server using the stdio transport to NPM.

**Deployment Steps:**

1.  Setup the MCPServer environment.
2.  Build the server application.
3.  Configure stdio transport.
4.  Publish to NPM.

**Dependencies:**

*   Mastra AI SDK
*   Node.js and NPM

**Usage:**

The complete instructions are available in `src/content/en/examples/agents/deploying-mcp-server.mdx`.
```
```

--------------------------------

### Start Mastra Development Server and Playground

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

This Node.js code snippet initiates the Mastra Development Server, allowing you to launch and test agents within the Mastra Playground. This is crucial for development and debugging AI agents.

```javascript
import { defineConfig } from 'next defineConfig';

export default defineConfig({
  theme: 'docs',
  docs: {
    // ... other config
  },
  // ... other config
});

```

--------------------------------

### Create New Project and Install Dependencies (npm)

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

Steps to create a new directory for a Mastra project, initialize it with npm, and install necessary development and core Mastra packages along with zod and the OpenAI SDK.

```shell
mkdir hello-mastra && cd hello-mastra
npm init -y
npm install typescript tsx @types/node mastra@latest --save-dev
npm install @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Example of Elicitation Handler Setup

Source: https://mastra.ai/en/reference/tools/mcp-client

Provides a practical example demonstrating how to set up the elicitation handler using the onRequest function. This example illustrates the expected flow and structure for handling server requests.

```typescript
// Example usage would go here, demonstrating the onRequest function
```

--------------------------------

### Initialize Mastra Project with Example Code (Bash)

Source: https://mastra.ai/en/reference/cli/init

Initializes a Mastra project and includes example code to demonstrate functionality.

```bash
mastra init --example
```

--------------------------------

### Create New Project and Install Dependencies (yarn)

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

Steps to create a new directory for a Mastra project, initialize it with yarn, and install necessary development and core Mastra packages along with zod and the OpenAI SDK.

```shell
mkdir hello-mastra && cd hello-mastra
yarn init -y
yarn add typescript tsx @types/node mastra@latest --dev
yarn add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Install and Use fastembed for Local Embeddings (JavaScript)

Source: https://mastra.ai/ja/examples/memory/memory-with-pg

This example demonstrates installing and using the 'fastembed' library to create local embeddings. Embeddings are numerical vectors that represent the semantic meaning of text, enabling meaning-based searches rather than keyword searches. This setup is crucial for functionalities like 'semanticRecall'.

```javascript
// Install fastembed
// npm install @mastra/fastembed

// Example usage for generating embeddings (conceptual)
// const fastembed = require('@mastra/fastembed');
// const text = "This is a sample text for embedding.";
// const embedding = await fastembed.embed(text);
// console.log(embedding);
```

--------------------------------

### Mastra Core Methods

Source: https://mastra.ai/en/docs/getting-started/installation

This section details various core methods available in the Mastra library for managing different aspects of the Mastra instance.

```APIDOC
## Mastra.setStorage()

### Description
Sets the storage instance for the Mastra instance.

### Method
`setStorage`

### Endpoint
`/en/reference/core/setStorage`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **storageInstance** (any) - Required - The storage instance to set.

### Request Example
```json
{
  "storageInstance": "your_storage_instance"
}
```

### Response
#### Success Response (200)
- **message** (string) - Confirmation message.

#### Response Example
```json
{
  "message": "Storage instance set successfully."
}
```

## Mastra.getServer()

### Description
Retrieves the configured server configuration.

### Method
`getServer`

### Endpoint
`/en/reference/core/getServer`

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **serverConfig** (object) - The server configuration.

#### Response Example
```json
{
  "serverConfig": {
    "host": "localhost",
    "port": 8080
  }
}
```

## Mastra.getMCPServer()

### Description
Retrieves a specific MCP server instance by ID and optional version.

### Method
`getMCPServer`

### Endpoint
`/en/reference/core/getMCPServer`

### Parameters
#### Query Parameters
- **id** (string) - Required - The ID of the MCP server.
- **version** (string) - Optional - The version of the MCP server.

### Request Example
None

### Response
#### Success Response (200)
- **mcpServerInstance** (object) - The MCP server instance.

#### Response Example
```json
{
  "mcpServerInstance": {
    "id": "server1",
    "version": "1.0.0"
  }
}
```

## Mastra.getVector()

### Description
Retrieves a vector store by name.

### Method
`getVector`

### Endpoint
`/en/reference/core/getVector`

### Parameters
#### Query Parameters
- **name** (string) - Required - The name of the vector store.

### Request Example
None

### Response
#### Success Response (200)
- **vectorStore** (object) - The vector store.

#### Response Example
```json
{
  "vectorStore": {
    "name": "my-vector-store",
    "dimension": 128
  }
}
```

## Mastra.getVectors()

### Description
Retrieves all configured vector stores.

### Method
`getVectors`

### Endpoint
`/en/reference/core/getVectors`

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **vectorStores** (array) - An array of vector stores.

#### Response Example
```json
{
  "vectorStores": [
    {
      "name": "vector-store-1",
      "dimension": 128
    },
    {
      "name": "vector-store-2",
      "dimension": 256
    }
  ]
}
```

## Mastra.getDeployer()

### Description
Retrieves the configured deployer instance.

### Method
`getDeployer`

### Endpoint
`/en/reference/core/getDeployer`

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **deployerInstance** (object) - The deployer instance.

#### Response Example
```json
{
  "deployerInstance": {
    "type": "kubernetes"
  }
}
```

## Mastra.getStorage()

### Description
Retrieves the configured storage instance.

### Method
`getStorage`

### Endpoint
`/en/reference/core/getStorage`

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **storageInstance** (object) - The storage instance.

#### Response Example
```json
{
  "storageInstance": {
    "type": "s3"
  }
}
```

## Mastra.getMCPServers()

### Description
Retrieves all registered MCP server instances.

### Method
`getMCPServers`

### Endpoint
`/en/reference/core/getMCPServers`

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **mcpServers** (array) - An array of MCP server instances.

#### Response Example
```json
{
  "mcpServers": [
    {
      "id": "server1",
      "version": "1.0.0"
    },
    {
      "id": "server2",
      "version": "1.1.0"
    }
  ]
}
```

## Mastra.getTelemetry()

### Description
Retrieves the configured telemetry instance.

### Method
`getTelemetry`

### Endpoint
`/en/reference/core/getTelemetry`

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **telemetryInstance** (object) - The telemetry instance.

#### Response Example
```json
{
  "telemetryInstance": {
    "type": "prometheus"
  }
}
```

## Mastra.setTelemetry()

### Description
Sets the telemetry configuration for all components.

### Method
`setTelemetry`

### Endpoint
`/en/reference/core/setTelemetry`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **telemetryConfig** (object) - Required - The telemetry configuration.

### Request Example
```json
{
  "telemetryConfig": {
    "type": "prometheus",
    "endpoint": "http://localhost:9090"
  }
}
```

### Response
#### Success Response (200)
- **message** (string) - Confirmation message.

#### Response Example
```json
{
  "message": "Telemetry configuration set successfully."
}
```

## Mastra.getLogs()

### Description
Retrieves all logs for a specific transport ID.

### Method
`getLogs`

### Endpoint
`/en/reference/core/getLogs`

### Parameters
#### Query Parameters
- **transportId** (string) - Required - The ID of the transport.

### Request Example
None

### Response
#### Success Response (200)
- **logs** (array) - An array of log entries.

#### Response Example
```json
{
  "logs": [
    {
      "timestamp": "2023-10-27T10:00:00Z",
      "message": "Log entry 1"
    },
    {
      "timestamp": "2023-10-27T10:01:00Z",
      "message": "Log entry 2"
    }
  ]
}
```

## Mastra.getLogsByRunId()

### Description
Retrieves logs for a specific run ID and transport ID.

### Method
`getLogsByRunId`

### Endpoint
`/en/reference/core/getLogsByRunId`

### Parameters
#### Query Parameters
- **runId** (string) - Required - The ID of the run.
- **transportId** (string) - Required - The ID of the transport.

### Request Example
None

### Response
#### Success Response (200)
- **logs** (array) - An array of log entries.

#### Response Example
```json
{
  "logs": [
    {
      "timestamp": "2023-10-27T10:00:00Z",
      "message": "Log entry for run X"
    }
  ]
}
```

## Mastra.getLogger()

### Description
Documentation for the `Mastra.getLogger()` method in Mastra.

### Method
`getLogger`

### Endpoint
`/en/reference/core/getLogger`

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **loggerInstance** (object) - The logger instance.

#### Response Example
```json
{
  "loggerInstance": {
    "level": "info"
  }
}
```
```

--------------------------------

### Initialize Project with pnpm

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

Initializes a new project using the pnpm package manager. The '-y' flag automatically accepts default prompts, simplifying the setup process.

```shell
pnpm init -y
```

--------------------------------

### Guides Overview

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/sveltekit

Overview of guides available for building with Mastra.

```APIDOC
## Guides

### Description
Provides an overview of guides for building with Mastra.

### Endpoint
/en/guides

### Available Guides:
- Overview: Guides on building with Mastra
- Agent Guides:
  - Building an AI Chef Assistant | Mastra Agent Guides
  - Building an AI Stock Agent | Mastra Agents | Guides
- Workflow Guides:
  - Building an AI Recruiter | Mastra Workflows | Guides
- RAG Guides:
  - Building a Research Paper Assistant | Mastra RAG Guides
- MCP Server Guides:
  - MCP Server: Building a Notes MCP Server | Mastra Guide
```

--------------------------------

### Guides API

Source: https://mastra.ai/en/docs

Provides access to guides for building with Mastra, including overviews and specific agent/workflow examples.

```APIDOC
## GET /en/guides

### Description
Retrieves a list of guides for building with Mastra.

### Method
GET

### Endpoint
/en/guides

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **{Array<Object>}** - A list of guide objects, each containing title, route, and description.

#### Response Example
```json
{
  "guides": [
    {
      "title": "Overview",
      "route": "/en/guides",
      "description": "Guides on building with Mastra"
    },
    {
      "title": "Agents: Chef Michel",
      "route": "/en/guides/guide/chef-michel",
      "description": "Guide on creating a Chef Assistant agent in Mastra to help users cook meals with available ingredients."
    }
    // ... other guides
  ]
}
```
```

```APIDOC
## GET /en/guides/guide/[guide_name]

### Description
Retrieves a specific guide based on its name.

### Method
GET

### Endpoint
/en/guides/guide/[guide_name]

### Parameters
#### Path Parameters
- **guide_name** (string) - Required - The name of the guide to retrieve (e.g., `chef-michel`, `stock-agent`).

### Request Example
None

### Response
#### Success Response (200)
- **{Object}** - A guide object containing title, description, and file path.

#### Response Example
```json
{
  "title": "Agents: Chef Michel",
  "description": "Guide on creating a Chef Assistant agent in Mastra to help users cook meals with available ingredients.",
  "filePath": "src/content/en/guides/guide/chef-michel.mdx"
}
```
```

--------------------------------

### Create New Project and Install Dependencies (pnpm)

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

Steps to create a new directory for a Mastra project, initialize it with pnpm, and install necessary development and core Mastra packages along with zod and the OpenAI SDK.

```shell
mkdir hello-mastra && cd hello-mastra
pnpm init
pnpm add typescript tsx @types/node mastra@latest --save-dev
pnpm add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Mastra CLI Command Example with Syntax Highlighting

Source: https://mastra.ai/en/docs/server-db/local-dev-playground

An example of the Mastra CLI command for starting a development server with HTTPS enabled. This snippet illustrates the expected syntax and structure, often found in documentation for clarity.

```html
<div data-pagefind-ignore="$undefined" class="nextra-code x:relative x:not-first:mt-[1.25em]">
  <div class="x:px-4 x:text-xs x:text-gray-700 x:dark:text-gray-200 x:bg-gray-100 x:dark:bg-neutral-900 x:flex x:items-center x:h-12 x:gap-2 x:rounded-t-md x:border x:border-gray-300 x:dark:border-neutral-700 x:contrast-more:border-gray-900 x:contrast-more:dark:border-gray-50 x:border-b-0">
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" class="x:max-w-6 x:shrink-0">
      <path d="M0 2.66667V21.3333C0 2..."></path>
    </svg>
  </div>
  <pre class="x:group x:focus-visible:nextra-focus x:overflow-x-auto x:subpixel-antialiased x:text-[.9em] x:bg-white x:dark:bg-black x:py-4 x:ring-1 x:ring-inset x:ring-gray-300 x:dark:ring-neutral-700 x:contrast-more:ring-gray-900 x:contrast-more:dark:ring-gray-50 x:rounded-md not-prose" tabindex="0">
    <div class="x:group-hover:opacity-100 x:group-focus:opacity-100 x:opacity-0 x:transition x:focus-within:opacity-100 x:flex x:gap-1 x:absolute x:right-4 x:top-2">
      <!-- Copy icon -->
    </div>
    <code class="nextra-code" dir="ltr">
      <span style="--shiki-light: var(--light-color-text-6); --shiki-dark: #D06BEE;">mastra</span> <span style="--shiki-light: var(--light-color-text-6); --shiki-dark: #46F488;">dev</span> <span style="--shiki-light: var(--light-green-accent); --shiki-dark: #46F488;">--https</span>
    </code>
  </pre>
</div>
```

--------------------------------

### Add File to Project (TypeScript)

Source: https://mastra.ai/en/docs/getting-started/installation

This snippet demonstrates how to add a file to the project using a command. It specifies the file path and the command to be executed. This is typically used within a build or setup script.

```typescript
self.__next_f.push([1,"6c:[\"$\",\"p\",null,{\"className\":\"x:not-first:mt-\\[1.25em\\] x:leading-7\",\"children\":\"Add the following code:\"}]\n96:T6e9,{\"children\":[[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-color-text-6)\",\"--shiki-dark\":\"#D06BEE\"},\"children\":\"touch\"}],[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-color-text-6)\",\"--shiki-dark\":\"#46F488\"},\"children\":\" src/mastra/index.ts\"}]]}})"
```

--------------------------------

### Get Agent Reference and Generate Response

Source: https://mastra.ai/ja/examples/agents/using-a-tool

This example demonstrates how to obtain an agent reference using `getAgent()` and then call the `generate()` method to get a response. It assumes the necessary setup for the agent and prompt are in place.

```typescript
const agent = getAgent();
const response = await agent.generate(prompt);
```

--------------------------------

### Install Project Dependencies

Source: https://mastra.ai/ja/examples/memory/memory-with-pg

This command installs the necessary packages for the project. It is assumed that a package manager like npm or yarn is being used.

```shell
npm install --save openai pgvector @supabase/supabase-js
```

--------------------------------

### Launch Mastra Development Server with bun

Source: https://mastra.ai/en/docs/getting-started/installation

This command launches the Mastra Development Server using bun. This server allows you to test your AI agents using the Mastra Playground. Ensure you have bun installed.

```shell
bun run mastra-dev
```

--------------------------------

### Installation Steps (Markdown)

Source: https://mastra.ai/ja/examples/voice/speech-to-speech

This section outlines the steps to install the necessary dependencies for the project. It's crucial to follow these instructions to ensure all required packages are present.

```markdown
### インストール

必要な依存関係をインストールします：
```

--------------------------------

### Install AI SDK OpenAI Package

Source: https://mastra.ai/en/docs/getting-started/installation

Instructions for installing the latest version of the '@ai-sdk/openai' package using different package managers. This is required for ai-sdk v5 compatibility.

```npm
npm install @ai-sdk/openai@latest
```

```pnpm
pnpm add @ai-sdk/openai@latest
```

```yarn
yarn add @ai-sdk/openai@latest
```

```bun
bun add @ai-sdk/openai@latest
```

--------------------------------

### Initialize Assistant UI Project

Source: https://mastra.ai/en/docs/frameworks/agentic-uis/assistant-ui

Creates a new Assistant UI project. This command initiates the setup process for the frontend chat interface.

```bash
npx assistant-ui@latest create
```

--------------------------------

### Node.js OpenAI SDK Example

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

This Node.js code snippet demonstrates the usage of the OpenAI SDK. It initializes a response variable using 'await' and 'const', typical for asynchronous operations when interacting with AI models.

```javascript
const response = await openai('completions', {
  model: 'gpt-3.5-turbo',
  prompt: 'Hello world!'
});

```

--------------------------------

### CLI - mastra init

Source: https://mastra.ai/en/docs/observability/logging

Documentation for the mastra init command, which creates a new Mastra project with interactive setup options.

```APIDOC
## mastra init

### Description
Initializes a new Mastra project with interactive setup options.

### Method
CLI Command

### Endpoint
N/A

### Parameters

### Request Body

### Request Example
```bash
mastra init
```

### Response
#### Success Response
- **message** (string) - Confirmation message indicating project initialization.

#### Response Example
```
Mastra project initialized successfully!
```
```

--------------------------------

### Voice Add Instructions API

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the addInstructions() method available in voice providers, which adds instructions to guide the voice model's behavior.

```APIDOC
## POST /en/reference/voice/voice.addInstructions

### Description
Adds instructions to guide the voice model's behavior.

### Method
POST

### Endpoint
/en/reference/voice/voice.addInstructions

### Parameters
#### Request Body
- **instructions** (string) - Required - The instructions to add.

### Request Example
```json
{
  "instructions": "Respond in a concise manner."
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "instructions_added"
}
```
```

--------------------------------

### Navigate to Project Directory

Source: https://mastra.ai/ja/reference/templates/overview

After initializing the project, navigate into the newly created project directory to proceed with the setup. This is a standard step for most command-line project initializations.

```bash
cd project-directory
```

--------------------------------

### Custom Exporter Setup for OpenTelemetry (Langfuse Example)

Source: https://mastra.ai/ja/docs/observability/nextjs-tracing

This snippet demonstrates setting up a custom OpenTelemetry exporter for tracing. It installs necessary dependencies, creates an instrumentation file, and initializes the NodeSDK with a specific resource and exporter, using Langfuse as an example.

```bash
npm install @opentelemetry/api langfuse-vercel
```

```typescript
import {
  NodeSDK,
  ATTR_SERVICE_NAME,
  resourceFromAttributes,
} from "@mastra/core/telemetry/otel-vendor";
import { LangfuseExporter } from "langfuse-vercel";

export function register() {
  const exporter = new LangfuseExporter({
    // ... Langfuse config
  });

  const sdk = new NodeSDK({
    resource: resourceFromAttributes({
      [ATTR_SERVICE_NAME]: "ai",
    }),
    traceExporter: exporter,
  });

  sdk.start();
}
```

--------------------------------

### Install ai-sdk v5 Package

Source: https://mastra.ai/en/docs/getting-started/installation

To ensure compatibility with ai-sdk v5, install the latest version of the '@ai-sdk/openai' package. This section provides installation commands for various package managers.

```bash
npm install @ai-sdk/openai
```

```bash
pnpm add @ai-sdk/openai
```

```bash
yarn add @ai-sdk/openai
```

```bash
bun add @ai-sdk/openai
```

--------------------------------

### Install @ai-sdk/openai with Yarn or Bun

Source: https://mastra.ai/en/docs/getting-started/installation

This snippet shows how to install the @ai-sdk/openai package using either Yarn or Bun, which are common package managers for JavaScript projects. Ensure you have Node.js and your chosen package manager installed.

```bash
yarn add @ai-sdk/openai@latest
```

```bash
bun add @ai-sdk/openai@latest
```

--------------------------------

### Integrate Mastra with SvelteKit | Mastra Docs

Source: https://mastra.ai/en/examples/workflows/running-workflows

This guide explains how to integrate Mastra with SvelteKit, a popular web framework. It covers the necessary steps and configurations to get started with AI development within a SvelteKit application. The guide is intended for developers looking to leverage Mastra's AI capabilities in their SvelteKit projects.

```mdx
import MastraAI from '@mastra/ai';

const mastra = new MastraAI({
  // Mastra configuration options
});

export async function load() {
  return {
    mastra: mastra
  };
}
```

--------------------------------

### Mastra CLI - Start

Source: https://context7_llms

Start your built Mastra application using the Mastra CLI.

```APIDOC
## Mastra CLI - Start

### Description
Starts your Mastra application after it has been built for deployment.

### Method
CLI Command

### Endpoint
`mastra start`

### Parameters
N/A

### Request Example
```bash
mastra start
```

### Response
N/A
```

--------------------------------

### Client and Server Tools

Source: https://mastra.ai/en/reference/workflows/run-methods/start

Reference for MCPClient and MCPServer.

```APIDOC
## Client and Server Tools

### Description
Reference documentation for Mastra's client and server components related to tools, specifically `MCPClient` and `MCPServer`.

### Endpoints

#### GET /en/reference/tools/client

##### Description
Documentation related to the `client` component within Mastra's tools. The display is marked as hidden in the provided data.

##### Method
GET

##### Endpoint
/en/reference/tools/client

##### Parameters

(No specific parameters are detailed in the provided text for this endpoint.)

##### Request Example
(No request example provided in the input text.)

##### Response
(Response details not provided in the input text.)

#### GET /en/reference/tools/mcp-client

##### Description
Documentation for `MCPClient`, a component within Mastra's tool framework.

##### Method
GET

##### Endpoint
/en/reference/tools/mcp-client

##### Parameters

(No specific parameters are detailed in the provided text for this endpoint.)

##### Request Example
(No request example provided in the input text.)

##### Response
(Response details not provided in the input text.)

#### GET /en/reference/tools/mcp-server

##### Description
Documentation for `MCPServer`, a component within Mastra's tool framework.

##### Method
GET

##### Endpoint
/en/reference/tools/mcp-server

##### Parameters

(No specific parameters are detailed in the provided text for this endpoint.)

##### Request Example
(No request example provided in the input text.)

##### Response
(Response details not provided in the input text.)
```

--------------------------------

### Manual Mastra Project Initialization (yarn)

Source: https://mastra.ai/en/docs/getting-started/installation

Steps for manually setting up a Mastra project with yarn. This includes creating a new directory, initializing the project with yarn, and installing development and core Mastra packages, along with TypeScript and Zod.

```bash
yarn init -y

yarn add typescript tsx @types/node mastra@latest --dev

yarn add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### CLI - mastra start

Source: https://mastra.ai/en/docs/observability/logging

Documentation for the mastra start command, which starts the Mastra project after it has been built.

```APIDOC
## mastra start

### Description
Starts the Mastra project after it has been built.

### Method
CLI Command

### Endpoint
N/A

### Parameters

### Request Body

### Request Example
```bash
mastra start
```

### Response
#### Success Response
- **message** (string) - Message indicating the Mastra project has started.

#### Response Example
```
Mastra project started successfully.
```
```

--------------------------------

### Launch Mastra Development Server with npm

Source: https://mastra.ai/en/docs/getting-started/installation

This command launches the Mastra Development Server using npm. This server allows you to test your AI agents using the Mastra Playground. Ensure you have Node.js and npm installed.

```shell
npm run mastra-dev
```

--------------------------------

### CLI - mastra init

Source: https://mastra.ai/en/reference/observability/otel-tracing/providers/langsmith

Initializes a new Mastra project with interactive setup options.

```APIDOC
## CLI Command - mastra init

### Description
Initializes a new Mastra project with interactive setup options.

### Method
CLI Command

### Endpoint
mastra init

### Parameters
This command is interactive and will prompt the user for necessary information.

### Request Example
```bash
mastra init
```

### Response
#### Success Response
- **output** (string) - Confirmation message indicating project initialization.

#### Response Example
```text
Mastra project initialized successfully!
```
```

--------------------------------

### Example .env File Configuration for OpenAI API Key

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

This section shows the structure of a .env file entry for the OpenAI API key. It highlights the key-value pair format and provides placeholders for your actual API key. Refer to Model Capabilities for provider-specific model names.

```dotenv
OPENAI_API_KEY="あなたのAPIキー"
```

--------------------------------

### Manual Installation - VSCode Configuration

Source: https://mastra.ai/ja/docs/getting-started/mcp-docs-server

This snippet describes the manual installation process for VSCode users. It mentions the creation of a '.vscode' directory for configuration.

```text
VSCode: 作成された .vscode
```

--------------------------------

### Initialize Mastra AI Agent with One-Liner Command

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/next-js

This command initializes the Mastra AI agent with default configurations. It requires Node.js and npm to be installed. The command scaffolds components and examples, and can be directed to a specific directory. It's a quick way to start using Mastra AI.

```bash
npx mastra@latest init --dir . --components agents,tools --example
```

--------------------------------

### Supervisor Agent Example

Source: https://mastra.ai/en/models/providers/inference

Example demonstrating the setup and usage of a supervisor agent in Mastra. This involves defining agent roles and orchestrating their interactions.

```markdown
Supervisor Agent

Example of using a Supervisor Agent to manage other agents and orchestrate complex tasks. This example showcases how to define roles and responsibilities for different agents within a hierarchical structure.
```

--------------------------------

### Install @ai-sdk/openai with npm

Source: https://mastra.ai/en/docs/getting-started/installation

This snippet shows the command to install the latest version of the @ai-sdk/openai package using npm. It is a straightforward command-line instruction.

```bash
npm install @ai-sdk/openai@latest
```

--------------------------------

### Nextra Component Usage in Markdown

Source: https://mastra.ai/ja/docs/frameworks/agentic-uis/cedar-os

This example shows how to import and use Nextra's `Steps` component within a Markdown file. The `Steps` component is used here to outline a quick start guide for setting up a project.

```markdown
\u003cSteps\u003e\n### プロジェクトをセットアップする\n\nCedar の CLI コマンドを実行します:\n``` bash\nnpx cedar-os-cli plant-seed\n```\n\nゼロから始める場合は、モノレポ内でフロントエンドとバックエンドが揃った完全なセットアップが行える \\*Mastra starter\\* テンプレートを選択してください。\n\nすでに Mastra のバックエンドがある場合は、代わりに \\*blank frontend cedar repo\\* オプションを使用してください。\n- Cedar 用のコンポーネントや依存関係一式をダウンロードするオプションが表示されます。最初の一歩として、少なくとも
```

--------------------------------

### RAG Implementation Example using Python

Source: https://mastra.ai/en/docs/rag/overview

This snippet demonstrates the initial setup for RAG in Python. It includes importing necessary functions for embedding documents and interacting with the OpenAI API. Ensure you have the 'ai' and '@ai-sdk/openai' packages installed.

```python
import { embedMany } from "ai";
import { openai } from "@ai-sdk/openai";

// Placeholder for document processing and embedding logic
// This section would typically involve loading documents, chunking them,
// and then generating embeddings using embedMany.

// Example of how embeddings might be generated (conceptual):
// const embeddings = await embedMany("openai:text-embedding-3-small", documents);

// Placeholder for vector database storage and retrieval logic
// This section would involve storing the embeddings in a vector database
// and then implementing retrieval mechanisms to fetch relevant contexts
// based on a user's query.

// Example of how to use openai (conceptual):
// const result = await openai("chat:completions", {
//   messages: [
//     { role: "user", content: "What is RAG?" },
//   ],
// });
// const completion = result.text;

```

--------------------------------

### Mastra CLI - Initialize Project

Source: https://context7_llms

Documentation for the mastra init command, which creates a new Mastra project with interactive setup options.

```APIDOC
## Mastra CLI - Initialize Project

### Description
Initializes a new Mastra project with interactive setup options.

### Method
CLI Command

### Endpoint
`mastra init`

### Parameters
N/A

### Request Example
```bash
mastra init
```

### Response
N/A
```

--------------------------------

### Create a Weather Tool (TypeScript)

Source: https://mastra.ai/en/docs/getting-started/installation

This example demonstrates the basic structure for creating a custom tool in TypeScript, specifically a 'weather-tool.ts'. This allows integrating external functionalities into your application. It requires a TypeScript environment to run.

```typescript
import { tool } from "@langchain/core/tools";

const weatherTool = tool(
  async (location: string) => {
    // Placeholder for weather fetching logic
    return `The weather in ${location} is sunny and 25°C.`;
  },
  {
    name: "getWeather",
    description: "Gets the current weather for a given location.",
  }
);

export default weatherTool;

```

--------------------------------

### CLI - mastra init

Source: https://mastra.ai/en/reference/rag/database-config

Creates a new Mastra project with interactive setup options.

```APIDOC
## CLI Command: mastra init

### Description
Creates a new Mastra project with interactive setup options.

### Usage
```bash
mastra init
```

### Options
This command typically runs interactively, prompting the user for project details.
```

--------------------------------

### Netlify Deployer Usage Example (TypeScript)

Source: https://mastra.ai/en/docs/deployment/serverless-platforms/netlify-deployer

Demonstrates how to integrate the NetlifyDeployer into a Mastra application instance using TypeScript. This example shows the basic setup for deploying with Netlify.

```typescript
import { Mastra } from "@mastra/core/mastra";
import { NetlifyDeployer } from "@mastra/deployer-netlify";

export const mastra = new Mastra({
  // ...
  deployer: new NetlifyDeployer()
});
```

--------------------------------

### Set Up API Keys Guide

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/vite-react

This section provides instructions on how to set up API keys for the project. It is a crucial step for authenticating with external services or enabling specific functionalities that require API access. The process typically involves obtaining keys from a provider and configuring them within the project's environment or settings.

```markdown
## Set Up API Keys

This section guides you through the process of setting up API keys required for the project. Follow these steps to ensure proper authentication and access to necessary services.
```

--------------------------------

### package.json Script Configuration

Source: https://mastra.ai/en/docs/getting-started/installation

This snippet shows the 'scripts' section of a package.json file, commonly used in Node.js projects to define command-line scripts for tasks like starting a development server. It details the 'dev' script.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

--------------------------------

### Mastra CLI Start Command

Source: https://mastra.ai/en/docs/getting-started/project-structure

Start your built Mastra application using the Mastra CLI. This command is used to run the production-ready build of your project.

```bash
# Example usage (conceptual, actual command may vary)
# mastra start
```

--------------------------------

### Import Mastra AI and Load Environment Variables (TypeScript)

Source: https://mastra.ai/en/examples/memory/memory-with-upstash

This snippet imports the Mastra AI module and loads environment variables using dotenv. It's a common setup for projects requiring external configurations or API keys. Ensure dotenv is installed (`npm install dotenv`).

```typescript
import dotenv from "dotenv/config";
import { mastra } from "./mastra";

const threadId;

```

--------------------------------

### Migration Guide

Source: https://mastra.ai/en/examples/scorers/textual-difference

Guide for migrating from VNext to Standard APIs.

```APIDOC
## Migration Guide: VNext to Standard APIs

### Description
Guide for migrating from VNext to Standard APIs.

### Endpoint
/en/reference/agents/migration-guide
```

--------------------------------

### Build and Run Mastra Server

Source: https://mastra.ai/en/examples/deployment/deploying-mastra-server

This code snippet shows the basic commands to build your Mastra application and then start the generated HTTP server. It assumes you have the Mastra CLI installed and configured.

```bash
mastra build
node .mastra/output/index.mjs
```

--------------------------------

### CLI - mastra init

Source: https://mastra.ai/en/models/providers/alibaba

Creates a new Mastra project with interactive setup options.

```APIDOC
## CLI Command: mastra init

### Description
Initializes a new Mastra project with interactive setup options.

### Usage
```bash
mastra init
```

### Options
This command is interactive and will prompt the user for project details.
```

--------------------------------

### Mastra Client SDK Installation

Source: https://mastra.ai/en/docs/server-db/mastra-client

Instructions for installing the Mastra Client SDK using various package managers.

```APIDOC
## Mastra Client SDK Installation

Instructions for installing the Mastra Client SDK using various package managers.

### npm
```bash
npm install @mastra/client-js@latest
```

### yarn
```bash
yarn add @mastra/client-js@latest
```

### pnpm
```bash
pnpm add @mastra/client-js@latest
```

### bun
```bash
bun add @mastra/client-js@latest
```
```

--------------------------------

### Starting Mastra Application (Custom Output Directory)

Source: https://mastra.ai/en/reference/cli/start

This example shows how to start the Mastra application while specifying a custom output directory. This is useful when the Mastra output is not located in the default '.mastra/output' directory.

```bash
mastra start -d /path/to/custom/output
```

--------------------------------

### Import Mastra Core and Weather Agent (JavaScript)

Source: https://mastra.ai/en/docs/getting-started/installation

Imports necessary components from the Mastra library, specifically the main Mastra class and the weatherAgent. This is a standard setup for integrating Mastra's functionalities into a project.

```javascript
import { Mastra } from "@mastra/core/mastra";
import { weatherAgent } from "./agents/weather-agent";
```

--------------------------------

### Deploy MCPServer Example | Mastra AI

Source: https://mastra.ai/en/examples/workflows/running-workflows

Example of setting up, building, and deploying a Mastra MCPServer. This covers using the stdio transport and publishing to NPM.

```markdown
```mdx
import { Card, CardHeader, CardBody } from "@/components/ui/card";

export const meta = {
  title: "Example: Deploying an MCPServer",
  description: "Example of setting up, building, and deploying a Mastra MCPServer using the stdio transport and publishing it to NPM.",
  route: "/en/examples/agents/deploying-mcp-server",
};

# Deploying a Mastra MCPServer

This example provides a guide on how to set up, build, and deploy a Mastra Multi-Component Protocol (MCP) Server. It specifically covers using the standard input/output (stdio) transport for communication and publishing the server as an NPM package.

## Key Steps

1.  **Project Setup**: Initialize a new Node.js project or integrate into an existing one.
2.  **MCP Server Definition**: Define the components and their interactions using Mastra's framework.
3.  **Stdio Transport Configuration**: Configure the server to use stdio for inter-process communication.
4.  **Building the Server**: Compile or bundle the server code as needed for distribution.
5.  **NPM Publishing**: Package the server and publish it to the NPM registry for easy installation and use by other applications.

## Conceptual Code Snippet (TypeScript/JavaScript for Node.js)

```typescript
// Conceptual TypeScript/JavaScript code for an MCPServer
import { MCPClient, MCPServer } from "mastra-mcp";
import { StdioTransport } from "mastra-mcp/transports";

// Define your server components (e.g., agents, services)
class MyServiceComponent {
  async processRequest(data: any): Promise<any> {
    console.log("Processing data:", data);
    return { result: "processed successfully", received: data };
  }
}

// Initialize the server with stdio transport
const server = new MCPServer({
  transport: new StdioTransport(),
  components: {
    myService: new MyServiceComponent(),
  },
});

// Start the server
server.start().then(() => {
  console.log("MCPServer started with stdio transport.");
});

// To publish to NPM:
// 1. Ensure your package.json is configured correctly (main, types, files, etc.)
// 2. Run `npm publish` from your project directory.

// Example of how a client might interact (assuming it's published to NPM)
/*
import { MCPClient } from "mastra-mcp";
import { StdioTransport } from "mastra-mcp/transports";

async function runClient() {
  const client = new MCPClient({
    transport: new StdioTransport(), // Or connect to the published server process
  });

  await client.connect();

  const response = await client.invoke("myService.processRequest", { payload: "some data" });
  console.log("Client received response:", response);
}

runClient();
*/
```

## Deployment Considerations

*   Ensure Node.js and NPM are installed on the deployment environment.
*   The `stdio` transport requires the server process to be run in a way that its stdin/stdout can be captured and piped by the client or orchestrator.
```
```

--------------------------------

### Agent Setup Example (TypeScript)

Source: https://mastra.ai/en/examples/memory/memory-with-libsql

This TypeScript code demonstrates how to add the Memory functionality to an agent. It imports the Memory class and shows its basic usage within an agent context. This example is part of the `example-libsql-agent.ts` file.

```typescript
import { Memory } from "@mastra/fastembed";
```

--------------------------------

### CLI - mastra init

Source: https://mastra.ai/en/docs/deployment/serverless-platforms/netlify-deployer

Initializes a new Mastra project with interactive setup options. This command is used to bootstrap a new Mastra application.

```APIDOC
## CLI Command: mastra init

### Description
Creates a new Mastra project with interactive setup options.

### Usage
mastra init

### Parameters
This command is interactive and will prompt the user for necessary information.

### Example
```bash
$ mastra init
? Project name: my-mastra-project
? TypeScript or JavaScript? TypeScript
... (interactive prompts) ...
```
```

--------------------------------

### Initialize Mastra Interactively (CLI)

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/vite-react

Initiates the Mastra setup process interactively via the command line. This allows for customized configuration of the Mastra environment, including install location and components.

```bash
npx mastra@latest init
```

--------------------------------

### Configure Mastra Project Scripts in package.json

Source: https://mastra.ai/en/docs/getting-started/installation

Adds 'dev' and 'build' scripts to the package.json file for running Mastra development server and building the project.

```json
{
  "scripts": {
    // ...
    "dev": "mastra dev",
    "build": "mastra build"
  }
}
```

--------------------------------

### Interactive Mastra AI Project Initialization

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/vite-react

This command initiates an interactive setup process for the Mastra AI project, allowing users to choose configuration options through prompts.

```bash
init
```

--------------------------------

### CLI - mastra start

Source: https://mastra.ai/en/reference/rag/database-config

Starts your built Mastra application.

```APIDOC
## CLI Command: mastra start

### Description
Starts your built Mastra application.

### Usage
```bash
mastra start
```

### Options
This command runs the production-ready build of your Mastra application.
```

--------------------------------

### Basic Database Configuration Example

Source: https://mastra.ai/en/reference/rag/database-config

An example demonstrating how to set up basic database configuration for the Pinecone vector store.

```APIDOC
### Basic Database Configuration

```javascript
import { createVectorQueryTool } from '@mastra/rag';

const vectorTool = createVectorQueryTool({
  vectorStoreName: 'pinecone',
  indexName: 'documents',
  model: embedModel,
  databaseConfig: {
    pinecone: {
      namespace: 'production'
    }
  }
});
```
```

--------------------------------

### tsconfig.json Initialization for TypeScript

Source: https://mastra.ai/en/docs/getting-started/installation

This code snippet represents a basic tsconfig.json file, which configures the TypeScript compiler. It includes essential compiler options for a typical project setup, such as the target JavaScript version and module system.

```json
{
  "compilerOptions": {
    "target": "ES2016",
    "module": "commonjs",
    "jsx": "preserve",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

--------------------------------

### Initialize Mastra Project with npm

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

This command initializes a new Mastra project using npm. It is a straightforward command-line interface (CLI) command for setting up the project environment. Ensure you have Node.js and npm installed.

```bash
npm init -y
npm install
```

--------------------------------

### Initialize Mastra Project

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/sveltekit

Initialize a new Mastra project. Use the '--default' flag for a quick setup with sensible defaults, or run without flags for an interactive CLI experience.

```bash
npx mastra@latest init --default
```

```bash
npx mastra@latest init
```

--------------------------------

### TypeScript Example for Starting and Resuming Workflows

Source: https://mastra.ai/en/docs/workflows/overview

This code snippet is a placeholder for TypeScript code that would initiate or resume a workflow. The `start()` and `resume()` functions are key to managing workflow execution, and this example indicates where such logic would reside.

```typescript
start()
resume()
```

--------------------------------

### GitHub Link to Workflow Example

Source: https://mastra.ai/ja/examples/tools/workflow-as-tools

This snippet provides a link to a GitHub repository illustrating the 'workflow-as-tools' example within the Mastra AI project. It is designed to guide users to a practical implementation of the concepts discussed. The link is presented as a flex container with styling for visual appeal and user interaction.

```html
<a target="_blank" rel="noopener noreferrer" class="flex w-full flex-row justify-between p-3 border border-gray-300 dark:border-[\#404040] rounded-md cursor-pointer group text-zinc-900 dark:text-zinc-50 mt-16" href="https://github.com/mastra-ai/mastra/blob/main/examples/basics/agents/workflow-as-tools">
            <div class="flex flex-row gap-3">
              <div class="border border-transparent rounded-full mt-[2px]">
                <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" class="w-[18px] h-[18px] text-inherit">
                  <g clipPath="url(#clip0_872_3147)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12
```

--------------------------------

### Netlify Deployer Usage Example

Source: https://mastra.ai/ja/docs/deployment/serverless-platforms/netlify-deployer

This example demonstrates how to use the Netlify deployer. It appears to involve importing and configuring the deployer, likely for CI/CD pipelines or automated deployments. Specific implementation details would depend on the surrounding code.

```javascript
const deployer = require('@mastra/deployer-netlify');

// Example usage (specifics depend on the deployer's API)
deployer.deploy({
  // deployment configuration options
});
```

--------------------------------

### start() Method

Source: https://mastra.ai/en/docs/deployment/serverless-platforms/netlify-deployer

Documentation for the `start()` method in workflows, which begins execution of a workflow run.

```APIDOC
## start()

### Description
Begins the execution of a specific workflow run. This method is typically called after a workflow run has been created using `createRun()`.

### Method
`POST`

### Endpoint
`/api/runs/{runId}/start`

### Parameters
#### Path Parameters
- **runId** (string) - Required - The ID of the workflow run to start.

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **status** (string) - The updated status of the workflow run (e.g., 'RUNNING').

#### Response Example
```json
{
  "status": "RUNNING"
}
```
```

--------------------------------

### Mastra .foreach() for Array Processing Example

Source: https://mastra.ai/ja/examples/workflows_vNext/array-as-input

Demonstrates how to process array inputs within a workflow using Mastra's `.foreach()` helper function. This example shows the setup and usage, illustrating how Mastra iterates over each item in an array to perform a specific step. The code snippet includes installation instructions.

```markup
<main data-pagefind-body>
  <h1 id="$undefined" class="x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-bold x:mt-2 x:text-4xl">配列を入力として</h1>
  <p class="x:not-first:mt-[1.25em] x:leading-7">
    この例では、ワークフローで配列入力を処理する方法を示しています。Mastraは、配列内の各アイテムに対してステップを実行する
    <code class="nextra-code" dir="ltr">.foreach()</code>
    ヘルパー関数を提供しています。
  </p>
  <h2 id="セットアップ" class="x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-[fade-in_1.5s] x:mt-10 x:border-b x:pb-1 x:text-3xl nextra-border">
    セットアップ
    $L16
  </h2>
  <div data-pagefind-ignore class="nextra-code x:relative x:not-first:mt-[1.25em]">
    $undefined
    <pre class="x:group x:focus-visible:nextra-focus x:overflow-x-auto x:subpixel-antialiased x:text-[.9em] x:bg-white x:dark:bg-black x:py-4 x:ring-1 x:ring-inset x:ring-gray-300 x:dark:ring-neutral-700 x:contrast-more:ring-gray-900 x:contrast-more:dark:ring-gray-50 x:contrast-more:contrast-150 x:rounded-md not-prose" tabindex="0">
      <div class="x:group-hover:opacity-100 x:group-focus:opacity-100 x:opacity-0 x:transition x:focus-within:opacity-100 x:flex x:gap-1 x:absolute x:right-4 x:top-2">
        $L17
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em">
          <path d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path>
        </svg>
        $L18
      </div>
      <code class="nextra-code" dir="ltr">
        <span>
          <span style="--shiki-light: var(--light-color-text-6); --shiki-dark: #D06BEE;">npm</span>
          <span style="--shiki-light: var(--light-color-text-6); --shiki-dark: #46F488;"> install</span>
          <span></span>
        </span>
      </code>
    </pre>
  </div>
</main>
```

--------------------------------

### Launch Mastra Development Server with yarn

Source: https://mastra.ai/en/docs/getting-started/installation

This command launches the Mastra Development Server using yarn. This server allows you to test your AI agents using the Mastra Playground. Ensure you have Node.js and yarn installed.

```shell
yarn mastra-dev
```

--------------------------------

### Manual Mastra Project Initialization (npm)

Source: https://mastra.ai/en/docs/getting-started/installation

Steps to manually initialize a Mastra project using npm. This includes creating a directory, initializing npm, and installing development and core Mastra packages along with necessary dependencies like TypeScript and Zod.

```bash
mkdir hello-mastra && cd hello-mastra

npm init -y

npm install typescript tsx @types/node mastra@latest --save-dev

npm install @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Cloudflare Voice Agent for Speech-to-Text

Source: https://mastra.ai/en/docs/voice/overview

This TypeScript example shows how to initialize a voice agent with Cloudflare's voice provider. It processes an audio file to get a text transcript and then generates a text response. Ensure you have installed @mastra/core, @ai-sdk/openai, and @mastra/voice-cloudflare.

```typescript
import { Agent } from '@mastra/core/agent';
import { openai } from '@ai-sdk/openai';
import { CloudflareVoice } from "@mastra/voice-cloudflare";
import { createReadStream } from 'fs';

const voiceAgent = new Agent({
name: "Voice Agent",
instructions: "You are a voice assistant that can help users with their tasks.",
model: openai("gpt-4o"),
voice: new CloudflareVoice(),
});

// Use an audio file from a URL
const audioStream = await createReadStream("./how_can_i_help_you.mp3");

// Convert audio to text
const transcript = await voiceAgent.voice.listen(audioStream);
console.log(`User said: ${transcript}`);

// Generate a response based on the transcript
const { text } = await voiceAgent.generate(transcript);
```

--------------------------------

### CLI: mastra init

Source: https://mastra.ai/en/docs/frameworks/agentic-uis/copilotkit

Documentation for the mastra init command, which creates a new Mastra project with interactive setup options.

```APIDOC
## CLI: mastra init

### Description
Initializes a new Mastra project with interactive setup options.

### Method
CLI Command

### Endpoint
mastra init

### Parameters
(No specific parameters listed, implies interactive prompts)

### Response
(New Mastra project structure)
```

--------------------------------

### Add Core Mastra Dependencies with Bun

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

Installs the core Mastra package along with Zod for schema validation and the AI SDK for OpenAI integration.

```bash
bun add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Launch Mastra Development Server with Mastra CLI

Source: https://mastra.ai/en/docs/getting-started/installation

This command launches the Mastra Development Server using the Mastra CLI. This server allows you to test your AI agents using the Mastra Playground. Ensure you have the Mastra CLI installed.

```shell
mastrad run dev
```

--------------------------------

### JavaScript: Retrieving Step Result Status

Source: https://mastra.ai/ja/reference/workflows/if

A JavaScript code example illustrating how to get the status of a step named 'start' from a context object. It highlights the use of a generic type for the result and accessing its status property.

```javascript
const result = context.getResult<{
    status: string
  }>("start");
  return result?.status;
```

--------------------------------

### CLI - create-mastra

Source: https://mastra.ai/en/reference/observability/otel-tracing/providers/langsmith

Creates a new Mastra project with interactive setup options.

```APIDOC
## CLI Command - create-mastra

### Description
Creates a new Mastra project with interactive setup options.

### Method
CLI Command

### Endpoint
create-mastra

### Parameters
This command is interactive and will prompt the user for necessary information.

### Request Example
```bash
mastra create-mastra
```

### Response
#### Success Response
- **output** (string) - Confirmation message indicating project creation.

#### Response Example
```text
Project 'my-mastra-app' created successfully!
```
```

--------------------------------

### Getting Started with Mastra Evals in TypeScript

Source: https://mastra.ai/en/docs/evals/overview

This TypeScript example demonstrates how to integrate Mastra's Evals into an agent. It shows the import of necessary classes from '@mastra/core/agent' and '@mastra/evals/llm', and configures summarization, content similarity, and tone consistency metrics for an agent using the OpenAI model.

```typescript
import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";
import { SummarizationMetric } from "@mastra/evals/llm";
import {
  ContentSimilarityMetric,
  ToneConsistencyMetric,
} from "@mastra/evals/nlp";

const model = openai("gpt-4o");

export const myAgent = new Agent({
  name: "ContentWriter",
  instructions: "You are a content writer that creates accurate summaries",
  model,
  evals: {
    summarization: new SummarizationMetric(model),
    contentSimilarity: new ContentSimilarityMetric(),
    tone: new ToneConsistencyMetric(),
  },
});
```

--------------------------------

### Mastra AI CLI Initialization Reference

Source: https://mastra.ai/ja/docs/frameworks/next-js

Provides a reference to the 'mastra init' command for detailed information on its usage and available options. This is useful for understanding how to customize the setup.

```text
詳細は mastra init を参照してください。
```

--------------------------------

### CLI - mastra start

Source: https://mastra.ai/en/docs/deployment/serverless-platforms/netlify-deployer

Starts your built Mastra application. This command is used to run the production-ready build.

```APIDOC
## CLI Command: mastra start

### Description
Starts your built Mastra application.

### Usage
mastra start

### Parameters
None

### Example
```bash
$ mastra start
Starting Mastra application...
Application is running.
```
```

--------------------------------

### Mastra Guides - Overview

Source: https://mastra.ai/en/examples/evals/toxicity

Provides an overview of guides available for building with Mastra.

```APIDOC
## GET /en/guides

### Description
Retrieves an overview of guides for building with Mastra.

### Method
GET

### Endpoint
/en/guides

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **title** (string) - The title of the guides overview.
- **description** (string) - A brief description of the guides section.

#### Response Example
{
  "title": "Guides",
  "description": "Guides on building with Mastra"
}
```

--------------------------------

### Initialize Project with Bun

Source: https://mastra.ai/en/docs/getting-started/installation

Command to initialize a new project using Bun, a fast all-in-one JavaScript runtime. This is an alternative to Yarn for project initialization.

```shell
bun init -y
```

--------------------------------

### Initialize Mastra Project with Package Managers

Source: https://mastra.ai/en/docs/getting-started/installation

Commands to create a new project directory and initialize it with TypeScript, necessary dev dependencies, and the Mastra core package. Supports npm, pnpm, yarn, and bun.

```shell
mkdir hello-mastra && cd hello-mastra
```

```shell
npm init -y 
npm install typescript tsx @types/node mastra@latest --save-dev 
npm install @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

```shell
pnpm init 
pnpm add typescript tsx @types/node mastra@latest --save-dev 
pnpm add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

```shell
yarn init -y 
yarn add typescript tsx @types/node mastra@latest --dev 
yarn add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

```shell
bun init -y 
bun add typescript tsx @types/node mastra@latest --dev 
bun add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Example TypeScript Agent for Mastra AI

Source: https://mastra.ai/ja/examples/memory/memory-with-pg

This TypeScript code defines an example agent for the Mastra AI project. It demonstrates how to import necessary modules and set up an agent.

```typescript
import { Agent } from "@mastra/ai-runtime";

export default new Agent({
  // ... agent configuration
});

```

--------------------------------

### Start Workflow Run with Initial Data (JavaScript)

Source: https://mastra.ai/ja/docs/workflows-vnext/inngest-workflow

This example illustrates how to start a workflow run and provide initial data. It uses the 'start' method on the run object, passing an object that includes 'inputData' with a 'value' property. The current implementation starts the run with the value '5'.

```javascript
const result = await run.start({
  inputData: {
    value: "5"
  }
});
```

--------------------------------

### Start Mastra Dev Server with npm

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/sveltekit

This code snippet demonstrates how to start the Mastra Dev Server using npm. This command exposes your agents as REST endpoints, allowing for seamless integration and testing within your development environment. Ensure you have Node.js and npm installed.

```bash
self.__next_f.push([1,"39:[\"$\",\"$L16\",null,{\"items\":[\"npm\",\"CLI\"],\"children\":[[\"$\",\"$L17\",null,{\"children\":[[\"$\",\"h3\",null,{\"id\":\"npm-1\",\"style\":{\"visibility\":\"hidden\",\"width\":0,\"height\":0},\"children\":\"npm\"}],`
          +           `[\"$\",\"div\",null,{\"data-pagefind-ignore\":\"$undefined\",\"className\":\"nextra-code x:relative x:not-first:mt-[1.25em]\",\"children\":[\"$undefined\",[\"$\",\"pre\",null,{\"className\":\"x:group x:focus-visible:nextra-focus x:overflow-x-auto x:subpixel-antialiased x:text-[.9em] x:bg-white x:dark:bg-black x:py-4 x:ring-1 x:ring-inset x:ring-gray-300 x:dark:ring-neutral-700 x:contrast-more:ring-gray-900 x:contrast-more:dark:ring-gray-50 x:contrast-more:contrast-150 x:rounded-md not-prose\",\"tabIndex\":\"0\",\"children\":[[\"$\",\"div\",null,{\"className\":\"x:group-hover:opacity-100 x:group-focus:opacity-100 x:opacity-0 x:transition x:focus-within:opacity-100 x:flex x:gap-1 x:absolute x:right-4 x:top-2\",\"children\":[[\"$\",\"$L19\",null,{\"children\":[\"$\",\"svg\",null,{\"viewBox\":\"0 0 24 24\",\"fill\":\"currentColor\",\"height\":\"1em\",\"children\":[\"$\",\"path\",null,{\"d\":\"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z\"}]}]}]`
          +           `]]}`
        }
      ]
    }
  ]
}
```
```

--------------------------------

### CLI: mastra start

Source: https://mastra.ai/en/docs/frameworks/agentic-uis/copilotkit

Start your built Mastra application

```APIDOC
## CLI: mastra start

### Description
Starts the built Mastra application.

### Method
CLI Command

### Endpoint
mastra start

### Parameters
(No specific parameters listed)

### Response
(Running Mastra application)
```

--------------------------------

### Launch Mastra Development Server with pnpm

Source: https://mastra.ai/en/docs/getting-started/installation

This command launches the Mastra Development Server using pnpm. This server allows you to test your AI agents using the Mastra Playground. Ensure you have Node.js and pnpm installed.

```shell
pnpm mastra-dev
```

--------------------------------

### View Example on GitHub

Source: https://mastra.ai/ja/examples/agents/hierarchical-multi-agent

This snippet provides a link to view an example of a hierarchical multi-agent setup on GitHub. It includes the URL and a visual indicator if the link is outdated. This allows users to explore more complex implementations.

```html
<a target="_blank" rel="noopener noreferrer" class="flex w-full flex-row justify-between p-3 border border-gray-300 dark:border-[#404040] rounded-md cursor-pointer group text-zinc-900 dark:text-zinc-50 mt-16" href="https://github.com/mastra-ai/mastra/blob/main/examples/basics/agents/hierarchical-multi-agent">
  <div class="flex flex-row gap-3">
    <div class="border border-transparent rounded-full mt-[2px]">
      <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" class="w-[18px] h-[18px] text-inherit">
        <g clipPath="url(#clip0_872_3147)">
          <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_872_3147">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="pr-8 leading-6 group-hover:underline">
      View Example on GitHub
      <span>
        <span>(outdated)</span>
      </span>
    </div>
  </div>
  <div class="flex-shrink-0 mt-[4px]">
    <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style="color:currentcolor">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"/>
    </svg>
  </div>
</a>
```

--------------------------------

### Guides Overview

Source: https://mastra.ai/en/reference/workflows/workflow-methods/sendEvent

Overview of guides available for building with Mastra.

```APIDOC
## Guides

### Description
Provides guides on building with Mastra.

### Endpoint
/en/guides
```

--------------------------------

### Get Instructions API

Source: https://mastra.ai/en/examples/memory/memory-with-pg

Documentation for the `Agent.getInstructions()` method, which retrieves the instructions that guide the agent's behavior.

```APIDOC
## GET /en/reference/agents/getInstructions

### Description
This endpoint provides documentation for the `Agent.getInstructions()` method, which retrieves the instructions that guide the agent's behavior.

### Method
GET

### Endpoint
/en/reference/agents/getInstructions

### Parameters

#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **documentation** (string) - Information about the Agent.getInstructions() method.

#### Response Example
```json
{
  "documentation": "Documentation for the `Agent.getInstructions()` method in Mastra agents, which retrieves the instructions that guide the agent's behavior."
}
```
```

--------------------------------

### Deployment Examples

Source: https://mastra.ai/en/reference/core/getWorkflow

Examples demonstrating how to deploy Mastra Server and related components.

```APIDOC
## POST /api/deploy/mastra-server

### Description
Deploys a Mastra Server instance.

### Method
POST

### Endpoint
/api/deploy/mastra-server

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **config** (object) - Required - Configuration details for the Mastra Server deployment.

### Request Example
```json
{
  "config": {
    "version": "1.0.0",
    "replicas": 3,
    "resources": {
      "cpu": "100m",
      "memory": "128Mi"
    }
  }
}
```

### Response
#### Success Response (200)
- **deploymentId** (string) - Unique identifier for the deployment.
- **status** (string) - Current status of the deployment.

#### Response Example
```json
{
  "deploymentId": "dep-xyz789",
  "status": "pending"
}
```
```

--------------------------------

### Using the Interactive CLI

Source: https://mastra.ai/ja/docs/frameworks/next-js

Explains how to use the interactive CLI for setup customization. Running the 'init' command will prompt the user to select options for configuring the Mastra AI environment.

```text
セットアップをカスタマイズしたい場合は、init コマンドを実行し、プロンプトに従ってオプションを選択してください。
```

--------------------------------

### Example package.json Structure for Server - Nextra

Source: https://mastra.ai/en/examples/agents/deploying-mcp-server

An example illustrating the expected structure within a 'package.json' file for a Nextra project. It highlights the 'bin' field pointing to the server entry point and the necessary build script for the server.

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "bin": "./dist/server/index.js",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "build:server": "tsc -p tsconfig.server.json"
  },
  "dependencies": {
    "next": "^13.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/node": "^18.0.0",
    "typescript": "^5.0.0"
  }
}
```

--------------------------------

### Install Mastra AI LLMs TXT Dependencies

Source: https://mastra.ai/en/docs/getting-started/installation

This command installs the Mastra AI LLMs TXT package and its development dependencies (TypeScript, tsx, and @types/node) using pnpm. It's crucial for setting up the project environment.

```bash
pnpm install mastra@latest --save-dev typescript tsx @types/node
```

--------------------------------

### Install @ai-sdk/openai with pnpm

Source: https://mastra.ai/en/docs/getting-started/installation

This snippet demonstrates how to add the latest version of the @ai-sdk/openai package using the pnpm package manager. This is an alternative to npm for package management.

```bash
pnpm add @ai-sdk/openai@latest
```

--------------------------------

### Advanced RAG Examples

Source: https://mastra.ai/en/guides/guide/research-assistant

Explore examples for more advanced Retrieval-Augmented Generation (RAG) techniques.

```APIDOC
## Advanced RAG Examples

### Description
Explore examples for more advanced Retrieval-Augmented Generation (RAG) techniques.

### Examples
- **Filter RAG**: Demonstrates filtering results using metadata.
  - Endpoint: `/examples/rag/usage/filter-rag`
- **Cleanup RAG**: Demonstrates optimizing information density.
  - Endpoint: `/examples/rag/usage/cleanup-rag`
- **Chain of Thought RAG**: Demonstrates complex reasoning queries using workflows.
  - Endpoint: `/examples/rag/usage/cot-rag`
- **Rerank RAG**: Demonstrates improved result relevance.
  - Endpoint: `/examples/rag/usage/rerank-rag`
```

--------------------------------

### pnpm CLI Command for Project Setup

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/sveltekit

This snippet shows a command-line interface command using 'pnpm'. The 'pnpm install' command is a standard way to install project dependencies. The 'pnpm-1' ID suggests this is a specific command or section related to pnpm within the project's documentation or script.

```shell
pnpm install
```

--------------------------------

### Start Mastra Development Server

Source: https://mastra.ai/en/docs/workflows/inngest-workflow

Starts the Mastra development server locally, making it accessible for other services like the Inngest Dev Server. Ensure Docker is running and project dependencies are installed.

```bash
npx mastra dev
```

--------------------------------

### Mastra AI: WhatsApp Chat Bot Example

Source: https://mastra.ai/en/models/gateways/fireworks-ai

A practical example demonstrating the creation of a WhatsApp chat bot using Mastra AI, covering setup and message handling.

```mdx
import { Mastra } from '@mastra/whatsapp';

const mastra = new Mastra({ token: 'YOUR_WHATSAPP_TOKEN' });

mastra.onMessage(async (message) => {
  const response = await mastra.generateText(message.text);
  await mastra.sendMessage(message.from, response);
});
```

--------------------------------

### Deploying a Mastra MCPServer

Source: https://mastra.ai/en/reference/legacyWorkflows/createRun

Example of setting up, building, and deploying a Mastra MCPServer using the stdio transport and publishing it to NPM.

```markdown
This example provides a step-by-step guide for deploying a Mastra MCPServer. It covers the entire process from initial setup and building the server to utilizing the stdio transport for communication and finally publishing the server package to NPM for wider distribution.
```

--------------------------------

### Project Setup with Cedar CLI

Source: https://mastra.ai/ja/docs/frameworks/agentic-uis/cedar-os

This code snippet demonstrates the command to set up a new project using the Cedar CLI. It's a foundational step for starting development within the Mastra AI LLMs TXT project.

```bash
npx cedar-os-cli
```

--------------------------------

### Get Workflows

Source: https://mastra.ai/en/examples/deployment

Retrieves all configured workflows.

```APIDOC
## GET /en/reference/core/getWorkflows

### Description
Retrieves all configured workflows.

### Method
GET

### Endpoint
/en/reference/core/getWorkflows

### Response
#### Success Response (200)
- **workflows** (array) - An array of workflow objects.
  - Each object contains:
    - **id** (string) - The workflow's unique identifier.
    - **name** (string) - The name of the workflow.

#### Response Example
```json
{
  "workflows": [
    {
      "id": "wf_abc",
      "name": "Onboarding Workflow"
    },
    {
      "id": "wf_xyz",
      "name": "Offboarding Workflow"
    }
  ]
}
```
```

--------------------------------

### Usage Example for Mastra MongoDB Integration

Source: https://mastra.ai/en/reference/vectors/mongodb

This code snippet demonstrates a basic usage example for the Mastra MongoDB integration. It illustrates how to connect to MongoDB and perform operations using the installed package. This example assumes the necessary MongoDB connection details are configured.

```javascript
import { MongoClient } from "@mastra/mongodb";

async function main() {
  const uri = "mongodb+srv://your_username:your_password@your_cluster_url/your_database?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected successfully to server");

    // Perform operations here

  } finally {
    await client.close();
  }
}

main().catch(console.error);

```

--------------------------------

### Migration Guide

Source: https://mastra.ai/en/examples/agents/system-prompt

Information on migrating from VNext to Standard APIs in Mastra.

```APIDOC
## Migration Guide: VNext to Standard APIs

### Description
Documentation on how to migrate from VNext to Standard APIs within the Mastra platform.

### Endpoint
/en/reference/agents/migration-guide

### Method
GET

### Parameters
None

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **guide** (string) - Content of the migration guide.

#### Response Example
```json
{
  "guide": "Step 1: Update your agent configurations..."
}
```
```

--------------------------------

### Importing Dependencies Example

Source: https://mastra.ai/en/examples/rag/rerank/rerank

This snippet shows how to import necessary dependencies for the project. Ensure these are installed in your environment before running the application.

```javascript
import { CopyToClipboard } from 'next/dist/client/components/copy-to-clipboard';
import { T } from 'next/dist/client/components/t';
import { Var } from 'next/dist/client/components/var';

```

--------------------------------

### Install Mastra Template with bun

Source: https://mastra.ai/en/docs/getting-started/templates

Installs a Mastra template using the `create-mastra` command with bun. Replace `template-name` with the desired template.

```bash
bun create mastra@latest --template template-name
```

--------------------------------

### MSSQLStore Constructor Examples

Source: https://mastra.ai/en/reference/storage/mssql

Provides code examples demonstrating how to instantiate the MSSQLStore class.

```APIDOC
## Constructor Examples

### Description
Examples of how to instantiate the `MSSQLStore` class.

### Code Examples

**Example 1: Basic Instantiation**
```javascript
import { MSSQLStore } from "@langchain/community/stores/db/mssql";

const storage = new MSSQLStore({
  connectionString: process.env.DATABASE_URL,
});
```

**Example 2: With Schema Name**
```javascript
import { MSSQLStore } from "@langchain/community/stores/db/mssql";

const storage = new MSSQLStore({
  connectionString: process.env.DATABASE_URL,
  schemaName: "mySchema",
});
```
```

--------------------------------

### Example LLM Configuration

Source: https://mastra.ai/en/reference/evals/context-relevancy

This example shows how to import and potentially configure the 'openai' library for use within the project. It sets up the basic import statement for the library.

```javascript
import { openai } from "openai"

```

--------------------------------

### Install Completeness Scorer using npm

Source: https://mastra.ai/ja/examples/scorers/completeness

This snippet shows how to install the Completeness scorer using npm. Ensure you have Node.js and npm installed on your system. This command fetches the necessary packages to use the scorer in your project.

```bash
npm install @mastra/scorer-completeness
```

--------------------------------

### Usage Example

Source: https://mastra.ai/en/reference/observability/ai-tracing/exporters/default-exporter

Provides code examples for initializing the exporter with default and custom configurations.

```APIDOC
## Usage

```typescript
import { DefaultExporter } from '@mastra/core/ai-tracing';

// Default configuration
const exporter = new DefaultExporter();

// Custom batching configuration
const customExporter = new DefaultExporter({
  maxBatchSize: 500,
  maxBatchWaitMs: 2000,
  strategy: 'batch-with-updates'
});
```
```

--------------------------------

### Initialize MCPServer with Notes and Resources

Source: https://mastra.ai/ja/guides/guide/notes-mcp-server

This JavaScript snippet demonstrates the initialization of an MCPServer. It includes setting the server's name, version, and defining resource handlers and tools like 'writeNoteTool'. This is a foundational step for setting up a server environment.

```javascript
const notes = new MCPServer({
  name: "notes",
  version: "0.1.0",
  resources: resourceHandlers,
  tools: {
    write: writeNoteTool,
  },
});
```

--------------------------------

### Custom OpenTelemetry Exporter Setup (Langfuse Example)

Source: https://mastra.ai/en/docs/observability/nextjs-tracing

This snippet shows how to set up a custom OpenTelemetry exporter using Langfuse for Next.js tracing. It involves installing necessary dependencies and creating an `instrumentation.ts` file to initialize the NodeSDK with a specific exporter. This approach works across different providers.

```bash
npm install @opentelemetry/api langfuse-vercel
```

```typescript
import {
 NodeSDK,
 ATTR_SERVICE_NAME,
 resourceFromAttributes,
} from "@mastra/core/telemetry/otel-vendor";
import { LangfuseExporter } from "langfuse-vercel";

export function register() {
 const exporter = new LangfuseExporter({
 // ... Langfuse config
 });

 const sdk = new NodeSDK({
 resource: resourceFromAttributes({
 [ATTR_SERVICE_NAME]: "ai",
 }),
 traceExporter: exporter,
 });

 sdk.start();
}
```

--------------------------------

### LibSQL Storage Usage Examples

Source: https://mastra.ai/en/reference/storage/libsql

Demonstrates how to import and initialize the LibSQL storage implementation. It shows examples for setting up both an in-memory database for development and a persistent database connection for production environments.

```javascript
import { LibSQLStore } from "@mastra/libsql";

// File database (development)
const storage = new LibSQLStore({
  url: "file:./storage.db",
});

// Persistent database (production)
const storage = new LibSQLStore({
  url: process.env.DATABASE_URL,
});
```

--------------------------------

### CLI - mastra start

Source: https://mastra.ai/en/reference/core/getVector

Starts your built Mastra application.

```APIDOC
## CLI Command: mastra start

### Description
Runs the production-ready build of your Mastra application.

### Usage
```bash
 mastra start
```

### Requirements
This command requires a prior successful execution of the `mastra build` command.
```

--------------------------------

### MCPServer Constructor and Configuration

Source: https://mastra.ai/en/reference/tools/mcp-server

Demonstrates how to create a new MCPServer instance and details the configuration properties required for initialization.

```APIDOC
## MCPServer

The `MCPServer` class provides the functionality to expose your existing Mastra tools and Agents as a Model Context Protocol (MCP) server. This allows any MCP client (like Cursor, Windsurf, or Claude Desktop) to connect to these capabilities and make them available to an agent.

Note that if you only need to use your tools or agents directly within your Mastra application, you don't necessarily need to create an MCP server. This API is specifically for exposing your Mastra tools and agents to _external_ MCP clients.

It supports both [stdio (subprocess) and SSE (HTTP) MCP transports](https://modelcontextprotocol.io/docs/concepts/transports).

## Constructor

To create a new `MCPServer`, you need to provide some basic information about your server, the tools it will offer, and optionally, any agents you want to expose as tools.

```typescript
import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { createTool } from "@mastra/core/tools";
import { MCPServer } from "@mastra/mcp";
import { z } from "zod";
import { dataProcessingWorkflow } from "../workflows/dataProcessingWorkflow";

const myAgent = new Agent({
 name: "MyExampleAgent",
 description: "A generalist to help with basic questions."
 instructions: "You are a helpful assistant.",
 model: openai("gpt-4o-mini"),
});

const weatherTool = createTool({
 id: "getWeather",
 description: "Gets the current weather for a location.",
 inputSchema: z.object({ location: z.string() }),
 execute: async ({ context }) => `Weather in ${context.location} is sunny.`,
});

const server = new MCPServer({
 name: "My Custom Server",
 version: "1.0.0",
 tools: { weatherTool },
 agents: { myAgent }, // this agent will become tool "ask_myAgent"
 workflows: {
 dataProcessingWorkflow, // this workflow will become tool "run_dataProcessingWorkflow"
 }
});
```

### Configuration Properties

The constructor accepts an `MCPServerConfig` object with the following properties:

| Name | Type | Is Optional | Description |
|---|---|---|---|
| name | string | false | A descriptive name for your server (e.g., 'My Weather and Agent Server'). |
| version | string | false | The semantic version of your server (e.g., '1.0.0'). This helps clients identify compatibility. |
| tools | { [key: string]: Tool | Workflow } | true | An object where keys are the desired tool names and values are either `Tool` objects or `Workflow` objects to be exposed by the server. |
| agents | { [key: string]: Agent } | true | An object where keys are the desired agent names and values are `Agent` objects. Each agent will be exposed as a tool with the name `ask_[agentName]`. |
| enable_trace_propagation | boolean | true | If true, enables trace propagation, allowing for distributed tracing of requests across the MCP server and its tools/agents. Defaults to false. |
```

--------------------------------

### API Migration Guide

Source: https://mastra.ai/en/reference/agents/generateLegacy

Provides a guide and examples for migrating from legacy text generation methods to the new .generate() method, highlighting enhanced features.

```APIDOC
## Migration to New API

### Description
The new `.generate()` method offers enhanced capabilities including AI SDK v5 compatibility, better structured output handling, and improved streaming support. See the [migration guide](./migration-guide.mdx) for detailed migration instructions.

### Quick Migration Example

#### Before (Legacy)
```typescript
const result = await agent.generateLegacy("message", {
  temperature: 0.7,
  maxSteps: 3
});
```

#### After (New API)
```typescript
const result = await agent.generate("message", {
  modelSettings: {
    temperature: 0.7
  },
  maxSteps: 3
});
```

## Extended usage example

```typescript showLineNumbers copy
import { z } from "zod";
import { ModerationProcessor, TokenLimiterProcessor } from "@mastra/core/processors";

await agent.generateLegacy(
  [
    { role: "user", content: "message for agent" },
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "message for agent"
        },
        {
          type: "image",
          imageUrl: "https://example.com/image.jpg",
          mimeType: "image/jpeg"
        }
      ]
    }
  ],
  {
    temperature: 0.7,
    maxSteps: 3,
    memory: {
      thread: "user-123",
      resource: "test-app"
    },
    toolChoice: "auto",
    providerOptions: {
      openai: {
        reasoningEffort: "high"
      }
    },
    // Structured output with better DX
    structuredOutput: {
      schema: z.object({
        sentiment: z.enum(['positive', 'negative', 'neutral']),
        confidence: z.number(),
      }),
      model: openai("gpt-4o-mini"),
      errorStrategy: 'warn',
    },
    //
```
```

--------------------------------

### Copy Environment Example File

Source: https://mastra.ai/en/docs/getting-started/templates

Copies the example environment variable file to a new file that can be edited. This is a common step for configuring project-specific settings.

```bash
cp .env.example .env
```

--------------------------------

### Initialize Mastra Project with Defaults (Bash)

Source: https://mastra.ai/en/reference/cli/init

Initializes a new Mastra project using default settings, including 'src' directory, OpenAI as the LLM provider, and no example code. This is a quick start option.

```bash
MASTRA_TELEMETRY_DISABLED=1 mastra init --default
```

--------------------------------

### Set Up API Key

Source: https://mastra.ai/ja/docs/getting-started/installation

Creates a .env file and instructs to add the necessary API key, using OpenAI as an example. It notes that model names vary by LLM provider.

```shell
touch .env
```

```dotenv
OPENAI_API_KEY=<あなたのAPIキー>
```

--------------------------------

### JavaScript OpenTelemetry Exporter Setup and Usage

Source: https://mastra.ai/en/reference/observability/ai-tracing/exporters/otel

This snippet shows how to import and initialize the OtelExporter from the '@mastra/otel-exporter' package in JavaScript. It covers the basic setup required to start exporting OpenTelemetry traces.

```javascript
import { OtelExporter } from '@mastra/otel-exporter';

const exporter = new OtelExporter();
```

--------------------------------

### JavaScript Google Embedding Model Example

Source: https://mastra.ai/ja/docs/rag/chunking-and-embedding

This snippet shows an example of using a Google embedding model, specifically 'text-embedding-004'. It's presented in a format that suggests it's part of a larger configuration or setup.

```javascript
Google（text-embedding-004）:
```

--------------------------------

### Start Server on Port 3000 using JavaScript

Source: https://mastra.ai/en/examples/workflows/inngest-workflow

This snippet demonstrates how to start a server on port 3000. It's crucial for enabling Inngest to send events to the application. This is a standard Node.js server setup.

```javascript
const srv = serve({
  fetch: app.fetch,
  port: 3000,
});
```

--------------------------------

### Install Mastra AI LLMs TXT Dependencies with npm

Source: https://mastra.ai/en/docs/getting-started/installation

This command installs the Mastra AI LLMs TXT package and its development dependencies (TypeScript, tsx, and @types/node) using npm. This is an alternative to pnpm for setting up the project environment.

```bash
npm install mastra@latest --save-dev typescript tsx @types/node
```

--------------------------------

### JavaScript: Start Workflow with Initial Data

Source: https://mastra.ai/ja/reference/workflows/run-methods/watch

This example demonstrates how to start a workflow execution with specific initial data. The `start` method is called on the `run` object, passing an object with `inputData` containing the desired value. This is useful for providing necessary parameters to a workflow at its initiation.

```javascript
const result = await run.start({
  inputData: { value: "initial data" }
});
```

--------------------------------

### Start Mastra Application from Custom Output Directory

Source: https://mastra.ai/en/reference/cli/start

This example shows how to initiate the Mastra application by specifying a custom directory for its built output. The `--dir` option allows you to point to a different location than the default '.mastra/output'.

```bash
mastra start --dir ./my-output
```

--------------------------------

### Vercel's OpenTelemetry Setup

Source: https://mastra.ai/en/docs/observability/nextjs-tracing

Configures OpenTelemetry tracing using Vercel's built-in setup. Requires installing `@opentelemetry/api` and `@vercel/otel`.

```typescript
import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel({ serviceName: "your-project-name" });
}
```

--------------------------------

### JavaScript: Stream Functionality for LLM Output

Source: https://mastra.ai/en/reference/agents/migration-guide

This JavaScript code snippet demonstrates how to use the 'stream' function to get incremental output from an LLM agent. It shows how to specify the output format, with 'aisdk' as an example and 'mastra' as the default. Dependencies include the agent object and message history. It does not include error handling.

```javascript
const result = await agent.stream(messages, {
  format: 'aisdk' // or 'mastra' (default)
});
```

--------------------------------

### CLI - create-mastra

Source: https://mastra.ai/en/docs/deployment/serverless-platforms/netlify-deployer

Creates a new Mastra project with interactive setup options. This command initializes the project structure and configuration.

```APIDOC
## CLI Command: create-mastra

### Description
Creates a new Mastra project with interactive setup options.

### Usage
mastra create-mastra

### Parameters
This command is interactive and will prompt the user for necessary information.

### Example
```bash
$ mastra create-mastra
? Project name: my-mastra-app
? Initialize a Git repository? Yes
... (interactive prompts) ...
```
```

--------------------------------

### Agent.getInstructions()

Source: https://mastra.ai/en/docs/mastra-cloud/setting-up

Retrieves the specific instructions that guide the agent's behavior and decision-making process.

```APIDOC
## Agent.getInstructions()

### Description
Retrieves the instructions that guide the agent's behavior.

### Method
GET

### Endpoint
/en/reference/agents/getInstructions

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **instructions** (string) - The instructions for the agent.

#### Response Example
```json
{
  "instructions": "Always be polite and helpful. Prioritize customer satisfaction."
}
```
```

--------------------------------

### Command-Line Interface for AI Debate in TypeScript

Source: https://mastra.ai/en/examples/voice/turn-taking

A TypeScript script that provides a command-line interface to initiate and configure an AI debate. It uses '@clack/prompts' to get user input for the debate topic and the number of turns, then calls the 'runDebate' function to start the simulation. Error handling is included for user input and runtime exceptions.

```typescript
import { runDebate } from "./debate/turn-taking"; import * as p from "@clack/prompts";   async function main() {
  // Get the topic from the user
  const topic = await p.text({
    message: "Enter a topic for the agents to discuss:",
    placeholder: "Climate change",
    validate(value) {
      if (!value) return "Please enter a topic";
      return;
    },
  });

    // Exit if cancelled
  if (p.isCancel(topic)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

    // Get the number of turns
  const turnsInput = await p.text({
    message: "How many turns should each agent have?",
    placeholder: "3",
    initialValue: "3",
    validate(value) {
      const num = parseInt(value);
      if (isNaN(num) || num < 1) return "Please enter a positive number";
      return;
    },
  });

    // Exit if cancelled
  if (p.isCancel(turnsInput)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  const turns = parseInt(turnsInput as string);

    // Run the debate
  await runDebate(topic as string, turns);
}

  main().catch((error) => {
  p.log.error("An error occurred:");
  console.error(error);
  process.exit(1);
});

```

--------------------------------

### Start Workflow Run with Input Data (TypeScript)

Source: https://mastra.ai/en/reference/workflows/run-methods/start

This example demonstrates how to start a workflow run asynchronously using `workflow.createRunAsync()`. It also shows how to configure a `RuntimeContext` and pass input data and the context to the `run.start()` method. The `run.start()` method takes an object with `inputData` and `runtimeContext` properties.

```typescript
import { RuntimeContext } from "@mastra/core/runtime-context";

const run = await workflow.createRunAsync();

const runtimeContext = new RuntimeContext();
runtimeContext.set("variable", false);

const result = await run.start({
 inputData: {
 value: "initial data"
 },
 runtimeContext
});
```

--------------------------------

### Example: Answer Relevancy Scorer in JavaScript

Source: https://mastra.ai/en/examples/scorers/answer-relevancy

Demonstrates how to use the Answer Relevancy scorer to evaluate the relevancy of a response to a query. This example is written in JavaScript and utilizes the `createAnswerRelevancyScorer` function. It includes sections on installation, high relevancy examples and outputs, partial relevancy examples and outputs, and low relevancy examples and outputs.

```javascript
self.__next_f.push([
  1,
  "15:[\"$\",\"main\",null,{\"data-pagefind-body\":true,\"children\":[[\"$\",\"h1\",null,{\"id\":\"$undefined\",\"className\":\"x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-bold x:mt-2 x:text-4xl\",\"children\":[\"Answer Relevancy Scorer\",\"$undefined\"]}]),\"\\n\",[\"$\",\"p\",null,{\"className\":\"x:not-first:mt-\[1.25em\] x:leading-7\",\"children\":[\"Use \",[\"$\",\"code\",null,{\"className\":\"nextra-code\",\"dir\":\"ltr\",\"children\":\"createAnswerRelevancyScorer\"}],\" to score how relevant the response is to the original query.\" ]},\"\\n\",[\"$\",\"h2\",null,{\"id\":\"installation\",\"className\":\"x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-\[fade-in_1.5s] x:mt-10 x:border-b x:pb-1 x:text-3xl nextra-border\",\"children\":[\"Installation\",[\"$\",\"$L16\",null,{\"id\":\"installation\"}]]},\"\\n\",[\"$\",\"div\",null,{\"data-pagefind-ignore\":\"$undefined\",\"className\":\"nextra-code x:relative x:not-first:mt-\[1.25em]\",\"children\":[\"$undefined\",[\"$\",\"pre\",null,{\"className\":\"x:group x:focus-visible:nextra-focus x:overflow-x-auto x:subpixel-antialiased x:text-\[.9em] x:bg-white x:dark
```

--------------------------------

### Get Vectors

Source: https://mastra.ai/en/examples/deployment

Retrieves all configured vector stores.

```APIDOC
## GET /en/reference/core/getVectors

### Description
Retrieves all configured vector stores.

### Method
GET

### Endpoint
/en/reference/core/getVectors

### Response
#### Success Response (200)
- **vectorStores** (array) - An array of configured vector store objects.
  - Each object contains:
    - **name** (string) - The name of the vector store.
    - **type** (string) - The type of vector store.

#### Response Example
```json
{
  "vectorStores": [
    {
      "name": "product_embeddings",
      "type": "pinecone"
    },
    {
      "name": "user_profiles",
      "type": "weaviate"
    }
  ]
}
```
```

--------------------------------

### Server Start and Error Handling (JavaScript)

Source: https://mastra.ai/en/examples/agents/deploying-mcp-server

This snippet shows how to start a server process using 'startStdio' and includes basic error handling with a console.error log. It's designed for Node.js environments.

```javascript
server.startStdio().catch(error => {
  console.error("Error running MCP server:", error);
});
```

--------------------------------

### README.md Structure Example

Source: https://mastra.ai/en/reference/templates/overview

This snippet illustrates the required structure for a README.md file in the project. It includes a title, a brief description, and sections for overview and setup. The structure is designed to be clear and informative for users.

```markdown
# Template Name

Brief description of what the template demonstrates.

## Overview

Detailed explanation of the template's functionality and use case.

## Setup

1. Copy `
```

--------------------------------

### Register Mastra Agent

Source: https://mastra.ai/en/docs/getting-started/installation

Sets up the main Mastra entry point by importing the Mastra class and the weatherAgent, then instantiating Mastra with the registered agent.

```typescript
import { Mastra } from "@mastra/core/mastra";
import { weatherAgent } from "./agents/weather-agent";

export const mastra = new Mastra({
  agents: { weatherAgent }
});
```

--------------------------------

### MASTRA Client Get Agent Example

Source: https://mastra.ai/en/docs/auth/jwt

This code example illustrates how to use the MASTRA client to retrieve an agent, specifically the 'weatherAgent'. It shows the method call and the expected parameters.

```javascript
const = mastraClient.getAgent("weatherAgent")
```

--------------------------------

### Get Server

Source: https://mastra.ai/en/examples/deployment

Retrieves the configured server configuration.

```APIDOC
## GET /en/reference/core/getServer

### Description
Retrieves the configured server configuration.

### Method
GET

### Endpoint
/en/reference/core/getServer

### Response
#### Success Response (200)
- **serverConfig** (object) - The server configuration details.
  - **host** (string) - The server host.
  - **port** (integer) - The server port.
  - **protocol** (string) - The server protocol (e.g., 'http', 'https').

#### Response Example
```json
{
  "serverConfig": {
    "host": "127.0.0.1",
    "port": 8000,
    "protocol": "http"
  }
}
```
```

--------------------------------

### Migration Guide

Source: https://mastra.ai/en/docs/getting-started/model-providers

Migration guide for moving from VNext to Standard APIs.

```APIDOC
## Migration Guide: VNext to Standard APIs

### Description
This guide provides instructions on migrating from VNext to the Standard APIs.

### Endpoint
`/en/reference/agents/migration-guide`

### Parameters
None

### Request Example
None

### Response
None
```

--------------------------------

### Install Mastra AI LLMs TXT with npm

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

This command installs the Mastra core package and its development dependencies, including TypeScript and Zod, using npm. It's suitable for projects already using npm as their package manager.

```bash
npm install --save-dev typescript tsx @types/node mastra@latest
npm install @mastra/core@latest zod@^3 @ai-sdk/openai@^1

```

--------------------------------

### Example Agent with LibSQL Store

Source: https://mastra.ai/en/examples/memory/memory-with-libsql

This code snippet provides a practical example of how to integrate LibSQL storage into an agent. It defines a class that uses LibSQLStore for its memory, showcasing the setup process.

```typescript
import { Agent, LibSQLStore } from '@mastra/libsql';

class MyAgent extends Agent {
  constructor() {
    super({
      memory: new LibSQLStore({ url: 'file:./agent.db.sqlite' }),
    });
  }
}

const agent = new MyAgent();
```

--------------------------------

### Hybrid Voice Agent Example (TypeScript)

Source: https://mastra.ai/en/examples/agents/adding-voice-capabilities

This TypeScript code snippet demonstrates the setup of a hybrid voice agent. It utilizes a `CompositeVoice` configuration that allows for distinct speech-to-text (input) and text-to-speech (output) providers. In this specific example, both input and output are handled by `OpenAIVoice`, showcasing a composite setup even when using a single provider.

```typescript
self.__next_f.push([
  1,
  "1b:[\"$\",\"h2\",null,{\"id\":\"hybrid-voice-agent\",\"className\":\"x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-\\[fade-in_1.5s] x:mt-10 x:border-b x:pb-1 x:text-3xl nextra-border\",\"children\":[\"Hybrid voice agent\",[\"$\",\"$L16\",null,{\"id\":\"hybrid-voice-agent\"}]]}]\n1c:[\"$\",\"p\",null,{\"className\":\"x:not-first:mt-\\[1.25em] x:leading-7\",\"children\":[\"This agent uses a composite voice setup that separates speech-to-text and text-to-speech functionality. The \",[\"$\",\"code\",null,{\"className\":\"nextra-code\",\"dir\":\"ltr\",\"children\":\"CompositeVoice\"}],\" allows you to configure different providers for listening (input) and speaking (output). However, in this example, both are handled by the same provider: \",[\"$\",\"code\",null,{\"className\":\"nextra-code\",\"dir\":\"ltr\",\"children\":\"OpenAIVoice\"}],\".\" ]}]\n" ])

```

--------------------------------

### Direct Provider Installation Guide (Markdown)

Source: https://mastra.ai/en/models/providers/google

This section provides instructions for installing AI providers directly as standalone packages. It highlights that this method can be used as an alternative to the Mastra model router string and directs users to the package documentation.

```markdown
## Direct Provider Installation

This provider can also be installed directly as a standalone package, which can be used instead of the Mastra model router string. View the [package documentation](https://www.npmjs.com/package/@ai-sdk/google) for more details.
```

--------------------------------

### start() Method (Legacy)

Source: https://mastra.ai/en/examples/scorers/context-precision

Documentation for the `start()` method in workflows, which begins execution of a workflow run.

```APIDOC
## POST /en/reference/legacyWorkflows/start

### Description
Initiates the execution of a previously created workflow run.

### Method
POST

### Endpoint
/en/reference/legacyWorkflows/start

### Parameters

#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **run_id** (string) - Required - The identifier of the workflow run to start.

### Request Example
```json
{
  "run_id": "run_abc123"
}
```

### Response
#### Success Response (200)
- **run_id** (string) - The identifier of the workflow run.
- **status** (string) - The updated status of the workflow run (e.g., 'running').

#### Response Example
```json
{
  "run_id": "run_abc123",
  "status": "running"
}
```
```

--------------------------------

### Install @ai-sdk/openai for AI SDK v5 Compatibility

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

This snippet shows how to install the latest version of the '@ai-sdk/openai' package using various package managers (npm, pnpm, yarn, bun) to achieve AI SDK v5 compatibility. Ensure you have a compatible Node.js version and your project is set up correctly.

```bash
npm install @ai-sdk/openai@latest
```

```bash
pnpm install @ai-sdk/openai@latest
```

```bash
yarn add @ai-sdk/openai@latest
```

```bash
bun add @ai-sdk/openai@latest
```

--------------------------------

### CLI - mastra init

Source: https://mastra.ai/en/reference/voice/speechify

Initializes a new Mastra project with interactive setup options.

```APIDOC
## CLI - mastra init

### Description
Creates a new Mastra project with interactive setup options.

### Method
CLI Command

### Endpoint
`mastra init`

### Parameters
#### Command Options
(This command is interactive and may prompt for user input.)

### Request Example
```bash
mastra init
```

### Response
#### Success Response
- **Project Initialization** - A new Mastra project directory is initialized with core configuration.

#### Response Example
(Output will vary based on user input during the interactive setup.)
```

--------------------------------

### OpenAI Integration Example

Source: https://mastra.ai/ja/examples/scorers/context-relevance

This example demonstrates how to import and use the OpenAI SDK within a JavaScript environment. It showcases a basic setup for making AI requests.

```javascript
import { openai } from '@ai-sdk/openai'

// Example usage (functionality not fully defined in snippet)
// const result = await openai({
//   model: "gpt-4o",
//   messages: [
//     { role: "user", content: "Hello, world!" },
//   ],
// });

```

--------------------------------

### Start LLM Workflow with JavaScript

Source: https://mastra.ai/ja/reference/legacyWorkflows/events

Initiates an LLM workflow and logs its starting status. This snippet requires the `run` function to be available in the scope. It outputs the initial results of the workflow.

```javascript
// Start the workflow
const initialResult = await run.start();

console.log("Workflow started:", initialResult.results);
```

--------------------------------

### GitHub Repository Link for Mastra AI Examples

Source: https://mastra.ai/en/examples/agents/ai-sdk-v5-integration

Provides a direct link to the GitHub repository for the 'ai-sdk-v5' example within the Mastra AI project. This allows users to access the source code and contribute.

```html
<a target="_blank" rel="noopener noreferrer" class="flex w-full flex-row justify-between p-3 border border-gray-300 dark:border-[#404040] rounded-md cursor-pointer group text-zinc-900 dark:text-zinc-50 " href="https://github.com/mastra-ai/mastra/tree/main/examples/ai-sdk-v5">
  <div class="flex flex-row gap-3">
    <div class="border border-transparent rounded-full mt-[2px]">
      <svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" class="w-[18px] h-[18px] text-inherit">
        <g clip-path="url(#clip0_872_3147)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.428"></path>
        </g>
        <defs>
          <clipPath id="clip0_872_3147">
            <rect width="16" height="16" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="flex flex-col">
      <p class="font-semibold group-hover:text-red-500">Mastra AI SDK v5 Example</p>
      <p class="text-sm">View on GitHub</p>
    </div>
  </div>
  <div class="self-center">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-gray-500 dark:text-gray-400">
      <path d="M2.25 10.5L9.75 3M2.25 3l7.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </div>
</a>
```

--------------------------------

### Get Storage

Source: https://mastra.ai/en/examples/deployment

Retrieves the configured storage instance.

```APIDOC
## GET /en/reference/core/getStorage

### Description
Retrieves the configured storage instance.

### Method
GET

### Endpoint
/en/reference/core/getStorage

### Response
#### Success Response (200)
- **storage** (object) - The configured storage instance details.
  - **type** (string) - The type of storage (e.g., 'file', 'database').
  - **path** (string) - The path or connection details for the storage.

#### Response Example
```json
{
  "storage": {
    "type": "file",
    "path": "/data/mastra_storage"
  }
}
```
```

--------------------------------

### CLI - mastra start

Source: https://mastra.ai/en/reference/observability/otel-tracing/providers/langsmith

Starts your built Mastra application.

```APIDOC
## CLI Command - mastra start

### Description
Starts your built Mastra application.

### Method
CLI Command

### Endpoint
mastra start

### Parameters
None

### Request Example
```bash
mastra start
```

### Response
#### Success Response
- **output** (string) - Message indicating the Mastra application has started.

#### Response Example
```text
Mastra application started.
```
```

--------------------------------

### Call AI Agents | Mastra Examples

Source: https://mastra.ai/en/examples/workflows/running-workflows

This example provides a clear demonstration of how to invoke or call AI agents created with Mastra. It outlines the fundamental process of interacting with an agent to receive responses. This is a core example for anyone starting with Mastra's agent capabilities.

```typescript
import { Agent } from '@mastra/ai';

const agent = new Agent({
  // Agent configuration
});

async function main() {
  const response = await agent.run('Hello, who are you?');
  console.log(response);
}

main();
```

--------------------------------

### Initialize and Add Project Dependencies with Bun

Source: https://mastra.ai/ja/docs/getting-started/installation

This snippet demonstrates how to initialize a new project using Bun and subsequently add core dependencies. It includes adding TypeScript, type definitions for Node.js, and specific AI SDK packages for project functionality. The `--dev` flag is used for development-specific packages.

```shell
bun init -y
bun add typescript tsx @types/node mastra@latest --dev
bun add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Get Deployer

Source: https://mastra.ai/en/examples/deployment

Retrieves the configured deployer instance.

```APIDOC
## GET /en/reference/core/getDeployer

### Description
Retrieves the configured deployer instance.

### Method
GET

### Endpoint
/en/reference/core/getDeployer

### Response
#### Success Response (200)
- **deployer** (object) - The configured deployer instance details.
  - **type** (string) - The type of deployer (e.g., 'kubernetes', 'docker').
  - **config** (object) - Deployment specific configuration.

#### Response Example
```json
{
  "deployer": {
    "type": "kubernetes",
    "config": {
      "namespace": "production"
    }
  }
}
```
```

--------------------------------

### CLI - mastra start

Source: https://mastra.ai/en/reference/voice/speechify

Starts your built Mastra application.

```APIDOC
## CLI - mastra start

### Description
Start your built Mastra application.

### Method
CLI Command

### Endpoint
`mastra start`

### Parameters
#### Command Options
(Refer to Mastra CLI documentation for available options.)

### Request Example
```bash
mastra start
```

### Response
#### Success Response
- **Application Start** - The production-built Mastra application is started, ready for serving traffic.

#### Response Example
(Console output indicating the application has started.)
```

--------------------------------

### Low Completeness Scorer TS Example

Source: https://mastra.ai/en/examples/scorers/completeness

This TypeScript example demonstrates using the CompletenessScorer for a response that only partially addresses the query and misses several important aspects. It follows the same import and setup pattern as the partial completeness example.

```typescript
import { openai } from "@ai-sdk/openai";
import { createCompletenessScorer } from "@mastra/evals/scorers/llm";

const scorer = createCompletenessScorer({
  model: openai("gpt-4o-mini")
});

const query = "Compare renewable and non-renewable energy sources in terms of cost, environmental impact, and sustainability.";
const response =
  "Renewable energy sources like solar and wind are becoming cheaper. They're better for the environment than fossil fuels.";

const result = await scorer.run({
  input: [{ role: 'user', content: query }],
  output: { text: response },
});

console.log(result);
```

--------------------------------

### Install Dependencies for Noise Sensitivity Testing

Source: https://mastra.ai/en/examples/scorers/noise-sensitivity

Installs the Mastra evaluation package and Vitest for CI/CD testing. Vitest is used here as an example test framework; other frameworks like Jest can also be used.

```bash
npm install @mastra/evals
npm install --save-dev vitest
```

--------------------------------

### Deploying MCPServer Example

Source: https://mastra.ai/en/examples/workflows_legacy/cyclical-dependencies

Details the process of setting up, building, and deploying a Mastra MCPServer. This example focuses on using the stdio transport and publishing the server to NPM.

```typescript
// This is a conceptual example representing deployment steps.
// Actual code would involve Mastra CLI commands and package.json configuration.

// Step 1: Initialize Mastra MCPServer
// mastra init mcp-server my-server --transport stdio

// Step 2: Define agent logic (e.g., in src/index.ts)
// import { Agent } from "mastra";
// const myAgent = new Agent({...});
// export default myAgent;

// Step 3: Configure package.json for stdio transport
// "main": "dist/index.js",
// "bin": {
//   "my-server-cli": "./dist/cli.js"
// },

// Step 4: Build the project
// npm run build

// Step 5: Publish to NPM
// npm publish

// Step 6: Running the MCPServer locally or remotely
// npx my-server-cli

```

--------------------------------

### Workflow .start() Method

Source: https://mastra.ai/en/examples/workflows/agent-as-step

Documentation for the `start()` method in workflows, which begins execution of a workflow run.

```APIDOC
## .start()

### Description
Begins execution of a workflow run.

### Method
(Method not specified in input)

### Endpoint
(Endpoint not specified in input)

### Parameters
(No parameters specified in input)

### Request Example
(No request example specified in input)

### Response
#### Success Response (200)
(No success response specified in input)

#### Response Example
(No response example specified in input)
```

--------------------------------

### Graph-based Retrieval Example

Source: https://mastra.ai/en/docs/rag/retrieval

Demonstrates how to use the graph-based retrieval method. This example serves as a practical guide for developers integrating graph-based retrieval into their applications.

```markdown
For an example of how to use the graph-based retrieval method, see the Graph-based Retrieval example.

```

--------------------------------

### TypeScript: Mastra MCPServer stdio Setup

Source: https://mastra.ai/ja/examples/agents/deploying-mcp-server

Mastra MCPServer を stdio トランスポートでセットアップするための TypeScript コードです。MCPServer インスタンスを作成し、weatherTool を追加し、server.startStdio() を呼び出してサーバーを開始します。エラーハンドリングも含まれています。

```typescript
#!/usr/bin/env node
 import { MCPServer } from "@mastra/mcp";
 import { weatherTool } from "./tools";

 const server = new MCPServer({
 name: "my-mcp-server",
 version: "1.0.0",
 tools: { weatherTool },
 });

 server.startStdio().catch((error) => {
 console.error("Error running MCP server:", error);
 process.exit(1);
 });
 
```

--------------------------------

### Postgres Snapshot Example (JavaScript/TypeScript)

Source: https://mastra.ai/ja/docs/server-db/snapshots

Demonstrates how to use Mastra with PostgreSQL to leverage snapshot functionality. This example is intended for environments where the @mastra/pg package is installed and configured.

```javascript
import { Mastra } from "@mastra/core/mastra";
import { UpstashStore } from "@mastra/upstash";

// Example usage for Mastra with Postgres (specific implementation details would follow)
```

--------------------------------

### Hono Server Setup with Mastra AI Utilities

Source: https://mastra.ai/ja/examples/workflows/inngest-workflow

This snippet shows the setup of a Hono server using utility functions like 'createHonoServer', 'getToolExports' from Mastra AI. It initializes the server to handle requests and integrate AI functionalities. The actual server creation and request handling logic would follow this setup.

```typescript
import {
  createHonoServer,
  getToolExports,
} from '@hono/core'

const app = createHonoServer({
  basePath: '/',
  tools: getToolExports(),
})

serve({
  fetch: app.fetch,
  port: 8080,
})
```

--------------------------------

### Install @ai-sdk/xai Package Documentation (Link)

Source: https://mastra.ai/en/models/providers/xai

This section provides a link to the npm package documentation for '@ai-sdk/xai'. This package allows for direct installation of AI providers, offering an alternative to model router strings and providing more details on its usage.

```html
<p>This provider can also be installed directly as a standalone package, which can be used instead of the Mastra model router string. View the <a href="https://www.npmjs.com/package/@ai-sdk/xai" target="_blank" rel="noreferrer">package documentation</a> for more details.</p>
```

--------------------------------

### Example: Deploying an MCPServer

Source: https://mastra.ai/en/examples/evals/answer-relevancy

Provides guidance on deploying an MCPServer, likely a component for managing AI models or services within the Mastra ecosystem. This is relevant for production environments.

```bash
# Conceptual example for deploying an MCPServer
# This would typically involve Docker, Kubernetes, or a cloud provider's services.

# Example using Docker (simplified)
# docker build -t mastra-mcpserver .
# docker run -d -p 8080:8080 --name my-mcpserver mastra-mcpserver

# Example using a deployment script (placeholder)
echo "Starting MCPServer deployment..."
# ./deploy-mcpserver.sh --env production
echo "MCPServer deployment initiated."

```

--------------------------------

### Mastra AI Project Documentation Structure

Source: https://mastra.ai/en/models/providers/fireworks-ai

This outlines the hierarchical structure of the Mastra AI project documentation. It covers sections such as Introduction, Getting Started, Agents, Workflows, Streaming, Tools & MCP, Memory, RAG, Server & DB, and Deployment. This structure helps users navigate and understand the project's various components and functionalities.

```plaintext
*   Docs
    
    *   [Introduction](/en/docs)
    *   Getting Started
        
        *   [Installation](/en/docs/getting-started/installation)
        *   [Project Structure](/en/docs/getting-started/project-structure)
        *   [MCP Docs Server](/en/docs/getting-started/mcp-docs-server)
        *   [Model Providers](/en/docs/getting-started/model-providers)
        *   [Templates](/en/docs/getting-started/templates)
        
    *   Agents
        
        *   [Overview](/en/docs/agents/overview)
        *   [Agent Memory](/en/docs/agents/agent-memory)
        *   [Tools and MCP](/en/docs/agents/using-tools-and-mcp)
        *   [Input Processors](/en/docs/agents/input-processors)
        *   [Output Processors](/en/docs/agents/output-processors)
        *   [Adding Voice](/en/docs/agents/adding-voice)
        *   [Runtime Context](/en/docs/agents/runtime-context)
        *   [Dynamic Agents](/en/docs/agents/dynamic-agents)
        *   [Networks](/en/docs/agents/networks)
        
    *   Workflows
        
        *   [Overviewnew](/en/docs/workflows/overview)
        *   [Control Flow](/en/docs/workflows/control-flow)
        *   [Suspend & Resume](/en/docs/workflows/suspend-and-resume)
        *   [Sleep & Events](/en/docs/workflows/pausing-execution)
        *   [Error Handling](/en/docs/workflows/error-handling)
        *   [Input Data Mapping](/en/docs/workflows/input-data-mapping)
        *   [Agents and Tools](/en/docs/workflows/using-with-agents-and-tools)
        *   [Inngest Workflowexp.](/en/docs/workflows/inngest-workflow)
        
    *   Streamingexp.
        
        *   [Overview](/en/docs/streaming/overview)
        *   [Events](/en/docs/streaming/events)
        *   [Tool Streaming](/en/docs/streaming/tool-streaming)
        *   [Workflow Streaming](/en/docs/streaming/workflow-streaming)
        
    *   Tools & MCP
        
        *   [Overview](/en/docs/tools-mcp/overview)
        *   [MCP Overview](/en/docs/tools-mcp/mcp-overview)
        *   [Runtime Context](/en/docs/tools-mcp/runtime-context)
        *   [Advanced Usage](/en/docs/tools-mcp/advanced-usage)
        
    *   Memory
        
        *   [Overview](/en/docs/memory/overview)
        *   [Threads and Resources](/en/docs/memory/threads-and-resources)
        *   [Working Memory](/en/docs/memory/working-memory)
        *   [Conversation History](/en/docs/memory/conversation-history)
        *   [Semantic Recall](/en/docs/memory/semantic-recall)
        *   [Memory Processors](/en/docs/memory/memory-processors)
        
    *   RAG
        
        *   [Overview](/en/docs/rag/overview)
        *   [Chunking and Embedding](/en/docs/rag/chunking-and-embedding)
        *   [Vector Databases](/en/docs/rag/vector-databases)
        *   [Retrieval](/en/docs/rag/retrieval)
        
    *   Server & DB
        
        *   [Local Dev Playground](/en/docs/server-db/local-dev-playground)
        *   [Production Server](/en/docs/server-db/production-server)
        *   [Middleware](/en/docs/server-db/middleware)
        *   [Custom API Routes](/en/docs/server-db/custom-api-routes)
        *   [Storage](/en/docs/server-db/storage)
        *   [Snapshots](/en/docs/server-db/snapshots)
        *   [Mastra Client](/en/docs/server-db/mastra-client)
        
    *   Deployment
        
        *   [Overview](/en/docs/deployment/overview)
        *   [Server deployment](/en/docs/deployment/server-deployment)
        *   [With a Monorepo](/en/docs/deployment/monorepo)

```

--------------------------------

### Get Stdio Transport

Source: https://mastra.ai/en/reference/tools/mcp-server

Retrieves the object managing stdio communication if the server was started with `startStdio()`.

```APIDOC
## getStdioTransport()

### Description
Retrieves the stdio transport object if the server was started using `startStdio()`. Primarily for internal checks or testing.

### Method
`getStdioTransport(): StdioServerTransport | undefined`

### Endpoint
N/A (Method on server instance)

### Parameters
None

### Request Example
```javascript
const stdioTransport = server.getStdioTransport();
if (stdioTransport) {
  console.log('Stdio transport available');
}
```

### Response
#### Success Response (200)
- **StdioServerTransport | undefined** - The stdio transport object, or undefined if not applicable.

#### Response Example
```json
{
  "status": "connected"
}
```
```

--------------------------------

### Run Product Recommendation Workflow with Inquirer

Source: https://mastra.ai/en/examples/workflows_legacy/human-in-the-loop

This TypeScript code provides an example of how to initiate and run the product recommendation workflow. It uses the Mastra SDK to get the registered workflow, create a run instance, and start the workflow with initial trigger data. It also includes logic to check if the workflow is suspended for human review. Dependencies include the Mastra SDK.

```typescript
// Example of using the workflow with Inquirer prompts
async function runRecommendationWorkflow() {
  const registeredWorkflow = mastra.legacy_getWorkflow(
    "recommendationWorkflow",
  );
  const run = registeredWorkflow.createRun();

  console.log("Starting product recommendation workflow...");
  const result = await run.start({
    triggerData: {
      customerName: "Jane Smith",
    },
  });

  const isReviewStepSuspended =
    result.activePaths.get("reviewRecommendations")?.status === "suspended";

  // Check if workflow is suspended for human review
  if (isReviewStepSuspended) {
    const { customerName, recommendations, message } = result.activePaths.get(
      "reviewRecommendations",
    )?.susp
```

--------------------------------

### Get Workflow

Source: https://mastra.ai/en/examples/deployment

Retrieves a workflow by its ID.

```APIDOC
## GET /en/reference/core/getWorkflow

### Description
Retrieves a workflow by its ID.

### Method
GET

### Endpoint
/en/reference/core/getWorkflow

### Parameters
#### Query Parameters
- **workflowId** (string) - Required - The ID of the workflow to retrieve.

### Response
#### Success Response (200)
- **workflow** (object) - The retrieved workflow object.
  - **id** (string) - The workflow's unique identifier.
  - **name** (string) - The name of the workflow.
  - **steps** (array) - An array of steps in the workflow.

#### Response Example
```json
{
  "workflow": {
    "id": "wf_abc",
    "name": "Onboarding Workflow",
    "steps": [
      "Step 1: Welcome",
      "Step 2: Information Gathering",
      "Step 3: Task Assignment"
    ]
  }
}
```
```

--------------------------------

### Get Vector

Source: https://mastra.ai/en/examples/deployment

Retrieves a vector store by name.

```APIDOC
## GET /en/reference/core/getVector

### Description
Retrieves a vector store by name.

### Method
GET

### Endpoint
/en/reference/core/getVector

### Parameters
#### Query Parameters
- **vectorName** (string) - Required - The name of the vector store to retrieve.

### Response
#### Success Response (200)
- **vectorStore** (object) - The details of the vector store.
  - **name** (string) - The name of the vector store.
  - **type** (string) - The type of vector store (e.g., 'pinecone', 'weaviate').
  - **dimension** (integer) - The dimensionality of the vectors.

#### Response Example
```json
{
  "vectorStore": {
    "name": "product_embeddings",
    "type": "pinecone",
    "dimension": 1536
  }
}
```
```

--------------------------------

### Example LLM Basic TypeScript Code

Source: https://mastra.ai/ja/examples/scorers/tool-call-accuracy

This TypeScript code provides an example of a basic LLM integration, likely for evaluation purposes. It imports necessary modules and sets up constants or configurations for LLM operations. The code is intended to be a starting point for implementing LLM-based features.

```typescript
const { scorer } = require("@mastra/evals/scorers/llm");

const { openai } = require("@ai-sdk/openai");
```

--------------------------------

### Example Usage of MastraJwtAuth

Source: https://mastra.ai/ja/docs/auth/jwt

This code snippet demonstrates a basic example of how to use the MastraJwtAuth class within your project. It assumes the @mastra/auth package has already been installed.

```javascript
// Example usage of MastraJwtAuth class
// Ensure you have installed the @mastra/auth package first.
// import { MastraJwtAuth } from '@mastra/auth';

// const auth = new MastraJwtAuth();
// auth.authenticate(); // Placeholder for actual authentication logic
```

--------------------------------

### Create New Mastra Project

Source: https://mastra.ai/ja/docs/getting-started/installation

Commands to create a new project directory and navigate into it, followed by initializing a TypeScript project with necessary Mastra packages and dependencies using npm, pnpm, yarn, or bun.

```shell
mkdir hello-mastra && cd hello-mastra
```

```shell
npm init -y
npm install typescript tsx @types/node mastra@latest --save-dev
npm install @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

```shell
pnpm init
pnpm add typescript tsx @types/node mastra@latest --save-dev
pnpm add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

```shell
yarn init -y
yarn add typescript tsx @types/node mastra@latest --dev
yarn add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

```shell
bun init -y
bun add typescript tsx @types/node mastra@latest --dev
bun add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Example API Request and Response for Weather

Source: https://mastra.ai/en/docs/frameworks/servers/express

This snippet shows an example of making a GET request to the weather API and the expected JSON response. The request includes a city parameter, and the response provides weather information for that city.

```javascript
http://localhost:3456/api/weather?city=London
```

--------------------------------

### Deploying an MCPServer Example

Source: https://mastra.ai/en/reference/tools/mcp-server

Example of setting up, building, and deploying a Mastra MCPServer using the stdio transport. This process involves publishing the server to NPM for distribution.

```typescript
import { createMCPServer } from "@mastra/mcp";

const server = createMCPServer({
  transport: "stdio", // Using stdio transport
  // ... other server configurations
});

server.build();
server.publish();

```

--------------------------------

### Cancel Workflow Run Example (JavaScript)

Source: https://mastra.ai/en/reference/workflows/run-methods/cancel

This example demonstrates how to create a workflow run, attempt to start it, and cancel it if an error occurs. It utilizes `workflow.createRunAsync()` and `run.cancel()`. Ensure the workflow object is properly initialized before use.

```javascript
const run = await workflow.createRunAsync();
try {
  const result = await run.start({ inputData: { value: "initial data" } });
} catch (error) {
  await run.cancel();
}
```

--------------------------------

### CLI - mastra start

Source: https://mastra.ai/en/docs/observability/overview

Starts the Mastra production server.

```APIDOC
## Command: mastra start

### Description
Starts the Mastra production server.

### Usage
```bash
mastra start
```

### Options
None

### Example
Run `mastra start` to launch the production-ready Mastra application.
```

--------------------------------

### Initialize Memory and Storage Components (JavaScript)

Source: https://mastra.ai/en/examples/agents/whatsapp-chat-bot

This snippet shows the initialization of memory and storage for the project. It configures a new memory component and a new LibSQLStore for persistent storage, specifying the database URL.

```javascript
const memory = new Memory();
const storage = new LibSQLStore(
  "file:../mastra.db"
);

```

--------------------------------

### Mastra Legacy Workflow: Creating a Simple Workflow Example

Source: https://context7_llms

Provides a basic example of defining and executing a legacy Mastra workflow that consists of a single step. This serves as a starting point for understanding Mastra workflow structure.

```plaintext
# This is a conceptual representation, actual Mastra DSL would be used.
def legacy_workflow("simple_creation"):
    result = do_single_task()

```

--------------------------------

### Custom Generic OTEL Endpoints Setup - Shell

Source: https://mastra.ai/en/docs/observability/ai-tracing/exporters/otel

This example shows how to set up custom generic OTEL endpoints, typically used for other OTEL-compatible platforms or custom collectors. It focuses on configuring the endpoint and relevant settings for data ingestion. This is a shell command example.

```shell
# Example for setting up custom generic OTEL endpoints
# This would typically involve environment variables or configuration files
# for your specific OTEL collector or platform.

# Example structure for endpoint configuration:
# export OTEL_EXPORTER_OTLP_ENDPOINT="your-otel-collector-endpoint:4317"
# export OTEL_EXPORTER_OTLP_PROTOCOL="grpc"

# For demonstration purposes, no direct runnable code is provided here,
# as it depends heavily on the target platform.
```

--------------------------------

### Agents with System Prompt Example in Mastra

Source: https://mastra.ai/en/reference/processors/prompt-injection-detector

This example shows how to create an AI agent in Mastra with a system prompt, which defines its personality and capabilities. This is crucial for guiding agent behavior.

```mdx
import { Agent } from "@langchain/core/agents";

const systemPrompt = "You are a helpful assistant that speaks like a pirate.";
const agent = new Agent({ systemPrompt });

const result = await agent.invoke({
  input: "Tell me about Mastra.",
});
console.log(result);
```

--------------------------------

### Agent Get Instructions API

Source: https://mastra.ai/en/reference/evals/bias

Documentation for the `Agent.getInstructions()` method, which retrieves the instructions guiding the agent's behavior.

```APIDOC
## Reference: Agent.getInstructions()

### Description
Retrieves the set of instructions that guide the behavior and decision-making process of the agent.

### Method
N/A (Assumed to be a method call within an agent)

### Endpoint
N/A

### Parameters
N/A

### Request Example
N/A

### Response
- **instructions** (string) - The instructions guiding the agent.
```

--------------------------------

### Get SSE Hono Transport

Source: https://mastra.ai/en/reference/tools/mcp-server

Retrieves the object managing SSE communication if the server was started with `startHonoSSE()`.

```APIDOC
## getSseHonoTransport()

### Description
Retrieves the SSE transport object if the server was started using `startHonoSSE()`. Primarily for internal checks or testing.

### Method
`getSseHonoTransport(): SSETransport | undefined`

### Endpoint
N/A (Method on server instance)

### Parameters
None

### Request Example
```javascript
const honoTransport = server.getSseHonoTransport();
if (honoTransport) {
  console.log('Hono SSE transport available');
}
```

### Response
#### Success Response (200)
- **SSETransport | undefined** - The SSE transport object, or undefined if not applicable.

#### Response Example
```json
{
  "status": "connected"
}
```
```

--------------------------------

### Install Mastra Template with yarn

Source: https://mastra.ai/en/docs/getting-started/templates

Installs a Mastra template using the `create-mastra` command with yarn. Replace `template-name` with the desired template.

```bash
yarn dlx create-mastra@latest --template template-name
```

--------------------------------

### Add Mastra Core and AI SDK Dependencies with pnpm

Source: https://mastra.ai/en/docs/getting-started/installation

This command installs the core Mastra package and the OpenAI SDK using pnpm. These are essential for integrating Mastra's AI capabilities, specifically with OpenAI.

```bash
pnpm add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Initialize Mastra with LibSQL Storage (TypeScript)

Source: https://mastra.ai/en/guides/guide/notes-mcp-server

This snippet demonstrates how to import the necessary Mastra components, including the Mastra class, PinoLogger, and LibSQLStore, and then initialize a new Mastra instance with LibSQLStorage. It highlights the basic setup required to start using Mastra's capabilities.

```typescript
import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";

export const mastra = new Mastra({
  storage: 
```

--------------------------------

### Manual Mastra Project Initialization (bun)

Source: https://mastra.ai/en/docs/getting-started/installation

Instructions for manually initializing a Mastra project using bun. This process involves creating a project folder, initializing with bun, and then adding necessary development and core Mastra packages, including TypeScript and Zod.

```bash
bun init -y

bun add typescript tsx @types/node mastra@latest --dev

bun add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### voice.addInstructions() Method

Source: https://mastra.ai/en/examples/agents/dynamic-agents

Documentation for the addInstructions() method available in voice providers, which adds instructions to guide the voice model's behavior.

```APIDOC
## voice.addInstructions() Method

### Description
Documentation for the addInstructions() method available in voice providers, which adds instructions to guide the voice model's behavior.

### Method
N/A (This is documentation for a method, not a specific API call)

### Endpoint
N/A

### Parameters
- **instructions** (string) - Required - The instructions to guide the voice model.

### Request Example
N/A

### Response
N/A (This method typically does not return a value, but modifies the model's behavior.)

### Response Example
N/A
```

--------------------------------

### Get Telemetry

Source: https://mastra.ai/en/examples/deployment

Retrieves the configured telemetry instance.

```APIDOC
## GET /en/reference/core/getTelemetry

### Description
Retrieves the configured telemetry instance.

### Method
GET

### Endpoint
/en/reference/core/getTelemetry

### Response
#### Success Response (200)
- **telemetry** (object) - The configured telemetry instance details.
  - **type** (string) - The type of telemetry service (e.g., 'prometheus', 'datadog').
  - **endpoint** (string) - The endpoint for sending telemetry data.

#### Response Example
```json
{
  "telemetry": {
    "type": "prometheus",
    "endpoint": "http://localhost:9090/metrics"
  }
}
```
```

--------------------------------

### Initialize Agent with Tools (JavaScript)

Source: https://mastra.ai/en/reference/tools/mcp-client

Demonstrates how to create a new agent instance and asynchronously load its available tools. This is a fundamental step before interacting with the agent's functionalities.

```javascript
new Agent( tools: await mcp.getTools() );
```

--------------------------------

### CLI - mastra init

Source: https://mastra.ai/en/reference/core/getVector

Initializes a new Mastra project with interactive setup options.

```APIDOC
## CLI Command: mastra init

### Description
Sets up a new Mastra project, offering interactive prompts for configuration.

### Usage
```bash
 mastra init
```

### Options
This command is interactive and guides the user through project initialization steps.
```

--------------------------------

### Workflows API

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the Mastra Workflow class and its methods, enabling the creation of state machines for complex operations.

```APIDOC
## Workflows API

### Description
Enables the creation of state machines for complex sequences of operations with conditional branching and data validation.

### Workflow Class

#### Description
Represents a state machine for complex operations.

### Workflow Methods

#### Description
Methods for defining and manipulating workflow steps and logic.

### POST /api/workflows/then

#### Description
Creates sequential dependencies between steps in a workflow.

### POST /api/workflows/branch

#### Description
Defines conditional branching logic within a workflow.

### POST /api/workflows/parallel

#### Description
Allows steps to be executed in parallel.

### POST /api/workflows/commit

#### Description
Commits changes or finalizes a workflow state.

### POST /api/workflows/dowhile

#### Description
Implements a do-while loop structure for workflow steps.

### POST /api/workflows/dountil

#### Description
Implements a do-until loop structure for workflow steps.

### POST /api/workflows/foreach

#### Description
Iterates over a collection of items, executing steps for each.

### POST /api/workflows/map

#### Description
Transforms each item in a collection using a specified function.

### POST /api/workflows/sleep

#### Description
Pauses workflow execution for a specified duration.

### POST /api/workflows/sleepUntil

#### Description
Pauses workflow execution until a specific condition or time is met.

### POST /api/workflows/waitForEvent

#### Description
Pauses workflow execution until a specific event is received.

### POST /api/workflows/sendEvent

#### Description
Sends an event to trigger other workflow or system components.

### POST /api/workflows/createRunAsync

#### Description
Asynchronously creates and starts a new run of a workflow.
```

--------------------------------

### TypeScript Configuration Setup

Source: https://mastra.ai/ja/docs/frameworks/web-frameworks/astro

Illustrates the initial setup for TypeScript configuration within a project. This typically involves defining basic compiler options or referencing configuration files.

```json
{
 "...": "..."
}
```

--------------------------------

### CLI - create-mastra

Source: https://mastra.ai/en/reference/rag/database-config

Creates a new Mastra project with interactive setup options.

```APIDOC
## CLI Command: create-mastra

### Description
Creates a new Mastra project with interactive setup options.

### Usage
```bash
mastra create-mastra
```

### Options
This command typically runs interactively, prompting the user for project details.
```

--------------------------------

### Create Directory and Touch File using Shell

Source: https://mastra.ai/en/docs/getting-started/installation

This snippet demonstrates how to create a directory and a file using shell commands. The `mkdir -p` command ensures that parent directories are created if they don't exist, and `touch` creates an empty file. The `&&` operator ensures that the `touch` command only runs if `mkdir` is successful. This is useful for setting up project structures.

```shell
mkdir -p src/mastra/tools && touch src/mastra/tools/weather-tool.ts
```

--------------------------------

### Install Mastra AI Dependencies with yarn

Source: https://mastra.ai/ja/docs/getting-started/installation

This snippet provides the commands to set up and add dependencies for the Mastra AI project using yarn. It includes initializing the project and adding necessary packages.

```bash
yarn init -y
yarn add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
yarn add typescript tsx @types/node mastra@latest --dev
```

--------------------------------

### Get Memory

Source: https://mastra.ai/en/examples/deployment

Retrieves the configured memory instance.

```APIDOC
## GET /en/reference/core/getMemory

### Description
Retrieves the configured memory instance.

### Method
GET

### Endpoint
/en/reference/core/getMemory

### Response
#### Success Response (200)
- **memory** (object) - The configured memory instance details.

#### Response Example
```json
{
  "memory": {
    "type": "redis",
    "host": "localhost",
    "port": 6379
  }
}
```
```

--------------------------------

### GET /reference/core/getServer

Source: https://mastra.ai/en/docs/workflows/using-with-agents-and-tools

Retrieves the configured server configuration for Mastra. This endpoint provides details about the server setup.

```APIDOC
## GET /reference/core/getServer

### Description
Retrieves the configured server configuration.

### Method
GET

### Endpoint
/reference/core/getServer

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **server** (object) - The server configuration object.

#### Response Example
```json
{
  "server": {
    "host": "localhost",
    "port": 8080
  }
}
```
```

--------------------------------

### Create Directories for MCP Server and Notes

Source: https://mastra.ai/ja/guides/guide/notes-mcp-server

Instructions for setting up the directory structure for the MCP server logic and a 'notes' directory. This setup helps in organizing the project structure.

```text
MCP サーバーのロジック用の専用ディレクトリと、ノート用の notes ディレクトリを作成します:
```

--------------------------------

### Core API Reference

Source: https://mastra.ai/en/docs/getting-started/installation

This section covers the core functionalities of the Mastra API, including methods for managing agents, workflows, memory, storage, servers, vectors, deployers, and logging.

```APIDOC
## Mastra Core API

### Description
Provides access to core Mastra functionalities for managing AI components.

### Methods

#### Get Agent
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getAgent`
- **Description**: Retrieves an agent by name.

#### Get Agents
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getAgents`
- **Description**: Retrieves all configured agents.

#### Get Agent By ID
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getAgentById`
- **Description**: Retrieves an agent by its unique ID.

#### Get Workflow
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getWorkflow`
- **Description**: Retrieves a workflow by its ID.

#### Get Workflows
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getWorkflows`
- **Description**: Retrieves all configured workflows.

#### Get Memory
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getMemory`
- **Description**: Retrieves the configured memory instance.

#### Set Storage
- **Method**: POST/PUT (Implied)
- **Endpoint**: `/en/reference/core/setStorage`
- **Description**: Sets the storage configuration.

#### Get Server
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getServer`
- **Description**: Retrieves server information.

#### Get MCP Server
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getMCPServer`
- **Description**: Retrieves information about an MCP server.

#### Get Vector
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getVector`
- **Description**: Retrieves vector information.

#### Get Vectors
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getVectors`
- **Description**: Retrieves all configured vectors.

#### Get Deployer
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getDeployer`
- **Description**: Retrieves the deployer configuration.

#### Get Storage
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getStorage`
- **Description**: Retrieves the storage configuration.

#### Get MCP Servers
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getMCPServers`
- **Description**: Retrieves information about all MCP servers.

#### Get Telemetry
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getTelemetry`
- **Description**: Retrieves telemetry data.

#### Set Telemetry
- **Method**: POST/PUT (Implied)
- **Endpoint**: `/en/reference/core/setTelemetry`
- **Description**: Sets telemetry configuration.

#### Get Logs
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getLogs`
- **Description**: Retrieves system logs.

#### Get Logs By Run ID
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getLogsByRunId`
- **Description**: Retrieves logs filtered by a specific run ID.

#### Get Logger
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getLogger`
- **Description**: Retrieves logger information.

#### Set Logger
- **Method**: POST/PUT (Implied)
- **Endpoint**: `/en/reference/core/setLogger`
- **Description**: Sets logger configuration.

#### Get Scorers
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getScorers`
- **Description**: Retrieves all configured scorers.

#### Get Scorer
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getScorer`
- **Description**: Retrieves a specific scorer.

#### Get Scorer By Name
- **Method**: GET (Implied)
- **Endpoint**: `/en/reference/core/getScorerByName`
- **Description**: Retrieves a scorer by its name.

```

--------------------------------

### Mastra AI LLMs TXT Options

Source: https://mastra.ai/en/reference/cli/init

A comprehensive list of available options for initializing Mastra AI LLMs TXT. These options control directory, components, LLM provider, API keys, example inclusion, and editor integration.

```bash
--default : Quick start with defaults (src, OpenAI, no examples)
--dir <string> : Directory for Mastra files (defaults to src/)
--components <string> : Comma-separated list of components (agents, tools, workflows)
--llm <string> : Default model provider (openai, anthropic, groq, google or cerebras)
--llm-api-key <string> : API key for the model provider
--example : Include example code
--no-example : Do not include example code
--mcp <string> : MCP Server for code editor (cursor, cursor-global, windsurf, vscode)
--help : Display help for command
```

--------------------------------

### Chef Agent Instructions Example

Source: https://mastra.ai/ja/guides/guide/chef-michel

This example showcases how to define instructions for a chef agent. It sets the agent's persona to 'Michel', a practical and experienced home chef.

```typescript
const agent = new Agent({
  // ... other configurations
  instructions: "You are Michel, a practical and experienced home chef + ..."
});
```

--------------------------------

### Inngest Workflow Integration Example

Source: https://mastra.ai/en/reference/legacyWorkflows/start

Shows how to build and integrate an Inngest workflow using Mastra. This example is for developers looking to leverage Inngest for robust, serverless background job processing.

```typescript
import { Workflow } from "@mastra/workflows";
import { serve } from "inngest/next"; // Assuming Next.js context

// Define your Mastra workflow
const myMastraWorkflow = new Workflow({
  name: "inngest-example-workflow",
  description: "A workflow to be triggered by Inngest.",
  steps: [
    // ... your workflow steps here ...
  ]
});

// Example of how you might integrate with Inngest (using Next.js framework)
// This is a conceptual example, actual implementation may vary based on Inngest setup
export const inngest = serve({
  async handler({ event, step }) {
    // The 'event' is from Inngest, and 'step' provides Mastra workflow context
    console.log(`Received Inngest event: ${event.name}`);

    // You can trigger your Mastra workflow here
    await myMastraWorkflow.run({
      initialInput: event.data // Pass Inngest event data to the workflow
    });

    return { success: true };
  },
});

// To use this:
// 1. Set up Inngest functions and SDK.
// 2. Define your Mastra workflow logic within `myMastraWorkflow`.
// 3. Deploy this handler to your Inngest compatible environment.
```

--------------------------------

### Example Publisher Agent Setup

Source: https://mastra.ai/ja/examples/agents/hierarchical-multi-agent

This code defines an example publisher agent. It utilizes the Agent class and integrates with OpenAI, likely for natural language processing or generation tasks. Further configuration or implementation details would follow.

```typescript
export const examplePublisherAgent = new Agent({
  name: "example-publisher",
  description: "An example agent that publishes events.",
  stateSchema: z.object({
    publishedCount: z.number().default(0),
  }),
  actions: {
    publish: {
      description: "Publish an event.",
      parameters: z.object({
        message: z.string()
      }),
      handler: async ({ message }) => {
        console.log(`Publishing message: ${message}`);
        // Add actual publishing logic here
        return { published: true };
      }
    }
  }
});
```

--------------------------------

### CLI - create-mastra

Source: https://mastra.ai/en/docs/observability/overview

Creates a new Mastra project with interactive setup options.

```APIDOC
## Command: create-mastra

### Description
Creates a new Mastra project with interactive setup options.

### Usage
```bash
mastra create-mastra
```

### Options
None (interactive prompts)

### Example
Running `mastra create-mastra` will guide the user through project setup.
```

--------------------------------

### Add TypeScript and Development Dependencies with Bun

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

Adds TypeScript, Node.js types, and the Mastra package as development dependencies using Bun. The '--dev' flag ensures these are installed as dev dependencies.

```bash
bun add typescript tsx @types/node mastra@latest --dev
```

--------------------------------

### Install Mastra Core and Vercel AI SDK OpenAI Provider

Source: https://mastra.ai/en/docs/agents/overview

This command installs both the Mastra core package and the OpenAI provider from the Vercel AI SDK. This setup is necessary for integrating Mastra agents with Vercel's AI ecosystem.

```bash
npm install @mastra/core @ai-sdk/openai
```

--------------------------------

### Basic Agent Initialization Example

Source: https://mastra.ai/en/docs/agents/using-tools-and-mcp

This snippet shows a basic example of how to initialize an agent. It includes importing necessary modules and setting up the agent, likely for use with an LLM.

```typescript
import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

// Assume agent is initialized here, possibly with openai provider
const agent = new Agent({ provider: openai(...)
// ... rest of the agent configuration
```

--------------------------------

### Example Project Structure using FileTree Component

Source: https://mastra.ai/en/docs/getting-started/project-structure

This snippet demonstrates how to represent a project's file structure using the `FileTree` component from 'nextra/components'. It outlines the recommended organization for agents, tools, and workflows within the 'src/mastra' directory. This is useful for visualizing and communicating project organization.

```jsx
import { FileTree } from "nextra/components";

<FileTree>
  <FileTree.Folder name="src" defaultOpen>
    <FileTree.Folder name="mastra" defaultOpen>
      <FileTree.Folder name="agents" defaultOpen>
        <FileTree.File name="agent-name.ts" />
      </FileTree.Folder>
      <FileTree.Folder name="tools" defaultOpen>
        <FileTree.File name="tool-name.ts" />
      </FileTree.Folder>
      <FileTree.Folder name="workflows" defaultOpen>
        <FileTree.File name="workflow-name.ts" />
      </FileTree.Folder>
      <FileTree.File name="index.ts" />
    </FileTree.Folder>
    <FileTree.File name=".env" />
    <FileTree.File name="package.json" />
    <FileTree.File name="tsconfig.json" />
  </FileTree.Folder>
</FileTree>

```

--------------------------------

### TypeScript: Start Workflow Execution

Source: https://mastra.ai/ja/docs/workflows/nested-workflows

This snippet shows a comment indicating the start of workflow execution. The comment '// Start the workflow' serves as documentation for the subsequent code that would initiate the workflow process. This is a common practice to clearly mark the beginning of an automated process.

```typescript
// Start the workflow
```

--------------------------------

### CLI - mastra init

Source: https://mastra.ai/en/docs/agents/runtime-context

Creates a new Mastra project with interactive setup options.

```APIDOC
## CLI Command: mastra init

### Description
Creates a new Mastra project with interactive setup options.

### Usage
```bash
mastra init
```

### Details
This command is used to initialize a new Mastra project, providing interactive prompts for configuration.
```

--------------------------------

### Retrieve Trace IDs from Workflow Start and Stream (JavaScript)

Source: https://mastra.ai/en/docs/observability/ai-tracing/overview

This example shows how to retrieve trace IDs from Mastra workflow executions. It covers both starting a workflow synchronously and streaming its output. The trace ID is available in the result of the start method and the final state of a streamed workflow.

```javascript
// Create a workflow run
const run = await mastra.getWorkflow('myWorkflow').createRunAsync();

// Start the workflow
const result = await run.start({
  inputData: { data: 'process this' }
});
console.log('Trace ID:', result.traceId);

// Or stream the workflow
const { stream, getWorkflowState } = run.stream({
  inputData: { data: 'process this' }
});

// Get the final state which includes the trace ID
const finalState = await getWorkflowState();
console.log('Trace ID:', finalState.traceId);
```

--------------------------------

### Install Mastra AI LLMs TXT with pnpm

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

This snippet shows how to initialize and add TypeScript and TSX support to your project using pnpm. It's useful for setting up a new project or adding necessary dependencies.

```pnpm
pnpm init
pnpm add typescript tsx

```

--------------------------------

### start()

Source: https://mastra.ai/en/docs/workflows-legacy/steps

Documentation for the `start()` method in workflows, which begins execution of a workflow run.

```APIDOC
## POST /runs/{run_id}/start

### Description
Begins the execution of a workflow run.

### Method
POST

### Endpoint
`/runs/{run_id}/start`

### Parameters
#### Path Parameters
- **run_id** (string) - Required - The ID of the workflow run to start.

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the status of the workflow run (e.g., "running").

#### Response Example
```json
{
  "status": "running"
}
```
```

--------------------------------

### CloudExporter Usage Examples

Source: https://mastra.ai/en/reference/observability/ai-tracing/exporters/cloud-exporter

Demonstrates how to instantiate the CloudExporter, showing both default initialization using environment variables and explicit configuration with custom parameters.

```javascript
import { CloudExporter } from '@mastra/core/ai-tracing';

// Uses environment variable for token
const exporter = new CloudExporter();

// Explicit configuration
const customExporter = new CloudExporter({
  accessToken: 'your-token',
  maxBatchSize: 500,
  maxBatchWaitMs: 2000
});
```

--------------------------------

### Initialize Mastra AI LLMs TXT with pnpm

Source: https://mastra.ai/ja/docs/getting-started/installation

Initializes the Mastra AI LLMs TXT project using pnpm. This command sets up the project structure and installs essential development dependencies.

```bash
pnpm init
pnpm add typescript tsx
```

--------------------------------

### JavaScript: Start Workflow

Source: https://mastra.ai/ja/examples/workflows/creating-a-workflow

This JavaScript snippet shows how to start a workflow. It uses the `start` method, likely an asynchronous operation given the `await` keyword. The `res` variable is used to capture the result of the operation. The snippet also includes an example of passing `triggerData` with an `input` property.

```javascript
self.__next_f.push([1,"31:[\"$\",\"span\",null,{\"children\":\" \"}]\n32:[\"$\",\"span\",null,{\"children\":[[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"#D81717\",\"--shiki-dark\":\"#FA7B6A\"},\"children\":\"const\"}],\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-color-text-6)\",\"--shiki-dark\":\"#FFF\"},\"children\":\" res\"}],\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"#D81717\",\"--shiki-dark\":\"#FA7B6A\"},\"children\":\" =\"}],\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"#D81717\",\"--shiki-dark\":\"#FA7B6A\"},\"children\":\" await\"}],\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"#9829C7\",\"--shiki-dark\":\"#D06BEE\"},\"children\":\" start\"}],\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-color-text-6)\",\"--shiki-dark\":\"#FFF\"},\"children\":\"({\"}]]}\n33:[\"$\",\"span\",null,{\"children\":[[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-color-text-6)\",\"--shiki-dark\":\"#FFF\"},\"children\":\" triggerData: { input: \"}],\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-green-accent)\",\"--shiki-dark\":\"#46F488\"},\"children\":\"90\"}],\"$\",\"span\",null,{]
```

--------------------------------

### Workflow Examples and Class References

Source: https://mastra.ai/ja/reference/legacyWorkflows/start

This section provides links to examples and reference documentation for workflow creation, suspension, resumption, and related classes like 'createRun', 'Workflow', and 'Step'. These are essential for understanding and utilizing the project's workflow capabilities.

```markdown
- 例：ワークフローの作成
- 例：一時停止と再開
- createRun リファレンス
- Workflow クラスリファレンス
- Step クラスリファレンス
```

--------------------------------

### voice.addInstructions() Method

Source: https://mastra.ai/en/docs/mastra-cloud/setting-up

Allows adding specific instructions or context to the voice provider for more nuanced responses.

```APIDOC
## POST /voice/addInstructions

### Description
Adds specific instructions or context to the voice provider to influence its behavior or responses.

### Method
POST

### Endpoint
`/voice/addInstructions`

### Parameters
#### Request Body
- **instructions** (string) - Required - The instructions to be provided to the voice provider.
- **context_id** (string) - Optional - An identifier for the context to which these instructions apply.
```

--------------------------------

### Start AI Workflow and Get Result (JavaScript)

Source: https://mastra.ai/en/examples/workflows_legacy/human-in-the-loop

Initiates an AI workflow with provided trigger data and awaits the result. This function is typically used to start a process and capture its immediate output. Ensure the 'workflow' module and 'start' function are correctly imported and available.

```javascript
const result = await workflow.start(triggerData);
if (result) {
  // Process the result
}
```

--------------------------------

### Elicitation Setup using MCPClient

Source: https://mastra.ai/en/reference/tools/mcp-client

Demonstrates how to set up an elicitation handler using the MCPClient before tools that utilize elicitation are invoked. This involves importing MCPClient and likely configuring it within the application's setup.

```javascript
import { MCPClient } from '@mastra/mcp';
```

--------------------------------

### CLI - create-mastra

Source: https://mastra.ai/en/models/providers/alibaba

Creates a new Mastra project with interactive setup options.

```APIDOC
## CLI Command: create-mastra

### Description
Creates a new Mastra project with interactive setup options.

### Usage
```bash
mastra create-mastra
```

### Options
This command is interactive and will prompt the user for project details.
```

--------------------------------

### Install Project Dependencies

Source: https://mastra.ai/en/reference/observability/otel-tracing/providers/arize-phoenix

This section details the necessary commands to install the required packages for the project. Ensure you have your package manager (like npm or yarn) set up correctly.

```shell
npm install
# or
yarn install
```

--------------------------------

### Create JWT for Mastra Server Authentication

Source: https://mastra.ai/en/docs/auth/jwt

This section provides instructions on creating a JSON Web Token (JWT) signed with your `MASTRA_JWT_SECRET`. It guides users to use jwt.io for generating a token by entering their secret and clicking 'Generate example'.

```text
1. Select **JWT Encoder** on jwt.io.
2. In the **Sign JWT: Secret** section, enter your secret (e.g., `supersecretdevkeythatishs256safe!`).
3. Click **Generate example** to create a valid JWT.
4. Copy the generated token and set it as `MASTRA_JWT_TOKEN` in your `.env` file.
```

--------------------------------

### Constructor Options

Source: https://mastra.ai/en/reference/vectors/libsql

Configuration options for initializing the Mastra AI LLMs TXT client.

```APIDOC
## Constructor Options

### Description
Configuration options for initializing the Mastra AI LLMs TXT client.

### Parameters
#### Query Parameters
- **connectionUrl** (string) - Required - LibSQL database URL. Use ':memory:' for in-memory database, 'file:dbname.db' for local file, or a LibSQL-compatible connection string like 'libsql://your-database.turso.io'.
- **authToken** (string) - Optional - Authentication token for Turso cloud databases
- **syncUrl** (string) - Optional - URL for database replication (Turso specific)
- **syncInterval** (number) - Optional - Interval in milliseconds for database sync (Turso specific)
```

--------------------------------

### Run Mastra Application (Bash)

Source: https://mastra.ai/ja/reference/cli/start

This code snippet demonstrates how to start a built Mastra application using the 'mastra start' command. It can be run with default settings or customized using various options.

```bash
mastra start
mastra start --dir ./my-output
mastra start --env .env.staging
mastra start -nt
```

--------------------------------

### Voice.listen() Method

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the listen() method available in all Mastra voice providers, which converts speech to text.

```APIDOC
## voice.listen() Method

### Description
Converts speech to text.

### Method
Not specified (likely a method within a voice provider class).

### Endpoint
Not specified.

### Parameters
None explicitly defined in this snippet.

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Configure and Use MCPClient Tools with Agent

Source: https://mastra.ai/en/reference/tools/mcp-client

This JavaScript code demonstrates how to initialize MCPClient with static tool configurations, including server details, execution commands, environment variables, and logging. It then creates an agent that utilizes these tools and shows examples of how to access and use resource and prompt methods provided by the MCPClient.

```javascript
import { MCPClient } from "@mastra/mcp";
import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

const mcp = new MCPClient({
  servers: {
    stockPrice: {
      command: "npx",
      args: ["tsx", "stock-price.ts"],
      env: {
        API_KEY: "your-api-key",
      },
      log: (logMessage) => {
        console.log(`[${logMessage.level}] ${logMessage.message}`);
      },
    },
    weather: {
      url: new URL("http://localhost:8080/sse"),
    },
  },
  timeout: 30000, // Global 30s timeout
});

// Create an agent with access to all tools
const agent = new Agent({
  name: "Multi-tool Agent",
  instructions: "You have access to multiple tool servers.",
  model: openai("gpt-4"),
  tools: await mcp.getTools(),
});

// Example of using resource methods
async function checkWeatherResource() {
  try {
    const weatherResources = await mcp.resources.list();
    if (weatherResources.weather && weatherResources.weather.length > 0) {
      const currentWeatherURI = weatherResources.weather[0].uri;
      const weatherData = await mcp.resources.read(
        "weather",
        currentWeatherURI,
      );
      console.log("Weather data:", weatherData.contents[0].text);
    }
  } catch (error) {
    console.error("Error fetching weather resource:", error);
  }
}
checkWeatherResource();

// Example of using prompt methods
async function checkWeatherPrompt() {
  try {
    const weatherPrompts = await mcp.prompts.list();
    if (weatherPrompts.weather && weatherPrompts.weather.length > 0) {
      const currentWeatherPrompt = weatherPrompts.weather.find(
        (p) => p.name === "current"
      );
      if (currentWeatherPrompt) {
        console.log("Weather prompt:", currentWeatherPrompt);
      } else {
        console.log("Current weather prompt not found");
      }
    }
  } catch (error) {
    console.error("Error fetching weather prompt:", error);
  }
}
checkWeatherPrompt();

```

--------------------------------

### Get Weather Condition in JavaScript

Source: https://mastra.ai/ja/examples/workflows/inngest-workflow

This JavaScript snippet defines how to get the current weather condition based on a weather code. It calls a function `getWeatherCondition` with the `data.current.weathercode` as input. The implementation of `getWeatherCondition` is not provided.

```javascript
condition: getWeatherCondition(data.current.weathercode)
```

--------------------------------

### Install MCP Server with create-mastra (CLI)

Source: https://mastra.ai/en/docs/getting-started/mcp-docs-server

During the interactive create-mastra wizard, select a tool in the MCP step to automatically install the Mastra MCP Docs Server.

```bash
npx create-mastra
```

--------------------------------

### Start Mastra Dev Server (CLI)

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/sveltekit

Alternative command to start the Mastra development server directly using the Mastra CLI.

```bash
mastra dev:mastra
```

--------------------------------

### Get Streamable HTTP Transport

Source: https://mastra.ai/en/reference/tools/mcp-server

Retrieves the object managing streamable HTTP communication if the server was started with `startHTTP()`.

```APIDOC
## getStreamableHTTPTransport()

### Description
Retrieves the streamable HTTP transport object if the server was started using `startHTTP()`. Primarily for internal checks or testing.

### Method
`getStreamableHTTPTransport(): StreamableHTTPServerTransport | undefined`

### Endpoint
N/A (Method on server instance)

### Parameters
None

### Request Example
```javascript
const httpTransport = server.getStreamableHTTPTransport();
if (httpTransport) {
  console.log('Streamable HTTP transport available');
}
```

### Response
#### Success Response (200)
- **StreamableHTTPServerTransport | undefined** - The streamable HTTP transport object, or undefined if not applicable.

#### Response Example
```json
{
  "status": "connected"
}
```
```

--------------------------------

### CLI - create-mastra

Source: https://mastra.ai/en/reference/core/getVector

Creates a new Mastra project with interactive setup options.

```APIDOC
## CLI Command: mastra create-mastra

### Description
Initiates the creation of a new Mastra project, guiding the user through an interactive setup process.

### Usage
```bash
 mastra create-mastra
```

### Options
This command typically runs interactively and may present several prompts for configuration details such as project name, template selection, and dependencies.
```

--------------------------------

### Get SSE Transport

Source: https://mastra.ai/en/reference/tools/mcp-server

Retrieves the object managing Server-Sent Events (SSE) communication if the server was started with `startSSE()`.

```APIDOC
## getSseTransport()

### Description
Retrieves the SSE transport object if the server was started using `startSSE()`. Primarily for internal checks or testing.

### Method
`getSseTransport(): SSEServerTransport | undefined`

### Endpoint
N/A (Method on server instance)

### Parameters
None

### Request Example
```javascript
const sseTransport = server.getSseTransport();
if (sseTransport) {
  console.log('SSE transport available');
}
```

### Response
#### Success Response (200)
- **SSEServerTransport | undefined** - The SSE transport object, or undefined if not applicable.

#### Response Example
```json
{
  "status": "connected"
}
```
```

--------------------------------

### Start Mastra Application with Custom Environment File

Source: https://mastra.ai/en/reference/cli/start

This example illustrates how to start the Mastra application using a specific environment file. The `--env` option enables you to provide a custom `.env` file, overriding the default '.env.production' and '.env' files.

```bash
mastra start --env .env.staging
```

--------------------------------

### GitHub Actions: Setup Node.js

Source: https://mastra.ai/en/examples/scorers/noise-sensitivity

This snippet demonstrates how to use the 'actions/setup-node@v3' GitHub Action to set up a Node.js environment. It's a common prerequisite for Node.js based CI/CD pipelines.

```yaml
-
  uses: actions/setup-node@v3
  with:
    node-version: '16'
    cache: 'npm'
```

--------------------------------

### Install Mastra Template with npm

Source: https://mastra.ai/en/docs/getting-started/templates

Installs a Mastra template using the `create-mastra` command with npm. Replace `template-name` with the desired template.

```bash
npx create-mastra@latest --template template-name
```

--------------------------------

### Install Mastra Template with pnpm

Source: https://mastra.ai/en/docs/getting-started/templates

Installs a Mastra template using the `create-mastra` command with pnpm. Replace `template-name` with the desired template.

```bash
pnpm create mastra@latest --template template-name
```

--------------------------------

### Agent.getInstructions()

Source: https://mastra.ai/en/examples/agents/deploying-mcp-server

Retrieves the instructions that guide the agent's behavior. These instructions define the agent's role, constraints, and how it should operate.

```APIDOC
## GET /api/agents/getInstructions

### Description
Retrieves the instructions that guide the agent's behavior.

### Method
GET

### Endpoint
/api/agents/getInstructions

### Parameters
None

### Request Example
```json
{
  "message": "Request to get agent instructions"
}
```

### Response
#### Success Response (200)
- **instructions** (string) - The set of instructions guiding the agent.

#### Response Example
```json
{
  "instructions": "You are a helpful assistant. Always respond politely and provide accurate information. Do not speculate on topics outside your knowledge base."
}
```
```

--------------------------------

### Get Workflow

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves a specific workflow by its ID.

```APIDOC
## GET /api/workflows/{workflowId}

### Description
Retrieves a workflow by its ID.

### Method
GET

### Endpoint
`/api/workflows/{workflowId}`

### Parameters
#### Path Parameters
- **workflowId** (string) - Required - The unique identifier of the workflow to retrieve.

### Response
#### Success Response (200)
- **workflow** (object) - An object containing the workflow's details.
  - **id** (string) - The workflow's unique identifier.
  - **name** (string) - The name of the workflow.
  - **steps** (array) - A list of steps in the workflow.

#### Response Example
```json
{
  "workflow": {
    "id": "workflow-abc",
    "name": "Data Processing Workflow",
    "steps": [
      "Step 1: Ingest Data",
      "Step 2: Transform Data",
      "Step 3: Load Data"
    ]
  }
}
```
```

--------------------------------

### Mastra Deployment Example

Source: https://mastra.ai/en/models/gateways

Provides general examples or best practices for deploying Mastra applications. This could include containerization or cloud-specific deployment strategies.

```bash
# Example deployment configuration snippet (e.g., Dockerfile)
# FROM python:3.9-slim
# WORKDIR /app
# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt
# COPY . .
# CMD ["python", "app.py"]
```

--------------------------------

### Get Instructions

Source: https://mastra.ai/en/examples/rag/embedding/embed-text-with-cohere

Documentation for the Agent.getInstructions() method in Mastra agents, which retrieves the instructions that guide the agent's behavior.

```APIDOC
## GET /en/reference/agents/getInstructions

### Description
Retrieves the set of instructions that guide the agent's decision-making and actions.

### Method
GET

### Endpoint
/en/reference/agents/getInstructions

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **instructions** (string) - The instructions provided to the agent.

#### Response Example
```json
{
  "instructions": "Always prioritize user safety. If unsure, ask clarifying questions. Log all interactions."
}
```
```

--------------------------------

### Auth0 React SDK Configuration Example

Source: https://mastra.ai/en/docs/auth/auth0

This snippet demonstrates a typical setup for the Auth0 React SDK, including necessary imports and component structure. It assumes you have your Auth0 domain and client ID configured.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="YOUR_AUTH0_DOMAIN"
      clientId="YOUR_AUTH0_CLIENT_ID"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

```

--------------------------------

### High Completeness Example with TypeScript

Source: https://mastra.ai/ja/examples/scorers/completeness

This TypeScript example demonstrates how to use the `createCompletenessScorer` to evaluate a response against a query about photosynthesis. It shows the setup of the scorer with an OpenAI model and provides sample query and response texts. The expected output indicates a high score due to the comprehensive nature of the response.

```typescript
import { openai } from "@ai-sdk/openai";
import { createCompletenessScorer } from "@mastra/evals/scorers/llm";

const scorer = createCompletenessScorer({ model: openai("gpt-4o-mini") });

const query = "Explain the process of photosynthesis, including the inputs, outputs, and stages involved.";
const response =
 "Photosynthesis is the process by which plants convert sunlight into chemical energy. Inputs: Carbon dioxide (CO2) from the air enters through stomata, water (H2O) is absorbed by roots, and sunlight provides energy captured by chlorophyll. The process occurs in two main stages: 1) Light-dependent reactions in the thylakoids convert light energy to ATP and NADPH while splitting water and releasing oxygen. 2) Light-independent reactions (Calvin cycle) in the stroma use ATP, NADPH, and CO2 to produce glucose. Outputs: Glucose (C6H12O6) serves as food for the plant, and oxygen (O2) is released as a byproduct. The overall equation is: 6CO2 + 6H2O + light energy → C6H12O6 + 6O2.";

const result = await scorer.run({
  input: [{ role: 'user', content: query }],
  output: { text: response },
});

console.log(result);
```

--------------------------------

### Direct Provider Installation Documentation Link

Source: https://mastra.ai/en/models/providers/mistral

Provides a link to the npm package documentation for `@ai-sdk/mistral`. This package can be installed directly and used as an alternative to the Mastra model router string, offering more direct control over provider installation.

```html
<a href="https://www.npmjs.com/package/@ai-sdk/mistral" target="_blank" rel="noreferrer">package documentation</a>
```

--------------------------------

### Initialize simple-git Repository

Source: https://mastra.ai/ja/examples/workflows_vNext/array-as-input

Demonstrates how to initialize a Git repository using the 'simple-git' library. This is a common first step when automating Git operations.

```javascript
import { simpleGit } from 'simple-git';

const git = simpleGit();
git.init();
```

--------------------------------

### Example CopilotKit Component in React

Source: https://mastra.ai/ja/docs/frameworks/agentic-uis/copilotkit

This TypeScript code snippet demonstrates a basic CopilotKit component in React. It assumes you have the necessary CopilotKit packages installed. This example shows the structure for a component that might interact with CopilotKit.

```typescript
import React from 'react';

// Assuming necessary imports from @copilotkit/react-core and @copilotkit/react-ui

function CopilotKitComponent() {
  // Component logic here
  return (
    <div>
      {/* CopilotKit UI elements would go here */}
      <h1>My CopilotKit Component</h1>
    </div>
  );
}

export default CopilotKitComponent;

```

--------------------------------

### Usage Examples

Source: https://mastra.ai/en/reference/observability/ai-tracing/exporters/otel

Examples demonstrating how to use the OtelExporter.

```APIDOC
## Usage Examples

### Basic Usage

```typescript
import { OtelExporter } from '@mastra/otel-exporter';

const exporter = new OtelExporter({
 provider: {
 signoz: {
 apiKey: process.env.SIGNOZ_API_KEY,
 region: 'us',
 }
 },
});
```

### With Custom Endpoint

```typescript
const exporter = new OtelExporter({
 provider: {
 custom: {
 endpoint: 'https://my-collector.example.com:4317',
 protocol: 'grpc',
 headers: {
 'Authorization': 'Bearer my-secret-token'
 }
 }
 },
});
```
```

--------------------------------

### Install Mastra Playground for Local Traces

Source: https://mastra.ai/en/docs/observability/ai-tracing/exporters/default

Instructions for installing the Mastra Playground to view traces locally. This typically involves running a command in your terminal. No specific dependencies are mentioned, and the output is the successful installation of the playground.

```bash
npm install -g @mastra/playground
```

--------------------------------

### Google Voice Provider

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the Google Voice implementation, providing text-to-speech and speech-to-text capabilities.

```APIDOC
## Google Voice Provider

### Description
Provides text-to-speech (TTS) and speech-to-text (STT) capabilities through Google's cloud services.

### Endpoint
(Specific endpoints depend on Google Cloud Speech-to-Text and Text-to-Speech APIs)

### Features
- Text-to-Speech
- Speech-to-Text
- Integration with Google Cloud Platform

### Integration
Requires Google Cloud credentials and project setup.
```

--------------------------------

### Zero-Config Exporter Example

Source: https://mastra.ai/en/docs/observability/ai-tracing/exporters/default

Provides a basic configuration example for the exporter, utilizing a zero-configuration approach recommended for most users. This snippet demonstrates the initialization of the exporter with default settings.

```javascript
// Zero config - recommended for most users
new
```

--------------------------------

### Environment Configuration Example (.env.example)

Source: https://mastra.ai/en/reference/templates/overview

Example file for environment variables in Mastra templates. It lists common API keys for LLM providers and other services, requiring users to replace placeholders.

```dotenv
# LLM provider API keys (choose one or more)
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key_here

# Other service API keys as needed
OTHER_SERVICE_API_KEY=your_api_key_here
```

--------------------------------

### Usage Example for MastraAuthClerk

Source: https://mastra.ai/en/docs/auth/clerk

This example demonstrates how to integrate the MastraAuthClerk into your application. It assumes you have already installed the package and have your API keys configured. The code highlights the basic structure for utilizing the authentication service.

```javascript
import { MastraAuthClerk } from "@mastra/auth-clerk";

// Initialize MastraAuthClerk with your API keys
const auth = new MastraAuthClerk({
  // Your API keys can be found in your Clerk Dashboard under "API Keys"
  // publicKey: "YOUR_PUBLIC_KEY",
  // secretKey: "YOUR_SECRET_KEY"
});

// Example usage: Authenticate a user
async function authenticateUser(token) {
  try {
    const user = await auth.authenticate(token);
    console.log("User authenticated:", user);
    return user;
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error;
  }
}

// Example usage: Get user details
async function getUserDetails(userId) {
  try {
    const userDetails = await auth.getUser(userId);
    console.log("User details:", userDetails);
    return userDetails;
  } catch (error) {
    console.error("Failed to get user details:", error);
    throw error;
  }
}
```

--------------------------------

### Agent Initialization and Instructions

Source: https://mastra.ai/en/docs/agents/overview

This code snippet illustrates the initialization of an agent with specific instructions. It defines the agent's role as a helpful assistant and includes basic conversational instructions. The syntax suggests a configuration or initialization script.

```javascript
["$","span",null,{"style":{"--shiki-light":"var(--light-color-text-6)","--shiki-dark":"#FFF"},"children":" instructions: "}],["$","span",null,{"style":{"--shiki-light":"var(--light-color-text-6)","--shiki-dark":"#FFF"},"children":"\"\""}],["$","span",null,{"style":{"--shiki-light":"#158D29","--shiki-dark":"#46F488"},"children":"You are a helpful assistant."}],["$","span",null,{"style":{"-...
```

--------------------------------

### Migration Guide: VNext to Standard APIs

Source: https://mastra.ai/en/models/providers

Migration guide for transitioning from VNext to Standard APIs within Mastra.

```APIDOC
## Migration Guide: VNext to Standard APIs

### Description
Migration guide for transitioning from VNext to Standard APIs within Mastra.

### Endpoint
/en/reference/agents/migration-guide

### Method
GET (Implicit, documentation reference)

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
None specified

#### Response Example
None
```

--------------------------------

### JavaScript Example of setupAITracing Function

Source: https://mastra.ai/en/reference/observability/ai-tracing/configuration

Demonstrates the usage of the setupAITracing function. This function is likely used to initialize or configure AI tracing within the application. The example shows how to call it and its expected parameters.

```javascript
setupAITracing();
```

--------------------------------

### Express.js Server Setup

Source: https://mastra.ai/en/docs/frameworks/servers/express

This code demonstrates the basic setup for an Express.js server. It includes importing the express module, creating an app instance, and defining a port. This is a foundational piece for building web applications with Node.js.

```javascript
import express, { Request, Response } from "express";
const app = express();
const port = 
```

--------------------------------

### Add Instructions: addInstructions()

Source: https://mastra.ai/en/docs/deployment/cloud-providers/azure-app-services

Adds instructions to guide the voice model's behavior.

```APIDOC
## POST /addInstructions

### Description
Adds instructions to guide the voice model's behavior.

### Method
POST

### Endpoint
/addInstructions

### Parameters
#### Request Body
- **instructions** (string) - Required - The instructions to be added.

### Request Example
```json
{
  "instructions": "Always respond in a polite and formal tone."
}
```

### Response
#### Success Response (200)
- **message** (string) - A confirmation message that instructions have been added.

#### Response Example
```json
{
  "message": "Instructions added successfully."
}
```
```

--------------------------------

### Voice.speak() Method

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the speak() method available in all Mastra voice providers, which converts text to speech.

```APIDOC
## voice.speak() Method

### Description
Converts text to speech.

### Method
Not specified (likely a method within a voice provider class).

### Endpoint
Not specified.

### Parameters
None explicitly defined in this snippet.

### Request Example
N/A

### Response
N/A
```

--------------------------------

### createGraphRAGTool() Usage Example

Source: https://mastra.ai/en/reference/tools/graph-rag-tool

Demonstrates how to use the `createGraphRAGTool` function to initialize a tool for graph-based RAG. This example shows a basic setup for creating the tool, assuming necessary configurations are provided.

```javascript
const graphRAGTool = createGraphRAGTool({
  // Configuration options for GraphRAGTool
});

// Example of using the tool (conceptual)
const query = "What is RAG?";
const results = await graphRAGTool.query(query);
console.log(results);
```

--------------------------------

### Run Class Usage Example

Source: https://mastra.ai/en/reference/workflows/run

Demonstrates how to instantiate and use the Run class to manage workflow executions. This example shows basic interaction patterns, likely involving starting or monitoring a workflow. It highlights the class's role in workflow orchestration.

```typescript
import { Run } from 'mastra';

// Example usage (assuming 'workflowId' is defined)
const run = new Run(workflowId);

// Start the workflow
await run.start();

// Or stream results
for await (const result of run.stream()) {
  console.log(result);
}

// Check status
const status = await run.status();
console.log(`Workflow status: ${status}`);
```

--------------------------------

### Example Upstash Agent Configuration

Source: https://mastra.ai/en/examples/memory/memory-with-upstash

This configuration snippet from 'src/mastra/agents/example-upstash-agent.ts' shows how to add semantic recall functionality to an agent. It includes necessary imports and setup for agent creation, likely for use with Upstash.

```typescript
import { ChatAnthropic } from "@langchain/anthropic";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { BytesOutputParser } from "@langchain/core/output_parsers";
import { semanticRecall } from "@mastra/fastembed";

export const runtime = "edge";

export async function POST(req: Request) {
  const body = await req.json();
  const messages = body.messages;
  const selectedMessages = messages.slice(0, -1);
  const lastMessage = messages[messages.length - 1];

  const model = new ChatAnthropic({});
  const prompt = ChatPromptTemplate.fromMessages([
    "system",
    "Use the following conversation history to std::cout the user's next reply in std::cout no more than 30 words. std::cout only the reply and nothing else.\nPrevious conversation:\n{context}",
    "user",
  ]);

  const outputParser = new BytesOutputParser();

  const chain = RunnableSequence.from([
    {
      context: async () => {
        const embeddings = await semanticRecall(selectedMessages);
        return embeddings;
      },
      chat_history: () => messages,
      input: () => lastMessage.content,
    },
    prompt,
    model,
    outputParser,
  ]);

  const stream = await chain.stream({
    input: lastMessage.content,
  });

  return new StreamingTextResponse(stream);
}
```

--------------------------------

### Install Mastra AI SDK using bun

Source: https://mastra.ai/ja/docs/frameworks/ai-sdk

This snippet shows the command for installing the Mastra AI SDK's React package using bun. Bun is a new, fast JavaScript runtime that also includes a built-in package manager. Execute this command to add '@ai-sdk/react' to your project if you are using bun.

```bash
bun add @ai-sdk/react
```

--------------------------------

### Environment Variable Setup

Source: https://mastra.ai/ja/docs/deployment/cloud-providers/digital-ocean

Creates and configures the .env file for environment variables. This file is crucial for setting up the application's environment, such as API keys or database connections. Ensure sensitive information is not committed to version control.

```bash
# .env file example
# Add your environment variables here
YOUR_VARIABLE_NAME="your_value"
ANOTHER_VARIABLE="another_value"
```

--------------------------------

### CLI - mastra start

Source: https://mastra.ai/en/reference/deployer/deployer

Command to start the Mastra application.

```APIDOC
## CLI - mastra start

### Description
Starts the Mastra application, typically serving the production build.

### Method
CLI Command

### Endpoint
mastra start

### Parameters
None

### Request Example
```bash
mastra start
```

### Response
#### Success Response
- Mastra application started. Listening on [port].

#### Response Example
```
Mastra application started. Listening on http://localhost:8080
```
```

--------------------------------

### Registry Setup and Initialization

Source: https://mastra.ai/en/reference/observability/ai-tracing/configuration

Functions for initializing and setting up the AI tracing registry.

```APIDOC
## setupAITracing

### Description
Initializes AI tracing from configuration. Called automatically by Mastra constructor.

### Method
`function`

### Parameters
#### Request Body
- **config** (ObservabilityRegistryConfig) - Required - Configuration object for the observability registry.

### Request Example
```json
{
  "config": {
    "default": {"enabled": true},
    "configs": {
      "myTraceConfig": {
        "name": "myTraceConfig",
        "serviceName": "MyService",
        "sampling": {"type": "ratio", "probability": 0.5},
        "exporters": [],
        "processors": []
      }
    },
    "configSelector": null
  }
}
```

### Response
This function does not return a value.
```

```APIDOC
## registerAITracing

### Description
Registers a tracing config in the global registry.

### Method
`function`

### Parameters
- **name** (string) - Required - The unique name for the tracing configuration.
- **instance** (AITracing) - Required - The tracing instance to register.
- **isDefault** (boolean) - Optional - Whether this instance should be set as the default.

### Request Example
```json
{
  "name": "myTraceConfig",
  "instance": { /* AITracing object */ },
  "isDefault": true
}
```

### Response
This function does not return a value.
```

--------------------------------

### Deploying an MCPServer Example in Python

Source: https://mastra.ai/en/reference/workflows/step

This example provides guidance on deploying an MCPServer within the Mastra ecosystem. MCPServer is likely a component for managing or serving AI models and agents.

```python
from mastra.server import MCPServer

server = MCPServer()
server.start()
# Further configuration and deployment steps would follow
```

--------------------------------

### TypeScript: Mastra LibSQL Snapshot Example

Source: https://mastra.ai/en/docs/server-db/snapshots

This TypeScript example demonstrates initializing and using snapshots with LibSQL via the '@mastra/libsql' package. It showcases how to configure the storage and interact with snapshot functionalities within a Mastra class instance. Ensure you have the necessary Mastra and LibSQL dependencies installed.

```typescript
import { Mastra } from "@mastra/core";
import { MastraLibSQL } from "@mastra/libsql";

// Assuming you have a LibSQL database connection established
// const db = new LibSQL("your_database_url");

// Example instantiation with LibSQL storage
const mastraInstance = new Mastra({
  storage: new MastraLibSQL(db),
});

async function handleWorkflow() {
  // Example of loading a workflow snapshot
  const workflowName = "<workflow-id>";
  const runId = "<run-id>";
  const snapshot = await mastraInstance.loadWorkflowSnapshot(runId, workflowName);
  console.log(snapshot);
}

handleWorkflow();
```

--------------------------------

### Sequential Workflow Execution Example

Source: https://mastra.ai/en/reference/legacyWorkflows/start

Demonstrates how to execute multiple independent tasks in sequence within a Mastra workflow. This example is useful for understanding the basic flow control and step-by-step execution of tasks.

```typescript
import { Workflow, Step } from "@mastra/workflows";

const sequentialWorkflow = new Workflow({
  name: "sequential-workflow",
  description: "Executes tasks in sequence.",
  steps: [
    new Step({
      name: "task1",
      description: "The first task.",
      action: async () => {
        console.log("Running Task 1...");
        return { result: "Task 1 completed" };
      }
    }),
    new Step({
      name: "task2",
      description: "The second task, depends on Task 1.",
      action: async (input) => {
        console.log("Running Task 2 with input:", input);
        return { result: "Task 2 completed" };
      }
    })
  ]
});

// To run the workflow:
// await sequentialWorkflow.run();
```

--------------------------------

### LibSQLStoreの削除 (TypeScript)

Source: https://mastra.ai/ja/docs/deployment/deployment

サーバーレス環境ではLibSQLStoreはサポートされていません。Mastraアプリケーションの`src/mastra/index.ts`および`src/mastra/agents/weather-agent.ts`からLibSQLStoreの使用を削除する方法を示します。このコードは、テレメトリや評価データをメモリに保存するか、ファイルに永続化する場合の変更箇所をハイライトしています。

```typescript
export const mastra = new Mastra({
 // ...
 storage: new LibSQLStore({ // [!code --]
 // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db // [!code --]
 url: ":memory:", // [!code --]
 })// [!code --]
});
```

```typescript
export const weatherAgent = new Agent({
 // ..
 memory: new Memory({ // [!code --]
 storage: new LibSQLStore({ // [!code --]
 url: "file:../mastra.db" // path is relative to the .mastra/output directory // [!code --]
 }) // [!code --]
 })// [!code --]
});
```

--------------------------------

### Relevancy Score Guide

Source: https://mastra.ai/ja/examples/evals/answer-relevancy

Provides a guide for interpreting the relevancy score from 0 to 1. It categorizes scores into ranges, explaining what each range signifies regarding the answer's relevance to the query.

```text
0〜1 の関連性スコア:
1.0: 応答は関連性が高く焦点が定まっており、クエリに完全に答えている。
0.7–0.9: 応答は概ねクエリに答えているが、わずかに無関係な内容を含む場合がある。
0.4–0.6: 応答は部分的にクエリに答えているが、関連情報と無関係な情報が混在している。
```

--------------------------------

### Advanced RAG Examples

Source: https://mastra.ai/en/guides/guide/research-assistant

This section lists advanced Retrieval-Augmented Generation (RAG) techniques. Each link points to a specific example demonstrating a particular RAG strategy, such as filtering, cleanup, Chain of Thought, or re-ranking.

```markdown
## Advanced RAG Examples

Explore these examples for more advanced RAG techniques:

*   [Filter RAG](/examples/rag/usage/filter-rag) for filtering results using metadata
*   [Cleanup RAG](/examples/rag/usage/cleanup-rag) for optimizing information density
*   [Chain of Thought RAG](/examples/rag/usage/cot-rag) for complex reasoning queries using workflows
*   [Rerank RAG](/examples/rag/usage/rerank-rag) for...
```

--------------------------------

### Custom Working Memory Template Example

Source: https://mastra.ai/en/docs/memory/working-memory

Provides an example of a detailed custom template for working memory. This template guides the agent to store specific user profile and session state information.

```typescript
const memory = new Memory({
  options: {
    workingMemory: {
      enabled: true,
      template: `
# User Profile

## Personal Info

- Name:
- Location:
- Timezone:

## Preferences

- Communication Style: [e.g., Formal, Casual]
- Project Goal:
- Key Deadlines:
 - [Deadline 1]: [Date]
 - [Deadline 2]: [Date]

## Session State

- Last Task Discussed:
- Open Questions:
 - [Question 1]
 - [Question 2]
`,
    },
  },
});
```

--------------------------------

### Run Methods: start(), resume(), watch(), cancel()

Source: https://mastra.ai/en/docs/server-db/storage

Documentation for methods related to the Run class: start(), resume(), watch(), and cancel().

```APIDOC
## Run Methods

### Description
Methods for interacting with workflow runs.

### Methods
- **start()**: Starts a workflow run with input data.
- **resume()**: Resumes a suspended workflow run with new data.
- **watch()**: Monitors the status of a workflow run.
- **cancel()**: Cancels a running workflow.

### Method
N/A (This describes methods of a class)

### Endpoint
N/A (This describes methods of a class)

### Parameters
N/A (This describes methods of a class)

### Request Example
N/A

### Response
#### Success Response (N/A)
N/A

#### Response Example
N/A
```

--------------------------------

### CLI - mastra init

Source: https://mastra.ai/en/reference/scorers/create-scorer

Initializes a new Mastra project with interactive setup options using the mastra init command.

```APIDOC
## mastra init

### Description
Initializes a new Mastra project with interactive setup options.

### Method
CLI command

### Endpoint
(Not applicable for CLI commands)

### Parameters
(Interactive prompts, no direct parameters specified)

### Request Example
```bash
mastra init
```

### Response
(Project initialization output, no specific response structure defined)
```

--------------------------------

### GitHub Link to Workflow Example

Source: https://mastra.ai/ja/examples/workflows_legacy/parallel-steps

Provides a link to a GitHub repository showcasing an example of workflows with parallel steps. This is useful for understanding advanced workflow implementations.

```html
<a target="_blank" rel="noopener noreferrer" class="flex w-full flex-row justify-between p-3 border border-gray-300 dark:border-[#404040] rounded-md cursor-pointer group text-zinc-900 dark:text-zinc-50 " href="https://github.com/mastra-ai/mastra/blob/main/examples/basics/workflows-legacy/workflow-with-parallel-steps">View Example on GitHub</a>
```

--------------------------------

### Install TypeScript and Node Types with pnpm

Source: https://mastra.ai/en/docs/getting-started/installation

This command uses pnpm to add TypeScript and Node.js types as development dependencies. It's a common step for projects requiring type safety and Node.js specific typings.

```bash
pnpm init
pnpm add typescript tsx @types/node mastra@latest --save-dev
```

--------------------------------

### MSSQLStore Constructor and Parameters

Source: https://mastra.ai/ja/reference/storage/mssql

This section outlines the parameters required for initializing the MSSQLStore and provides an example of its constructor.

```APIDOC
## Parameters

### Path Parameters
None

### Query Parameters
None

### Request Body
None

## Constructor Example

### Description
Instantiate the MSSQLStore using a connection string.

### Method
Constructor

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

#### Constructor Parameters
- **connectionString** (string) - Required - MSSQL connection string (e.g., mssql://user:pass@host:1433/dbname)
- **schemaName** (string) - Optional - The name of the schema the storage will use. If not specified, the default schema will be used.

### Request Example
```json
{
  "example": "import { MSSQLStore } from \"@mastra/mssql\";\n\n// Using a connection string only\nconst store1 = new MSSQLStore({\n  connectionString: process.env.DATABASE_URL,\n});\n"
}
```

### Response
#### Success Response (200)
N/A (Constructor)

#### Response Example
N/A
```

--------------------------------

### Example Usage of getResourceContent

Source: https://mastra.ai/en/reference/tools/mcp-server

Provides an example of how to use the `getResourceContent` function. It demonstrates calling the function with a URI and handling the returned Promise.

```javascript
// Example:
getResourceContent('some-uri').then(content => {
  // Handle the content
});

```

--------------------------------

### MCP Server Guide

Source: https://mastra.ai/en/reference/tools/mcp-server

A guide on building and managing a Notes MCP Server using the Mastra framework.

```APIDOC
## MCP Server: Building a Notes MCP Server

### Description
This guide provides a step-by-step process for creating a fully-featured MCP (Model Context Protocol) server specifically designed for managing notes within the Mastra framework.

### Endpoint
`/en/guides/guide/notes-mcp-server`

### Key Components
- **Mastra Framework**: The underlying framework used for building the server.
- **MCP Server**: Protocol for managing context and models.
- **Notes Management**: Functionality focused on creating, reading, updating, and deleting notes.
```

--------------------------------

### JavaScript: Fetch API GET Request

Source: https://mastra.ai/ja/docs/frameworks/web-frameworks/next-js

This snippet shows how to perform a GET request using the Fetch API in JavaScript. It fetches data from the '/api/test' endpoint. Note that this example does not include error handling or response processing.

```javascript
const response = await fetch("/api/test");
```

--------------------------------

### Define Root GET Route for Express.js Server in JavaScript

Source: https://mastra.ai/en/docs/frameworks/servers/express

This snippet defines a GET request handler for the root path ('/'). It takes 'req' (request) and 'res' (response) objects as parameters. The actual response logic is omitted in this example.

```javascript
app.get('/', (req: Request, res: Response) => {
  
});
```

--------------------------------

### Example Usage of Mastra AI Agent (JavaScript)

Source: https://mastra.ai/ja/examples/agents/using-a-workflow

This example demonstrates how to get an agent reference using `getAgent()` and then call the `generate()` function with a prompt. This is a core pattern for interacting with the AI agent.

```javascript
const agent = getAgent();
await agent.generate({
  prompt: "Your prompt here"
});
```

--------------------------------

### CLI - create-mastra

Source: https://mastra.ai/en/docs/observability/logging

Documentation for the create-mastra command, which creates a new Mastra project with interactive setup options.

```APIDOC
## create-mastra

### Description
Creates a new Mastra project with interactive setup options.

### Method
CLI Command

### Endpoint
N/A

### Parameters

### Request Body

### Request Example
```bash
mastra create-mastra
```

### Response
#### Success Response
- **message** (string) - Confirmation message indicating project creation.

#### Response Example
```
Mastra project created successfully!
```
```

--------------------------------

### Initialize Agent with Together AI

Source: https://mastra.ai/en/models/gateways/togetherai

Example of how to initialize an agent using the Mastra core library with a specific model from Together AI. This assumes the Mastra core library is installed as a dependency.

```javascript
import { Agent } from "@mastra/core";

const agent = new Agent({
  name: "my-agent",
  instructions: "You are a helpful assistant",
  model: "togetherai/Qwen/Qwen3-Coder-480B-A35B-Instruct-FP8"
});
```

--------------------------------

### TypeScript Setup Guide

Source: https://mastra.ai/ja/docs/frameworks/web-frameworks/vite-react

This section outlines the steps to configure TypeScript for the project. It involves setting up the necessary files and configurations. Refer to the project's root directory for relevant files.

```markdown
## TypeScript を設定する

プロジェクトのルートにある...
```

--------------------------------

### Mastra Class - Core Entry Point

Source: https://mastra.ai/en/examples/rag/usage/cot-rag

Documentation for the `Mastra` class, the central entry point for managing Mastra's features like agents, workflows, and servers.

```APIDOC
## Reference: Mastra Class | Core

### Description
Documentation for the `Mastra` class in Mastra, the core entry point for managing agents, workflows, MCP servers, and server endpoints.

### Method
N/A (Class Documentation)

### Endpoint
N/A (Class Documentation)

### Parameters
N/A

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Initialize TypeScript Project with @mastra/core

Source: https://mastra.ai/en/docs/getting-started/installation

Initializes a new TypeScript project using npm, including the @mastra/core package. The '-y' flag automatically accepts default configuration options.

```bash
npm init -y
```

--------------------------------

### Agent.getInstructions()

Source: https://mastra.ai/en/docs/getting-started/project-structure

Documentation for the `Agent.getInstructions()` method, retrieving the specific instructions or directives given to the agent.

```APIDOC
## Agent.getInstructions()

### Description
Documentation for the `Agent.getInstructions()` method in Mastra agents, retrieving the specific instructions or directives given to the agent.

### Method
Instance Method

### Endpoint
N/A

### Parameters
N/A

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **instructions** (string) - The instructions for the agent.
```

--------------------------------

### Get Telemetry Instance

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves the configured telemetry instance.

```APIDOC
## GET /api/telemetry

### Description
Retrieves the configured telemetry instance.

### Method
GET

### Endpoint
`/api/telemetry`

### Response
#### Success Response (200)
- **telemetry** (object) - An object representing the telemetry configuration.
  - **type** (string) - The type of telemetry service (e.g., 'prometheus', 'datadog').
  - **config** (object) - Configuration details for the telemetry service.

#### Response Example
```json
{
  "telemetry": {
    "type": "prometheus",
    "config": {
      "pushgatewayUrl": "http://prometheus-pushgateway:9091"
    }
  }
}
```
```

--------------------------------

### JavaScript: Agent Initialization and Response Generation

Source: https://mastra.ai/en/examples/rag/usage/cot-rag

Initializes an agent and prepares to generate a response. This snippet focuses on the setup phase before the actual LLM call. It sets up the structure for outputting formatted text.

```javascript
self.__next_f.push([1,"89:[\"$\",\"span\",null,{\"children\":[[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-color-text-6)\",\"--shiki-dark\":\"#FFF\"},\"children\":\" \\\"\"}]},{\"tag\":\"br\"},{\"tag\":\"br\"},{\"children\":[[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"#158D29\",\"--shiki-dark\":\"#46F488\"},\"children\":\"What connections can you draw between climate change and food security?\"}]}]}]}])
```

--------------------------------

### Manual Mastra Project Initialization (pnpm)

Source: https://mastra.ai/en/docs/getting-started/installation

Steps to manually initialize a Mastra project using pnpm. This involves creating a project directory, initializing pnpm, and then adding development dependencies and core Mastra packages, including TypeScript and Zod.

```bash
pnpm init

pnpm add typescript tsx @types/node mastra@latest --save-dev

pnpm add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Example Publisher Agent Implementation

Source: https://mastra.ai/ja/examples/agents/supervisor-agent

This code snippet shows an example of an 'example-publisher-agent.ts' file. It includes imports for necessary libraries like OpenAI SDK and Mastra's Agent class, setting up the foundation for a publisher agent.

```typescript
import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";

// The actual implementation of the example publisher agent would follow.
// This might include defining its name, description, and actions.
// For example:

// export const examplePublisherAgent = new Agent({
//   name: "Example Publisher Agent",
//   description: "A sample agent that acts as a publisher.",
//   // Define actions here
//   actions: [],
// });

```

--------------------------------

### MSSQL Constructor Examples - JavaScript

Source: https://mastra.ai/en/reference/storage/mssql

Demonstrates various ways to instantiate the MSSQLStore class. Examples include using only a connection string, a connection string with a custom schema, individual connection parameters, and individual parameters with a custom schema.

```javascript
import { MSSQLStore } from "@mastra/mssql";

// Using a connection string only
const store1 = new MSSQLStore({
  connectionString: "mssql://user:password@localhost:1433/mydb",
});

// Using a connection string with a custom schema name
const store2 = new MSSQLStore({
  connectionString: "mssql://user:password@localhost:1433/mydb",
  schemaName: "custom_schema", // optional
});

// Using individual connection parameters
const store4 = new MSSQLStore({
  server: "localhost",
  port: 1433,
  database: "mydb",
  user: "user",
  password: "password",
});

// Individual parameters with schemaName
const store5 = new MSSQLStore({
  server: "localhost",
  port: 1433,
  database: "mydb",
  user: "user",
  password: "password",
  schemaName: "custom_schema", // optional
});
```

--------------------------------

### Get Storage Instance

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves the configured storage instance.

```APIDOC
## GET /api/storage

### Description
Retrieves the configured storage instance.

### Method
GET

### Endpoint
`/api/storage`

### Response
#### Success Response (200)
- **storage** (object) - An object representing the storage configuration.
  - **type** (string) - The type of storage (e.g., 's3', 'azure-blob').
  - **config** (object) - Configuration details for the storage.

#### Response Example
```json
{
  "storage": {
    "type": "s3",
    "config": {
      "bucketName": "my-data-bucket",
      "region": "us-east-1"
    }
  }
}
```
```

--------------------------------

### Mastra CLI - Create Project

Source: https://context7_llms

Documentation for the create-mastra command, which creates a new Mastra project with interactive setup options.

```APIDOC
## Mastra CLI - Create Project

### Description
Creates a new Mastra project with interactive setup options.

### Method
CLI Command

### Endpoint
`mastra create-mastra`

### Parameters
N/A

### Request Example
```bash
mastra create-mastra
```

### Response
N/A
```

--------------------------------

### Node.js Server Start Script

Source: https://mastra.ai/ja/examples/agents/deploying-mcp-server

This JavaScript code snippet demonstrates how to start a server using Node.js. It includes error handling for potential issues during server startup.

```javascript
server.startStdio().catch((error) => {
  console.error("Error running MCP server:", error);
  process.exit(1);
});
```

--------------------------------

### PostgreSQL Snapshot Example with Mastra PG

Source: https://mastra.ai/ja/reference/workflows/snapshots

This example illustrates how to utilize snapshots with PostgreSQL using the '@mastra/pg' library. It shows the setup and potential usage patterns for managing PostgreSQL data snapshots within the Mastra framework.

```javascript
/*
This example demonstrates how to utilize snapshots with PostgreSQL.

This code snippet is illustrative and may require additional context or setup within the Mastra framework to be fully functional.
*/
// Example placeholder for PostgreSQL snapshot usage with Mastra PG
console.log("PostgreSQL snapshot example with @mastra/pg");
```

--------------------------------

### Manual Installation for Windsurf IDE

Source: https://mastra.ai/ja/reference/cli/mcp-docs-server

This outlines the manual installation steps for the MCP Docs Server when using Windsurf. It requires editing a specific configuration file for global settings.

```json
{
  "Windsurf": "~/.codeium/windsurf/mcp_config.json を編集します（グローバル設定のみ対応）"
}
```

--------------------------------

### Migration Guide: VNext to Standard APIs

Source: https://mastra.ai/en/docs/deployment/serverless-platforms/cloudflare-deployer

Guide for migrating from VNext to Standard APIs within the Mastra platform.

```APIDOC
## Migration Guide: VNext to Standard APIs

### Description
Guide for migrating from VNext to Standard APIs within the Mastra platform.

### Endpoint
`/en/reference/agents/migration-guide`
```

--------------------------------

### Initialize Mastra Project Interactively

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/vite-react

Initiates the Mastra project setup through an interactive command-line interface. This allows users to customize the integration by selecting various options and components as prompted. It's a flexible alternative to the one-liner initialization for more tailored configurations.

```bash
npx mastra@lates
```

--------------------------------

### Get Deployer Instance

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves the configured deployer instance.

```APIDOC
## GET /api/deployer

### Description
Retrieves the configured deployer instance.

### Method
GET

### Endpoint
`/api/deployer`

### Response
#### Success Response (200)
- **deployer** (object) - An object representing the deployer configuration.
  - **type** (string) - The type of deployer (e.g., 'kubernetes', 'docker-compose').
  - **config** (object) - Configuration details for the deployer.

#### Response Example
```json
{
  "deployer": {
    "type": "kubernetes",
    "config": {
      "namespace": "default",
      "kubeconfigPath": "~/.kube/config"
    }
  }
}
```
```

--------------------------------

### Get All Vector Stores

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves all configured vector stores.

```APIDOC
## GET /api/vectors

### Description
Retrieves all configured vector stores.

### Method
GET

### Endpoint
`/api/vectors`

### Response
#### Success Response (200)
- **vectorStores** (array) - An array of vector store objects.
  - Each object contains:
    - **name** (string) - The name of the vector store.
    - **dimensions** (integer) - The dimensionality of the vectors.

#### Response Example
```json
{
  "vectorStores": [
    {
      "name": "product-embeddings",
      "dimensions": 1536
    },
    {
      "name": "user-profiles",
      "dimensions": 1024
    }
  ]
}
```
```

--------------------------------

### Initialize Mastra AI Client with OpenAI

Source: https://mastra.ai/en/examples/agents/dynamic-agents

This snippet shows how to instantiate the Mastra AI client, configuring it to use the OpenAI provider. It highlights the necessary configuration object and the expected output, which is an initialized client instance ready for further operations. No external dependencies beyond the Mastra library itself are explicitly mentioned.

```javascript
export const mastra = new Mastra({
  agents: { supportAgent }
});
```

--------------------------------

### Basic LLM Evaluation Setup with Mastra Evals

Source: https://mastra.ai/ja/examples/scorers/tool-call-accuracy

This snippet illustrates the setup for a basic LLM evaluation using the Mastra Evals library. It shows how to import and potentially configure the scorer for LLM-based evaluations. This is crucial for assessing the performance of language models.

```typescript
const { scorer } = require("@mastra/evals/scorers/llm");
```

--------------------------------

### Start Workflow (Legacy)

Source: https://mastra.ai/en/reference/rag/graph-rag

Documentation for the `start()` method, which begins the execution of a workflow run.

```APIDOC
## start()

### Description
Begins the execution of a workflow run.

### Method
[HTTP Method, e.g., POST]

### Endpoint
[Endpoint path, e.g., /api/workflows/start]

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **workflow_id** (string) - Required - The ID of the workflow to start.

### Request Example
```json
{
  "workflow_id": "your_workflow_id"
}
```

### Response
#### Success Response (200)
- **run_id** (string) - The ID of the initiated workflow run.

#### Response Example
```json
{
  "run_id": "your_run_id"
}
```
```

--------------------------------

### Direct Provider Installation with npm/yarn/pnpm/bun

Source: https://mastra.ai/en/models/providers/google

This section provides installation commands for the '@ai-sdk/google' package using various package managers. This allows for direct installation of the provider as a standalone package, bypassing the Mastra model router string. The commands are straightforward and depend on the user's chosen package manager.

```bash
npm install @ai-sdk/google
```

```bash
yarn add @ai-sdk/google
```

```bash
pnpm add @ai-sdk/google
```

```bash
bun add @ai-sdk/google
```

--------------------------------

### Get Vector Store

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves a vector store by its name.

```APIDOC
## GET /api/vectors/{vectorName}

### Description
Retrieves a vector store by name.

### Method
GET

### Endpoint
`/api/vectors/{vectorName}`

### Parameters
#### Path Parameters
- **vectorName** (string) - Required - The name of the vector store to retrieve.

### Response
#### Success Response (200)
- **vectorStore** (object) - An object representing the vector store.
  - **name** (string) - The name of the vector store.
  - **dimensions** (integer) - The dimensionality of the vectors in the store.
  - **count** (integer) - The number of vectors in the store.

#### Response Example
```json
{
  "vectorStore": {
    "name": "product-embeddings",
    "dimensions": 1536,
    "count": 10000
  }
}
```
```

--------------------------------

### Implement MCPServerResources and Initialize MCPServer

Source: https://mastra.ai/en/reference/tools/mcp-server

Provides a practical example of implementing the 'MCPServerResources' type and initializing an 'MCPServer' instance with these handlers. This setup allows the server to manage and serve resources to MCP clients. It uses mock data for resources, content, and templates.

```typescript
import { MCPServer } from "@mastra/mcp";
import type {
  MCPServerResourceContent,
  Resource,
  ResourceTemplate,
} from "@mastra/mcp";

// Resources/resource templates will generally be dynamically fetched.
const myResources: Resource[] = [
  { uri: "file://data/123.txt", name: "Data File", mimeType: "text/plain" },
];

const myResourceContents: Record<string, MCPServerResourceContent> = {
  "file://data.txt/123": { text: "This is the content of the data file." },
};

const myResourceTemplates: ResourceTemplate[] = [
  {
    uriTemplate: "file://data/{id}",
    name: "Data File",
    description: "A file containing data.",
    mimeType: "text/plain",
  },
];

const myResourceHandlers: MCPServerResources = {
  listResources: async () => myResources,
  getResourceContent: async ({ uri }) => {
    if (myResourceContents[uri]) {
      return myResourceContents[uri];
    }
    throw new Error(`Resource content not found for ${uri}`);
  },
  resourceTemplates: async () => myResourceTemplates,
};

const serverWithResources = new MCPServer({
  name: "Resourceful Server",
  version: "1.0.0",
  tools: {
    /* ... your tools ... */
  },
  resources: myResourceHandlers,
});
```

--------------------------------

### MCP Server Guide

Source: https://mastra.ai/en/examples/voice/text-to-speech

Documentation for building and managing a Notes MCP Server using the Mastra framework.

```APIDOC
## MCP Server Guide

### Description
A step-by-step guide to creating a fully-featured MCP (Model Context Protocol) server for managing notes using the Mastra framework.

### Method
N/A (This is a guide, not an API endpoint)

### Endpoint
N/A

### Parameters
N/A

### Request Example
N/A

### Response
N/A

### Details
This guide covers the process of setting up an MCP server specifically for note management within the Mastra ecosystem. It details the architecture, configuration, and implementation steps required.
```

--------------------------------

### Get Server Configuration

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves the configured server configuration.

```APIDOC
## GET /api/server/config

### Description
Retrieves the configured server configuration.

### Method
GET

### Endpoint
`/api/server/config`

### Response
#### Success Response (200)
- **serverConfig** (object) - An object containing server configuration details.
  - **port** (integer) - The port the server is running on.
  - **hostname** (string) - The hostname of the server.

#### Response Example
```json
{
  "serverConfig": {
    "port": 8080,
    "hostname": "localhost"
  }
}
```
```

--------------------------------

### Initialize Mastra Instance and Configure Workflows

Source: https://mastra.ai/ja/docs/workflows/overview

This code snippet demonstrates how to instantiate the Mastra class, configure workflows with 'testWorkflow', and set up storage using 'LibSQLStore' with an in-memory database. It also configures a 'PinoLogger' for logging purposes.

```javascript
export const mastra = new Mastra({
  workflows: { testWorkflow },
  storage: new LibSQLStore({
    // テレメトリや評価などをメモリストレージに保存します。永続化が必要な場合は file:../mastra.db に変更してください
    url: ":memory:"
  }),
  logger: new PinoLogger({
    name: "Mastra"
  })
})
```

--------------------------------

### MastraAuthAuth0 Class Authentication

Source: https://mastra.ai/en/docs/getting-started/installation

API reference for the MastraAuthAuth0 class, which authenticates Mastra applications using Auth0 authentication.

```APIDOC
## MastraAuthAuth0 Class

### Description
Authenticates Mastra applications using Auth0.

### Method
Not specified (likely part of a larger authentication flow).

### Endpoint
Not specified.

### Parameters
None explicitly defined in this snippet.

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Voice.getSpeakers() Method

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the getSpeakers() method available in voice providers, which retrieves available voice options.

```APIDOC
## voice.getSpeakers() Method

### Description
Retrieves available voice options.

### Method
Not specified (likely a method within a voice provider class).

### Endpoint
Not specified.

### Parameters
None explicitly defined in this snippet.

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Get All Workflows

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves all configured workflows within the system.

```APIDOC
## GET /api/workflows

### Description
Retrieves all configured workflows.

### Method
GET

### Endpoint
`/api/workflows`

### Response
#### Success Response (200)
- **workflows** (array) - An array of workflow objects.
  - Each object contains:
    - **id** (string) - The workflow's unique identifier.
    - **name** (string) - The name of the workflow.

#### Response Example
```json
{
  "workflows": [
    {
      "id": "workflow-abc",
      "name": "Data Processing Workflow"
    },
    {
      "id": "workflow-xyz",
      "name": "Reporting Workflow"
    }
  ]
}
```
```

--------------------------------

### Install Mastra Template with Package Managers

Source: https://mastra.ai/en/docs/getting-started/templates

Demonstrates how to install a Mastra template using the `create-mastra` command. Supports npm, yarn, pnpm, and bun.

```shell
npm create mastra
```

```shell
yarn create mastra
```

```shell
pnpm create mastra
```

```shell
bun create mastra
```

--------------------------------

### Environment Variable Setup for Image Analysis

Source: https://mastra.ai/ja/examples/agents/image-analysis

This snippet demonstrates how to set up environment variables for AI image analysis. It requires API keys from both OpenAI and Unsplash, which should be stored in a .env file.

```dotenv
OPENAI_API_KEY=<your_openai_api_key>
UNSPLASH_ACCESS_KEY=<your_unsplash_access_key>
```

--------------------------------

### TypeScript: Code Snippet for Agent Generation Example

Source: https://mastra.ai/ja/examples/agents/supervisor-agent

This TypeScript code snippet illustrates a practical example of how to use `getAgent()` and `generate()` within the Mastra AI LLMs TXT project. It includes setup for importing environment variables and defining the agent interaction logic. The example shows retrieving an agent, passing a prompt, and generating a response.

```typescript
import "dotenv/config";

// Example function demonstrating agent generation
async function runAgentExample() {
  const agent = getAgent(); // Assumes getAgent() is defined and configured
  const prompt = "Translate the following English text to French: 'Hello world.'";
  const result = await agent.generate(prompt);
  console.log(result);
}
```

--------------------------------

### Get MCP Servers

Source: https://mastra.ai/en/examples/deployment

Retrieves all registered MCP server instances.

```APIDOC
## GET /en/reference/core/getMCPServers

### Description
Retrieves all registered MCP server instances.

### Method
GET

### Endpoint
/en/reference/core/getMCPServers

### Response
#### Success Response (200)
- **mcpServers** (array) - An array of MCP server instance objects.
  - Each object contains:
    - **id** (string) - The server ID.
    - **name** (string) - The server name.
    - **version** (string) - The server version.
    - **status** (string) - The current status of the server.

#### Response Example
```json
{
  "mcpServers": [
    {
      "id": "mcp_server_1",
      "name": "Primary MCP Server",
      "version": "1.2.0",
      "status": "running"
    },
    {
      "id": "mcp_server_2",
      "name": "Secondary MCP Server",
      "version": "1.1.0",
      "status": "stopped"
    }
  ]
}
```
```

--------------------------------

### Nextra Components for Deployment Guide

Source: https://mastra.ai/en/docs/deployment/cloud-providers/azure-app-services

Imports Callout and Steps components from 'nextra/components'. These are used within the documentation to provide formatted information and guide users through deployment steps.

```javascript
import { Callout, Steps } from "nextra/components";
```

--------------------------------

### Get Agent By ID

Source: https://mastra.ai/en/examples/deployment

Retrieves a specific agent by its unique identifier.

```APIDOC
## GET /en/reference/core/getAgentById

### Description
Retrieves a specific agent by its unique identifier.

### Method
GET

### Endpoint
/en/reference/core/getAgentById

### Parameters
#### Path Parameters
- **id** (string) - Required - The unique identifier of the agent.

### Response
#### Success Response (200)
- **agent** (object) - Details of the retrieved agent.
  - **id** (string) - The agent's unique identifier.
  - **name** (string) - The name of the agent.
  - **description** (string) - A description of the agent.

#### Response Example
```json
{
  "agent": {
    "id": "agent_123",
    "name": "Customer Support Agent",
    "description": "Handles customer inquiries and provides support."
  }
}
```
```

--------------------------------

### Voice.connect() Method

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the connect() method available in real-time voice providers, which establishes a connection for speech-to-speech communication.

```APIDOC
## voice.connect() Method

### Description
Establishes a connection for speech-to-speech communication (for real-time voice providers).

### Method
Not specified (likely a method within a real-time voice provider class).

### Endpoint
Not specified.

### Parameters
None explicitly defined in this snippet.

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Usage Example for Mastra S3Vectors

Source: https://mastra.ai/en/reference/vectors/s3vectors

This snippet demonstrates a basic usage example for the Mastra S3Vectors library. It assumes the library has been installed and shows how to import and potentially use its functionalities. The exact implementation details would depend on the library's API.

```javascript
import { S3Vectors } from '@mastra/s3vectors';

// Example usage (details would vary based on actual library API)
const s3Vectors = new S3Vectors();
// ... perform operations with s3Vectors
```

--------------------------------

### Workflow Execution Example in JavaScript

Source: https://mastra.ai/en/reference/legacyWorkflows/events

This snippet demonstrates how to create and start a workflow run using JavaScript. It includes comments explaining each step and the necessary parameters for triggering the workflow.

```javascript
// Create a workflow run
const run = workflow.createRun();

// Start the workflow
await run.start({ triggerData: { requestId: "req-123" } });

// Later, when the event occurs:
```

--------------------------------

### Workflow Examples and References

Source: https://mastra.ai/ja/reference/workflows/snapshots

This section provides links to different workflow examples and reference materials within the project. It includes examples for suspending and resuming workflows, a human-in-the-loop workflow, and the `WorkflowRun.watch()` method for real-time monitoring.

```markdown
### 関連

* [一時停止と再開](../../docs/workflows/suspend-and-resume)
* [ヒューマン・イン・ザ・ループの例](../../examples/workflows/human-in-the-loop)
* [WorkflowRun.watch()](../../reference/workflows/run-methods/watch)

```

--------------------------------

### Install Mastra Client SDK with npm

Source: https://mastra.ai/en/docs/server-db/mastra-client

Installs the latest version of the Mastra Client SDK using npm. This is a prerequisite for using the SDK in your project.

```bash
npm install @mastra/client-js@latest
```

--------------------------------

### Create and Start HTTP Server in JavaScript

Source: https://mastra.ai/en/reference/tools/mcp-server

This snippet demonstrates how to create a basic HTTP server using Node.js's http module and then start it. It defines an asynchronous function to handle requests and includes a placeholder for starting the HTTP server with a specified port. Dependencies include the 'http' module. It takes request and response objects as input and returns nothing.

```javascript
const httpServer = http.createServer(async (req, res) => {
  
});

server.startHTTP({
  url: new URL(req.url || '' || 'http://localhost:1234')
});
```

--------------------------------

### Example: Partial Prompt Alignment in TypeScript

Source: https://mastra.ai/ja/examples/scorers/prompt-alignment

Illustrates a scenario where the response partially aligns with the user's prompt. This example uses the same scorer setup but with an output that may have minor deficiencies in fulfilling all requirements or maintaining the correct format.

```typescript
import { openai } from "@ai-sdk/openai";
import { createPromptAlignmentScorerLLM } from "@mastra/evals/scorers/llm";

const scorer = createPromptAlignmentScorerLLM({ 
 model: openai("gpt-4o-mini") 
});

const inputMessages = [{
```

--------------------------------

### CLI Commands

Source: https://mastra.ai/en/examples/memory/memory-with-pg

Documentation for Mastra CLI commands, including project creation, initialization, development, building, starting, and linting.

```APIDOC
## MASTra CLI Commands

### Description
Commands for managing Mastra projects.

### Commands
- **create-mastra**: Creates a new Mastra project.
- **mastra init**: Initializes a Mastra project in the current directory.
- **mastra dev**: Starts the Mastra development server.
- **mastra build**: Builds the Mastra project for production.
- **mastra start**: Starts the Mastra application.
- **mastra lint**: Lints the Mastra project code.
```

--------------------------------

### Running Workflows Example

Source: https://mastra.ai/en/reference/legacyWorkflows/step-options

Example demonstrating how to execute workflows within the Mastra platform. This covers the basic principles and methods for initiating and managing workflow runs.

```markdown
```md
## Running Workflows

This example focuses on the execution of workflows using Mastra. It provides practical guidance on how to initiate, monitor, and manage the lifecycle of workflow runs within the Mastra environment.

**Key Aspects:**

*   Workflow initiation
*   Execution monitoring
*   Management of workflow instances

**Dependencies:**

*   Mastra AI SDK

**Usage:**

Refer to `src/content/en/examples/workflows/running-workflows.mdx` for the code and explanations.
```
```

--------------------------------

### Local DynamoDB Development Setup

Source: https://mastra.ai/en/reference/storage/dynamodb

Guides users on setting up and configuring the DynamoDBStore to work with DynamoDB Local for development environments.

```APIDOC
## Local Development with DynamoDB Local

### Description
This section details how to configure the `DynamoDBStore` to connect to a local DynamoDB instance for development purposes.

### Prerequisites
1.  **Run DynamoDB Local:** Start a DynamoDB Local instance, for example, using Docker: `docker run -p 8000:8000 amazon/dynamodb-local`
2.  **Create Table and GSIs:** Ensure your DynamoDB table and Global Secondary Indexes (GSIs) are created in the local DynamoDB instance.

### Method
`new DynamoDBStore(config: DynamoDBStoreConfig)`

### Parameters
#### config.name
- **name** (string) - Required - A name for this storage instance (e.g., 'dynamodb-local').

#### config.config
- **tableName** (string) - Required - The name of your DynamoDB table (must exist in local DynamoDB).
- **region** (string) - Required for local - Set to 'localhost' or a similar identifier.
- **endpoint** (string) - Required for local - Set to the local endpoint, typically 'http://localhost:8000'.
- **credentials** (object) - Optional - Provide fake credentials if your local setup requires them.

### Request Example
```javascript
import { DynamoDBStore } from "@mastra/dynamodb";

const storage = new DynamoDBStore({
  name: "dynamodb-local",
  config: {
    tableName: "mastra-single-table", // Ensure this table is created in your local DynamoDB
    region: "localhost", // Can be any string for local, 'localhost' is common
    endpoint: "http://localhost:8000",
    // For DynamoDB Local, credentials are not typically required unless configured.
    // If you've configured local credentials:
    // credentials: { accessKeyId: "fakeMyKeyId", secretAccessKey: "fakeSecretAccessKey" }
  },
});
```

### Response
#### Success Response (200)
- **DynamoDBStore instance** - An initialized DynamoDBStore object configured for local use.

#### Response Example
(No direct response, initialization creates an object.)
```

--------------------------------

### Prompt Injection Detector Usage Example (TypeScript)

Source: https://mastra.ai/en/reference/processors/prompt-injection-detector

This example demonstrates how to import and instantiate the PromptInjectionDetector in TypeScript. It shows the necessary model, threshold, strategy, and detection types for its configuration. Ensure you have the '@ai-sdk/openai' and '@mastra/core/processors' libraries installed.

```typescript
import { openai } from "@ai-sdk/openai";
import { PromptInjectionDetector } from "@mastra/core/processors";

const processor = new PromptInjectionDetector({
 model: openai("gpt-4.1-nano"),
 threshold: 0.8,
 strategy: "rewrite",
 detectionTypes: ["injection", "jailbreak", "system-override"]
});
```

--------------------------------

### Install Mastra Upstash Package

Source: https://mastra.ai/en/examples/memory/memory-with-upstash

This bash command installs the necessary Mastra package for integrating with Upstash services. This package provides the necessary classes and functions to connect your agents to Upstash for storage and vector operations.

```bash
npm install @mastra/upstash
```

--------------------------------

### Install and Configure FastEmbed for Mastra Memory Embedder

Source: https://mastra.ai/en/docs/memory/semantic-recall

Shows how to install the `@mastra/fastembed` package and configure it as the embedder for Mastra Agent's memory. FastEmbed is a local embedding model. This example imports `Memory` and `Agent` from their respective Mastra packages and `fastembed` from `@mastra/fastembed`.

```bash
npm install @mastra/fastembed
pnpm add @mastra/fastembed
yarn add @mastra/fastembed
bun add @mastra/fastembed
```

```typescript
import { Memory } from "@mastra/memory";
import { Agent } from "@mastra/core/agent";
import { fastembed } from "@mastra/fastembed";

const agent = new Agent({
  memory: new Memory({
    // ... other memory options
    embedder: fastembed,
  }),
});
```

--------------------------------

### Initialize and Start MCP Server (JavaScript)

Source: https://mastra.ai/ja/docs/workflows/using-with-agents-and-tools

This JavaScript code snippet shows how to instantiate an MCPServer and start it. It is an asynchronous function that likely handles server initialization and listening for connections. No specific input parameters are detailed, but it implicitly relies on the MCPServer class.

```javascript
async function startServer() {
  const server = new MCPServer();
  // Server initialization and listening logic would follow here
}

```

--------------------------------

### Importing Mastra AI and OpenAI SDKs

Source: https://mastra.ai/ja/examples/agents/image-analysis

This snippet demonstrates how to import the necessary modules from the Mastra core library and the OpenAI SDK. Ensure these libraries are installed in your project.

```typescript
import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";

export default Agent({ ... });
```

--------------------------------

### Mastra CLI Build

Source: https://mastra.ai/en/docs/getting-started/project-structure

Build your Mastra project for production deployment using the `mastra build` command.

```APIDOC
## mastra build

### Description
Build your Mastra project for production deployment.

### Method
CLI Command

### Endpoint
N/A

### Parameters
N/A

### Request Example
```bash
mastra build
```

### Response
#### Success Response
Build artifacts generated for production.
```

--------------------------------

### Concurrency Control Example in Inngest

Source: https://mastra.ai/ja/examples/workflows/inngest-workflow

This code snippet demonstrates how to implement concurrency control in Inngest. It limits the number of workflow instances that can run simultaneously. The specific code is not fully provided, but it indicates the setup for concurrency limits.

```typescript
// Example structure for concurrency control (code is truncated in the provided text)
```

--------------------------------

### CLI - Project Initialization

Source: https://mastra.ai/en/reference/workflows/run-methods/watch

Commands for initializing Mastra projects.

```APIDOC
## mastra init

### Description
Initializes a new Mastra project.

### Method
CLI Command

### Endpoint
N/A

### Parameters
None

### Request Example
```bash
$ mastra init
```

### Response
#### Success Response
- **message** (string) - Confirmation message that the project was initialized.

#### Response Example
```
Mastra project initialized.
```
```

--------------------------------

### Configure Agent Memory and Storage (JavaScript)

Source: https://mastra.ai/ja/docs/deployment/deployment

This snippet illustrates the configuration of memory and storage for an agent. It shows how to instantiate 'Memory' and 'LibSQLStore' and potentially associate them with an agent. The configuration includes setting a URL for the database. This code is likely part of a larger agent initialization process.

```javascript
memory: new Memory({
}),
storage: new LibSQLStore({
  url: "file:../mastra.db" // path is relative to the .mastra/output directory
})
```

--------------------------------

### PostgreSQL Integration Example

Source: https://mastra.ai/en/docs/server-db/snapshots

This snippet demonstrates how to use snapshots with PostgreSQL. It outlines the setup and basic usage for snapshotting data within a PostgreSQL database context. No external dependencies are explicitly mentioned beyond standard PostgreSQL drivers.

```markdown
This example demonstrates how to use snapshots with PostgreSQL.
```

--------------------------------

### Start Inngest Dev Server with Docker

Source: https://mastra.ai/en/docs/workflows/inngest-workflow

This command starts the Inngest Dev Server using Docker. It ensures the server runs in a detached mode, maps the necessary port, and automatically removes the container when it exits. This is part of the local workflow setup for Mastra.

```bash
docker run --rm -p 8288:8288
```

--------------------------------

### Configure API Key

Source: https://mastra.ai/ja/docs/frameworks/web-frameworks/sveltekit

This section details how to set up an API key. It includes a heading and a placeholder for further configuration details.

```html
<h2>APIキーを設定する</h2>
```

--------------------------------

### HTML GitHub Link Display

Source: https://mastra.ai/en/examples/evals/summarization

Displays a link to an example on GitHub, with associated SVG icons for visual cues. This snippet is typically rendered within a web application to guide users to relevant examples.

```html
<a target="_blank" rel="noopener noreferrer" class="flex w-full flex-row justify-between p-3 border border-gray-300 dark:border-[#404040] rounded-md cursor-pointer group text-zinc-900 dark:text-zinc-50 mt-16" href="https://github.com/mastra-ai/mastra/blob/main/examples/basics/evals/summarization">
  <div class="flex flex-row gap-3">
    <div class="border border-transparent rounded-full mt-[2px]">
      <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" class="w-[18px] h-[18px] text-inherit">
        <g clipPath="url(#clip0_872_3147)">
          <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_872_3147">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="pr-8 leading-6 group-hover:underline">
      View Example on GitHub 
      (outdated)
    </div>
  </div>
  <div class="flex-shrink-0 mt-[4px]">
    <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style="color:currentcolor">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"/>
    </svg>
  </div>
</a>
```

--------------------------------

### Initialize Mastra Project with Specific Components (Bash)

Source: https://mastra.ai/en/reference/cli/init

Initializes a Mastra project and includes a comma-separated list of specified components like agents, tools, and workflows.

```bash
mastra init --components agents,tools,workflows
```

--------------------------------

### Deploying MCPServer Example | Agents

Source: https://mastra.ai/en/examples/memory/working-memory-template

Provides an example of setting up, building, and deploying a Mastra MCPServer using the stdio transport and publishing to NPM. This likely involves Node.js and potentially shell scripting.

```javascript
// Example setup for MCPServer deployment
// This would typically involve Node.js scripts for build and publish
console.log('Setting up MCPServer deployment...');
// ... deployment scripts ...

// Example of publishing to NPM (conceptual)
// const publishToNpm = async () => {
//   console.log('Publishing MCPServer to NPM...');
//   // ... npm publish command ...
// };
```

```bash
# Example shell commands for building and deploying MCPServer

echo "Building MCPServer..."
# npm run build

echo "Deploying MCPServer..."
# npm publish
```

--------------------------------

### CloudExporter Usage Example

Source: https://mastra.ai/en/reference/observability/ai-tracing/exporters/cloud-exporter

Provides examples of how to instantiate and configure the CloudExporter.

```APIDOC
## Usage

```javascript
import { CloudExporter } from '@mastra/core/ai-tracing';

// Uses environment variable for token
const exporter = new CloudExporter();

// Explicit configuration
const customExporter = new CloudExporter({
  accessToken: 'your-token',
  maxBatchSize: 500,
  maxBatchWaitMs: 2000
});
```
```

--------------------------------

### voice.addInstructions()

Source: https://mastra.ai/en/docs/deployment/serverless-platforms

Adds instructions to guide the voice model's behavior or responses. This is useful for setting context, defining personas, or providing specific directives.

```APIDOC
## POST /en/reference/voice/voice.addInstructions

### Description
Adds instructions to guide the voice model's behavior.

### Method
POST

### Endpoint
/en/reference/voice/voice.addInstructions

### Parameters
#### Request Body
- **instructions** (string) - Required - The instructions to provide to the voice model.
- **connection_id** (string) - Optional - The ID of the connection to associate these instructions with. If not provided, instructions may apply globally or to the current session.

### Request Example
```json
{
  "instructions": "Always respond in a polite and helpful manner. If you don't know the answer, say so.",
  "connection_id": "conn_12345abcde"
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation that instructions have been added.

#### Response Example
```json
{
  "status": "instructions_added"
}
```
```

--------------------------------

### LibSQL Storage Usage Example - JavaScript

Source: https://mastra.ai/en/reference/storage/libsql

An example showcasing the basic usage of the LibSQL storage. This code initializes the storage and demonstrates creating and retrieving data. It assumes the availability of the LibSQL library and Mastra's storage interfaces.

```javascript
import { LibSQLStorage } from '@mastra/storage-libsql';

async function example() {
  const storage = new LibSQLStorage({
    url: 'file:mastra.db',
    // Other options...
  });

  await storage.set('myKey', 'myValue');
  const value = await storage.get('myKey');
  console.log(value);
}
```

--------------------------------

### Mastra Guides

Source: https://mastra.ai/en/reference/agents/getInstructions

This section provides guides on building and understanding Mastra AI agents, tools, and workflows.

```APIDOC
## Mastra Guides Overview

### Description
Provides an overview of the available guides for building with Mastra.

### Method
GET

### Endpoint
/en/guides

## Guide: Agents: Chef Michel

### Description
Guide on creating a Chef Assistant agent in Mastra to help users cook meals with available ingredients.

### Method
GET

### Endpoint
/en/guides/guide/chef-michel

## Guide: Tools: Stock Agent

### Description
Guide on creating a simple stock agent in Mastra to fetch the last day's closing stock price for a given symbol.

### Method
GET

### Endpoint
/en/guides/guide/stock-agent

## Guide: Workflows: AI Recruiter

### Description
Guide on building a recruiter workflow in Mastra to gather and process candidate information using LLMs.

### Method
GET

### Endpoint
/en/guides/guide/ai-recruiter

## Guide: RAG: Research Assistant

### Description
Guide on creating an AI research assistant that can analyze and answer questions about academic papers using RAG.

### Method
GET

### Endpoint
/en/guides/guide/research-assistant

## Guide: MCP Server: Notes MCP Server

### Description
A step-by-step guide to creating a fully-featured MCP (Model Context Protocol) server for managing notes using the Mastra framework.

### Method
GET

### Endpoint
/en/guides/guide/notes-mcp-server
```

--------------------------------

### TextualDifferenceMetric Example Usage in JavaScript

Source: https://mastra.ai/en/examples/evals/textual-difference

Demonstrates the usage of the TextualDifferenceMetric to compare two texts. The example includes defining the texts to compare and then using the metric to get a similarity score. The output indicates identical texts.

```javascript
import { TextualDifferenceMetric } from "@mastra/evals/nlp";

const metric = new TextualDifferenceMetric();

const query = "This is the first text.";
const expected = "This is the first text.";

const result = await metric.compare(query, expected);

console.log(result);
```

--------------------------------

### CLI - create-mastra

Source: https://mastra.ai/en/reference/voice/speechify

Creates a new Mastra project with interactive setup options.

```APIDOC
## CLI - create-mastra

### Description
Creates a new Mastra project with interactive setup options.

### Method
CLI Command

### Endpoint
`create-mastra`

### Parameters
#### Command Options
(This command is interactive and may prompt for user input.)

### Request Example
```bash
npx create-mastra
```

### Response
#### Success Response
- **Project Creation** - A new Mastra project directory is created with initial configuration files.

#### Response Example
(Output will vary based on user input during the interactive setup.)
```

--------------------------------

### Basic LanceStorage Usage Example

Source: https://mastra.ai/en/reference/storage/lance

This JavaScript code demonstrates the basic usage of LanceStorage. It shows how to import the LanceStorage class and initialize it for storing data. Ensure the @mastra/lance package is installed.

```javascript
import { LanceStorage } from "@mastra/lance";

const storage = new LanceStorage();

// Example usage:
// await storage.set('myKey', 'myValue');
// const value = await storage.get('myKey');
// console.log(value);
```

--------------------------------

### Initialize Assistant UI Project

Source: https://mastra.ai/en/docs/frameworks/agentic-uis/assistant-ui

This command is used to create a new Assistant UI project. It's a crucial step for setting up the frontend to connect with the running Mastra server.

```bash
npx create-assistant-ui
```

--------------------------------

### Mixed Position Context Position Metric Example (TypeScript)

Source: https://mastra.ai/ja/examples/evals/context-position

This TypeScript example showcases the ContextPositionMetric with a mixed context. While the response answers the query, the context includes less relevant information, potentially affecting the positional accuracy score. This setup highlights how the metric handles scenarios where key information is not at the beginning of the context.

```typescript
import { openai } from "@ai-sdk/openai";
import { ContextPositionMetric } from "@mastra/evals/llm";

const metric = new ContextPositionMetric(openai("gpt-4o-mini"), {
 context: [
 "Elephants are herbivores.",
 "Adult elephants can weigh up to 13,000 pounds.",
 "Elephants are the largest l
```

--------------------------------

### Notes MCP Server Guide

Source: https://mastra.ai/en/reference/observability/otel-tracing/providers

A step-by-step guide to creating a fully-featured MCP (Model Context Protocol) server for managing notes using the Mastra framework.

```APIDOC
## Building a Notes MCP Server

### Description
This guide provides a comprehensive walkthrough for setting up and running an MCP server specifically designed for notes management within the Mastra ecosystem. It covers essential configurations and operational aspects.

### Endpoint
N/A (This is a guide, not a specific API endpoint)

### Usage
Follow the steps outlined in the guide to implement the Notes MCP server functionality.
```

--------------------------------

### Install Mastra Core Dependencies (bun)

Source: https://mastra.ai/en/examples/observability/basic-ai-tracing

Installs the Mastra core library using bun. Bun is a newer, fast JavaScript runtime and toolkit that can also manage dependencies.

```bash
bun add @mastra/core
```

--------------------------------

### JavaScript: Get, Create, and Start Mastra AI Workflow

Source: https://mastra.ai/ja/docs/workflows-legacy/suspend-and-resume

This JavaScript snippet demonstrates how to retrieve a workflow, create a new run for it, and then start the workflow execution using the Mastra AI library. It assumes the existence of a `mastra` object with methods `legacy_getWorkflow` and `createRun`. The workflow is identified by its name, and the start function is called with an empty object.

```javascript
// Get the workflow
const workflow = mastra.legacy_getWorkflow("approval-workflow");

// Create a run
const run = workflow.createRun();

// Start the workflow
const initialResult = await run.start({});
```

--------------------------------

### Run.start() Method

Source: https://mastra.ai/en/docs/server-db/storage

Documentation for the Run.start() method, which starts a workflow run with input data.

```APIDOC
## Run.start()

### Description
Starts a workflow run with input data.

### Method
N/A (This describes a method within a workflow run)

### Endpoint
N/A (This describes a method within a workflow run)

### Parameters
N/A (This describes a method within a workflow run)

### Request Example
N/A

### Response
#### Success Response (N/A)
N/A

#### Response Example
N/A
```

--------------------------------

### Workflow Start Function (Legacy)

Source: https://mastra.ai/en/reference/legacyWorkflows/start

Details on how to use the `start()` function to initiate a workflow run, including its parameters, return values, and error handling.

```APIDOC
## start()

### Description
The `start` function begins execution of a workflow run. It processes all steps in the defined workflow order, handling parallel execution, branching logic, and step dependencies.

### Method
POST

### Endpoint
`/workflows/{workflowId}/runs` (Hypothetical, based on common REST patterns for starting resources)

### Parameters
#### Path Parameters
- **workflowId** (string) - Required - The unique identifier for the workflow to be started.

#### Query Parameters
None

#### Request Body
- **config** (object) - Optional - Configuration for starting the workflow run.
  - **triggerData** (Record<string, any>) - Required - Initial data that matches the workflow's triggerSchema.

### Request Example
```json
{
  "config": {
    "triggerData": {
      "inputValue": 42
    }
  }
}
```

### Response
#### Success Response (200)
- **runId** (string) - The unique identifier for the initiated workflow run.
- **results** (Record<string, any>) - Combined output from all completed workflow steps.
- **status** (string) - Final status of the workflow run ('completed', 'error', 'suspended').

#### Response Example
```json
{
  "runId": "run_abc123",
  "results": {
    "step1_output": "some data",
    "step2_output": 100
  },
  "status": "completed"
}
```

## Error Handling
The start function may throw several types of validation errors:

```typescript
try {
  const result = await start({ triggerData: data });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.type); // 'circular_dependency' | 'no_terminal_path' | 'unreachable_step'
    console.log(error.details);
  }
}
```
```

--------------------------------

### Agent Methods

Source: https://mastra.ai/en/docs/mastra-cloud/setting-up

Documentation for methods related to Mastra agents.

```APIDOC
## Agent.getDefaultGenerateOptions()

### Description
Retrieves the default options for generating content with Mastra agents.

### Method
GET (assumed based on `getDefault`)

### Endpoint
/en/reference/agents/getDefaultGenerateOptions

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **options** (object) - The default generation options.

#### Response Example
```json
{
  "options": {
    "temperature": 0.7,
    "max_tokens": 1000
  }
}
```
```

```APIDOC
## Agent.getDefaultStreamOptions()

### Description
Retrieves the default options for streaming content with Mastra agents.

### Method
GET (assumed based on `getDefault`)

### Endpoint
/en/reference/agents/getDefaultStreamOptions

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **options** (object) - The default stream options.

#### Response Example
```json
{
  "options": {
    "stream": true,
    "on_token": "callback_function"
  }
}
```
```

--------------------------------

### Package Management: Install @ai-sdk/react with bun

Source: https://mastra.ai/ja/docs/frameworks/ai-sdk

This command uses the bun package manager to add the '@ai-sdk/react' library to your project dependencies. Bun is a fast JavaScript runtime and package manager.

```shell
bun add @ai-sdk/react

```

--------------------------------

### Voice Off API

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the off() method available in voice providers, which removes event listeners for voice events.

```APIDOC
## POST /en/reference/voice/voice.off

### Description
Removes event listeners for voice events.

### Method
POST

### Endpoint
/en/reference/voice/voice.off

### Parameters
#### Request Body
- **event** (string) - Required - The name of the event to remove the listener from.
- **listener** (function) - Required - The specific listener function to remove.

### Request Example
```json
{
  "event": "onMessage",
  "listener": "(message) => console.log(message)"
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "unregistered"
}
```
```

--------------------------------

### Initialize Mastra Project without Example Code (Bash)

Source: https://mastra.ai/en/reference/cli/init

Initializes a Mastra project and explicitly excludes example code.

```bash
mastra init --no-example
```

--------------------------------

### Voice Events API

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for events emitted by voice providers, particularly for real-time voice interactions.

```APIDOC
## GET /en/reference/voice/voice.events

### Description
Provides information about events emitted by voice providers for real-time voice interactions.

### Method
GET

### Endpoint
/en/reference/voice/voice.events

### Response
#### Success Response (200)
- **events** (array) - A list of available voice events.
  - **name** (string) - The name of the event.
  - **description** (string) - A description of the event.

#### Response Example
```json
{
  "events": [
    {
      "name": "onMessage",
      "description": "Fired when a new message is received."
    },
    {
      "name": "onStatusUpdate",
      "description": "Fired when the status of the voice connection changes."
    }
  ]
}
```
```

--------------------------------

### Voice On API

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the on() method available in voice providers, which registers event listeners for voice events.

```APIDOC
## POST /en/reference/voice/voice.on

### Description
Registers event listeners for voice events.

### Method
POST

### Endpoint
/en/reference/voice/voice.on

### Parameters
#### Request Body
- **event** (string) - Required - The name of the event to listen for.
- **listener** (function) - Required - The callback function to execute when the event is triggered.

### Request Example
```json
{
  "event": "onMessage",
  "listener": "(message) => console.log(message)"
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "registered"
}
```
```

--------------------------------

### Environment Variables Setup (.env)

Source: https://mastra.ai/en/examples/rag/rerank/rerank

This snippet shows the necessary environment variables for setting up the system. It's crucial for configuring API keys, database connections, and other parameters required by Mastra, OpenAI, and PGVector.

```env
OPENAI_API_KEY=your_openai_api_key
PGVECTOR_URL=postgresql://user:password@host:port/database
```

--------------------------------

### Basic Setup for Default Exporter with LibSQLStore

Source: https://mastra.ai/en/docs/observability/ai-tracing/exporters/default

This snippet demonstrates the basic setup for the DefaultExporter using a LibSQLStore as the storage backend. It initializes Mastra with the storage configuration and enables observability, explicitly including the DefaultExporter. This setup is useful for local development and debugging.

```typescript
import { Mastra } from "@mastra/core";
import { DefaultExporter } from "@mastra/core/ai-tracing";
import { LibSQLStore } from "@mastra/libsql";

export const mastra = new Mastra({
  storage: new LibSQLStore({
    url: "file:./mastra.db",  // Required for trace persistence
  }),
  observability: {
    configs: {
      local: {
        serviceName: 'my-service',
        exporters: [
          new DefaultExporter(),
        ],
      },
    },
  },
});
```

--------------------------------

### Import Mastra Core and Example City Agent - TypeScript

Source: https://mastra.ai/ja/examples/workflows/calling-agent

This snippet demonstrates how to import the main Mastra class from the core package and an example city agent from a local file. It assumes the Mastra core is installed as a dependency.

```typescript
import { Mastra } from "@mastra/core/mastra";
import { cityAgent } from "./agents/example-city-agent";

export const mastra = Mastra;
export const exampleCityAgent = cityAgent;
```

--------------------------------

### Reference API

Source: https://mastra.ai/en/examples/deployment

Access the API reference documentation for Mastra.

```APIDOC
## API Reference

### Description
This section provides access to the comprehensive API reference documentation for Mastra.

### Endpoints

#### GET /reference

##### Description
Retrieves an overview of the API reference.

##### Method
GET

##### Endpoint
`/reference`

##### Response
*   **referenceData** (object) - An object containing reference information, potentially categorized.

##### Response Example
```json
{
  "referenceData": {
    "index": {"title": "Overview"},
    "core": {"title": "Core"},
    "cli": {"title": "CLI"},
    "agents": {"title": "Agents"},
    "workflows": {"title": "Workflows"}
    // ... other reference categories
  }
}
```

#### GET /reference/{category}/{topic}

##### Description
Retrieves detailed documentation for a specific API reference topic within a category.

##### Method
GET

##### Endpoint
`/reference/{category}/{topic}`

##### Parameters
*   **Path Parameters**
    *   **category** (string) - Required - The category of the reference topic (e.g., 'core', 'agents').
    *   **topic** (string) - Required - The specific topic within the category (e.g., 'mastra-class', 'getAgent').

##### Response
*   **referenceEntry** (object) - An object containing the detailed documentation for the requested topic.

##### Response Example
```json
{
  "referenceEntry": {
    "frontMatter": {
      "title": "Reference: Mastra Class | Core | Mastra Docs",
      "description": "Documentation for the `Mastra` class in Mastra, the core entry point for managing agents, workflows, MCP servers, and server endpoints.",
      "filePath": "src/content/en/reference/core/mastra-class.mdx"
    },
    "title": "Mastra"
  }
}
```
```

--------------------------------

### Guide: MCP Server for Notes

Source: https://mastra.ai/en/examples/memory/memory-processors

A step-by-step guide to creating a fully-featured MCP (Model Context Protocol) server for managing notes using the Mastra framework.

```APIDOC
## Guide: MCP Server for Notes

### Description
This guide provides a comprehensive walkthrough on setting up an MCP server specifically designed for managing notes within the Mastra ecosystem. It covers the necessary steps, configurations, and best practices to implement a robust notes management system using the Model Context Protocol.

### Key Concepts

- **MCP Server**: A server that implements the Model Context Protocol for managing data contexts.
- **Mastra Framework**: The underlying framework providing the tools and structure for building the MCP server.
- **Notes Management**: Functionality to create, read, update, and delete notes.

### Steps

1.  **Project Setup**: Initialize a new Mastra project or integrate into an existing one.
2.  **MCP Server Configuration**: Define and configure the MCP server using Mastra's tools.
3.  **Notes Data Model**: Implement the data structure for notes.
4.  **API Endpoints**: Create endpoints for note-related operations (CRUD).
5.  **Integration**: Connect the MCP server with other Mastra components.

### Example Usage (Conceptual)

```javascript
// Assuming an MCP server is set up for notes
import { Mastra } from '@mastra/core';

const mastra = new Mastra();
const notesServer = await mastra.getMCPServer('notes-server'); // Assuming 'notes-server' is configured

// Create a new note
const newNote = await notesServer.createNote({
  title: 'Meeting Minutes',
  content: 'Discussed project roadmap...' 
});

// Get a note by ID
const note = await notesServer.getNote(newNote.id);
console.log(note);

// Update a note
await notesServer.updateNote(note.id, { content: 'Updated meeting minutes...' });

// Delete a note
await notesServer.deleteNote(note.id);
```
```

--------------------------------

### Express.js Server Setup and GET Route

Source: https://mastra.ai/ja/docs/frameworks/servers/express

This snippet demonstrates how to create an Express.js server, define a port, and handle a GET request for the root path. It includes setting up the server to listen on a specified port and defining a callback function for the route handler. No external dependencies are required beyond the Express.js library.

```javascript
const express = require('express');
const app = express();

const port = 3456;

app.get('/', (req, res) => {
  res.send('Hello from Mastra AI!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

--------------------------------

### CLI - mastra start

Source: https://mastra.ai/en/reference/scorers/create-scorer

Starts your built Mastra application using the mastra start command.

```APIDOC
## mastra start

### Description
Starts your built Mastra application.

### Method
CLI command

### Endpoint
(Not applicable for CLI commands)

### Parameters
(None specified)

### Request Example
```bash
mastra start
```

### Response
(Application status and logs, no specific response structure defined)
```

--------------------------------

### Retrieve Instructions

Source: https://mastra.ai/en/reference/workflows/workflow-methods/sleep

Gets the instructions that guide the agent's behavior. This is useful for understanding the agent's operational guidelines and constraints.

```APIDOC
## GET /api/agents/{agentId}/instructions

### Description
Retrieves the instructions that guide the agent's behavior.

### Method
GET

### Endpoint
/api/agents/{agentId}/instructions

### Parameters
#### Path Parameters
- **agentId** (string) - Required - The unique identifier of the agent.

### Response
#### Success Response (200)
- **instructions** (string) - The instructions for the agent.

#### Response Example
```json
{
  "instructions": "Always respond in a helpful and harmless manner. Prioritize user safety."
}
```
```

--------------------------------

### Agent.getInstructions()

Source: https://mastra.ai/en/reference/deployer/cloudflare

Retrieves the instructions that guide the agent's behavior.

```APIDOC
## Agent.getInstructions()

### Description
This method retrieves the set of instructions that govern the agent's decision-making process and overall behavior. These instructions define how the agent should operate.

### Method
(Not specified in the provided text, likely a method call within the Mastra Agent framework)

### Endpoint
(Not applicable, this is a method call within the agent object)

### Parameters
(No parameters specified in the provided text)

### Request Example
(Not applicable for a method call within an object)

### Response
- **instructions** (String) - The agent's guiding instructions.
```

--------------------------------

### AI SDK v5 Integration Example in Python

Source: https://mastra.ai/en/reference/workflows/step

This example shows how to integrate with AI SDK v5 using Mastra. It outlines the necessary steps to leverage the features and capabilities provided by this SDK version.

```python
from mastra.sdk import AI_SDK_V5

# Assume ai_sdk_v5 is an initialized instance of AI_SDK_V5
# Example usage:
# result = ai_sdk_v5.some_function()
print("AI SDK v5 integration example placeholder.")
```

--------------------------------

### Initialize MCPClient in JavaScript

Source: https://mastra.ai/en/examples/agents/deploying-mcp-server

This snippet demonstrates how to import and initialize the MCPClient from the '@mastra/mcp' package. It shows the basic structure for setting up a new MCPClient instance, including configuring server names and commands. Ensure the '@mastra/mcp' package is installed.

```javascript
import { MCPClient } from "@mastra/mcp";

const mcp = new MCPClient({
  servers: {
    // Give this MCP server instance a name
    yourServerName: {
      command: "",
      args: []
    }
  }
});
```

--------------------------------

### Get Stdio Transport

Source: https://mastra.ai/en/reference/tools/mcp-server

Retrieves the stdio communication transport object if the server was started with `startStdio()`. Primarily for internal checks and testing.

```typescript
getStdioTransport(): StdioServerTransport | undefined
```

--------------------------------

### Install Mastra Packages (bun)

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/vite-react

Installs the necessary Mastra packages using bun. This command ensures you have the latest versions of the core Mastra library, its SQL client, and the JavaScript client SDK.

```bash
bun add mastra@latest @mastra/core@latest @mastra/libsql@latest @mastra/client-js@latest
```

--------------------------------

### Workflow .start() Method

Source: https://mastra.ai/en/examples/deployment/deploying-mastra-server

Documentation for the start() method in workflows, which begins execution of a workflow run.

```APIDOC
## Workflow.start()

### Description
Documentation for the `start()` method in workflows, which begins execution of a workflow run.

### Method
Not specified (likely a method within a workflow definition)

### Endpoint
Not specified (likely a method within a workflow definition)

### Parameters
None specified.

### Request Example
```json
{
  "example": "Workflow definition snippet demonstrating start() usage"
}
```

### Response
None specified.

#### Response Example
```json
{
  "example": "Workflow execution result"
}
```
```

--------------------------------

### Get All MCP Servers

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves all registered MCP server instances.

```APIDOC
## GET /api/mcp/servers

### Description
Retrieves all registered MCP server instances.

### Method
GET

### Endpoint
`/api/mcp/servers`

### Response
#### Success Response (200)
- **mcpServers** (array) - An array of MCP server objects.
  - Each object contains:
    - **id** (string) - The server's unique identifier.
    - **version** (string) - The server's version.
    - **status** (string) - The current status of the server.

#### Response Example
```json
{
  "mcpServers": [
    {
      "id": "mcp-server-001",
      "version": "1.2.0",
      "status": "running"
    },
    {
      "id": "mcp-server-002",
      "version": "1.1.5",
      "status": "stopped"
    }
  ]
}
```
```

--------------------------------

### Node.js: Define Application Route and Listen

Source: https://mastra.ai/en/docs/frameworks/servers/express

This snippet demonstrates how to define a GET route for the application and start a server to listen on a specified port. It utilizes common Node.js patterns for server creation and event handling. The output includes the server's running URL.

```javascript
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

--------------------------------

### Get Memory

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves the configured memory instance for the Mastra instance.

```APIDOC
## GET /api/memory

### Description
Retrieves the configured memory instance.

### Method
GET

### Endpoint
`/api/memory`

### Response
#### Success Response (200)
- **memory** (object) - An object representing the memory configuration.
  - **type** (string) - The type of memory storage (e.g., 'redis', 'local').
  - **config** (object) - Configuration details for the memory.

#### Response Example
```json
{
  "memory": {
    "type": "redis",
    "config": {
      "host": "localhost",
      "port": 6379
    }
  }
}
```
```

--------------------------------

### Migration Guide

Source: https://mastra.ai/en/docs/server-db/mastra-client

Guidance for migrating from VNext to Standard APIs.

```APIDOC
## Migration Guide: VNext to Standard APIs

### Description
This guide provides instructions on how to migrate from the VNext API structure to the Standard Mastra APIs.

### Method
N/A (Documentation)

### Endpoint
/en/reference/agents/migration-guide

### Parameters
None

### Request Example
None

### Response
None

```

--------------------------------

### Get Agent By ID

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves a specific agent by its unique identifier.

```APIDOC
## GET /api/agents/{agentId}

### Description
Retrieves an agent by its ID.

### Method
GET

### Endpoint
`/api/agents/{agentId}`

### Parameters
#### Path Parameters
- **agentId** (string) - Required - The unique identifier of the agent to retrieve.

### Response
#### Success Response (200)
- **agent** (object) - An object containing the agent's details.
  - **id** (string) - The agent's unique identifier.
  - **name** (string) - The name of the agent.
  - **details** (string) - A description of the agent.

#### Response Example
```json
{
  "agent": {
    "id": "agent-123",
    "name": "Example Agent",
    "details": "This is a sample agent."
  }
}
```
```

--------------------------------

### Google Gemini Live Voice Provider

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the GeminiLiveVoice class, providing real-time voice interaction capabilities powered by Google Gemini models.

```APIDOC
## Google Gemini Live Voice Provider

### Description
Provides real-time voice interaction capabilities using the GeminiLiveVoice class, powered by Google Gemini models. Enables live, conversational voice experiences.

### Endpoint
(Likely involves WebSocket or similar real-time communication protocols)

### Features
- Real-time voice interaction
- Powered by Google Gemini
- Conversational AI

### Integration
Requires appropriate Google Cloud setup and API access for Gemini models.
```

--------------------------------

### Usage Example for @mastra/deployer-cloudflare

Source: https://mastra.ai/en/docs/deployment/serverless-platforms/cloudflare-deployer

This snippet demonstrates a typical usage scenario for the @mastra/deployer-cloudflare package. The example illustrates how to set up and deploy using the package's functionalities. Specific inputs and outputs will depend on the configuration within the `src/mastra/index.ts` file.

```typescript
import deployer from "@mastra/deployer-cloudflare";

// Example usage (details depend on the actual implementation in index.ts)
deployer({
  // configuration options
});

```

--------------------------------

### Deploying MCPServer with stdio Transport

Source: https://mastra.ai/en/models/providers/inference

Example detailing the process of setting up, building, and deploying a Mastra MCPServer. It specifically covers using the stdio transport and publishing the server to NPM.

```markdown
Example: Deploying an MCPServer | Agents | Mastra Docs
Example of setting up, building, and deploying a Mastra MCPServer using the stdio transport and publishing it to NPM.
```

--------------------------------

### Install Cursor Client

Source: https://mastra.ai/en/docs/getting-started/mcp-docs-server

This snippet provides a deep link to install the Cursor client with specific configurations for the Mastra MCP server. Clicking this link will initiate the installation process through the Cursor application.

```deeplink
cursor://anysphere.cursor-deeplink/mcp/install?name=mastra&config=eyJjb21tYW5kIjoibnB4IC15IEBtYXN0cmEvbWNwLWRvY3Mtc2VydmVyIn0%3D
```

--------------------------------

### Define AI Model with Direct Provider Installation (JavaScript)

Source: https://mastra.ai/en/models/providers/xai

This JavaScript code defines an AI model named 'complex' using the 'runtimeContext.task' and a direct provider installation. It specifies the model identifier 'xai/grok-vision-beta'. This setup is an alternative to using the Mastra model router string.

```javascript
const useAdvanced = runtimeContext.task === "complex" ? "xai/grok-vision-beta" : "complex";
 return useAdvanced;
 ?
```

--------------------------------

### Install HTTP/Protobuf Exporter for SigNoz

Source: https://mastra.ai/en/docs/observability/ai-tracing/exporters/otel

If you encounter an error indicating the HTTP/Protobuf exporter is missing, this command installs the required package for providers like SigNoz.

```bash
npm install @opentelemetry/exporter-trace-otlp-proto
```

--------------------------------

### Add Core Mastra and Zod Dependencies with Yarn

Source: https://mastra.ai/en/docs/getting-started/installation

Command to add the core Mastra package, Zod for schema validation, and the AI SDK for OpenAI as project dependencies using Yarn. This command installs runtime dependencies required for the application.

```shell
yarn add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
```

--------------------------------

### Initialize Application Chunks in JavaScript

Source: https://mastra.ai/en/docs/getting-started/installation

This snippet outlines the initialization of application chunks for a web application, likely part of a framework like Next.js. It references specific JavaScript files for loading.

```javascript
b0:I[81935,["545","static/chunks/c16f53c3-586ea805d2f7b835.js","229","static/chunks/9da6db1e-a1367718ac556dd6.js","426","static/chunks/426-1614104dc6affda7.js","586","static/chunks/586-3f1a21b05cd70225.js","277","static/chunks/277-e66779fed56594fc.js","275","static/chunks/275-26c1e27e4337fd51.js","450","static/chunks/app/%5Blocale%5D/layout-cf2e0016ecb6c1cc.js"],"CustomHead"]
b2:I[68955,["545","static/chunks/c16f53c3-586ea805d2f7b835.js","229",
```

--------------------------------

### Mastra Client SDK Setup (JavaScript)

Source: https://mastra.ai/ja/docs/auth/jwt

This snippet demonstrates how to import and instantiate the MastraClient from the @mastra/client-js package. It assumes a base URL is provided during instantiation. Ensure the @mastra/client-js package is installed as a dependency.

```javascript
import { MastraClient } from "@mastra/client-js";

export const mastraClient = new MastraClient({
  baseUrl: "YOUR_MASTRA_API_BASE_URL",
  // Other configuration options can be added here
});
```

--------------------------------

### MastraJwtAuth Usage Example

Source: https://mastra.ai/en/docs/auth/jwt

This JavaScript code snippet demonstrates how to use the MastraJwtAuth class for authentication. It assumes the @mastra/auth package has been installed and configured.

```javascript
const mastraJwtAuth = new MastraJwtAuth();

// Example usage within a request handler:
app.use(async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = mastraJwtAuth.verify(token);
      req.user = decoded.user; // Attach user info to request
      next();
    } catch (error) {
      res.status(401).send('Invalid token');
    }
  } else {
    next(); // Or handle unauthenticated requests
  }
});

```

--------------------------------

### CLI - mastra start

Source: https://mastra.ai/en/docs/agents/runtime-context

Starts your built Mastra application.

```APIDOC
## CLI Command: mastra start

### Description
Starts your built Mastra application.

### Usage
```bash
mastra start
```

### Details
This command runs the production-ready Mastra application that has been previously built.
```

--------------------------------

### Agent Get Description API

Source: https://mastra.ai/en/examples/workflows/agent-as-step

Documentation for the `Agent.getDescription()` method in Mastra agents, which retrieves the agent's description.

```APIDOC
## GET /api/agents/getDescription

### Description
Retrieves the agent's description.

### Method
GET

### Endpoint
/api/agents/getDescription

### Parameters
No parameters required.

### Request Example
```
GET /api/agents/getDescription
```

### Response
#### Success Response (200)
- **description** (string) - The description of the agent.

#### Response Example
```json
{
  "description": "An AI assistant designed to help with text-based tasks."
}
```
```

--------------------------------

### Voice Close API

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the close() method available in voice providers, which disconnects from real-time voice services.

```APIDOC
## POST /en/reference/voice/voice.close

### Description
Disconnects from real-time voice services.

### Method
POST

### Endpoint
/en/reference/voice/voice.close

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "closed"
}
```
```

--------------------------------

### Cloudflare Deployer Example Usage

Source: https://mastra.ai/ja/reference/deployer/cloudflare

This section provides an example of how to use the CloudflareDeployer. It shows the necessary code structure for setting up and initiating a deployment to Cloudflare Workers, including the 'kvNamespaces' binding.

```javascript
self.__next_f.push([
  1,
  "5:[\"$\",\"$d\",null,{\"fallback\":[\"$\",\"div\",null,{\"children\":\"Loading...\"}]},\"children\":[\"$\",\"div\",null,{\"className\":\"x:mx-auto x:flex x:max-w-(--nextra-content-width)\",\"children\":[\"$\",\"$L10\",null,{\"value\":[{\"value\":\"使用例\",\"id\":\"使用例\",\"depth\":2},{\"value\":\"パラメーター\",\"id\":\"パラメーター\",\"depth\":2}],\"children\":[[\"$\",\"$L11\",null,{}], [\"$\",\"$L12\",null,{\"metadata\":{\"title\":\"Cloudflare Deployer\",\"description\":\"CloudflareDeployerクラスのドキュメント。MastraアプリケーションをCloudflare Workersにデプロイします。\",\"filePath\":\"src/content/ja/reference/deployer/cloudflare.mdx\"},\"bottomContent\":\"$undefined\",\"sourceCode\":\"$13\",\"children\":[[\"$\",\"div\",null,{\"id\":\"nextra-skip-nav\"}], [\"$\",\"main\",null,{\"data-pagefind-body\":true,\"children\":[[\"$\",\"h1\",null,{\"id\":\"$undefined\",\"className\":\"x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-bold x:mt-2 x:text-4xl\",\"children\":[\"CloudflareDeployer\",\"$undefined\"]}]},\"\\n\",[{\"value\":\"クラスは、スタンドアロンのMastraアプリケーションをCloudflare Workersにデプロイすることを処理します。設定とデプロイメントを管理し、Cloudflare固有の機能でベースの\", [\"$\", \"$L14\", null, {\"href\":\"/reference/deployer/deployer\",\"prefetch\":\"$undefined\",\"className\":\"x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]\",\"children\":\"Deployer\"}], \"クラスを拡張します。\"}]}]}]}]}]}]
```

--------------------------------

### Direct Provider Installation Documentation Link

Source: https://mastra.ai/en/models/providers/cerebras

Provides a link to the NPM package documentation for direct provider installation. This allows using the provider as a standalone package instead of through the Mastra model router string.

```html
<a href="https://www.npmjs.com/package/@ai-sdk/cerebras" target="_blank" rel="noreferrer" className="x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:["text-underline-position:from-font"]">
  package documentation
</a>
```

--------------------------------

### MastraAuthWorkos Class Authentication

Source: https://mastra.ai/en/docs/getting-started/installation

API reference for the MastraAuthWorkos class, which authenticates Mastra applications using WorkOS authentication.

```APIDOC
## MastraAuthWorkos Class

### Description
Authenticates Mastra applications using WorkOS.

### Method
Not specified (likely part of a larger authentication flow).

### Endpoint
Not specified.

### Parameters
None explicitly defined in this snippet.

### Request Example
N/A

### Response
N/A
```

--------------------------------

### MastraAuthSupabase Usage Example

Source: https://mastra.ai/en/reference/auth/supabase

Demonstrates how to use the MastraAuthSupabase class for authentication. This example likely involves initializing the class and setting up authentication flow. No specific dependencies are mentioned, but it implies integration with a larger Mastra application structure.

```javascript
const { MastraAuthSupabase } = require('@mastra/auth');

// Example usage (assuming MastraAuthSupabase is correctly imported and configured)
// const auth = new MastraAuthSupabase({
//   supabaseUrl: 'YOUR_SUPABASE_URL',
//   supabaseKey: 'YOUR_SUPABASE_ANON_KEY',
//   // other options...
// });

// auth.authenticate(request).then(user => {
//   console.log('Authenticated user:', user);
// }).catch(error => {
//   console.error('Authentication failed:', error);
// });
```

--------------------------------

### Cloudflare Deployer Usage Example (TypeScript)

Source: https://mastra.ai/en/reference/deployer/cloudflare

This code snippet demonstrates how to instantiate and configure the CloudflareDeployer within a Mastra application. It shows the setup for project name, routing, environment variables, D1 databases, and KV namespaces.

```typescript
import { Mastra } from "@mastra/core/mastra";
import { CloudflareDeployer } from "@mastra/deployer-cloudflare";

export const mastra = new Mastra({
 // ...
 deployer: new CloudflareDeployer({
 projectName: "hello-mastra",
 routes: [
 {
 pattern: "example.com/*",
 zone_name: "example.com",
 custom_domain: true
 }
 ],
 workerNamespace: "my-namespace",
 env: {
 NODE_ENV: "production",
 API_KEY: "<api-key>"
 },
 d1Databases: [
 {
 binding: "DB",
 database_name: "my-database",
 database_id: "d1-database-id",
 preview_database_id: "your-preview-database-id"
 }
 ],
 kvNamespaces: [
 {
 binding: "CACHE",
 id: "kv-namespace-id"
 }
 ]
 });
```

--------------------------------

### Signoz Configuration Example

Source: https://mastra.ai/en/reference/observability/ai-tracing/exporters/otel

Illustrates how to configure Signoz, a tool for observability, potentially to work with Dash0. This snippet highlights the structure and potential parameters involved in setting up Signoz.

```plaintext
SignozConfig
```

--------------------------------

### Importing Libraries with dotenv and Mastra

Source: https://mastra.ai/ja/examples/agents/image-analysis

This JavaScript code snippet demonstrates how to import the 'dotenv' library for configuration and the 'mastra' library, along with its 'getRandomImage' function. Ensure these libraries are installed in your project dependencies.

```javascript
import "dotenv/config";
import { mastra } from "./mastra";
import { getRandomImage } from "./mastra";
```

--------------------------------

### Install Mastra Client SDK with bun

Source: https://mastra.ai/en/docs/server-db/mastra-client

Installs the latest version of the Mastra Client SDK using bun. This command is used for adding the SDK as a dependency in bun projects.

```bash
bun add @mastra/client-js@latest
```

--------------------------------

### Deploying MCP Server Example | Mastra Docs

Source: https://mastra.ai/en/docs/scorers/off-the-shelf-scorers

Provides instructions and code examples for deploying an MCPServer using Mastra. This is essential for managing and scaling AI agent deployments.

```javascript
import { MCPServer } from "@mastra/server";

const server = new MCPServer({
  port: 3000,
});

server.listen(() => {
  console.log("MCP Server listening on port 3000");
});
```

--------------------------------

### Install Mastra Client SDK (Package Managers)

Source: https://mastra.ai/en/docs/frameworks/agentic-uis/copilotkit

This section provides instructions for installing the Mastra Client SDK using common package managers: npm, yarn, and pnpm. Ensure you have Node.js and a package manager installed. The commands provided will add the SDK as a dependency to your project.

```bash
npm install @copilotkit/react-core
yarn add @copilotkit/react-core
pnpm install @copilotkit/react-core
```

--------------------------------

### Navigate to Project Directory

Source: https://mastra.ai/en/docs/getting-started/templates

Command to change the current directory to the newly created Mastra project folder.

```bash
cd your-project-name
```

--------------------------------

### Start Mastra Server

Source: https://mastra.ai/en/guides/guide/research-assistant

Initiates the Mastra server to expose the research assistant through an API. It is a command-line utility for local development and deployment.

```bash
masstra dev
```

--------------------------------

### Voice Provider - addInstructions() Method

Source: https://mastra.ai/en/reference/legacyWorkflows/createRun

Adds instructions to guide the voice model's behavior.

```APIDOC
## POST /voice/addInstructions

### Description
Adds instructions to guide the voice model's behavior.

### Method
POST

### Endpoint
/voice/addInstructions

### Parameters
#### Request Body
- **instructions** (string) - Required - The instructions to add.

### Request Example
```json
{
  "instructions": "Always respond in a polite and professional tone."
}
```

### Response
#### Success Response (200)
- **status** (string) - The status of the instructions being added.

#### Response Example
```json
{
  "status": "instructions_added"
}
```
```

--------------------------------

### Memory with Schema: Mastra AI LLMs Text Example

Source: https://mastra.ai/en/reference/evals/context-position

Demonstrates how to configure and use Mastra's working memory schema for structured data handling. This example typically involves defining specific schema structures to guide memory operations and ensure data consistency.

```typescript
import { ChatEngine } from 'mastra-ai-llms-txt';

// Assuming 'WorkingMemorySchema' is defined elsewhere and imported
import { WorkingMemorySchema } from './path/to/your/schema';

async function runExample() {
  const chatEngine = new ChatEngine({
    memory: {
      type: 'working_memory',
      schema: WorkingMemorySchema // Pass the defined schema here
    }
    // ... other configurations
  });

  await chatEngine.start();
  console.log('Chat engine started with working memory schema.');
  // Further interactions with the chat engine would follow...
}

runExample();
```

--------------------------------

### Initialize Mastra Project Directory

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/vite-react

This command initializes a new Mastra project in the specified directory. It is used for setting up the initial project structure.

```bash
mastra dev --dir src/mastra
```

--------------------------------

### voice.addInstructions()

Source: https://mastra.ai/en/examples/workflows/agent-as-step

This method adds instructions to guide the voice model's behavior. It allows developers to provide specific directives or constraints to influence how the voice model processes input or generates output.

```APIDOC
## voice.addInstructions()

### Description
Adds instructions to guide the voice model's behavior.

### Method
(Assumed to be a method call, typically part of an object instance)

### Endpoint
N/A (This appears to be a method within a library or SDK)

### Parameters
- **instructions** (string | Array<string>) - Required - The instructions to be added for the voice model.

### Request Example
```javascript
// Assuming voiceProvider is an instance of a voice provider class
voiceProvider.addInstructions('Respond concisely.');
// or with an array
voiceProvider.addInstructions(['Use a formal tone.', 'Avoid jargon.']);
```

### Response
#### Success Response
(No specific response details provided. Typically, such methods might return void or a confirmation.)

#### Response Example
```json
// No specific response example provided.
```
```

--------------------------------

### Initialize Memory with LibSQLStore

Source: https://mastra.ai/ja/docs/networks-vnext/complex-task-execution

This snippet demonstrates the initialization of a 'memory' constant using the 'Memory' class and instantiating 'LibSQLStore'. It suggests setting up a memory storage mechanism, possibly for caching or state management, utilizing LibSQL.

```javascript
const memory = new Memory({
  storage: new LibSQLStore()
})
```

--------------------------------

### Voice Add Tools API

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the addTools() method available in voice providers, which equips voice models with function calling capabilities.

```APIDOC
## POST /en/reference/voice/voice.addTools

### Description
Equips voice models with function calling capabilities.

### Method
POST

### Endpoint
/en/reference/voice/voice.addTools

### Parameters
#### Request Body
- **tools** (array) - Required - A list of tools (functions) to add.
  - **name** (string) - Required - The name of the tool.
  - **description** (string) - Required - A description of what the tool does.
  - **parameters** (object) - Optional - The parameters the tool accepts.

### Request Example
```json
{
  "tools": [
    {
      "name": "getCurrentWeather",
      "description": "Gets the current weather in a given location",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The city and state, e.g. San Francisco, CA"
          }
        },
        "required": ["location"]
      }
    }
  ]
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "tools_added"
}
```
```

--------------------------------

### Basic Usage Example

Source: https://mastra.ai/en/reference/observability/ai-tracing/exporters/otel

Demonstrates basic usage of the OtelExporter with the Signoz provider.

```APIDOC
## Basic Usage

### Description
Demonstrates basic usage of the OtelExporter with the Signoz provider.

### Method
Instantiation

### Endpoint
N/A

### Parameters
None

### Request Example
```javascript
import { OtelExporter } from '@mastra/otel-exporter'; 

const exporter = new OtelExporter({
  provider: {
    signoz: {
      apiKey: process.env.SIGNOZ_API_KEY,
      region: 'us',
    }
  },
});
```

### Response
#### Success Response (200)
N/A

#### Response Example
N/A
```

--------------------------------

### Import createTool from Mastra Core (JavaScript)

Source: https://mastra.ai/en/docs/getting-started/installation

This snippet demonstrates how to import the `createTool` function from the `@mastra/core/tools` module in JavaScript. This function is essential for defining and registering new tools within the Mastra AI framework. It assumes the `@mastra/core` package is installed and available.

```javascript
import { createTool } from "@mastra/core/tools";

```

--------------------------------

### Guide: Notes MCP Server

Source: https://mastra.ai/en/reference/tools/vector-query-tool

A step-by-step guide on building a Notes MCP (Model Context Protocol) server using the Mastra framework.

```APIDOC
## Guide: Building a Notes MCP Server

### Description
This guide provides a comprehensive, step-by-step walkthrough for creating a fully-featured MCP (Model Context Protocol) server designed for managing notes within the Mastra framework.

### Method
N/A (Guide content)

### Endpoint
`/en/guides/guide/notes-mcp-server`

### Parameters
N/A

### Request Example
N/A

### Response
N/A

#### Success Response (200)
Page content for the guide.

#### Response Example
N/A
```

--------------------------------

### Multiple Database Configurations Example

Source: https://mastra.ai/en/reference/tools/vector-query-tool

This example shows how to combine configurations for multiple database types within the databaseConfig object.

```typescript
const queryTool = createVectorQueryTool({
  // ... other parameters
  databaseConfig: {
    pinecone: {
      namespace: "pinecone-ns",
    },
    pgvector: {
      minScore: 0.8,
    },
    chroma: {
      where: {
        collection_name: "my-collection",
      },
    },
  },
});
```

--------------------------------

### Deploying MCP Server Example

Source: https://mastra.ai/en/reference/core/getScorers

Provides an example for deploying an MCPServer, which is likely a custom server component for Mastra's communication or processing. This covers 'Deploying an MCPServer'.

```javascript
```javascript
// This is a conceptual example. Actual deployment would involve 
// specific server frameworks (e.g., Express, Fastify) and Mastra's server setup.

import { MCP } from '@mastra/server'

const mcpServer = new MCP({
  port: 3000,
  // other configuration options
})

mcpServer.start().then(() => {
  console.log('MCP Server started on port 3000')
}).catch(err => {
  console.error('Error starting MCP Server:', err)
})
```
```

--------------------------------

### Start Workflow Run with Trigger Data in JavaScript

Source: https://mastra.ai/ja/docs/workflows/nested-workflows

This snippet demonstrates starting a workflow run with specific trigger data, including a `startValue`. It uses `await` to ensure the operation completes before proceeding. The `runId` and `results` are destructured from the returned object.

```javascript
const { runId, results } = await run.start({
  triggerData: {
    startValue: "1"
  }
});
```

--------------------------------

### Running Workflows with Mastra

Source: https://mastra.ai/en/reference/legacyWorkflows/createRun

Example for how to run workflows.

```markdown
This example provides a practical demonstration of executing workflows within the Mastra framework. It covers the fundamental steps and considerations involved in initiating and managing workflow runs, ensuring tasks are executed as defined.
```

--------------------------------

### ElevenLabs Voice Provider

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the ElevenLabs voice implementation, offering high-quality text-to-speech capabilities with multiple voice models and natural-sounding synthesis.

```APIDOC
## ElevenLabs Voice Provider

### Description
Offers high-quality text-to-speech (TTS) capabilities using ElevenLabs. Known for natural-sounding synthesis and a variety of voice models.

### Endpoint
(Specific endpoints depend on ElevenLabs' API, typically involves authentication and audio generation)

### Features
- High-quality Text-to-Speech
- Natural-sounding voices
- Variety of voice models

### Integration
Requires ElevenLabs API key for authentication.
```

--------------------------------

### JavaScript: Create and Start Mastra AI Workflow Run

Source: https://mastra.ai/en/examples/workflows_legacy/calling-agent

This code snippet demonstrates how to initiate a new run for a Mastra AI workflow. It involves calling the createRun function and then starting the workflow with specific trigger data.

```javascript
const { runId, start } = await mastra.legacy_getWorkflow("newWorkflow");
createRun();
const runResult = await start({
  triggerData: { message: ""}

```

--------------------------------

### Reference: Mastra.getServer()

Source: https://mastra.ai/en/guides/guide/stock-agent

Documentation for the `Mastra.getServer()` method, retrieving the default server configuration.

```APIDOC
## Reference: Mastra.getServer()

### Description
Retrieves the default server configuration.

### Method
`GET` (Conceptual, as this is a method of an SDK object)

### Endpoint
N/A (Method of an SDK object)

### Parameters
None

### Request Example
```javascript
const serverConfig = await mastra.getServer();
```

### Response
#### Success Response (200)
- **serverConfig** (object) - The default server configuration.

#### Response Example
```json
{
  "host": "localhost",
  "port": 8080
}
```
```

--------------------------------

### Code Scorer Example: Verifying Tool Selection and Strict Mode

Source: https://mastra.ai/ja/examples/scorers/tool-call-accuracy

Demonstrates how to use the code-based scorer to check if the correct tool is called, with options for strict mode to enforce exact tool usage. It includes setup for the scorer and running a test case.

```typescript
import { createToolCallAccuracyScorerCode as createCodeScorer } from '@mastra/evals/scorers/code';
import { createUIMessage, createToolInvocation } from '@mastra/evals/testing';
import { createAgentTestRun } from '@mastra/evals/testing';

// Example using the code-based scorer to verify tool selection.
const clarificationOutput = [
 createUIMessage({
 content: 'お手伝いできます。どのような点でお困りなのか、もう少し詳しく教えていただけますか？',
 role: 'assistant',
 id: 'output-1'
 })
];

const vagueInput = [
 createUIMessage({
 content: 'How can I help you?',
 role: 'user',
 id: 'input-1'
 })
];

const run = createAgentTestRun({
 inputMessages: vagueInput,
 output: clarificationOutput
});

// This example focuses on the code scorer's ability to check for clarification
// instead of an immediate tool call when input is vague.
// For a full example with LLM scorer, see 'LLM Based Scoring Example'.

// Assuming 'llmScorer' is defined elsewhere for demonstration purposes
// const result = await llmScorer.run(run);
// console.log(result.score); // 1.0 - Correct to ask for clarification
// console.log(result.reason); // "Agent appropriately asked for clarification instead of calling a tool with insufficient information."

```

--------------------------------

### Custom Working Memory Template Example (JavaScript)

Source: https://mastra.ai/en/docs/memory/working-memory

An example of defining a custom template for working memory. This template structures information like user profile details, preferences, and session state, guiding the agent on what information to track and update.

```javascript
const memory = new Memory({
  options: {
    workingMemory: {
      enabled: true,
      template: ` # User Profile   ## Personal Info   - Name: - Location: - Timezone:   ## Preferences   - Communication Style: [e.g., Formal, Casual] - Project Goal: - Key Deadlines:   - [Deadline 1]: [Date]   - [Deadline 2]: [Date]   ## Session State   - Last Task Discussed: - Open Questions:   - [Question 1]   - [Question 2] `,
    },
  },
});
```

--------------------------------

### Node.js Express Server Setup

Source: https://mastra.ai/ja/docs/frameworks/servers/express

This snippet shows the basic setup for an Express.js server in Node.js. It imports the express library, creates an app instance, defines a port, and sets up a GET route for the root path. It's intended for basic API creation and interaction with external services like AI models.

```javascript
import express, { Request, Response } from "express";

const app = express();
const port = 3456;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

--------------------------------

### Guides

Source: https://mastra.ai/en/examples/tools/calling-tools

Guides section provides step-by-step instructions and information on various Mastra features.

```APIDOC
## Guide: RAG: Research Assistant

### Description
Documentation related to using Retrieval-Augmented Generation (RAG) as a research assistant within the Mastra framework.

### Method
N/A

### Endpoint
N/A

### Parameters
N/A

### Request Example
N/A

### Response
N/A
```

```APIDOC
## Guide: MCP Server: Building a Notes MCP Server

### Description
A step-by-step guide to creating a fully-featured MCP (Model Context Protocol) server for managing notes using the Mastra framework.

### Method
N/A

### Endpoint
/en/guides/guide/notes-mcp-server

### Parameters
N/A

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Start Workflow and Get Result - JavaScript

Source: https://mastra.ai/ja/docs/workflows/dynamic-workflows

This snippet demonstrates starting a workflow and awaiting its result. It uses `await` to handle the asynchronous nature of the workflow execution. The `run.start()` method is called with `triggerData` and `input` from the context. Error handling for the `run.start()` call is not included.

```javascript
const result = await run.start({
  triggerData: {
    input: context.inputData,
  },
});
```

--------------------------------

### Mastra AI LLMs TXT Configuration Example

Source: https://mastra.ai/en/docs/deployment/cloud-providers

This snippet shows an example configuration for the Mastra AI LLMs TXT project, potentially related to storage and URL settings. The example indicates a default in-memory storage and suggests alternatives for persistence.

```javascript
// ...
storage: "new LibSQLStore", // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
url: ""

```

--------------------------------

### MastraAuthClerk Class

Source: https://mastra.ai/ja/docs/auth/clerk

This section details the MastraAuthClerk class, its purpose, prerequisites, installation, and usage examples.

```APIDOC
## MastraAuthClerk Class

`MastraAuthClerk` class provides authentication for Mastra using Clerk. It validates incoming requests with Clerk's authentication system and integrates with the Mastra server via the `experimental_auth` option.

### Prerequisites

This example uses Clerk authentication. Ensure your Clerk project is set up correctly and add Clerk authentication details to your `.env` file.

```env filename=".env" copy
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_JWKS_URI=https://your-clerk-domain.clerk.accounts.dev/.well-known/jwks.json
```

> Note: These keys can be found in the "API Keys" section of your Clerk dashboard.

### Installation

Before using the `MastraAuthClerk` class, install the `@mastra/auth-clerk` package:

```bash copy
npm install @mastra/auth-clerk@latest
```

### Usage Example

```typescript {2,7-11} filename="src/mastra/index.ts" showLineNumbers copy
import { Mastra } from "@mastra/core/mastra";
import { MastraAuthClerk } from '@mastra/auth-clerk';

export const mastra = new Mastra({
 // ..
 server: {
 experimental_auth: new MastraAuthClerk({
 publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
 secretKey: process.env.CLERK_SECRET_KEY,
 jwksUri: process.env.CLERK_JWKS_URI
 }),
 },
});
```

> Note: The default `authorizeUser` method allows all authenticated users. To customize user authorization, provide a custom `authorizeUser` function when initializing the provider.

> Refer to the API reference for [MastraAuthClerk](/reference/auth/clerk.mdx) for all available configuration options.
```

--------------------------------

### Mastra API Reference - Overview

Source: https://mastra.ai/en/examples/rag/usage/cot-rag

Provides an overview of the Mastra API Reference, detailing core functionalities, agents, workflows, and more.

```APIDOC
## API Reference: Mastra API

### Description
This section provides the comprehensive API reference for Mastra, covering its core functionalities, agent management, workflow execution, and server interactions.

### Method
N/A (Documentation Index)

### Endpoint
N/A (Documentation Index)

### Parameters
N/A

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Integrate Mastra with SvelteKit

Source: https://mastra.ai/en/reference/rag/embeddings

A step-by-step guide on how to integrate Mastra AI into a SvelteKit project. This section covers the necessary setup and configuration for seamless integration.

```mdx
This is a step-by-step guide to integrating Mastra with SvelteKit.\n
```

--------------------------------

### Voice Send API

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the send() method available in voice providers, which sends messages to be processed by the voice model.

```APIDOC
## POST /en/reference/voice/voice.send

### Description
Sends messages to be processed by the voice model.

### Method
POST

### Endpoint
/en/reference/voice/voice.send

### Parameters
#### Request Body
- **message** (string) - Required - The message to be sent to the voice model.

### Request Example
```json
{
  "message": "Hello, how are you?"
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "sent"
}
```
```

--------------------------------

### Running Workflows Example

Source: https://mastra.ai/en/reference/tools/mcp-server

Example demonstrating how to execute Mastra workflows. This covers the fundamental process of initiating and managing the lifecycle of a workflow.

```typescript
import { workflow } from "@mastra/workflows";

const myWorkflow = workflow(...); // Define your workflow

myWorkflow.run();

```

--------------------------------

### API Key Setup (.env file)

Source: https://mastra.ai/ja/docs/local-dev/creating-a-new-project

Instructions for creating and configuring the .env file to set up API keys for the Mastra project. This file is essential for authenticating with external services.

```dotenv
# Create a .env file
# Add your API keys here
```

--------------------------------

### Voice.send() Method

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the send() method available in real-time voice providers, which streams audio data for continuous processing.

```APIDOC
## voice.send() Method

### Description
Streams audio data for continuous processing (for real-time voice providers).

### Method
Not specified (likely a method within a real-time voice provider class).

### Endpoint
Not specified.

### Parameters
None explicitly defined in this snippet.

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Install Mastra Client SDK using npm, yarn, or pnpm

Source: https://mastra.ai/ja/docs/deployment/client

This snippet shows how to install the Mastra Client SDK using different package managers. Ensure you have Node.js and a compatible browser environment. The command installs the latest version of the client library.

```bash
npm install @mastra/client-js@latest
```

```bash
yarn add @mastra/client-js@latest
```

```bash
pnpm add @mastra/client-js@latest
```

--------------------------------

### Manual Installation - Windsurf Configuration

Source: https://mastra.ai/ja/docs/getting-started/mcp-docs-server

This snippet details the manual installation steps for integrating the MCP Docs Server with Windsurf. It indicates the configuration file for global settings.

```text
Windsurf: ~/.codeium/windsurf/mcp_config.json を編集します（グローバル設定のみ対応）
```

--------------------------------

### Install Dependencies using npm

Source: https://mastra.ai/en/examples/agents/ai-sdk-v5-integration

Installs necessary dependencies for the project using npm. This command is essential for setting up the project environment and ensuring all required packages are available.

```bash
npm install @ai-sdk/react mastra
```

--------------------------------

### CompositeVoice Class

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the CompositeVoice class, which enables combining multiple voice providers for flexible text-to-speech and speech-to-text operations.

```APIDOC
## CompositeVoice Class

### Description
Enables combining multiple voice providers for flexible text-to-speech and speech-to-text operations.

### Method
Not specified.

### Endpoint
Not specified.

### Parameters
None explicitly defined in this snippet.

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Initialize MCPClient with Server and Salesforce Configuration

Source: https://mastra.ai/ja/docs/tools-mcp/mcp-overview

This JavaScript code demonstrates how to import and initialize the MCPClient from the '@mastra/mcp' package. It shows the basic setup for connecting to MCP servers and configuring Salesforce integration. Ensure the '@mastra/mcp' package is installed as a dependency.

```javascript
import { MCPClient } from "@mastra/mcp";

const mcp = new MCPClient({
  servers: {
  },
  salesforce: {
  }
});
```

--------------------------------

### Static Tool Configuration with MCPClient (TypeScript)

Source: https://mastra.ai/en/reference/tools/mcp-client

Example of setting up a static MCPClient configuration for tools available throughout an application. It demonstrates initializing MCPClient with server configurations (command-line execution and HTTP SSE), setting a global timeout, and creating an Agent with access to all tools obtained via `mcp.getTools()`. It also includes examples of using `mcp.resources.list()`, `mcp.resources.read()`, `mcp.prompts.list()`.

```typescript
import { MCPClient } from "@mastra/mcp";
import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

const mcp = new MCPClient({
 servers: {
 stockPrice: {
 command: "npx",
 args: ["tsx", "stock-price.ts"],
 env: {
 API_KEY: "your-api-key",
 },
 log: (logMessage) => {
 console.log(`[${logMessage.level}] ${logMessage.message}`);
 },
 },
 weather: {
 url: new URL("http://localhost:8080/sse"),
 },
 },
 timeout: 30000, // Global 30s timeout
});

// Create an agent with access to all tools
const agent = new Agent({
 name: "Multi-tool Agent",
 instructions: "You have access to multiple tool servers.",
 model: openai("gpt-4"),
 tools: await mcp.getTools(),
});

// Example of using resource methods
async function checkWeatherResource() {
 try {
 const weatherResources = await mcp.resources.list();
 if (weatherResources.weather && weatherResources.weather.length > 0) {
 const currentWeatherURI = weatherResources.weather[0].uri;
 const weatherData = await mcp.resources.read(
 "weather",
 currentWeatherURI,
 );
 console.log("Weather data:", weatherData.contents[0].text);
 }
 } catch (error) {
 console.error("Error fetching weather resource:", error);
 }
}
checkWeatherResource();

// Example of using prompt methods
async function checkWeatherPrompt() {
 try {
 const weatherPrompts = await mcp.prompts.list();
 if (weatherPrompts.weather && weatherPrompts.weather.length > 0) {
 const currentWeatherPrompt = weatherPrompts.weather.find(
 (p) => p.name === "current"
 );
 if (currentWeatherPrompt) {
 console.log("Weather prompt:", currentWeatherPrompt);
 } else {
 console.log("Current weather prompt not found");
 }
 } 
 } catch (error) {
 console.error("Error fetching weather prompt:", error);
 }
}
checkWeatherPrompt();
```

--------------------------------

### Get Hono SSE Transport

Source: https://mastra.ai/en/reference/tools/mcp-server

Retrieves the SSE communication transport object if the server was started with `startHonoSSE()`. For internal checks and testing of SSE with Hono.

```typescript
getSseHonoTransport(): SSETransport | undefined
```

--------------------------------

### Get SSE Transport

Source: https://mastra.ai/en/reference/tools/mcp-server

Retrieves the SSE communication transport object if the server was started with `startSSE()`. Used for internal checks and testing of Server-Sent Events.

```typescript
getSseTransport(): SSEServerTransport | undefined
```

--------------------------------

### CLI - mastra dev

Source: https://mastra.ai/en/models/providers/alibaba

Starts the Mastra development server.

```APIDOC
## CLI Command: mastra dev

### Description
Starts the Mastra development server.

### Usage
```bash
mastra dev
```

### Options
None
```

--------------------------------

### Migration Guide

Source: https://mastra.ai/en/docs/observability/ai-tracing/exporters/default

Guide for migrating from VNext to Standard APIs.

```APIDOC
## Migration Guide: VNext to Standard APIs

### Description
Documentation outlining the steps and considerations for migrating from VNext to the standard Mastra AI APIs.

### Method
N/A (Documentation)

### Endpoint
/en/reference/agents/migration-guide

### Parameters
N/A

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Inngest Function Setup and Customization (JavaScript)

Source: https://mastra.ai/en/docs/workflows/inngest-workflow

Demonstrates how to import the Inngest library and define a custom Inngest function. This snippet is useful for setting up serverless functions that can be triggered by events. It assumes the 'inngest' library is installed.

```javascript
import { inngest } from "./inngest"

// Define custom Inngest functions
export const customEmailFunction = inngest.createFunction(
 {
  id: "send-welcome-email"
```

--------------------------------

### MastraStorage Configuration Example (TypeScript)

Source: https://mastra.ai/en/docs/server-db/storage

This snippet shows how to configure Mastra with a default storage option using TypeScript. It demonstrates the basic setup for integrating storage providers.

```typescript
```typescript
// Example configuration for default storage option
// This is a conceptual example and may vary based on actual implementation.

// Assuming a hypothetical configuration object or function:
// configureMastraStorage({
//   defaultProvider: 'postgres', // or 'libsql', etc.
//   connectionString: process.env.DATABASE_URL
// });

// The actual configuration would depend on Mastra's internal API.
// For instance, it might involve environment variables or a config file.
```
```

--------------------------------

### Agent Get Scorers API

Source: https://mastra.ai/en/examples/workflows/agent-as-step

Documentation for the `Agent.getScorers()` method in Mastra agents, which retrieves the scoring configuration.

```APIDOC
## GET /api/agents/getScorers

### Description
Retrieves the scoring configuration.

### Method
GET

### Endpoint
/api/agents/getScorers

### Parameters
No parameters required.

### Request Example
```
GET /api/agents/getScorers
```

### Response
#### Success Response (200)
- **scorers** (object) - The scoring configuration.
  - **metric1** (string) - Description of the first scoring metric.
  - **metric2** (string) - Description of the second scoring metric.

#### Response Example
```json
{
  "scorers": {
    "accuracy": "Measures the correctness of the output.",
    "fluency": "Evaluates the naturalness and coherence of the text."
  }
}
```
```

--------------------------------

### Get MCP Server

Source: https://mastra.ai/en/examples/deployment

Retrieves a specific MCP server instance by ID and optional version.

```APIDOC
## GET /en/reference/core/getMCPServer

### Description
Retrieves a specific MCP server instance by ID and optional version.

### Method
GET

### Endpoint
/en/reference/core/getMCPServer

### Parameters
#### Query Parameters
- **serverId** (string) - Required - The ID of the MCP server.
- **version** (string) - Optional - The specific version of the MCP server.

### Response
#### Success Response (200)
- **mcpServer** (object) - The details of the MCP server instance.
  - **id** (string) - The server ID.
  - **name** (string) - The server name.
  - **version** (string) - The server version.
  - **status** (string) - The current status of the server.

#### Response Example
```json
{
  "mcpServer": {
    "id": "mcp_server_1",
    "name": "Primary MCP Server",
    "version": "1.2.0",
    "status": "running"
  }
}
```
```

--------------------------------

### Build and Run Mastra Application

Source: https://mastra.ai/ja/docs/deployment/cloud-providers/digital-ocean

Commands to build and run the Mastra application after setting up dependencies and environment variables. The run command specifies the entry point and environment file. Ensure Node.js is installed.

```bash
npm run build
```

```bash
node --import=./.mastra/output/instrumentation.mjs --env-file=\".env\" .mastra/output/index.mjs
```

--------------------------------

### Install Google Provider with bun

Source: https://mastra.ai/en/models/providers/google

This command installs the '@ai-sdk/google' package using bun, allowing direct installation of the Google provider instead of using the Mastra model router string.

```bash
bun add @ai-sdk/google
```

--------------------------------

### Guide: MCP Server Notes

Source: https://mastra.ai/en/docs/streaming/overview

A guide on building a Notes MCP Server using the Mastra framework.

```APIDOC
## MCP Server: Building a Notes MCP Server

### Description
This guide provides a step-by-step process for creating a fully-featured MCP (Model Context Protocol) server specifically designed for managing notes within the Mastra framework.

### Method
N/A (Documentation Guide)

### Endpoint
N/A (Documentation Guide)

### Parameters
N/A

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Usage Example: Integrating Hugging Face Models with Mastra Core

Source: https://mastra.ai/en/models/gateways/huggingface

This snippet demonstrates how to initialize an Agent from the '@mastra/core' library, specifying a Hugging Face model for use. Ensure you have the '@mastra/core' package installed.

```typescript
import { Agent } from "@mastra/core";

const agent = new Agent({
 name: "my-agent",
 instructions: "You are a helpful assistant",
 model: "huggingface/Qwen/Qwen3-235B-A22B-Thinking-2507"
});
```

--------------------------------

### AI-SDK Version Compatibility Guidance

Source: https://mastra.ai/en/docs/getting-started/installation

This section highlights the project's compatibility with the ai-sdk. Currently, generated projects are compatible with ai-sdk v4. Instructions are provided for users who wish to use ai-sdk v5, directing them to a specific compatibility section.

```markdown
The CLI currently generates projects that are only compatible with ai-sdk v4. Please refer to #ai-sdk-v5-compatibility if you wish to use ai-sdk v5.
```

--------------------------------

### Install Mastra Packages for bun

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/sveltekit

Installs the latest versions of Mastra and its core and libsql packages using bun. This is the command for projects using the bun runtime.

```bash
bun add mastra@latest @mastra/core@latest @mastra/libsql@latest
```

--------------------------------

### Agents API

Source: https://mastra.ai/en/docs/getting-started/installation

This section provides documentation for various methods available for Mastra agents, allowing retrieval of agent properties like memory, voice, description, instructions, LLM, and default generation options.

```APIDOC
## Agent Methods

### Description
Methods for retrieving specific properties and configurations of Mastra agents.

### GET /api/agents/memory

#### Description
Retrieves the memory system associated with the agent.

### GET /api/agents/voice

#### Description
Retrieves the voice provider for speech capabilities of the agent.

### GET /api/agents/description

#### Description
Retrieves the agent's description.

### GET /api/agents/instructions

#### Description
Retrieves the instructions that guide the agent's behavior.

### GET /api/agents/llm

#### Description
Retrieves the language model instance used by the agent.

### GET /api/agents/defaultGenerateOptions

#### Description
Retrieves the default options used for generate calls.

### GET /api/agents/defaultStreamOptions

#### Description
Retrieves the default options used for stream calls.
```

--------------------------------

### Configure TypeScript for Mastra Projects

Source: https://mastra.ai/en/docs/getting-started/installation

Creates and configures a tsconfig.json file with settings optimized for Mastra projects, ensuring compatibility with modern Node.js versions and strict type checking.

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true,
    "outDir": "dist"
  },
  "include": [
    "src/**/*"
  ]
}
```

--------------------------------

### Node.js Console Log Example

Source: https://mastra.ai/ja/guides/guide/chef-michel

This snippet shows how to log messages to the console using `console.log()` in Node.js. It includes examples of logging strings, special characters, and a success message with an emoji. This function is built into Node.js and requires no external dependencies.

```javascript
console.log("✅ Recipe complete!");
```

--------------------------------

### Serve Application with Mastra Server in TypeScript

Source: https://mastra.ai/en/guides/guide/research-assistant

This snippet provides instructions on how to start the Mastra server to expose the research assistant via an API. It outlines the command needed to initiate the server process.

```typescript
self.__next_f.push([1,"30:[\"$\",\"h3\",null,{\"id\":\"serve-the-application\",\"className\":\"x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-\"[fade-in_1.5s] x:mt-8 x:text-2xl\",\"children\":[\"Serve the Application\",[\"$\",\"$L16\",null,{\"id\":\"serve-the-application\"}]]}]\n31:[\"$\",\"p\",null,{\"className\":\"x:not-first:mt-\"[1.25em] x:leading-7\",\"children\":\"Start the Mastra server to expose your research assistant via API:\"}]\n32:[\"$\",\"div\",null,{\"data-pagefind-ignore\":\"$undefined\",\"className\":\"nextra-code x:relative x:not-first:mt-\"[1.25em]\",\"children\":[\"$undefined\",[\"$\",\"pre\",null,{\"className\":\"x:group x:focus-visible:nextra-focus x:overflow-x-auto x:subpixel-antialiased x:text-\"
        }
      ]
    }
  ]
}
```
```

--------------------------------

### Install Mastra RAG and AI SDK Dependencies

Source: https://mastra.ai/en/guides/guide/research-assistant

Installs the necessary Mastra RAG package and a compatible version of the AI SDK. This is a prerequisite for using Mastra's RAG capabilities. Ensure you are using v4 of the AI SDK as v5 is not currently supported.

```bash
npm install @mastra/rag@latest ai@^4.0.0
```

--------------------------------

### Build Index Examples (TypeScript)

Source: https://mastra.ai/en/reference/vectors/pg

Illustrates how to build or rebuild an index with different configurations: HNSW, IVF, and flat. Each example specifies the index name, metric, and relevant index configuration parameters.

```typescript
// Define HNSW index
await pgVector.buildIndex("my_vectors", "cosine", {
 type: "hnsw",
 hnsw: {
 m: 8,
 efConstruction: 32,
 },
});

// Define IVF index
await pgVector.buildIndex("my_vectors", "cosine", {
 type: "ivfflat",
 ivf: {
 lists: 100,
 },
});

// Define flat index
await pgVector.buildIndex("my_vectors", "cosine", {
 type: "flat",
});
```

--------------------------------

### Initialize Mastra with Telemetry Configuration

Source: https://mastra.ai/en/reference/observability/otel-tracing/providers/dash0

This snippet demonstrates how to import the Mastra library and create an instance of the Mastra class. It includes essential configuration for telemetry, such as setting the service name. Ensure you replace placeholder values with your actual configuration.

```javascript
import { Mastra } from "@mastra/core";

export const mastra = new Mastra({
  // ... other config
  telemetry: {
    serviceName: "your
```

--------------------------------

### Partial Completeness Scorer TS Example

Source: https://mastra.ai/en/examples/scorers/completeness

This TypeScript example demonstrates how to use the CompletenessScorer to evaluate a response that partially addresses a query. It imports necessary functions from '@ai-sdk/openai' and '@mastra/evals/scorers/llm', defines the scorer, query, and response, and then runs the scorer to get the result.

```typescript
import { openai } from "@ai-sdk/openai";
import { createCompletenessScorer } from "@mastra/evals/scorers/llm";

const scorer = createCompletenessScorer({
  model: openai("gpt-4o-mini")
});

const query = "What are the benefits and drawbacks of remote work for both employees and employers?";
const response =
  "Remote work offers several benefits for employees including flexible schedules, no commuting time, and better work-life balance. It also reduces costs for office space and utilities for employers. However, remote work can lead to isolation and communication challenges for employees.";

const result = await scorer.run({
  input: [{ role: 'user', content: query }],
  output: { text: response },
});

console.log(result);
```

--------------------------------

### Specific Guide: Tools: Stock Agent

Source: https://mastra.ai/en/reference/workflows/workflow-methods/sendEvent

Guide on creating a simple stock agent in Mastra.

```APIDOC
## Tools: Stock Agent

### Description
Guide on creating a simple stock agent in Mastra to fetch the last day's closing stock price for a given symbol.

### Endpoint
/en/guides/guide/stock-agent
```

--------------------------------

### Agent Configuration for OpenRouter

Source: https://mastra.ai/ja/docs/frameworks/agentic-uis/openrouter

Example TypeScript code snippet demonstrating how to configure an agent to use OpenRouter. This assumes the necessary SDK has been installed.

```typescript
import { Assistant } from "./assistant";

// Assuming other necessary imports and configurations are present

const assistant = new Assistant({
  // ... other configurations
  provider: "openrouter",
  // ... other provider-specific configurations if any
});

// Example usage:
// assistant.chat(...) 
```

--------------------------------

### voice.addInstructions()

Source: https://mastra.ai/en/examples/agents/deploying-mcp-server

Documentation for the addInstructions() method available in voice providers, which adds instructions to guide the voice model's behavior.

```APIDOC
## voice.addInstructions()

### Description
Adds instructions to guide the behavior of the voice model, useful for setting context or defining response formats.

### Method
`addInstructions(instructions)`

### Endpoint
N/A (Method within a voice provider object)

### Parameters
- **instructions** (string) - Required - The instructions to be provided to the voice model.

### Request Example
```javascript
await voiceProvider.addInstructions('Respond in a polite and concise manner.');
```

### Response
N/A
```

--------------------------------

### Local Mastra Development with Vercel CLI

Source: https://mastra.ai/en/docs/deployment/serverless-platforms/vercel-deployer

This snippet demonstrates how to start a local development server for a Mastra application using the Vercel CLI. This command allows for local testing before deploying to production. It requires the Vercel CLI to be installed.

```bash
vercel dev
```

--------------------------------

### JavaScript: Scorer Configuration Example

Source: https://mastra.ai/en/reference/core/getScorerByName

Illustrates a common configuration pattern for scorers, likely used during initialization or setup. It shows how to define scorer types and assign them.

```javascript
scorers: {
  answerRelevancy: {
    scorer: relevancyScorer,
  },
}
```

--------------------------------

### POST /voice.addInstructions()

Source: https://mastra.ai/en/reference/vectors/pg

Documentation for the addInstructions() method, which allows adding instructions or system prompts to a voice provider.

```APIDOC
## POST /voice.addInstructions()

### Description
Adds specific instructions or system prompts to configure the behavior of a voice provider for subsequent operations.

### Method
POST

### Endpoint
/voice.addInstructions

### Parameters
#### Request Body
- **instructions** (string) - Required - The instructions or system prompt to add.
- **provider** (string) - Optional - The specific voice provider to apply these instructions to.

### Request Example
```json
{
  "instructions": "You are a helpful assistant that speaks in a formal tone."
}
```

### Response
#### Success Response (200)
- **status** (string) - The status of the instruction update (e.g., 'updated').

#### Response Example
```json
{
  "status": "updated"
}
```
```

--------------------------------

### Deepgram Voice Provider

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the Deepgram voice implementation, providing text-to-speech and speech-to-text capabilities with multiple voice models and languages.

```APIDOC
## Deepgram Voice Provider

### Description
Provides text-to-speech and speech-to-text capabilities using Deepgram. Supports multiple voice models and languages.

### Endpoint
(Specific endpoints depend on Deepgram's API, typically involves authentication and data transfer)

### Features
- Text-to-Speech (TTS)
- Speech-to-Text (STT)
- Multiple voice models
- Multi-language support

### Integration
Requires Deepgram API key for authentication.
```

--------------------------------

### Agent.getInstructions() Method

Source: https://mastra.ai/en/reference/deployer/vercel

Retrieves the instructions for the agent.

```APIDOC
## Agent.getInstructions()

### Description
Retrieves the instructions for the agent.

### Method
GET

### Endpoint
/en/reference/agents/getInstructions

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **instructions** (string) - The instructions for the agent.

#### Response Example
```json
{
  "instructions": "You are a helpful assistant. Respond to user queries concisely."
}
```
```

--------------------------------

### Voice Update Config API

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the updateConfig() method available in voice providers, which updates the configuration of a voice provider at runtime.

```APIDOC
## POST /en/reference/voice/voice.updateConfig

### Description
Updates the configuration of a voice provider at runtime.

### Method
POST

### Endpoint
/en/reference/voice/voice.updateConfig

### Parameters
#### Request Body
- **config** (object) - Required - The new configuration object.

### Request Example
```json
{
  "config": {
    "voice": "en-US-Wavenet-A"
  }
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the success of the operation.

#### Response Example
```json
{
  "status": "config_updated"
}
```
```

--------------------------------

### OpenTelemetry Setup Summary

Source: https://mastra.ai/en/docs/observability/nextjs-tracing

This section provides a summary of the OpenTelemetry setup. It confirms that the setup enables OpenTelemetry for your project.

```text
This setup will enable OpenTelemetry
```

--------------------------------

### Guides Overview

Source: https://mastra.ai/en/docs/rag/chunking-and-embedding

Overview of the guides available for the Mastra project.

```APIDOC
## Guides

### Description
Provides an overview of the different guides available for learning and using the Mastra framework.

### Endpoint
/en/guides

### Sub-guides
- Overview
- Agent Guides (e.g., Chef Michel)
- Tool Guides (e.g., Stock Agent)
- Workflow Guides (e.g., AI Recruiter)
- RAG Guides (e.g., Research Assistant)
- MCP Server Guides (e.g., Notes MCP Server)
```

--------------------------------

### Voice Answer API

Source: https://mastra.ai/en/docs/getting-started/installation

Documentation for the answer() method available in real-time voice providers, which triggers the voice provider to generate a response.

```APIDOC
## POST /en/reference/voice/voice.answer

### Description
Triggers the voice provider to generate a response.

### Method
POST

### Endpoint
/en/reference/voice/voice.answer

### Parameters
#### Request Body
- **prompt** (string) - Required - The prompt to generate a response from.

### Request Example
```json
{
  "prompt": "What is the weather today?"
}
```

### Response
#### Success Response (200)
- **response** (string) - The generated voice response.

#### Response Example
```json
{
  "response": "The weather today is sunny."
}
```
```

--------------------------------

### Memory API Endpoints

Source: https://mastra.ai/en/docs/getting-started/installation

This section details the API endpoints for managing memory, including retrieving threads with pagination and deleting messages.

```APIDOC
## GET /en/reference/memory/getThreadsByResourceIdPaginated

### Description
Retrieves a list of memory threads associated with a specific resource ID, with support for pagination.

### Method
GET

### Endpoint
/en/reference/memory/getThreadsByResourceIdPaginated

### Parameters
#### Query Parameters
- **resourceId** (string) - Required - The ID of the resource to retrieve threads for.
- **page** (integer) - Optional - The page number for pagination.
- **limit** (integer) - Optional - The number of items per page.

### Response
#### Success Response (200)
- **threads** (array) - A list of memory thread objects.
- **pagination** (object) - Pagination details, including total items and pages.

#### Response Example
```json
{
  "threads": [
    {
      "id": "thread_123",
      "createdAt": "2023-10-27T10:00:00Z"
    }
  ],
  "pagination": {
    "totalItems": 100,
    "currentPage": 1,
    "totalPages": 10
  }
}
```
```

```APIDOC
## DELETE /en/reference/memory/deleteMessages

### Description
Deletes multiple memory messages by their unique IDs.

### Method
DELETE

### Endpoint
/en/reference/memory/deleteMessages

### Parameters
#### Request Body
- **messageIds** (array) - Required - A list of message IDs to be deleted.
  - **messageId** (string) - Required - The ID of the message to delete.

### Request Example
```json
{
  "messageIds": [
    "msg_abc",
    "msg_def"
  ]
}
```

### Response
#### Success Response (200)
- **deletedCount** (integer) - The number of messages successfully deleted.

#### Response Example
```json
{
  "deletedCount": 2
}
```
```

--------------------------------

### Install Mastra Packages (npm)

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/vite-react

Installs the necessary Mastra packages using npm. This command ensures you have the latest versions of the core Mastra library, its SQL client, and the JavaScript client SDK.

```bash
npm install mastra@latest @mastra/core@latest @mastra/libsql@latest @mastra/client-js@latest
```

--------------------------------

### Get Threads by Resource ID (Simple) - JavaScript

Source: https://mastra.ai/en/reference/memory/getThreadsByResourceId

Retrieves threads for a given resource ID without specifying sorting preferences. This is a basic usage example.

```javascript
await memory?.getThreadsByResourceId({ resourceId: "user-123" });
```

--------------------------------

### Environment Configuration (.env.example) - Shell Script

Source: https://mastra.ai/en/reference/templates/overview

This snippet shows the structure of the .env.example file used for environment configuration. It includes placeholders for LLM provider API keys, such as OpenAI and Anthropic. The file is essential for setting up the project's API integrations.

```shell
# LLM provider API keys (choose one or more)
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

--------------------------------

### Package Installation Commands

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/sveltekit

These commands are used for installing specific packages using a package manager, likely npm or yarn, given the '@latest' tag. The packages '@mastra/core' and '@mastra/libsql' are being installed, indicating their importance in the project's dependencies.

```shell
 @mastra/core@latest
```

```shell
 @mastra/libsql@latest
```

--------------------------------

### Initialize Workflow and Create Step with Mastra Core (TypeScript)

Source: https://mastra.ai/ja/examples/workflows_legacy/sequential-steps

This snippet demonstrates how to import necessary components from the Mastra core library and Zod for data validation. It then defines and initializes a workflow with a step, showcasing basic setup for LLM text processing tasks. Ensure `@mastra/core/workflows/legacy` and `zod` are installed as dependencies.

```typescript
import { LegacyStep, LegacyWorkflow } from "@mastra/core/workflows/legacy";
import { z } from "zod";

// Example workflow and step creation (assuming these variables are defined elsewhere in the context)
// const workflow = new LegacyWorkflow(...);
// const step = new LegacyStep(...);

```

--------------------------------

### Create and Start Hono Server in JavaScript

Source: https://mastra.ai/ja/docs/workflows-vnext/inngest-workflow

This snippet demonstrates how to create and start a Hono server. It utilizes the `createHonoServer` function, passing in 'mastra' and tool exports. The server is then started using the `serve` function.

```javascript
const app = await createHonoServer(
  mastra,
  {
    tools: getToolExports(tools),
  }
);

const srv =
  serve({
    fetch: app.fetch,
  });
```

--------------------------------

### Agent Get Tools API

Source: https://mastra.ai/en/examples/workflows/agent-as-step

Documentation for the `Agent.getTools()` method in Mastra agents, which retrieves the tools that the agent can use.

```APIDOC
## GET /api/agents/getTools

### Description
Retrieves the tools that the agent can use.

### Method
GET

### Endpoint
/api/agents/getTools

### Parameters
No parameters required.

### Request Example
```
GET /api/agents/getTools
```

### Response
#### Success Response (200)
- **tools** (array) - A list of available tools.
  - **tool_name** (string) - The name of the tool.
  - **tool_description** (string) - A brief description of the tool's functionality.

#### Response Example
```json
{
  "tools": [
    {
      "tool_name": "Web Search",
      "tool_description": "Searches the internet for information."
    },
    {
      "tool_name": "Calculator",
      "tool_description": "Performs mathematical calculations."
    }
  ]
}
```
```

--------------------------------

### Initialize MCPServer Instance (JavaScript)

Source: https://mastra.ai/en/guides/guide/notes-mcp-server

This snippet demonstrates the initialization of a new MCPServer instance. It includes parameters for 'name' and 'version', suggesting configuration options for a server or service. The structure implies a dynamic object creation.

```javascript
notes = new MCPServer({
  name: "notes",
  version: ""
});
```

--------------------------------

### Agent Get Workflows API

Source: https://mastra.ai/en/examples/workflows/agent-as-step

Documentation for the `Agent.getWorkflows()` method in Mastra agents, which retrieves the workflows that the agent can execute.

```APIDOC
## GET /api/agents/getWorkflows

### Description
Retrieves the workflows that the agent can execute.

### Method
GET

### Endpoint
/api/agents/getWorkflows

### Parameters
No parameters required.

### Request Example
```
GET /api/agents/getWorkflows
```

### Response
#### Success Response (200)
- **workflows** (array) - A list of executable workflows.
  - **workflow_name** (string) - The name of the workflow.
  - **workflow_id** (string) - The unique identifier of the workflow.

#### Response Example
```json
{
  "workflows": [
    {
      "workflow_name": "Customer Support Triage",
      "workflow_id": "wf-cs-triage-v1"
    },
    {
      "workflow_name": "Content Generation Pipeline",
      "workflow_id": "wf-content-gen-v2"
    }
  ]
}
```
```

--------------------------------

### Next.js Frontend with Assistant UI Setup

Source: https://mastra.ai/en/docs/frameworks/agentic-uis/assistant-ui

This snippet shows the necessary imports and markdown content for setting up a Next.js frontend using Assistant UI. It includes instructions for integrating Mastra as a standalone server and provides a basic 'Callout' component for additional information.

```markdown
---\ntitle: Using with Assistant UI\ndescription: \"Learn how to integrate Assistant UI with Mastra\"\n---\n\nimport { Callout, FileTree, Steps } from 'nextra/components'\n\n# Using with Assistant UI\n\n[Assistant UI](https://assistant-ui.com) is the TypeScript/React library for AI Chat.\nBuilt on shadcn/ui and Tailwind CSS, it enables developers to create beautiful, enterprise-grade chat experiences in minutes.\n\n\u003cCallout type=\"info\"\u003e\nFor a full-stack integration approach where Mastra runs directly in your Next.js API routes, see the [Full-Stack Integration Guide](https://www.assistant-ui.com/docs/runtimes/mastra/full-stack-integration) on Assistant UI's documentation site.\n\u003c/Callout\u003e\n\n## Integration Guide\n\nRun Mastra as a standalone server and connect your Next.js frontend (with Assistant UI) to its API endpoints.\n\n\u003cSteps\u003e\n### Create Standalone Mastra Server\n\nSet up your directory structure. A possible directory structure could look like this:\n\n\u003cFileTree\u003e\n \u003cFileTree.Folder name=\"project-root\" defaultOpen\u003e\n \u003cFileTree.Folder name=\"mastra-server\" defaultOpen\u003e\n \u003cFileTree.Folder name=\"src\"\u003e\n \u003cFileTree.Folder name=\"mastra\" /\u003e\n \u003c/FileTree.Folder\u003e\n \u003cFileTree.File name=\"package.json\" /\u003e\n \u003c/FileTree.Folder\u003e\n \u003cFileTree.Folder name=\"nextjs-frontend\"\u003e\n \u003cFileTree.File name=\"package.json\" /\u003e\n \u003c/FileTree.Folder\u003e\n \u003c/FileTree.Folder\u003e\n\u003c/FileTree\u003e\n\nBootstrap your Mastra server:\n\n```bash copy\nnpx create-mastra@latest\n```\n\nThis command will launch an interactive wizard to help you scaffold a new Mastra project, including prompting you for a project name and setting up basic configurations.\nFollow the prompts to create your server project.\n\nYou now have a basic Mastra server project ready. You should have the following files 
```

--------------------------------

### Extended Workflow Run Async Example in TypeScript

Source: https://mastra.ai/en/reference/workflows/workflow-methods/create-run

This extended TypeScript example illustrates a more comprehensive usage of `Workflow.createRunAsync()`. It shows how to obtain a workflow instance, create a run, and then start the execution with input data. The `Run` object returned by `createRunAsync()` is utilized to manage the workflow's lifecycle and retrieve results.

```typescript
const workflow = mastra.getWorkflow("workflow");

const run = await workflow.createRunAsync();

const result = await run.start({
 inputData: {
 value: 10,
 },
});
```

--------------------------------

### Node.js HTTP Server Creation and SSE Initialization

Source: https://mastra.ai/en/reference/tools/mcp-server

This snippet demonstrates the creation of an HTTP server using Node.js's http module and the initialization of an SSE stream using `startHonoSSE`. It includes setting up the request and response handlers.

```javascript
const httpServer = http.createServer(async (req, res) => {
  await server.startHonoSSE({
    url: new URL(req.url || ""),
  });
});
```

--------------------------------

### Integrate Mastra with SvelteKit

Source: https://mastra.ai/en/examples/evals/answer-relevancy

Guide to integrating Mastra AI with SvelteKit applications. Covers setup and usage for building AI-powered features in SvelteKit.

```javascript
// Example for SvelteKit integration (conceptual)
// Assumes Mastra SDK is installed and configured

import { MastraClient } from "mastra-sdk";

const mastra = new MastraClient({
  apiKey: import.meta.env.VITE_MASTRA_API_KEY,
});

// In a SvelteKit server route or load function
export async function load() {
  const response = await mastra.tools.invoke({
    name: "my-sveltekit-tool",
    input: { query: "What is SvelteKit?" },
  });
  return {
    toolOutput: response.output,
  };
}

```

--------------------------------

### Creating a Next.js Web Interface for Debates

Source: https://mastra.ai/en/examples/voice/turn-taking

This example shows a basic Next.js component for a web interface to manage debates. It includes a heading for the section and a paragraph explaining its purpose. The component is designed to allow users to start a debate and receive agent responses.

```typescript
// Assuming this is part of a React component in a Next.js application

// ... other imports and component logic

return (
  <>
    <h2 id="creating-a-web-interface-for-the-debate">
      Creating a Web Interface for the Debate
    </h2>
    <p>
      For web applications, you can create a simple Next.js component that allows users to start a debate and listen to the agents’ responses:
    </p>
    {/* Add your debate interface elements here */}
  </>
);
```

--------------------------------

### Create and Start Mastra AI Workflow Run in JavaScript

Source: https://mastra.ai/en/guides/guide/ai-recruiter

This code demonstrates how to get a workflow definition from Mastra and then create an asynchronous run for it. It includes providing necessary input data for the workflow.

```javascript
const run = await mastra.getWorkflow("candidateWorkflow").createRunAsync();
const res = await run.start({
  inputData: {
    resumeText: "Knowledgeable Software Engineer with more than 10 years of experience in software development. Proven expertise in the de"
  }
});
```

--------------------------------

### Create a Mastra Weather Tool

Source: https://mastra.ai/en/docs/getting-started/installation

Defines a TypeScript tool for Mastra named 'get-weather'. It includes input schema validation using Zod for location and a placeholder for executing weather data retrieval.

```typescript
import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const weatherTool = createTool({
  id: "get-weather",
  description: "Get current weather for a location",
  inputSchema: z.object({
    location: z.string().describe("City name")
  }),
  outputSchema: z.object({
    output: z.string()
  }),
  execute: async () => {
    return {
      output: "The weather is sunny"
    };
  }
});
```

--------------------------------

### Install and Initialize MastraClient (JavaScript)

Source: https://mastra.ai/en/docs/deployment/cloud-providers/amazon-ec2

This snippet shows how to import the MastraClient from the '@mastra/client-js' package and initialize it with your base URL. Ensure you replace 'https://<your-domain-name>' with your actual domain.

```javascript
import { MastraClient } from "@mastra/client-js";

const mastraClient = new MastraClient({
  baseUrl: "https://<your-domain-name>"
});
```

--------------------------------

### Install Bias Scorer - npm

Source: https://mastra.ai/en/examples/scorers/bias

This snippet shows how to install the Bias Scorer package using npm. It is a common step for integrating the scorer into a Node.js project. No specific inputs or outputs are detailed, but successful execution implies the package is ready for use.

```bash
npm install @mastra/ai-llms-txt
```

--------------------------------

### Supervisor Agent Example

Source: https://mastra.ai/en/examples/tools/calling-tools

This snippet demonstrates the setup and functionality of a Supervisor Agent. It is designed to manage and coordinate other agents within the Mastra AI framework. No specific dependencies or input/output details are provided.

```typescript
import { SupervisorAgent } from "@mastra/agents";

async function runSupervisorAgent() {
  const supervisor = new SupervisorAgent({
    // Configuration options for the supervisor agent
  });

  await supervisor.start();
  console.log("Supervisor agent started.");

  // Further interactions with the supervisor agent would go here
}

runSupervisorAgent().catch(console.error);
```

--------------------------------

### Example of Adding a Specific Scorer

Source: https://mastra.ai/ja/reference/cli/scorers

This snippet provides a concrete example of how to use the Mastra CLI to add a scorer. It illustrates the command syntax with a placeholder for the scorer's name and indicates where additional options would be placed. This serves as a practical guide for users.

```shell
Add specific scorer by name:

```

--------------------------------

### Import and Configure OpenAI SDK (JavaScript)

Source: https://mastra.ai/ja/docs/frameworks/web-frameworks/sveltekit

Demonstrates how to import the OpenAI SDK and create an instance of the client. It includes configuration for API key retrieval from environment variables and setting compatibility mode to 'strict'.

```javascript
import { openai } from "@ai-sdk/openai";
import { createOpenAI } from "@ai-sdk/openai";

const openai = createOpenAI({
 apiKey: import.meta.env?.VITE_OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY,
 compatibility: "strict"
 });
```

--------------------------------

### Agent Instantiation (TypeScript)

Source: https://mastra.ai/ja/docs/networks-vnext/complex-task-execution

Shows the basic instantiation of an 'Agent' class. This is the starting point for defining and executing agent logic within the application.

```typescript
const agent1 = new Agent({"}"
```

--------------------------------

### AI Agent Query and Response Example

Source: https://mastra.ai/en/guides/guide/research-assistant

This example demonstrates a typical query and response interaction with an AI agent. The agent is asked about problems in sequence modeling with neural networks. The output shows the 'Query:' followed by the question and 'Response:' indicating the agent's answer.

```text
Query: What problems does sequence modeling face with neural networks?
Response:
```

--------------------------------

### CLI - create-mastra

Source: https://mastra.ai/en/docs/agents/runtime-context

Creates a new Mastra project with interactive setup options.

```APIDOC
## CLI Command: create-mastra

### Description
Creates a new Mastra project with interactive setup options.

### Usage
```bash
mastra create-mastra
```

### Details
This command initiates an interactive process to set up a new Mastra project, guiding the user through various configuration choices.
```

--------------------------------

### Install Netlify Deployer (NPM)

Source: https://mastra.ai/en/docs/deployment/serverless-platforms/netlify-deployer

Installs the Netlify deployer package for Mastra applications using npm. This is the first step to enable Netlify deployment capabilities.

```bash
npm install @mastra/deployer-netlify@latest
```

--------------------------------

### Accessing Project Documentation Link (TypeScript)

Source: https://mastra.ai/en/docs/getting-started/installation

This snippet demonstrates how to generate a link to specific documentation within the project. It uses a placeholder for the link text and specifies the target URL, likely for internal navigation or external reference.

```typescript
self.__next_f.push([1,"6e:[\"$\",\"p\",null,{\"className\":\"x:not-first:mt-\\[1.25em\\] x:leading-7\",\"children\":[\"You can now launch the \",[\"$\",\"$L16\",null,{\"href\":\"/docs/server-db/local-dev-playground\",\"prefetch\":\"$undefined\",\"className\":\"x:focus-visible:nextra-focus x:text-prima
```

--------------------------------

### Start Mastra Development Server

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/vite-react

Start the Mastra development server using either npm or the CLI. This server exposes your agents as REST endpoints, allowing them to be integrated into your application. The command 'mastra dev:mastra' initiates the server.

```bash
npm run dev:mastra
```

```bash
mastra dev:mastra
```

--------------------------------

### Example Usage of Mastra RAG Agent (TypeScript)

Source: https://mastra.ai/en/examples/rag/usage/basic-rag

Demonstrates how to use the configured Mastra RAG agent to generate a response. A prompt is defined, instructing the agent to answer based on provided context, and then `agent.generate()` is called to get the completion, which is subsequently logged to the console. This example assumes the `agent` has been previously initialized.

```typescript
const prompt = `
[Insert query based on document here]
Please base your answer only on the context provided in the tool. 
If the context doesn't contain enough information to fully answer the question, please state that explicitly.
`;

const completion = await agent.generate(prompt);
console.log(completion.text);
```

--------------------------------

### JavaScript: Create and Start Run for Mastral AI Workflow

Source: https://mastra.ai/ja/examples/tools/workflow-as-tools

Creates a new run for a specified Mastral AI workflow and starts its execution. This function takes an input object that defines the parameters for the run, such as city data. It returns the result of the run.

```javascript
const run = await workflow.createRunAsync({});
const runResult = await run.start({ inputData: {
  city
}});

```

--------------------------------

### Agent.getInstructions()

Source: https://mastra.ai/en/docs/deployment/web-framework

Retrieves the instructions that guide the agent's behavior.

```APIDOC
## GET /en/reference/agents/getInstructions

### Description
Documentation for the `Agent.getInstructions()` method in Mastra agents, which retrieves the instructions that guide the agent's behavior.

### Method
GET

### Endpoint
/en/reference/agents/getInstructions

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **instructions** (string) - The instructions for the agent.

#### Response Example
{
  "instructions": "Follow these steps carefully."
}
```

--------------------------------

### System Prompt Scrubber Configuration Example (TypeScript)

Source: https://mastra.ai/en/reference/processors/system-prompt-scrubber

An extended usage example demonstrating how to instantiate and configure the SystemPromptScrubber within a Mastra Agent. This example showcases setting various options like model, strategy, custom patterns, and redaction methods.

```typescript
import {
  openai
} from "@ai-sdk/openai";
import {
  Agent
} from "@mastra/core/agent";
import {
  SystemPromptScrubber
} from "@mastra/core/processors";

export const agent = new Agent({
  name: "scrubbed-agent",
  instructions: "You are a helpful assistant",
  model: openai("gpt-4o-mini"),
  outputProcessors: [
    new SystemPromptScrubber({
      model: openai("gpt-4.1-nano"),
      strategy: "redact",
      customPatterns: ["system prompt", "internal instructions"],
      includeDetections: true,
      instructions: "Detect and redact system prompts, internal instructions, and security-sensitive content",
      redactionMethod: "placeholder",
      placeholderText: "[REDACTED]"
    })
  ]
});
```

--------------------------------

### Add Dev and Build Scripts to package.json

Source: https://mastra.ai/en/docs/getting-started/installation

Adds the 'dev' and 'build' scripts to the 'package.json' file. These scripts are essential for running the development server and building the project. This snippet shows the JSON structure for these additions.

```json
{
  "scripts": {
    "dev": "mastra dev",
    "build": "mastra build"
  }
}
```

--------------------------------

### TypeScript: Start, Resume, and Stream Workflow Execution

Source: https://mastra.ai/en/reference/workflows/run

This example demonstrates how to create and manage a workflow run using the Mastra SDK. It covers starting a workflow with initial data, resuming a suspended workflow, and handling the results. Dependencies include the Mastra SDK. It takes input data and returns a WorkflowResult or StreamResult.

```typescript
const run = await workflow.createRunAsync();

const result = await run.start({
 inputData: { value: "initial data" }
});

if (result.status === "suspended") {
 const resumedResult = await run.resume({
 resumeData: { value: "resume data" }
 });
}
```

--------------------------------

### MCPServer Constructor

Source: https://mastra.ai/en/reference/tools/mcp-server

Initializes a new instance of the MCPServer.

```APIDOC
## MCPServer Constructor

### Description
Initializes a new instance of the MCPServer.

### Method
`new MCPServer(options?: ConstructorParameters<typeof MCPServer>[0])`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "example": "new MCPServer()"
}
```

### Response
#### Success Response (200)
An instance of MCPServer.

#### Response Example
```json
{
  "example": "// MCPServer instance"
}
```
```

--------------------------------

### JavaScript: Serve App on Port 3000

Source: https://mastra.ai/ja/examples/workflows/inngest-workflow

This snippet demonstrates how to start a server on port 3000. It configures the server to handle fetch requests from the application. This is essential for enabling Inngest to send events.

```javascript
const srv = serve({
  fetch: app.fetch,
  port: 3000
});
```

--------------------------------

### Install Dependencies using pnpm

Source: https://mastra.ai/en/examples/agents/deploying-mcp-server

This command installs the necessary Mastra packages (@mastra/mcp, @mastra/core) and the tsup build tool using the pnpm package manager.

```bash
pnpm add @mastra/mcp @mastra/core tsup
```

--------------------------------

### Create tsconfig.json File

Source: https://mastra.ai/ja/docs/local-dev/add-to-existing-project

This snippet demonstrates the basic creation of a tsconfig.json file, which is essential for configuring the TypeScript compiler. No external dependencies are required.

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "isolatedModules": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

--------------------------------

### Start MCPServer with Standard I/O (TypeScript)

Source: https://mastra.ai/en/reference/tools/mcp-server

Initiates the MCPServer to communicate via standard input and output, suitable for command-line execution. This method returns a Promise that resolves when the server has started.

```typescript
const server = new MCPServer({
 // example configuration above
});
await server.startStdio();
```

--------------------------------

### Create Mastra Project with pnpm

Source: https://mastra.ai/en/reference/cli/create-mastra

Initialize a Mastra project using `pnpm create mastra@latest`. This command facilitates both interactive project creation and setup with predefined parameters such as project name and template.

```bash
pnpm create mastra@latest

```

```bash
pnpm create mastra@latest --template coding-agent

```

--------------------------------

### Integrate Mastra with Astro

Source: https://mastra.ai/en/models/gateways/fireworks-ai

Guides on setting up and using Mastra AI within the Astro web framework. Details on installation, configuration, and basic usage patterns are provided.

```mdx
import Mastra from '@mastra/core';

const mastra = new Mastra();

async function handleRequest(request) {
  const prompt = 'Tell me a joke.';
  const response = await mastra.generateText(prompt);
  return new Response(response);
}

export async function GET(context) {
  return handleRequest(context.request);
}
```

--------------------------------

### Manual Installation for VSCode

Source: https://mastra.ai/ja/reference/cli/mcp-docs-server

This details the manual installation of the MCP Docs Server for VSCode. It involves creating a specific directory and configuration file within the project.

```json
{
  "VSCode": "作成された .vscode"
}
```

--------------------------------

### Calling Agents Example (Python)

Source: https://mastra.ai/en/models/providers/fastrouter

Demonstrates how to invoke AI agents within the Mastra framework. This example showcases the basic structure for agent interaction and is useful for understanding the entry point of agent execution. No external dependencies beyond the Mastra library are explicitly mentioned.

```python
from mastra import Agent

# Assuming 'my_agent' is a pre-configured Agent instance
# For example:
# my_agent = Agent(name='MyAgent', prompt='You are a helpful assistant.', model='openai:gpt-3.5-turbo')

response = my_agent.call(message="Hello, how are you?")
print(response)
```

--------------------------------

### Guides for Building with Mastra

Source: https://mastra.ai/en/reference/core/getWorkflow

Guides on creating various AI components using the Mastra framework.

```APIDOC
## GET /en/guides/guide/chef-michel

### Description
Guide on creating a Chef Assistant agent in Mastra to help users cook meals with available ingredients.

### Method
GET

### Endpoint
/en/guides/guide/chef-michel

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **title** (string) - The title of the guide.
- **description** (string) - A brief description of the guide's content.

#### Response Example
```json
{
  "title": "Building an AI Chef Assistant | Mastra Agent Guides",
  "description": "Guide on creating a Chef Assistant agent in Mastra to help users cook meals with available ingredients."
}
```

## GET /en/guides/guide/stock-agent

### Description
Guide on creating a simple stock agent in Mastra to fetch the last day's closing stock price for a given symbol.

### Method
GET

### Endpoint
/en/guides/guide/stock-agent

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **title** (string) - The title of the guide.
- **description** (string) - A brief description of the guide's content.

#### Response Example
```json
{
  "title": "Building an AI Stock Agent | Mastra Agents | Guides",
  "description": "Guide on creating a simple stock agent in Mastra to fetch the last day's closing stock price for a given symbol."
}
```

## GET /en/guides/guide/ai-recruiter

### Description
Guide on building a recruiter workflow in Mastra to gather and process candidate information using LLMs.

### Method
GET

### Endpoint
/en/guides/guide/ai-recruiter

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **title** (string) - The title of the guide.
- **description** (string) - A brief description of the guide's content.

#### Response Example
```json
{
  "title": "Building an AI Recruiter | Mastra Workflows | Guides",
  "description": "Guide on building a recruiter workflow in Mastra to gather and process candidate information using LLMs."
}
```

## GET /en/guides/guide/research-assistant

### Description
Guide on creating an AI research assistant that can analyze and answer questions about academic papers using RAG.

### Method
GET

### Endpoint
/en/guides/guide/research-assistant

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **title** (string) - The title of the guide.
- **description** (string) - A brief description of the guide's content.

#### Response Example
```json
{
  "title": "Building a Research Paper Assistant | Mastra RAG Guides",
  "description": "Guide on creating an AI research assistant that can analyze and answer questions about academic papers using RAG."
}
```

## GET /en/guides/guide/notes-mcp-server

### Description
A step-by-step guide to creating a fully-featured MCP (Model Context Protocol) server for managing notes using the Mastra framework.

### Method
GET

### Endpoint
/en/guides/guide/notes-mcp-server

### Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **title** (string) - The title of the guide.
- **description** (string) - A brief description of the guide's content.

#### Response Example
```json
{
  "title": "MCP Server: Building a Notes MCP Server | Mastra Guide",
  "description": "A step-by-step guide to creating a fully-featured MCP (Model Context Protocol) server for managing notes using the Mastra framework."
}
```
```

--------------------------------

### API Request for Agent Initialization

Source: https://mastra.ai/ja/docs/frameworks/ai-sdk

This JavaScript snippet illustrates how to initialize an agent by fetching data. It uses `await` to ensure the agent is ready before proceeding.

```javascript
const myAgent = await Agent.create({});

```

--------------------------------

### AI SDK Provider Instance Configuration Reference (Markdown)

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/sveltekit

This markdown snippet provides a link to external documentation for detailed configuration of the AI SDK provider instance. It guides users to the OpenAI provider instance documentation for further information.

```markdown
self.__next_f.push([
  1,
  "92:[\"$\",\"blockquote\",null,{\"className\":\"x:not-first:mt-\"[1.25em] x:border-gray-300 x:italic x:text-gray-700 x:dark:border-gray-700 x:dark:text-gray-400 x:border-s-2 x:ps-\"[1.5em]\",\"children\":[substack{\"\n\",[\"$\",\"p\",null,{\"className\":\"x:not-first:mt-\"[1.25em] x:leading-7\",\"children\":[\"More configuration details are available in the AI SDK docs. See \",[\"$\",\"a\",null,{\"href\":\"https://ai-sdk.dev/providers/ai-sdk-providers/openai#provider-instance\",\"target\":\"_blank\",\"rel\":\"noreferrer\",\"className\":\"x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]\",\"children\":[\"Provider Instance\",[\" \",[\"$\",\"svg\",null,{\"fill\":\"none\",\"stroke\":\"currentColor\",\"strokeLinecap\":\"round\",\"strokeLinejoin\":\"round\",\"strokeWidth\":1.7,\"viewBox\":\"0 0 24 24\",\"height\":\"1em\",\"className\":\"x:inline x:align-baseline x:shrink-0\",\"children\":[[\"$\",\"path\",null,{\"d\":\"M7 17L17 7\"}],[\"$\",\"path\",null,{\"d\":\"M7 7h10v10\"}]]}]]}]},\" for more information.\"}]}],\"\\n\"}]}\n"
```

--------------------------------

### Mastra Guides Overview with CardGrid

Source: https://mastra.ai/en/guides

This snippet displays an overview of Mastra guides using a CardGrid component. It includes titles, descriptions, and links to individual guides. The component is likely part of a web framework like React, given the JSX syntax.

```jsx
import { CardGrid, CardGridItem } from "@/components/cards/card-grid";

# Guides

While examples show quick implementations and docs explain specific features, these guides are a bit longer and designed to demonstrate core Mastra concepts:

<CardGrid>
 <CardGridItem
 title="AI Recruiter"
 description="Create a workflow that processes candidate resumes and conducts interviews, demonstrating branching logic and LLM integration in Mastra workflows."
 href="./guides/guide/ai-recruiter"
 />
 <CardGridItem
 title="Chef Assistant"
 description="Build an AI chef agent that helps users cook meals with available ingredients, showing how to create interactive agents with custom tools."
 href="./guides/guide/chef-michel"
 />
 <CardGridItem
 title="Research Assistant"
 description="Develop an AI research assistant that analyzes academic papers using Retrieval Augmented Generation (RAG), demonstrating document processing and question answering."
 href="./guides/guide/research-assistant"
 />
 <CardGridItem
 title="Stock Agent"
 description="Implement a simple agent that fetches stock prices, illustrating the basics of creating tools and integrating them with Mastra agents."
 href="./guides/guide/stock-agent"
 />
 <CardGridItem
 title="Notes MCP Server"
 description="Build an AI notes assistant that helps users manage their notes, showing how to create interactive agents with custom tools."
 href="./guides/guide/notes-mcp-server"
 />
</CardGrid>
```

--------------------------------

### Workflow Legacy: start

Source: https://mastra.ai/en/reference/storage/libsql

Begins the execution of a workflow run using the `start()` method.

```APIDOC
## POST /en/reference/legacyWorkflows/start

### Description
Begins execution of a workflow run.

### Method
POST

### Endpoint
/en/reference/legacyWorkflows/start

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
(Not specified in the provided text)

### Request Example
(Not specified in the provided text)

### Response
#### Success Response (200)
(Not specified in the provided text)

#### Response Example
(Not specified in the provided text)
```

--------------------------------

### ChromaDB Setup and Usage (JavaScript)

Source: https://mastra.ai/en/reference/vectors/chroma

Demonstrates how to set up and use the ChromaVector class for vector search. This includes creating a ChromaDB client with connection details and performing operations like adding documents and searching.

```javascript
// Assuming ChromaVector is imported and initialized as 'chroma'

// Add documents
await chroma.addDocuments([
  { id: "doc1", content: "This is the first document.", metadata: { source: "file1.txt" } },
  { id: "doc2", content: "This is the second document.", metadata: { source: "file2.txt" } },
]);

// Search documents
const results = await chroma.search("search query", {
  limit: 5,
  filter: { source: "file1.txt" },
});

console.log(results);
```

--------------------------------

### Migration Guide: VNext to Standard APIs

Source: https://mastra.ai/en/docs/server-db/local-dev-playground

Guide for migrating from VNext to Standard APIs within the Mastra ecosystem.

```APIDOC
## Migration Guide: VNext to Standard APIs

### Description
Guide for migrating from VNext to Standard APIs within the Mastra ecosystem.

### Method
N/A

### Endpoint
/en/reference/agents/migration-guide

### Parameters
None

### Request Example
None

### Response
None
```

--------------------------------

### Get Streamable HTTP Transport

Source: https://mastra.ai/en/reference/tools/mcp-server

Retrieves the HTTP communication transport object if the server was started with `startHTTP()`. Used for internal checks and testing of streamable HTTP communication.

```typescript
getStreamableHTTPTransport(): StreamableHTTPServerTransport | undefined
```

--------------------------------

### Example Usage of Regions Configuration

Source: https://mastra.ai/en/docs/deployment/serverless-platforms/vercel-deployer

An example illustrating the usage of the 'regions' configuration, showing how to pass an array of region identifiers.

```typescript
['sfo1','iad1']
```

--------------------------------

### AITracing Interface

Source: https://mastra.ai/en/reference/observability/ai-tracing/interfaces

The primary interface for interacting with the AI Tracing system. It provides methods to get configuration, exporters, processors, start spans, and shut down the tracing service.

```APIDOC
## AITracing Interface

### Description
Provides the main entry point for AI Tracing operations, allowing users to manage tracing configurations, spans, and resources.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
N/A

### Request Example
N/A

### Response
N/A

```typescript
interface AITracing {
  /** Get current configuration */
  getConfig(): Readonly<Required<TracingConfig>>;

  /** Get all exporters */
  getExporters(): readonly AITracingExporter[];

  /** Get all processors */
  getProcessors(): readonly AISpanProcessor[];

  /** Get the logger instance (for exporters and other components) */
  getLogger(): IMastraLogger;

  /** Start a new span of a specific AISpanType */
  startSpan<TType extends AISpanType>(options: StartSpanOptions<TType>): AISpan<TType>;

  /** Shutdown AI tracing and clean up resources */
  shutdown(): Promise<void>;
}
```
```

--------------------------------

### Example Function with AI SDKs and File System

Source: https://mastra.ai/en/docs/voice/overview

Demonstrates a potential function structure that might utilize the imported AI SDKs and file system operations. This snippet shows variable declarations and potential function calls, though the implementation details are omitted.

```javascript
const openai = new OpenAI();
const elevenLabsVoice = new ElevenLabsVoice();
const fileStream = createReadStream('path/to/your/file.txt');

async function processTextWithAI(text) {
  // Placeholder for OpenAI API call
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: text }],
    model: 'gpt-3.5-turbo',
  });
  console.log(completion.choices[0].message.content);

  // Placeholder for ElevenLabs API call
  const audioStream = elevenLabsVoice.synthesize({
    text: 'Hello from Mastra AI!',
    voice: 'elevenlabs-voice-id',
  });
  audioStream.pipe(fs.createWriteStream('output.mp3'));
}

processTextWithAI('Translate this text to French.');
```

--------------------------------

### Install Mastra Dependencies

Source: https://mastra.ai/en/docs/memory/overview

Installs the core Mastra library along with memory and LibSQL storage adapter dependencies using npm.

```bash
npm install @mastra/core @mastra/memory @mastra/libsql

```

--------------------------------

### Agent Get Voice API

Source: https://mastra.ai/en/examples/workflows/agent-as-step

Documentation for the `Agent.getVoice()` method in Mastra agents, which retrieves the voice provider for speech capabilities.

```APIDOC
## GET /api/agents/getVoice

### Description
Retrieves the voice provider for speech capabilities.

### Method
GET

### Endpoint
/api/agents/getVoice

### Parameters
No parameters required.

### Request Example
```
GET /api/agents/getVoice
```

### Response
#### Success Response (200)
- **voice_provider** (string) - The name of the voice provider (e.g., 'Amazon Polly', 'Google TTS').
- **voice_settings** (object) - Settings related to the voice.

#### Response Example
```json
{
  "voice_provider": "Amazon Polly",
  "voice_settings": {
    "language": "en-US",
    "voice_id": "Joanna"
  }
}
```
```

--------------------------------

### CLI Commands

Source: https://mastra.ai/en/reference/workflows/run-methods/start

Documentation for command-line interface commands used to manage and interact with Mastra.

```APIDOC
## CLI Command: create-mastra

### Description
Initializes a new Mastra project.

### Method
CLI Command

### Endpoint
create-mastra

### Parameters
None

### Request Example
```bash
mastra create-mastra
```

### Response
None (executes project creation)
```

```APIDOC
## CLI Command: mastra init

### Description
Initializes a Mastra project in the current directory.

### Method
CLI Command

### Endpoint
mastra init

### Parameters
None

### Request Example
```bash
mastra init
```

### Response
None (configures project)
```

```APIDOC
## CLI Command: mastra dev

### Description
Starts the Mastra development server.

### Method
CLI Command

### Endpoint
mastra dev

### Parameters
None

### Request Example
```bash
mastra dev
```

### Response
None (starts development server)
```

```APIDOC
## CLI Command: mastra build

### Description
Builds the Mastra project for deployment.

### Method
CLI Command

### Endpoint
mastra build

### Parameters
None

### Request Example
```bash
mastra build
```

### Response
None (compiles project assets)
```

```APIDOC
## CLI Command: mastra start

### Description
Starts the Mastra application in production mode.

### Method
CLI Command

### Endpoint
mastra start

### Parameters
None

### Request Example
```bash
mastra start
```

### Response
None (runs application)
```

```APIDOC
## CLI Command: mastra lint

### Description
Lints the Mastra project code.

### Method
CLI Command

### Endpoint
mastra lint

### Parameters
None

### Request Example
```bash
mastra lint
```

### Response
None (checks code quality)
```

```APIDOC
## CLI Command: mastra scorers

### Description
Manages scorers within the Mastra project.

### Method
CLI Command

### Endpoint
mastra scorers

### Parameters
None

### Request Example
```bash
mastra scorers
```

### Response
None (scorer management interface)
```

--------------------------------

### Dynamic Tools Example

Source: https://mastra.ai/en/reference/legacyWorkflows/start

Explains how to create and configure dynamic tools within Mastra. Dynamic tools allow for tools whose parameters or behavior can change based on runtime conditions.

```typescript
import { Agent, Tool } from "@mastra/agent";

// A dynamic tool factory function
function createDynamicMultiplierTool(multiplier: number) {
  return new Tool({
    name: `multiply-by-${multiplier}`,
    description: `Multiplies input by ${multiplier}`,
    inputSchema: { type: "object", properties: { value: { type: "number" } } },
    outputSchema: { type: "object", properties: { result: { type: "number" } } },
    action: async (input) => {
      const result = input.value * multiplier;
      console.log(`${input.value} * ${multiplier} = ${result}`);
      return { result };
    }
  });
}

// Example agent using a dynamically created tool
async function runDynamicToolExample() {
  const dynamicMultiplier = 5;
  const multiplierTool = createDynamicMultiplierTool(dynamicMultiplier);

  const dynamicAgent = new Agent({
    name: "dynamic-tool-agent",
    tools: [multiplierTool],
    prompt: "Use the provided multiplication tool."
  });

  const response = await dynamicAgent.invoke({
    prompt: `What is 10 multiplied by ${dynamicMultiplier}?`
  });
  console.log("Agent response with dynamic tool:", response);
}

// runDynamicToolExample();
```

--------------------------------

### Agent Get Memory API

Source: https://mastra.ai/en/examples/workflows/agent-as-step

Documentation for the `Agent.getMemory()` method in Mastra agents, which retrieves the memory system associated with the agent.

```APIDOC
## GET /api/agents/getMemory

### Description
Retrieves the memory system associated with the agent.

### Method
GET

### Endpoint
/api/agents/getMemory

### Parameters
No parameters required.

### Request Example
```
GET /api/agents/getMemory
```

### Response
#### Success Response (200)
- **memory_type** (string) - The type of memory system (e.g., 'short-term', 'long-term').
- **memory_config** (object) - Configuration details for the memory system.

#### Response Example
```json
{
  "memory_type": "short-term",
  "memory_config": {
    "capacity": 1000,
    "retention_policy": "last_10_interactions"
  }
}
```
```

--------------------------------

### Agent Get Model API

Source: https://mastra.ai/en/examples/workflows/agent-as-step

Documentation for the `Agent.getModel()` method in Mastra agents, which retrieves the language model that powers the agent.

```APIDOC
## GET /api/agents/getModel

### Description
Retrieves the language model that powers the agent.

### Method
GET

### Endpoint
/api/agents/getModel

### Parameters
No parameters required.

### Request Example
```
GET /api/agents/getModel
```

### Response
#### Success Response (200)
- **model_name** (string) - The name of the language model.
- **model_version** (string) - The version of the language model.

#### Response Example
```json
{
  "model_name": "GPT-4",
  "model_version": "1.0"
}
```
```

--------------------------------

### CLI: create-mastra

Source: https://mastra.ai/en/docs/frameworks/agentic-uis/copilotkit

Documentation for the create-mastra command, which creates a new Mastra project with interactive setup options.

```APIDOC
## CLI: create-mastra

### Description
Creates a new Mastra project with interactive setup options.

### Method
CLI Command

### Endpoint
create-mastra

### Parameters
(No specific parameters listed, implies interactive prompts)

### Response
(New Mastra project structure)
```

--------------------------------

### Start Workflow Run with Multiple Inputs

Source: https://mastra.ai/en/docs/workflows/control-flow

Provides an example of initiating a workflow run with a collection of input data. Each input item is processed sequentially through the defined steps.

```typescript
import { mastra } from "./mastra";

const run = await mastra.getWorkflow("testWorkflow").createRunAsync();

const result = await run.start({
 inputData: [{ number: 10 }, { number: 100 }, { number: 200 }]
});
```

--------------------------------

### Run Methods

Source: https://mastra.ai/en/examples/workflows_legacy/conditional-branching

Documentation for methods associated with the Run class, including starting, resuming, watching, and canceling workflow runs.

```APIDOC
## Run Methods Overview

This section details the various methods available for managing and monitoring workflow runs.

### Methods:

*   **`.start(inputData)`**: Starts a workflow run with provided input data.
*   **`.resume(newData)`**: Resumes a suspended workflow run with new data.
*   **`.watch()`**: Allows monitoring of the workflow run's execution.
*   **`.cancel()`**: Cancels an ongoing workflow run.
```

```APIDOC
## Run.start()

### Description
Starts a workflow run with input data.

### Method
`Run.start(inputData)`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
*   `inputData` (object) - Required - The data to be provided to the workflow run upon start.

### Request Example
```json
{
  "inputData": {
    "key": "value"
  }
}
```

### Response
#### Success Response (200)
None (This is a method call, not an API endpoint response)

#### Response Example
None
```

```APIDOC
## Run.resume()

### Description
Resumes a suspended workflow run with new data.

### Method
`Run.resume(newData)`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
*   `newData` (object) - Required - The data to be provided to the workflow run upon resuming.

### Request Example
```json
{
  "newData": {
    "key": "value"
  }
}
```

### Response
#### Success Response (200)
None (This is a method call, not an API endpoint response)

#### Response Example
None
```

```APIDOC
## Run.watch()

### Description
Allows you to monitor the execution of a workflow run.

### Method
`Run.watch()`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
None (This is a method call, not an API endpoint response)

#### Response Example
None
```

```APIDOC
## Run.cancel()

### Description
Cancels a workflow run.

### Method
`Run.cancel()`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
None (This is a method call, not an API endpoint response)

#### Response Example
None
```

--------------------------------

### JavaScript: Initializing Agent Tools Configuration

Source: https://mastra.ai/en/examples/agents/deploying-mcp-server

This JavaScript snippet demonstrates how to initialize an array of tools for an agent. It shows the basic structure for defining tool configurations and provides comments for further customization. This is useful for setting up the agent's capabilities.

```javascript
const tools = // You can then get tools or toolsets from this configuration to use in your agent
```

--------------------------------

### voice.addInstructions()

Source: https://mastra.ai/en/examples/scorers/faithfulness

Adds instructions to guide the voice model's behavior using the addInstructions() method in voice providers.

```APIDOC
## POST /voice/addInstructions

### Description
Adds instructions to guide the voice model's behavior.

### Method
POST

### Endpoint
/voice/addInstructions

### Parameters
#### Query Parameters
- **provider** (string) - Required - The voice provider to update.

#### Request Body
- **instructions** (string) - Required - The instructions to add.

### Request Example
```json
{
  "instructions": "Always respond in a polite and formal tone."
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the status of instruction addition, e.g., "instructions_added".

#### Response Example
```json
{
  "status": "instructions_added"
}
```
```

--------------------------------

### Mastra Class Reference

Source: https://mastra.ai/en/examples/deployment

Documentation for the `Mastra` class, which serves as the core entry point for interacting with the Mastra framework. It allows management of agents, workflows, MCP servers, and server endpoints.

```APIDOC
## Mastra Class

### Description
The `Mastra` class is the central hub for managing various components within the Mastra framework. It provides methods to access and control agents, workflows, storage, server instances, and more.

### Methods

- **`getAgent(name)`**: Retrieves an agent by its name.
- **`getAgents()`**: Retrieves all configured agents.
- **`getAgentById(id)`**: Retrieves an agent by its unique identifier.
- **`getWorkflow(name)`**: Retrieves a workflow by its name.
- **`getWorkflows()`**: Retrieves all configured workflows.
- **`getMemory()`**: Accesses the memory management component.
- **`setStorage(storage)`**: Configures the storage mechanism.
- **`getServer()`**: Retrieves the main server instance.
- **`getMCPServer()`**: Retrieves the MCP (Model Context Protocol) server instance.
- **`getVector(name)`**: Retrieves a vector store by its name.
- **`getVectors()`**: Retrieves all configured vector stores.
- **`getDeployer()`**: Accesses the deployment component.
- **`getStorage()`**: Retrieves the configured storage mechanism.
- **`getMCPServers()`**: Retrieves all configured MCP servers.
- **`getTelemetry()`**: Accesses the telemetry component.
- **`setTelemetry(telemetry)`**: Configures the telemetry settings.
- **`getLogs()`**: Retrieves all logs.
- **`getLogsByRunId(runId)`**: Retrieves logs filtered by a specific run ID.
- **`getLogger()`**: Accesses the logger component.
- **`setLogger(logger)`**: Configures the logger.
- **`getScorers()`**: Retrieves all configured scorers.
- **`getScorer(name)`**: Retrieves a scorer by its name.
- **`getScorerByName(name)`**: Retrieves a scorer by its name (alias for `getScorer`).

### Example
```javascript
// Assuming 'mastra' is an initialized Mastra instance
const agents = await mastra.getAgents();
console.log(agents);

const workflow = await mastra.getWorkflow('my-workflow');
console.log(workflow);
```
```

--------------------------------

### List of Legacy Workflow Examples (HTML/JSX)

Source: https://mastra.ai/en/examples/workflows_legacy/creating-a-workflow

This snippet renders an unordered list (`<ul>`) containing list items (`<li>`), each representing a link to a legacy workflow example. The structure suggests that each list item will contain further elements, likely including links or descriptions.

```html
self.__next_f.push([1,"1d:[\"$\",\"ul\",null,{\"className\":\"x:[:is(ol,ul)_omerang] :my-[.75em] x:not-first:mt-[1.25em] x:list-disc x:ms-[1.5em]\",\"children\":[\"\\n\",[\"$\",\"li\",null,{\"className\":\"x:my-[.5em]\",\"children\":[\"$\",\"$L3f\",null,{}]}]])
```

--------------------------------

### Node.js Server Listening and Logging

Source: https://mastra.ai/en/docs/frameworks/servers/express

This snippet demonstrates how to start a Node.js server and log its running status to the console. It includes setting up an application to listen on a specified port and provides feedback on the server's operational URL. This is common in web development frameworks.

```javascript
app.listen(port, () => {
  console.log(`Server is running at http://${port}`);
});
```

--------------------------------

### RAG API Endpoints

Source: https://mastra.ai/en/docs/getting-started/installation

This section covers the API endpoints related to Retrieval Augmented Generation (RAG), including document processing, embeddings, and reranking.

```APIDOC
## Reference: MDocument | Document Processing | RAG | Mastra Docs

### Description
Documentation for the `MDocument` class in Mastra, which handles document processing and chunking.

### Method
N/A (Class Documentation)

### Endpoint
N/A

### Parameters
N/A

### Response
N/A

### Remarks
This class is central to preparing documents for RAG systems.
```

```APIDOC
## Reference: .chunk() | Document Processing | RAG | Mastra Docs

### Description
Documentation for the `chunk` function in Mastra, which splits documents into smaller segments using various strategies.

### Method
N/A (Function Documentation)

### Endpoint
N/A

### Parameters
N/A

### Response
N/A

### Remarks
Supports different chunking strategies for optimal retrieval.
```

```APIDOC
## Reference: embed() | Document Embedding | RAG | Mastra Docs

### Description
Documentation for embedding functionality in Mastra using the AI SDK.

### Method
N/A (Function Documentation)

### Endpoint
N/A

### Parameters
N/A

### Response
N/A

### Remarks
Converts text into vector embeddings for semantic search.
```

```APIDOC
## Reference: ExtractParams | Document Processing | RAG | Mastra Docs

### Description
Documentation for metadata extraction configuration in Mastra.

### Method
N/A (Configuration Documentation)

### Endpoint
N/A

### Parameters
N/A

### Response
N/A

### Remarks
Allows customization of how metadata is extracted from documents.
```

```APIDOC
## Reference: rerank() | Document Retrieval | RAG | Mastra Docs

### Description
Documentation for the `rerank` function in Mastra, which provides advanced reranking capabilities for vector search results.

### Method
N/A (Function Documentation)

### Endpoint
N/A

### Parameters
N/A

### Response
N/A

### Remarks
Improves the relevance of search results by reordering them.
```

```APIDOC
## Reference: rerankWithScorer() | Document Retrieval | RAG | Mastra Docs

### Description
Documentation for the `rerankWithScorer` function in Mastra, which provides advanced reranking capabilities for vector search results using a custom scorer.

### Method
N/A (Function Documentation)

### Endpoint
N/A

### Parameters
N/A

### Response
N/A

### Remarks
Offers more flexibility in reranking by allowing a custom scoring function.
```

```APIDOC
## Reference: Metadata Filters | Metadata Filtering | RAG | Mastra Docs

### Description
Documentation for metadata filtering capabilities in Mastra, which allow for precise querying of vector search results across different vector stores.

### Method
N/A (Feature Documentation)

### Endpoint
N/A

### Parameters
N/A

### Response
N/A

### Remarks
Enables filtering of search results based on associated metadata.
```

```APIDOC
## Reference: DatabaseConfig | RAG | Mastra Docs

### Description
API reference for database-specific configuration types used with vector query tools in Mastra RAG systems.

### Method
N/A (Configuration Documentation)

### Endpoint
N/A

### Parameters
N/A

### Response
N/A

### Remarks
Details configuration options for various databases used in RAG.
```

```APIDOC
## Reference: GraphRAG | Graph-based RAG | RAG | Mastra Docs

### Description
Documentation for the `GraphRAG` class in Mastra, which implements a graph-based approach to retrieval augmented generation.

### Method
N/A (Class Documentation)

### Endpoint
N/A

### Parameters
N/A

### Response
N/A

### Remarks
Utilizes graph structures to enhance the RAG process.
```

--------------------------------

### JavaScript: Create Workflow Run

Source: https://mastra.ai/ja/reference/legacyWorkflows/resume

This JavaScript snippet demonstrates how to create a new run for a workflow. It utilizes the `createRun` function and accepts parameters like `runId`, `resume`, and `start`. It also shows how to pass input data.

```javascript
const { runId, resume, start } = workflow.createRun();
// ... later 
await start({
  inputData: {
    data: "some data"
  }
});
```

--------------------------------

### Migration Guide

Source: https://mastra.ai/en/guides/guide/chef-michel

Guide for migrating from VNext to Standard APIs.

```APIDOC
## Migration Guide: VNext to Standard APIs

### Description
Documentation to assist users in migrating from the VNext version of Mastra APIs to the Standard APIs.

### Method
N/A (Informational)

### Endpoint
/en/reference/agents/migration-guide

### Parameters
N/A

### Request Example
N/A

### Response
N/A (Informational Content)
```

--------------------------------

### Initialize OpenAI Realtime Voice Agent

Source: https://mastra.ai/en/docs/voice/overview

Demonstrates setting up an agent with OpenAI's real-time voice capabilities. It includes initializing the agent, configuring the OpenAI voice provider, and handling audio streams for both speaking and listening.

```typescript
import { Agent } from '@mastra/core/agent';
import { openai } from '@ai-sdk/openai';
import { playAudio, getMicrophoneStream } from '@mastra/node-audio';
import { OpenAIRealtimeVoice } from "@mastra/voice-openai-realtime";

const voiceAgent = new Agent({
 name: "Voice Agent",
 instructions: "You are a voice assistant that can help users with their tasks.",
 model: openai("gpt-4o"),
 voice: new OpenAIRealtimeVoice(),
});

// Listen for agent audio responses
voiceAgent.voice.on('speaker', ({ audio }) => {
 playAudio(audio);
});

// Initiate the conversation
await voiceAgent.voice.speak('How can I help you today?');

// Send continuous audio from the microphone
const micStream = getMicrophoneStream();
await voiceAgent.voice.send(micStream);
```

--------------------------------

### Get Tool List Information - JavaScript

Source: https://mastra.ai/en/reference/tools/mcp-server

Retrieves a list of tools configured when the server was created. This is a read-only list, primarily intended for debugging purposes to verify tool setup.

```javascript
getToolListInfo(): ToolList
```

--------------------------------

### Tool Agent Calling Example

Source: https://mastra.ai/en/reference/legacyWorkflows/start

Demonstrates how agents can call external tools within Mastra. This is crucial for agents needing to perform actions or retrieve data from external services.

```typescript
import { Agent, Tool } from "@mastra/agent";

// Define a tool that the agent can use
const searchTool = new Tool({
  name: "web-search",
  description: "Searches the web for information.",
  inputSchema: { type: "object", properties: { query: { type: "string" } } },
  outputSchema: { type: "object", properties: { results: { type: "string" } } },
  action: async (input) => {
    console.log(`Searching the web for: ${input.query}`);
    // Replace with actual web search API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return { results: `Results for ${input.query}` };
  }
});

// Define an agent that utilizes the tool
const searchingAgent = new Agent({
  name: "searching-agent",
  tools: [searchTool],
  prompt: "You are a helpful assistant. Use the available tools to answer questions.",
  // Agent's internal logic to decide when and how to use tools
  // This often involves parsing the prompt and tool definitions
});

// Example of invoking the agent to use the tool
async function runAgentExample() {
  const query = "What is Mastra AI?";
  const response = await searchingAgent.invoke({
    prompt: `Please find information about ${query} using the available tools.`
  });
  console.log("Agent response using tool:", response);
}

// runAgentExample();
```

--------------------------------

### Get Streamable HTTP Transport Object

Source: https://mastra.ai/en/reference/tools/mcp-server

Retrieves the object that manages the streamable HTTP communication when the server was started using `startHTTP()`. This is primarily for internal checks or testing purposes.

```typescript
import { StreamableHTTPServerTransport } from "@multicall/mcp";

// Assuming 'server' is an instance of your MCP server
// const server = new MCPServer(...);

const httpTransport: StreamableHTTPServerTransport | undefined = server.getStreamableHTTPTransport();

if (httpTransport) {
  console.log("Streamable HTTP transport is available.");
  // You can now interact with the httpTransport object if needed
} else {
  console.log("Streamable HTTP transport is not active.");
}

```

--------------------------------

### Run Workflow and Get State (JavaScript)

Source: https://mastra.ai/en/reference/streaming/workflows/stream

Example of how to initiate a workflow stream and retrieve its state using the `run.stream` method. This is useful for managing and monitoring long-running AI processes.

```javascript
const { getWorkflowState } = await run.stream({
  inputData: {
    value: "initial data"
  }
});
const result = await getWorkflowState();
```

--------------------------------

### voice.addInstructions()

Source: https://mastra.ai/en/reference/legacyWorkflows/resume

Adds instructions to guide the voice model's behavior.

```APIDOC
## POST /voice/addInstructions

### Description
This endpoint allows you to add instructions to guide the voice model's behavior. This is useful for controlling the tone, style, or specific actions of the voice assistant.

### Method
POST

### Endpoint
`/voice/addInstructions`

### Parameters
#### Request Body
- **instructions** (string) - Required - The instructions to be added for the voice model.

### Request Example
```json
{
  "instructions": "Speak in a friendly and enthusiastic tone."
}
```

### Response
#### Success Response (200)
- **message** (string) - A confirmation message indicating that instructions were added successfully.

#### Response Example
```json
{
  "message": "Instructions added successfully."
}
```
```

--------------------------------

### Instantiate Specific Workflow Instance (JavaScript)

Source: https://mastra.ai/en/reference/client-js/workflows

Provides an example of how to get an instance of a specific workflow. The code snippet illustrates the syntax for accessing a workflow by its defined constant name.

```javascript
const workflowInstance = mastraClient.getWorkflowInstance('yourWorkflowName');
```

--------------------------------

### Mastra AI Examples Overview

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/astro

An overview of practical examples for AI development with Mastra, covering text generation, RAG, structured outputs, and multi-modal interactions. This page highlights how to build AI applications using various providers like OpenAI, Anthropic, and Google Gemini. Specific code examples are linked from this overview.

```mdx
\"name\": \"index\", \"route\": \"/en/examples\", \"frontMatter\":{\"title\":\"Examples List: Workflows, Agents, RAG | Mastra Docs\",\"description\":\"Explore practical examples of AI development with Mastra, including text generation, RAG implementations, structured outputs, and multi-modal interactions. Learn how to build AI applications using OpenAI, Anthropic, and Google Gemini.\",\"filePath\":\"src/content/en/examples/index.mdx\"},\"title\": \"Overview\"}
```

--------------------------------

### Install Mastra AI Dependencies with pnpm

Source: https://mastra.ai/ja/docs/getting-started/installation

This snippet demonstrates how to install Mastra AI project dependencies using pnpm. It covers initialization and adding both regular and development dependencies.

```bash
pnpm add @mastra/core@latest zod@^3 @ai-sdk/openai@^1
pnpm add typescript tsx @types/node mastra@latest --save-dev
```

--------------------------------

### Get MCP Server By ID and Version

Source: https://mastra.ai/en/examples/scorers/faithfulness

Retrieves a specific MCP server instance by its ID and an optional version.

```APIDOC
## GET /api/mcp/servers/{serverId}

### Description
Retrieves a specific MCP server instance by ID and optional version.

### Method
GET

### Endpoint
`/api/mcp/servers/{serverId}`

### Parameters
#### Path Parameters
- **serverId** (string) - Required - The unique identifier of the MCP server.

#### Query Parameters
- **version** (string) - Optional - The specific version of the MCP server to retrieve.

### Response
#### Success Response (200)
- **mcpServer** (object) - An object representing the MCP server instance.
  - **id** (string) - The server's unique identifier.
  - **version** (string) - The server's version.
  - **status** (string) - The current status of the server.

#### Response Example
```json
{
  "mcpServer": {
    "id": "mcp-server-001",
    "version": "1.2.0",
    "status": "running"
  }
}
```
```

--------------------------------

### Build Mastra App with pnpm, yarn, or bun

Source: https://mastra.ai/ja/docs/deployment/cloud-providers/digital-ocean

These commands demonstrate how to build a Mastra application using different package managers: pnpm, yarn, and bun. Ensure the respective package manager is installed in your environment before executing these commands.

```bash
pnpm build
```

```bash
yarn build
```

```bash
bun run build
```

--------------------------------

### Legacy Workflow: Start Execution

Source: https://mastra.ai/en/reference/cli/lint

Documentation for the `start()` method in workflows, which begins execution of a workflow run.

```APIDOC
## .start()

### Description
Begins the execution of a workflow run.

### Method
Not Applicable (part of workflow definition)

### Endpoint
Not Applicable (part of workflow definition)

### Parameters
None

### Request Example
```json
{
  "workflow": {
    "start": {
      "entry_point": "start_node"
    }
  }
}
```

### Response
Not Applicable (part of workflow definition)
```

--------------------------------

### Zod String and Object Schema Example

Source: https://mastra.ai/en/examples/workflows_legacy/conditional-branching

This code snippet illustrates the use of Zod for defining schema types. It shows how to define a string literal schema (e.g., 'start') and an object schema. This is fundamental for validating data structures and ensuring data integrity within an application.

```typescript
id: "start",
outputSchema: z.object({

```

--------------------------------

### Define and Run Conditional Workflow (TypeScript)

Source: https://mastra.ai/en/examples/workflows_legacy/conditional-branching

This snippet defines a legacy workflow with conditional branching using functional conditions. It includes steps for starting, processing high/low values, and a final summary step. The workflow is registered and an example function demonstrates how to run it with different inputs.

```typescript
from "@mastra/core";
import { LegacyStep, LegacyWorkflow } from "@mastra/core/workflows/legacy";
import { z } from "zod";

// Step that provides the initial value
const startStep = new LegacyStep({
 id: "start",
 outputSchema: z.object({
 value: z.number(),
 }),
 execute: async ({ context }) => {
 // Get the value from the trigger data
 const value = context.triggerData.inputValue;
 return { value };
 },
});

// Step that handles high values
const highValueStep = new LegacyStep({
 id: "highValue",
 outputSchema: z.object({
 result: z.string(),
 }),
 execute: async ({ context }) => {
 const value = context.getStepResult<{ value: number }>("start")?.value;
 return { result: `High value processed: ${value}` };
 },
});

// Step that handles low values
const lowValueStep = new LegacyStep({
 id: "lowValue",
 outputSchema: z.object({
 result: z.string(),
 }),
 execute: async ({ context }) => {
 const value = context.getStepResult<{ value: number }>("start")?.value;
 return { result: `Low value processed: ${value}` };
 },
});

// Final step that summarizes the result
const finalStep = new LegacyStep({
 id: "final",
 outputSchema: z.object({
 summary: z.string(),
 }),
 execute: async ({ context }) => {
 // Get the result from whichever branch executed
 const highResult = context.getStepResult<{ result: string }>
 ("highValue",
 )?.result;
 const lowResult = context.getStepResult<{ result: string }>
 ("lowValue",
 )?.result;

 const result = highResult || lowResult;
 return { summary: `Processing complete: ${result}` };
 },
});

// Build the workflow with conditional branching
const conditionalWorkflow = new LegacyWorkflow({
 name: "conditional-workflow",
 triggerSchema: z.object({
 inputValue: z.number(),
 }),
});

conditionalWorkflow
 .step(startStep)
 .if(async ({ context }) => {
 const value = context.getStepResult<{ value: number }>("start")?.value ?? 0;
 return value >= 10; // Condition: value is 10 or greater
 })
 .then(highValueStep)
 .then(finalStep)
 .else()
 .then(lowValueStep)
 .then(finalStep) // Both branches converge on the final step
 .commit();

// Register the workflow
const mastra = new Mastra({
 legacy_workflows: { conditionalWorkflow },
});

// Example usage
async function runWorkflow(inputValue: number) {
 const workflow = mastra.legacy_getWorkflow("conditionalWorkflow");
 const { start } = workflow.createRun();

 const result = await start({
 triggerData: { inputValue },
 });

 console.log("Workflow result:", result.results);
 return result;
}

// Run with a high value (follows the "if" branch)
const result1 = await runWorkflow(15);
// Run with a low value (follows the "else" branch)
const result2 = await runWorkflow(5);

console.log("Result 1:", result1);
console.log("Result 2:", result2);

```

--------------------------------

### Initialize Planning Agent with OpenAI | Mastra AI

Source: https://mastra.ai/ja/examples/workflows_vNext/inngest-workflow

Demonstrates how to import and initialize a planning agent using the Mastra core library, specifically configured to use the OpenAI model. This requires installing both `@mastra/core/agent` and `@ai-sdk/openai`.

```javascript
import { Agent } from "@mastra/core/agent"
import { openai } from "@ai-sdk/openai"

// Create a new planning agent that uses the OpenAI model
const planningAgent = new Agent
```

--------------------------------

### Package Management: Install @ai-sdk/react with pnpm

Source: https://mastra.ai/ja/docs/frameworks/ai-sdk

This command uses the pnpm package manager to add the '@ai-sdk/react' library to your project dependencies. It is a common way to manage project packages in JavaScript environments.

```shell
pnpm add @ai-sdk/react

```

--------------------------------

### Contextual Recall Metric Measurement

Source: https://mastra.ai/ja/examples/evals/contextual-recall

This example demonstrates how to use the ContextualRecallMetric to evaluate if provided context information is reflected in the response. It takes a query and response, utilizing an LLM (OpenAI's GPT-4o-mini) to calculate a recall score and provide informational details. Ensure the '@mastra/evals' and '@ai-sdk/openai' packages are installed.

```typescript
import { openai } from "@ai-sdk/openai";
import { ContextualRecallMetric } from "@mastra/evals/llm";

const metric = new ContextualRecallMetric(openai("gpt-4o-mini"), {
  context: [
    "Product features include cloud sync.",
    "Offline mode is available.",
    "Supports multiple devices."
  ]
});

const query = "What are the key features of the product?";
const response = "The product features cloud synchronization, offline mode support, and the ability to work across multiple devices.";

const result = await metric.measure(query, response);

console.log(result);
```

--------------------------------

### Document Processing Example (Conceptual)

Source: https://mastra.ai/en/examples/rag/usage/cot-rag

This snippet demonstrates the conceptual flow for document processing. It outlines the creation of a document and its subsequent processing into chunks. This is a high-level overview of the functionality.

```typescript
// Conceptual code for document processing
// Create a document and process it into chunks:
document = createDocument();
processedDocument = processDocument(document);
```

--------------------------------

### Initializing Mastra AI Instance

Source: https://mastra.ai/en/examples/workflows_legacy/calling-agent

This snippet demonstrates the initialization of a 'Mastra' object, likely an instance of the Mastra AI client or service. It uses keyword arguments to configure the instance, suggesting a flexible setup for different use cases. The exact parameters would depend on the Mastra AI library's design.

```javascript
self.__next_f.push([1,"3b:[\"$\",\"span\",null,{\"children\":[[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"#D81717\",\"--shiki-dark\":\"#FA7B6A\"},\"children\":\"const\"}]),[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-color-text-6)\",\"--shiki-dark\":\"#FFF\"},\"children\":\" mastra\"}]),[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"#D81717\",\"--shiki-dark\":\"#FA7B6"])self.__next_f.push([1,"A\"},\"children\":\" =\"}]),[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"#D81717\",\"--shiki-dark\":\"#FA7B6A\"},\"children\":\" new\"}]),[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"#9829C7\",\"--shiki-dark\":\"#D06BEE\"},\"children\":\" Mastra\"}]),[\"$\",\"span\",null,{\"style\":{\"--shiki-light\":\"var(--light-color-text-6)\",\"--shiki-dark\":\"#FFF\"},\"children\":\"({\"}]])}]\n3c:[\"$\","})])
```

--------------------------------

### Advanced Workflow Example with Async/Await

Source: https://mastra.ai/en/examples/workflows_legacy/suspend-and-resume

This JavaScript code demonstrates an advanced workflow using the async/await pattern. It simulates a content generation process that involves multiple suspension points, requiring human intervention or external data at various stages. The example highlights the use of `runId` and `start` variables.

```javascript
const { runId, start } = registeredWorkflow.legacy_getWorkflow("registeredWorkflow")
const { runId, start } = registeredWorkflow.
```

--------------------------------

### Create Hono Server with Configuration | JavaScript

Source: https://mastra.ai/en/examples/workflows/inngest-workflow

This snippet demonstrates how to create a Hono server instance. It includes asynchronous initialization and configuration for request handling, middleware, and tool definitions. Dependencies include the 'hono' library and potentially other custom modules like 'mastra'.

```javascript
const app = await createHonoServer(mastra, {
  tools: 
});
```

--------------------------------

### Install MCP Server with Cursor (Deep Link)

Source: https://mastra.ai/en/docs/getting-started/mcp-docs-server

Install the Mastra MCP Docs Server in Cursor by clicking the provided button, which initiates a deep link to install the server. This is an alternative to manual configuration.

```html
<a href="cursor://anysphere.cursor-deeplink/mcp/install?name=mastra&config=eyJjb21tYW5kIjoibnB4IC15IEBtYXN0cmEvbWNwLWRvY3Mtc2VydmVyIn0%3D"><img src="https://cursor.com/deeplink/mcp-install-light.svg" alt="Install MCP Server"></a>
```

--------------------------------

### Run Mastra Playground with npm

Source: https://mastra.ai/en/docs/frameworks/servers/express

This command initiates the Mastra playground, allowing you to interact with Mastra's features. It requires Node.js and npm to be installed.

```bash
npm run mastra:dev
```

--------------------------------

### Workflow Start and Resume Logic in TypeScript

Source: https://mastra.ai/en/docs/workflows-legacy/suspend-and-resume

TypeScript code demonstrating how to initiate a Mastra workflow and subsequently resume it. It covers starting a workflow run, checking for suspended steps, and resuming the workflow with new context data. This example is crucial for managing the lifecycle of suspended workflows.

```typescript
// Get the workflow and create a run
const wf = mastra.legacy_getWorkflow("multi-suspend-workflow");
const run = wf.createRun();

// Start the workflow
const initialResult = await run.start({
 triggerData: { input: "initial input" },
});

let promptAgentStepResult = initialResult.activePaths.get("promptAgent");
let promptAgentResumeResult = undefined;

// Check if a step is suspended
if (promptAgentStepResult?.status === "suspended") {
 console.log("Workflow suspended at promptAgent step");

 // Resume the workflow with new context
 const resumeResult = await run.resume({
 stepId: "promptAgent",
 context: { userInput: "Human provided input" },
 });

 promptAgentResumeResult = resumeResult;
}

const improveResponseStepResult =
 promptAgentResumeResult?.activePaths.get("improveResponse");

if (improveResponseStepResult?.status === "suspended") {
 console.log("Workflow suspended at improveResponse step");

 // Resume again with different context
 const finalResult = await run.resume({
 stepId: "improveResponse",
 context: { refined
```

--------------------------------

### MastraJwtAuth Class Usage Example (TypeScript)

Source: https://mastra.ai/ja/reference/auth/jwt

This TypeScript code shows an example of how to integrate the MastraJwtAuth class for authentication within a Mastra application. It demonstrates instantiating Mastra with the experimental_auth option set to a new MastraJwtAuth instance, configured with a secret key for JWT verification. This setup enables JWT-based authentication for the Mastra server.

```typescript
import { Mastra } from \"@mastra/core/mastra\";
import { MastraJwtAuth } from '@mastra/auth';

export const mastra = new Mastra({
 // ..
 server: {
 experimental_auth: new MastraJwtAuth({
 secret: \"<your-secret>\"\n }),
 },
});
```

--------------------------------

### Constructor Parameters

Source: https://mastra.ai/en/reference/voice/google

Configuration options for initializing the Google Voice client.

```APIDOC
## Constructor Parameters

### `GoogleVoice(config?: GoogleModelConfig)`

Initializes the Google Voice client with optional configuration.

#### Parameters

##### `config` (GoogleModelConfig) - Optional
Configuration object for the Google model.

- **`apiKey`** (string) - Optional - Google Cloud API key. Falls back to GOOGLE_API_KEY environment variable.
- **`speaker`** (string) - Optional - Default voice ID to use for text-to-speech. Defaults to 'en-US-Casual-K'.

### `GoogleModelConfig`

#### Properties

- **`apiKey`** (string) - Optional - Google Cloud API key. Falls back to GOOGLE_API_KEY environment variable.
- **`speaker`** (string) - Optional - Default voice ID to use for text-to-speech. Defaults to 'en-US-Casual-K'.
```

--------------------------------

### JavaScript FormData Get City Example

Source: https://mastra.ai/en/docs/frameworks/web-frameworks/astro

Illustrates how to retrieve a specific field, 'city', from a `FormData` object in JavaScript. It uses the `get()` method to access the value and then `toString()` to ensure it's treated as a string. This is useful for extracting data submitted via forms. Dependencies: `FormData` object.

```javascript
const city = formData.get("city").toString();
```

--------------------------------

### Guides - Notes MCP Server

Source: https://mastra.ai/en/reference/core/getLogger

A step-by-step guide to building a comprehensive MCP (Model Context Protocol) server for notes management using the Mastra framework.

```APIDOC
## GET /en/guides/guide/notes-mcp-server

### Description
This guide provides a detailed, step-by-step process for establishing a fully functional MCP (Model Context Protocol) server tailored for notes management. It leverages the Mastra framework to create a robust solution.

### Method
GET

### Endpoint
/en/guides/guide/notes-mcp-server

### Parameters
None

### Request Example
```json
{
  "example": "Accessing guide information does not require a request body or parameters."
}
```

### Response
#### Success Response (200)
- **title** (string) - The title of the guide.
- **description** (string) - A brief overview of the guide's content.
- **filePath** (string) - The path to the guide's source file.

#### Response Example
```json
{
  "title": "MCP Server: Building a Notes MCP Server | Mastra Guide",
  "description": "A step-by-step guide to creating a fully-featured MCP (Model Context Protocol) server for managing notes using the Mastra framework.",
  "filePath": "src/content/en/guides/guide/notes-mcp-server.mdx"
}
```
```

--------------------------------

### Example Usage of KeywordCoverageMetric in JavaScript

Source: https://mastra.ai/en/reference/evals/keyword-coverage

This JavaScript code snippet showcases an example of using the KeywordCoverageMetric. It includes a comment indicating a 'Perfect coverage example' and initializes a constant `result1`. This serves as a basic illustration of how the metric might be applied, although the full calculation and output are not shown. Further context or example data would be needed to fully understand the metric's application.

```javascript
import { KeywordCoverageMetric } from "@mastra/evals/nlp";

const metric = new KeywordCoverageMetric();

// Perfect coverage example
const result1
```

--------------------------------

### TypeScript: High Completeness Example with createCompletenessScorer

Source: https://mastra.ai/en/examples/scorers/completeness

Demonstrates using `createCompletenessScorer` to evaluate a response that comprehensively addresses all aspects of a query. It requires the `@mastra/evals/scorers/llm` package and an LLM model like OpenAI's GPT-4o-mini. The example defines a query and a detailed response, then runs the scorer to get the completeness result.

```typescript
import { openai } from "@ai-sdk/openai";
import { createCompletenessScorer } from "@mastra/evals/scorers/llm";

const scorer = createCompletenessScorer({ model: openai("gpt-4o-mini") });

const query = "Explain the process of photosynthesis, including the inputs, outputs, and stages involved.";
const response =
  "Photosynthesis is the process by which plants convert sunlight into chemical energy. Inputs: Carbon dioxide (CO2) from the air enters through stomata, water (H2O) is absorbed by roots, and sunlight provides energy captured by chlorophyll. The process occurs in two main stages: 1) Light-dependent reactions in the thylakoids convert light energy to ATP and NADPH while splitting water and releasing oxygen. 2) Light-independent reactions (Calvin cycle) in the stroma use ATP, NADPH, and CO2 to produce glucose. Outputs: Glucose (C6H12O6) serves as food for the plant, and oxygen (O2) is released as a byproduct. The overall equation is: 6CO2 + 6H2O + light energy → C6H12O6 + 6O2.";

const result = await scorer.run({
  input: [{ role: 'user', content: query }],
  output: { text: response },
});

console.log(result);
```

--------------------------------

### voice.addInstructions() Method

Source: https://mastra.ai/en/examples/agents/dynamic-agents

Documentation for the addInstructions() method, used to provide instructions to the voice provider.

```APIDOC
## voice.addInstructions()

### Description
Documentation for the addInstructions() method, used to provide instructions to the voice provider.

### Method
N/A (Method within a voice provider)

### Endpoint
N/A

### Parameters
N/A

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Voice: addInstructions()

Source: https://mastra.ai/en/reference/voice/openai-realtime

Adds instructions to guide the voice model's behavior.

```APIDOC
## POST /voice/addInstructions

### Description
Adds specific instructions to influence the behavior or output of the voice model during interactions.

### Method
POST

### Endpoint
/voice/addInstructions

### Parameters
#### Request Body
- **instructions** (string) - Required - The instructions to be provided to the voice model.

### Request Example
```json
{
  "instructions": "Always respond in a formal tone."
}
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation that instructions have been added.

#### Response Example
```json
{
  "status": "instructions_added"
}
```
```

--------------------------------

### Run.start() and Run.resume()

Source: https://mastra.ai/en/docs/streaming/tool-streaming

Documentation for the `Run.start()` and `Run.resume()` methods related to the Run class, likely for initiating or continuing a workflow execution.

```APIDOC
## Run.start() and Run.resume()

### Description
Methods to start or resume a workflow execution instance.

### Method
N/A (These appear to be methods within the Run class, not standalone API endpoints)

### Endpoint
N/A

### Parameters
N/A (Specific parameters not detailed in the provided text)

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Workflow Error Handling Example

Source: https://mastra.ai/en/reference/legacyWorkflows/createRun

Demonstrates how to handle potential validation errors that may occur when the start function is called with an invalid workflow configuration. This is crucial for robust workflow execution.

```typescript
try {
  const { runId, start, watch, resume, resumeWithEvent } = workflow.
createRun();
  await start();
} catch (error) {
  console.error("Workflow failed to start:", error);
}
```
