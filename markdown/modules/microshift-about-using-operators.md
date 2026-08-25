{%- set _mod_docs_content_type = "CONCEPT" %}
# About using Operators with a {{ microshift_short }} node {id="microshift-about-using-operators_{{ context }}"}

You can use Operators to manage applications and their resources, such as deploying a database or message bus. {._abstract}

Operators offer a more localized configuration experience and integrate with Kubernetes APIs and CLI tools such as `kubectl` and `oc`. You can design or use Operators that are specifically for your applications. By using Operators, you can configure components instead of modifying a global configuration file.

{{ microshift_short }} applications are generally expected to be deployed in static environments. However, Operators are available if helpful in your use case. To discover whether an Operator is compatible with {{ microshift_short }}, check the Operator documentation.