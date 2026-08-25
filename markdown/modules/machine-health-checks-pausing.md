{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pausing a MachineHealthCheck resource {id="machine-health-checks-pausing_{{ context }}"}

During the update process, nodes in the cluster might become temporarily unavailable. For worker nodes, the `MachineHealthCheck` resources might identify such nodes as unhealthy and reboot them. To avoid rebooting worker nodes, you must pause all the `MachineHealthCheck` resources before updating the cluster. {._abstract}


:::note

Some `MachineHealthCheck` resources might not need to be paused. If your `MachineHealthCheck` resource relies on unrecoverable conditions, pausing that MHC is unnecessary.

:::


**Prerequisites**

*   You installed the {{ oc_first }}.

**Procedure**

1.  List all of the available `MachineHealthCheck` resources that you want to pause by running the following command:
    ```terminal
    $ oc get machinehealthcheck -n openshift-machine-api
    ```
1.  For each `MachineHealthCheck` resource, pause the machine health check by running the following command:
    ```terminal
    $ oc -n openshift-machine-api annotate mhc <mhc_name> cluster.x-k8s.io/paused=""
    ```

    The annotated `MachineHealthCheck` resource resembles the following YAML file:
    ```yaml
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineHealthCheck
    metadata:
      name: example
      namespace: openshift-machine-api
      annotations:
        cluster.x-k8s.io/paused: ""
    spec:
      selector:
        matchLabels:
          role: worker
      unhealthyConditions:
      - type:    "Ready"
        status:  "Unknown"
        timeout: "300s"
      - type:    "Ready"
        status:  "False"
        timeout: "300s"
      maxUnhealthy: "40%"
    status:
      currentHealthy: 5
      expectedMachines: 5
    ```

    :::important

    Resume the machine health checks after updating the cluster. To resume the check, remove the pause annotation from the `MachineHealthCheck` resource by running the following command:

    ```terminal
    $ oc -n openshift-machine-api annotate mhc <mhc-name> cluster.x-k8s.io/paused-
    ```
    
    :::