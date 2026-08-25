{%- set _mod_docs_content_type = "REFERENCE" %}
# Glossary of common terms for {{ product_title }} installing {id="install-openshift-common-terms_{{ context }}"}

The glossary defines common terms that relate to the installation content. Read the following list of terms to better understand the installation process. {._abstract}


{{ ai_full }}
:   An installer hosted at [console.redhat.com](https://console.redhat.com/openshift/assisted-installer/clusters/~new) that provides a web-based user interface or a RESTful API for creating a cluster configuration. The [{{ ai_full }}](https://access.redhat.com/documentation/en-us/assisted_installer_for_openshift_container_platform) generates a discovery image. Cluster machines boot with the discovery image, which installs {{ op_system }} and an agent. Together, the {{ ai_full }} and agent provide preinstallation validation and installation for the cluster.


Agent-based Installer
:   An installer similar to the {{ ai_full }}, but you must download the [Agent-based Installer](https://console.redhat.com/openshift/install/metal/agent-based) first. The Agent-based Installer is ideal for disconnected environments.

Bootstrap node
:   A temporary machine that runs a minimal Kubernetes configuration required to deploy the {{ product_title }} control plane.


Control plane
:   A container orchestration layer that exposes the API and interfaces to define, deploy, and manage the lifecycle of containers. Also known as control plane machines.


Compute node
:   Nodes that are responsible for executing workloads for cluster users. Also known as worker nodes.


Disconnected installation
:   In some situations, parts of a data center might not have access to the internet, even through proxy servers. You can still install the {{ product_title }} in these environments, but you must download the required software and images and make them available to the disconnected environment.


The {{ product_title }} installation program
:   A program that provisions the infrastructure and deploys a cluster.


Installer-provisioned infrastructure
:   The installation program deploys and configures the infrastructure that the cluster runs on.


Ignition config files
:   A file that the Ignition tool uses to configure {{ op_system_first }} during operating system initialization. The installation program generates different Ignition configuration files to initialize bootstrap, control plane, and worker nodes.


Kubernetes manifests
:   Specifications of a Kubernetes API object in a JSON or YAML format. A configuration file can include deployments, config maps, secrets, daemonsets, and so on.


kubelet
:   A primary node agent that runs on each node in the cluster to ensure that containers are running in a pod.


Load balancers
:   A load balancer serves as the single point of contact for clients. Load balancers for the API distribute incoming traffic across control plane nodes.


Machine Config Operator
:   An Operator that manages and applies configurations and updates of the base operating system and container runtime, including everything between the kernel and kubelet, for the nodes in the cluster.


Operators
:   The preferred method of packaging, deploying, and managing a Kubernetes application in an {{ product_title }} cluster. An operator takes human operational knowledge and encodes it into software that is easily packaged and shared with customers.


User-provisioned infrastructure
:   You can install {{ product_title }} on infrastructure that you provide. You can use the installation program to generate the assets required to provision the cluster infrastructure, create the cluster infrastructure, and then deploy the cluster to the infrastructure that you provided.