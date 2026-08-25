{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ hcp }} command-line interface from the terminal {id="hcp-cli-terminal_{{ context }}"}

You can install the {{ hcp }} command-line interface (CLI), `hcp`, from the terminal. {._abstract}

**Prerequisites**

*   On an {{ product_title }} cluster, you have installed {{ mce }} 2.5 or later. The {{ mce_short }} is automatically installed when you install Red&#160;Hat Advanced Cluster Management. You can also install {{ mce_short }} without Red&#160;Hat Advanced Management as an Operator from the {{ product_title }} software catalog.

**Procedure**

1.  Get the URL to download the `hcp` binary by running the following command:
    ```terminal
    $ oc get ConsoleCLIDownload hcp-cli-download -o json | jq -r ".spec"
    ```
1.  Download the `hcp` binary by running the following command:
    ```terminal
    $ wget <hcp_cli_download_url>
    ```

    Replace `hcp_cli_download_url` with the URL that you obtained from the previous step.
1.  Unpack the downloaded archive by running the following command:
    ```terminal
    $ tar xvzf hcp.tar.gz
    ```
1.  Make the `hcp` binary file executable by running the following command:
    ```terminal
    $ chmod +x hcp
    ```
1.  Move the `hcp` binary file to a directory in your path by running the following command:
    ```terminal
    $ sudo mv hcp /usr/local/bin/.
    ```

    :::note

    If you download the CLI on a Mac computer, you might see a warning about the `hcp` binary file. You need to adjust your security settings to allow the binary file to be run.
    
    :::


**Verification**

*   Verify that you see the list of available parameters by running the following command:
    ```terminal
    $ hcp create cluster <platform> --help
    ```

    You can use the `hcp create cluster` command to create and manage hosted clusters. The supported platforms are `agent`, `aws`, and `kubevirt`. The `azure` and `openstack` platforms are also available as Technology Preview features.