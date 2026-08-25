{%- set _mod_docs_content_type = "PROCEDURE" %}
# Collecting debugging data for {{ gitops_title }} {id="collecting-debugging-data-for-gitops_{{ context }}"}

Use the `oc adm must-gather` CLI command to collect the following details about the cluster that is associated with {{ gitops_title }}:

*   The subscription and namespace of the {{ gitops_title }} Operator.
*   The namespaces where ArgoCD objects are available and the objects in those namespaces, such as `ArgoCD`, `Applications`, `ApplicationSets`, `AppProjects`, and `configmaps`.
*   A list of the namespaces that are managed by the {{ gitops_title }} Operator, and resources from those namespaces.
*   All {{ gitops_shortname }}-related custom resource objects and definitions.
*   Operator and Argo CD logs.
*   Warning and error-level events.

**Prerequisites**

*   You have logged in to the {{ product_title }} cluster as an administrator.
*   You have installed the {{ product_title }} CLI (`oc`).
*   You have installed the {{ gitops_title }} Operator.

**Procedure**

1.  Navigate to the directory where you want to store the debugging information.
1.  Run the `oc adm must-gather` command with the {{ gitops_title }} `must-gather` image:
    ```terminal
    $ oc adm must-gather --image=registry.redhat.io/openshift-gitops-1/gitops-must-gather-rhel8:v1.9.0
    ```

    The `must-gather` tool creates a new directory that starts with `./must-gather.local` in the current directory. For example, `./must-gather.local.4157245944708210399`.
1.  Create a compressed file from the directory that was just created. For example, on a computer that uses a Linux operating system, run the following command:
    ```terminal
    $ tar -cvaf must-gather.tar.gz must-gather.local.4157245944708210399
    ```
1.  Attach the compressed file to your support case on the [Red Hat Customer Portal](https://access.redhat.com/).