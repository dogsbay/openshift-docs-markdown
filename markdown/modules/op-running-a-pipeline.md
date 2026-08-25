{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running a pipeline {id="running-a-pipeline_{{ context }}"}

A `PipelineRun` resource starts a pipeline and ties it to the Git and image resources that should be used for the specific invocation. It automatically creates and starts the `TaskRun` resources for each task in the pipeline.

**Procedure**

1.  Start the pipeline for the back-end application:
    ```yaml {minja}
    $ tkn pipeline start build-and-deploy \
        -w name=shared-workspace,volumeClaimTemplateFile=https://raw.githubusercontent.com/openshift/pipelines-tutorial/{{ pipelines_ver }}/01_pipeline/03_persistent_volume_claim.yaml \
        -p deployment-name=pipelines-vote-api \
        -p git-url=https://github.com/openshift/pipelines-vote-api.git \
        -p IMAGE='image-registry.openshift-image-registry.svc:5000/pipelines-tutorial/pipelines-vote-api' \
        --use-param-defaults
    ```

    The previous command uses a volume claim template, which creates a persistent volume claim for the pipeline execution.
1.  To track the progress of the pipeline run, enter the following command::
    ```yaml
    $ tkn pipelinerun logs <pipelinerun_id> -f
    ```

    The &lt;pipelinerun_id> in the above command is the ID for the `PipelineRun` that was returned in the output of the previous command.
1.  Start the pipeline for the front-end application:
    ```yaml {minja}
    $ tkn pipeline start build-and-deploy \
        -w name=shared-workspace,volumeClaimTemplateFile=https://raw.githubusercontent.com/openshift/pipelines-tutorial/{{ pipelines_ver }}/01_pipeline/03_persistent_volume_claim.yaml \
        -p deployment-name=pipelines-vote-ui \
        -p git-url=https://github.com/openshift/pipelines-vote-ui.git \
        -p IMAGE='image-registry.openshift-image-registry.svc:5000/pipelines-tutorial/pipelines-vote-ui' \
        --use-param-defaults
    ```
1.  To track the progress of the pipeline run, enter the following command:
    ```yaml
    $ tkn pipelinerun logs <pipelinerun_id> -f
    ```

    The &lt;pipelinerun_id> in the above command is the ID for the `PipelineRun` that was returned in the output of the previous command.
1.  After a few minutes, use `tkn pipelinerun list` command to verify that the pipeline ran successfully by listing all the pipeline runs:
    ```yaml
    $ tkn pipelinerun list
    ```

    The output lists the pipeline runs:
    ```yaml

     NAME                         STARTED      DURATION     STATUS
     build-and-deploy-run-xy7rw   1 hour ago   2 minutes    Succeeded
     build-and-deploy-run-z2rz8   1 hour ago   19 minutes   Succeeded
    ```
1.  Get the application route:
    ```yaml
    $ oc get route pipelines-vote-ui --template='http://{{.spec.host}}'
    ```

    Note the output of the previous command. You can access the application using this route.
1.  To rerun the last pipeline run, using the pipeline resources and service account of the previous pipeline, run:
    ```yaml
    $ tkn pipeline start build-and-deploy --last
    ```

**Additional resources**
{._additional-resources}

*   [Authenticating pipelines using git secret](/cicd/pipelines/authenticating-pipelines-using-git-secret#authenticating-pipelines-using-git-secret)