# Task management commands {id="op-tkn-task-management_{{ context }}"}

## task {id="_task"}
Manage tasks.

```terminal title="Example: Display help"
$ tkn task -h
```

## task delete {id="_task_delete"}
Delete a task.

```terminal title="Example: Delete mytask1 and mytask2 tasks from a namespace"
$ tkn task delete mytask1 mytask2 -n myspace
```

## task describe {id="_task_describe"}
Describe a task.

```terminal title="Example: Describe the mytask task in a namespace"
$ tkn task describe mytask -n myspace
```

## task list {id="_task_list"}
List tasks.

```terminal title="Example: List all the tasks in a namespace"
$ tkn task list -n myspace
```

## task logs {id="_task_logs"}
Display task logs.

```terminal title="Example: Display logs for the mytaskrun task run of the mytask task"
$ tkn task logs mytask mytaskrun -n myspace
```

## task start {id="_task_start"}
Start a task.

```terminal title="Example: Start the mytask task in a namespace"
$ tkn task start mytask -s <ServiceAccountName> -n myspace
```