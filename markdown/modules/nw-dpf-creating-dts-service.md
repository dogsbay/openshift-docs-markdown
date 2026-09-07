{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the DOCA Telemetry Service DPU service configuration {id="nw-dpf-creating-dts-service_{{ context }}"}

You can create a `DPUServiceConfiguration` custom resource for the DOCA Telemetry Service.
The DOCA Telemetry Service provides metrics collection from the DPUs by using Prometheus. {._abstract}


:::note

The `DPUServiceTemplate` for DOCA Telemetry Service is automatically created and managed by the `dpf-hcp-provisioner-operator` controller.
The operator uses the correct chart and image versions for the installed DPF version.
You only need to create the `DPUServiceConfiguration` resource.

:::


**Prerequisites**

*   You have installed the DPF Operator.
*   You have created the `DPFOperatorConfig` resource.
*   You have set the DPF Operator environment variables. For details, see "DPF Operator installation environment variables".

**Procedure**

1.  Create a file named `dts.yaml` with the following content:
    ```yaml
    apiVersion: svc.dpu.nvidia.com/v1alpha1
    kind: DPUServiceConfiguration
    metadata:
      name: doca-telemetry-service
      namespace: dpf-operator-system
    spec:
      deploymentServiceName: "doca-telemetry-service"
      serviceConfiguration:
        configPorts:
          ports:
            - name: httpserverport
              port: 9189
              protocol: TCP
          serviceType: None
    ```
1.  Apply the resource file:
    ```terminal
    $ oc apply -f dts.yaml
    ```

**Verification**

*   Verify that the DOCA Telemetry Service configuration is created:
    ```terminal
    $ oc get dpuserviceconfiguration -n dpf-operator-system doca-telemetry-service
    ```