{%- set _mod_docs_content_type = "PROCEDURE" %}

# Customizing a developer catalog or its sub-catalogs using the YAML view {id="odc_customizing-a-developer-catalog-or-its-sub-catalogs-using-the-yaml-view_{{ context }}"}

You can customize a developer catalog by editing the YAML content in the YAML view. {._abstract}

**Prerequisites**

*   An OpenShift web console session with cluster administrator privileges.

**Procedure**

1.  In the **Administrator** perspective of the web console, navigate to **Administration** -> **Cluster Settings**.
1.  Select the **Configuration** tab, click the **Console (operator.openshift.io)** resource and view the **Details** page.
1.  Click the **YAML** tab to open the editor and edit the YAML content as needed.

    For example, to disable a developer catalog type, insert the following snippet that defines a list of disabled developer catalog resources:
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
            disabled:
              - BuilderImage
              - Devfile
              - HelmChart
    ...
    ```
1.  Click **Save**.

    :::note

    By default, the developer catalog types are enabled in the Administrator view of the Web Console.
    
    :::