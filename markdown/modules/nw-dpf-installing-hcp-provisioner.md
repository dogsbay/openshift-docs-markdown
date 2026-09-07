{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the DPF HCP Provisioner Operator {id="nw-dpf-installing-hcp-provisioner_{{ context }}"}

The Operator manages the lifecycle of hosted clusters for DPU environments. {._abstract}

**Prerequisites**

*   The Multicluster Engine (MCE) Operator is installed and hosted control planes is enabled.
*   The MetalLB Operator is installed and a `MetalLB` instance is created.
*   A storage class is available for etcd persistent volumes, such as {{ lvms }} or an equivalent.
*   The DPF Operator is installed and DPF CRDs are available.
*   The Helm CLI (`helm`) is installed on your workstation.

**Procedure**

1.  Clone the `dpf-hcp-provisioner-operator` repository:
    ```terminal
    $ git clone https://github.com/rh-ecosystem-edge/dpf-hcp-provisioner-operator.git
    ```
1.  Change to the cloned repository directory:
    ```terminal
    $ cd dpf-hcp-provisioner-operator
    ```
1.  Install the Operator by using Helm:
    ```terminal
    $ helm upgrade --install dpf-hcp-provisioner-operator \
        helm/dpf-hcp-provisioner-operator \
        --namespace dpf-hcp-provisioner-system \
        --create-namespace \
        --set image.repository=registry.redhat.io/dpu-kit-for-nvidia/dpf-hcp-provisioner-rhel10-operator \
        --set image.tag=v4.22
    ```
    ```terminal title="Example output"
    NAME: dpf-hcp-provisioner-operator
    LAST DEPLOYED: ...
    NAMESPACE: dpf-hcp-provisioner-system
    STATUS: deployed
    ```

    :::note

    The Helm chart creates a `DPFHCPProvisionerConfig` singleton custom resource named `default` that defines the Operator-wide configuration.
    This resource controls settings such as the BlueField {{ product_title }} layer image repository, MetalLB integration, and `DPUServiceTemplate` management.
    To customize these settings, modify the `provisionerConfig` section in your Helm `values.yaml` file before running the `helm upgrade --install` command.
    
    :::


**Verification**

*   Verify that the Operator pod is running:
    ```terminal
    $ oc get pods -n dpf-hcp-provisioner-system
    ```
    ```terminal title="Example output"
    NAME                                                    READY   STATUS    RESTARTS   AGE
    dpf-hcp-provisioner-controller-manager-xxx-yyy          1/1     Running   0          1m
    ```
*   Verify that the `DPFHCPProvisionerConfig` resource is created:
    ```terminal
    $ oc get dpfhcpprovisionerconfigs.provisioning.dpu.hcp.io default
    ```