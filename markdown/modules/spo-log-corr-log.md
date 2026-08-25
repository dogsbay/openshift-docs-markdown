{%- set _mod_docs_content_type = "PROCEDURE" %}
# Correlating with API Server Audit Log {id="spo-log-corr-log_{{ context }}"}

By default, when you use the `kubectl exec` command to access a pod or container, Kubernetes does not pass the user’s authentication details into that session’s environment. This means the Audit JSON log enricher cannot provide audit information for `exec` commands. The `UID` or `GID` shown, maps to the system user. In most cases this would be the root user. {._abstract}

To address this, the Audit JSON log enricher relies on mutating webhooks (`execmetadata.spo.io` and `nodedebuggingpod.spo.io`). The webhook injects the exec `requestUID` as an environment variable into the `exec` session. When the administrator enables audit logging on the API server, the webhooks add the `SPO_EXEC_REQUEST_UID` audit annotation. The API server audit log contains this information. This request ID is also available in the JSON lines produced by the Audit JSON log enricher, specifically within the `requestUID` field.

By default, these webhooks are enabled for all namespaces with the Audit JSON log enricher enabled. To reduce the scope of this webhook you can disable it for certain namespaces.

**Procedure**

1.  Edit the spod security profile by running the following command:
    ```terminal
    $ oc edit spod spod -n openshift-security-profiles
    ```
1.  Add `webhookOptions` to the `spec`. Locate the `spec` section and add the following `webhookOptions` block to instruct the webhook to apply to a specific namespace.
    ```yaml
    spec:
      webhookOptions:
        - name: execmetadata.spo.io # or nodedebuggingpod.spo.io
          namespaceSelector:
          #...add rules
    ```

    After saving your changes, the Operator reconfigures the mutating webhook, allowing request details to be passed into `oc exec` sessions cluster-wide.