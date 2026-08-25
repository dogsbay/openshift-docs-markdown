---
title: Content Security Policy (CSP)
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Content Security Policy (CSP) {id="content-security-policy_{{ context }}"}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "content-security-policy" %}

Specify Content Security Policy (CSP) directives for your dynamic plugin using the `contentSecurityPolicy` field in `ConsolePluginSpec`. CSP restricts which sources supply scripts, styles, images, and fonts, mitigating risks for plugins loading resources externally.


:::important

The console currently uses the `Content-Security-Policy-Report-Only` response header, so the browser will only warn about CSP violations in the web console and enforcement of CSP policies will be limited. CSP violations will be logged in the browser console, but the associated CSP directives will not be enforced. This feature is behind a `feature-gate`, so you will need to manually enable it.

:::


{% leveloffset +1 %}{% include "./modules/csp-overview.md" %}{% endleveloffset %}

## Additional resources {id="content-security-policy_additional-resources"}

*   [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
{%- if not (openshift_rosa_hcp or openshift_rosa) %}
*   [Enabling feature sets using the web console](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features-console_nodes-cluster-enabling)
{% endif %}