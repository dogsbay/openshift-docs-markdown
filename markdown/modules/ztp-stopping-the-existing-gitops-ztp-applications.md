{%- set _mod_docs_content_type = "PROCEDURE" %}
# Stopping the existing {{ ztp }} applications {id="ztp-stopping-the-existing-gitops-ztp-applications_{{ context }}"}

Removing the existing applications ensures that any changes to existing content in the Git repository are not rolled out until the new version of the tools is available. {._abstract}

Use the application files from the `deployment` directory. If you used custom names for the applications, update the names in these files first.

**Procedure**

1.  Perform a non-cascaded delete on the `clusters` application to leave all generated resources in place:
    ```terminal
    $ oc delete -f update/argocd/deployment/clusters-app.yaml
    ```
1.  Perform a cascaded delete on the `policies` application to remove all previous policies:
    ```terminal
    $ oc patch -f policies-app.yaml -p '{"metadata": {"finalizers": ["resources-finalizer.argocd.argoproj.io"]}}' --type merge
    ```
    ```terminal
    $ oc delete -f update/argocd/deployment/policies-app.yaml
    ```