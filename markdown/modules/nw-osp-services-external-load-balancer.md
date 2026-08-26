{%- set _mod_docs_content_type = "CONCEPT" %}
# Services for a user-managed load balancer {id="nw-osp-services-external-load-balancer_{{ context }}"}

You can configure an {{ product_title }} cluster
{%- if context == "load-balancing-openstack" %}
on {{ rh_openstack_first }}
{%- endif %}
to use a user-managed load balancer in place of the default load balancer. {._abstract}


:::important

Configuring a user-managed load balancer depends on your vendor’s load balancer.

The information and examples in this section are for guideline purposes only. Consult the vendor documentation for more specific information about the vendor’s load balancer.

:::


Red Hat supports the following services for a user-managed load balancer:

*   Ingress Controller
*   OpenShift API
*   OpenShift MachineConfig API

You can choose whether you want to configure one or all of these services for a user-managed load balancer. Configuring only the Ingress Controller service is a common configuration option. To better understand each service, view the following diagrams:

**Figure 1. Example network workflow that shows an Ingress Controller operating in an {{ product_title }} environment**

![An image that shows an example network workflow of an Ingress Controller operating in an {{ product_title }} environment.](/images/external-load-balancer-default.png)

**Figure 2. Example network workflow that shows an OpenShift API operating in an {{ product_title }} environment**

![An image that shows an example network workflow of an OpenShift API operating in an {{ product_title }} environment.](/images/external-load-balancer-openshift-api.png)

**Figure 3. Example network workflow that shows an OpenShift `MachineConfig` API operating in an {{ product_title }} environment**

![An image that shows an example network workflow of an OpenShift `MachineConfig` API operating in an {{ product_title }} environment.](/images/external-load-balancer-machine-config-api.png)

The following configuration options are supported for user-managed load balancers:

*   Use a node selector to map the Ingress Controller to a specific set of nodes. You must assign a static IP address to each node in this set, or configure each node to receive the same IP address from the Dynamic Host Configuration Protocol (DHCP). Infrastructure nodes commonly receive this type of configuration.
*   Target all IP addresses on a subnet. This configuration can reduce the effort required to maintain the load balancer, because you can create and destroy nodes within those networks without reconfiguring the load balancer targets. If you deploy your ingress pods by using a machine set on a smaller network, such as a `/27` or `/28`, you can simplify your load balancer targets.

    :::tip

    You can list all IP addresses that exist in a network by checking the machine config pool’s resources.
    
    :::


Before you configure a user-managed load balancer for your {{ product_title }} cluster, consider the following information:

*   For a front-end IP address, you can use the same IP address for the front-end IP address, the Ingress Controller load balancer, and API load balancer. Check the vendor’s documentation for this capability.
*   For a back-end IP address, ensure that an IP address for an {{ product_title }} control plane node does not change during the lifetime of the user-managed load balancer. You can achieve this by completing one of the following actions:
    *   Assign a static IP address to each control plane node.
    *   Configure each node to receive the same IP address from the DHCP every time the node requests a DHCP lease. Depending on the vendor, the DHCP lease might be in the form of an IP reservation or a static DHCP assignment.
*   Manually define each node that runs the Ingress Controller in the user-managed load balancer for the Ingress Controller back-end service. For example, if the Ingress Controller moves to an undefined node, a connection outage can occur.