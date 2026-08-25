{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create an agent cluster {id="hcp-ibm-power-heterogeneous-nodepools-create-agent-cluster_{{ context }}"}

An agent-based approach manages and provisions an agent cluster. An agent cluster can use heterogeneous node pools, allowing the use of different types of compute nodes within the same cluster. {._abstract}

**Prerequisites**

*   You used a multi-architecture release image to enable support for heterogeneous node pools when creating a hosted cluster. Find the latest multi-architecture images on the "Multi-arch release images" page.

**Procedure**

1.  Create an environment variable for the cluster namespace by running the following command:
    ```terminal
    $ export CLUSTERS_NAMESPACE=<hosted_cluster_namespace>
    ```
1.  Create an environment variable for the machine classless inter-domain routing (CIDR) notation by running the following command:
    ```terminal
    $ export MACHINE_CIDR=192.168.122.0/24
    ```
1.  Create the hosted control namespace by running the following command:
    ```terminal
    $ oc create ns <hosted_control_plane_namespace>
    ```
1.  Create the cluster by running the following command:
    ```terminal
    $ hcp create cluster agent \
        --name=<hosted_cluster_name> \
        --pull-secret=<pull_secret_file> \
        --agent-namespace=<hosted_control_plane_namespace> \
        --base-domain=<base_domain> \
        --api-server-address=api.<hosted_cluster_name>.<basedomain> \
        --release-image=quay.io/openshift-release-dev/ocp-release:<ocp_release>
    ```

    where:

    `<hosted_cluster_name>`
    :   Specifies the hosted cluster name.

    `<pull_secret_file>`
    :   Specifies the pull secret file path.

    `<hosted_control_plane_namespace>`
    :   Specifies the namespace for the hosted control plane.

    `<base_domain>`
    :   Specifies the base domain for the hosted cluster.

    `<ocp_release>`
    :   Specifies the current {{ product_title }} release version.