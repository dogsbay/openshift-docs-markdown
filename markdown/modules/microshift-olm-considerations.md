{%- set _mod_docs_content_type = "CONCEPT" %}
# Considerations for using OLM with {{ microshift_short }} {id="microshift-olm-considerations_{{ context }}"}

You must consider the application of Operators and steps to use them when planning which ones you want to use with your {{ microshift_short }} platform. {._abstract}

*   Cluster Operators as applied in {{ ocp }} are not used in {{ microshift_short }}.
*   You must create your own catalogs for the add-on Operators you want to use with your applications. Catalogs are not provided by default.
    *   Each catalog must have an accessible `CatalogSource` added to a node, so that the OLM catalog Operator can use the catalog for content.
*   You must use the CLI to conduct OLM activities with {{ microshift_short }}. The console and OperatorHub GUIs are not available.
    *   Use the [Operator Package Manager `opm` CLI](https://access.redhat.com/documentation/en-us/openshift_container_platform/{{ ocp_version }}/html/cli_tools/opm-cli#cli-opm-install) with a network-connected node, or for building catalogs for custom Operators that use an internal registry.
    *   To mirror your catalogs and Operators for disconnected or offline nodes, install [the oc-mirror OpenShift CLI plugin](https://docs.openshift.com/container-platform/{{ ocp_version }}/installing/disconnected_install/installing-mirroring-disconnected.html#installation-oc-mirror-installing-plugin_installing-mirroring-disconnected).


    :::important

    Before using an Operator, verify with the provider that the Operator is supported on {{ product_title }}.
    
    :::