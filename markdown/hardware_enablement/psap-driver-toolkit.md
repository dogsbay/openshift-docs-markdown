---
title: Driver Toolkit
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Driver Toolkit {id="driver-toolkit"}
{%- set context = "driver-toolkit" %}

The Driver Toolkit is a base container image for building driver containers that enable specialized hardware and software devices on {{ product_title }} clusters. {._abstract}

{%- set FeatureName = "The Driver Toolkit" %}

{% leveloffset +1 %}{% include "./modules/psap-driver-toolkit.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/psap-driver-toolkit-pulling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/psap-driver-toolkit-using.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_driver-toolkit-id" ._additional-resources}

*   [Image Registry Operator in {{ product_title }}](/registry/configuring-registry-operator#registry-removed_configuring-registry-operator)