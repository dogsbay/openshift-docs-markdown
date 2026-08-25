{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing kubeconfig by using the oc CLI {id="cli-accessing-kubeconfig-using-cli_{{ context }}"}

You can use the `oc` CLI to log in to your OpenShift cluster and retrieve a kubeconfig file for accessing the cluster from the command line. {._abstract}


:::important

If you plan to reuse the exported `kubeconfig` file across sessions or machines, store it securely and avoid committing it to source control.

:::


**Prerequisites**

*   You have access to the {{ product_title }} web console or API server endpoint.

**Procedure**

1.  Log in to your OpenShift cluster by running the following command:
    ```terminal
    $ oc login <api_server_url> -u <username> -p <password>
    ```

    where:

    `<api_server_url>`
    :   Specifies the full API server URL; for example, `https://api.my-cluster.example.com:6443`.

    `<username>`
    :   Specifies a valid username; for example, `kubeadmin`.

    `<password>`
    :   Specifies the password for the specified user; for example, the `kubeadmin` password generated during cluster installation.

1.  Save the cluster configuration to a local file by running the following command:
    ```terminal
    $ oc config view --raw > kubeconfig
    ```
1.  Set the `KUBECONFIG` environment variable to point to the exported file by running the following command:
    ```terminal
    $ export KUBECONFIG=./kubeconfig
    ```
1.  Use `oc` to interact with your OpenShift cluster by running the following command:
    ```terminal
    $ oc get nodes
    ```