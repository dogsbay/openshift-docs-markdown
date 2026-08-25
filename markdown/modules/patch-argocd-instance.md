{%- set _mod_docs_content_type = "PROCEDURE" %}
# Patching Argo CD instance to update the resource requirements {id="patch-argocd-instance_{{ context }}"}

You can update the resource requirements for all or any of the workloads post installation. {._abstract}

**Procedure**

Update the `Application Controller` resource requests of an Argo CD instance in the Argo CD namespace.

```terminal
oc -n argocd patch argocd example --type='json' -p='[{"op": "replace", "path": "/spec/controller/resources/requests/cpu", "value":"1"}]'

oc -n argocd patch argocd example --type='json' -p='[{"op": "replace", "path": "/spec/controller/resources/requests/memory", "value":"512Mi"}]'
```