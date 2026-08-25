{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the boot image skew enforcement version {id="mco-update-boot-skew-mgmt-updating.adoc_{{ context }}"}

If you are running boot image skew enforcement in the manual mode, you must manually update the boot image version in the `MachineConfiguration` object each time you update the boot image in your cluster. With the boot image updated in the `MachineConfiguration` object, the Machine Config Operator (MCO) can properly perform boot image skew enforcement to ensure that your nodes are up-to-date.  {._abstract}

**Procedure**

1.  If necessary, obtain the {{ op_system }} or {{ product_title }} version of the current boot image on an updated node by using one of the following commands:
    *   Obtain the {{ op_system }} version by running the following command:
        ```terminal
        $ oc debug node/<new-node> -- chroot /host cat /sysroot/.coreos-aleph-version.json
        ```
        ```terminal title="Example output"
        # ...
            "ref": "docker://ostree-image-signed:oci-archive:/rhcos-9.6.20251023-0-ostree.x86_64.ociarchive",
            "version": "9.6.20251023-0"
        ```
    *   Obtain the {{ product_title }} version by running the following command:
        ```terminal
        $ openshift-install version
        ```

        Ensure that you use the same `openshift-install` binary that you used when updating the boot image.
        ```terminal title="Example output"
        openshift-install 4.22.0
        ```
1.  Specify the boot image version in the `MachineConfiguration` object with either the {{ op_system }} or {{ product_title }} version:
    *   Update the `MachineConfiguration` object with the {{ op_system }} version:
        ```yaml
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
        ```

        If the `spec.bootImageSkewEnforcement.manual.mode` is `RHCOSVersion`, specify the {{ op_system }} version of the boot image with the `rhcosVersion` parameter, as shown in the example.
    *   Update the `MachineConfiguration` object with the {{ product_title }} version
        ```yaml
        apiVersion: operator.openshift.io/v1
        kind: MachineConfiguration
        metadata:
          name: cluster
        # ...
        spec:
          bootImageSkewEnforcement:
            mode: Manual
            manual:
              mode: OCPVersion
              ocpVersion: 4.22.0
        # ...
        ```

        If the `spec.bootImageSkewEnforcement.manual.mode` is `OCPVersion`, specify the {{ product_title }} version of the boot image with the `ocpVersion` parameter, as shown in the example.