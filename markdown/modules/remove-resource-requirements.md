{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing resource requests {id="remove-resource-requirements_{{ context }}"}

You can also remove resource requirements for all or any of your workloads after installation. {._abstract}

**Procedure**

Remove the `Application Controller` resource requests of an Argo CD instance in the Argo CD namespace.

```terminal
oc -n argocd patch argocd example --type='json' -p='[{"op": "remove", "path": "/spec/controller/resources/requests/cpu"}]'

oc -n argocd argocd patch argocd example --type='json' -p='[{"op": "remove", "path": "/spec/controller/resources/requests/memory"}]'

```