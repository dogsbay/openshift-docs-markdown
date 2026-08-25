{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mapping a custom domain to a service by using the Developer perspective {id="serverless-domain-mapping-odc-developer_{{ context }}"}

**Prerequisites**

*   You have logged in to the web console.
*   You are in the **Developer** perspective.
*   The {{ ServerlessOperatorName }} and Knative Serving are installed on your cluster. This must be completed by a cluster administrator.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have created a Knative service and control a custom domain that you want to map to that service.

    :::note

    Your custom domain must point to the IP address of the {{ product_title }} cluster.
    
    :::


**Procedure**

1.  Navigate to the **Topology** page.
1.  Right-click on the service that you want to map to a domain, and select the **Edit** option that contains the service name. For example, if the service is named `example-service`, select the **Edit example-service** option.
1.  In the **Advanced options** section, click **Show advanced Routing options**.
    1.  If the domain mapping CR that you want to map to the service already exists, you can select it in the **Domain mapping** list.
    1.  If you want to create a new domain mapping CR, type the domain name into the box, and select the **Create** option. For example, if you type in `example.com`, the **Create** option is **Create "example.com"**.
1.  Click **Save** to save the changes to your service.

**Verification**

1.  Navigate to the **Topology** page.
1.  Click on the service that you have created.
1.  In the **Resources** tab of the service information window, you can see the domain you have mapped to the service listed under **Domain mappings**.