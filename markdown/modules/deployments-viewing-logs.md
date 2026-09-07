{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing deployment logs {id="deployments-viewing-logs_{{ context }}"}

To troubleshoot a rollout in {{ product_title }}, you can view deployment logs for a `DeploymentConfig` object. Use the `oc logs` command to stream logs from the latest revision or from an older failed deployment process. {._abstract}

**Procedure**

1.  To stream the logs of the latest revision for a given `DeploymentConfig` object:
    ```terminal
    $ oc logs -f dc/<name>
    ```

    If the latest revision is running or failed, the command returns the logs of the process that is responsible for deploying your pods. If it is successful, it returns the logs from a pod of your application.
1.  You can also view logs from older failed deployment processes, if and only if these processes (old replication controllers and their deployer pods) exist and have not been pruned or deleted manually:
    ```terminal
    $ oc logs --version=1 dc/<name>
    ```