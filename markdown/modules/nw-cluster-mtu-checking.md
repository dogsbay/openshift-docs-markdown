{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking the current cluster MTU value {id="nw-cluster-mtu-checking_{{ context }}"}

To ensure network stability and performance in a hybrid environment where part of your cluster is in the cloud and part is an on-premise environment, you can obtain the current maximum transmission unit (MTU) for the cluster network. {._abstract}

**Procedure**

*   To obtain the current MTU for the cluster network, enter the following command:
    ```terminal
    $ oc describe network.config cluster
    ```
    ```text title="Example output"
    ...
    Status:
      Cluster Network:
        Cidr:               10.217.0.0/22
        Host Prefix:        23
      Cluster Network MTU:  1400
      Network Type:         OVNKubernetes
      Service Network:
        10.217.4.0/23
    ...
    ```