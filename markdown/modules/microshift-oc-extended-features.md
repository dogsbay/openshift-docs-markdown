{%- set _mod_docs_content_type = "CONCEPT" %}
# Extended features of the oc CLI tool {id="microshift-oc-extended-features_{{ context }}"}

The `oc` CLI tool provides the same capabilities as the `kubectl` CLI tool and natively supports additional {{ OCP }} features. Knowing which extended features are available helps you decide when to use `oc` instead of `kubectl`. {._abstract}

The extended {{ OCP }} features include the following:

*   **Route resource**

    The `Route` resource object is specific to {{ OCP }} distributions, and builds upon standard Kubernetes primitives.
*   **Additional commands**

    The additional command `oc new-app`, for example, makes it easier to get new applications started using existing source code or pre-built images.