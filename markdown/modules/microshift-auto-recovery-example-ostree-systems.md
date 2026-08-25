{%- set _mod_docs_content_type = "PROCEDURE" %}
# Use automatic recovery with {{ op_system_ostree }} {id="microshift-auto-recovery-ostree-systems_{{ context }}"}

To use automatic recovery for {{ product_title }} on {{ op_system_ostree }} systems, you can add the auto-recovery systemd service, `10-auto-recovery.conf`, and the `microshift-auto-recovery` script to your blueprint. Use blueprint customizations so the image includes these files and recovery runs automatically. {._abstract}


:::important

You must include the entire `auto-recovery` process for {{ op_system_ostree }} systems that use `systemd` in the blueprint file.

:::


**Prerequisites**

*   You installed Podman.
*   You installed the command-line `composer-cli` tool.

**Procedure**

1.  Optional: Because the `composer-cli` can only create files in the `/etc` directory, package your files into an RPM that you include the blueprint.
1.  Use the following example to create your blueprint file:
    ```terminal
    [[customizations.directories]]
    path = "/etc/systemd/system/microshift.service.d"

    [[customizations.directories]]
    path = "/etc/bin"

    [[customizations.files]]
    path = "/etc/systemd/system/microshift.service.d/10-auto-recovery.conf"
    data = """
    [Unit]
    OnFailure=microshift-auto-recovery.service
    """

    [[customizations.files]]
    path = "/etc/systemd/system/microshift-auto-recovery.service"
    data = """
    [Unit]
    Description=MicroShift auto-recovery
    [Service]
    Type=oneshot
    ExecStart=/etc/bin/microshift-auto-recovery
    [Install]
    WantedBy=multi-user.target
    """

    [[customizations.files]]
    path = "/etc/bin/microshift-auto-recovery"
    mode = "0755"
    data = """
    #!/usr/bin/env bash
    set -xeuo pipefail
    # If greenboot uses a non-default file for clearing boot_counter, use boot_success instead.
    if grep -q  "/boot/grubenv" /usr/libexec/greenboot/greenboot-grub2-set-success; then
        if grub2-editenv - list | grep -q ^boot_success=0; then
            echo "Greenboot didn't decide the system is healthy after staging a new deployment."
            echo "Quitting to not interfere with the process"
            exit 0
        fi
    else
        if grub2-editenv - list | grep -q ^boot_counter=; then
            echo "Greenboot didn't decide the system is healthy after staging a new deployment."
            echo "Quitting to not interfere with the process"
            exit 0
        fi
    fi
    /usr/bin/microshift restore --auto-recovery /var/lib/microshift-auto-recovery
    /usr/bin/systemctl reset-failed microshift
    /usr/bin/systemctl start microshift
    echo "DONE"
    """
    ```
1.  For the next steps, see [Preparing for image building](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/embedding_in_a_rhel_for_edge_image/microshift-embed-in-rpm-ostree#preparing-for-image-building_microshift-embed-in-rpm-ostree).