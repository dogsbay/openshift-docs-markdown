{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting a custom priority class name for the spod daemon pod {id="spo-custom-priority-class_{{ context }}"}

The default priority class name of the `spod` daemon pod is set to `system-node-critical`. A custom priority class name can be configured in the `spod` configuration by setting a value in the `priorityClassName` field. {._abstract}

**Procedure**

*   Configure the priority class name by running the following command:
    ```terminal
    $ oc -n openshift-security-profiles patch spod spod --type=merge -p '{"spec":{"priorityClassName":"my-priority-class"}}'
    ```
    ```terminal title="Example output"
    securityprofilesoperatordaemon.openshift-security-profiles.x-k8s.io/spod patched
    ```