{%- set _mod_docs_content_type = "CONCEPT" %}
# Use the mutating webhook {id="spo-log-webhook_{{ context }}"}

Use the mutating webhook so Advanced Audit Logging can correlate cluster users with actions in `oc exec`, `oc rsh`, and `oc debug` sessions. {._abstract}

The mutating webhook injects the `SPO_EXEC_REQUEST_UID` environment variable into your exec request. If a container already defines a variable with that name, the injected value overrides it for the exec session.

When you use `kubectl debug node/<node_name>`, the `nodedebuggingpod.spo.io` webhook injects `SPO_EXEC_REQUEST_UID` into the debug pod.

## The debug pod {id="debug-pod_{{ context }}"}

This webhook primarily identifies kubectl debug pods by the label `app.kubernetes.io/managed-by: kubectl-debug`, which is added by the kubectl client. Because this label might vary across different Kubernetes client implementations, such as how `oc debug` in {{ product_title }} uses `debug.openshift.io/managed-by: oc-debug`, you might need to configure additional `webhookOptions` to ensure the webhook catches all relevant debug pods.

For example, to add oc debug pods, use the following `yaml`:

```terminal
# ... (rest of your spod configuration)
spec:
  webhookOptions:
    - name: nodedebuggingpodmetada.spo.io
      objectSelector:
        matchLabels: # Use matchLabels for exact matching
          debug.openshift.io/managed-by: "oc-debug"
# ... (other webhook rule details such as rules, clientConfig, etc.)
```