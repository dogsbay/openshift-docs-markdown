{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting deployment triggers {id="deployments-setting-triggers_{{ context }}"}

**Procedure**

1.  You can set deployment triggers for a `DeploymentConfig` object using the `oc set triggers` command. For example, to set a image change trigger, use the following command:
    ```terminal
    $ oc set triggers dc/<dc_name> \
        --from-image=<project>/<image>:<tag> -c <container_name>
    ```