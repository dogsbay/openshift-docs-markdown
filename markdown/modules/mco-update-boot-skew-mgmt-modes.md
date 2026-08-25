{%- set _mod_docs_content_type = "REFERENCE" %}
# About boot image skew enforcement modes {id="mco-update-boot-skew-mgmt-about-modes_{{ context }}"}

Review the following information to learn about the boot image skew enforcement modes. Use the information to determine the best method for your cluster.  {._abstract}

Boot image skew enforcement operates in one of the following modes:


Automatic
:   When set to `Automatic`, with boot image management also enabled, if the cluster is updated from one {{ product_title }} version to the next, the MCO automatically updates the boot image version in the `MachineConfiguration` object and tests the boot image version for skew. 

    :::note


    In {{ product_title }} 4.22, the automatic mode is available only for {{ aws_short }}, {{ gcp_short }}, {{ azure_short }}, and {{ vmw_short }} clusters and is the default for these platforms. 
    
    :::


    The MCO automatically configures this mode when the following conditions are met:
    *   Boot image management is available for the platform that your cluster uses. Currently boot image management is available for only {{ aws_short }}, {{ gcp_short }}, {{ azure_short }}, and {{ vmw_short }} clusters.
    *   You have enabled boot image management for compute machine sets.
    *   You have not set skew enforcement to the manual or none mode.

    For information on boot image management, see "Boot image management".
    ```yaml title="Example MachineConfiguration object with automatic skew enforcement"
    apiVersion: operator.openshift.io/v1
    kind: MachineConfiguration
    metadata:
      name: cluster
    status:
    # ...
      bootImageSkewEnforcementStatus:
        automatic:
          ocpVersion: 4.22.0
        mode: Automatic
    ```

    The MCO examines the boot image reported in the `ocpVersion` parameter to determine if the cluster is violating the boot image version skew limits.


Manual
:   When set to `Manual`, if the boot image version is updated, a cluster administrator is responsible for manually updating the `MachineConfiguration` object with the {{ op_system }} version of the new boot image or the {{ product_title }} version associated with the new boot image. The MCO then tests the boot image version for skew.
    ```yaml title="Example MachineConfiguration object with skew enforcement based on an {{ op_system }} version"
    apiVersion: operator.openshift.io/v1
    kind: MachineConfiguration
    metadata:
      name: cluster
    # ...
    spec:
      bootImageSkewEnforcement:
        mode: Manual
        manual:
          mode: RHCOSVersion
          rhcosVersion: 9.2.20251023-0
    # ...
    status:
      bootImageSkewEnforcementStatus:
        manual:
          mode: RHCOSVersion
          rhcosVersion: 9.2.20251023-0
        mode: Manual
    ```
    ```yaml title="Example MachineConfiguration object with skew enforcement based on an {{ product_title }} version"
    apiVersion: operator.openshift.io/v1
    kind: MachineConfiguration
    metadata:
      name: cluster
    # ...
    spec:
      bootImageSkewEnforcement:
        manual:
          mode: OCPVersion
          ocpVersion: 4.22.0
        mode: Manual
    # ...
    status:
      bootImageSkewEnforcementStatus:
        manual:
          mode: OCPVersion
          ocpVersion: 4.22.0
        mode: Manual
    ```

    The MCO examines the boot image reported in the `rhcosVersion` or `ocpVersion` parameter to determine if the cluster is violating the boot image version skew limits.


None
:   When set to `None`, boot image skew enforcement is disabled. When disabled, the MCO does not monitor for boot image skew and does not report if new nodes are provisioned with older boot images, which could introduce issues when scaling new nodes. 
    ```yaml title="Example MachineConfiguration object with skew enforcement disabled"
    apiVersion: operator.openshift.io/v1
    kind: MachineConfiguration
    metadata:
      name: cluster
    # ...
    spec:
      bootImageSkewEnforcement:
        mode: None
    # ...
    status:
      bootImageSkewEnforcementStatus:
        mode: None
    ```

    When in the none mode, the MCO reports a Prometheus alert that skew enforcement is disabled and that scale-up might run into issues due to old boot images. The alert does not cause any functional issues for the cluster.

    {{ sno_caps }} clusters default to the none mode regardless of platform, because they do not scale. The skew enforcement Prometheus alert is not reported for {{ sno }} clusters.

    Bare-metal clusters running {{ product_title }} version 4.10 and later do not use the MCO to keep their boot images up-to-date. Skew enforcement defaults to the none mode and the skew enforcement Prometheus alert mentioned is not reported. For bare-metal clusters running {{ product_title }} version 4.9 and earlier, you need to perform a one-time action to migrate to the 4.10 system, this is explained further in the bare metal boot image update docs. For information, see "Manually updating the boot image".