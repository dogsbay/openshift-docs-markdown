{%- set _mod_docs_content_type = "PROCEDURE" %}
# Defining a template for an external log link {id="defining-template-for-external-log-links_{{ context }}"}

If you are connected to a service that helps you browse your logs, but you need
to generate URLs in a particular way, then you can define a template for your
link. {._abstract}

**Prerequisites**

*   You must have administrator privileges.

**Procedure**

1.  From **Administration** → **Custom Resource Definitions**, click **ConsoleExternalLogLink**.
1.  Select the **Instances** tab.
1.  Click **Create Console External Log Link** and edit the file:
    ```yaml
    apiVersion: console.openshift.io/v1
    kind: ConsoleExternalLogLink
    metadata:
      name: example
    spec:
      hrefTemplate: >-
        https://example.com/logs?resourceName=${resourceName}&containerName=${containerName}&resourceNamespace=${resourceNamespace}&podLabels=${podLabels}
      text: Example Logs
    ```