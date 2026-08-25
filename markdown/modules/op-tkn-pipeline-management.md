# Pipelines management commands {id="op-tkn-pipeline-management_{{ context }}"}

## pipeline {id="_pipeline"}
Manage pipelines.

```terminal title="Example: Display help"
$ tkn pipeline --help
```

## pipeline delete {id="_pipeline_delete"}

Delete a pipeline.

```terminal title="Example: Delete the mypipeline pipeline from a namespace"
$ tkn pipeline delete mypipeline -n myspace
```

## pipeline describe {id="_pipeline_describe"}
Describe a pipeline.

```terminal title="Example: Describe the mypipeline pipeline"
$ tkn pipeline describe mypipeline
```

## pipeline list {id="_pipeline_list"}
Display a list of pipelines.

```terminal title="Example: Display a list of pipelines"
$ tkn pipeline list
```

## pipeline logs {id="_pipeline_logs"}
Display the logs for a specific pipeline.

```terminal title="Example: Stream the live logs for the mypipeline pipeline"
$ tkn pipeline logs -f mypipeline
```

## pipeline start {id="_pipeline_start"}
Start a pipeline.

```terminal title="Example: Start the mypipeline pipeline"
$ tkn pipeline start mypipeline
```