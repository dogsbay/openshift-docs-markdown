{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ hcp }} command-line interface by using the web console {id="hcp-cli-console_{{ context }}"}

You can install the {{ hcp }} command-line interface (CLI), `hcp`, by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   On an {{ product_title }} cluster, you have installed {{ mce }} 2.5 or later. The {{ mce_short }} is automatically installed when you install Red&#160;Hat Advanced Cluster Management. You can also install {{ mce_short }} without Red&#160;Hat Advanced Management as an Operator from the {{ product_title }} software catalog.

**Procedure**

1.  From the {{ product_title }} web console, click the **Help icon** -> **Command Line Tools**.
1.  Click **Download hcp CLI** for your platform.
1.  Unpack the downloaded archive by running the following command:
    ```terminal
    $ tar xvzf hcp.tar.gz
    ```
1.  Run the following command to make the binary file executable:
    ```terminal
    $ chmod +x hcp
    ```
1.  Run the following command to move the binary file to a directory in your path:
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