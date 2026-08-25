{%- set _mod_docs_content_type = "CONCEPT" %}
# Determine your OLM installation type {id="microshift-installing-olm-options_{{ context }}"}

You can install Operator Lifecycle Manager (OLM) for use with {{ microshift_short }} 4.16 or newer versions. There are different ways to install OLM for a {{ microshift_short }} node, depending on your use case. {._abstract}

*   You can install the `microshift-olm` RPM at the same time you install the {{ microshift_short }} RPM on {{ op_system_base_full }}.
*   You can install the `microshift-olm` on an existing {{ microshift_short }} {{ product_version }}. Restart the {{ microshift_short }} service after installing OLM for the changes to apply.
*   See the following links for specifics on each installation type:
    *   [Installing the Operator Lifecycle Manager (OLM) from an RPM package](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/4.20/html/installing_optional_rpm_packages/microshift-install-optional-rpms#microshift-installing-with-olm-from-rpm-package_microshift-install-optional-rpm)
    *   [Adding other packages to a blueprint](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/4.20/html/embedding_in_a_rhel_for_edge_image/microshift-embed-in-rpm-ostree#microshift-adding-other-services-to-blueprint_microshift-embed-in-rpm-ostree)