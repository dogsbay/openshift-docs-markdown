# Task run commands {id="op-tkn-task-run_{{ context }}"}

## taskrun {id="_taskrun"}
Manage task runs.

```terminal title="Example: Display help"
$ tkn taskrun -h
```

## taskrun cancel {id="_taskrun_cancel"}
Cancel a task run.

```terminal title="Example: Cancel the mytaskrun task run from a namespace"
$ tkn taskrun cancel mytaskrun -n myspace
```

## taskrun delete {id="_taskrun_delete"}
Delete a TaskRun.

```terminal title="Example: Delete the mytaskrun1 and mytaskrun2 task runs from a namespace"
$ tkn taskrun delete mytaskrun1 mytaskrun2 -n myspace
```

```terminal title="Example: Delete all but the five most recently executed task runs from a namespace"
$ tkn taskrun delete -n myspace --keep 5 (1)
```
1.  Replace `5` with the number of most recently executed task runs you want to retain.

## taskrun describe {id="_taskrun_describe"}
Describe a task run.

```terminal title="Example: Describe the mytaskrun task run in a namespace"
$ tkn taskrun describe mytaskrun -n myspace
```

## taskrun list {id="_taskrun_list"}
List task runs.

```terminal title="Example: List all the task runs in a namespace"
$ tkn taskrun list -n myspace
```

## taskrun logs {id="_taskrun_logs"}
Display task run logs.

```terminal title="Example: Display live logs for the mytaskrun task run in a namespace"
$ tkn taskrun logs -f mytaskrun -n myspace
```