{%- set _mod_docs_content_type = "PROCEDURE" %}
## Updating the ROSA CLI tool {id="updating-rosa-cli_{{ context }}"}

To use the latest version of the {{ product_title }} (ROSA) CLI, `rosa`, download the ROSA CLI (`rosa`) from the Hybrid Cloud Console. If you already have this tool, the procedure is the same for updates.

**Procedure**

1.  Download the file from the [Hybrid Cloud Console](https://console.redhat.com/openshift/downloads).
1.  Unzip the downloaded file.
1.  Move the file to the `/usr/bin/rosa` directory by running the following command:
    ```terminal
    $ sudo mv rosa /usr/bin/rosa
    ```
1.  Confirm your version by running the following command:
    ```terminal
    $ rosa version
    ```

    ```terminal title="Example output"
    <version>
    Your ROSA CLI is up to date.
    ```