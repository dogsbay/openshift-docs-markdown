{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the DPF HCP Provisioner Operator {id="nw-dpf-installing-hcp-provisioner_{{ context }}"}

You can install the DPF HCP Provisioner Operator by using a Helm chart.
The operator manages the lifecycle of hosted clusters for DPU environments. {._abstract}

**Prerequisites**

*   The Multicluster Engine (MCE) Operator is installed and hosted control planes is enabled.
*   The MetalLB Operator is installed and a `MetalLB` instance is created.
*   A storage class is available for etcd persistent volumes, such as {{ lvms }} or an equivalent.
*   The DPF Operator is installed and DPF CRDs are available.
*   The Helm CLI (`helm`) is installed on your workstation.
*   You have a pull secret file that includes credentials for `registry.redhat.io`. Helm reads its registry credentials from this file, which is separate from the container runtime configuration.

**Procedure**

1.  Set the `OPENSHIFT_PULL_SECRET` environment variable to the path of your pull secret file:
    ```terminal
    $ export OPENSHIFT_PULL_SECRET="/root/pull-secret.txt"
    ```
1.  Install the operator by using Helm:
    ```terminal
    $ helm upgrade --install dpf-hcp-provisioner-operator \
        oci://registry.redhat.io/dpu-kit-for-nvidia/dpf-hcp-provisioner-chart \
        --registry-config "${OPENSHIFT_PULL_SECRET}" \
        --version 4.22.0 \
        --namespace dpf-hcp-provisioner-system \
        --create-namespace \
        --set provisionerConfig.manageDPUServiceTemplates=true
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
    NAME                                            READY   STATUS    RESTARTS   AGE
    dpf-hcp-provisioner-operator-xxx-yyy            1/1     Running   0          1m
    ```
*   Verify that the `DPFHCPProvisionerConfig` singleton resource was created and that `manageDPUServiceTemplates` is set to `true`:
    ```terminal
    $ oc get dpfhcpprovisionerconfigs.provisioning.dpu.hcp.io default -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: provisioning.dpu.hcp.io/v1alpha1
    kind: DPFHCPProvisionerConfig
    metadata:
      name: default
      labels:
        app.kubernetes.io/managed-by: Helm
        helm.sh/chart: dpf-hcp-provisioner-chart-4.22.0
    spec:
      blueFieldOCPLayerRepo: registry.redhat.io/dpu-kit-for-nvidia/bluefield-ocp-layer-rhel10 (1)
      disableMetalLB: false (2)
      manageDPUServiceTemplates: true (3)
    ```

    where:

    `blueFieldOCPLayerRepo`
    :   The container registry repository for BlueField {{ product_title }} layer images. The operator queries this repository for an image tag that matches the {{ product_title }} version.

    `disableMetalLB`
    :   Disables MetalLB configuration even when a virtual IP is specified.

    `manageDPUServiceTemplates`
    :   Controls whether the operator creates and manages the `DPUServiceTemplate` resources for OVN-Kubernetes, DTS, and HBN in the `DPUCluster` namespace. This value must be `true` otherwise DPU provisioning fails because the required `DPUServiceTemplate` resources are missing. This field is deprecated and will be removed in a future release, at which point `DPUServiceTemplate` management is always enabled.