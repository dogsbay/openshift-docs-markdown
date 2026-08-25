{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using an additional network as default {id="hcp-virt-addl-network_{{ context }}"}

You can add your additional network as a default network for the nodes by disabling the default pod network. {._abstract}

**Procedure**

*   To add an additional network as default to your nodes, run the following command:
    ```terminal
    $ hcp create cluster kubevirt \
      --name <hosted_cluster_name> \
      --node-pool-replicas <worker_node_count> \
      --pull-secret <path_to_pull_secret> \
      --memory <memory> \
      --cores <cpu> \
      --attach-default-network false \
      --additional-network name:<namespace>/<network_name>
    ```
    *   `--name` specifies the name of your hosted cluster, for example, `my-hosted-cluster`.
    *   `--node-pool-replicas` specifies your worker node count, for example, `2`.
    *   `--pull-secret` specifies the path to your pull secret, for example, `/user/name/pullsecret`.
    *   `--memory` specifies the memory value, for example, `8Gi`.
    *   `--cores` specifies the CPU value, for example, `2`.
    *   `--attach-default-network false` disables the default pod network.
    *   `--additional-network` specifies the additional network that you want to add to your nodes, for example, `name:my-namespace/my-network`.