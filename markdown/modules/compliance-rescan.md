{%- set _mod_docs_content_type = "PROCEDURE" %}
# Performing a rescan {id="compliance-rescan_{{ context }}"}

You can re-run a scan on a defined schedule, such as every Monday or daily. It can also be useful to re-run a scan once after fixing a problem on a node.  {._abstract}

To perform a single scan, annotate the scan with the `compliance.openshift.io/rescan=` option:

**Procedure**

1.  Annotate the scan to trigger a rescan:
    ```terminal
    $ oc -n openshift-compliance \
    annotate compliancescans/rhcos4-e8-worker compliance.openshift.io/rescan=
    ```

    A rescan generates four additional `mc` for `rhcos-moderate` profile:
1.  Verify the rescan generated machine configs:
    ```terminal
    $ oc get mc
    ```

    ```terminal title="Example output"
    75-worker-scan-chronyd-or-ntpd-specify-remote-server
    75-worker-scan-configure-usbguard-auditbackend
    75-worker-scan-service-usbguard-enabled
    75-worker-scan-usbguard-allow-hid-and-hub
    ```


:::important

When the scan setting `default-auto-apply` label is applied, remediations are applied automatically and outdated remediations automatically update. If there are remediations that were not applied due to dependencies, or remediations that had been outdated, rescanning applies the remediations and might trigger a reboot. Only remediations that use `MachineConfig` objects trigger reboots. If there are no updates or dependencies to be applied, no reboot occurs.

:::