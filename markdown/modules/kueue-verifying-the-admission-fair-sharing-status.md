{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the admission fair sharing status {id="verifying-the-admission-fair-sharing-status_{{ context }}"}

Check the `admissionFairSharingStatus` status in the local queue. {._abstract}

**Procedure**

*   Use the following command to verify the status of admission fair sharing:
    ```terminal
    $ oc get lq <local-queue-name> -n <local-queue-namespace> -o jsonpath={.status.fairSharing}
    ```
    ```terminal title="Example output"
    {"admissionFairSharingStatus":{"consumedResources":{"cpu":"31999m"},"lastUpdate":"2025-06-03T14:25:15Z"},"weightedShare":0}
    ```