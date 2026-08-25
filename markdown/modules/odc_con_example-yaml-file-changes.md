{%- set _mod_docs_content_type = "CONCEPT" %}

# Example YAML file changes {id="con_example-yaml-file-changes_{{ context }}"}

You can dynamically add the following snippets in the YAML editor for customizing a developer catalog. {._abstract}

Use the following snippet to display all the sub-catalogs by setting the _state_ type to **Enabled**.
```yaml
apiVersion: operator.openshift.io/v1
kind: Console
metadata:
  name: cluster
...
spec:
  customization:
    developerCatalog:
      categories:
      types:
        state: Enabled
```

Use the following snippet to disable all sub-catalogs by setting the _state_ type to **Disabled**:
```yaml
apiVersion: operator.openshift.io/v1
kind: Console
metadata:
  name: cluster
...
spec:
  customization:
    developerCatalog:
      categories:
      types:
        state: Disabled
```

Use the following snippet when a cluster administrator defines a list of sub-catalogs, which are enabled in the Web Console.
```yaml
apiVersion: operator.openshift.io/v1
kind: Console
metadata:
  name: cluster
...
spec:
  customization:
    developerCatalog:
      categories:
      types:
        state: Enabled
        enabled:
          - BuilderImage
          - Devfile
          - HelmChart
          - ...
```