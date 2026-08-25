{%- set _mod_docs_content_type = "PROCEDURE" %}
# Working around UID and GID drift when migrating to {{ op_system_image }} {id="microshift-updates-edge-to-image-uid-drift_{{ context }}"}

If you do not re-install operating systems that are running {{ microshift_short }}, you must use a workaround for a possible UID and GID drift during the migration process. One way to solve this problem is to add `systemd` units that apply the necessary fixes before the affected system services are started. {._abstract}

**Prerequisites**

*   You have an existing {{ op_system_ostree }} deployment running {{ microshift_short }}.
*   You have root access to the build host.
*   You have an image that you want to deploy.

**Procedure**

*   Solve the potential UID or GID drift for the Open vSwitch (OVS) `systemd` service, `ovsdb-server.service`, by adding the following command to the {{ microshift_short }} image-build procedure:
    ```terminal
    # Install systemd configuration drop-ins to fix potential permission problems when upgrading from rpm-ostree commits to image mode container layers
    RUN mkdir -p /usr/lib/systemd/system/ovsdb-server.service.d && \
        cat > /usr/lib/systemd/system/ovsdb-server.service.d/microshift-ovsdb-ownership.conf <<'EOF'
    # The openvswitch database files must be owned by the appropriate user and its primary group. That the user and its group can be overwritten, recreate them.
    [Service]
    ExecStartPre=/bin/sh -c '/bin/getent passwd openvswitch >/dev/null || useradd -r openvswitch'
    ExecStartPre=/bin/sh -c '/bin/getent group hugetlbfs >/dev/null || groupadd -r hugetlbfs'
    ExecStartPre=/sbin/usermod -a -G hugetlbfs openvswitch
    ExecStartPre=/bin/chown -Rhv openvswitch. /etc/openvswitch
    EOF
    ```

    :::important

    After the {{ microshift_short }} migration to {{ op_system_image }} is complete, this workaround is not needed and can be removed.
    
    :::