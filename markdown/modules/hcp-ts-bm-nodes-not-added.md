{%- set _mod_docs_content_type = "PROCEDURE" %}
# Determining why nodes are not added to a hosted cluster on bare metal {id="hcp-ts-bm-nodes-not-added_{{ context }}"}

When you scale up a hosted cluster with nodes that were provisioned by using Assisted Installer, the host fails to pull the ignition with a URL that contains port `22642`. That URL is invalid for {{ hcp }} and indicates that an issue exists with the cluster. {._abstract}

**Procedure**

1.  To determine the issue, review the assisted-service logs by entering the following command:
    ```terminal
    $ oc logs -n multicluster-engine <assisted_service_pod_name>
    ```

    Replace `<assisted_service_pod_name>` with the Assisted Service pod name.
1.  In the logs, find errors that resemble these examples:
    ```terminal
    error="failed to get pull secret for update: invalid pull secret data in secret pull-secret"
    ```
    ```terminal
    pull secret must contain auth for \"registry.redhat.io\"
    ```
1.  To fix this issue, see "Add the pull secret to the namespace" in the {{ mce }} documentation.

    :::note

    To use {{ hcp }}, you must have {{ mce_short }} installed, either as a standalone Operator or as part of {{ rh_rhacm_title }}. Because the Operator has a close association with {{ rh_rhacm_title }}, the documentation for the Operator is published within that product’s documentation. Even if you do not use {{ rh_rhacm_title }}, the parts of its documentation that cover {{ mce_short }} are relevant to {{ hcp }}.
    
    :::