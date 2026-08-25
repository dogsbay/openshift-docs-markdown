{%- set _mod_docs_content_type = "CONCEPT" %}
# Update {{ microshift_short }} on {{ op_system_ostree }} {id="microshift-rpm-ostree-updates_{{ context }}"}

You can have automated backup and system rollback in case any part of the update fails by using the `rpm-ostree` update path for a new or existing {{ op_system_ostree }} deployment. {._abstract}

*   You can update {{ microshift_short }} on an `rpm-ostree` system such as {{ op_system_ostree }} by building a new system image containing the new version of {{ microshift_short }}.
*   The `rpm-ostree` image can be the same version or an updated version, but the versions of {{ op_system_ostree }} and {{ microshift_short }} must be compatible.

The following features are available in the {{ op_system_ostree }} update path:

*   The system automatically rolls back to an earlier healthy system state if the update fails.
*   You do not need to reinstall applications.
*   You do not need to reinstall Operators.
*   You can update an application without updating {{ microshift_short }} using this update type.
*   The image you build can contain other updates as needed.

To begin a {{ microshift_short }} update by embedding the new version in a {{ op_system_ostree }} image, use the procedures in the following documentation:

*   [Applying updates on a RHEL for Edge system](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/updating/microshift-update-rpms-ostree#microshift-updates-rpms-ostree_microshift-update-rpms-ostree)

To understand more about greenboot, see the following documentation:

*   [The greenboot health check framework](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/getting_ready_to_install_microshift/microshift-greenboot)
*   [Using greenboot for application and workload health checks](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/running_applications/microshift-greenboot-workload-health-checks)