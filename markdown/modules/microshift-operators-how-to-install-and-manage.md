{%- set _mod_docs_content_type = "CONCEPT" %}
# How to use Operators with a {{ microshift_short }} node {id="microshift-operators-how-to-install-and-manage_{{ context }}"}

There are two ways to install and manage Operators for your {{ microshift_short }} node. You can use manifests or Operator Lifecycle Manager (OLM). {._abstract}

## Manifests for Operators {id="microshift-operators-paths-manifests_{{ context }}"}

You can install and manage Operators directly by using manifests. You can use the `kustomize` configuration management tool with {{ microshift_short }} to deploy an application. Use the same steps to install Operators with manifests. For more information, see the following links:

*   [Using Kustomize manifests to deploy applications](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/running_applications/applications-with-microshift)
*   [Using manifests example](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/running_applications/applications-with-microshift#microshift-applying-manifests-example_applications-microshift)

## Operator Lifecycle Manager for Operators {id="microshift-operators-paths-olm_{{ context }}"}

You can also install add-on Operators to a {{ microshift_short }} node by using Operator Lifecycle Manager (OLM). OLM can be used to manage both custom Operators and Operators that are widely available. Building catalogs is required to use OLM with {{ microshift_short }}. For more information, see the following link:

*   [Using Operator Lifecycle Manager with {{ microshift_short }}](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/running_applications/operators#microshift-operators-olm)