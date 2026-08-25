{%- set _mod_docs_content_type = "CONCEPT" %}
# An overview of {{ product_title }} {id="osd-intro_{{ context }}"}

{{ product_title }} is professionally managed by Red Hat and hosted on {{ AWS }} or {{ GCP }}. Each {{ product_title }} cluster comes with a fully managed [control plane](https://access.redhat.com/documentation/en-us/openshift_container_platform/{{ ocp_version }}/html/architecture/control-plane) (Control and Infrastructure nodes), application nodes, installation and management by Red Hat Site Reliability Engineers (SRE), premium Red Hat Support, and cluster services such as logging, metrics, monitoring, notifications portal, and a cluster portal. {._abstract}

{{ product_title }} provides enterprise-ready enhancements to Kubernetes, including the following enhancements:

*   {{ product_title }} clusters are deployed on AWS or {{ gcp_short }} environments and can be used as part of a hybrid approach for application management.
*   Integrated Red Hat technology. Major components in {{ product_title }} come from Red Hat Enterprise Linux and related Red Hat technologies. {{ product_title }} benefits from the intense testing and certification initiatives for Red Hat’s enterprise quality software.
*   Open source development model. Development is completed in the open, and the source code is available from public software repositories. This open collaboration fosters rapid innovation and development.

To learn about options for assets you can create when you build and deploy containerized Kubernetes applications in {{ OCP }}, see [Understanding {{ OCP }} development](https://docs.openshift.com/container-platform/{{ ocp_version }}/architecture/understanding-development.html).

## Custom operating system {id="rhcos_{{ context }}"}
{{ product_title }} uses Red Hat Enterprise Linux CoreOS (RHCOS), a container-oriented operating system that combines some of the best features and functions of the CoreOS and Red Hat Atomic Host operating systems. RHCOS is specifically designed for running containerized applications from {{ product_title }} and works with new tools to provide fast installation, Operator-based management, and simplified upgrades.

RHCOS includes:

*   Ignition, which {{ product_title }} uses as a firstboot system configuration for initially bringing up and configuring machines.
*   CRI-O, a Kubernetes native container runtime implementation that integrates closely with the operating system to deliver an efficient and optimized Kubernetes experience. CRI-O provides facilities for running, stopping, and restarting containers.
*   Kubelet, the primary node agent for Kubernetes that is responsible for launching and monitoring containers.

## Other key features {id="osd-key-features_{{ context }}"}
Operators are both the fundamental unit of the {{ product_title }} code base and a convenient way to deploy applications and software components for your applications to use. In {{ product_title }}, Operators serve as the platform foundation and remove the need for manual upgrades of operating systems and control plane applications. {{ product_title }} Operators such as the Cluster Version Operator and Machine Config Operator allow simplified, cluster-wide management of those critical components.

Operator Lifecycle Manager (OLM) and the software catalog provide facilities for storing and distributing Operators to people developing and deploying applications.

The {{ quay }} Container Registry is a Quay.io container registry that serves most of the container images and Operators to {{ product_title }} clusters. Quay.io is a public registry version of {{ quay }} that stores millions of images and tags.

Other enhancements to Kubernetes in {{ product_title }} include improvements in software defined networking (SDN), authentication, log aggregation, monitoring, and routing. {{ product_title }} also offers a comprehensive web console and the custom OpenShift CLI (`oc`) interface.

## Internet and Telemetry access for {{ product_title }} {id="telemetry_{{ context }}"}

In {{ product_title }}, you require access to the internet to install and upgrade your cluster.

Through the Telemetry service, information is sent to Red Hat from {{ product_title }} clusters to enable subscription management automation, monitor the health of clusters, assist with support, and improve customer experience.

The Telemetry service runs automatically and your cluster is registered to {{ cluster_manager_first }}. In {{ product_title }}, remote health reporting is always enabled and you cannot opt out. The Red Hat Site Reliability Engineering (SRE) team requires the information to provide effective support for your {{ product_title }} cluster.