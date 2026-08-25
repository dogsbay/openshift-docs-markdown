{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuration using ConfigMaps {id="learning-deploying-configmaps-secrets-envvar-configmaps_{{ context }}"}

To keep your containerized applications portable, decouple your configuration artifacts from the container image content by using config maps. Managing these configurations separately ensures that your images remain completely environment-agnostic. {._abstract}

**Procedure**

*   In the OSToy application, in the left menu, click **Config Maps**, displaying the contents of the config map available to the OSToy application. The code snippet shows an example of a config map configuration:

    **For example**:
    ```text
    kind: ConfigMap
    apiVersion: v1
    metadata:
      name: ostoy-configmap-files
    data:
      config.json:  '{ "default": "123" }'
    ```