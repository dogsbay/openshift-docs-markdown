---
title: Performing advanced reference configuration customization
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Performing advanced reference configuration customization {id="advanced-ref-config-customization"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "advanced-ref-config-customization" %}

For scenarios where you want to allow temporary deviations from the reference design, you can apply more advanced customizations. 


:::warning

These customizations override the default matching process that the `cluster-compare` plugin uses during a comparison. Use caution when applying these advanced customizations as it can lead to unintended consequences, such as excluding consequential information from a cluster comparison.

:::


Some advanced tasks to dynamically customize your reference configuration include the following:

*   **Manual matching**: Configure a user configuration file to manually match a custom resource from the cluster to a template in the reference configuration.
*   **Patching the reference**: Patch a reference to configure a reference configuration by using a patch option with the `cluster-compare` command.

{% leveloffset +1 %}{% include "./modules/cluster-compare-manual-match.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-compare-patching.md" %}{% endleveloffset %}