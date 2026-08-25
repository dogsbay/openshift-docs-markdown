{%- set _mod_docs_content_type = "PROCEDURE" %}
# Remediating `KubeletConfig` sub pools {id="compliance-kubeletconfig-sub-pool-remediation_{{ context }}"}

You can apply `KubeletConfig` remediation labels to `MachineConfigPool` sub-pools. {._abstract}

**Procedure**

*   Add a label to the sub-pool `MachineConfigPool` CR:
    ```terminal
    $ oc label mcp <sub-pool-name> pools.operator.machineconfiguration.openshift.io/<sub-pool-name>=
    ```