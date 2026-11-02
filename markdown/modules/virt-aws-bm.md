{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ VirtProductName }} on AWS bare metal {id="virt-aws-bm_{{ context }}"}

You can run {{ VirtProductName }} on an Amazon Web Services (AWS) bare metal {{ product_title }} cluster. {._abstract}


:::note

{{ VirtProductName }} is also supported on Red&#160;Hat OpenShift Service on AWS (ROSA) Classic clusters, which have the same configuration requirements as AWS bare-metal clusters.

:::


Before you set up your cluster, review the following summary of supported features and limitations:


Installing
:   *   You can install the cluster by using installer-provisioned infrastructure, ensuring that you specify bare-metal instance types for the worker nodes. For example, you can use the `c5n.metal` type value for a machine based on x86_64 architecture.
    You specify bare-metal instance types by editing the `install-config.yaml` file.

    For more information, see the {{ product_title }} documentation about installing on AWS.


Accessing virtual machines (VMs)
:   *   There is no change to how you access VMs by using the `virtctl` CLI tool or the {{ product_title }} web console.
    *   You can expose VMs by using a `NodePort` or `LoadBalancer` service.

    :::note


    The load balancer approach is preferable because {{ product_title }} automatically creates the load balancer in AWS and manages its lifecycle. A security group is also created for the load balancer, and you can use annotations to attach existing security groups. When you remove the service, {{ product_title }} removes the load balancer and its associated resources.
    
    :::



Networking
:   *   You cannot use Single Root I/O Virtualization (SR-IOV) or bridge Container Network Interface (CNI) networks, including virtual LAN (VLAN). If your application requires a flat layer 2 network or control over the IP pool, consider using OVN-Kubernetes secondary overlay networks.
    *   If your application requires a flat layer 2 network that does not need egress traffic, consider using OVN-Kubernetes secondary overlay networks with a `Layer2` topology.


Storage
:   *   You can use any storage solution that is certified by the storage vendor to work with the underlying platform.

    :::important


    AWS bare metal, Red&#160;Hat OpenShift Service on AWS, and Red&#160;Hat OpenShift Service on AWS classic architecture clusters might have different supported storage solutions. Ensure that you confirm support with your storage vendor.
    
    :::



Hosted control planes (HCPs)
:   *   You can run {{ VirtProductName }} on HCP clusters that use AWS bare-metal nodes. However, using {{ VirtProductName }} VMs as HCP nodes is not currently supported on AWS.