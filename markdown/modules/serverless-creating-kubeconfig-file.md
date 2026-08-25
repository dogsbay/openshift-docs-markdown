# Creating a `kubeconfig` file {id="create-kubeconfig-file_{{ contect }}"}

Use `kubeconfig` files to organize information about clusters, users, namespaces, and authentication mechanisms. The CLI tool uses `kubeconfig` files to communicate with the API server of a cluster.

**Procedure**

*   Create a basic `kubeconfig` file from client certificates. Use the following command:

```
$ oc adm create-kubeconfig \
  --client-certificate=/path/to/client.crt \
  --client-key=/path/to/client.key \
  --certificate-authority=/path/to/ca.crt
```