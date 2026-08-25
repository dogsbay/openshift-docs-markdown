{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean all data and keep the container images {id="microshift-data-cleaning-container-images_{{ context }}"}

You can retain the {{ microshift_short }} container images while cleaning all data by running the `microshift-cleanup-data` script with the `--all` and `--keep-images` arguments. {._abstract}

Keeping the container images helps speed up {{ microshift_short }} restart after data clean up because the necessary container images are already present locally when you start the service.

When you run the script with the `--all` and `--keep-images` arguments, you perform the following clean up actions:

*   Stop and disable all {{ microshift_short }} services
*   Delete all {{ microshift_short }} pods
*   Reset network configuration
*   Delete the `/var/lib/microshift` data directory
*   Delete OVN-K networking configuration


:::warning

This option deletes all {{ microshift_short }} data and user workloads. Use with caution.

:::


**Prerequisites**

*   You are logged into {{ microshift_short }}.
*   You have filed a support case.

**Procedure**

1.  Clean up all data and user workloads when retaining the {{ microshift_short }} container images by running the following command:
    ```terminal
    $ sudo microshift-cleanup-data --all --keep-images
    ```
    ```terminal title="Example output"
    DATA LOSS WARNING: Do you wish to stop and clean ALL MicroShift data AND cri-o container workloads?
    1) Yes
    2) No
    #? Yes
    Stopping MicroShift services
    Disabling MicroShift services
    Removing MicroShift pods
    Deleting the br-int interface
    Killing conmon, pause and OVN processes
    Removing MicroShift configuration
    Removing OVN configuration
    MicroShift service was stopped
    MicroShift service was disabled
    Cleanup succeeded
    ```
1.  Verify that the container images are still present by running the following command:
    ```terminal
    $ sudo crictl images | awk '{print $1}'
    ```
    ```terminal title="Example output"
    IMAGE
    quay.io/openshift-release-dev/ocp-v4.0-art-dev
    quay.io/openshift-release-dev/ocp-v4.0-art-dev
    quay.io/openshift-release-dev/ocp-v4.0-art-dev
    quay.io/openshift-release-dev/ocp-v4.0-art-dev
    quay.io/openshift-release-dev/ocp-v4.0-art-dev
    quay.io/openshift-release-dev/ocp-v4.0-art-dev
    quay.io/openshift-release-dev/ocp-v4.0-art-dev
    quay.io/openshift-release-dev/ocp-v4.0-art-dev
    quay.io/openshift-release-dev/ocp-v4.0-art-dev
    quay.io/openshift-release-dev/ocp-v4.0-art-dev
    registry.redhat.io/lvms4/topolvm-rhel9
    registry.redhat.io/openshift4/ose-csi-external-provisioner
    registry.redhat.io/openshift4/ose-csi-external-resizer
    registry.redhat.io/openshift4/ose-csi-livenessprobe
    registry.redhat.io/openshift4/ose-csi-node-driver-registrar
    registry.redhat.io/ubi9
    ```

    :::important

    The `microshift-cleanup-data` script stops and disables the {{ microshift_short }} service.
    
    :::

1.  Restart the {{ microshift_short }} service by running the following command:
    ```terminal
    $ sudo systemctl enable --now microshift
    ```