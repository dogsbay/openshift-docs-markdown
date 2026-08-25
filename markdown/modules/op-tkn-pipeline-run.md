# Pipeline run commands {id="op-tkn-pipeline-run_{{ context }}"}

## pipelinerun {id="_pipelinerun"}
Manage pipeline runs.

```terminal title="Example: Display help"
$ tkn pipelinerun -h
```

## pipelinerun cancel {id="_pipelinerun_cancel"}
Cancel a pipeline run.

```terminal title="Example: Cancel the mypipelinerun pipeline run from a namespace"
$ tkn pipelinerun cancel mypipelinerun -n myspace
```

## pipelinerun delete {id="_pipelinerun_delete"}
Delete a pipeline run.

```terminal title="Example: Delete pipeline runs from a namespace"
$ tkn pipelinerun delete mypipelinerun1 mypipelinerun2 -n myspace
```

```terminal title="Example: Delete all pipeline runs from a namespace, except the five most recently executed pipeline runs"
$ tkn pipelinerun delete -n myspace --keep 5 (1)
```
1.  Replace `5` with the number of most recently executed pipeline runs you want to retain.

```terminal title="Example: Delete all pipelines"
$ tkn pipelinerun delete --all
```


:::note

Starting with {{ pipelines_title }} 1.6, the `tkn pipelinerun delete --all` command does not delete any resources that are in the running state.

:::


## pipelinerun describe {id="_pipelinerun_describe"}
Describe a pipeline run.

```terminal title="Example: Describe the mypipelinerun pipeline run in a namespace"
$ tkn pipelinerun describe mypipelinerun -n myspace
```

## pipelinerun list {id="_pipelinerun_list"}
List pipeline runs.

```terminal title="Example: Display a list of pipeline runs in a namespace"
$ tkn pipelinerun list -n myspace
```

## pipelinerun logs {id="_pipelinerun_logs"}
Display the logs of a pipeline run.

```terminal title="Example: Display the logs of the mypipelinerun pipeline run with all tasks and steps in a namespace"
$ tkn pipelinerun logs mypipelinerun -a -n myspace
```