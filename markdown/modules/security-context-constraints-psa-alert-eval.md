{%- set _mod_docs_content_type = "PROCEDURE" %}
# Identifying pod security violations {id="security-context-constraints-psa-alert-eval_{{ context }}"}

To identify which workloads are causing pod security violations, you can review the Kubernetes API server audit logs by using the `must-gather` tool. {._abstract}

The `PodSecurityViolation` alert does not provide details on which workloads are causing pod security violations.

**Prerequisites**

*   You have installed `jq`.
*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  To gather the audit logs, enter the following command:
    ```terminal
    $ oc adm must-gather -- /usr/bin/gather_audit_logs
    ```
1.  To output the affected workload details, enter the following command:
    ```terminal
    $ zgrep -h pod-security.kubernetes.io/audit-violations must-gather.local.<archive_id>/<image_digest_id>/audit_logs/kube-apiserver/*log.gz \
      | jq -r 'select((.annotations["pod-security.kubernetes.io/audit-violations"] != null) and (.objectRef.resource=="pods")) | .objectRef.namespace + " " + .objectRef.name' \
      | sort | uniq -c
    ```

    Replace `<archive_id>` and `<image_digest_id>` with the actual path names.
    ```text title="Example output"
    1 test-namespace my-pod
    ```