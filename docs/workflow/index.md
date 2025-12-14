# Workflows overview | Workflows

Workflows in Mastra help you orchestrate complex sequences of tasks with features like branching, parallel execution, resource suspension, and more.

Source: https://mastra.ai/docs/workflows/overview

---

# Workflows overview

Workflows let you define complex sequences of tasks using clear, structured steps rather than relying on the reasoning of a single agent. They give you full control over how tasks are broken down, how data moves between them, and what gets executed when. 

## When to use workflowsDirect link to When to use workflows

Use workflows for tasks that are clearly defined upfront and involve multiple steps with a specific execution order. They give you fine-grained control over how data flows and transforms between steps, and which primitives are called at each stage. 

> 📹 Watch:  → An introduction to workflows, and how they compare to agents YouTube (7 minutes)

## Core principlesDirect link to Core principles

Mastra workflows operate using these principles: 

- Defining steps with createStep, specifying input/output schemas and business logic.
- Composing steps with createWorkflow to define the execution flow.
- Running workflows to execute the entire sequence, with built-in support for suspension, resumption, and streaming results.

## Creating a workflow stepDirect link to Creating a workflow step

Steps are the building blocks of workflows. Create a step using `createStep()`with `inputSchema`and `outputSchema`to define the data it accepts and returns. 

The `execute`function defines what the step does. Use it to call functions in your codebase, external APIs, agents, or tools. 

src/mastra/workflows/test-workflow.ts 
```
import { createStep } from "@mastra/core/workflows";const step1 = createStep({  id: "step-1",  inputSchema: z.object({    message: z.string()  }),  outputSchema: z.object({    formatted: z.string()  }),  execute: async ({ inputData }) => {    const { message } = inputData;    return {      formatted: message.toUpperCase()    };  }});
```

> See the Step Class for a full list of configuration options.

### Using agents and toolsDirect link to Using agents and tools

Workflow steps can also call registered agents or import and execute tools directly, visit the [Using Tools](/docs/agents/using-tools)page for more information. 

## Creating a workflowDirect link to Creating a workflow

Create a workflow using `createWorkflow()`with `inputSchema`and `outputSchema`to define the data it accepts and returns. Add steps using `.then()`and complete the workflow with `.commit()`. 

src/mastra/workflows/test-workflow.ts 
```
import { createWorkflow, createStep } from "@mastra/core/workflows";import { z } from "zod";const step1 = createStep({...});export const testWorkflow = createWorkflow({  id: "test-workflow",  inputSchema: z.object({    message: z.string()  }),  outputSchema: z.object({    output: z.string()  })})  .then(step1)  .commit();
```

> See the Workflow Class for a full list of configuration options.

### Understanding control flowDirect link to Understanding control flow

Workflows can be composed using a number of different methods. The method you choose determines how each step's schema should be structured. Visit the [Control Flow](/docs/workflows/control-flow)page for more information. 

## Workflow stateDirect link to Workflow state

Workflow state lets you share values across steps without passing them through every step's inputSchema and outputSchema. Use state for tracking progress, accumulating results, or sharing configuration across the entire workflow. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({  id: "step-1",  inputSchema: z.object({ message: z.string() }),  outputSchema: z.object({ formatted: z.string() }),  stateSchema: z.object({ counter: z.number() }),  execute: async ({ inputData, state, setState }) => {    // Read from state    console.log(state.counter);    // Update state for subsequent steps    setState({ ...state, counter: state.counter + 1 });    return { formatted: inputData.message.toUpperCase() };  },});
```

> See Workflow State for complete documentation on state schemas, initial state, persistence across suspend/resume, and nested workflows.

## Workflows as stepsDirect link to Workflows as steps

Use a workflow as a step to reuse its logic within a larger composition. Input and output follow the same schema rules described in [Core principles](/docs/workflows/control-flow). 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({...});const step2 = createStep({...});const childWorkflow = createWorkflow({  id: "child-workflow",  inputSchema: z.object({    message: z.string()  }),  outputSchema: z.object({    emphasized: z.string()  })})  .then(step1)  .then(step2)  .commit();export const testWorkflow = createWorkflow({  id: "test-workflow",  inputSchema: z.object({    message: z.string()  }),  outputSchema: z.object({    emphasized: z.string()  })})  .then(childWorkflow)  .commit();
```

### Cloning a workflowDirect link to Cloning a workflow

Clone a workflow using `cloneWorkflow()`when you want to reuse its logic but track it separately under a new ID. Each clone runs independently and appears as a distinct workflow in logs and observability tools. 

src/mastra/workflows/test-workflow.ts 
```
import { cloneWorkflow } from "@mastra/core/workflows";const step1 = createStep({...});const parentWorkflow = createWorkflow({...})const clonedWorkflow = cloneWorkflow(parentWorkflow, { id: "cloned-workflow" });export const testWorkflow = createWorkflow({...})  .then(step1)  .then(clonedWorkflow)  .commit();
```

## Registering a workflowDirect link to Registering a workflow

Register your workflow in the Mastra instance to make it available throughout your application. Once registered, it can be called from agents or tools and has access to shared resources such as logging and observability features: 

src/mastra/index.ts 
```
import { Mastra } from "@mastra/core/mastra";import { testWorkflow } from "./workflows/test-workflow";export const mastra = new Mastra({  // ...  workflows: { testWorkflow },});
```

## Referencing a workflowDirect link to Referencing a workflow

You can run workflows from agents, tools, the Mastra Client, or the command line. Get a reference by calling `.getWorkflow()`on your `mastra`or `mastraClient`instance, depending on your setup: 

```
const testWorkflow = mastra.getWorkflow("testWorkflow");
```

info `mastra.getWorkflow()`is preferred over a direct import, since it provides access to the Mastra instance configuration (logger, telemetry, storage, registered agents, and vector stores). 

## Running workflowsDirect link to Running workflows

Workflows can be run in two modes: start waits for all steps to complete before returning, and stream emits events during execution. Choose the approach that fits your use case: start when you only need the final result, and stream when you want to monitor progress or trigger actions as steps complete. 

- Start
- Stream

Create a workflow run instance using `createRunAsync()`, then call `.start()`with `inputData`matching the workflow's `inputSchema`. The workflow executes all steps and returns the final result. 

```
const run = await testWorkflow.createRunAsync();const result = await run.start({  inputData: {    message: "Hello world"  }});console.log(result);
```

Create a workflow run instance using `.createRunAsync()`, then call `.stream()`with `inputData`matching the workflow's `inputSchema`. The workflow emits events as each step executes, which you can iterate over to track progress. 

```
const run = await testWorkflow.createRunAsync();const result = await run.stream({  inputData: {    message: "Hello world"  }});for await (const chunk of result.fullStream) {  console.log(chunk);}
```

### Workflow status typesDirect link to Workflow status types

When running a workflow, its `status`can be `running`, `suspended`, `success`, or `failed`. 

### Workflow outputDirect link to Workflow output

The workflow output includes the full execution lifecycle, showing the input and output for each step. It also includes the status of each step, the overall workflow status, and the final result. This gives you clear insight into how data moved through the workflow, what each step produced, and how the workflow completed. 

```
{  "status": "success",  "steps": {    // ...    "step-1": {      "status": "success",      "payload": {        "message": "Hello world"      },      "output": {        "formatted": "HELLO WORLD"      },    },    "step-2": {      "status": "success",      "payload": {        "formatted": "HELLO WORLD"      },      "output": {        "emphasized": "HELLO WORLD!!!"      },    }  },  "input": {    "message": "Hello world"  },  "result": {    "emphasized": "HELLO WORLD!!!"  }}
```

## Restarting active workflow runsDirect link to Restarting active workflow runs

When a workflow run loses connection to the server, it can be restarted from the last active step. This is useful for long-running workflows that might still be running when the server loses connection. Restarting a workflow run will resume execution from the last active step, and the workflow will continue from there. 

### Restarting all active workflow runs of a workflow with restartAllActiveWorkflowRuns()Direct link to restarting-all-active-workflow-runs-of-a-workflow-with-restartallactiveworkflowruns

Use `restartAllActiveWorkflowRuns()`to restart all active workflow runs of a workflow. This helps restart all active workflow runs of a workflow, without having to manually loop through each run and restart. 

```
workflow.restartAllActiveWorkflowRuns();
```

### Restarting an active workflow run with restart()Direct link to restarting-an-active-workflow-run-with-restart

Use `restart()`to restart an active workflow run from the last active step. This will resume execution from the last active step, and the workflow will continue from there. 

```
const run = await workflow.createRun();const result = await run.start({ inputData: { value: "initial data" } });//.. server connection lost,const restartedResult = await run.restart();
```

### Identifying active workflow runsDirect link to Identifying active workflow runs

When a workflow run is active, it will have a `status`of `running`or `waiting`. You can check the workflow's `status`to confirm it's active, and use `active`to identify the active workflow run. 

```
const activeRuns = await workflow.getActiveWorkflowRuns();if (activeRuns.runs.length > 0) {  console.log(activeRuns.runs);}
```

When running the local mastra server, all active workflow runs will be restarted automatically when the server starts. 

## Using RuntimeContextDirect link to using-runtimecontext

Use [RuntimeContext](/docs/server-db/runtime-context)to access request-specific values. This lets you conditionally adjust behavior based on the context of the request. 

src/mastra/workflows/test-workflow.ts 
```
export type UserTier = {  "user-tier": "enterprise" | "pro";};const step1 = createStep({  // ...  execute: async ({ runtimeContext }) => {    const userTier = runtimeContext.get("user-tier") as UserTier["user-tier"];    const maxResults = userTier === "enterprise"      ? 1000      : 50;    return { maxResults };  }});
```

> See Runtime Context for more information.

## Testing with StudioDirect link to Testing with Studio

Use [Studio](/docs/getting-started/studio)to easily run workflows with different inputs, visualize the execution lifecycle, see the inputs and outputs for each step, and inspect each part of the workflow in more detail. 

## RelatedDirect link to Related

For a closer look at workflows, see our [Workflow Guide](/guides/guide/ai-recruiter), which walks through the core concepts with a practical example. 

- Workflow State
- Control Flow
- Suspend & Resume
- Error Handling
# Workflow state | Workflows

Share values across workflow steps using global state that persists through the entire workflow run.

Source: https://mastra.ai/docs/workflows/workflow-state

---

# Workflow State

Workflow state lets you share values across steps without passing them through every step's inputSchema and outputSchema. This is useful for tracking progress, accumulating results, or sharing configuration across the entire workflow. 

## State vs step input/outputDirect link to State vs step input/output

It's important to understand the difference between **state**and **step input/output**: 

- Step input/output: Data flows sequentially between steps. Each step receives the previous step's output as its inputData, and returns an output for the next step.
- State: A shared store that all steps can read and update via state and setState. State persists across the entire workflow run, including suspend/resume cycles.

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({  id: "step-1",  inputSchema: z.object({ workflowInput: z.string() }),  outputSchema: z.object({ step1Output: z.string() }),  stateSchema: z.object({ sharedCounter: z.number() }),  execute: async ({ inputData, state, setState }) => {    // inputData comes from workflow input or previous step's output    console.log(inputData.workflowInput);    // state is the shared workflow state    console.log(state.sharedCounter);    // Update state for subsequent steps    setState({ ...state, sharedCounter: state.sharedCounter + 1 });    // Return output that flows to next step's inputData    return { step1Output: "processed" };  },});
```

## Defining state schemasDirect link to Defining state schemas

Define a `stateSchema`on both the workflow and individual steps. The workflow's stateSchema is the master schema containing all possible state values, while each step declares only the subset it needs: 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({  // ...  stateSchema: z.object({    processedItems: z.array(z.string()),  }),  execute: async ({ inputData, state, setState }) => {    const { message } = inputData;    const { processedItems } = state;    setState({      ...state,      processedItems: [...processedItems, "item-1", "item-2"],    });    return {      formatted: message.toUpperCase(),    };  },});const step2 = createStep({  // ...  stateSchema: z.object({    metadata: z.object({      processedBy: z.string(),    }),  }),  execute: async ({ inputData, state }) => {    const { formatted } = inputData;    const { metadata } = state;    return {      emphasized: `${formatted}!! ${metadata.processedBy}`,    };  },});export const testWorkflow = createWorkflow({  // ...  stateSchema: z.object({    processedItems: z.array(z.string()),    metadata: z.object({      processedBy: z.string(),    }),  }),})  .then(step1)  .then(step2)  .commit();
```

## Setting initial stateDirect link to Setting initial state

Pass `initialState`when starting a workflow run to set the starting values: 

```
const run = await workflow.createRun();const result = await run.start({  inputData: { message: "Hello" },  initialState: {    processedItems: [],    metadata: { processedBy: "system" },  },});
```

The `initialState`object should match the structure defined in the workflow's `stateSchema`. 

## State persistence across suspend/resumeDirect link to State persistence across suspend/resume

State automatically persists across suspend and resume cycles. When a workflow suspends and later resumes, all state updates made before the suspension are preserved: 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({  id: "step-1",  inputSchema: z.object({}),  outputSchema: z.object({}),  stateSchema: z.object({ count: z.number(), items: z.array(z.string()) }),  resumeSchema: z.object({ proceed: z.boolean() }),  execute: async ({ state, setState, suspend, resumeData }) => {    if (!resumeData) {      // First run: update state and suspend      setState({ ...state, count: state.count + 1, items: [...state.items, "item-1"] });      await suspend({});      return {};    }    // After resume: state changes are preserved (count: 1, items: ["item-1"])    return {};  },});
```

## State in nested workflowsDirect link to State in nested workflows

When using nested workflows, state propagates from parent to child. Changes made by the parent workflow before calling a nested workflow are visible to steps inside the nested workflow: 

src/mastra/workflows/test-workflow.ts 
```
const nestedStep = createStep({  id: "nested-step",  inputSchema: z.object({}),  outputSchema: z.object({ result: z.string() }),  stateSchema: z.object({ sharedValue: z.string() }),  execute: async ({ state }) => {    // Receives state modified by parent workflow    return { result: `Received: ${state.sharedValue}` };  },});const nestedWorkflow = createWorkflow({  id: "nested-workflow",  inputSchema: z.object({}),  outputSchema: z.object({ result: z.string() }),  stateSchema: z.object({ sharedValue: z.string() }),})  .then(nestedStep)  .commit();const parentStep = createStep({  id: "parent-step",  inputSchema: z.object({}),  outputSchema: z.object({}),  stateSchema: z.object({ sharedValue: z.string() }),  execute: async ({ state, setState }) => {    // Modify state before nested workflow runs    setState({ ...state, sharedValue: "modified-by-parent" });    return {};  },});const parentWorkflow = createWorkflow({  id: "parent-workflow",  inputSchema: z.object({}),  outputSchema: z.object({ result: z.string() }),  stateSchema: z.object({ sharedValue: z.string() }),})  .then(parentStep)  .then(nestedWorkflow)  .commit();
```

## RelatedDirect link to Related

- Workflows overview
- Suspend & Resume
- Step Class
- Workflow Class
# Control Flow | Workflows

Control flow in Mastra workflows allows you to manage branching, merging, and conditions to construct workflows that meet your logic requirements.

Source: https://mastra.ai/docs/workflows/control-flow

---

# Control Flow

Workflows run a sequence of predefined tasks, and you can control how that flow is executed. Tasks are divided into **steps**, which can be executed in different ways depending on your requirements. They can run sequentially, in parallel, or follow different paths based on conditions. 

Each step connects to the next in the workflow through defined schemas that keep data controlled and consistent. 

## Core principlesDirect link to Core principles

- The first step’s inputSchema must match the workflow’s inputSchema.
- The final step’s outputSchema must match the workflow’s outputSchema.
- Each step’s outputSchema must match the next step’s inputSchema.

If it doesn’t, use Input data mapping to transform the data into the required shape.

## Chaining steps with .then()Direct link to chaining-steps-with-then

Use `.then()`to run steps in order, allowing each step to access the result of the step before it. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({  //...  inputSchema: z.object({    message: z.string()  }),  outputSchema: z.object({    formatted: z.string()  })});const step2 = createStep({  // ...  inputSchema: z.object({    formatted: z.string()  }),  outputSchema: z.object({    emphasized: z.string()  })});export const testWorkflow = createWorkflow({  // ...  inputSchema: z.object({    message: z.string()  }),  outputSchema: z.object({    emphasized: z.string()  })})  .then(step1)  .then(step2)  .commit();
```

## Simultaneous steps with .parallel()Direct link to simultaneous-steps-with-parallel

Use `.parallel()`to run steps at the same time. Each step's `id`is used when defining a following step's `inputSchema`and becomes the key on the `inputData`object used to access the previous step's values. The outputs of parallel steps can then be referenced or combined by a following step. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({  id: "step-1",  // ...});const step2 = createStep({  id: "step-2",  // ...});const step3 = createStep({  id: "step-3",  inputSchema: z.object({    "step-1": z.object({      formatted: z.string()    }),    "step-2": z.object({      emphasized: z.string()    })  }),  outputSchema: z.object({    combined: z.string()  }),  execute: async ({ inputData }) => {    const { formatted } = inputData["step-1"];    const { emphasized } = inputData["step-2"];    return {      combined: `${formatted} | ${emphasized}`    };  }});export const testWorkflow = createWorkflow({  // ...  inputSchema: z.object({    message: z.string()  }),  outputSchema: z.object({    combined: z.string()  })})  .parallel([step1, step2])  .then(step3)  .commit();
```

> 📹 Watch: How to run steps in parallel and optimize your Mastra workflow → YouTube (3 minutes)

### Output structureDirect link to Output structure

When steps run in parallel, the output is an object where each key is the step's `id`and the value is that step's output. This allows you to access each parallel step's result independently. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({  id: "format-step",  inputSchema: z.object({ message: z.string() }),  outputSchema: z.object({ formatted: z.string() }),  execute: async ({ inputData }) => ({    formatted: inputData.message.toUpperCase()  })});const step2 = createStep({  id: "count-step",  inputSchema: z.object({ message: z.string() }),  outputSchema: z.object({ count: z.number() }),  execute: async ({ inputData }) => ({    count: inputData.message.length  })});const step3 = createStep({  id: "combine-step",  // The inputSchema must match the structure of parallel outputs  inputSchema: z.object({    "format-step": z.object({ formatted: z.string() }),    "count-step": z.object({ count: z.number() })  }),  outputSchema: z.object({ result: z.string() }),  execute: async ({ inputData }) => {    // Access each parallel step's output by its id    const formatted = inputData["format-step"].formatted;    const count = inputData["count-step"].count;    return {      result: `${formatted} (${count} characters)`    };  }});export const testWorkflow = createWorkflow({  id: "parallel-output-example",  inputSchema: z.object({ message: z.string() }),  outputSchema: z.object({ result: z.string() })})  .parallel([step1, step2])  .then(step3)  .commit();// When executed with { message: "hello" }// The parallel output structure will be:// {//   "format-step": { formatted: "HELLO" },//   "count-step": { count: 5 }// }
```

**Key points:**

- Each parallel step's output is keyed by its id
- All parallel steps execute simultaneously
- The next step receives an object containing all parallel step outputs
- You must define the inputSchema of the following step to match this structure

## Conditional logic with .branch()Direct link to conditional-logic-with-branch

Use `.branch()`to choose which step to run based on a condition. All steps in a branch need the same `inputSchema`and `outputSchema`because branching requires consistent schemas so workflows can follow different paths. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({...})const stepA = createStep({  // ...  inputSchema: z.object({    value: z.number()  }),  outputSchema: z.object({    result: z.string()  })});const stepB = createStep({  // ...  inputSchema: z.object({    value: z.number()  }),  outputSchema: z.object({    result: z.string()  })});export const testWorkflow = createWorkflow({  // ...  inputSchema: z.object({    value: z.number()  }),  outputSchema: z.object({    result: z.string()  })})  .then(step1)  .branch([    [async ({ inputData: { value } }) => value > 10, stepA],    [async ({ inputData: { value } }) => value <= 10, stepB]  ])  .commit();
```

### Output structureDirect link to Output structure

When using conditional branching, only one branch executes based on which condition evaluates to `true`first. The output structure is similar to `.parallel()`, where the result is keyed by the executed step's `id`. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({  id: "initial-step",  inputSchema: z.object({ value: z.number() }),  outputSchema: z.object({ value: z.number() }),  execute: async ({ inputData }) => inputData});const highValueStep = createStep({  id: "high-value-step",  inputSchema: z.object({ value: z.number() }),  outputSchema: z.object({ result: z.string() }),  execute: async ({ inputData }) => ({    result: `High value: ${inputData.value}`  })});const lowValueStep = createStep({  id: "low-value-step",  inputSchema: z.object({ value: z.number() }),  outputSchema: z.object({ result: z.string() }),  execute: async ({ inputData }) => ({    result: `Low value: ${inputData.value}`  })});const finalStep = createStep({  id: "final-step",  // The inputSchema must account for either branch's output  inputSchema: z.object({    "high-value-step": z.object({ result: z.string() }).optional(),    "low-value-step": z.object({ result: z.string() }).optional()  }),  outputSchema: z.object({ message: z.string() }),  execute: async ({ inputData }) => {    // Only one branch will have executed    const result = inputData["high-value-step"]?.result ||                    inputData["low-value-step"]?.result;    return { message: result };  }});export const testWorkflow = createWorkflow({  id: "branch-output-example",  inputSchema: z.object({ value: z.number() }),  outputSchema: z.object({ message: z.string() })})  .then(step1)  .branch([    [async ({ inputData }) => inputData.value > 10, highValueStep],    [async ({ inputData }) => inputData.value <= 10, lowValueStep]  ])  .then(finalStep)  .commit();// When executed with { value: 15 }// Only the high-value-step executes, output structure:// {//   "high-value-step": { result: "High value: 15" }// }// When executed with { value: 5 }// Only the low-value-step executes, output structure:// {//   "low-value-step": { result: "Low value: 5" }// }
```

**Key points:**

- Only one branch executes based on condition evaluation order
- The output is keyed by the executed step's id
- Subsequent steps should handle all possible branch outputs
- Use optional fields in the inputSchema when the next step needs to handle multiple possible branches
- Conditions are evaluated in the order they're defined

## Input data mappingDirect link to Input data mapping

When using `.then()`, `.parallel()`, or `.branch()`, it is sometimes necessary to transform the output of a previous step to match the input of the next. In these cases you can use `.map()`to access the `inputData`and transform it to create a suitable data shape for the next step. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({...});const step2 = createStep({...});export const testWorkflow = createWorkflow({...})  .then(step1)  .map(async ({ inputData }) => {    const { foo } = inputData;    return {      bar: `new ${foo}`,    };  })  .then(step2)  .commit();
```

The `.map()`method provides additional helper functions for more complex mapping scenarios. 

**Available helper functions:**

- getStepResult(): Access a specific step's full output
- getInitData(): Access the workflow's initial input data
- mapVariable(): Use declarative object syntax to extract and rename fields

### Parallel and Branch outputsDirect link to Parallel and Branch outputs

When working with `.parallel()`or `.branch()`outputs, you can use `.map()`to transform the data structure before passing it to the next step. This is especially useful when you need to flatten or restructure the output. 

src/mastra/workflows/test-workflow.ts 
```
export const testWorkflow = createWorkflow({...})  .parallel([step1, step2])  .map(async ({ inputData }) => {    // Transform the parallel output structure    return {      combined: `${inputData["step1"].value} - ${inputData["step2"].value}`    };  })  .then(nextStep)  .commit();
```

You can also use the helper functions provided by `.map()`: 

src/mastra/workflows/test-workflow.ts 
```
export const testWorkflow = createWorkflow({...})  .branch([    [condition1, stepA],    [condition2, stepB]  ])  .map(async ({ inputData, getStepResult }) => {    // Access specific step results    const stepAResult = getStepResult("stepA");    const stepBResult = getStepResult("stepB");        // Return the result from whichever branch executed    return stepAResult || stepBResult;  })  .then(nextStep)  .commit();
```

## Looping stepsDirect link to Looping steps

Workflows support different looping methods that let you repeat steps until or while a condition is met, or iterate over arrays. Loops can be combined with other control methods like `.then()`. 

### Looping with .dountil()Direct link to looping-with-dountil

Use `.dountil()`to run a step repeatedly until a condition becomes true. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({...});const step2 = createStep({  // ...  execute: async ({ inputData }) => {    const { number } = inputData;    return {      number: number + 1    };  }});export const testWorkflow = createWorkflow({  // ...})  .then(step1)  .dountil(step2, async ({ inputData: { number } }) => number > 10)  .commit();
```

### Looping with .dowhile()Direct link to looping-with-dowhile

Use `.dowhile()`to run a step repeatedly while a condition remains true. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({...});const step2 = createStep({  // ...  execute: async ({ inputData }) => {    const { number } = inputData;    return {      number: number + 1    };  }});export const testWorkflow = createWorkflow({  // ...})  .then(step1)  .dowhile(step2, async ({ inputData: { number } }) => number < 10)  .commit();
```

### Looping with .foreach()Direct link to looping-with-foreach

Use `.foreach()`to run the same step for each item in an array. The input must be of type `array`so the loop can iterate over its values, applying the step’s logic to each one. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({  // ...  inputSchema: z.string(),  outputSchema: z.string(),  execute: async ({ inputData }) => {    return inputData.toUpperCase();  }});const step2 = createStep({...});export const testWorkflow = createWorkflow({  // ...  inputSchema: z.array(z.string()),  outputSchema: z.array(z.string())})  .foreach(step1)  .then(step2)  .commit();
```

#### Concurrency limitsDirect link to Concurrency limits

Use `concurrency`to control the number of array items processed at the same time. The default is `1`, which runs steps sequentially. Increasing the value allows `.foreach()`to process multiple items simultaneously. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({...})export const testWorkflow = createWorkflow({...})  .foreach(step1, { concurrency: 4 })  .commit();
```

## Loop managementDirect link to Loop management

Loop conditions can be implemented in different ways depending on how you want the loop to end. Common patterns include checking values returned in `inputData`, setting a maximum number of iterations, or aborting execution when a limit is reached. 

### Aborting loopsDirect link to Aborting loops

Use `iterationCount`to limit how many times a loop runs. If the count exceeds your threshold, throw an error to fail the step and stop the workflow. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({...});export const testWorkflow = createWorkflow({...})  .dountil(step1, async ({ inputData: { userResponse, iterationCount } }) => {    if (iterationCount >= 10) {      throw new Error("Maximum iterations reached");    }    return userResponse === "yes";  })  .commit();
```

## RelatedDirect link to Related

- Suspend & Resume
- Human-in-the-loop
# Agents and Tools | Workflows

Learn how to call agents and tools from workflow steps and choose between execute functions and step composition.

Source: https://mastra.ai/docs/workflows/agents-and-tools

---

# Agents and Tools

Workflow steps can call agents to leverage LLM reasoning or call tools for type-safe logic. You can either invoke them from within a step's `execute`function or compose them directly as steps using `createStep()`. 

## Using agents in workflowsDirect link to Using agents in workflows

Use agents in workflow steps when you need reasoning, language generation, or other LLM-based tasks. Call from a step's `execute`function for more control over the agent call (e.g., track conversation history or return structured output). Compose agents as steps when you don't need to modify how the agent is invoked. 

### Calling agentsDirect link to Calling agents

Call agents inside a step's `execute`function using `.generate()`or `.stream()`. This lets you modify the agent call and handle the response before passing it to the next step. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({  // ...  execute: async ({ inputData, mastra }) => {    const { message } = inputData;    const testAgent = mastra.getAgent("testAgent");    const response = await testAgent.generate(      `Convert this message into bullet points: ${message}`,      {        memory: {          thread: "user-123",          resource: "test-123",        },      },    );    return {      list: response.text,    };  },});
```

### Agents as stepsDirect link to Agents as steps

Compose an agent as a step using `createStep()`when you don't need to modify the agent call. Use `.map()`to transform the previous step's output into a `prompt`the agent can use. 

src/mastra/workflows/test-workflow.ts 
```
import { testAgent } from "../agents/test-agent";const step1 = createStep(testAgent);export const testWorkflow = createWorkflow({  // ...})  .map(async ({ inputData }) => {    const { message } = inputData;    return {      prompt: `Convert this message into bullet points: ${message}`,    };  })  .then(step1)  .then(step2)  .commit();
```

> See .map() for more information.

Mastra agents use a default schema that expects a `prompt`string as input and returns a `text`string as output: 

```
{  inputSchema: {    prompt: string  },  outputSchema: {    text: string  }}
```

## Using tools in workflowsDirect link to Using tools in workflows

Use tools in workflow steps to leverage existing tool logic. Call from a step's `execute`function when you need to prepare context or process responses. Compose tools as steps when you don't need to modify how the tool is used. 

### Calling toolsDirect link to Calling tools

Call tools inside a step's `execute`function using `.execute()`. This gives you more control over the tool's input context, or process its response before passing it to the next step. 

src/mastra/workflows/test-workflow.ts 
```
import { testTool } from "../tools/test-tool";const step2 = createStep({  // ...  execute: async ({ inputData, runtimeContext }) => {    const { formatted } = inputData;    const response = await testTool.execute({      context: {        text: formatted,      },      runtimeContext,    });    return {      emphasized: response.emphasized,    };  },});
```

### Tools as stepsDirect link to Tools as steps

Compose a tool as a step using `createStep()`when the previous step's output matches the tool's input context. You can use `.map()`to transform the previous step's output if they don't. 

src/mastra/workflows/test-workflow.ts 
```
import { testTool } from "../tools/test-tool";const step2 = createStep(testTool);export const testWorkflow = createWorkflow({  // ...})  .then(step1)  .map(async ({ inputData }) => {    const { formatted } = inputData;    return {      text: formatted,    };  })  .then(step2)  .commit();
```

> See .map() for more information.

## RelatedDirect link to Related

- Using Agents
- MCP Overview
# Suspend & Resume | Workflows

Suspend and resume in Mastra workflows allows you to pause execution while waiting for external input or resources.

Source: https://mastra.ai/docs/workflows/suspend-and-resume

---

# Suspend & Resume

Workflows can be paused at any step to collect additional data, wait for API callbacks, throttle costly operations, or request [human-in-the-loop](/docs/workflows/human-in-the-loop)input. When a workflow is suspended, its current execution state is saved as a snapshot. You can later resume the workflow from a [specific step ID](/docs/workflows/snapshots#retrieving-snapshots), restoring the exact state captured in that snapshot. [Snapshots](/docs/workflows/snapshots)are stored in your configured storage provider and across deployments and application restarts. 

## Pausing a workflow with suspend()Direct link to pausing-a-workflow-with-suspend

Use `suspend()`to pause workflow execution at a specific step. You can define a suspend condition in the step’s `execute`block using values from `resumeData`. 

- If the condition isn’t met, the workflow pauses and returns suspend().
- If the condition is met, the workflow continues with the remaining logic in the step.

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({  id: "step-1",  inputSchema: z.object({    userEmail: z.string()  }),  outputSchema: z.object({    output: z.string()  }),  resumeSchema: z.object({    approved: z.boolean()  }),  execute: async ({ inputData, resumeData, suspend }) => {    const { userEmail } = inputData;    const { approved } = resumeData ?? {};    if (!approved) {      return await suspend({});    }    return {      output: `Email sent to ${userEmail}`    };  }});export const testWorkflow = createWorkflow({  id: "test-workflow",  inputSchema: z.object({    userEmail: z.string()  }),  outputSchema: z.object({    output: z.string()  })})  .then(step1)  .commit();
```

## Restarting a workflow with resume()Direct link to restarting-a-workflow-with-resume

Use `resume()`to restart a suspended workflow from the step where it paused. To satisfy the step’s suspend condition, pass a value using `resumeData`that matches the step's `resumeSchema`, allowing execution to continue from the suspended step. 

```
const workflow = mastra.getWorkflow("testWorkflow");const run = await workflow.createRunAsync();await run.start({  inputData: {    userEmail: "alex@example.com"  }});const handleResume = async () => {  const result = await run.resume({    step: 'step-1',    resumeData: { approved: true }  });};
```

You can resume a suspended workflow using different triggers, including [human input](/docs/workflows/human-in-the-loop), external events from your application, or time-based conditions. 

```
const handleResume = async () => {  const result = await run.resume({    step: 'step-1',    resumeData: { approved: true }  });};const midnight = new Date();midnight.setUTCHours(24, 0, 0, 0);setTimeout(handleResume, midnight.getTime() - Date.now());
```

## Identifying suspended executionsDirect link to Identifying suspended executions

When a workflow is suspended, it restarts from the step where it paused. You can check the workflow’s `status`to confirm it's suspended, and use `suspended`to identify the paused step or [nested workflow](/docs/workflows/overview#workflows-as-steps). 

```
const workflow = mastra.getWorkflow("testWorkflow");const run = await workflow.createRunAsync();const result = await run.start({  inputData: {    userEmail: "alex@example.com"  }});if (result.status === "suspended") {  console.log(result.suspended[0]);  await run.resume({    step: result.suspended[0],    resumeData: { approved: true }  });}
```

**Example output**

The `suspended`array contains the IDs of any suspended workflows and steps from the run. These can be passed to the `step`parameter when calling `resume()`to target and resume the suspended execution path. 

```
[ 'nested-workflow', 'step-1' ]
```

## Sleep & EventsDirect link to Sleep & Events

Sleep and event methods can be used to pause execution at the workflow level, which sets the status to `waiting`. By comparison, `suspend()`pauses execution within a specific step and sets the status to `suspended`. 

**Available methods:**

- .sleep(): Pause for a specified number of milliseconds
- .sleepUntil() : Pause until a specific date
- .waitForEvent(): Pause until an external event is received
- .sendEvent() : Send an event to resume a waiting workflow

## RelatedDirect link to Related

- Control Flow
- Human-in-the-loop
- Snapshots
- Time Travel
# Human-in-the-loop (HITL) | Workflows

Human-in-the-loop workflows in Mastra allow you to pause execution for manual approvals, reviews, or user input before continuing.

Source: https://mastra.ai/docs/workflows/human-in-the-loop

---

# Human-in-the-loop (HITL)

Some workflows need to pause for human input before continuing. When a workflow is [suspended](/docs/workflows/suspend-and-resume#pausing-a-workflow-with-suspend), it can return a message explaining why it paused and what’s needed to proceed. The workflow can then either [resume](#resuming-workflows-with-human-input)or [bail](#handling-human-rejection-with-bail)based on the input received. This approach works well for manual approvals, rejections, gated decisions, or any step that requires human oversight. 

## Pausing workflows for human inputDirect link to Pausing workflows for human input

Human-in-the-loop input works much like [pausing a workflow](/docs/workflows/suspend-and-resume)using `suspend()`. The key difference is that when human input is required, you can return `suspend()`with a payload that provides context or guidance to the user on how to continue. 

src/mastra/workflows/test-workflow.ts 
```
import { createWorkflow, createStep } from "@mastra/core/workflows";import { z } from "zod";const step1 = createStep({  id: "step-1",  inputSchema: z.object({    userEmail: z.string()  }),  outputSchema: z.object({    output: z.string()  }),  resumeSchema: z.object({    approved: z.boolean()  }),  suspendSchema: z.object({    reason: z.string()  }),  execute: async ({ inputData, resumeData, suspend }) => {    const { userEmail } = inputData;    const { approved } = resumeData ?? {};    if (!approved) {      return await suspend({        reason: "Human approval required."      });    }    return {      output: `Email sent to ${userEmail}`    };  }});export const testWorkflow = createWorkflow({  id: "test-workflow",  inputSchema: z.object({    userEmail: z.string()  }),  outputSchema: z.object({    output: z.string()  })})  .then(step1)  .commit();
```

## Providing user feedbackDirect link to Providing user feedback

When a workflow is suspended, you can access the payload returned by `suspend()`by identifying the suspended step and reading its `suspendPayload`. 

src/test-workflow.ts 
```
const workflow = mastra.getWorkflow("testWorkflow");const run = await workflow.createRunAsync();const result = await run.start({  inputData: {    userEmail: "alex@example.com"  }});if (result.status === "suspended") {  const suspendStep = result.suspended[0];  const suspendedPayload = result.steps[suspendStep[0]].suspendPayload;  console.log(suspendedPayload);}
```

**Example output**

The data returned by the step can include a reason and help the user understand what’s needed to resume the workflow. 

```
{ reason: 'Confirm to send email.' }
```

## Resuming workflows with human inputDirect link to Resuming workflows with human input

As with [restarting a workflow](/docs/workflows/suspend-and-resume#restarting-a-workflow-with-resume), use `resume()`with `resumeData`to continue a workflow after receiving input from a human. The workflow resumes from the step where it was paused. 

```
const workflow = mastra.getWorkflow("testWorkflow");const run = await workflow.createRunAsync();await run.start({  inputData: {    userEmail: "alex@example.com"  }});const handleResume = async () => {  const result = await run.resume({    step: "step-1",    resumeData: { approved: true }  });};
```

### Handling human rejection with bail()Direct link to handling-human-rejection-with-bail

Use `bail()`to stop workflow execution at a step without triggering an error. This can be useful when a human explicitly rejects an action. The workflow completes with a `success`status, and any logic after the call to `bail()`is skipped. 

```
const step1 = createStep({  // ...  execute: async ({ inputData, resumeData, suspend, bail }) => {    const { userEmail } = inputData;    const { approved } = resumeData ?? {};    if (approved === false) {      return bail({        reason: "User rejected the request."      });    }    if (!approved) {      return await suspend({        reason: "Human approval required."      });    }    return {      message: `Email sent to ${userEmail}`    };  }});
```

## Multi-turn human inputDirect link to Multi-turn human input

For workflows that require input at multiple stages, the suspend pattern remains the same. Each step defines a `resumeSchema`, and `suspendSchema`typically with a reason that can be used to provide user feedback. 

src/mastra/workflows/test-workflow.ts 
```
const step1 = createStep({...});const step2 = createStep({  id: "step-2",  inputSchema: z.object({    message: z.string()  }),  outputSchema: z.object({    output: z.string()  }),  resumeSchema: z.object({    approved: z.boolean()  }),  suspendSchema: z.object({    reason: z.string()  }),  execute: async ({ inputData, resumeData, suspend }) => {    const { message } = inputData;    const { approved } = resumeData ?? {};    if (!approved) {      return await suspend({        reason: "Human approval required."      });    }    return {      output: `${message} - Deleted`    };  }});export const testWorkflow = createWorkflow({  id: "test-workflow",  inputSchema: z.object({    userEmail: z.string()  }),  outputSchema: z.object({    output: z.string()  })})  .then(step1)  .then(step2)  .commit();
```

Each step must be resumed in sequence, with a separate call to `resume()`for each suspended step. This approach helps manage multi-step approvals with consistent UI feedback and clear input handling at each stage. 

```
const handleResume = async () => {  const result = await run.resume({    step: "step-1",    resumeData: { approved: true }  });};const handleDelete = async () => {  const result = await run.resume({    step: "step-2",    resumeData: { approved: true }  });};
```

## RelatedDirect link to Related

- Control Flow
- Suspend & Resume
# Snapshots | Workflows

Learn how to save and resume workflow execution state with snapshots in Mastra

Source: https://mastra.ai/docs/workflows/snapshots

---

# Snapshots

In Mastra, a snapshot is a serializable representation of a workflow's complete execution state at a specific point in time. Snapshots capture all the information needed to resume a workflow from exactly where it left off, including: 

- The current state of each step in the workflow
- The outputs of completed steps
- The execution path taken through the workflow
- Any suspended steps and their metadata
- The remaining retry attempts for each step
- Additional contextual data needed to resume execution

Snapshots are automatically created and managed by Mastra whenever a workflow is suspended, and are persisted to the configured storage system. 

## The role of snapshots in suspend and resumeDirect link to The role of snapshots in suspend and resume

Snapshots are the key mechanism enabling Mastra's suspend and resume capabilities. When a workflow step calls `await suspend()`: 

2. The workflow execution is paused at that exact point
4. The current state of the workflow is captured as a snapshot
6. The snapshot is persisted to storage
8. The workflow step is marked as "suspended" with a status of 'suspended'
10. Later, when resume() is called on the suspended step, the snapshot is retrieved
12. The workflow execution resumes from exactly where it left off

This mechanism provides a powerful way to implement human-in-the-loop workflows, handle rate limiting, wait for external resources, and implement complex branching workflows that may need to pause for extended periods. 

## Snapshot anatomyDirect link to Snapshot anatomy

Each snapshot includes the `runId`, input, step status ( `success`, `suspended`, etc.), any suspend and resume payloads, and the final output. This ensures full context is available when resuming execution. 

```
{  "runId": "34904c14-e79e-4a12-9804-9655d4616c50",  "status": "success",  "value": {},  "context": {    "input": {      "value": 100,      "user": "Michael",      "requiredApprovers": ["manager", "finance"]    },    "approval-step": {      "payload": {        "value": 100,        "user": "Michael",        "requiredApprovers": ["manager", "finance"]      },      "startedAt": 1758027577955,      "status": "success",      "suspendPayload": {        "message": "Workflow suspended",        "requestedBy": "Michael",        "approvers": ["manager", "finance"]      },      "suspendedAt": 1758027578065,      "resumePayload": { "confirm": true, "approver": "manager" },      "resumedAt": 1758027578517,      "output": { "value": 100, "approved": true },      "endedAt": 1758027578634    }  },  "activePaths": [],  "serializedStepGraph": [    {      "type": "step",      "step": {        "id": "approval-step",        "description": "Accepts a value, waits for confirmation"      }    }  ],  "suspendedPaths": {},  "waitingPaths": {},  "result": { "value": 100, "approved": true },  "runtimeContext": {},  "timestamp": 1758027578740}
```

## How snapshots are saved and retrievedDirect link to How snapshots are saved and retrieved

Snapshots are saved to the configured storage system. By default, they use LibSQL, but you can configure Upstash or PostgreSQL instead. Each snapshot is saved in the `workflow_snapshots`table and identified by the workflow’s `runId`. 

Read more about: 

- LibSQL Storage
- Upstash Storage
- PostgreSQL Storage

### Saving snapshotsDirect link to Saving snapshots

When a workflow is suspended, Mastra automatically persists the workflow snapshot with these steps: 

2. The suspend() function in a step execution triggers the snapshot process
4. The WorkflowInstance.suspend() method records the suspended machine
6. persistWorkflowSnapshot() is called to save the current state
8. The snapshot is serialized and stored in the configured database in the workflow_snapshots table
10. The storage record includes the workflow name, run ID, and the serialized snapshot

### Retrieving snapshotsDirect link to Retrieving snapshots

When a workflow is resumed, Mastra retrieves the persisted snapshot with these steps: 

2. The resume() method is called with a specific step ID
4. The snapshot is loaded from storage using loadWorkflowSnapshot()
6. The snapshot is parsed and prepared for resumption
8. The workflow execution is recreated with the snapshot state
10. The suspended step is resumed, and execution continues

```
const storage = mastra.getStorage();const snapshot = await storage!.loadWorkflowSnapshot({  runId: "<run-id>",  workflowName: "<workflow-id>",});console.log(snapshot);
```

## Storage options for snapshotsDirect link to Storage options for snapshots

Snapshots are persisted using a `storage`instance configured on the `Mastra`class. This storage layer is shared across all workflows registered to that instance. Mastra supports multiple storage options for flexibility in different environments. 

### LibSQL @mastra/libsqlDirect link to libsql-mastralibsql

This example demonstrates how to use snapshots with LibSQL. 

src/mastra/index.ts 
```
import { Mastra } from "@mastra/core/mastra";import { LibSQLStore } from "@mastra/libsql";export const mastra = new Mastra({  // ...  storage: new LibSQLStore({    url: ":memory:",  }),});
```

### Upstash @mastra/upstashDirect link to upstash-mastraupstash

This example demonstrates how to use snapshots with Upstash. 

src/mastra/index.ts 
```
import { Mastra } from "@mastra/core/mastra";import { UpstashStore } from "@mastra/upstash";export const mastra = new Mastra({  // ...  storage: new UpstashStore({    url: "<upstash-redis-rest-url>",    token: "<upstash-redis-rest-token>",  }),});
```

### Postgres @mastra/pgDirect link to postgres-mastrapg

This example demonstrates how to use snapshots with PostgreSQL. 

src/mastra/index.ts 
```
import { Mastra } from "@mastra/core/mastra";import { PostgresStore } from "@mastra/pg";export const mastra = new Mastra({  // ...  storage: new PostgresStore({    connectionString: "<database-url>",  }),});
```

## Best practicesDirect link to Best practices

2. Ensure Serializability: Any data that needs to be included in the snapshot must be serializable (convertible to JSON).
4. Minimize Snapshot Size: Avoid storing large data objects directly in the workflow context. Instead, store references to them (like IDs) and retrieve the data when needed.
6. Handle Resume Context Carefully: When resuming a workflow, carefully consider what context to provide. This will be merged with the existing snapshot data.
8. Set Up Proper Monitoring: Implement monitoring for suspended workflows, especially long-running ones, to ensure they are properly resumed.
10. Consider Storage Scaling: For applications with many suspended workflows, ensure your storage solution is appropriately scaled.

## Custom snapshot metadataDirect link to Custom snapshot metadata

You can attach custom metadata when suspending a workflow by defining a `suspendSchema`. This metadata is stored in the snapshot and made available when the workflow is resumed. 

src/mastra/workflows/test-workflow.ts 
```
import { createWorkflow, createStep } from "@mastra/core/workflows";import { z } from "zod";const approvalStep = createStep({  id: "approval-step",  description: "Accepts a value, waits for confirmation",  inputSchema: z.object({    value: z.number(),    user: z.string(),    requiredApprovers: z.array(z.string()),  }),  suspendSchema: z.object({    message: z.string(),    requestedBy: z.string(),    approvers: z.array(z.string()),  }),  resumeSchema: z.object({    confirm: z.boolean(),    approver: z.string(),  }),  outputSchema: z.object({    value: z.number(),    approved: z.boolean(),  }),  execute: async ({ inputData, resumeData, suspend }) => {    const { value, user, requiredApprovers } = inputData;    const { confirm } = resumeData ?? {};    if (!confirm) {      return await suspend({        message: "Workflow suspended",        requestedBy: user,        approvers: [...requiredApprovers],      });    }    return {      value,      approved: confirm,    };  },});
```

### Providing resume dataDirect link to Providing resume data

Use `resumeData`to pass structured input when resuming a suspended step. It must match the step’s `resumeSchema`. 

```
const workflow = mastra.getWorkflow("approvalWorkflow");const run = await workflow.createRunAsync();const result = await run.start({  inputData: {    value: 100,    user: "Michael",    requiredApprovers: ["manager", "finance"],  },});if (result.status === "suspended") {  const resumedResult = await run.resume({    step: "approval-step",    resumeData: {      confirm: true,      approver: "manager",    },  });}
```

## RelatedDirect link to Related

- Control Flow
- Suspend & Resume
- Time Travel
- Human-in-the-loop
