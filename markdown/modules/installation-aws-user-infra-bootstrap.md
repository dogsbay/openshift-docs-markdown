{%- set _mod_docs_content_type = "PROCEDURE" %}
# Initializing the bootstrap sequence on {{ aws_first }} with user-provisioned infrastructure {id="installation-aws-user-infra-bootstrap_{{ context }}"}

After creating all required infrastructure in {{ aws_short }}, you can start the bootstrap sequence that initializes the {{ product_title }} control plane. Run the installation program to monitor the bootstrap process until the control plane is ready. {._abstract}

**Prerequisites**

*   You created the worker nodes.

**Procedure**

1.  Change to the directory that has the installation program and start the bootstrap process that initializes the {{ product_title }} control plane:
    ```terminal
    $ ./openshift-install wait-for bootstrap-complete --dir <installation_directory>
        --log-level=info
    ```
    *   For `<installation_directory>`, specify the path to the directory that you stored the installation files in.
    *   To view different installation details, specify `warn`, `debug`, or `error` instead of `info`.
        ```terminal title="Example output"
        INFO Waiting up to 20m0s for the Kubernetes API at https://api.mycluster.example.com:6443...
        INFO API v1.35.4 up
        INFO Waiting up to 45m0s for bootstrapping to complete...
        INFO It is now safe to remove the bootstrap resources
        INFO Time elapsed: 1s
        ```

        If the command exits without a `FATAL` warning, your {{ product_title }} control plane has initialized.

        :::note

        After the control plane initializes, it sets up the compute nodes and installs additional services in the form of Operators.
        
        :::