# Redux

### Principles

1. State is defined by a single object that contains the application's state.
2. State is read-only. It can only be modified by actions that describe how it should change. All actions have a `type`.
3. State mutations have to be described as pure function that take the previous state, an action being dispatched, and return the next state.

### Pure vs. Impure Functions

Pure functions do not modify the values received and do not depend on external values (like database or network calls). The output is always expected to be the same for the same set of arguments. On the other side, impure functions can depend on external data and they can modify the input received.

### Reducer Functions

Pure functions that define the change in state. They receive the current state and the action that was dispatched. A Reducer returns the next state of the application.
