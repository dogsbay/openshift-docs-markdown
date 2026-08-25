{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing a deployment {id="deployments-viewing-a-deployment_{{ context }}"}

You can view a deployment to get basic information about all the available revisions of your application.

**Procedure**

1.  To show details about all recently created replication controllers for the provided `DeploymentConfig` object, including any currently running deployment process, run the following command:
    ```terminal
    $ oc rollout history dc/<name>
    ```
1.  To view details specific to a revision, add the `--revision` flag:
    ```terminal
    $ oc rollout history dc/<name> --revision=1
    ```
1.  For more detailed information about a `DeploymentConfig` object and its latest revision, use the `oc describe` command:
    ```terminal
    $ oc describe dc <name>
    ```