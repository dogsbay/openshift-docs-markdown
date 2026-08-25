{%- set _mod_docs_content_type = "PROCEDURE" %}
# Converting the discovery image to QCOW2 format {id="alibaba-ai-converting-image-to-qcow2_{{ context }}"}

Convert the generated ISO to `QCOW2` format before importing it into {{ alibaba }}. {._abstract}

**Prerequisites**

*   You have created a cluster and downloaded the discovery image in the {{ ai_full }}.
*   You have access to a Linux machine that is outside the cluster, such as your desktop machine.

**Procedure**

1.  Open the command-line interface on the Linux machine.
1.  Verify that the system has virtualization flags enabled by running the following command:
    ```terminal
    $ grep -e lm -e svm -e vmx /proc/cpuinfo
    ```
1.  Install the `qemu-img` package on a {{ op_system_base }} or Fedora machine by running the following command:
    ```terminal
    $ sudo dnf install -y qemu-img
    ```

    :::note

    If your system uses the `APT` package manager, install the package using the name `qemu-utils` instead.
    
    :::

1.  Convert the image to `QCOW2` by running the following command:
    ```terminal
    $ qemu-img convert -O qcow2 ${CLUSTER_NAME}.iso ${CLUSTER_NAME}.qcow2
    ```