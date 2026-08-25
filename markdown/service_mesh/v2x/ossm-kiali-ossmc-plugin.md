---
title: OpenShift Service Mesh Console plugin
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# OpenShift Service Mesh Console plugin {id="ossm-kiali-ossmc-plugin"}
{%- set context = "ossm-kiali-ossmc-plugin" %}

The {{ SMPlugin }} is an extension to the {{ product_title }} web console that provides visibility into your Service Mesh. With the OSSMC plugin installed, a new **Service Mesh** menu option is available in the navigation menu on the left side of the web console, as well as new **Service Mesh** tabs that enhance the existing **Workloads** and **Services** console pages.


:::important

If you are using a certificate that your browser does not initially trust, you must tell your browser to trust the certificate first before you are able to access the {{ SMPluginShort }}. To do this, go to the Kiali standalone user interface (UI) and tell the browser to accept its certificate.

:::


{% leveloffset +1 %}{% include "./modules/ossm-kiali-ossmc-plugin-user-guide.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-kiali-ossmc-plugin-install-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-kiali-ossmc-plugin-install-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-kiali-ossmc-plugin-uninstall-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-kiali-ossmc-plugin-uninstall-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_ossm-kiali-ossmc-plugin" ._additional-resources}
*   [.spec.kiali.serviceNamespace](https://kiali.io/docs/configuration/ossmconsoles.kiali.io/#.spec.kiali.serviceNamespace)