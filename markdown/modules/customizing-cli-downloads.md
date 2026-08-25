{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing CLI downloads {id="creating-custom-CLI-downloads_{{ context }}"}

You can configure links for downloading the CLI with custom link text and URLs,
which can point directly to file packages or to an external page that provides
the packages. {._abstract}

**Prerequisites**

*   You must have administrator privileges.

**Procedure**

1.  Navigate to **Administration** → **Custom Resource Definitions**.
1.  Select **ConsoleCLIDownload** from the list of Custom Resource Definitions (CRDs).
1.  Click the **YAML** tab, and then make your edits:
    ```yaml
    apiVersion: console.openshift.io/v1
    kind: ConsoleCLIDownload
    metadata:
      name: example-cli-download-links
    spec:
      description: |
        This is an example of download links
      displayName: example
      links:
      - href: 'https://www.example.com/public/example.tar'
        text: example for linux
      - href: 'https://www.example.com/public/example.mac.zip'
        text: example for mac
      - href: 'https://www.example.com/public/example.win.zip'
        text: example for windows
    ```
1.  Click the **Save** button.