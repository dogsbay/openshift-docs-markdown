{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a MachineHealthCheck resource for bare metal {id="mgmt-power-remediation-baremetal-about-creating-mhc-baremetal_{{ context }}"}

You control how a machine health check remediates unhealthy machines by using a `MachineHealthCheck` resource to configure health criteria, remediation limits, and startup timeouts for machines in a targeted pool. {._abstract}

**Prerequisites**

*   The {{ product_title }} is installed using installer-provisioned infrastructure.
*   Access to Baseboard Management Controller (BMC) credentials or BMC access to each node.
*   Network access to the BMC interface of the unhealthy node.
*   For a metal3-based remediation, a `Metal3RemediationTemplate` resource must exist.
    ```yaml title="Sample Metal3RemediationTemplate resource for bare metal, metal3-based remediation"
    apiVersion: infrastructure.cluster.x-k8s.io/v1beta1
    kind: Metal3RemediationTemplate
    metadata:
      name: metal3-remediation-template
      namespace: openshift-machine-api
    spec:
      template:
        spec:
          strategy:
            type: Reboot
            retryLimit: 1
            timeout: 5m0s
    ```

**Procedure**

1.  Create a `healthcheck.yaml` file that contains the definition of your machine health check.
    ```yaml title="Sample MachineHealthCheck resource for bare metal, annotation-based remediation"
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineHealthCheck
    metadata:
      name: example
      namespace: openshift-machine-api
      annotations:
        machine.openshift.io/remediation-strategy: external-baremetal
    spec:
      selector:
        matchLabels:
          machine.openshift.io/cluster-api-machine-role: <role>
          machine.openshift.io/cluster-api-machine-type: <role>
          machine.openshift.io/cluster-api-machineset: <cluster_name>-<label>-<zone>
      unhealthyConditions:
      - type:    "Ready"
        timeout: "300s"
        status: "False"
      - type:    "Ready"
        timeout: "300s"
        status: "Unknown"
      maxUnhealthy: "40%"
      nodeStartupTimeout: "10m"
    ```

    where

    `metadata.name`
    :   Specify the name of the machine health check to deploy.

    `metadata.annotations`
    :   Specify the required annotation for the annotation-based remediation process.

        :::important


        You must include the `machine.openshift.io/remediation-strategy: external-baremetal` annotation in the `annotations` section to enable annotation-based remediation. With this remediation strategy, unhealthy hosts are rebooted instead of removed from the cluster.
        
        :::


    `spec.selector.matchLabels`
    :   Specify the machine pool and machine set to check by adding labels:
        *   `machine.openshift.io/cluster-api-machine-role`: Specify a label for the machine pool that you want to check.
        *   `machine.openshift.io/cluster-api-machine-type`: Specify a label for the machine pool that you want to check.
        *   `machine.openshift.io/cluster-api-machineset`: Specify the machine set to track in the `<cluster_name>-<label>-<zone>` format. For example, `prod-node-us-east-1a`.

    `spec.unhealthyConditions.timeout`
    :   Specify the timeout duration for a node condition. If a condition is met for the duration of the timeout, the machine will be remediated. Long timeouts can result in long periods of downtime for a workload on an unhealthy machine.

    `spec.maxUnhealthy`
    :   Specify the amount of machines allowed to be concurrently remediated in the targeted pool. This can be set as a percentage or an integer. If the number of unhealthy machines exceeds the limit set by `maxUnhealthy`, remediation is not performed.

    `spec.nodeStartupTimeout`
    :   Specify the timeout duration that a machine health check must wait for a node to join the cluster before a machine is determined to be unhealthy.
    ```yaml title="Sample MachineHealthCheck resource for bare metal, metal3-based remediation"
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineHealthCheck
    metadata:
      name: example
      namespace: openshift-machine-api
    spec:
      selector:
        matchLabels:
          machine.openshift.io/cluster-api-machine-role: <role>
          machine.openshift.io/cluster-api-machine-type: <role>
          machine.openshift.io/cluster-api-machineset: <cluster_name>-<label>-<zone>
      remediationTemplate:
        apiVersion: infrastructure.cluster.x-k8s.io/v1beta1
        kind: Metal3RemediationTemplate
        name: metal3-remediation-template
        namespace: openshift-machine-api
      unhealthyConditions:
      - type:    "Ready"
        timeout: "300s"
    ```

    where:

    `metadata.name`
    :   Specify the name of the machine health check to deploy.

    `spec.selector.matchLabels`
    :   Specify the machine pool and machine set to check by adding labels:
        *   `machine.openshift.io/cluster-api-machine-role`: Specify a label for the machine pool that you want to check.
        *   `machine.openshift.io/cluster-api-machine-type`: Specify a label for the machine pool that you want to check.
        *   `machine.openshift.io/cluster-api-machineset`: Specify the machine set to track in the `<cluster_name>-<label>-<zone>` format. For example, `prod-node-us-east-1a`.

    `spec.remediationTemplate`
    :   Specify the metal3 remediation template to use. Provide the following information:
        *   `apiVersion`. Specify the API version as `infrastructure.cluster.x-k8s.io/v1beta1`.
        *   `kind`. Specify `Metal3RemediationTemplate`.
        *   `name`. Specify the name of the template.
        *   `namespace`. Specify the namespace of the template.

    `spec.unhealthyConditions.timeout`
    :   Specify the timeout duration for a node condition. If a condition is met for the duration of the timeout, the machine will be remediated. Long timeouts can result in long periods of downtime for a workload on an unhealthy machine.

    :::note

    The `matchLabels` are examples only; you must map your machine groups based on your specific needs.
    
    :::

1.  Apply the `healthcheck.yaml` file to your cluster using the following command:
    ```terminal
    $ oc apply -f healthcheck.yaml
    ```