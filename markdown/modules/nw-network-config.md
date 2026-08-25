{%- set _mod_docs_content_type = "REFERENCE" %}
# Network configuration phases {id="nw-network-config_{{ context }}"}

There are two phases prior to {{ product_title }} installation where you can customize the network configuration. Customize settings in the `install-config.yaml` file and in the Cluster Network Operator manifest across two configuration phases. {._abstract}


Phase 1
:   You can customize the following network-related fields in the `install-config.yaml` file before you create the manifest files:
    *   `networking.networkType`
    *   `networking.clusterNetwork`
    *   `networking.serviceNetwork`
    *   `networking.machineNetwork`
    *   `nodeNetworking`

    For more information, see "Installation configuration parameters".

    :::note


    Set the `networking.machineNetwork` to match the Classless Inter-Domain Routing (CIDR) where the preferred subnet is located.
    
    :::


    :::important


    The CIDR range `172.17.0.0/16` is reserved by `libVirt`. You cannot use any other CIDR range that overlaps with the `172.17.0.0/16` CIDR range for networks in your cluster.
    
    :::


Phase 2
:   After creating the manifest files by running `openshift-install create manifests`, you can define a customized Cluster Network Operator manifest with only the fields you want to modify. You can use the manifest to specify an advanced network configuration.

During phase 2, you cannot override the values that you specified in phase 1 in the `install-config.yaml` file. However, you can customize the network plugin during phase 2.