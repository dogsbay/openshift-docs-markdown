{%- set _mod_docs_content_type = "CONCEPT" %}
# How to configure {{ op_system }} {id="rhcos-configured_{{ context }}"}

{{ op_system }} is designed to deploy on an {{ product_title }} cluster with a minimal amount of configuration input. {{ op_system }} systems are fully managed from the {{ product_title }} cluster. Directly changing an {{ op_system }} machine is discouraged. {._abstract}

The basic {{ op_system }} configuration consists of the following components:

*   Starting with a provisioned infrastructure, such as on {{ aws_short }}, or provisioning the infrastructure yourself.
*   Supplying a few pieces of information, such as credentials and cluster name, in an `install-config.yaml` file when running `openshift-install`.

Limited direct access to {{ op_system }} machines cluster is available for debugging purposes. However, do not directly configure {{ op_system }} systems. Instead, if you need to add or change features on your {{ product_title }} nodes, consider making changes in the following ways:

*   ***Kubernetes workload objects, such as DaemonSet and Deployment***: If you need to add services or other user-level features to your cluster, consider adding them as Kubernetes workload objects. Keep features outside node configurations. This approach reduces the risk of breaking the cluster during upgrades.
*   ***Day-2 customizations***: If possible, open a cluster without making any customizations to cluster nodes and make necessary node changes after the cluster is up. Those changes are easier to track later and less likely to break updates. Creating machine configs or modifying Operator custom resources are ways of making these customizations.
*   ***Day-1 customizations***: Some customizations must be implemented when the cluster first boots. Ways exist for modifying your cluster so changes are implemented on first boot. Implement day-1 customizations through Ignition configs during `openshift-install`. Alternatively, add boot options during user-provisioned ISO installs.

Here are examples of customizations you could do on day 1:

*   ***Kernel arguments***: If particular kernel features or tuning is needed on nodes when the cluster first boots.
*   ***Disk encryption***: If your security needs require that the root file system on the nodes is encrypted, such as with FIPS support.
*   ***Kernel modules***: If a particular hardware device, such as a network card or video card, does not have a usable module available by default in the Linux kernel.
*   ***Chronyd***: If you want to provide specific clock settings to your nodes, such as the location of time servers.

To accomplish these tasks, you can augment the `openshift-install` process to include additional objects such as `MachineConfig` objects. Those procedures that result in creating machine configs can be passed to the Machine Config Operator after the cluster is up.


:::note

The Ignition config files that the installation program generates contain certificates that expire after 24 hours, which are then renewed at that time. If the cluster is shut down before renewing the certificates and the cluster is later restarted after the 24 hours have elapsed, the cluster automatically recovers the expired certificates. The exception is that you must manually approve the pending `node-bootstrapper` certificate signing requests (CSRs) to recover kubelet certificates. See the documentation for _Recovering from expired control plane certificates_ for more information.

Red Hat recommends that you use Ignition config files within 12 hours after they are generated because the 24-hour certificate rotates from 16 to 22 hours after the cluster is installed. By using the Ignition config files within 12 hours, you can avoid installation failure if the certificate update runs during installation.

:::