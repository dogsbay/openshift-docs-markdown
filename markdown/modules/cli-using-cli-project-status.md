{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the status of the current project {id="cli-using-cli-project-status_{{ context }}"}

Use the `oc status` command to view information about the current project, such as services, deployments, and build configs. {._abstract}

**Procedure**

*   View the status of the current project by running the following command:
    ```terminal
    $ oc status
    ```
    ```terminal title="Example output"
    In project my-project on server https://openshift.example.com:6443

    svc/cakephp-ex - 172.30.236.80 ports 8080, 8443
      dc/cakephp-ex deploys istag/cakephp-ex:latest <-
        bc/cakephp-ex source builds https://github.com/sclorg/cakephp-ex on openshift/php:7.2
        deployment #1 deployed 2 minutes ago - 1 pod

    3 infos identified, use 'oc status --suggest' to see details.
    ```