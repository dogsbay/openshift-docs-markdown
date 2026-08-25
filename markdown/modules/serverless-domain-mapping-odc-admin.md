{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mapping a custom domain to a service by using the Administrator perspective {id="serverless-domain-mapping-odc-admin_{{ context }}"}

{% include "./snippets/serverless-domain-mapping.md" %}

{% if openshift_enterprise %}
If you have cluster administrator permissions, you can create a `DomainMapping` custom resource (CR) by using the **Administrator** perspective in the {{ product_title }} web console.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
If you have cluster or dedicated administrator permissions, you can create a `DomainMapping` custom resource (CR) by using the **Administrator** perspective in the {{ product_title }} web console.
{% endif %}

**Prerequisites**

*   You have logged in to the web console.
*   You are in the **Administrator** perspective.
*   You have installed the {{ ServerlessOperatorName }}.
*   You have installed Knative Serving.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have created a Knative service and control a custom domain that you want to map to that service.

    :::note

    Your custom domain must point to the IP address of the {{ product_title }} cluster.
    
    :::


**Procedure**

1.  Navigate to **CustomResourceDefinitions** and use the search box to find the **DomainMapping** custom resource definition (CRD).
1.  Click the **DomainMapping** CRD, then navigate to the **Instances** tab.
1.  Click **Create DomainMapping**.
1.  Modify the YAML for the `DomainMapping` CR so that it includes the following information for your instance:
    ```yaml
    apiVersion: serving.knative.dev/v1alpha1
    kind: DomainMapping
    metadata:
     name: <domain_name> (1)
     namespace: <namespace> (2)
    spec:
     ref:
       name: <target_name> (3)
       kind: <target_type> (4)
       apiVersion: serving.knative.dev/v1
    ```
    1.  The custom domain name that you want to map to the target CR.
    1.  The namespace of both the `DomainMapping` CR and the target CR.
    1.  The name of the target CR to map to the custom domain.
    1.  The type of CR being mapped to the custom domain.
    ```yaml title="Example domain mapping to a Knative service"
    apiVersion: serving.knative.dev/v1alpha1
    kind: DomainMapping
    metadata:
     name: custom-ksvc-domain.example.com
     namespace: default
    spec:
     ref:
       name: example-service
       kind: Service
       apiVersion: serving.knative.dev/v1
    ```

**Verification**

*   Access the custom domain by using a `curl` request. For example:
    ```terminal title="Example command"
    $ curl custom-ksvc-domain.example.com
    ```
    ```terminal title="Example output"
    Hello OpenShift!
    ```