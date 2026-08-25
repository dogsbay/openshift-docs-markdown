{%- set _mod_docs_content_type = "PROCEDURE" %}
# Responding to symlinks alerts for the Local Storage Operator {id="local-storage-symlinks-procedure_{{ context }}"}

To prevent storage breakage during {{ product_title }} upgrades, an administrator can elect to detect, alert, and remap broken symlinks without manual node-level intervention. {._abstract}

By default, LSO engages in link monitoring and generates an alert if the current and preferred paths do not match.

If an alert occurs, an administrator can choose to either have LSO:

*   Use the existing path.
*   Re-create the symlink to point to the new, updated device path.

**Prerequisites**

*   Access to the {{ product_title }} web console or command-line interface (CLI) with administrative privileges.
*   Install the Local Storage Operator (LSO). For more information, see "Installing the Local Storage Operator".

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  To view volumes generating alerts:
    1.  On the left navigation menu, click **Observe** > **Alerting**.
    1.  In the **Alert Name** filter box, search for the required LSO alerts:

        **Symlink alerts for LSO**

        | Alert | Description |
        | :-- | :-- |
        | lso_no_stable_volume_path | Device does not have a stable path and is being referenced by device name, which can change between reboots |
        | lso_device_link_mismatch | Device has mismatching preferred and current symlink |
        | lso_lv_missing_device_path | LV object has missing devicePath on actual node |


        Alternatively, you can list volumes triggering device link alerts by running the following command:
        ```terminal
        $ oc get localvolumedevicelink -A -o json | jq -r '
            .items[] | 
            select(
              .spec.policy == "None" and 
              (.status.currentLinkTarget != .status.preferredLinkTarget or .status.currentLinkTarget == "")
            ) | 
            [.metadata.namespace, .metadata.name, .spec.persistentVolumeName, .status.currentLinkTarget // "MISSING", .status.preferredLinkTarget // "NONE"] | 
            @tsv' |
            column -t -s $'\t' -N "NAMESPACE,NAME,PV,CURRENT-TARGET,PREFERRED-TARGET"
        ```
        ```terminal title="Example output"
        NAMESPACE           NAME                             PV                 CURRENT-TARGET                          PREFERRED-TARGET
        openshift-storage   local-pv-1a2b3c-worker-0-block   local-pv-1a2b3c    /dev/disk/by-id/scsi-0NVME_MODEL_abcde  /dev/disk/by-id/scsi-2ace42e0035eabcde
        openshift-storage   local-pv-4d5e6f-worker-1-block   local-pv-4d5e6f    /dev/disk/by-id/scsi-0NVME_MODEL_fghij  /dev/disk/by-id/scsi-2ace42e0035efghij
        openshift-storage   local-pv-7g8h9i-worker-2-block   local-pv-7g8h9i    MISSING                                 /dev/disk/by-id/scsi-35000c500a1b2c3d4   
        ```
1.  Open the Custom Resource Definition, `localVolumeDeviceLink`:
    1.  Click **Ecosystem** > **Installed Operators**. 
    1.  On the **Installed Operators** page, in the **Search by name** box, type "LocalVolumeDeviceLink".
    1.  Click **LocalVolumeDeviceLink**. 

        Local Storage Operator creates `LocalVolumeDeviceLink` objects for each individual device (or partition or volume) it is managing. A cluster administrator has the option of specifying how LSO should handle symlinks for that particular device when underlying symlinks change because of unforeseen circumstances.
    1.  On the **Operator details** page, click the **YAML** tab.
    1.  Go to the `localVolumeDeviceLink.status` field and view its nested fields that are shown in the following table for a list of valid symlink targets, current link (`by-id`), and the generated preferred symlink.

        **`localVolumeDeviceLink.status` nested fields**

<table>
<thead>
<tr>
  <th>Status fields</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Description</td>
</tr>
<tr>
  <td>validLinkTargets</td>
</tr>
<tr>
  <td>The full list of valid symlink targets, since there might be multiple <code>by-id</code> symlinks pointing to the same physical device.</td>
</tr>
<tr>
  <td>currentLinkTarget</td>
</tr>
<tr>
  <td>The by-id symlink currently used by the PV.</td>
</tr>
<tr>
  <td>preferredLinkTarget</td>
</tr>
<tr>
  <td>The preferred symlink LSO has determined that is less likely to change because of udev rules updates, firmware updates, and so on.</td>
</tr>
<tr>
  <td>filesystemUUID</td>
</tr>
<tr>
  <td>The corresponding UUID of the filesystem, if one is found.</td>
</tr>
</tbody>
</table>


        Alternatively, you can view the status from the command line by running the following command:
        ```terminal
        $ oc get localvolumedevicelink local-pv-1a2b3c-worker-0-block -n openshift-storage -o jsonpath='{.status}' | jq
        ```
        ```json title="Example"
        {
            "currentLinkTarget": "/dev/disk/by-id/scsi-0NVME_MODEL_abcde",
            "preferredLinkTarget": "/dev/disk/by-id/scsi-2ace42e0035eabcde",
            "validLinkTargets": [
              "/dev/disk/by-id/nvme-eui.ace42e0035eabcde",
              "/dev/disk/by-id/scsi-0NVME_MODEL_abcde",
              "/dev/disk/by-id/scsi-2ace42e0035eabcde"
            ],
            "filesystemUUID": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
        }
        ```
    1.  Got to the `localVolumeDeviceLink.spec.policy` field and set its value to one of the following options:
        *   `CurrentLinkTarget`: Silences alerts and tells LSO to use the existing path.
        *   `PreferredLinkTarget`: LSO recreates the symlink to point to the new, updated device path. Note that selecting this option does not mean that all symlinks are fixed for LV objects.

            Alternatively, you can set the policy from the command line:
        *   To set the policy to `CurrentLinkTarget`, run the following command:
            ```terminal
            $ oc patch localvolumedevicelink local-pv-1a2b3c-worker-0-block -n openshift-storage \
                --type merge -p '{"spec":{"policy":"CurrentLinkTarget"}}'
            ```
        *   To set the policy to `PreferredLinkTarget`, run the following command:
            ```terminal
            $ oc patch localvolumedevicelink local-pv-1a2b3c-worker-0-block -n openshift-storage \
                --type merge -p '{"spec":{"policy":"PreferredLinkTarget"}}'
            ```

            The following example output applies to both preceding commands:
            ```terminal title="Example"
            localvolumedevicelink.local.storage.openshift.io/local-pv-1a2b3c-worker-0-block patched
            ```
1.  Click **Save**.
1.  (Optional) Set `localVolumeDeviceLink.spec.policy` back to null.

    The default value of `localVolumeDeviceLink.spec.policy` is none, which means LSO is monitoring the volumes used by the OpenShift cluster, but does not automatically change symlinks for PVs if existing symlinks are broken or LSO finds a better symlink to use. In this state, LSO just alerts you if any anomaly is detected.
1.  Click **Save**.