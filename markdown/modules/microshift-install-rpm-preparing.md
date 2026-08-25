{%- set _mod_docs_content_type = "PROCEDURE" %}
# Prepare to install {{ microshift_short }} from an RPM package {id="microshift-install-rpm-preparing_{{ context }}"}

When you are getting ready to install {{ microshift_short }} RPMs, make sure you have enough storage capacity for the workload you want to run. {._abstract}

**Prerequisites**

*   The system requirements for installing {{ microshift_short }} have been met.
*   You have root user access to your machine.
*   You have configured your LVM VG with the capacity needed for the PVs of your workload.

**Procedure**

1.  In the graphical installer under **Installation Destination** in the **Storage Configuration** subsection, select **Custom** -> **Done** to open the dialog for configuring partitions and volumes. The Manual Partitioning window is displayed.
1.  Under **New Red Hat Enterprise Linux {{ op_system_version_major }}.x Installation**, select **Click here to create them automatically**.
1.  Select the root partition, **/**, reduce **Desired Capacity** so that the VG has sufficient capacity for your PVs, and then click **Update Settings**.
1.  Complete your installation.

    :::note

    For more options on partition configuration, read the guide linked in the Additional information section for Configuring Manual Partitioning.
    
    :::

1.  As a root user, verify the VG capacity available on your system by running the following command:
    ```terminal
    $ sudo vgs
    ```

    Example output:
    ```terminal
    VG   #PV #LV #SN Attr   VSize    VFree
    rhel   1   2   0 wz--n- 127.00g 54.94g
    ```