{%- set _mod_docs_content_type = "PROCEDURE" %}
# Idling a single service {id="idle-idling-applications-single_{{ context }}"}

Scale down the scalable resources of a specific service to zero replicas to reduce cluster consumption. {._abstract}

**Procedure**

1.  To idle a single service, run:
    ```terminal
    $ oc idle <service>
    ```