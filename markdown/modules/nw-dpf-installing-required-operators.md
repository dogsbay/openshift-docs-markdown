{%- set _mod_docs_content_type = "REFERENCE" %}
# Required Operators {id="nw-dpf-installing-required-operators_{{ context }}"}

Before you install the DPF Operator, you must install the {{ cert_manager_operator }}, MetalLB Operator, {{ gitops_title }}, and NVIDIA Maintenance Operator. {._abstract}

The multicluster engine for Kubernetes Operator and the Node Feature Discovery Operator can be installed during management cluster creation by using the Assisted Installer. After installation, configure those Operators, MetalLB, {{ gitops_shortname }}, and the Cluster Network Operator as described in "Configure the required Operators".