{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring etcd storage {id="hcp-virt-etcd-storage_{{ context }}"}

At cluster creation time, you can configure the storage class that is used to host etcd data by using the `--etcd-storage-class` argument. {._abstract}

**Procedure**

*   To configure a storage class for etcd, run a command similar to the following example:
    ```terminal
    $ hcp create cluster kubevirt \
      --name my-hosted-cluster \
      --node-pool-replicas 2 \
      --pull-secret /user/name/pullsecret \
      --memory 8Gi \
      --cores 2 \
      --etcd-storage-class=lvm-storageclass
    ```
    *   `--name` specifies the name of your hosted cluster.
    *   `--node-pool-replicas` specifies the worker count.
    *   `--pull-secret` specifies the path to your pull secret.
    *   `--memory` specifies a value for memory.
    *   `--cores` specifies a value for CPU.
    *   `--etcd-storage-class` specifies the etcd storage class name. If you do not provide an `--etcd-storage-class` argument, the default storage class is used.