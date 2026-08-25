{%- set _mod_docs_content_type = "PROCEDURE" %}
# Triggering a pipeline run {id="triggering-a-pipeline_{{ context }}"}

Whenever a `push` event occurs in the Git repository, the configured webhook sends an event payload to the publicly exposed `EventListener` service route. The `EventListener` service of the application processes the payload, and passes it to the relevant `TriggerBinding` and `TriggerTemplate` resource pairs. The `TriggerBinding` resource extracts the parameters, and the `TriggerTemplate` resource uses these parameters and specifies the way the resources must be created. This may rebuild and redeploy the application.

In this section, you push an empty commit to the front-end `pipelines-vote-ui` repository, which then triggers the pipeline run.

**Procedure**

1.  From the terminal, clone your forked Git repository `pipelines-vote-ui`:
    ```terminal {minja}
    $ git clone git@github.com:<your GitHub ID>/pipelines-vote-ui.git -b {{ pipelines_ver }}
    ```
1.  Push an empty commit:
    ```terminal {minja}
    $ git commit -m "empty-commit" --allow-empty && git push origin {{ pipelines_ver }}
    ```
1.  Check if the pipeline run was triggered:
    ```
    $ tkn pipelinerun list
    ```

    Notice that a new pipeline run was initiated.