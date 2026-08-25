{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a custom domain mapping by using the Knative CLI {id="serverless-create-domain-mapping-kn_{{ context }}"}

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on your cluster.
*   You have created a Knative service or route, and control a custom domain that you want to map to that CR.

    :::note

    Your custom domain must point to the DNS of the {{ product_title }} cluster.
    
    :::

*   You have installed the Knative (`kn`) CLI.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

*   Map a domain to a CR in the current namespace:
    ```terminal
    $ kn domain create <domain_mapping_name> --ref <target_name>
    ```
    ```terminal title="Example command"
    $ kn domain create example-domain-map --ref example-service
    ```

    The `--ref` flag specifies an Addressable target CR for domain mapping.

    If a prefix is not provided when using the `--ref` flag, it is assumed that the target is a Knative service in the current namespace.
*   Map a domain to a Knative service in a specified namespace:
    ```terminal
    $ kn domain create <domain_mapping_name> --ref <ksvc:service_name:service_namespace>
    ```
    ```terminal title="Example command"
    $ kn domain create example-domain-map --ref ksvc:example-service:example-namespace
    ```
*   Map a domain to a Knative route:
    ```terminal
    $ kn domain create <domain_mapping_name> --ref <kroute:route_name>
    ```
    ```terminal title="Example command"
    $ kn domain create example-domain-map --ref kroute:example-route
    ```