{%- set _mod_docs_content_type = "CONCEPT" %}
# About building Operator catalogs {id="microshift-options-building-operator-catalogs_{{ context }}"}

To use Operator Lifecycle Manager (OLM) with {{ microshift_short }}, you must build custom Operator catalogs that you can then manage with OLM. The standard catalogs that are included with {{ OCP }} are not included with {{ microshift_short }}. {._abstract}

## File-based Operator catalogs {id="microshift-file-based-olm-catalogs_{{ context }}"}

You can create catalogs for your custom Operators or filter catalogs of widely available Operators. You can combine both methods to create the catalogs needed for your specific use case. To run {{ microshift_short }} with your own Operators and OLM, make a catalog by using the file-based catalog structure. For more information, see the following links:

*   [Managing custom catalogs](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ ocp_version }}/html/operators/administrator-tasks#olm-managing-custom-catalogs)
*   [Example catalog](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ ocp_version }}/html/operators/understanding-operators#olm-packaging-format)
*   [`opm` CLI reference](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ ocp_version }}/html/cli_tools/opm-cli#cli-opm-ref)


:::important

*   When adding a catalog source to a cluster, set the `securityContextConfig` value to `restricted` in the `catalogSource.yaml` file. Ensure that your catalog can run with `restricted` permissions. For more information, see:
*   [Adding a catalog source to a cluster](https://access.redhat.com/documentation/en-us/openshift_container_platform/{{ ocp_version }}/html/operators/administrator-tasks#olm-creating-catalog-from-index_olm-restricted-networks)

:::