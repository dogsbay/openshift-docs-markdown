{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling notifications with Argo CD instance {id="gitops-argo-cd-notification_{{ context }}"}

To enable or disable the [Argo CD notifications controller](https://argo-cd.readthedocs.io/en/stable/operator-manual/notifications/), set a parameter in the Argo CD custom resource. By default, notifications are disabled. To enable notifications, set the `enabled` parameter to `true` in the `.yaml` file:

**Procedure**

1.  Set the `enabled` parameter to `true`:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: ArgoCD
metadata:
  name: example-argocd
spec:
  notifications:
    enabled: true
```