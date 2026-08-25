{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the cluster capabilities by setting baseline capability set {id="enabling-baseline-capability-set_{{ context }}"}

As a cluster administrator, you can enable cluster capabilities any time after a {{ product_title }} installation by setting the `baselineCapabilitySet` configuration parameter. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   To set the `baselineCapabilitySet` configuration parameter, run the following command:
    ```terminal
    $ oc patch clusterversion version --type merge -p '{"spec":{"capabilities":{"baselineCapabilitySet":"vCurrent"}}}'
    ```

    For `baselineCapabilitySet` you can specify `vCurrent`, `v{{ product_version }}`{minja}, or `None`.