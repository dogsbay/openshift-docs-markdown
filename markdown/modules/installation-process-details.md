{%- set _mod_docs_content_type = "CONCEPT" %}
# Installation process details {id="installation-process-details_{{ context }}"}

When a cluster is provisioned, each machine in the cluster requires information about the cluster. 
{{ product_title }} uses a temporary bootstrap machine during initial configuration to provide the required information to the permanent control plane.  {._abstract}

The temporary bootstrap machine boots by using an Ignition config file that describes how to create the cluster. The bootstrap machine creates the control plane machines that make up the control plane. The control plane machines then create the compute machines, which are also known as worker machines. The following figure illustrates this process:

{% if not openshift_origin %}

**Figure 1. Creating the bootstrap, control plane, and compute machines**

![Creating bootstrap](/_assets/images/create-nodes.png)
{% endif %}
{% if openshift_origin %}

**Figure 2. Creating the bootstrap, control plane, and compute machines**

![Creating bootstrap](/_assets/images/150_OpenShift_VMware_on_AWS_1021_installer_FCOS.png)
{% endif %}


:::important

While planning to deploy your cluster, review the recommended practices for performance and scalability, particularly the requirements for input/output (I/O) latency for etcd storage and the requirements for the recommended control plane node sizing. For more information, see “Recommended etcd practices” and “Control plane node sizing”.

:::


After the cluster machines initialize, the bootstrap machine is destroyed. All clusters use the bootstrap process to initialize the cluster, but if you provision the infrastructure for your cluster, you must complete many of the steps manually.


:::important

*   The Ignition config files that the installation program generates contain certificates that expire after 24 hours, which are then renewed at that time. 
If the cluster is shut down before renewing the certificates and the cluster is later restarted after the 24 hours have elapsed, the cluster automatically recovers the expired certificates. 
The exception is that you must manually approve the pending `node-bootstrapper` certificate signing requests (CSRs) to recover kubelet certificates. 
See the documentation for _Recovering from expired control plane certificates_ for more information.
*   Consider using Ignition config files within 12 hours after they are generated, because the 24-hour certificate rotates from 16 to 22 hours after the cluster is installed. By using the Ignition config files within 12 hours, you can avoid installation failure if the certificate update runs during installation.

:::


Bootstrapping a cluster involves the following steps:

1.  The bootstrap machine boots and starts hosting the remote resources required for the control plane machines to boot. If you provision the infrastructure, this step requires manual intervention.
1.  The bootstrap machine starts a single-node etcd cluster and a temporary Kubernetes control plane.
1.  The control plane machines fetch the remote resources from the bootstrap machine and finish booting. If you provision the infrastructure, this step requires manual intervention.
1.  The temporary control plane schedules the production control plane to the production control plane machines.
1.  The Cluster Version Operator (CVO) comes online and installs the etcd Operator. The etcd Operator scales up etcd on all control plane nodes.
1.  The temporary control plane shuts down and passes control to the production control plane.
1.  The bootstrap machine injects {{ product_title }} components into the production control plane.
1.  The installation program shuts down the bootstrap machine. If you provision the infrastructure, this step requires manual intervention.
1.  The control plane sets up the compute nodes.
1.  The control plane installs additional services in the form of a set of Operators.

The result of this bootstrapping process is a running {{ product_title }} cluster. The cluster then downloads and configures remaining components needed for the day-to-day operations, including the creation of compute machines in supported environments.