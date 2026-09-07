{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting a deployment {id="deployments-starting-a-deployment_{{ context }}"}

To begin a new rollout of your application in {{ product_title }}, you can start a deployment from an existing `DeploymentConfig` object. Use the `oc rollout latest` command to create a new replication controller and run the deployment process. {._abstract}

**Procedure**

1.  To start a new deployment process from an existing `DeploymentConfig` object, run the following command:
    ```terminal
    $ oc rollout latest dc/<name>
    ```

    :::note

    If a deployment process is already in progress, the command displays a message and a new replication controller will not be deployed.
    
    :::