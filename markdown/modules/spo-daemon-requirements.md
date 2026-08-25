{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing daemon resource requirements {id="spo-daemon-requirements_{{ context }}"}

The default resource requirements of the daemon container can be adjusted by using the field `daemonResourceRequirements` from the `spod` configuration. {._abstract}

**Procedure**

*   To specify the memory and cpu requests and limits of the daemon container, run the following command:
    ```terminal
    $ oc -n openshift-security-profiles patch spod spod --type merge -p \
        '{"spec":{"daemonResourceRequirements": { \
        "requests": {"memory": "256Mi", "cpu": "250m"}, \
        "limits": {"memory": "512Mi", "cpu": "500m"}}}}'
    ```