{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of {{ hcp }} on {{ azure_short }} {id="hcp-azure-overview_{{ context }}"}

You can deploy and manage hosted clusters on an OpenShift management cluster that runs in {{ azure_first }}. With a self-managed deployment model, you manage your own OpenShift cluster. {._abstract}

## Architecture of {{ hcp }} on {{ azure_short }} {id="hcp-azure-arch_{{ context }}"}

At a high level, the architecture of {{ hcp }} on {{ azure_short }} consists of three layers:


Management cluster
:   An {{ azure_short }} OpenShift cluster that hosts the HyperShift Operator and the control planes for your hosted clusters.

Control plane
:   Kubernetes control-plane components that run as pods on the management cluster.

Data plane
:   Compute nodes that run as {{ azure_short }} virtual machines (VMs) in your {{ azure_short }} subscription.

The architecture uses {{ azure_short }} Workload Identity for secure, credential-free authentication between {{ product_title }} components and {{ azure_short }} services. As a result, you do not need to manage long-lived service principal credentials, and you get better security through federated identity credentials.

## Deployment workflow for {{ hcp }} on {{ azure_short }} {id="hcp-azure-deployment-workflow_{{ context }}"}

Deploying self-managed {{ hcp }} on {{ azure_short }} involves a three-phase process in the following order:


Phase 1: Set up {{ azure_short }} Workload Identity
:   This phase establishes secure authentication infrastructure so that {{ product_title }} components can access {{ azure_short }} services. During this phase, the security infrastructure that your hosted clusters require is created:
    *   Managed identities for each {{ product_title }} component, including the image registry, ingress, CSI drivers, cloud provider, network operator, and so on
    *   OIDC issuer in {{ azure_short }} Blob Storage for service account token validation
    *   Federated credentials that establish trust relationships between {{ azure_short }} Entra ID and {{ product_title }} service accounts

Phase 2: Set up the management cluster
:   In this phase, you prepare your {{ product_title }} management cluster on {{ azure_short }} to host and manage hosted clusters. During this phase, you install the following components:
    *   {{ azure_short }} DNS zones, for private and public-private topologies
    *   External DNS, for private and public-private topologies
    *   HyperShift Operator

Phase 3: Create hosted clusters
:   In this phase, you create and configure hosted clusters. This phase involves the following steps:
    1.  Setting up infrastructure
    1.  Creating a hosted cluster
    1.  Integrating workload identity
    1.  Configuring private endpoint access (optional)