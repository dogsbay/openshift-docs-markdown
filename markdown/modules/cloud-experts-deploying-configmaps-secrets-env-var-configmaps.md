{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuration using ConfigMaps {id="cloud-experts-deploying-configmaps-secrets-env-var-configmaps_{{ context }}"}

Config maps allow you to decouple configuration artifacts from container image content to keep containerized applications portable. {._abstract}

**Procedure**

*   In the OSToy app, in the left menu, click **Config Maps**, displaying the contents of the config map available to the OSToy application. The code snippet shows an example of a config map configuration:

    ***Example output:***
    ```text
    kind: ConfigMap
    apiVersion: v1
    metadata:
      name: ostoy-configmap-files
    data:
      config.json:  '{ "default": "123" }'
    ```