{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying resources to a different namespace {id="gitops-deploy-resources-different-namespaces_{{ context }}"}

To allow Argo CD to manage resources in other namespaces apart from where it is installed, configure the target namespace with a `argocd.argoproj.io/managed-by` label.

**Procedure**

*   Configure the namespace:
    ```terminal
    $ oc label namespace <namespace> \
    argocd.argoproj.io/managed-by=<namespace> (1)
    ```
    1.  The namespace where Argo CD is installed.