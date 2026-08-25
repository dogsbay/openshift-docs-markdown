{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering log data from a failed Agent-based installation {id="installing-ocp-agent-gather-log_{{ context }}"}

If you encounter a failed Agent-based installation, you can gather log data to provide for a support case. {._abstract}

**Prerequisites**

*   You have configured a DNS record for the Kubernetes API server.

**Procedure**

1.  Run the following command and collect the output:
    ```terminal
    $ ./openshift-install --dir <installation_directory> agent wait-for bootstrap-complete --log-level=debug
    ```
    ```terminal title="Example error message"
    ...
    ERROR Bootstrap failed to complete: : bootstrap process timed out: context deadline exceeded
    ```
1.  If the output from the previous command indicates a failure, or if the bootstrap is not progressing, run the following command to connect to the rendezvous host and collect the output:
    ```terminal
    $ ssh core@<node-ip> agent-gather -O >agent-gather.tar.xz
    ```

    :::note

    Red&#160;Hat Support can diagnose most issues using the data gathered from the rendezvous host, but if some hosts are not able to register, gathering this data from every host might be helpful.
    
    :::

1.  If the bootstrap completes and the cluster nodes reboot, run the following command and collect the output:
    ```terminal
    $ ./openshift-install --dir <install_directory> agent wait-for install-complete --log-level=debug
    ```
1.  If the output from the previous command indicates a failure, perform the following steps:
    1.  Export the `kubeconfig` file to your environment by running the following command:
        ```terminal
        $ export KUBECONFIG=<install_directory>/auth/kubeconfig
        ```
    1.  Gather information for debugging by running the following command:
        ```terminal
        $ oc adm must-gather
        ```
    1.  Create a compressed file from the `must-gather` directory that was just created in your working directory by running the following command:
        ```terminal
        $ tar cvaf must-gather.tar.gz <must_gather_directory>
        ```
1.  Excluding the `/auth` subdirectory, attach the installation directory used during the deployment to your support case on the [Red&#160;Hat Customer Portal](https://access.redhat.com).
1.  Attach all other data gathered from this procedure to your support case.