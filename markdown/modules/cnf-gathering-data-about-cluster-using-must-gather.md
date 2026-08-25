{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering data about your cluster for the PPC {id="gathering-data-about-your-cluster-using-must-gather_{{ context }}"}

The Performance Profile Creator (PPC) tool requires `must-gather` data. As a cluster administrator, run the `must-gather` command to capture information about your cluster. {._abstract}

**Prerequisites**

*   Access to the cluster as a user with the `cluster-admin` role.
*   You installed the {{ oc_first }}.
*   You identified a target MCP that you want to configure with a performance profile.

**Procedure**

1.  Navigate to the directory where you want to store the `must-gather` data.
1.  Collect cluster information by running the following command:
    ```terminal
    $ oc adm must-gather
    ```

    The command creates a folder with the `must-gather` data in your local directory with a naming format similar to the following: `must-gather.local.1971646453781853027`.
1.  Optional: Create a compressed file from the `must-gather` directory:
    ```terminal
    $ tar cvaf must-gather.tar.gz <must_gather_folder>
    ```
    *   `<must_gather_folder>`: Specifies the name of the `must-gather` data folder.

        :::note

        Compressed output is required if you are running the Performance Profile Creator wrapper script.
        
        :::