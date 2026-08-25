---
title: Using the web terminal
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Using the web terminal {id="odc-using-web-terminal"}

{%- set context = "odc-using-web-terminal" %}

You can launch an embedded command-line terminal instance in the web console. This terminal instance is preinstalled with common CLI tools for interacting with the cluster, such as `oc`, `kubectl`,`odo`, `kn`, `tkn`, `helm`, and `subctl`. It also has the context of the project you are working on and automatically logs you in using your credentials. {._abstract}

{% leveloffset +1 %}{% include "./modules/odc-access-web-terminal.md" %}{% endleveloffset %}