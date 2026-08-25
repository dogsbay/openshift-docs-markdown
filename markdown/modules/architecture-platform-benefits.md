{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ product_title }} overview {id="architecture-platform-benefits_{{ context }}"}

{{ product_title }} provides enterprise-ready enhancements to Kubernetes. 
You can use the powerful and flexible platform management tools of {{ product_title }} to better manage your applications. {._abstract}

{% if openshift_origin or openshift_enterprise or openshift_webscale %}
*   Hybrid cloud deployments. You can deploy {{ product_title }} clusters to a variety of public cloud platforms or in your data center.
{%- endif %}
* Integrated Red Hat technology. Major components in {{ product_title }} come from {{ op_system_base_full }} and related Red Hat technologies. {{ product_title }} benefits from the intense testing and certification initiatives for Red Hat’s enterprise quality software.
* Open source development model. Development is completed in the open, and the source code is available from public software repositories. This open collaboration fosters rapid innovation and development.

Although Kubernetes excels at managing your applications, it does not specify or manage platform-level requirements or deployment processes. Powerful and flexible platform management tools and processes are important benefits that {{ product_title }} {{ product_version }} offers. 
The following sections describe some unique features and benefits of {{ product_title }}.


Custom operating system
{%- if not (openshift_dedicated or openshift_rosa) %}
:   {{ product_title }} uses {{ op_system_first }}, a container-oriented operating system that is specifically designed for running containerized applications from {{ product_title }} and works with new tools to provide fast installation, Operator-based management, and simplified upgrades.
{% endif %}
{%- if openshift_dedicated or openshift_rosa %}
:   {{ product_title }} uses {{ op_system_first }} as the operating system for all control plane and worker nodes.
{% endif %}

    {{ op_system }} includes:
    *   Ignition, which {{ product_title }} uses as a firstboot system configuration for initially bringing up and configuring machines.
    *   CRI-O, a Kubernetes native container runtime implementation that integrates closely with the operating system to deliver an efficient and optimized Kubernetes experience. CRI-O provides facilities for running, stopping, and restarting containers. It fully replaces the Docker Container Engine, which was used in {{ product_title }} 3.
    *   Kubelet, the primary node agent for Kubernetes that is responsible for
    launching and monitoring containers.
{%- if not (openshift_dedicated or openshift_rosa) %}

    In {{ product_title }} {{ product_version }}, you must use {{ op_system }} for all control
    plane machines, but you can use Red Hat Enterprise Linux (RHEL) as the operating
    system for compute machines, which are also known as worker machines. If you choose to use RHEL workers, you
    must perform more system maintenance than if you use {{ op_system }} for all of the
    cluster machines.
{%- endif %}

{% if not (openshift_dedicated or openshift_rosa) %}

Simplified installation and update process
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}

Simplified update process
{%- endif %}
{%- if not (openshift_dedicated or openshift_rosa) %}
:   With {{ product_title }} {{ product_version }}, if you have an account with the right
    permissions, you can deploy a production cluster in supported clouds by running
    a single command and providing a few values. You can also customize your cloud
    installation or install your cluster in your data center if you use a supported
    platform.

For clusters that use {{ op_system }} for all machines, updating, or
upgrading, {{ product_title }} is a highly-automated process. Because
{{ product_title }} completely controls the systems and services that run on each
machine, including the operating system itself, from a central control plane,
upgrades are designed to become automatic events. If your cluster contains
RHEL worker machines, the control plane benefits from the streamlined update
process, but you must perform more tasks to upgrade the RHEL machines.
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
Updating, or upgrading, {{ product_title }} is a highly-automated process. 
Because {{ product_title }} completely controls the systems and services that run on each machine, including the operating system itself, from a central control plane, upgrades are designed to become automatic events.
{% endif %}


Other key features
:   Operators are both the fundamental unit of the {{ product_title }} {{ product_version }}
    code base and a convenient way to deploy applications and software components
    for your applications to use. In {{ product_title }}, Operators serve as the platform foundation and remove the need for manual upgrades of operating systems and control plane applications. {{ product_title }} Operators such as the
    Cluster Version Operator and Machine Config Operator allow simplified,
    cluster-wide management of those critical components.

    Operator Lifecycle Manager (OLM) and the software catalog provide facilities for
    storing and distributing Operators to people developing and deploying applications.

    The {{ quay }} Container Registry is a Quay.io container registry that serves
    most of the container images and Operators to {{ product_title }} clusters.
    Quay.io is a public registry version of {{ quay }} that stores millions of images
    and tags.

    Other enhancements to Kubernetes in {{ product_title }} include improvements in
    software defined networking (SDN), authentication, log aggregation, monitoring,
    and routing. {{ product_title }} also offers a comprehensive web console and the
    custom {{ oc_first }} interface.

{% if not (openshift_dedicated or openshift_rosa) %}

{{ product_title }} lifecycle
:   The following figure illustrates the basic {{ product_title }} lifecycle:
    *   Creating an {{ product_title }} cluster
    *   Managing the cluster
    *   Developing and deploying applications
    *   Scaling up applications

    **Figure 1. High-level {{ product_title }} overview**

    ![High-level {{ product_title }} flow](/_assets/images/ocp_arch_lifecycle.png)
{% endif %}