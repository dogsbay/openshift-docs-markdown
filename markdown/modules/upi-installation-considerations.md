{%- set _mod_docs_content_type = "CONCEPT" %}
# User-provisioned infrastructure installation considerations {id="upi-installation-considerations_{{ context }}"}

The default installation method uses installer-provisioned infrastructure. With installer-provisioned infrastructure clusters, {{ product_title }} manages all aspects of the cluster, including the operating system itself. If possible, use this feature to avoid having to provision and maintain the cluster infrastructure. {._abstract}

You can alternatively install {{ product_title }} {{ product_version }} on infrastructure that you provide. If you use this installation method, follow user-provisioned infrastructure installation documentation carefully. Additionally, review the following considerations before the installation:

*   Check the [{{ op_system_base_full }} Ecosystem](https://access.redhat.com/ecosystem/search/#/ecosystem/Red%20Hat%20Enterprise%20Linux) to determine the level of {{ op_system_first }} support provided for your chosen server hardware or virtualization technology.
*   Many virtualization and cloud environments require agents to be installed on guest operating systems. Ensure that these agents are installed as a containerized workload deployed through a daemon set.
*   Install cloud provider integration if you want to enable features such as dynamic storage, on-demand service routing, node hostname to Kubernetes hostname resolution, and cluster autoscaling.

    :::note

    It is not possible to enable cloud provider integration in {{ product_title }} environments that mix resources from different cloud providers, or that span multiple physical or virtual platforms. The node life cycle controller will not allow nodes that are external to the existing provider to be added to a cluster, and it is not possible to specify more than one cloud provider integration.
    
    :::

*   A provider-specific Machine API implementation is required if you want to use machine sets or autoscaling to automatically provision {{ product_title }} cluster nodes.
*   Check whether your chosen cloud provider offers a method to inject Ignition configuration files into hosts as part of their initial deployment. If they do not, you will need to host Ignition configuration files by using an HTTP server. The steps taken to troubleshoot Ignition configuration file issues will differ depending on which of these two methods is deployed.
*   Storage needs to be manually provisioned if you want to leverage optional framework components such as the embedded container registry, Elasticsearch, or Prometheus. Default storage classes are not defined in user-provisioned infrastructure installations unless explicitly configured.
*   A load balancer is required to distribute API requests across all control plane nodes in highly available {{ product_title }} environments. You can use any TCP-based load balancing solution that meets {{ product_title }} DNS routing and port requirements.