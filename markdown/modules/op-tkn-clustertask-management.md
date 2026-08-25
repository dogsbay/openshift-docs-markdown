# ClusterTask management commands {id="op-tkn-clustertask-management-commands_{{ context }}"}


:::important

In {{ pipelines_title }} 1.10, ClusterTask functionality of the `tkn` command-line utility is deprecated and is planned to be removed in a future release.

:::


## clustertask {id="_clustertask"}
Manage ClusterTasks.

```terminal title="Example: Display help"
$ tkn clustertask --help
```

## clustertask delete {id="_clustertask_delete"}
Delete a ClusterTask resource in a cluster.

```terminal title="Example: Delete mytask1 and mytask2 ClusterTasks"
$ tkn clustertask delete mytask1 mytask2
```

## clustertask describe {id="_clustertask_describe"}
Describe a ClusterTask.

```terminal title="Example: Describe the mytask ClusterTask"
$ tkn clustertask describe mytask1
```

## clustertask list {id="_clustertask_list"}
List ClusterTasks.

```terminal title="Example: List ClusterTasks"
$ tkn clustertask list
```
## clustertask start {id="_clustertask_start"}
Start ClusterTasks.

```terminal title="Example: Start the mytask ClusterTask"
$ tkn clustertask start mytask
```