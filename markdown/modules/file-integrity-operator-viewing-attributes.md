{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing FileIntegrity object attributes {id="viewing-file-integrity-object-attributes_{{ context }}"}

As with any Kubernetes custom resources (CRs), you can run `oc explain fileintegrity`, and then examine the individual attributes. {._abstract}

**Procedure**

*   View the `FileIntegrity` spec attributes by running the following command:
    ```terminal
    $ oc explain fileintegrity.spec
    ```
*   View the `FileIntegrity` config attributes by running the following command:
    ```terminal
    $ oc explain fileintegrity.spec.config
    ```