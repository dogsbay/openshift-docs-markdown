{%- set _mod_docs_content_type = "PROCEDURE" %}
# Apply updates on an {{ op_system_ostree }} system {id="microshift-updates-rpms-ostree_{{ context }}"}

To update {{ microshift_short }} on {{ op_system_ostree_first }}, embed the new version of {{ microshift_short }} on a new operating system image. {._abstract}

{% leveloffset 1 %}{% include "./snippets/microshift-rhel10-bootc-not-osbuild.md" %}{% endleveloffset %}


:::important

You cannot downgrade {{ microshift_short }} with this process. Downgrades other than automatic rollbacks are not supported.

:::


**Prerequisites**

*   The system requirements for installing {{ microshift_short }} have been met.
*   You have root user access to the host.
*   The version of {{ microshift_short }} you have is compatible with the {{ op_system_ostree }} image you are preparing to use.

**Procedure**

1.  Create an image builder configuration file for adding the `{{ rpm_repo_version }}`{minja} RPM repository source required to pull {{ microshift_short }} RPMs by running the following command:
    ```terminal {minja}
    $ cat > {{ rpm_repo_version }}.toml <<EOF
    id = "{{ rpm_repo_version }}"
    name = "Red Hat OpenShift Container Platform {{ ocp_version }} for RHEL {{ op_system_version_major }}"
    type = "yum-baseurl"
    url = "https://cdn.redhat.com/content/dist/layered/rhel9/$(uname -m)/rhocp/{{ ocp_version }}/os"
    check_gpg = true
    check_ssl = true
    system = false
    rhsm = true
    EOF
    ```
1.  Add the update RPM source to the image builder by running the following command:
    ```terminal {minja}
    $ sudo composer-cli sources add {{ rpm_repo_version }}.toml
    ```
1.  Build a new image of {{ op_system_ostree }} that contains the new version of {{ microshift_short }}. To determine the steps required, use the following documentation:
    *   [Building a commit update](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/composing_installing_and_managing_rhel_for_edge_images/managing-rhel-for-edge-images_composing-installing-managing-rhel-for-edge-images#proc_building-a-commit-update_managing-rhel-for-edge-images)
1.  Update the host to use the new image of {{ op_system_ostree }}. To determine the steps required, use the following documentation:
    *   [How RHEL for Edge image updates are deployed](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/composing_installing_and_managing_rhel_for_edge_images/managing-rhel-for-edge-images_composing-installing-managing-rhel-for-edge-images#how-are-rhel-for-edge-image-updates-deployed_managing-rhel-for-edge-images)
1.  Reboot the host to apply updates by running the following command:
    ```terminal
    $ sudo systemctl reboot
    ```