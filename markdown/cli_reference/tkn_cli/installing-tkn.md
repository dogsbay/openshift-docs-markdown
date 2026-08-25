---
title: Installing tkn
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing tkn {id="installing-tkn"}
{%- set context = "installing-tkn" %}

Use the CLI tool to manage {{ pipelines_title }} from a terminal. The following section describes how to install the CLI tool on different platforms.

{% if not (openshift_rosa or openshift_dedicated) %}
You can also find the URL to the latest binaries from the {{ product_title }} web console by clicking the **?** icon in the upper-right corner and selecting **Command Line Tools**.
{% endif %}

{% if not (openshift_enterprise or openshift_dedicated) %}

{%- set FeatureName = "Running {{ pipelines_title }} on ARM hardware" %}
{% include "./snippets/technology-preview.md" %}

{% endif %}


:::note

Both the archives and the RPMs contain the following executables:

*   `tkn`
*   `tkn-pac`
{%- if not (openshift_rosa or openshift_dedicated) %}
*   `opc`
{%- endif %}

:::

{% if not (openshift_rosa or openshift_dedicated) %}
{%- set FeatureName = "Running {{ pipelines_title }} with the `opc` CLI tool" %}
{% include "./snippets/technology-preview.md" %}

{%- endif %}
{% leveloffset +1 %}{% include "./modules/op-installing-tkn-on-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-installing-tkn-on-linux-using-rpm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-installing-tkn-on-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-installing-tkn-on-macos.md" %}{% endleveloffset %}