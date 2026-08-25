{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Getting support {id="ossm-support"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ossm-support" %}

{% leveloffset +1 %}{% include "./modules/support.md" %}{% endleveloffset %}

The `must-gather` tool enables you to collect diagnostic information about your
{{ product_title }} cluster, including virtual machines and other data related to
{{ SMProductName }}. You can send that diagnostic information to support for both {{ product_title }} and {{ SMProductName }}.

{% leveloffset +1 %}{% include "./modules/about-must-gather.md" %}{% endleveloffset %}

### Prerequisites {id="_prerequisites"}

*   Access to the cluster as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
*   The {{ product_title }} CLI (`oc`) installed.

{% leveloffset +1 %}{% include "./modules/ossm-about-collecting-ossm-data.md" %}{% endleveloffset %}