{%- set _mod_docs_content_type = "CONCEPT" %}
# DPF deployment flow overview {id="nw-dpf-deployment-flow-overview_{{ context }}"}

The end-to-end deployment process for the NVIDIA DPF Operator follows a series of high-level steps, from management cluster setup through workload verification. {._abstract}

The deployment flow consists of the following steps:

1.  **Management cluster setup:** Install and configure a standard {{ product_title }} cluster on x86 servers with control-plane nodes only.
1.  **Management cluster configuration:** Configure nodes and cluster-level settings, then install and configure the required Operators on the management cluster.
1.  **DPF installation:** Deploy the DPF Operator, controllers, DPF resources, and DPU service definitions on the management cluster.

    :::important

    You must install the DPF Operator before the DPF HCP Provisioner Operator because that Operator requires DPF custom resource definitions (CRDs) such as `DPUCluster`, `DPUFlavor`, `DPUDeployment`, and `DPFOperatorConfig`.
    
    :::

1.  **Hosted cluster creation:** The DPF HCP Provisioner Operator automates the creation of a hosted DPU cluster by using hosted control planes. The Operator references the `DPUDeployment` resource during ignition generation.
1.  **Worker node scale-out and DPU provisioning:** When worker nodes with DPUs are added to the cluster, the DPF Operator flashes the DPUs with a Red Hat Enterprise Linux CoreOS (RHCOS) image and configures them to join the hosted cluster as worker nodes.
1.  **Worker node integration:** Approve DPU worker node certificate signing requests (CSRs) and configure security context constraint (SCC) bindings on the hosted cluster.
1.  **Service deployment:** After the DPU hosted cluster is operational, data plane DPU services and chains are deployed by DPF.
1.  **Verification:** Validate end-to-end connectivity through the DPU data plane by running `ping` and `nc` traffic tests between workload pods and services.