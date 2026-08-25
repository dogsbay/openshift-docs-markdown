{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generate ingress network flow data using the `commatrix` plugin {id="network-commatrix-plugin-generate_{{ context }}"}

Use the `commatrix` plugin for the `oc` command to generate ingress network flow data from your cluster and identify any differences between open ports on the host and expected ingress flows for your environment. {._abstract}

The plugin generates ingress flows to {{ product_title }} services for the following environments:

*   {{ product_title }} on bare metal
*   {{ sno_caps }} with other platforms
*   {{ product_title }} on {{ aws_first }}
*   {{ sno_caps }} on {{ aws_short }}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You logged in as a user with `cluster-admin` privileges.
*   You installed Podman.
*   You installed the `commatrix` plugin.

**Procedure**

1.  Generate network flow data by running the following command:
    ```bash
    $ oc commatrix generate
    ```

    :::note

    By default, the plugin generates the network flow data in CSV format in a `communication-matrix` directory in your current working directory.
    
    :::


**Verification**

*   View the generated network flow data in the `communication-matrix` directory by running the following command:
    ```bash
    $ cat communication-matrix/communication-matrix.csv
    ```
    ```bash
    Direction,Protocol,Port,Namespace,Service,Pod,Container,Node Role,Optional
    Ingress,TCP,4194,kube-system,kubelet,konnectivity-agent,,,false
    Ingress,TCP,9100,openshift-monitoring,node-exporter,node-exporter,kube-rbac-proxy,,false
    Ingress,TCP,9103,openshift-ovn-kubernetes,ovn-kubernetes-node,ovnkube-node,kube-rbac-proxy-node,,false

    ...
    ```