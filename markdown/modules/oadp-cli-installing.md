{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the OADP CLI plugin {id="oadp-cli-installing_{{ context }}"}

The {{ oadp_short }} command-line interface (CLI) plugin is available from the **Command-line tools** page in the {{ product_title }} web console when the {{ oadp_short }} Operator is installed. {._abstract}

**Prerequisites**

*   You have access to an {{ product_title }} cluster with the {{ oadp_short }} Operator installed.

**Procedure**

1.  Log in to the {{ product_title }} web console as a user with access to the cluster.
1.  Click the **?** icon in the toolbar and select **Command-line tools**.
1.  Download the `oc-oadp` binary for your operating system and architecture.
1.  Extract the archive and place the `oc-oadp` binary in a directory on your `PATH`.
1.  Verify the installation:
    ```terminal
    $ oc oadp version
    ```