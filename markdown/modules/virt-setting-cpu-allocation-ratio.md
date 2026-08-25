{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the CPU allocation ratio {id="virt-setting-cpu-allocation-ratio_{{ context }}"}

The CPU Allocation Ratio specifies the degree of overcommitment by mapping vCPUs to time slices of physical CPUs. {._abstract}

For example, a mapping or ratio of 10:1 maps 10 virtual CPUs to 1 physical CPU by using time slices.

To change the default number of vCPUs mapped to each physical CPU, set the `vmiCPUAllocationRatio` value in the `HyperConverged` CR. The pod CPU request is calculated by multiplying the number of vCPUs by the reciprocal of the CPU allocation ratio. For example, if `vmiCPUAllocationRatio` is set to 10, {{ VirtProductName }} will request 10 times fewer CPUs on the pod for that VM.

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Open the `HyperConverged` CR in your default editor by running the following command:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Set the `vmiCPUAllocationRatio`:

    ```yaml
    ...
    spec:
      resourceRequirements:
        vmiCPUAllocationRatio: 1
    # ...
    ```

    When `vmiCPUAllocationRatio` is set to `1`, the maximum amount of vCPUs are requested for the pod.