{%- set _mod_docs_content_type = "SNIPPET" %}


:::warning

Keeping component versions in a supported configuration of {{ op_system_bundle }} can require updating {{ microshift_short }} and {{ op_system_base }} at the same time. Ensure that your version of {{ op_system_base }} is compatible with the version of {{ microshift_short }} you are updating to, especially if you are updating {{ microshift_short }} across two minor versions. Otherwise, you can create an unsupported configuration, break your node, or both. For more information, see the following link:

*   [Red Hat Device Edge release compatibility matrix](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/getting_ready_to_install_microshift/microshift-install-get-ready#get-ready-install-rhde-compatibility-table_microshift-install-get-ready)

:::