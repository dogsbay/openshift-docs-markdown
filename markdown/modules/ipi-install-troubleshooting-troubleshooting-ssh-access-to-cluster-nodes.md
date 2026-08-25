{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting SSH access to cluster nodes {id="troubleshooting-ssh-access-to-cluster-nodes_{{ context }}"}

For added security, you cannot SSH into the cluster from outside the cluster by default. However, you can access control plane and worker nodes from the provisioner node. If you cannot SSH into the cluster nodes from the provisioner node, the nodes might be waiting on the bootstrap VM.  {._abstract}

The control plane nodes retrieve their boot configuration from the bootstrap VM, and they cannot boot successfully if they do not retrieve the boot configuration.

**Procedure**

1.  If you have physical access to the nodes, check their console output to verify if they have successfully booted. If the nodes are still retrieving their boot configuration, there might be problems with the bootstrap VM .
1.  Ensure you have configured the `sshKey: '<ssh_pub_key>'` setting in the `install-config.yaml` file, where `<ssh_pub_key>` is the public key of the `kni` user on the provisioner node.