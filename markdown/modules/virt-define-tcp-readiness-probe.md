{%- set _mod_docs_content_type = "PROCEDURE" %}

# Defining a TCP readiness probe {id="virt-define-tcp-readiness-probe_{{ context }}"}

You can define a TCP readiness probe by setting the `spec.readinessProbe.tcpSocket` field of the virtual machine (VM) configuration. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Include details of the TCP readiness probe in the VM configuration file.

    Sample readiness probe with a TCP socket test:
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
          readinessProbe:
            initialDelaySeconds: 120
            periodSeconds: 20
            tcpSocket:
              port: 1500
            timeoutSeconds: 10
    # ...
    ```
    *   `spec.template.spec.readinessProbe.initialDelaySeconds` defines the time, in seconds, after the VM starts before the readiness probe is initiated.
    *   `spec.template.spec.readinessProbe.periodSeconds`defines the delay, in seconds, between performing probes. The default delay is 10 seconds. This value must be greater than `timeoutSeconds`.
    *   `spec.template.spec.readinessProbe.tcpSocket` defines the TCP action to perform.
    *   `spec.template.spec.readinessProbe.tcpSocket.port` defines the port of the VM that the probe queries.
    *   `spec.template.spec.readinessProbe.timeoutSeconds` defines the number of seconds of inactivity after which the probe times out and the VM is assumed to have failed. The default value is 1. This value must be lower than `periodSeconds`.
1.  Create the VM by running the following command:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```