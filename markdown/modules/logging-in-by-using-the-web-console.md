{%- set _mod_docs_content_type = "PROCEDURE" %}
# Logging in to the cluster by using the web console {id="logging-in-by-using-the-web-console_{{ context }}"}

To verify that your cluster deployed successfully and access its features, log in to the {{ product_title }} web console as the `kubeadmin` user. {._abstract}

**Prerequisites**

*   You have access to the installation host.
*   You completed a cluster installation and all cluster Operators are available.

**Procedure**

1.  Obtain the password for the `kubeadmin` user from the `kubeadmin-password` file on the installation host:
    ```terminal
    $ cat <installation_directory>/auth/kubeadmin-password
    ```

    :::note

    Or, you can obtain the `kubeadmin` password from the `<installation_directory>/.openshift_install.log` log file on the installation host.
    
    :::

1.  List the {{ product_title }} web console route:
    ```terminal
    $ oc get routes -n openshift-console | grep 'console-openshift'
    ```

    :::note

    Or, you can obtain the {{ product_title }} route from the `<installation_directory>/.openshift_install.log` log file on the installation host.
    
    :::

    ```terminal title="Example output"
    console     console-openshift-console.apps.<cluster_name>.<base_domain>            console     https   reencrypt/Redirect   None
    ```
1.  Navigate to the route detailed in the output of the preceding command in a web browser and log in as the `kubeadmin` user.