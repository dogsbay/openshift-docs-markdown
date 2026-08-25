{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand feature gates for {{ microshift_short }} {id="microshift-feature-gates-con_{{ context }}"}

As an application developer for edge computing environments, you can now experiment with upcoming Kubernetes features to evaluate their potential benefits for specific use cases. {._abstract}

By using feature gates, you can test various enhancements that might improve performance in your resource-constrained edge environments. For example, you can try advanced CPU management, enhanced scheduling features, or experimental storage options.


:::warning

When you trial new features using feature gates, your {{ microshift_short }} can become unstable or lose data. Enable feature gates only in non-production environments.

:::


When planning to use feature gates for development, consider the following details:

*   After you specify feature gates, you cannot update {{ microshift_short }}.
*   If your configuration is not valid, {{ microshift_short }} can fail to start.
*   The Kubernetes components you enable handle feature gate validation.
*   Feature gates are disabled by default in {{ microshift_short }}. After you enable feature gates, you cannot disable them.