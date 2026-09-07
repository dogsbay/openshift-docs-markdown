{%- set _mod_docs_content_type = "PROCEDURE" %}
# Retrying a deployment {id="deployments-retrying-deployment_{{ context }}"}

To restart a failed rollout of a `DeploymentConfig` object in {{ product_title }}, you can retry the deployment. Use the `oc rollout retry` command to restart the same revision without creating a new deployment revision. {._abstract}

**Procedure**

1.  To restart a failed deployment process:
    ```terminal
    $ oc rollout retry dc/<name>
    ```

    If the latest revision of it was deployed successfully, the command displays a message and the deployment process is not retried.

    :::note

    Retrying a deployment restarts the deployment process and does not create a new deployment revision. The restarted replication controller has the same configuration it had when it failed.
    
    :::