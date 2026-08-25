{%- set _mod_docs_content_type = "REFERENCE" %}
# Settings for environment labels and annotations {id="go-settings-for-environment-labels-and-annotations_{{ context }}"}

This section provides reference settings for environment labels and annotations required to display an environment application in the **Environments** page, in the **Developer** perspective of the {{ product_title }} web console.

## Environment labels {id="_environment_labels"}

The environment application manifest must contain `labels.openshift.gitops/environment` and `destination.namespace` fields. You must set identical values for the `<environment_name>` variable and the name of the environment application manifest.

```yaml title="Specification of the environment application manifest"
spec:
  labels:
    openshift.gitops/environment: <environment_name>
  destination:
    namespace: <environment_name>
...
```

```yaml title="Example of an environment application manifest"
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: dev-env (1)
  namespace: openshift-gitops
spec:
  labels:
    openshift.gitops/environment: dev-env
  destination:
    namespace: dev-env
...
```
1.  The name of the environment application manifest. The value set is the same as the value of the `<environment_name>` variable.

## Environment annotations {id="_environment_annotations"}
The environment namespace manifest must contain the `annotations.app.openshift.io/vcs-uri` and `annotations.app.openshift.io/vcs-ref` fields to specify the version controller code source of the application. You must set identical values for the `<environment_name>` variable and the name of the environment namespace manifest.

```yaml title="Specification of the environment namespace manifest"
apiVersion: v1
kind: Namespace
metadata:
  annotations:
    app.openshift.io/vcs-uri: <application_source_url>
    app.openshift.io/vcs-ref: <branch_reference>
  name: <environment_name> (1)
...
```
1.  The name of the environment namespace manifest. The value set is the same as the value of the `<environment_name>` variable.

```yaml title="Example of an environment namespace manifest"
apiVersion: v1
kind: Namespace
metadata:
  annotations:
    app.openshift.io/vcs-uri: https://example.com/<your_domain>/<your_gitops.git>
    app.openshift.io/vcs-ref: main
  labels:
    argocd.argoproj.io/managed-by: openshift-gitops
  name: dev-env
...
```