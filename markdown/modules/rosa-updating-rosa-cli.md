{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the {{ rosa_cli }} {id="rosa-updating-the-rosa-cli_{{ context }}"}

Update the {{ rosa_cli_first }} to the latest version that works with your cluster. {._abstract}

**Procedure**

1.  Confirm that a new version of the {{ rosa_cli }} (`rosa`) is available:
    ```terminal
    $ rosa version
    ```
    ```terminal title="Example output"
    1.2.12
    There is a newer release version '1.2.15', please consider updating: https://mirror.openshift.com/pub/openshift-v4/clients/rosa/latest/
    ```
1.  Download the latest compatible version of the {{ rosa_cli }}:
    ```terminal
    $ rosa download rosa
    ```

    This command downloads an archive called `rosa-*.tar.gz` into the current directory. The exact name of the file depends on your operating system and system architecture.
1.  Extract the contents of the archive:
    ```terminal
    $ tar -xzf rosa-linux.tar.gz
    ```
1.  Install the new version of the {{ rosa_cli }} by moving the extracted file into your path. In the following example, your path includes the `/usr/local/bin` directory:
    ```terminal
    $ sudo mv rosa /usr/local/bin/rosa
    ```

**Verification**

*   Verify the new version of the {{ rosa_cli }} installed successfully.
    ```terminal
    $ rosa version
    ```
    ```terminal title="Example output"
    1.2.15
    Your {{ rosa_cli }} is up to date.
    ```