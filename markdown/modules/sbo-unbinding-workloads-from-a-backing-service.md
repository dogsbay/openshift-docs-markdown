{%- set _mod_docs_content_type = "PROCEDURE" %}
# Unbinding workloads from a backing service {id="sbo-unbinding-workloads-from-a-backing-service_{{ context }}"}

You can unbind a workload from a backing service by using the `oc` tool. {._abstract}

*   To unbind a workload from a backing service, delete the `ServiceBinding` custom resource (CR) linked to it:
    ```terminal
    $ oc delete ServiceBinding <.metadata.name>
    ```
    ```terminal title="Example"
    $ oc delete ServiceBinding spring-petclinic-pgcluster
    ```

    where:

    `spring-petclinic-pgcluster`
    :   Specifies the name of the `ServiceBinding` CR.