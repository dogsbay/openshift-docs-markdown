{%- set _mod_docs_content_type = "PROCEDURE" %}

# Defining an HTTP liveness probe {id="virt-define-http-liveness-probe_{{ context }}"}

Define an HTTP liveness probe by setting the `spec.livenessProbe.httpGet` field of the virtual machine (VM) configuration. You can define both HTTP and TCP tests for liveness probes in the same way as readiness probes. This procedure configures a sample liveness probe with an HTTP GET test. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Include details of the HTTP liveness probe in the VM configuration file.

    Sample liveness probe with an HTTP GET test:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      annotations:
      name: fedora-vm
      namespace: example-namespace
    # ...
    spec:
      template:
        spec:
          livenessProbe:
            initialDelaySeconds: 120
            periodSeconds: 20
            httpGet:
              port: 1500 
              path: /healthz
              httpHeaders:
              - name: Custom-Header
                value: Awesome
            timeoutSeconds: 10
    # ...
    ```
    *   `spec.tenmplate.spec.livenessProbe.initialDelaySeconds` defines the time, in seconds, after the VM starts before the liveness probe is initiated.
    *   `spec.tenmplate.spec.livenessProbe.periodSeconds` defines the delay, in seconds, between performing probes. The default delay is 10 seconds. This value must be greater than `timeoutSeconds`.
    *   `spec.tenmplate.spec.livenessProbe.httpGet` defines the HTTP GET request to perform to connect to the VM.
    *   `spec.tenmplate.spec.livenessProbe.httpGet.port` defines the port of the VM that the probe queries. In the above example, the probe queries port 1500. The VM installs and runs a minimal HTTP server on port 1500 via cloud-init.
    *   `spec.tenmplate.spec.livenessProbe.httpGet.path` defines the path to access on the HTTP server. In the above example, if the handler for the server’s `/healthz` path returns a success code, the VM is considered to be healthy. If the handler returns a failure code, the VM is deleted and a new VM is created.
    *   `spec.tenmplate.spec.livenessProbe.timeoutSeconds` defines the number of seconds of inactivity after which the probe times out and the VM is assumed to have failed. The default value is 1. This value must be lower than `periodSeconds`.
1.  Create the VM by running the following command:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```