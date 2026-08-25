{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ hcp }} command-line interface by using the content gateway {id="hcp-cli-gateway_{{ context }}"}

You can install the {{ hcp }} command-line interface (CLI), `hcp`, by using the content gateway. {._abstract}

**Prerequisites**

*   On an {{ product_title }} cluster, you have installed {{ mce }} 2.7 or later. The {{ mce_short }} is automatically installed when you install Red&#160;Hat Advanced Cluster Management. You can also install {{ mce_short }} without Red&#160;Hat Advanced Management as an Operator from {{ product_title }} OperatorHub.

**Procedure**

1.  Navigate to the [content gateway](https://developers.redhat.com/content-gateway/rest/browse/pub/mce/clients/hcp-cli/) and download the `hcp` binary.
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