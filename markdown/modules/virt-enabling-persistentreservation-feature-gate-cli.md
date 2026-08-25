{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the PersistentReservation feature gate by using the CLI {id="virt-enabling-persistentreservation-feature-gate-cli_{{ context }}"}

You can enable the `persistentReservation` feature gate by using the command line. Enabling the feature gate requires cluster administrator privileges. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Enable the `persistentReservation` feature gate by running the following command:
    ```terminal {minja}
    $ oc patch {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} --type json -p \
    '[{"op":"replace","path":"/spec/featureGates/persistentReservation", "value": true}]'
    ```