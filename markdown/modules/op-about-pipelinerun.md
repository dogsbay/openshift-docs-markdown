# PipelineRun {id="about-pipelinerun_{{ context }}"}

A `PipelineRun` is a type of resource that binds a pipeline, workspaces, credentials, and a set of parameter values specific to a scenario to run the CI/CD workflow.

A `PipelineRun` is the running instance of a pipeline. It instantiates a pipeline for execution with specific inputs, outputs, and execution parameters on a cluster. It also creates a task run for each task in the pipeline run.

The pipeline runs the tasks sequentially until they are complete or a task fails. The `status` field tracks and the progress of each task run and stores it for monitoring and auditing purposes.

The following example runs the `build-and-deploy` pipeline with relevant resources and parameters:
```yaml
apiVersion: tekton.dev/v1beta1 (1)
kind: PipelineRun (2)
metadata:
  name: build-deploy-api-pipelinerun (3)
spec:
  pipelineRef:
    name: build-and-deploy (4)
  params: (5)
  - name: deployment-name
    value: vote-api
  - name: git-url
    value: https://github.com/openshift-pipelines/vote-api.git
  - name: IMAGE
    value: image-registry.openshift-image-registry.svc:5000/pipelines-tutorial/vote-api
  workspaces: (6)
  - name: shared-workspace
    volumeClaimTemplate:
      spec:
        accessModes:
          - ReadWriteOnce
        resources:
          requests:
            storage: 500Mi
```
1.  Pipeline run API version `v1beta1`.
1.  The type of Kubernetes object. In this example, `PipelineRun`.
1.  Unique name to identify this pipeline run.
1.  Name of the pipeline to be run. In this example, `build-and-deploy`.
1.  The list of parameters required to run the pipeline.
1.  Workspace used by the pipeline run.

**Additional resources**
{._additional-resources}

*   [Authenticating pipelines using git secret](/cicd/pipelines/authenticating-pipelines-using-git-secret#authenticating-pipelines-using-git-secret)